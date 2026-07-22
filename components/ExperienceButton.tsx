'use client';

import React from 'react';

export type ExperienceButtonVariant = 'solid' | 'outline';

/**
 * A Home experience button. `solid` is the sage block (default), `outline` is the
 * transparent sage-keyline variant ("Carta del Día"). `block` (default) fills the
 * width (mobile stack); pass `block={false}` for an auto-width pill (desktop row).
 * Presses nudge down 1px, matching the design's tactile feel.
 */
export function ExperienceButton({
  children,
  onClick,
  variant = 'solid',
  block = true,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ExperienceButtonVariant;
  block?: boolean;
}) {
  const base: React.CSSProperties = {
    width: block ? '100%' : 'auto',
    boxSizing: 'border-box',
    border: 'none',
    cursor: 'pointer',
    background: 'var(--carot-sage-light)',
    color: '#2b2922',
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    // A touch smaller on the mobile stack so the fanned cards get more room.
    fontSize: block ? 18 : 21,
    letterSpacing: '.01em',
    padding: block ? '12px 18px' : '16px 30px',
    borderRadius: 14,
    textAlign: 'center',
    lineHeight: 1.1,
    whiteSpace: block ? 'normal' : 'nowrap',
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
