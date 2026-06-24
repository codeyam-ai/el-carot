'use client';

import React from 'react';
import { useCarot } from '@/lib/i18n';
import { CAROT_IG_URL, CAROT_OPEN_SOURCE_URL } from '@/lib/links';

/** Star (hamburger) menu overlay with the full nav. */
export function CarotMenu({
  onAbout,
  onGallery,
}: {
  onAbout: () => void;
  onGallery: () => void;
}) {
  const { t } = useCarot();
  const item: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '6px 0',
    whiteSpace: 'nowrap',
    fontFamily: 'var(--font-body)',
    fontWeight: 300,
    fontSize: 17,
    letterSpacing: '.01em',
    color: 'var(--carot-cream-text)',
  };
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 500,
        background: 'rgba(28,28,28,.97)',
        display: 'flex',
        flexDirection: 'column',
        padding: '64px 30px 36px',
        boxSizing: 'border-box',
      }}
    >
      <nav
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 34,
          textAlign: 'center',
        }}
      >
        <button style={item} onClick={onAbout}>
          {t.menuAbout}
        </button>
        <button style={item} onClick={onGallery}>
          {t.menuAllCards}
        </button>
        <a style={{ ...item, textDecoration: 'none' }} href={CAROT_IG_URL} target="_blank" rel="noopener noreferrer">
          {t.menuBuy}
        </a>
        <a style={{ ...item, textDecoration: 'none' }} href={CAROT_OPEN_SOURCE_URL} target="_blank" rel="noopener noreferrer">
          {t.menuOpenSource}
        </a>
        <a style={{ ...item, textDecoration: 'none' }} href={CAROT_IG_URL} target="_blank" rel="noopener noreferrer">
          {t.menuInstagram}
        </a>
      </nav>
      <div
        style={{
          textAlign: 'center',
          userSelect: 'none',
          paddingTop: 12,
          fontFamily: 'var(--font-mono)',
          fontSize: 15,
          letterSpacing: '.04em',
          color: 'rgba(255,255,255,.42)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
        }}
      >
        <span aria-hidden="true">&#9829;</span>
        <span>{t.menuLove}</span>
        <span aria-hidden="true">&#9829;</span>
      </div>
    </div>
  );
}

export default CarotMenu;
