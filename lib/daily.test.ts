import { describe, it, expect } from 'vitest';
import { dailyCardIndex, formatDailyDate } from './daily';

describe('dailyCardIndex', () => {
  // the same calendar day always yields the same card
  it('is stable across two Date instances on the same day', () => {
    const a = new Date(2026, 5, 24, 9, 0, 0);
    const b = new Date(2026, 5, 24, 23, 30, 0);
    expect(dailyCardIndex(a, 22)).toBe(dailyCardIndex(b, 22));
  });

  // different days generally differ (and never throw)
  it('changes from one day to the next', () => {
    const a = dailyCardIndex(new Date(2026, 5, 24), 22);
    const b = dailyCardIndex(new Date(2026, 5, 25), 22);
    expect(a).not.toBe(b);
  });

  // the index is always a valid position in the deck
  it('stays within the deck bounds', () => {
    for (let day = 1; day <= 28; day++) {
      const idx = dailyCardIndex(new Date(2026, 2, day), 22);
      expect(idx).toBeGreaterThanOrEqual(0);
      expect(idx).toBeLessThan(22);
    }
  });
});

describe('formatDailyDate', () => {
  // Spanish uses the "D de mes de YYYY" long form
  it('formats Spanish dates with month names', () => {
    expect(formatDailyDate(new Date(2026, 5, 24), 'es')).toBe('24 de junio de 2026');
  });

  // English uses the "Month D, YYYY" form
  it('formats English dates with month names', () => {
    expect(formatDailyDate(new Date(2026, 5, 24), 'en')).toBe('June 24, 2026');
  });
});
