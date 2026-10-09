'use client';

import React from 'react';
import type { Card, Lang } from '@/data/cards';
import type { Strings } from '@/lib/i18n';
import { shareReading } from '@/lib/share';
import { downloadWallpaper } from '@/lib/wallpaper';

/** Share / save-as-wallpaper for a reading, with a brief confirmation toast. */
export function useReadingActions(card: Card, lang: Lang, t: Strings) {
  const [toast, setToast] = React.useState<string | null>(null);
  const [savingImage, setSavingImage] = React.useState(false);
  const toastTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const flash = React.useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  }, []);

  React.useEffect(() => () => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
  }, []);

  const onShare = React.useCallback(async () => {
    const res = await shareReading(card, lang);
    if (res === 'copied') flash(t.copied);
  }, [card, lang, t.copied, flash]);

  const onDownload = React.useCallback(async () => {
    if (savingImage) return;
    setSavingImage(true);
    try {
      const ok = await downloadWallpaper(card);
      if (ok) flash(t.imageSaved);
    } finally {
      setSavingImage(false);
    }
  }, [savingImage, card, t.imageSaved, flash]);

  return { toast, savingImage, onShare, onDownload };
}
