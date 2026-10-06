'use client';
import React from 'react';
import { CarotMenu } from '@/components/CarotMenu';
export default function Page() {
  // Shows which nav callback the last tap fired, so an interaction scenario can
  // prove each in-site link (About / All cards / Privacy) is wired.
  const [tapped, setTapped] = React.useState<string | null>(null);
  return (<div id="codeyam-capture" style={{ position: 'relative', background: 'var(--carot-screen)', width: 390, height: 720, overflow: 'hidden' }}>
    <CarotMenu onAbout={() => setTapped('about')} onGallery={() => setTapped('gallery')} onPrivacy={() => setTapped('privacy')} />
    {tapped && (
      <div data-tapped={tapped} style={{ position: 'absolute', left: 0, right: 0, bottom: 8, zIndex: 700, textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--carot-sage-light)' }}>
        tapped: {tapped}
      </div>
    )}
  </div>);
}
