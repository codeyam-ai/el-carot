'use client';
import { CommentRow } from '@/components/Comments';
export default function Page() {
  return (<div id="codeyam-capture" style={{ background: 'var(--carot-screen)', padding: 26, width: 390, boxSizing: 'border-box' }}>
    <CommentRow name="Lucía" date="03.06.2026" text="Me salió La Estrella justo cuando más lo necesitaba. Gracias por este mazo hermoso ✨" />
  </div>);
}
