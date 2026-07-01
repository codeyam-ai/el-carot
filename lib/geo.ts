// Coarse, privacy-conscious geo pulled from Vercel's IP headers. No IP address
// or precise location is ever read or stored — only country, region and the
// browser-adjacent timezone, and only "when available" (null off-Vercel/local).

export interface Geo {
  country: string | null;
  region: string | null;
  timezone: string | null;
}

/** Read the coarse geo fields Vercel injects on the incoming request. */
export function geoFromHeaders(h: Headers): Geo {
  return {
    country: h.get('x-vercel-ip-country') || null,
    region: h.get('x-vercel-ip-country-region') || null,
    timezone: h.get('x-vercel-ip-timezone') || null,
  };
}

/** UTC calendar-day key, `YYYY-MM-DD` — the identity of "the card of the day". */
export function utcDateKey(d: Date): string {
  return d.toISOString().slice(0, 10);
}
