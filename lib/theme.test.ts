import { describe, it, expect, vi, afterEach } from 'vitest';
import { savedTheme, currentTheme, setTheme, THEME_COLOR } from './theme';

describe('savedTheme', () => {
  // a ?theme= URL override wins over the saved cookie
  it('prefers the URL value over the cookie', () => {
    expect(savedTheme('light', 'dark')).toBe('light');
    expect(savedTheme('dark', 'light')).toBe('dark');
  });

  // with no URL override, the saved cookie is used
  it('falls back to the cookie when the URL has no theme', () => {
    expect(savedTheme(null, 'light')).toBe('light');
    expect(savedTheme(undefined, 'dark')).toBe('dark');
  });

  // a junk URL value is ignored rather than overriding a valid cookie
  it('ignores an unknown URL value', () => {
    expect(savedTheme('sepia', 'dark')).toBe('dark');
    expect(savedTheme('', 'light')).toBe('light');
  });

  // no explicit choice anywhere means the device setting decides
  it('returns null when neither source holds a valid theme', () => {
    expect(savedTheme(null, null)).toBeNull();
    expect(savedTheme(undefined, undefined)).toBeNull();
    expect(savedTheme('blue', 'LIGHT')).toBeNull();
  });
});

function fakeDocument(theme?: string) {
  const metas = [{ setAttribute: vi.fn() }, { setAttribute: vi.fn() }];
  const doc = {
    documentElement: { dataset: theme ? { theme } : ({} as Record<string, string>) },
    cookie: '',
    querySelectorAll: vi.fn(() => metas),
  };
  return { doc, metas };
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('currentTheme', () => {
  // reads the theme the server or the no-flash script put on <html>
  it('reports light when the page is light', () => {
    vi.stubGlobal('document', fakeDocument('light').doc);
    expect(currentTheme()).toBe('light');
  });

  // dark is the default for an explicit dark page or a missing attribute
  it('reports dark otherwise', () => {
    vi.stubGlobal('document', fakeDocument('dark').doc);
    expect(currentTheme()).toBe('dark');
    vi.stubGlobal('document', fakeDocument().doc);
    expect(currentTheme()).toBe('dark');
  });
});

describe('setTheme', () => {
  // applies the theme to <html> and recolours the browser chrome
  it('sets the html attribute and every theme-color meta', () => {
    const { doc, metas } = fakeDocument('dark');
    vi.stubGlobal('document', doc);
    vi.stubGlobal('localStorage', { setItem: vi.fn() });
    setTheme('light');
    expect(doc.documentElement.dataset.theme).toBe('light');
    for (const m of metas) expect(m.setAttribute).toHaveBeenCalledWith('content', THEME_COLOR.light);
  });

  // remembers the choice for the next visit in both the cookie and localStorage
  it('persists the choice for a year', () => {
    const { doc } = fakeDocument('light');
    const setItem = vi.fn();
    vi.stubGlobal('document', doc);
    vi.stubGlobal('localStorage', { setItem });
    setTheme('dark');
    expect(doc.cookie).toBe(`carot_theme=dark;path=/;max-age=${60 * 60 * 24 * 365}`);
    expect(setItem).toHaveBeenCalledWith('carot_theme', 'dark');
  });

  // blocked storage must not stop the theme from switching
  it('still switches when localStorage throws', () => {
    const { doc } = fakeDocument('dark');
    vi.stubGlobal('document', doc);
    vi.stubGlobal('localStorage', {
      setItem: () => {
        throw new Error('blocked');
      },
    });
    expect(() => setTheme('light')).not.toThrow();
    expect(doc.documentElement.dataset.theme).toBe('light');
  });
});
