import React from 'react';

/**
 * The El Carot eight-point star — the deck's signature glyph, repeated across
 * card backs, dividers and section breaks. Renders one or more stars in a row.
 */
export function StarDivider({
  count = 3,
  size = 16,
  gap = 14,
  color = 'var(--carot-ink)',
  style = {},
}: {
  count?: number;
  size?: number;
  gap?: number;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      role="separator"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: `${gap}px`, ...style }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true" style={{ display: 'block' }}>
          <path d="M12 0 L14 8 L22 6 L16 12 L22 18 L14 16 L12 24 L10 16 L2 18 L8 12 L2 6 L10 8 Z" />
        </svg>
      ))}
    </div>
  );
}

export default StarDivider;
