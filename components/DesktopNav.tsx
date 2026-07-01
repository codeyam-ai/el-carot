'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCarot } from '@/lib/i18n';
import { NavRightCluster } from '@/components/NavRightCluster';

/**
 * Desktop top nav bar: a back arrow + the page-context label on the left, the
 * EL CAROT wordmark centred, and the ES/EN toggle + Instagram on the right.
 * The global star menu sits at the far right corner; this bar leaves room for it.
 */
export function DesktopNav({ title, onBack }: { title?: string; onBack?: () => void }) {
  const { t } = useCarot();
  const router = useRouter();
  const sage = 'var(--carot-sage-light)';
  const back = onBack ?? (() => router.push('/'));

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', padding: '26px 40px 0', minHeight: 44 }}>
      {/* left — back arrow + page context */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1, minWidth: 0 }}>
        {title != null && (
          <>
            <button aria-label={t.back} onClick={back} style={{ background: 'none', border: 'none', padding: 6, margin: -6, cursor: 'pointer', flex: '0 0 auto' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={sage} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <line x1="20" y1="12" x2="5" y2="12" />
                <polyline points="11,5 4,12 11,19" />
              </svg>
            </button>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16, letterSpacing: '.04em', color: 'rgba(175,188,167,.6)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {title}
            </span>
          </>
        )}
      </div>

      {/* centre — wordmark (taps back to home) */}
      <button
        aria-label="El Carot — inicio"
        onClick={() => router.push('/')}
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: 23,
          letterSpacing: '.09em',
          textTransform: 'uppercase',
          color: sage,
          whiteSpace: 'nowrap',
        }}
      >
        El Carot
      </button>

      {/* right — language + instagram + star, all aligned in one cluster */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
        <NavRightCluster />
      </div>
    </div>
  );
}

export default DesktopNav;
