// Sharing a reading: a pure, testable URL/text builder plus a runtime helper
// that prefers the native share sheet and falls back to copying the link.

import { cardText, type Card, type Lang } from '@/data/cards';

/**
 * Build a direct, shareable URL to a card's reading, e.g.
 * `https://elcarot.app/reading?n=0`. Pure — `baseUrl` is injected so this is
 * unit-testable without a browser. No `origin` query is added: a recipient
 * should land on a clean reading whose Back button goes home.
 */
export function buildReadingUrl(card: Card, baseUrl: string): string {
  const u = new URL('/reading', baseUrl);
  u.searchParams.set('n', String(card.n));
  return u.toString();
}

/** The text shown in the native share sheet: character, arcana, and quote. Pure. */
export function buildShareText(card: Card, lang: Lang): string {
  return `${card.name} — ${card.arcana}\n“${cardText(card, 'quote', lang)}”`;
}

export type ShareResult = 'shared' | 'copied' | 'failed';

/**
 * Share a reading. On devices with the Web Share API (mobile) this opens the
 * native sheet; otherwise (most desktops) it copies the direct link to the
 * clipboard. Returns what actually happened so the caller can show feedback.
 */
export async function shareReading(card: Card, lang: Lang): Promise<ShareResult> {
  const url = buildReadingUrl(card, window.location.origin);
  const text = buildShareText(card, lang);

  if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
    try {
      await navigator.share({ title: 'El Carot', text, url });
      return 'shared';
    } catch (err) {
      // The user dismissing the sheet throws AbortError — treat as a no-op,
      // not a reason to silently copy instead.
      if (err instanceof DOMException && err.name === 'AbortError') return 'failed';
      // Any other failure (e.g. share unsupported for this payload) → copy.
    }
  }

  try {
    await navigator.clipboard.writeText(url);
    return 'copied';
  } catch {
    return 'failed';
  }
}
