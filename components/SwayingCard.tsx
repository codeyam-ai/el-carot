import React from 'react';
import type { Card } from '@/data/cards';
import { TarotCard } from '@/components/TarotCard';

/** The reading's card, gently swaying with a drop shadow; turns face-up when `flipped`. */
export function SwayingCard({ card, flipped, mobile = false }: { card: Card; flipped: boolean; mobile?: boolean }) {
  return (
    <div
      style={{
        animation: 'carot-sway 6s ease-in-out infinite',
        transformOrigin: '50% 92%',
        filter: mobile ? 'drop-shadow(0 18px 34px var(--card-shadow))' : 'drop-shadow(0 24px 42px var(--card-shadow))',
      }}
    >
      <TarotCard back="/assets/card-back.jpg" face={`/assets/cards/${card.img}`} flipped={flipped} width={mobile ? 214 : 340} alt={`${card.name} — ${card.arcana}`} />
    </div>
  );
}

export default SwayingCard;
