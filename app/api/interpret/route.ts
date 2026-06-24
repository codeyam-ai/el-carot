import { NextResponse } from 'next/server';
import { CAROT_CARDS, cardText, type Lang } from '@/data/cards';
import { buildInterpretPrompt } from '@/lib/interpret-prompts';

export const dynamic = 'force-dynamic';

/**
 * Interpret a drawn card in light of the user's question.
 * POST { cardN, question, lang } → { interpretation, source }.
 *
 * Calls Claude (cheapest model, Haiku 4.5) server-side when ANTHROPIC_API_KEY
 * is set; the key never reaches the client. Falls back to the card's written
 * meaning when no key is configured or the call fails.
 */
export async function POST(request: Request) {
  let body: { cardN?: unknown; question?: unknown; lang?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid JSON' }, { status: 400 });
  }

  const n = Number(body.cardN);
  const question = typeof body.question === 'string' ? body.question.trim() : '';
  const lang: Lang = body.lang === 'en' ? 'en' : 'es';

  if (!Number.isInteger(n) || n < 0 || n >= CAROT_CARDS.length || !question) {
    return NextResponse.json({ error: 'cardN and question are required' }, { status: 400 });
  }

  const card = CAROT_CARDS[n];
  const fallback = cardText(card, 'meaning', lang);

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ interpretation: fallback, source: 'fallback' });
  }

  try {
    const Anthropic = (await import('@anthropic-ai/sdk')).default;
    const client = new Anthropic();
    const message = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 512,
      messages: [{ role: 'user', content: buildInterpretPrompt(card, question, lang) }],
    });
    const text = message.content
      .map((block) => (block.type === 'text' ? block.text : ''))
      .join('')
      .trim();
    return NextResponse.json({ interpretation: text || fallback, source: text ? 'ai' : 'fallback' });
  } catch {
    return NextResponse.json({ interpretation: fallback, source: 'fallback', error: 'ai_failed' });
  }
}
