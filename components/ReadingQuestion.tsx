import React from 'react';

/** The asked question, in sage display type between large decorative quote marks. */
export function ReadingQuestion({ text, mobile = false }: { text: string; mobile?: boolean }) {
  const mark: React.CSSProperties = { fontFamily: 'var(--font-display)', fontSize: mobile ? 38 : 44, lineHeight: 0, color: 'var(--carot-sage-divider)', verticalAlign: '-0.32em' };
  return (
    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: mobile ? 23 : 26, lineHeight: 1.3, color: 'var(--carot-sage-light)', margin: 0 }}>
      <span aria-hidden="true" style={{ ...mark, marginRight: 4 }}>“</span>
      {text}
      <span aria-hidden="true" style={{ ...mark, marginLeft: 3 }}>”</span>
    </p>
  );
}

export default ReadingQuestion;
