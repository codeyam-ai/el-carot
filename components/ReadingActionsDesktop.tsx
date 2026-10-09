import React from 'react';
import type { Strings } from '@/lib/i18n';
import { DrawAnotherButton } from '@/components/DrawAnotherButton';
import { ReadingActionLink } from '@/components/ReadingActionLink';
import { ShareIcon } from '@/components/ShareIcon';
import { DownloadIcon } from '@/components/DownloadIcon';

/** Desktop reading actions in one row: "Elegir otra carta", then Compartir / Descargar Imagen links. */
export function ReadingActionsDesktop({
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
    <div style={{ display: 'flex', alignItems: 'center', gap: 30, marginTop: 34 }}>
      <DrawAnotherButton label={t.drawAnother} onClick={onBack} />
      <ReadingActionLink icon={<ShareIcon />} label={t.share} onClick={onShare} />
      <ReadingActionLink icon={<DownloadIcon />} label={t.download} onClick={onDownload} disabled={savingImage} />
    </div>
  );
}

export default ReadingActionsDesktop;
