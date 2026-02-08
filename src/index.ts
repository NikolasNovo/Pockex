export interface Env {
  RATES_KV: KVNamespace;

  // Secrets (Cloudflare → Worker → Settings → Variables → Secret)
  FIXER_API_KEY: string;
  COINGECKO_API_KEY: string;
  REFRESH_TOKEN: string;
}

// KV keys
const SNAPSHOT_KEY = "rates:snapshot";
const META_KEY = "rates:meta";

// 3 hours in ms
const COOLDOWN_MS = 3 * 60 * 60 * 1000;

type Meta = {
  updatedAt: number; // epoch ms
  // what we refreshed with (so you know what’s inside)
  baseFiat?: string;
  fiatSymbols?: string[];
  cryptoIds?: string[];
  vsCurrencies?: string[];
};

type Snapshot = {
  updatedAt: number; // epoch ms
  fixer: any;
  coingecko: any;
};

function json(data: unknown, status = 200, headers?: Record<string, string>) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...(headers ?? {}),
    },
  });
}

function text(data: string, status = 200) {
  return new Response(data, {
    status,
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
  });
}

function getBearerToken(req: Request): string | null {
  const auth = req.headers.get("authorization") || req.headers.get("Authorization");
  if (!auth) return null;
  const m = auth.match(/^Bearer\s+(.+)$/i);
  return m ? m[1].trim() : null;
}

function parseCsv(value: string | null): string[] | null {
  if (!value) return null;
  const parts = value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.length ? parts : null;
}

async function readMeta(env: Env): Promise<Meta | null> {
  const meta = await env.RATES_KV.get<Meta>(META_KEY, { type: "json" });
  return meta ?? null;
}

async function writeMeta(env: Env, meta: Meta): Promise<void> {
  await env.RATES_KV.put(META_KEY, JSON.stringify(meta));
}

async function readSnapshot(env: Env): Promise<Snapshot | null> {
  const snap = await env.RATES_KV.get<Snapshot>(SNAPSHOT_KEY, { type: "json" });
  return snap ?? null;
}

async function writeSnapshot(env: Env, snapshot: Snapshot): Promise<void> {
  await env.RATES_KV.put(SNAPSHOT_KEY, JSON.stringify(snapshot));
}

/**
 * Fixer: latest rates
 * Note: depending on Fixer plan, "base" may be fixed (often EUR). We store response as-is.
 * If you need strict USD base normalization, do it inside this function (optional).
 */
async function fetchFixerLatest(fiatSymbols: string[] | null, env: Env) {
  const url = new URL("https://data.fixer.io/api/latest");
  url.searchParams.set("access_key", env.FIXER_API_KEY);

  // If your plan supports symbols limiting, keep it (reduces payload).
  // If not supported, Fixer may ignore or error depending on plan.
  if (fiatSymbols && fiatSymbols.length) {
    url.searchParams.set("symbols", fiatSymbols.join(","));
  }

  const resp = await fetch(url.toString(), { headers: { Accept: "application/json" } });
  const body = await resp.text();

  if (!resp.ok) {
    throw new Error(`Fixer HTTP ${resp.status}: ${body.slice(0, 500)}`);
  }

  let jsonBody: any;
  try {
    jsonBody = JSON.parse(body);
  } catch {
    throw new Error(`Fixer invalid JSON: ${body.slice(0, 500)}`);
  }

  if (jsonBody && jsonBody.success === false) {
    // Fixer часто отдаёт { success:false, error:{...} }
    throw new Error(`Fixer API error: ${JSON.stringify(jsonBody.error ?? jsonBody).slice(0, 500)}`);
  }

  return jsonBody;
}

/**
 * CoinGecko simple price
 * ids: crypto ids (e.g. bitcoin,ethereum)
 * vs: fiat currencies lowercased (e.g. usd,eur,krw)
 */
async function fetchCoinGeckoSimplePrice(cryptoIds: string[], vsCurrencies: string[], env: Env) {
  const url = new URL("https://api.coingecko.com/api/v3/simple/price");
  url.searchParams.set("ids", cryptoIds.join(","));
  url.searchParams.set("vs_currencies", vsCurrencies.join(","));

  // Some plans might use key header or query; adjust if your plan requires.
  // If your COINGECKO_API_KEY is a demo/pro key that must be sent as header:
  // Example header name varies by plan; keep it off unless you know it’s required.
  const headers: Record<string, string> = { Accept: "application/json" };

  const resp = await fetch(url.toString(), { headers });
  const body = await resp.text();

  if (!resp.ok) {
    throw new Error(`CoinGecko HTTP ${resp.status}: ${body.slice(0, 500)}`);
  }

  let jsonBody: any;
  try {
    jsonBody = JSON.parse(body);
  } catch {
    throw new Error(`CoinGecko invalid JSON: ${body.slice(0, 500)}`);
  }

  return jsonBody;
}

function nowMs() {
  return Date.now();
}

function msToHuman(ms: number) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${h}h ${m}m ${sec}s`;
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);

    // 1) health
    if (url.pathname === "/health") {
      return text("ok");
    }

    // 2) GET /rates - read only
    if (url.pathname === "/rates" && req.method === "GET") {
      const snapshot = await readSnapshot(env);
      const meta = await readMeta(env);

      if (!snapshot || !meta) {
        return json(
          {
            ok: false,
            message: "No rates yet. Call POST /refresh first (authorized).",
          },
          404
        );
      }

      return json({
        ok: true,
        updatedAt: meta.updatedAt,
        updatedAtIso: new Date(meta.updatedAt).toISOString(),
        meta,
        data: snapshot,
      });
    }

    // 3) POST /refresh - manual refresh only
    if (url.pathname === "/refresh" && req.method === "POST") {
      // 3.1 Auth
      const token = getBearerToken(req);
      if (!token || token !== env.REFRESH_TOKEN) {
        return json({ ok: false, error: "Unauthorized" }, 401, {
          "www-authenticate": 'Bearer realm="pockex-rates"',
        });
      }

      // 3.2 Cooldown check (global)
      const meta = await readMeta(env);
      const now = nowMs();

      if (meta?.updatedAt) {
        const elapsed = now - meta.updatedAt;
        if (elapsed < COOLDOWN_MS) {
          const remaining = COOLDOWN_MS - elapsed;
          return json(
            {
              ok: false,
              error: "Too early. Global refresh cooldown is 3 hours.",
              updatedAt: meta.updatedAt,
              updatedAtIso: new Date(meta.updatedAt).toISOString(),
              retryAfterMs: remaining,
              retryAfterHuman: msToHuman(remaining),
            },
            429,
            { "retry-after": String(Math.ceil(remaining / 1000)) }
          );
        }
      }

      // 3.3 Decide what to refresh
      // You can control via query params:
      // /refresh?fiats=USD,EUR,KRW&cryptos=bitcoin,ethereum&vs=usd,eur,krw
      //
      // If not provided:
      // - fiats: null (let Fixer return its default set)
      // - cryptos: default bitcoin,ethereum
      // - vs: default usd,eur,krw
      const fiats = parseCsv(url.searchParams.get("fiats"))?.map((s) => s.toUpperCase()) ?? null;

      const cryptoIds =
        parseCsv(url.searchParams.get("cryptos"))?.map((s) => s.toLowerCase()) ?? ["bitcoin", "ethereum"];

      const vs =
        parseCsv(url.searchParams.get("vs"))?.map((s) => s.toLowerCase()) ?? ["usd", "eur", "krw"];

      // 3.4 Fetch both sources
      let fixerData: any;
      let cgData: any;

      try {
        // Parallel fetch
        [fixerData, cgData] = await Promise.all([
          fetchFixerLatest(fiats, env),
          fetchCoinGeckoSimplePrice(cryptoIds, vs, env),
        ]);
      } catch (e: any) {
        return json(
          {
            ok: false,
            error: "Refresh failed",
            details: String(e?.message ?? e),
          },
          502
        );
      }

      // 3.5 Save snapshot + meta (global)
      const newMeta: Meta = {
        updatedAt: now,
        fiatSymbols: fiats ?? undefined,
        cryptoIds,
        vsCurrencies: vs,
      };

      const snapshot: Snapshot = {
        updatedAt: now,
        fixer: fixerData,
        coingecko: cgData,
      };

      await writeSnapshot(env, snapshot);
      await writeMeta(env, newMeta);

      return json({
        ok: true,
        message: "Refreshed",
        updatedAt: newMeta.updatedAt,
        updatedAtIso: new Date(newMeta.updatedAt).toISOString(),
        meta: newMeta,
      });
    }

    return json({ ok: false, error: "Not found" }, 404);
  },
};

