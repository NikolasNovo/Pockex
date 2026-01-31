// src/index.ts
export default {
  async fetch(req: Request, env: Env) {
    const { fiats, cryptos } = parseRequest(req);

    const fixerKey = `fixer:${fiats.sort().join(",")}`;
    const cgKey = `cg:${cryptos.sort().join(",")}`;

    const cachedFixer = await env.RATES_KV.get(fixerKey, { type: "json" });
    const cachedCg = await env.RATES_KV.get(cgKey, { type: "json" });

    const now = Date.now();
    const ttl = 60 * 60 * 3; // 3 часа

    let fixerRates = cachedFixer;
    if (!fixerRates) {
      fixerRates = await fetchFixer(fiats, env.FIXER_API_KEY);
      await env.RATES_KV.put(fixerKey, JSON.stringify(fixerRates), {
        expirationTtl: ttl,
      });
    }

    let cgRates = cachedCg;
    if (!cgRates) {
      cgRates = await fetchCoingecko(cryptos, env.COINGECKO_API_KEY);
      await env.RATES_KV.put(cgKey, JSON.stringify(cgRates), {
        expirationTtl: ttl,
      });
    }

    return jsonResponse({ fixer: fixerRates, cg: cgRates, updatedAt: now });
  },
};
