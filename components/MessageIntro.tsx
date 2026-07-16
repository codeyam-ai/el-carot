'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCarot } from '@/lib/i18n';
import { CAROT_CARDS } from '@/data/cards';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { BackHeader } from '@/components/BackHeader';
import { DesktopNav } from '@/components/DesktopNav';
import { DeckArc } from '@/components/DeckArc';

/**
 * Card-pick screen for the "message" intent. Mobile shows a swipeable face-down
 * carousel; desktop spreads the whole deck in a wide arc. Tapping a card draws a
 * random card and opens its reading.
 */
export function MessageIntro() {
  const { t } = useCarot();
  const router = useRouter();
  const isDesktop = useIsDesktop();
  const sage = 'var(--carot-sage-light)';
  const cream = 'var(--carot-cream-text)';

  const draw = () => {
    const n = Math.floor(Math.random() * CAROT_CARDS.length);
    router.push(`/reading?n=${n}&origin=message`);
  };

  if (isDesktop) {
    return (
      <div
        data-fullbleed
        style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--carot-screen)', overflow: 'hidden' }}
      >
        <DesktopNav title={t.messageTitle} />

        {/* pushed down below the nav so heading + lines + deck sit lower */}
        <h1 style={{ margin: '92px 40px 0', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 44, lineHeight: 1.05, color: cream }}>
          {t.messageHeading}
        </h1>
        <div style={{ margin: '18px 0 0', textAlign: 'center', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 19, lineHeight: 1.8, color: sage }}>
          <div>
            {t.messageLines[0]} {t.messageLines[1]}
          </div>
          {t.messageLines[2] && <div>{t.messageLines[2]}</div>}
        </div>

        <DeckArc back="/assets/card-back.jpg" onDraw={draw} />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', background: 'var(--carot-screen)', overflow: 'hidden' }}>
      <div style={{ padding: '0 24px' }}>
        <BackHeader title={t.messageTitle} />
      </div>

      <h1 style={{ margin: '20px 24px 0', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 31, lineHeight: 1.12, color: cream }}>
        {t.messageHeading}
      </h1>

      <div style={{ margin: '14px 0 0', textAlign: 'center', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 18, lineHeight: 1.7, color: sage }}>
        {t.messageLines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>

      <DeckCarousel back="/assets/card-back.jpg" onDraw={draw} />
    </div>
  );
}

/** The big swipeable face-down deck with side arrows (mobile). */
export function DeckCarousel({ back, onDraw }: { back: string; onDraw: () => void }) {
  const { t } = useCarot();
  const N = CAROT_CARDS.length;
  const CARD_W = 214;
  const CARD_H = Math.round(CARD_W / 0.535);
  const SPACING = 244;
  const TILT = 6;
  const MAX_TILT = 14;

  const [active, setActive] = React.useState(Math.floor(N / 2));
  const [drag, setDrag] = React.useState(0);
  // `dragging` mirrors "startX.current != null" as state, because render needs it
  // to choose between animating and tracking the finger — and a ref read during
  // render isn't guaranteed to re-render when it changes (react-hooks/refs).
  const [dragging, setDragging] = React.useState(false);
  const startX = React.useRef<number | null>(null);
  const moved = React.useRef(false);
  const clamp = (i: number) => Math.max(0, Math.min(N - 1, i));

  const onDown = (e: React.MouseEvent | React.TouchEvent) => {
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
    moved.current = false;
    setDragging(true);
  };
  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (startX.current == null) return;
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const dx = x - startX.current;
    if (Math.abs(dx) > 4) moved.current = true;
    setDrag(dx);
  };
  const onUp = () => {
    if (startX.current == null) return;
    const steps = Math.round(-drag / (SPACING * 0.55));
    if (steps !== 0) setActive((a) => clamp(a + steps));
    setDrag(0);
    startX.current = null;
    setDragging(false);
  };

  const arrowStyle = (side: 'left' | 'right', atEnd: boolean): React.CSSProperties => ({
    position: 'absolute',
    top: '50%',
    [side]: 10,
    transform: 'translateY(-50%)',
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--carot-sage-light)',
    border: 'none',
    padding: 0,
    cursor: atEnd ? 'default' : 'pointer',
    zIndex: 200,
    boxShadow: '0 4px 14px rgba(0,0,0,.4)',
    animation: `carot-nudge-${side} 2.4s ease-in-out infinite`,
    visibility: atEnd ? 'hidden' : 'visible',
  });

  return (
    <>
      <div
        style={{ position: 'relative', width: '100%', flex: 1, minHeight: CARD_H + 40, marginTop: 16 }}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
      >
        {Array.from({ length: N }).map((_, i) => {
          const offset = (i - active) * SPACING + drag;
          if (Math.abs(offset) > 560) return null;
          const rel = offset / SPACING;
          const isCenter = i === active && drag === 0;
          const dist = Math.min(Math.abs(rel), 2);
          const scale = 1 - dist * 0.07;
          const opacity = 1 - dist * 0.2;
          const tilt = Math.max(-MAX_TILT, Math.min(MAX_TILT, rel * TILT));
          return (
            <div
              key={i}
              onClick={() => {
                if (moved.current) return;
                if (i === active) onDraw();
                else setActive(i);
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: CARD_W,
                height: CARD_H,
                marginLeft: -CARD_W / 2,
                marginTop: -CARD_H / 2,
                transformOrigin: '50% 88%',
                transform: `translateX(${offset}px) rotate(${tilt}deg) scale(${scale})`,
                transition: dragging ? 'none' : 'transform .34s cubic-bezier(.4,.1,.2,1), opacity .34s',
                opacity,
                zIndex: 100 - Math.round(dist * 10),
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
                  borderRadius: 16,
                  border: isCenter ? '2px solid rgba(233,217,199,.6)' : '2px solid rgba(233,217,199,.22)',
                  boxShadow: isCenter ? '0 22px 54px rgba(0,0,0,.6)' : '0 12px 32px rgba(0,0,0,.45)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          );
        })}

        <button aria-label={t.prev} onClick={() => setActive((a) => clamp(a - 1))} style={arrowStyle('left', active === 0)}>
          <svg width="16" height="32" viewBox="0 0 13 28" fill="none" stroke="#14110e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9.5,4 4,14 9.5,24" />
          </svg>
        </button>
        <button aria-label={t.next} onClick={() => setActive((a) => clamp(a + 1))} style={arrowStyle('right', active === N - 1)}>
          <svg width="16" height="32" viewBox="0 0 13 28" fill="none" stroke="#14110e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3.5,4 9,14 3.5,24" />
          </svg>
        </button>
      </div>

      <div style={{ padding: '4px 0 22px', textAlign: 'center', color: 'rgba(175,188,167,.6)', fontFamily: 'var(--font-body)', fontSize: 14, letterSpacing: '.18em' }}>
        {String(active + 1).padStart(2, '0')} / {N}
      </div>
    </>
  );
}

export default MessageIntro;
