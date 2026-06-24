'use client';

import React from 'react';

/**
 * A single El Carot tarot card. Shows the patterned back or a character face,
 * with a 3D flip between them. The face is the real card artwork (a tall 0.535
 * aspect image that already includes its frame, name plate and arcana label),
 * so the component just frames and flips it.
 */
export function TarotCard({
  face = null,
  back = null,
  flipped = false,
  width = 220,
  alt = '',
  onClick,
  style = {},
}: {
  face?: string | null;
  back?: string | null;
  flipped?: boolean;
  width?: number | string;
  alt?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  const radius = 'var(--radius-lg)';
  const faceStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    borderRadius: radius,
    overflow: 'hidden',
    boxShadow: 'var(--shadow-card)',
  };

  return (
    <div
      onClick={onClick}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        aspectRatio: '0.535',
        perspective: '1400px',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform .7s cubic-bezier(.4,.1,.2,1)',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Back */}
        <div style={faceStyle}>
          {back ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={back} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'var(--carot-sage-light)',
                borderRadius: radius,
                border: '2px solid var(--carot-ink)',
              }}
            />
          )}
        </div>
        {/* Face */}
        <div style={{ ...faceStyle, transform: 'rotateY(180deg)' }}>
          {face ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={face}
              alt={alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', background: 'var(--carot-cream)' }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', background: 'var(--carot-cream)', borderRadius: radius }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default TarotCard;
