/* El Carot — Home / landing screen.
 * Composes the welcome header, the EL CAROT wordmark, the fanned-cards
 * illustration, and the three experience buttons. The fanned trio is chosen
 * on the server (passed in as `fan`) so it is present in the server-rendered
 * HTML — visible immediately, no client-hydration dependency. */

import React from 'react';
import { type Card } from '@/data/cards';
import { HomeHeader } from '@/components/HomeHeader';
import { Wordmark } from '@/components/Wordmark';
import { CardFan } from '@/components/CardFan';
import { HomeActions } from '@/components/HomeActions';

export default function Home({ fan }: { fan: Card[] }) {
  return (
    <div
      style={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--carot-screen)',
        padding: '0 26px 30px',
        boxSizing: 'border-box',
      }}
    >
      <HomeHeader />
      <Wordmark />
      <CardFan cards={fan} />
      <HomeActions />
    </div>
  );
}
