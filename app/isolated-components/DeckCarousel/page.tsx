'use client';
import { DeckCarousel } from '@/components/MessageIntro';
export default function Page() {
  return (<div id="codeyam-capture" style={{ background: 'var(--carot-screen)', width: 390, height: 520, display: 'flex', flexDirection: 'column' }}>
    <DeckCarousel back="/assets/card-back.jpg" onDraw={() => {}} />
  </div>);
}
