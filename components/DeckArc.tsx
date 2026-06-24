'use client';

import React from 'react';
import { CAROT_CARDS } from '@/data/cards';

/**
 * Desktop deck: the whole face-down deck spread in a wide, gentle arc across the
 * full width — the apex card upright in the middle, the rest fanning out and
 * dipping down toward both edges. Hovering lifts a card; clicking draws one.
 */
export function DeckArc({ back, onDraw }: { back: string; onDraw: () => void }) {
  const N = CAROT_CARDS.length;
  const CARD_W = 140;
  const CARD_H = Math.round(CARD_W / 0.535);
  const STEP_DEG = 3.6; // angle between neighbouring cards
  const R = 1080; // arc radius (px) — larger = flatter
  const mid = (N - 1) / 2;
  const [hover, setHover] = React.useState<number | null>(null);

  return (
    <div style={{ position: 'relative', width: '100%', flex: 1, minHeight: 420, overflow: 'hidden' }}>
      {/* arc origin: centred horizontally, a bit below the top of this band */}
      <div style={{ position: 'absolute', left: '50%', top: 70, width: 0, height: 0 }}>
        {CAROT_CARDS.map((_, i) => {
          const rel = i - mid;
          const deg = rel * STEP_DEG;
          const rad = (deg * Math.PI) / 180;
          const x = R * Math.sin(rad);
          const y = R * (1 - Math.cos(rad));
          const lifted = hover === i;
          return (
            <div
              key={i}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover((h) => (h === i ? null : h))}
              onClick={onDraw}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: CARD_W,
                height: CARD_H,
                marginLeft: -CARD_W / 2,
                transform: `translate(${x}px, ${y - (lifted ? 26 : 0)}px) rotate(${deg}deg)`,
                transformOrigin: '50% 100%',
                transition: 'transform .22s cubic-bezier(.2,.7,.16,1)',
                zIndex: lifted ? 200 : i,
                cursor: 'pointer',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={back}
                alt=""
                draggable={false}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 10,
                  border: '2px solid rgba(233,217,199,.4)',
                  boxShadow: lifted ? '0 24px 54px rgba(0,0,0,.6)' : '0 10px 26px rgba(0,0,0,.42)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DeckArc;
