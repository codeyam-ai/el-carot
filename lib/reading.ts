import { cardText, type Card, type Lang } from '@/data/cards';
import type { Strings } from '@/lib/i18n';

const ORIGIN_ROUTE: Record<string, string> = {
  message: '/message',
  question: '/question',
  gallery: '/gallery',
  home: '/',
};

/** Where "back" goes from a reading opened from `origin`; unknown origins go home. */
export function originRoute(origin: string): string {
  return ORIGIN_ROUTE[origin] ?? '/';
}

/** The desktop nav title for a reading opened from `origin`. */
export function navTitleFor(origin: string, t: Strings): string {
  if (origin === 'message') return t.messageTitle;
  if (origin === 'question') return t.questionTitle;
  if (origin === 'gallery') return t.galleryTitle;
  return t.dailyLabel;
}

/** The arcanum eyebrow under the character's name, e.g. "Arcano IX · El Ermitaño". */
export function arcanumLine(card: Card, t: Strings): string {
  return `${t.arcanum} ${card.rom} · ${card.arcana}`;
}

/**
 * The reading's body text: the written meaning, or — when a question was asked —
 * the pending message while the AI reads, then its interpretation (falling back
 * to the meaning when none came back).
 */
export function readingBody({
  card,
  lang,
  t,
  question,
  interpreting,
  interpretation,
}: {
  card: Card;
  lang: Lang;
  t: Strings;
  question: string | null;
  interpreting: boolean;
  interpretation: string | null;
}): { text: string; pending: boolean } {
  if (question && interpreting) return { text: t.interpreting, pending: true };
  if (question && interpretation) return { text: interpretation, pending: false };
  return { text: cardText(card, 'meaning', lang), pending: false };
}
