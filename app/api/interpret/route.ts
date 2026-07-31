import { NextResponse } from 'next/server';
import { CAROT_CARDS, cardText, type Lang } from '@/data/cards';
import { buildInterpretPrompt } from '@/lib/interpret-prompts';
import { prisma } from '@/app/lib/prisma';
import { geoFromHeaders } from '@/lib/geo';

export const dynamic = 'force-dynamic';

/** Best-effort logging of an asked question — never blocks or breaks the reply. */
async function logQuestion(text: string, cardN: number, lang: Lang, source: string, headers: Headers) {
  try {
    await prisma.question.create({ data: { text, cardN, lang, source, ...geoFromHeaders(headers) } });
  } catch {
    /* logging is non-critical */
  }
}

/**
 * Interpret a drawn card in light of the user's question.
 * POST { cardN, question, lang } → { interpretation, source }.
 *
 * Calls Gemini (cheapest model, 3.1 Flash Lite) server-side when GEMINI_API_KEY
 * is set; the key never reaches the client. Falls back to the card's written
 * meaning when no key is configured or the call fails. Each question is logged
 * (best-effort) with the drawn card and coarse geo.
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

  let interpretation = fallback;
  let source = 'fallback';

  if (process.env.GEMINI_API_KEY) {
    try {
      const { GoogleGenAI } = await import('@google/genai');
      const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await client.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: buildInterpretPrompt(card, question, lang),
        config: {
          maxOutputTokens: 800,
          // A 3-to-5-sentence reading needs no reasoning pass, and thinking
          // tokens count against maxOutputTokens — leaving it on truncates
          // the paragraph mid-sentence.
          thinkingConfig: { thinkingBudget: 0 },
        },
      });
      const text = response.text?.trim() ?? '';
      if (text) {
        interpretation = text;
        source = 'ai';
      }
    } catch {
      /* keep the written-meaning fallback */
    }
  }

  await logQuestion(question, n, lang, source, request.headers);
  return NextResponse.json({ interpretation, source });
}
