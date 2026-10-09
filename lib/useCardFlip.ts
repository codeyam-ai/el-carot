'use client';

import React from 'react';

/** Whether the reading's card is face-up: flips shortly after mount (or at once when `instant`), re-arming when the card changes. */
export function useCardFlip(cardN: number, instant: boolean): boolean {
  const [flipped, setFlipped] = React.useState(instant);

  // Re-arm the flip when the card changes. Done during render rather than in the
  // effect below: a synchronous setState inside an effect triggers a cascading
  // re-render (react-hooks/set-state-in-effect). The effect keeps only the timer.
  const [prevCardN, setPrevCardN] = React.useState(cardN);
  if (prevCardN !== cardN) {
    setPrevCardN(cardN);
    setFlipped(instant);
  }

  React.useEffect(() => {
    if (instant) return;
    const id = setTimeout(() => setFlipped(true), 250);
    return () => clearTimeout(id);
  }, [cardN, instant]);

  return flipped;
}
