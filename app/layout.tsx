import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { CarotProvider } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { MenuProvider } from '@/lib/menu';
import { NO_FLASH_SCRIPT, THEME_COLOR, savedTheme } from '@/lib/theme';
import { MenuOverlay } from '@/components/MenuOverlay';
import { VisitTracker } from '@/components/VisitTracker';

export const metadata: Metadata = {
  title: 'El Carot',
  description:
    'Un mazo de tarot de los 22 arcanos mayores, cada uno encarnado por un personaje cuyo nombre empieza con C. Tirá una carta, vela darse vuelta y leé su mensaje.',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: THEME_COLOR.light },
    { media: '(prefers-color-scheme: dark)', color: THEME_COLOR.dark },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const headerLang = h.get('x-carot-lang');
  const lang: Lang = headerLang === 'en' ? 'en' : 'es';
  // A saved choice renders server-side; without one, the inline script follows the device.
  const theme = savedTheme(h.get('x-carot-theme'), null) ?? undefined;

  return (
    <html lang={lang} data-theme={theme} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* First in <body>, before any content paints. Not in <head>: tools that inject
            their own <head> scripts would shift it and break hydration. */}
        {!theme && <script dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }} />}
        <CarotProvider initialLang={lang}>
          <MenuProvider>
            <div className="carot-shell">
              <div className="carot-scroll">{children}</div>
              <MenuOverlay />
              <VisitTracker />
            </div>
          </MenuProvider>
        </CarotProvider>
      </body>
    </html>
  );
}
