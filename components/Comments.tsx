'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCarot } from '@/lib/i18n';
import { useIsDesktop } from '@/lib/useIsDesktop';

export interface CommentItem {
  id: string;
  name: string;
  text: string;
  createdAt: string; // ISO string
}

const C_MUTED = 'rgba(255,255,255,.42)';
const C_HAIR = '1px solid rgba(175,188,167,.16)';

function formatDate(iso: string): string {
  const d = new Date(iso);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()}`;
}

export function CommentRow({ name, date, text }: { name: string; date: string; text: string }) {
  return (
    <div style={{ padding: '18px 0' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 16, color: C_MUTED }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 14, color: C_MUTED, letterSpacing: '.06em' }}>{date}</span>
      </div>
      <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16, lineHeight: 1.6, color: 'var(--carot-cream-text)' }}>{text}</p>
    </div>
  );
}

/** Login-free comments, persisted to the database. */
export function Comments({ initial }: { initial: CommentItem[] }) {
  const { t } = useCarot();
  const router = useRouter();
  const isDesktop = useIsDesktop();
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState(false);
  const [name, setName] = React.useState('');
  const [text, setText] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);

  const list = initial;

  const submit = async () => {
    if (!name.trim() || !text.trim() || submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), text: text.trim() }),
      });
      if (res.ok) {
        setName('');
        setText('');
        setForm(false);
        setOpen(true);
        router.refresh();
      }
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontWeight: 300,
    fontSize: 15,
    color: 'var(--carot-ink)',
    background: 'var(--carot-cream)',
    border: '1px solid var(--carot-taupe-deep)',
    borderRadius: 10,
    padding: '11px 13px',
    outline: 'none',
  };
  const linkBtn: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px 0',
    fontFamily: 'var(--font-body)',
    fontWeight: 400,
    fontSize: 15,
    color: 'rgba(255,255,255,.42)',
  };
  const toggleBtn: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '14px 0',
    fontFamily: 'var(--font-body)',
    fontWeight: 400,
    fontSize: 18,
    color: 'rgba(255,255,255,.42)',
  };

  return (
    <div style={{ padding: '14px 26px 16px', background: 'var(--carot-screen)', maxWidth: isDesktop ? 1080 : undefined, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, margin: '0 0 14px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 19, color: C_MUTED }}>
          {t.commentsTitle} ({list.length})
        </span>
        {!form && (
          <button
            onClick={() => setForm(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 18, color: 'var(--carot-sage-light)' }}
          >
            {t.commentCta}
          </button>
        )}
      </div>

      <div style={{ borderTop: C_HAIR }}>
        {list.length === 0 ? (
          <p style={{ margin: 0, padding: '26px 0', textAlign: 'center', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,.42)' }}>
            {t.commentsEmpty[0]}
            <br />
            {t.commentsEmpty[1]}
          </p>
        ) : (
          <CommentRow name={list[0].name} date={formatDate(list[0].createdAt)} text={list[0].text} />
        )}
      </div>

      {open &&
        list.slice(1).map((c) => (
          <div key={c.id} style={{ borderTop: C_HAIR }}>
            <CommentRow name={c.name} date={formatDate(c.createdAt)} text={c.text} />
          </div>
        ))}

      {form && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, padding: '14px 0' }}>
          <input style={inputStyle} placeholder={t.yourName} value={name} onChange={(e) => setName(e.target.value)} />
          <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 66 }} placeholder={t.yourComment} value={text} onChange={(e) => setText(e.target.value)} />
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button
              onClick={submit}
              disabled={submitting}
              style={{ border: 'none', cursor: 'pointer', background: 'var(--carot-sage-light)', color: '#2b2922', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, padding: '9px 18px', borderRadius: 10, opacity: submitting ? 0.6 : 1 }}
            >
              {t.post}
            </button>
            <button onClick={() => setForm(false)} style={linkBtn}>
              {t.cancel}
            </button>
          </div>
        </div>
      )}

      <div style={{ borderTop: C_HAIR, paddingTop: 4 }}>
        {list.length > 1 ? (
          <button onClick={() => setOpen((o) => !o)} style={toggleBtn}>
            <span style={{ display: 'inline-block', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s', fontSize: 14 }}>⌄</span>
            {open ? t.viewLess : t.viewAll}
          </button>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}

export default Comments;
