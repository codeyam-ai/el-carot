import React from 'react';
import { type Card } from '@/data/cards';

const F_W = 164; // sized so all three fanned cards fit within the mobile column (no clipping)
const STEP_X = 110; // horizontal gap between card centres
const STEP_ROT = 7; // tilt per step from centre

/**
 * The central illustration: card fronts fanned and overlapping, full-bleed,
 * with a CSS-only entrance (so they're visible in server-rendered HTML) and an
 * infinite gentle sway. The cards are chosen by the caller and passed in.
 */
export function CardFan({ cards }: { cards: Card[] }) {
  const mid = (cards.length - 1) / 2;
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 0',
        margin: '0 -26px',
        minHeight: 0,
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', width: F_W, height: Math.round(F_W / 0.535) }}>
        {cards.map((c, i) => {
          const rel = i - mid;
          const tx = rel * STEP_X;
          const ty = Math.abs(rel) * 26 - 34;
          const rot = rel * STEP_ROT;
          const isCenter = Math.abs(rel) < 0.5;
          return (
            <div
              key={c.n}
              style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                width: F_W,
                marginLeft: -F_W / 2,
                transform: `translateX(${tx}px) translateY(${ty}px) rotate(${rot}deg)`,
                zIndex: 20 - Math.round(Math.abs(rel) * 5),
              }}
            >
              {/* entrance wrapper — CSS-only fade/scale in on load */}
              <div
                style={{
                  animation: 'carot-open .6s cubic-bezier(.2,.7,.16,1) both',
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/cards/${c.img}`}
                  alt={c.name}
                  draggable={false}
                  style={{
                    display: 'block',
                    width: '100%',
                    aspectRatio: '0.535',
                    objectFit: 'cover',
                    borderRadius: 9,
                    border: '2px solid rgba(233,217,199,.5)',
                    boxShadow: isCenter
                      ? '0 18px 44px rgba(0,0,0,.6)'
                      : '0 12px 30px rgba(0,0,0,.5)',
                    animation: 'carot-sway 6.5s ease-in-out infinite',
                    animationDelay: `${i * 1.3}s`,
                    transformOrigin: '50% 50%',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardFan;
