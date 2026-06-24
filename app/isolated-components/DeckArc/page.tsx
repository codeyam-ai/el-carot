'use client';
import { DeckArc } from '@/components/DeckArc';
export default function Page() {
  return (<div id="codeyam-capture" style={{ background: 'var(--carot-screen)', width: 1000, height: 440, display: 'flex', flexDirection: 'column' }}>
    <DeckArc back="/assets/card-back.jpg" onDraw={() => {}} />
  </div>);
}
