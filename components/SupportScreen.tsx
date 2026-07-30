'use client';

import React from 'react';
import Link from 'next/link';
import { useCarot } from '@/lib/i18n';
import { CAROT_IG_URL } from '@/lib/links';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { BackHeader } from '@/components/BackHeader';
import { DesktopNav } from '@/components/DesktopNav';

/**
 * Support — the page the App Store's "Support URL" points at.
 *
 * Written to actually answer things, not merely to exist: App Review opens this
 * link, and a page that only says "email us" reads as a placeholder. The
 * questions below are the ones the app genuinely provokes — why the daily card
 * can't be redrawn, whether an account is needed, where the data lives.
 *
 * Copy is local to this file for the same reason as PrivacyScreen's.
 */

const CONTACT = 'hola@elcarot.com';

type Faq = { q: string; a: string };

const COPY: Record<
  'es' | 'en',
  { context: string; title: string; lead: string; faqs: Faq[]; contactHeading: string; contactBody: string; igLabel: string; privacyLabel: string }
> = {
  es: {
    context: 'Soporte',
    title: 'Ayuda',
    lead: 'El Carot es un mazo de tarot de los 22 arcanos mayores, cada uno encarnado por un personaje cuyo nombre empieza con C. Acá abajo están las preguntas que más nos hacen; si la tuya no está, escribinos.',
    faqs: [
      {
        q: '¿Por qué no puedo volver a tirar la carta del día?',
        a: 'Porque está atada a la fecha, a propósito. La idea es que sea una carta y no un sorteo hasta que salga la que te guste. Mañana hay otra.',
      },
      {
        q: '¿Necesito una cuenta?',
        a: 'No. El Carot funciona completo sin cuenta. En la app podés iniciar sesión con Apple si querés, y lo único que agrega es tu nombre en el saludo y un cajón propio para tus cartas.',
      },
      {
        q: '¿Dónde quedan mis cartas y mis preguntas?',
        a: 'En tu dispositivo. El Carot no tiene servidores donde guardar tu historial, así que tus tiradas viven en el almacenamiento local del navegador o de la app.',
      },
      {
        q: '¿Cómo borro mis datos?',
        a: 'En la web, borrando los datos del sitio desde tu navegador. En la app, desinstalándola. En los dos casos se va todo, porque no hay copia en ningún otro lado.',
      },
      {
        q: 'Perdí mi historial al cambiar de teléfono o de navegador',
        a: 'Es esperable: como nada se guarda en un servidor, el historial no viaja entre dispositivos. Es el costo de que tus preguntas no salgan de tu teléfono.',
      },
      {
        q: 'Encontré algo que no funciona',
        a: 'Escribinos contando qué hiciste y qué esperabas que pasara. Si podés, sumá una captura: ayuda muchísimo.',
      },
    ],
    contactHeading: 'Escribinos',
    contactBody: 'Contestamos a todo. Si es un problema con la app, contanos qué dispositivo usás.',
    igLabel: 'Seguinos en Instagram',
    privacyLabel: 'Política de privacidad',
  },
  en: {
    context: 'Support',
    title: 'Help',
    lead: 'El Carot is a tarot deck of the 22 major arcana, each one worn by a character whose name starts with C. Below are the questions we get most; if yours is not here, write to us.',
    faqs: [
      {
        q: 'Why can I not redraw the card of the day?',
        a: 'Because it is pinned to the date, on purpose. The point is that it is one card, not a raffle you spin until you like the result. Tomorrow brings another.',
      },
      {
        q: 'Do I need an account?',
        a: 'No. El Carot works fully without one. In the app you can sign in with Apple if you like, and all it adds is your name in the greeting and a drawer of your own for your cards.',
      },
      {
        q: 'Where do my cards and questions live?',
        a: 'On your device. El Carot has no servers on which to keep your history, so your draws live in your browser or app local storage.',
      },
      {
        q: 'How do I delete my data?',
        a: 'On the web, clear the site data from your browser. In the app, uninstall it. Either way everything goes, because there is no copy anywhere else.',
      },
      {
        q: 'I lost my history when I changed phone or browser',
        a: 'That is expected: since nothing is kept on a server, history does not travel between devices. It is the cost of your questions never leaving your phone.',
      },
      {
        q: 'I found something broken',
        a: 'Write to us with what you did and what you expected to happen. A screenshot helps enormously if you can add one.',
      },
    ],
    contactHeading: 'Write to us',
    contactBody: 'We answer everything. If it is a problem with the app, tell us which device you are on.',
    igLabel: 'Follow on Instagram',
    privacyLabel: 'Privacy policy',
  },
};

export function SupportScreen() {
  const { lang } = useCarot();
  const isDesktop = useIsDesktop();
  const copy = COPY[lang];

  const sage = 'var(--carot-sage-light)';
  const cream = 'var(--carot-cream-text)';
  const display = 'var(--font-display)';

  const body: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    lineHeight: 1.75,
    color: cream,
    margin: 0,
  };

  return (
    <div
      data-fullbleed
      style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', background: 'var(--carot-screen)' }}
    >
      {isDesktop && <DesktopNav title={copy.context} />}
      <div
        style={{
          flex: 1,
          width: '100%',
          maxWidth: 640,
          margin: '0 auto',
          padding: '0 30px 60px',
          boxSizing: 'border-box',
        }}
      >
        {!isDesktop && <BackHeader title={copy.context} />}

        <h1
          style={{
            margin: isDesktop ? '48px 0 18px' : '30px 0 18px',
            fontFamily: display,
            fontWeight: 400,
            fontSize: isDesktop ? 44 : 34,
            lineHeight: 1.1,
            color: cream,
          }}
        >
          {copy.title}
        </h1>

        <p style={{ ...body, margin: '0 0 36px', color: 'rgba(233,217,199,.85)' }}>{copy.lead}</p>

        {copy.faqs.map((faq) => (
          <section key={faq.q} style={{ margin: '0 0 28px' }}>
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: 21, color: sage, margin: '0 0 8px' }}>
              {faq.q}
            </h2>
            <p style={body}>{faq.a}</p>
          </section>
        ))}

        <div style={{ height: 1, background: 'rgba(175,188,167,.2)', margin: '34px 0 30px' }} />

        <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: 22, color: sage, margin: '0 0 10px' }}>
          {copy.contactHeading}
        </h2>
        <p style={{ ...body, margin: '0 0 14px' }}>{copy.contactBody}</p>
        <p style={{ ...body, margin: '0 0 30px' }}>
          <a href={`mailto:${CONTACT}`} style={{ color: sage, fontWeight: 600, textDecoration: 'none', fontSize: 18 }}>
            {CONTACT}
          </a>
        </p>

        <p style={{ ...body, fontSize: 15, display: 'flex', flexWrap: 'wrap', gap: 18 }}>
          <a href={CAROT_IG_URL} target="_blank" rel="noopener noreferrer" style={{ color: sage, textDecoration: 'none', fontWeight: 600 }}>
            {copy.igLabel}
          </a>
          <Link href="/privacy" style={{ color: sage, textDecoration: 'none', fontWeight: 600 }}>
            {copy.privacyLabel}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SupportScreen;
