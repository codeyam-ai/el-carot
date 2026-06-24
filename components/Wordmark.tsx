import React from 'react';

/** The EL CAROT wordmark — display serif, sage, uppercase. */
export function Wordmark() {
  return (
    <h1
      style={{
        margin: '14px 0 0',
        textAlign: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        fontSize: 58,
        lineHeight: 1,
        letterSpacing: '.03em',
        color: 'var(--carot-sage-light)',
        textTransform: 'uppercase',
      }}
    >
      El Carot
    </h1>
  );
}

export default Wordmark;
