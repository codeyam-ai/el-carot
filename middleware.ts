import { NextRequest, NextResponse } from 'next/server';

type Lang = 'es' | 'en';

const SPANISH_LOCALE = /(^|,)\s*es\b/i;

function detectFromAcceptLanguage(header: string | null): Lang {
  if (!header) return 'en';
  return SPANISH_LOCALE.test(header) ? 'es' : 'en';
}

/**
 * Resolve the UI language server-side on every request so the page is rendered
 * in the right language with no client flash:
 *   ?lang=es|en override  ->  existing cookie  ->  Accept-Language header.
 * The chosen value is forwarded to the layout via the `x-carot-lang` request
 * header (same request) and persisted in the `carot_lang` cookie (next requests).
 */
export function middleware(req: NextRequest) {
  const urlLang = req.nextUrl.searchParams.get('lang');
  const cookieLang = req.cookies.get('carot_lang')?.value;

  let lang: Lang;
  if (urlLang === 'es' || urlLang === 'en') lang = urlLang;
  else if (cookieLang === 'es' || cookieLang === 'en') lang = cookieLang;
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
