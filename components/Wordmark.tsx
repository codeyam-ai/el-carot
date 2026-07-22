import React from 'react';

/** The EL CAROT wordmark — display serif, sage, uppercase. */
export function Wordmark() {
  return (
    <h1
      style={{
        margin: '6px 0 0',
        textAlign: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        // Smaller on narrow phones (gives the fanned cards more vertical room so
        // they don't clip under the title), full size on desktop.
        fontSize: 'clamp(36px, 10vw, 58px)',
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
