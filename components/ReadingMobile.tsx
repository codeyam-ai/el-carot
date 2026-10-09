import React from 'react';
import { cardText, type Card, type Lang } from '@/data/cards';
import type { Strings } from '@/lib/i18n';
import { BackHeader } from '@/components/BackHeader';
import { StarDivider } from '@/components/StarDivider';
import { DailyDateBadge } from '@/components/DailyDateBadge';
import { SwayingCard } from '@/components/SwayingCard';
import { ReadingQuestion } from '@/components/ReadingQuestion';
import { CardIdentity } from '@/components/CardIdentity';
import { CardQuote } from '@/components/CardQuote';
import { ReadingBody } from '@/components/ReadingBody';
import { ReadingActionsMobile } from '@/components/ReadingActionsMobile';

/**
 * Mobile reading, one centred column: header, card, the question (if any), who
 * the card is, the quote (only without a question), the meaning or
 * interpretation, and the actions.
 */
export function ReadingMobile({
  card,
  lang,
  t,
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 26px 0', background: 'var(--surface-page)' }}>
      <BackHeader onBack={onBack} style={{ width: '100%' }} />
      {dailyDate && <DailyDateBadge label={t.dailyLabel} date={dailyDate} mobile />}
      <div style={{ marginTop: 30 }}>
        <SwayingCard card={card} flipped={flipped} mobile />
      </div>

      <div style={{ textAlign: 'center', marginTop: 34 }}>
        {question && (
          <div style={{ marginBottom: 30 }}>
            <ReadingQuestion text={question} mobile />
          </div>
        )}
        <CardIdentity card={card} t={t} mobile />
      </div>

      {question ? (
        <div style={{ height: 8 }} />
      ) : (
        <>
          <div style={{ height: 22 }} />
          <CardQuote text={cardText(card, 'quote', lang)} mobile />
          <StarDivider count={3} size={13} color="var(--divider)" style={{ margin: '20px 0 0' }} />
        </>
      )}
      <ReadingBody text={body.text} pending={body.pending} mobile marginTop={question ? 18 : 20} />

      <StarDivider count={3} size={13} color="var(--divider)" style={{ margin: '52px 0 50px' }} />
      <ReadingActionsMobile t={t} savingImage={savingImage} onBack={onBack} onShare={onShare} onDownload={onDownload} />
      <StarDivider count={3} size={13} color="var(--divider)" style={{ margin: '52px 0 50px' }} />
    </div>
  );
}

export default ReadingMobile;
