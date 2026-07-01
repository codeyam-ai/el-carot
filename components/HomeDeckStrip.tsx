import React from 'react';
import { type Card } from '@/data/cards';

const CARD_W = 220;

/**
 * Desktop home illustration: a full-bleed row of face-up cards that drifts
 * slowly leftward as one while each card sways gently. CSS-only (no JS), so it
 * renders in the server HTML. The card list is doubled for a seamless marquee.
 */
export function HomeDeckStrip({ cards, className }: { cards: Card[]; className?: string }) {
  const loop = [...cards, ...cards];
  return (
    <div className={className} style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', overflow: 'hidden', margin: '0 -26px', minHeight: 0 }}>
      <div style={{ display: 'flex', gap: 18, padding: '0 9px', animation: 'carot-drift-left 60s linear infinite', willChange: 'transform' }}>
        {loop.map((c, i) => {
          const j = i % cards.length;
          // Vary the rhythm (duration) per card, and use a NEGATIVE delay so every
          // card is already mid-sway at load — they flow from the first frame
          // instead of settling in one by one.
          const dur = 5 + ((j * 7) % 5) * 0.7; // ~5–7.8s, mixed speeds
          const phase = -((j * 1.3) % dur); // negative → offset into the cycle
          return (
          <div
            key={i}
            style={{
              flex: '0 0 auto',
              animation: `carot-sway ${dur}s ease-in-out infinite`,
              animationDelay: `${phase}s`,
              transformOrigin: '50% 92%',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/assets/cards/${c.img}`}
              alt={c.name}
              draggable={false}
              style={{
                width: CARD_W,
                height: Math.round(CARD_W / 0.535),
                objectFit: 'cover',
                borderRadius: 10,
                display: 'block',
                boxShadow: '0 16px 32px rgba(0,0,0,.45)',
                border: '1px solid rgba(233,217,199,.25)',
              }}
            />
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeDeckStrip;
