'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCarot } from '@/lib/i18n';

/**
 * Shared screen header: a sage back arrow on the left and the EL CAROT wordmark
 * centred (taps back to home). `title` is accepted for back-context but no longer
 * rendered — the centred wordmark replaces the per-page title on mobile.
 */
export function BackHeader({ fallback = '/' }: { title?: string; fallback?: string }) {
  const { t } = useCarot();
  const router = useRouter();
  const back = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) router.back();
    else router.push(fallback);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '30px 0 0' }}>
      <button aria-label={t.back} onClick={back} style={{ background: 'none', border: 'none', padding: 6, margin: -6, cursor: 'pointer', flex: '0 0 auto' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--carot-sage-light)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <line x1="20" y1="12" x2="5" y2="12" />
          <polyline points="11,5 4,12 11,19" />
        </svg>
      </button>
      <button
        aria-label="El Carot — inicio"
        onClick={() => router.push('/')}
        style={{ flex: 1, textAlign: 'center', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 19, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--carot-sage-light)', padding: '0 8px' }}
      >
        El Carot
      </button>
      <span style={{ flex: '0 0 auto', width: 24, height: 24 }} />
    </div>
  );
}

export default BackHeader;
