'use client';

import React from 'react';

export type ExperienceButtonVariant = 'solid' | 'outline';

/**
 * A full-width Home experience button. `solid` is the sage block (default),
 * `outline` is the transparent sage-keyline variant ("Carta del Día").
 * Presses nudge down 1px, matching the design's tactile feel.
 */
export function ExperienceButton({
  children,
  onClick,
  variant = 'solid',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ExperienceButtonVariant;
}) {
  const base: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    border: 'none',
    cursor: 'pointer',
    background: 'var(--carot-sage-light)',
    color: '#2b2922',
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 21,
    letterSpacing: '.01em',
    padding: '20px 18px',
    borderRadius: 14,
    textAlign: 'center',
    lineHeight: 1.1,
    transition: 'background-color .18s ease, transform .06s ease',
  };
  const outline: React.CSSProperties =
    variant === 'outline'
      ? { background: 'transparent', color: 'var(--carot-sage-light)', border: '1.5px solid var(--carot-sage-light)' }
      : {};

  const press = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translateY(1px)';
  };
  const release = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <button
      style={{ ...base, ...outline }}
      onMouseDown={press}
      onMouseUp={release}
      onMouseLeave={release}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ExperienceButton;
