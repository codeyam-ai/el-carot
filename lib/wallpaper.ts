// Compose a phone wallpaper from a drawn card: just the card art, centred, on a
// background of the card's own frame colour — so the extra margin reads as an
// extension of the card border and the person can reposition it on their phone.
// Client-only (uses <canvas>); the layout math is a pure, unit-tested helper.

import { type Card } from '@/data/cards';

const W = 1080;
const H = 1920;
const CREAM = '#eedbc4'; // --carot-cream — fallback frame colour if sampling fails

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * Centre a card of aspect `ratio` (width / height) inside a `canvasW × canvasH`
 * frame, occupying `widthFraction` of the width but never taller than
 * `maxHeightFraction` of the height. Pure → unit-testable without a canvas.
 */
export function computeCardRect(
  canvasW: number,
  canvasH: number,
  ratio: number,
  widthFraction = 0.72,
  maxHeightFraction = 0.82,
): Rect {
  let w = canvasW * widthFraction;
  let h = w / ratio;
  const maxH = canvasH * maxHeightFraction;
  if (h > maxH) {
    h = maxH;
    w = h * ratio;
  }
  return { x: (canvasW - w) / 2, y: (canvasH - h) / 2, w, h };
}

/**
 * Load a same-origin image via a plain `<img>` (the way the reading page loads
 * card art). No `crossOrigin` is set: same-origin images never taint the canvas,
 * so `getImageData`/`toBlob` stay allowed. A timeout rejects rather than hangs if
 * the image never fires load/error.
 */
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const timer = setTimeout(() => reject(new Error(`timed out loading ${src}`)), 8000);
    img.onload = () => {
      clearTimeout(timer);
      resolve(img);
    };
    img.onerror = () => {
      clearTimeout(timer);
      reject(new Error(`failed to load ${src}`));
    };
    img.src = src;
  });
}

/**
 * Read the card's frame colour by sampling a pixel just inside its top edge
 * (the aged-cream border). Returns an `rgb(...)` string, or the cream token if
 * the image can't be sampled (e.g. a tainted canvas).
 */
function sampleFrameColor(img: HTMLImageElement): string {
  try {
    const c = document.createElement('canvas');
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    const cx = c.getContext('2d');
    if (!cx) return CREAM;
    cx.drawImage(img, 0, 0);
    // The top-left corner is reliably the card's aged-cream frame/parchment.
    const inset = Math.max(4, Math.floor(img.naturalWidth * 0.02));
    const [r, g, b] = cx.getImageData(inset, inset, 1, 1).data;
    return `rgb(${r}, ${g}, ${b})`;
  } catch {
    return CREAM;
  }
}

/**
 * Render the wallpaper into a 1080×1920 canvas: the card art centred on a
 * background of its own frame colour, with generous margin all around. Returns
 * the canvas, or null if a 2D context isn't available.
 */
export async function renderWallpaperCanvas(card: Card): Promise<HTMLCanvasElement | null> {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  let bg = CREAM;
  try {
    const img = await loadImage(`/assets/cards/${card.img}`);
    bg = sampleFrameColor(img);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);
    const ratio = img.naturalWidth / img.naturalHeight || 0.535;
    const { x, y, w, h } = computeCardRect(W, H, ratio);
    ctx.drawImage(img, x, y, w, h);
  } catch {
    // Image missing — still produce a solid frame-colour wallpaper.
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);
  }
  return canvas;
}

/**
 * Compose a portrait phone wallpaper for a card. Returns a PNG Blob, or null if
 * compositing fails. Guarded by a timeout so a stuck `toBlob` can never hang the
 * caller (e.g. the download button's busy state).
 */
export async function composeWallpaper(card: Card): Promise<Blob | null> {
  const canvas = await renderWallpaperCanvas(card);
  if (!canvas) return null;
  try {
    return await new Promise<Blob | null>((resolve) => {
      const timer = setTimeout(() => resolve(null), 8000);
      canvas.toBlob((b) => {
        clearTimeout(timer);
        resolve(b);
      }, 'image/png');
    });
  } catch {
    return null; // tainted canvas, etc. — never hang the caller
  }
}

/** Compose the wallpaper and trigger a download. Returns true on success. */
export async function downloadWallpaper(card: Card): Promise<boolean> {
  const blob = await composeWallpaper(card);
  if (!blob) return false;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const slug = card.arcana
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  a.href = url;
  a.download = `el-carot-${card.n}-${slug || 'carta'}.png`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  // Revoke after a tick so the browser can start the download first.
  setTimeout(() => URL.revokeObjectURL(url), 4000);
  return true;
}
