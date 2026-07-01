import { describe, it, expect } from 'vitest';
import { computeCardRect } from './wallpaper';

describe('computeCardRect', () => {
  // a tall card (portrait ratio) is centred and bounded by width
  it('centres a portrait card and bounds it by width', () => {
    // ratio 0.6 is short enough that 72%-of-width fits under the height cap
    const r = computeCardRect(1000, 2000, 0.6);
    expect(r.w).toBeCloseTo(720); // 0.72 * 1000
    expect(r.h).toBeCloseTo(1200); // 720 / 0.6
    expect(r.x).toBeCloseTo(140); // (1000 - 720) / 2
    expect(r.y).toBeCloseTo(400); // (2000 - 1200) / 2
  });

  // a very tall/narrow card is bounded by the height cap instead of width
  it('falls back to the height cap for very tall cards', () => {
    const r = computeCardRect(1000, 2000, 0.3); // 720 / 0.3 = 2400 > 1640 cap
    const maxH = 2000 * 0.82; // 1640
    expect(r.h).toBeCloseTo(maxH);
    expect(r.w).toBeCloseTo(maxH * 0.3); // 492
    expect(r.x).toBeCloseTo((1000 - maxH * 0.3) / 2);
    expect(r.y).toBeCloseTo((2000 - maxH) / 2);
  });

  // the result is always centred: equal margins on each axis
  it('keeps equal margins on both axes', () => {
    const r = computeCardRect(1080, 1920, 0.535);
    expect(r.x).toBeCloseTo((1080 - r.w) / 2);
    expect(r.y).toBeCloseTo((1920 - r.h) / 2);
    expect(r.x).toBeGreaterThan(0);
    expect(r.y).toBeGreaterThan(0);
  });
});
