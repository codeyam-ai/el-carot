'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCarot } from '@/lib/i18n';
import { CAROT_CARDS } from '@/data/cards';
import { BackHeader } from '@/components/BackHeader';
import { Footer } from '@/components/Footer';

/** "Ver todas las cartas" — the full deck in a two-column grid. Tap any card to open its reading. */
export function GalleryGrid() {
  const { t } = useCarot();
  const router = useRouter();
  const sage = 'var(--carot-sage-light)';

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', background: 'var(--carot-screen)', boxSizing: 'border-box' }}>
      <div style={{ padding: '0 22px 36px' }}>
        <BackHeader title={t.galleryTitle} />

        <h1 style={{ margin: '22px 0 6px', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 34, lineHeight: 1.05, color: 'var(--carot-cream-text)' }}>
          {t.galleryHeading}
        </h1>
        <p style={{ margin: '0 0 22px', textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 15, color: sage }}>
          {t.gallerySub}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          {CAROT_CARDS.map((card) => (
            <button
              key={card.n}
              onClick={() => router.push(`/reading?n=${card.n}&origin=gallery`)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/assets/cards/${card.img}`}
                alt={`${card.name} — ${card.arcana}`}
                draggable={false}
                style={{
                  width: '100%',
                  aspectRatio: '0.535',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 10,
                  border: '2px solid rgba(175,188,167,.45)',
                  boxShadow: '0 8px 22px rgba(0,0,0,.4)',
                }}
              />
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GalleryGrid;
