'use client';
import { Comments } from '@/components/Comments';
const seed = [
  { id: '1', name: 'Lucía', text: 'Me salió La Estrella justo cuando más lo necesitaba ✨', createdAt: '2026-06-03T10:00:00Z' },
  { id: '2', name: 'Tomás', text: 'Charly como El Loco es perfecto.', createdAt: '2026-05-29T10:00:00Z' },
];
export default function Page() {
  return (<div id="codeyam-capture" style={{ background: 'var(--carot-screen)', width: 390, boxSizing: 'border-box' }}>
    <Comments initial={seed} />
  </div>);
}
