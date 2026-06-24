'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCarot } from '@/lib/i18n';
import { CAROT_IG_URL } from '@/lib/links';

/** Dark footer shown at the bottom of the reading and gallery. */
export function Footer() {
  const { t } = useCarot();
  const router = useRouter();
  const muted = 'rgba(255,255,255,.40)';
  const sage = 'var(--carot-sage-light)';
  const mono = 'var(--font-mono)';

  const navLink: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '2px 0',
    textDecoration: 'none',
    fontFamily: 'var(--font-body)',
    fontWeight: 400,
    fontSize: 17,
    letterSpacing: '.01em',
    color: muted,
  };

  return (
    <footer style={{ background: '#111111', padding: '46px 26px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <button style={navLink} onClick={() => router.push('/about')}>{t.footAbout}</button>
        <a style={navLink} href={CAROT_IG_URL} target="_blank" rel="noopener noreferrer">{t.footBuy}</a>
        <button style={navLink} onClick={() => router.push('/reading?daily=1')}>{t.footDaily}</button>
        <button style={navLink} onClick={() => router.push('/gallery')}>{t.footGallery}</button>
      </div>

      <a
        href={CAROT_IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        style={{ color: muted, display: 'inline-flex', margin: '28px 0 30px' }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      </a>

      <div style={{ textAlign: 'center', fontFamily: mono, fontSize: 13, lineHeight: 1.8, color: muted }}>
        <div>
          {t.createdBy}{' '}
          <a href="https://www.instagram.com/bastadanii/" target="_blank" rel="noopener noreferrer" style={{ color: '#d98fd0', textDecoration: 'none' }}>
            bastadanii
          </a>
        </div>
        <div>
          {t.developedIn} <span style={{ color: '#8fd99a' }}>CodeYam</span>
        </div>
      </div>

      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 28, letterSpacing: '.05em', textTransform: 'uppercase', color: sage, marginTop: 40 }}>
        El Carot
      </span>

      <div style={{ marginTop: 10, fontFamily: mono, fontSize: 13, letterSpacing: '.06em', color: muted, display: 'inline-flex', alignItems: 'center', gap: 12, userSelect: 'none' }}>
        <span aria-hidden="true">&#9829;</span>
        <span>{t.footLove}</span>
        <span aria-hidden="true">&#9829;</span>
      </div>
    </footer>
  );
}

export default Footer;
