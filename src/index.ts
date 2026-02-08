export interface Env {
  RATES_KV: KVNamespace;

  FIXER_API_KEY: string;
  COINGECKO_API_KEY: string;

  REFRESH_TOKEN: string;
}

const FREE_META_KEY = "free:meta";
const FREE_SNAPSHOT_KEY = "free:snapshot";
const FREE_COOLDOWN_MS = 3 * 60 * 60 * 1000; // 3 hours

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
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function nowMs() {
  return Date.now();
}

function getBearerToken(req: Request): string | null {
  const auth = req.headers.get("authorization") || req.headers.get("Authorization");
  if (!auth) return null;
  const m = auth.match(/^Bearer\s+(.+)$/i);
  return m ? m[1].trim() : null;
}

// -------- Fetch from Fixer / CoinGecko --------
async function fetchFixer(env: Env) {
  const url = new URL("https://data.fixer.io/api/latest");
  url.searchParams.set("access_key", env.FIXER_API_KEY);

  const resp = await fetch(url.toString(), { headers: { Accept: "application/json" } });
  const body = await resp.text();

  if (!resp.ok) throw new Error(`Fixer HTTP ${resp.status}: ${body.slice(0, 300)}`);

  const j = JSON.parse(body);
  if (j?.success === false) throw new Error(`Fixer API error: ${JSON.stringify(j.error ?? j).slice(0, 300)}`);
  return j;
}

async function fetchCoinGecko(env: Env) {
  // Минимум для теста. Потом расширишь под свои списки.
  const ids = ["bitcoin", "ethereum"];
  const vs = ["usd", "eur", "krw"];

  const url = new URL("https://api.coingecko.com/api/v3/simple/price");
  url.searchParams.set("ids", ids.join(","));
  url.searchParams.set("vs_currencies", vs.join(","));

  const resp = await fetch(url.toString(), { headers: { Accept: "application/json" } });
  const body = await resp.text();

  if (!resp.ok) throw new Error(`CoinGecko HTTP ${resp.status}: ${body.slice(0, 300)}`);

  return JSON.parse(body);
}

async function buildSnapshot(env: Env) {
  const [fixer, coingecko] = await Promise.all([fetchFixer(env), fetchCoinGecko(env)]);
  const updatedAt = nowMs();
  return {
    updatedAt,
    updatedAtIso: new Date(updatedAt).toISOString(),
    fixer,
    coingecko,
  };
}

// -------- Handlers --------
async function handleFreeGet(env: Env) {
  const meta = await env.RATES_KV.get<{ updatedAt: number }>(FREE_META_KEY, { type: "json" });
  const snap = await env.RATES_KV.get<any>(FREE_SNAPSHOT_KEY, { type: "json" });

  if (!meta || !snap) {
    return json(
      {
        ok: false,
        message: "No free snapshot yet. Call POST /admin/refresh-free with REFRESH_TOKEN.",
      },
      404
    );
  }

  return json({
    ok: true,
    plan: "free",
    updatedAt: meta.updatedAt,
    updatedAtIso: new Date(meta.updatedAt).toISOString(),
    data: snap,
  });
}

async function handleFreeRefresh(req: Request, env: Env) {
  const token = getBearerToken(req);
  if (!token || token !== env.REFRESH_TOKEN) {
    return json({ ok: false, error: "Unauthorized" }, 401, {
      "www-authenticate": 'Bearer realm="pockex-rates-admin"',
    });
  }

  const meta = await env.RATES_KV.get<{ updatedAt: number }>(FREE_META_KEY, { type: "json" });
  const now = nowMs();

  if (meta?.updatedAt && now - meta.updatedAt < FREE_COOLDOWN_MS) {
    const remainingMs = FREE_COOLDOWN_MS - (now - meta.updatedAt);
    const retryAfterSec = Math.ceil(remainingMs / 1000);
    return json(
      {
        ok: false,
        error: "Too early. Free refresh cooldown is 3 hours (global).",
        updatedAt: meta.updatedAt,
        updatedAtIso: new Date(meta.updatedAt).toISOString(),
        retryAfterSec,
      },
      429,
      { "retry-after": String(retryAfterSec) }
    );
  }

  try {
    const snapshot = await buildSnapshot(env);
    await env.RATES_KV.put(FREE_SNAPSHOT_KEY, JSON.stringify(snapshot));
    await env.RATES_KV.put(FREE_META_KEY, JSON.stringify({ updatedAt: snapshot.updatedAt }));

    return json({
      ok: true,
      refreshed: true,
      plan: "free",
      updatedAt: snapshot.updatedAt,
      updatedAtIso: snapshot.updatedAtIso,
    });
  } catch (e: any) {
    return json({ ok: false, error: "Refresh failed", details: String(e?.message ?? e) }, 502);
  }
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);

    if (url.pathname === "/health") return text("ok");

    if (url.pathname === "/rates/free" && req.method === "GET") {
      return handleFreeGet(env);
    }

    if (url.pathname === "/admin/refresh-free" && req.method === "POST") {
      return handleFreeRefresh(req, env);
    }

    return json({ ok: false, error: "Not found" }, 404);
  },
};
