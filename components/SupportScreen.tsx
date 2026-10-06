'use client';

import React from 'react';
import Link from 'next/link';
import { useCarot } from '@/lib/i18n';
import { CAROT_IG_URL } from '@/lib/links';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { BackHeader } from '@/components/BackHeader';
import { DesktopNav } from '@/components/DesktopNav';

/**
 * Support — help for the website. Written to actually answer things, not
 * merely to exist: why the daily card can't be redrawn, whether an account is
 * needed, where questions go. Data answers must stay in step with PrivacyScreen.
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
        a: 'Porque está atada a la fecha, a propósito: es la misma carta para todos durante el día. La idea es que sea una carta y no un sorteo hasta que salga la que te guste. Mañana hay otra.',
      },
      {
        q: '¿Necesito una cuenta?',
        a: 'No. En El Carot no hay cuentas: todo funciona sin registrarte.',
      },
      {
        q: '¿Qué pasa con las preguntas que escribo?',
        a: 'Se envían a Google (Gemini) para escribir la interpretación de tu carta, y las guardamos sin saber quién las escribió. Por eso te pedimos que no incluyas datos personales. El detalle está en la política de privacidad.',
      },
      {
        q: '¿Cómo borro mis datos?',
        a: 'No guardamos nada que te identifique, así que no hay una cuenta que borrar. Tu preferencia de idioma se borra borrando los datos del sitio en tu navegador. Si querés que borremos un comentario tuyo, escribinos.',
      },
      {
        q: 'Encontré algo que no funciona',
        a: 'Escribinos contando qué hiciste y qué esperabas que pasara. Si podés, sumá una captura: ayuda muchísimo.',
      },
    ],
    contactHeading: 'Escribinos',
    contactBody: 'Contestamos a todo. Si es un problema con el sitio, contanos qué navegador y qué dispositivo usás.',
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
        a: 'Because it is pinned to the date, on purpose: it is the same card for everyone that day. The point is that it is one card, not a raffle you spin until you like the result. Tomorrow brings another.',
      },
      {
        q: 'Do I need an account?',
        a: 'No. El Carot has no accounts: everything works without signing up.',
      },
      {
        q: 'What happens to the questions I type?',
        a: 'They are sent to Google (Gemini) to write the interpretation of your card, and we keep them without knowing who wrote them. That is why we ask you to leave out personal details. The privacy policy has the full picture.',
      },
      {
        q: 'How do I delete my data?',
        a: 'We keep nothing that identifies you, so there is no account to delete. Your language preference goes when you clear the site data in your browser. If you want a comment of yours removed, write to us.',
      },
      {
        q: 'I found something broken',
        a: 'Write to us with what you did and what you expected to happen. A screenshot helps enormously if you can add one.',
      },
    ],
    contactHeading: 'Write to us',
    contactBody: 'We answer everything. If it is a problem with the site, tell us which browser and device you are on.',
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
