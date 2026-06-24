'use client';
import { CardReading } from '@/components/CardReading';
import { CAROT_CARDS } from '@/data/cards';
export default function Page() {
  return (<div id="codeyam-capture" style={{ background: 'var(--carot-screen)', width: 390, boxSizing: 'border-box' }}>
    <CardReading card={CAROT_CARDS[0]} origin="gallery" instant />
  </div>);
}
