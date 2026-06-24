'use client';

import React from 'react';
import { useCarot } from '@/lib/i18n';
import { LangToggle } from '@/components/LangToggle';

/** Home top row: language toggle on the left, welcome eyebrow centred. */
export function HomeHeader() {
  const { t } = useCarot();
  return (
    <div style={{ display: 'flex', alignItems: 'center', paddingTop: 30 }}>
      <span style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        <LangToggle />
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
        {t.welcome}
      </span>
      <span style={{ flex: 1 }} />
    </div>
  );
}

export default HomeHeader;
