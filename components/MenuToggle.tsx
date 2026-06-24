'use client';

import React from 'react';

/**
 * The single star ↔ X button, locked to one spot above everything so the star
 * spins and crossfades into the close X without moving.
 */
export function MenuToggle({
  open,
  onToggle,
  label,
}: {
  open: boolean;
  onToggle: () => void;
  label: string;
}) {
  const sage = 'var(--carot-sage-light)';
  const tween: React.CSSProperties = {
    transition: 'transform .4s cubic-bezier(.34,.12,.2,1), opacity .28s ease',
    transformOrigin: '12px 12px',
  };
  return (
    <button
      aria-label={label}
      aria-expanded={open}
      onClick={onToggle}
      style={{
        position: 'absolute',
        top: 22,
        right: 18,
        width: 44,
        height: 44,
        zIndex: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" style={{ overflow: 'visible' }} aria-hidden="true">
        <path
          d="M12 0 L14.2 8 L22 5.6 L16.4 12 L22 18.4 L14.2 16 L12 24 L9.8 16 L2 18.4 L7.6 12 L2 5.6 L9.8 8 Z"
          fill={sage}
          style={{ ...tween, opacity: open ? 0 : 1, transform: open ? 'rotate(108deg) scale(.45)' : 'rotate(0deg) scale(1)' }}
        />
        <g
          stroke={sage}
          strokeWidth="1.9"
          strokeLinecap="round"
          style={{ ...tween, opacity: open ? 1 : 0, transform: open ? 'rotate(0deg) scale(1)' : 'rotate(-108deg) scale(.45)' }}
        >
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </g>
      </svg>
    </button>
  );
}

export default MenuToggle;
