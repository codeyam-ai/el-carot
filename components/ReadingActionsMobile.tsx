import React from 'react';
import type { Strings } from '@/lib/i18n';
import { DrawAnotherButton } from '@/components/DrawAnotherButton';
import { ReadingOutlineButton } from '@/components/ReadingOutlineButton';
import { ShareIcon } from '@/components/ShareIcon';
import { DownloadIcon } from '@/components/DownloadIcon';

/** Mobile reading actions: full-width "Elegir otra carta", then Compartir / Descargar side by side. */
export function ReadingActionsMobile({
  t,
  savingImage,
  onBack,
  onShare,
  onDownload,
}: {
  t: Strings;
  savingImage: boolean;
  onBack: () => void;
  onShare: () => void;
  onDownload: () => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
      <DrawAnotherButton label={t.drawAnother} onClick={onBack} fullWidth />
      <div style={{ display: 'flex', gap: 12 }}>
        <ReadingOutlineButton icon={<ShareIcon />} label={t.share} onClick={onShare} />
        <ReadingOutlineButton icon={<DownloadIcon />} label={t.downloadShort} onClick={onDownload} disabled={savingImage} />
      </div>
    </div>
  );
}

export default ReadingActionsMobile;
