'use client';
import { StarDivider } from '@/components/StarDivider';
export default function Page() {
  return (<div id="codeyam-capture" style={{ background: 'var(--carot-screen)', padding: 40 }}>
    <StarDivider count={3} size={16} color="var(--carot-sage-light)" />
  </div>);
}
