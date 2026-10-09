import React from 'react';

/**
 * The reading's main paragraph — the meaning or the AI interpretation. While
 * `pending` it shows in sage instead of cream. `marginTop` spaces it on mobile.
 */
export function ReadingBody({ text, pending, mobile = false, marginTop = 0 }: { text: string; pending: boolean; mobile?: boolean; marginTop?: number }) {
  const color = pending ? 'var(--carot-sage-light)' : 'var(--carot-cream-text)';
  if (mobile) {
    return (
      <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: pending ? 17 : 18, lineHeight: 1.7, color, textAlign: 'center', margin: `${marginTop}px 0 0` }}>
        {text}
      </p>
    );
  }
  return <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 17, lineHeight: 1.75, color, margin: `${marginTop}px 0 0` }}>{text}</p>;
}

export default ReadingBody;
