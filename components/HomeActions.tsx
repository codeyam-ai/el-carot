'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCarot } from '@/lib/i18n';
import { ExperienceButton } from '@/components/ExperienceButton';

/** The three Home experience buttons and their navigation. `column` stacks them
 *  full-width (mobile); `row` is a centred row of auto-width pills (desktop). */
export function HomeActions({ layout = 'column' }: { layout?: 'row' | 'column' }) {
  const { t } = useCarot();
  const router = useRouter();
  const isRow = layout === 'row';
  return (
    <div style={{ display: 'flex', flexDirection: isRow ? 'row' : 'column', justifyContent: 'center', gap: isRow ? 14 : 10, marginTop: isRow ? 52 : 0 }}>
      <ExperienceButton block={!isRow} onClick={() => router.push('/question')}>{t.homeQuestion}</ExperienceButton>
      <ExperienceButton block={!isRow} onClick={() => router.push('/message')}>{t.homeMessage}</ExperienceButton>
      <ExperienceButton block={!isRow} variant="outline" onClick={() => router.push('/reading?daily=1')}>
        {t.homeDaily}
      </ExperienceButton>
    </div>
  );
}

export default HomeActions;
