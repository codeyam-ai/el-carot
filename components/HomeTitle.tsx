'use client';

import React from 'react';
import { useCarot } from '@/lib/i18n';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { Wordmark } from '@/components/Wordmark';

/**
 * The home title block: the EL CAROT wordmark, plus the welcome eyebrow above it
 * on desktop (where the eyebrow leaves the nav row). Nudged down on desktop so
 * the title sits a touch lower from the top edge.
 */
export function HomeTitle() {
  const { t } = useCarot();
  const isDesktop = useIsDesktop();
  return (
    <div style={{ marginTop: isDesktop ? 56 : 0 }}>
      {isDesktop && (
        <div
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 18,
            color: 'rgba(175,188,167,.65)',
            letterSpacing: '.02em',
            marginBottom: 4,
          }}
        >
          {t.welcome}
        </div>
      )}
      <Wordmark />
    </div>
  );
}

export default HomeTitle;
