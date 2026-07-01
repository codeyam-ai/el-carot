'use client';

import React from 'react';
import { useCarot } from '@/lib/i18n';

/** The small "♥ El Carot te ama ♥" sign-off, pinned to the bottom of the home. */
export function HomeLove() {
  const { t } = useCarot();
  return (
    <div
      style={{
        marginTop: 'auto',
        paddingTop: 30,
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        letterSpacing: '.08em',
        color: 'rgba(175,188,167,.5)',
      }}
    >
      ♥ {t.menuLove} ♥
    </div>
  );
}

export default HomeLove;
