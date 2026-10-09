import React from 'react';
import type { Card } from '@/data/cards';
import type { Strings } from '@/lib/i18n';
import { arcanumLine } from '@/lib/reading';

/** Who the card is: the character's name as the headline, the arcanum eyebrow below it. */
export function CardIdentity({ card, t, mobile = false }: { card: Card; t: Strings; mobile?: boolean }) {
  return (
    <>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: mobile ? 40 : 54,
          lineHeight: mobile ? 1.1 : 1.05,
          color: 'var(--carot-cream-text)',
          margin: mobile ? 0 : '0 0 12px',
        }}
      >
        {card.name}
      </h1>
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: mobile ? 11 : 12,
          letterSpacing: '.22em',
          textTransform: 'uppercase',
          color: 'var(--carot-sage-light)',
          ...(mobile ? { marginTop: 12 } : { marginBottom: 24 }),
        }}
      >
        {arcanumLine(card, t)}
      </div>
    </>
  );
}

export default CardIdentity;
