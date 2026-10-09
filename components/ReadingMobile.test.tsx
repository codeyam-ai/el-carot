import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { STRINGS } from '@/lib/i18n';
import { CAROT_CARDS, cardText } from '@/data/cards';

// The header needs the router and the language context; the reading body does not.
vi.mock('@/components/BackHeader', () => ({ BackHeader: () => null }));

const { ReadingMobile } = await import('./ReadingMobile');

const hermit = CAROT_CARDS[9];
const noop = () => {};
const render = (question: string | null, lang: 'es' | 'en' = 'es', savingImage = false) =>
  renderToStaticMarkup(
    <ReadingMobile
      card={hermit}
      lang={lang}
      t={STRINGS[lang]}
      dailyDate={null}
      flipped
      question={question}
      body={{ text: 'La interpretación.', pending: false }}
      savingImage={savingImage}
      onBack={noop}
      onShare={noop}
      onDownload={noop}
    />,
  );
const at = (html: string, s: string) => {
  const i = html.indexOf(s);
  expect(i, `missing: ${s}`).toBeGreaterThanOrEqual(0);
  return i;
};

describe('ReadingMobile', () => {
  // with a question the order is question, name, arcanum, then the interpretation
  it('orders question, name, arcanum and interpretation', () => {
    const html = render('¿Salto?');
    expect(at(html, '¿Salto?')).toBeLessThan(at(html, `>${hermit.name}<`));
    expect(at(html, `>${hermit.name}<`)).toBeLessThan(at(html, 'Arcano IX'));
    expect(at(html, 'Arcano IX')).toBeLessThan(at(html, 'La interpretación.'));
  });

  // the old "Tu pregunta" label is gone
  it('does not label the question', () => {
    expect(render('¿Salto?')).not.toContain(STRINGS.es.yourQuestion);
  });

  // the quote shows only without a question
  it('shows the quote only without a question', () => {
    const quote = cardText(hermit, 'quote', 'es');
    expect(render(null)).toContain(quote);
    expect(render('¿Salto?')).not.toContain(quote);
  });

  // the actions put draw-another first, then share and the short download label
  it('renders draw-another above share and download', () => {
    const html = render(null, 'en');
    expect(at(html, STRINGS.en.drawAnother)).toBeLessThan(at(html, `${STRINGS.en.share}<`));
    expect(at(html, `${STRINGS.en.share}<`)).toBeLessThan(at(html, `${STRINGS.en.downloadShort}<`));
    expect(html).not.toContain(STRINGS.en.download);
  });

  // the download button is disabled while the image is being saved
  it('disables download while saving the image', () => {
    expect(render(null, 'es', true)).toMatch(/disabled=""[^>]*>.*?Descargar</);
  });
});
