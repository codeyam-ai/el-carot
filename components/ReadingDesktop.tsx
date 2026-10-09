import React from 'react';
import type { Card, Lang } from '@/data/cards';
import type { Strings } from '@/lib/i18n';
import { DesktopNav } from '@/components/DesktopNav';
import { DailyDateBadge } from '@/components/DailyDateBadge';
import { SwayingCard } from '@/components/SwayingCard';
import { ReadingTextColumn } from '@/components/ReadingTextColumn';

/** Desktop reading: nav bar, the card on the left, the reading column vertically centred on the right. */
export function ReadingDesktop({
  card,
  lang,
  t,
  navTitle,
  dailyDate,
  flipped,
  question,
  body,
  savingImage,
  onBack,
  onShare,
  onDownload,
}: {
  card: Card;
  lang: Lang;
  t: Strings;
  navTitle: string;
  dailyDate: string | null;
  flipped: boolean;
  question: string | null;
  body: { text: string; pending: boolean };
  savingImage: boolean;
  onBack: () => void;
  onShare: () => void;
  onDownload: () => void;
}) {
  return (
    <>
      <DesktopNav title={navTitle} onBack={onBack} />
      <div style={{ maxWidth: 1080, margin: '0 auto', width: '100%', minHeight: 'calc(100dvh - 84px)', padding: '24px 40px 40px', boxSizing: 'border-box', display: 'flex', gap: 56, alignItems: 'center' }}>
        <div style={{ flex: '0 0 340px' }}>
          {dailyDate && <DailyDateBadge label={t.dailyLabel} date={dailyDate} />}
          <SwayingCard card={card} flipped={flipped} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <ReadingTextColumn
            card={card}
            lang={lang}
            t={t}
            question={question}
            body={body}
            savingImage={savingImage}
            onBack={onBack}
            onShare={onShare}
            onDownload={onDownload}
          />
        </div>
      </div>
    </>
  );
}

export default ReadingDesktop;
