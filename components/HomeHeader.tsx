'use client';

import React from 'react';
import { useCarot } from '@/lib/i18n';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { LangToggle } from '@/components/LangToggle';
import { NavRightCluster } from '@/components/NavRightCluster';

/**
 * Home top row: welcome eyebrow centred. On mobile the language toggle sits on
 * the left (the floating star is top-right); on desktop the right side carries
 * the aligned language + Instagram + star cluster, matching the page nav.
 */
export function HomeHeader() {
  const { t } = useCarot();
  const isDesktop = useIsDesktop();
  return (
    <div style={{ display: 'flex', alignItems: 'center', paddingTop: 30 }}>
      <span style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        {!isDesktop && <LangToggle />}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: 17,
          color: 'rgba(175,188,167,.65)',
          letterSpacing: '.02em',
        }}
      >
        {/* on desktop the eyebrow moves down into the title block (HomeTitle) */}
        {!isDesktop && t.welcome}
      </span>
      <span style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        {isDesktop && <NavRightCluster />}
      </span>
    </div>
  );
}

export default HomeHeader;
