'use client';

import React from 'react';
import type { Card, Lang } from '@/data/cards';
import { fetchInterpretation } from '@/lib/fetchInterpretation';

/** The AI interpretation of `card` for `question` (none without a question). */
export function useInterpretation(card: Card, question: string | null, lang: Lang) {
  // `interpreting` starts true when mounting with a question so the loading state
  // shows on the first paint, without an effect having to set it.
  const [interpretation, setInterpretation] = React.useState<string | null>(null);
  const [interpreting, setInterpreting] = React.useState(!!question);

  // Reset when the request identity changes — during render rather than in the
  // effect (react-hooks/set-state-in-effect).
  const requestKey = `${card.n}|${question ?? ''}|${lang}`;
  const [prevRequestKey, setPrevRequestKey] = React.useState(requestKey);
  if (prevRequestKey !== requestKey) {
    setPrevRequestKey(requestKey);
    setInterpretation(null);
    setInterpreting(!!question);
  }

  React.useEffect(() => {
    if (!question) return;
    let cancelled = false;
    fetchInterpretation(card, question, lang).then((text) => {
      if (cancelled) return;
      setInterpretation(text);
      setInterpreting(false);
    });
    return () => {
      cancelled = true;
    };
    // `card` is identified by its number; the deck objects are static.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card.n, question, lang]);

  return { interpretation, interpreting };
}
