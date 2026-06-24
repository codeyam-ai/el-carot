'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCarot } from '@/lib/i18n';
import { ExperienceButton } from '@/components/ExperienceButton';

/** The three Home experience buttons and their navigation. */
export function HomeActions() {
  const { t } = useCarot();
  const router = useRouter();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <ExperienceButton onClick={() => router.push('/message')}>{t.homeMessage}</ExperienceButton>
      <ExperienceButton onClick={() => router.push('/question')}>{t.homeQuestion}</ExperienceButton>
      <ExperienceButton variant="outline" onClick={() => router.push('/reading?daily=1')}>
        {t.homeDaily}
      </ExperienceButton>
    </div>
  );
}

export default HomeActions;
