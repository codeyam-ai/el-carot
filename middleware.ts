import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

type Lang = 'es' | 'en';

const SPANISH_LOCALE = /(^|,)\s*es\b/i;

// Countries whose visitors default to Spanish regardless of their browser locale
// (Spain + Latin America + Equatorial Guinea + Puerto Rico). Coarse IP geo, from Vercel.
const SPANISH_COUNTRIES = new Set([
  'AR', 'ES', 'MX', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU',
  'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'GQ', 'PR',
]);

function detectFromAcceptLanguage(header: string | null): Lang {
  if (!header) return 'en';
  return SPANISH_LOCALE.test(header) ? 'es' : 'en';
}

/**
 * Resolve the UI language server-side on every request so the page is rendered
 * in the right language with no client flash:
 *   ?lang=es|en override  ->  saved cookie  ->  country (Vercel IP geo)  ->
 *   Accept-Language header.
 * A visitor opening from a Spanish-speaking country defaults to Spanish even if
 * their browser is set to English. The chosen value is forwarded to the layout
 * via the `x-carot-lang` request header (same request) and persisted in the
 * `carot_lang` cookie (next requests).
 */
export function middleware(req: NextRequest) {
  const urlLang = req.nextUrl.searchParams.get('lang');
  const cookieLang = req.cookies.get('carot_lang')?.value;
  const country = (req.headers.get('x-vercel-ip-country') || '').toUpperCase();

  let lang: Lang;
  if (urlLang === 'es' || urlLang === 'en') lang = urlLang;
  else if (cookieLang === 'es' || cookieLang === 'en') lang = cookieLang;
  else if (SPANISH_COUNTRIES.has(country)) lang = 'es';
  else lang = detectFromAcceptLanguage(req.headers.get('accept-language'));

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-carot-lang', lang);

  const res = NextResponse.next({ request: { headers: requestHeaders } });
  if (cookieLang !== lang) {
    res.cookies.set('carot_lang', lang, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  }
  return res;
}

export const config = {
  // Skip Next internals and static assets — only resolve language for pages.
  matcher: ['/((?!_next/|assets/|fonts/|favicon.ico).*)'],
};
