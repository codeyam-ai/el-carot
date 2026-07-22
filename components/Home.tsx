/* El Carot — Home / landing screen.
 * Composes the welcome header, the EL CAROT wordmark, the fanned-cards
 * illustration, and the three experience buttons. The fanned trio is chosen
 * on the server (passed in as `fan`) so it is present in the server-rendered
 * HTML — visible immediately, no client-hydration dependency. */

import React from 'react';
import { type Card } from '@/data/cards';
import { HomeHeader } from '@/components/HomeHeader';
import { HomeTitle } from '@/components/HomeTitle';
import { CardFan } from '@/components/CardFan';
import { HomeDeckStrip } from '@/components/HomeDeckStrip';
import { HomeActions } from '@/components/HomeActions';

export default function Home({ fan, strip }: { fan: Card[]; strip: Card[] }) {
  return (
    <div
      data-fullbleed
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
      <HomeTitle />

      {/* mobile: the fanned trio fills the space, buttons stacked below */}
      <div className="carot-only-mobile" style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
        <CardFan cards={fan} />
        <HomeActions layout="column" />
      </div>

      {/* desktop: the drifting row + button pills, vertically centred together */}
      <div className="carot-only-desktop" style={{ flex: 1, minHeight: 0, flexDirection: 'column', justifyContent: 'center' }}>
        <HomeDeckStrip cards={strip} />
        <HomeActions layout="row" />
      </div>
    </div>
  );
}
