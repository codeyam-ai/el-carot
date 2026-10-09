// Shared fixtures for the reading-screen isolation sidecars (CardReading's
// sub-components). Not a component — data only.
import { CAROT_CARDS, cardText } from '@/data/cards';
import { STRINGS } from '@/lib/i18n';

export const HERMIT = CAROT_CARDS[9]; // Confucio — El Ermitaño
export const QUESTION = '¿Debería dejar mi trabajo para dedicarme a la música?';
export const INTERPRETATION =
  'El Ermitaño no te empuja a saltar: te invita a apagar el ruido antes de decidir. Confucio camina con su lámpara, despacio, iluminando solo el próximo paso. Antes de renunciar, date un tiempo a solas con la música — componé, tocá, escuchate — y mirá si ese llamado se sostiene en el silencio.';
export const MEANING = cardText(HERMIT, 'meaning', 'es');
export const QUOTE = cardText(HERMIT, 'quote', 'es');
export const ES = STRINGS.es;
export const EN = STRINGS.en;
export const DAILY_DATE = 'Jueves 8 de octubre';
export const noop = () => {};

/** Capture frame: the screen background, at a phone (390) or desktop column width. */
export const frame = (width: number | string, padding: number | string = 0) => ({
  background: 'var(--carot-screen)',
  width,
  padding,
  boxSizing: 'border-box' as const,
});
