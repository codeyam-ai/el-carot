'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCarot } from '@/lib/i18n';
import type { Card } from '@/data/cards';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { useCardFlip } from '@/lib/useCardFlip';
import { useInterpretation } from '@/lib/useInterpretation';
import { useReadingActions } from '@/lib/useReadingActions';
import { navTitleFor, originRoute, readingBody } from '@/lib/reading';
import { ReadingDesktop } from '@/components/ReadingDesktop';
import { ReadingMobile } from '@/components/ReadingMobile';
import { ReadingToast } from '@/components/ReadingToast';

/** The reading: card flips face-up on mount, then the meaning unfolds. Mobile is a single column; desktop is card-left / reading-right. */
export function CardReading({
  card,
  origin = 'home',
  question = null,
  dailyDate = null,
  instant = false,
}: {
  card: Card;
  origin?: string;
  question?: string | null;
  dailyDate?: string | null;
  instant?: boolean;
}) {
  const { t, lang } = useCarot();
  const router = useRouter();
  const isDesktop = useIsDesktop();
  const flipped = useCardFlip(card.n, instant);
  const { interpretation, interpreting } = useInterpretation(card, question, lang);
  const { toast, savingImage, onShare, onDownload } = useReadingActions(card, lang, t);

  const back = () => router.push(originRoute(origin));
  const body = readingBody({ card, lang, t, question, interpreting, interpretation });
  const shared = { card, lang, t, dailyDate, flipped, question, body, savingImage, onBack: back, onShare, onDownload };

  return (
    <div data-fullbleed={isDesktop ? '' : undefined} style={{ background: 'var(--carot-screen)' }}>
      {isDesktop ? <ReadingDesktop {...shared} navTitle={navTitleFor(origin, t)} /> : <ReadingMobile {...shared} />}
      <ReadingToast message={toast} />
    </div>
  );
}

export default CardReading;
