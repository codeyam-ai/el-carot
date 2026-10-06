'use client';

// Client-side helpers for isolation renderers that run on the server: function
// props (callbacks) and component state can't cross from a server component, so
// the renderers mount these instead of the components directly.

import React from 'react';
import { CarotMenu } from '@/components/CarotMenu';
import { DeckArc } from '@/components/DeckArc';
import { DeckCarousel } from '@/components/MessageIntro';
import { MenuToggle } from '@/components/MenuToggle';

export function NoopDeckArc({ back }: { back: string }) {
  return <DeckArc back={back} onDraw={() => {}} />;
}

export function NoopDeckCarousel({ back }: { back: string }) {
  return <DeckCarousel back={back} onDraw={() => {}} />;
}

export function NoopMenuToggle({ open, label }: { open: boolean; label: string }) {
  return <MenuToggle open={open} onToggle={() => {}} label={label} />;
}

/** CarotMenu plus a readout of which nav callback the last tap fired, so an
 * interaction scenario can prove each in-site link (About / All cards /
 * Privacy) is wired. */
export function TappableCarotMenu() {
  const [tapped, setTapped] = React.useState<string | null>(null);
  return (
    <>
      <CarotMenu onAbout={() => setTapped('about')} onGallery={() => setTapped('gallery')} onPrivacy={() => setTapped('privacy')} />
      {tapped && (
        <div data-tapped={tapped} style={{ position: 'absolute', left: 0, right: 0, bottom: 8, zIndex: 700, textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--carot-sage-light)' }}>
          tapped: {tapped}
        </div>
      )}
    </>
  );
}
