import type { Lang } from '@/data/cards';

const MESES_ES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];
const MONTHS_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * Deterministic "card of the day": the same card for the whole local calendar
 * day. Hashes Y/M/D into a deck index, matching the design prototype.
 */
export function dailyCardIndex(date: Date, deckSize: number): number {
  const key = '' + date.getFullYear() + (date.getMonth() + 1) + date.getDate();
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return h % deckSize;
}

/** The drawn date, formatted for the daily badge in the active language. */
export function formatDailyDate(date: Date, lang: Lang): string {
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();
  return lang === 'en' ? `${MONTHS_EN[m]} ${d}, ${y}` : `${d} de ${MESES_ES[m]} de ${y}`;
}
