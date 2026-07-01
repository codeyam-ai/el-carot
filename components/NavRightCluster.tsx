'use client';

import React from 'react';
import { useCarot } from '@/lib/i18n';
import { useMenu } from '@/lib/menu';
import { LangToggle } from '@/components/LangToggle';
import { CAROT_IG_URL } from '@/lib/links';

/**
 * The desktop top-right cluster: language toggle, Instagram, and the star menu —
 * all in one flex row so they're guaranteed to sit on the same baseline. Used by
 * both the page nav bar (DesktopNav) and the home header. The star toggles the
 * shared menu via context; the floating star is hidden on desktop while closed.
 */
export function NavRightCluster() {
  const { t } = useCarot();
  const { toggle } = useMenu();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <LangToggle />
      <a
        href={CAROT_IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        style={{ color: 'rgba(175,188,167,.7)', display: 'inline-flex' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <button
        aria-label={t.menu}
        onClick={toggle}
        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" style={{ overflow: 'visible', display: 'block' }} aria-hidden="true">
          <path d="M12 0 L14.2 8 L22 5.6 L16.4 12 L22 18.4 L14.2 16 L12 24 L9.8 16 L2 18.4 L7.6 12 L2 5.6 L9.8 8 Z" fill="var(--carot-sage-light)" />
        </svg>
      </button>
    </div>
  );
}

export default NavRightCluster;
