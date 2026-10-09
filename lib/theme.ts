export type Theme = 'light' | 'dark';

export const THEME_COOKIE = 'carot_theme';

/** Page colour per theme — kept in step with `--surface-page` in globals.css (browser chrome). */
export const THEME_COLOR: Record<Theme, string> = { dark: '#202020', light: '#d1c3b4' };

function isTheme(v: string | null | undefined): v is Theme {
  return v === 'light' || v === 'dark';
}

/**
 * The visitor's explicit theme choice, if any: a `?theme=light|dark` URL
 * override wins, then the saved cookie. `null` means no choice was made, so the
 * device's light/dark setting decides (via NO_FLASH_SCRIPT).
 */
export function savedTheme(urlValue: string | null | undefined, cookieValue: string | null | undefined): Theme | null {
  if (isTheme(urlValue)) return urlValue;
  if (isTheme(cookieValue)) return cookieValue;
  return null;
}

/**
 * Runs inline in <head> before first paint when there is no saved choice, so a
 * light-setting device never flashes the dark page. Must stay self-contained.
 */
export const NO_FLASH_SCRIPT = `try{var d=document.documentElement;if(!d.dataset.theme){d.dataset.theme=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}}catch(e){}`;

/** The theme currently on the page (set by the server or the no-flash script). */
export function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

/** Apply a theme and remember it (cookie so the next server render matches, plus localStorage). */
export function setTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', THEME_COLOR[theme]));
  try {
    document.cookie = `${THEME_COOKIE}=${theme};path=/;max-age=${60 * 60 * 24 * 365}`;
  } catch {
    /* cookies unavailable */
  }
  try {
    localStorage.setItem(THEME_COOKIE, theme);
  } catch {
    /* storage unavailable */
  }
}
