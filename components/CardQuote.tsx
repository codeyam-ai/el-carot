import React from 'react';

/** The card's quote, italic in sage — left-aligned on desktop, centred on mobile. */
export function CardQuote({ text, mobile = false }: { text: string; mobile?: boolean }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-body)',
        fontStyle: 'italic',
        fontWeight: 300,
        fontSize: mobile ? 21 : 22,
        lineHeight: 1.45,
        color: 'var(--carot-sage-light)',
        margin: mobile ? 0 : '0 0 18px',
        ...(mobile ? { textAlign: 'center' as const } : null),
      }}
    >
      “{text}”
    </p>
  );
}

export default CardQuote;
