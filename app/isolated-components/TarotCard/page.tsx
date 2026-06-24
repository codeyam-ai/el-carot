'use client';
import { TarotCard } from '@/components/TarotCard';
export default function Page() {
  return (<div id="codeyam-capture" style={{ background: 'var(--carot-screen)', padding: 26 }}>
    <TarotCard face="/assets/cards/00-el-loco.png" back="/assets/card-back.jpg" flipped width={214} alt="Charly García — El Loco" />
  </div>);
}
