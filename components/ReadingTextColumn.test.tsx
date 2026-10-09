import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ReadingTextColumn } from './ReadingTextColumn';
import { STRINGS } from '@/lib/i18n';
import { CAROT_CARDS, cardText } from '@/data/cards';

const hermit = CAROT_CARDS[9];
const noop = () => {};
const render = (question: string | null, lang: 'es' | 'en' = 'es') =>
  renderToStaticMarkup(
    <ReadingTextColumn
      card={hermit}
      lang={lang}
      t={STRINGS[lang]}
      question={question}
      body={{ text: 'La interpretación.', pending: false }}
      savingImage={false}
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

describe('ReadingTextColumn', () => {
  // with a question the order is question, name, arcanum, then the interpretation
  it('orders question, name, arcanum and interpretation', () => {
    const html = render('¿Salto?');
    const q = at(html, '¿Salto?');
    const name = at(html, hermit.name);
    const arc = at(html, `Arcano IX · ${hermit.arcana}`);
    const body = at(html, 'La interpretación.');
    expect(q).toBeLessThan(name);
    expect(name).toBeLessThan(arc);
    expect(arc).toBeLessThan(body);
  });

  // the old "Tu pregunta" label is gone
  it('does not label the question', () => {
    expect(render('¿Salto?')).not.toContain(STRINGS.es.yourQuestion);
  });

  // the card quote only shows when no question was asked
  it('shows the quote only without a question', () => {
    const quote = cardText(hermit, 'quote', 'es');
    expect(render(null)).toContain(quote);
    expect(render('¿Salto?')).not.toContain(quote);
  });

  // without a question the name still leads, then the arcanum and the quote
  it('opens with the name without a question', () => {
    const html = render(null);
    expect(at(html, hermit.name)).toBeLessThan(at(html, 'Arcano IX'));
    expect(at(html, 'Arcano IX')).toBeLessThan(at(html, cardText(hermit, 'quote', 'es')));
  });

  // the actions row leads with the draw-another button, then share and download image
  it('renders the actions row in order', () => {
    const html = render(null, 'en');
    expect(at(html, STRINGS.en.drawAnother)).toBeLessThan(at(html, STRINGS.en.share));
    expect(at(html, STRINGS.en.share)).toBeLessThan(at(html, STRINGS.en.download));
    expect(html).toContain('Arcanum IX');
  });
});
