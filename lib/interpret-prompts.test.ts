import { describe, it, expect } from 'vitest';
import { buildInterpretPrompt } from './interpret-prompts';
import { CAROT_CARDS } from '@/data/cards';

const loco = CAROT_CARDS[0]; // Charly García — El Loco

describe('buildInterpretPrompt', () => {
  // the Spanish prompt uses voseo and the El Carot persona
  it('builds a Spanish prompt with voseo and the persona', () => {
    const p = buildInterpretPrompt(loco, '¿Y el trabajo?', 'es');
    expect(p).toContain('Sos El Carot');
    expect(p).toContain('voseo');
    expect(p).toContain('Escribí');
  });

  // the Spanish prompt embeds the question, card identity, and base meaning
  it('embeds the question, card, and base meaning in ES', () => {
    const p = buildInterpretPrompt(loco, '¿Y el trabajo?', 'es');
    expect(p).toContain('¿Y el trabajo?');
    expect(p).toContain('Charly García');
    expect(p).toContain('El Loco');
    expect(p).toContain(loco.meaning.slice(0, 40));
  });

  // the English prompt switches voice and uses the English base meaning
  it('builds an English prompt with the English meaning', () => {
    const p = buildInterpretPrompt(loco, 'Will it work out?', 'en');
    expect(p).toContain('You are El Carot');
    expect(p).toContain('Will it work out?');
    expect(p).toContain(loco.meaning_en.slice(0, 40));
    expect(p).not.toContain('voseo');
  });

  // it instructs against repeating the question or revealing the AI
  it('includes the no-AI / no-repeat constraints', () => {
    const p = buildInterpretPrompt(loco, 'x', 'es');
    expect(p).toContain('no menciones que sos una IA');
    expect(p).toContain('No repitas la pregunta');
  });

  // a trimmed question avoids stray surrounding whitespace
  it('trims the question', () => {
    const p = buildInterpretPrompt(loco, '   hola   ', 'es');
    expect(p).toContain('“hola”');
  });
});
