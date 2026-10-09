import React from 'react';
import { cardText, type Card, type Lang } from '@/data/cards';
import type { Strings } from '@/lib/i18n';
import { StarDivider } from '@/components/StarDivider';
import { ReadingQuestion } from '@/components/ReadingQuestion';
import { CardIdentity } from '@/components/CardIdentity';
import { CardQuote } from '@/components/CardQuote';
import { ReadingBody } from '@/components/ReadingBody';
import { ReadingActionsDesktop } from '@/components/ReadingActionsDesktop';

/**
 * The desktop reading column: the question (if any) on top, then who the card
 * is, the quote (only without a question), the meaning or interpretation, and
 * the actions row.
 */
export function ReadingTextColumn({
  card,
  lang,
  t,
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
  question: string | null;
  body: { text: string; pending: boolean };
  savingImage: boolean;
  onBack: () => void;
  onShare: () => void;
  onDownload: () => void;
}) {
  return (
    <div style={{ maxWidth: 600 }}>
      {question && (
        <div style={{ marginBottom: 34 }}>
          <ReadingQuestion text={question} />
        </div>
      )}
      <CardIdentity card={card} t={t} />
      {!question && (
        <>
          <CardQuote text={cardText(card, 'quote', lang)} />
          <StarDivider count={3} size={12} color="#5B6256" style={{ margin: '0 0 22px', justifyContent: 'flex-start' }} />
        </>
      )}
      <ReadingBody text={body.text} pending={body.pending} />
      <ReadingActionsDesktop t={t} savingImage={savingImage} onBack={onBack} onShare={onShare} onDownload={onDownload} />
    </div>
  );
}

export default ReadingTextColumn;
