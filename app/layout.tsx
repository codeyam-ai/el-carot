import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { CarotProvider } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { MenuOverlay } from '@/components/MenuOverlay';

export const metadata: Metadata = {
  title: 'El Carot',
  description:
    'Un mazo de tarot de los 22 arcanos mayores, cada uno encarnado por un personaje cuyo nombre empieza con C. Tirá una carta, vela darse vuelta y leé su mensaje.',
};

export const viewport: Viewport = {
  themeColor: '#202020',
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerLang = (await headers()).get('x-carot-lang');
  const lang: Lang = headerLang === 'en' ? 'en' : 'es';

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <CarotProvider initialLang={lang}>
          {children}
          <MenuOverlay />
        </CarotProvider>
      </body>
    </html>
  );
}
