'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCarot } from '@/lib/i18n';
import { CAROT_IG_URL } from '@/lib/links';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { BackHeader } from '@/components/BackHeader';
import { DesktopNav } from '@/components/DesktopNav';

/** "¿Qué es esto?" — a short description of the El Carot project. */
export function AboutScreen() {
  const { t } = useCarot();
  const router = useRouter();
  const isDesktop = useIsDesktop();
  const display = 'var(--font-display)';
  const sage = 'var(--carot-sage-light)';
  const cream = 'var(--carot-cream-text)';
  const p: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.75,
    color: cream,
    margin: '0 0 18px',
    textAlign: 'center',
  };

  return (
    <div data-fullbleed style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', background: 'var(--carot-screen)' }}>
      {isDesktop && <DesktopNav title={t.aboutTitle} />}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%', maxWidth: isDesktop ? 640 : undefined, margin: '0 auto', padding: '0 30px 40px', boxSizing: 'border-box' }}>
        {!isDesktop && <BackHeader title={t.aboutTitle} />}

        <h1 style={{ margin: isDesktop ? '52px 0 24px' : '30px 0 22px', textAlign: 'center', fontFamily: display, fontWeight: 400, fontSize: isDesktop ? 52 : 40, lineHeight: 1.05, color: cream }}>
        El Carot
      </h1>

      <p style={p} dangerouslySetInnerHTML={{ __html: t.aboutP1html.replace(/<strong>/g, `<strong style="color:${sage}">`) }} />
      <p style={p}>{t.aboutP2}</p>
      <p style={p}>{t.aboutP3}</p>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 26px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill={sage} aria-hidden="true">
          <path d="M12 0 L14.2 8 L22 5.6 L16.4 12 L22 18.4 L14.2 16 L12 24 L9.8 16 L2 18.4 L7.6 12 L2 5.6 L9.8 8 Z" />
        </svg>
      </div>

      <p style={{ ...p, fontFamily: display, fontSize: 22, color: sage, margin: 0 }}>
        {t.aboutTagline[0]}
        <br />
        {t.aboutTagline[1]}
      </p>

      <div style={{ flex: 1 }} />

      <button
        onClick={() => router.push('/message')}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          border: 'none',
          cursor: 'pointer',
          marginTop: 30,
          background: sage,
          color: '#2b2922',
          fontFamily: display,
          fontWeight: 400,
          fontSize: 21,
          padding: '18px 22px',
          borderRadius: 14,
        }}
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="#2b2922" aria-hidden="true">
          <path d="M12 1 L14 8.4 L21.4 6.2 L16.2 12 L21.4 17.8 L14 15.6 L12 23 L10 15.6 L2.6 17.8 L7.8 12 L2.6 6.2 L10 8.4 Z" />
        </svg>
        {t.drawCard}
      </button>
      <a
        href={CAROT_IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          textDecoration: 'none',
          marginTop: 14,
          background: 'transparent',
          color: sage,
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: 17,
          padding: '15px 22px',
          borderRadius: 14,
          border: '1.5px solid var(--carot-sage-light)',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
        </svg>
        {t.followInstagram}
      </a>
      </div>
    </div>
  );
}

export default AboutScreen;
