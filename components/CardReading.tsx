'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCarot } from '@/lib/i18n';
import { cardText, type Card } from '@/data/cards';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { TarotCard } from '@/components/TarotCard';
import { StarDivider } from '@/components/StarDivider';
import { DesktopNav } from '@/components/DesktopNav';

const downIcon = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12" />
    <path d="M7 10l5 5 5-5" />
    <path d="M4 21h16" />
  </svg>
);
const shareIcon = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
    <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
  </svg>
);

const ORIGIN_ROUTE: Record<string, string> = {
  message: '/message',
  question: '/question',
  gallery: '/gallery',
  home: '/',
};

/** The reading: card flips face-up on mount, then the meaning unfolds. Mobile is a single column; desktop is card-left / reading-right. */
export function CardReading({
  card,
  origin = 'home',
  question = null,
  dailyDate = null,
  instant = false,
}: {
  card: Card;
  origin?: string;
  question?: string | null;
  dailyDate?: string | null;
  instant?: boolean;
}) {
  const { t, lang } = useCarot();
  const router = useRouter();
  const isDesktop = useIsDesktop();
  const [flipped, setFlipped] = React.useState(instant);

  React.useEffect(() => {
    if (instant) return;
    setFlipped(false);
    const id = setTimeout(() => setFlipped(true), 250);
    return () => clearTimeout(id);
  }, [card.n, instant]);

  // AI interpretation when there's a question (falls back to the written meaning).
  const [interpretation, setInterpretation] = React.useState<string | null>(null);
  const [interpreting, setInterpreting] = React.useState(false);

  React.useEffect(() => {
    if (!question) {
      setInterpretation(null);
      setInterpreting(false);
      return;
    }
    let cancelled = false;
    setInterpreting(true);
    setInterpretation(null);
    fetch('/api/interpret', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cardN: card.n, question, lang }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        setInterpretation(typeof data?.interpretation === 'string' ? data.interpretation : cardText(card, 'meaning', lang));
      })
      .catch(() => {
        if (!cancelled) setInterpretation(cardText(card, 'meaning', lang));
      })
      .finally(() => {
        if (!cancelled) setInterpreting(false);
      });
    return () => {
      cancelled = true;
    };
  }, [card.n, question, lang]);

  const back = () => router.push(ORIGIN_ROUTE[origin] ?? '/');
  const navTitle =
    origin === 'message' ? t.messageTitle : origin === 'question' ? t.questionTitle : origin === 'gallery' ? t.galleryTitle : t.dailyLabel;

  // ── Desktop: two-column ──────────────────────────────────────────────
  if (isDesktop) {
    const actionLink: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 17,
      color: 'var(--carot-sage-light)',
    };
    return (
      <div data-fullbleed style={{ background: 'var(--carot-screen)' }}>
        <DesktopNav title={navTitle} onBack={back} />
        <div style={{ maxWidth: 1080, margin: '0 auto', width: '100%', padding: '34px 40px 10px', boxSizing: 'border-box', display: 'flex', gap: 56, alignItems: 'flex-start' }}>
          {/* card column */}
          <div style={{ flex: '0 0 340px' }}>
            {dailyDate && (
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--carot-sage-light)', marginBottom: 4 }}>
                  {t.dailyLabel}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 20, color: 'var(--carot-cream-text)' }}>{dailyDate}</div>
              </div>
            )}
            <TarotCard back="/assets/card-back.jpg" face={`/assets/cards/${card.img}`} flipped={flipped} width={340} alt={`${card.name} — ${card.arcana}`} />
          </div>

          {/* reading column */}
          <div style={{ flex: 1, minWidth: 0, paddingTop: 8 }}>
            {question ? (
              <>
                <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--carot-sage-light)', marginBottom: 10 }}>
                  {t.yourQuestion}
                </span>
                <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 400, fontSize: 22, lineHeight: 1.4, color: 'var(--carot-cream-text)', margin: '0 0 18px' }}>
                  “{question}”
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 17, lineHeight: 1.75, color: interpreting ? 'var(--carot-sage-light)' : 'var(--carot-cream-text)', margin: 0 }}>
                  {interpreting ? t.interpreting : interpretation ?? cardText(card, 'meaning', lang)}
                </p>
              </>
            ) : (
              <>
                <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: 23, lineHeight: 1.45, color: 'var(--carot-sage-light)', margin: '0 0 22px' }}>
                  “{cardText(card, 'quote', lang)}”
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 17, lineHeight: 1.75, color: 'var(--carot-cream-text)', margin: 0 }}>
                  {cardText(card, 'meaning', lang)}
                </p>
              </>
            )}

            <StarDivider count={3} size={12} color="#5B6256" style={{ margin: '34px 0', justifyContent: 'flex-start' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
              <button style={actionLink}>
                {shareIcon}
                {t.share}
              </button>
              <button style={actionLink}>
                {downIcon}
                {t.download}
              </button>
            </div>

            <button
              onClick={back}
              style={{ marginTop: 28, border: 'none', cursor: 'pointer', background: 'var(--carot-sage-light)', color: '#2b2922', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 18, padding: '15px 34px', borderRadius: 14 }}
            >
              {t.drawAnother}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Mobile: single column ────────────────────────────────────────────
  const cardOutlineBtn: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    width: '100%',
    boxSizing: 'border-box',
    background: 'transparent',
    border: '1px solid rgba(175,188,167,.35)',
    borderRadius: 14,
    padding: '17px 22px',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)',
    fontWeight: 400,
    fontSize: 19,
    letterSpacing: '.01em',
    color: 'var(--carot-sage-light)',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 26px 0', background: 'var(--carot-screen)' }}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '30px 0 0' }}>
        <button aria-label={t.back} onClick={back} style={{ background: 'none', border: 'none', padding: 6, margin: -6, cursor: 'pointer' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--carot-sage-light)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <line x1="20" y1="12" x2="5" y2="12" />
            <polyline points="11,5 4,12 11,19" />
          </svg>
        </button>
        <span style={{ flex: 1 }} />
        <span style={{ width: 24, height: 24 }} />
      </div>

      {dailyDate && (
        <div style={{ textAlign: 'center', marginTop: 6, marginBottom: 22 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--carot-sage-light)', marginBottom: 4 }}>
            {t.dailyLabel}
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 19, color: 'var(--carot-cream-text)' }}>{dailyDate}</div>
        </div>
      )}

      <div style={{ marginTop: 8 }}>
        <TarotCard back="/assets/card-back.jpg" face={`/assets/cards/${card.img}`} flipped={flipped} width={214} alt={`${card.name} — ${card.arcana}`} />
      </div>

      {question ? (
        <StarDivider count={3} size={15} color="var(--carot-sage-light)" style={{ margin: '26px 0 14px' }} />
      ) : (
        <>
          <StarDivider count={3} size={13} color="#5B6256" style={{ margin: '28px 0 20px' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: 21, lineHeight: 1.45, color: 'var(--carot-sage-light)', textAlign: 'center', margin: 0 }}>
            “{cardText(card, 'quote', lang)}”
          </p>
          <StarDivider count={3} size={13} color="#5B6256" style={{ margin: '20px 0 0' }} />
        </>
      )}

      {question ? (
        <>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--carot-sage-light)', margin: '22px 0 8px' }}>
            {t.yourQuestion}
          </span>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 400, fontSize: 20, lineHeight: 1.4, color: 'var(--carot-cream-text)', textAlign: 'center', margin: '0 0 6px' }}>
            “{question}”
          </p>
          {interpreting ? (
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 17, lineHeight: 1.7, color: 'var(--carot-sage-light)', textAlign: 'center', margin: '18px 0 0' }}>
              {t.interpreting}
            </p>
          ) : (
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 18, lineHeight: 1.7, color: 'var(--carot-cream-text)', textAlign: 'center', margin: '18px 0 0' }}>
              {interpretation ?? cardText(card, 'meaning', lang)}
            </p>
          )}
        </>
      ) : (
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 18, lineHeight: 1.7, color: 'var(--carot-cream-text)', textAlign: 'center', margin: '20px 0 0' }}>
          {cardText(card, 'meaning', lang)}
        </p>
      )}

      <StarDivider count={3} size={13} color="#5B6256" style={{ margin: '52px 0 50px' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
        <button style={cardOutlineBtn}>
          <span aria-hidden="true" style={{ display: 'inline-flex' }}>
            {downIcon}
          </span>
          {t.download}
        </button>
        <button style={cardOutlineBtn}>
          <span aria-hidden="true" style={{ display: 'inline-flex' }}>
            {shareIcon}
          </span>
          {t.share}
        </button>
        <button
          onClick={back}
          style={{ width: '100%', border: 'none', cursor: 'pointer', background: 'var(--carot-sage-light)', color: '#2b2922', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 20, padding: '18px 22px', borderRadius: 14 }}
        >
          {t.drawAnother}
        </button>
      </div>

      <StarDivider count={3} size={13} color="#5B6256" style={{ margin: '52px 0 50px' }} />
    </div>
  );
}

export default CardReading;
