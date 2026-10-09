'use client';

import React from 'react';
import { useCarot } from '@/lib/i18n';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { BackHeader } from '@/components/BackHeader';
import { DesktopNav } from '@/components/DesktopNav';

/**
 * The website's privacy policy. It covers only the website — there is no app
 * release — and states exactly what the site keeps: asked questions, visits and
 * comments (see prisma/schema.prisma), with coarse geo only (lib/geo.ts).
 *
 * Copy lives in this file rather than in lib/i18n's shared dictionary. A legal
 * document is versioned and reviewed as one artefact — splitting it across a
 * dictionary shared with button labels makes it easy to change half of it by
 * accident, and hard to see what the whole thing says at review time.
 */

const CONTACT = 'hola@elcarot.com';

type Section = { heading: string; body: string };

const COPY: Record<'es' | 'en', { context: string; title: string; updated: string; lead: string; sections: Section[] }> = {
  es: {
    context: 'Privacidad',
    title: 'Política de privacidad',
    updated: 'Última actualización: 5 de octubre de 2026',
    lead: 'El Carot guarda lo mínimo. No hay cuentas ni publicidad: guardamos las preguntas y los comentarios que se dejan en el sitio, sin saber quién los escribió.',
    sections: [
      {
        heading: 'Qué guardamos',
        body: 'Las preguntas que le hacés al mazo y qué carta salió, para entender qué se le pregunta. Un registro de visitas, una vez por sesión: qué página se abrió y cuándo. Y los comentarios que decidas dejar. Junto a las preguntas y las visitas guardamos sólo el país, la región y la zona horaria aproximados; nunca tu dirección IP ni tu ubicación exacta. No hay cuentas, ni publicidad, ni rastreadores de terceros.',
      },
      {
        heading: 'Las preguntas que escribís',
        body: 'Para escribir la interpretación de tu carta, la pregunta se envía a Google (Gemini) junto con la carta que salió. Quedan guardadas sin identificar: no sabemos de quién es cada una. Como se escriben libremente, te pedimos que no incluyas datos personales.',
      },
      {
        heading: 'Los comentarios',
        body: 'Los comentarios son públicos: cualquiera que visite el sitio puede ver el nombre que pongas y lo que escribas. Usá el nombre que quieras y no incluyas datos personales. Si querés que borremos un comentario tuyo, escribinos.',
      },
      {
        heading: 'Qué se guarda en tu navegador',
        body: 'Sólo tu preferencia de idioma, en el almacenamiento local de tu navegador y en una cookie, y una marca que dura lo que dura la sesión para contar tu visita una sola vez. Desaparecen si borrás los datos del sitio.',
      },
      {
        heading: 'Menores de edad',
        body: 'El Carot no está dirigido a menores de 13 años. No pedimos edad ni ningún dato que permita identificar a quien usa el sitio.',
      },
      {
        heading: 'Cambios en esta política',
        body: 'Si en el futuro El Carot cambia lo que guarda, actualizaremos esta página antes de que ese cambio entre en vigor.',
      },
    ],
  },
  en: {
    context: 'Privacy',
    title: 'Privacy Policy',
    updated: 'Last updated: 5 October 2026',
    lead: 'El Carot keeps as little as possible. There are no accounts and no advertising: we keep the questions and comments people leave on the site, without knowing who wrote them.',
    sections: [
      {
        heading: 'What we keep',
        body: 'The questions you ask the deck and which card came up, to understand what people ask it. A log of visits, once per session: which page was opened and when. And any comments you choose to leave. Alongside questions and visits we keep only your approximate country, region and time zone — never your IP address or exact location. There are no accounts, no advertising, and no third-party trackers.',
      },
      {
        heading: 'The questions you type',
        body: 'To write the interpretation of your card, your question is sent to Google (Gemini) along with the card that came up. Questions are kept without identification: we do not know whose each one is. Since they are written freely, please do not include personal details.',
      },
      {
        heading: 'Comments',
        body: 'Comments are public: anyone visiting the site can see the name you give and what you write. Use any name you like and leave out personal details. If you want a comment of yours removed, write to us.',
      },
      {
        heading: 'What is stored in your browser',
        body: 'Only your language preference, in your browser’s local storage and in a cookie, plus a marker that lasts for the session so your visit is counted once. Both disappear if you clear the site data.',
      },
      {
        heading: 'Children',
        body: 'El Carot is not directed at children under 13. We do not ask for an age or anything else that would identify whoever is using the site.',
      },
      {
        heading: 'Changes to this policy',
        body: 'If El Carot ever changes what it keeps, we will update this page before that change takes effect.',
      },
    ],
  },
};

export function PrivacyScreen() {
  const { lang } = useCarot();
  const isDesktop = useIsDesktop();
  const copy = COPY[lang];

  const sage = 'var(--text-heading)';
  const cream = 'var(--text-body)';
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
      style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', background: 'var(--surface-page)' }}
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
            margin: isDesktop ? '48px 0 6px' : '30px 0 6px',
            fontFamily: display,
            fontWeight: 400,
            fontSize: isDesktop ? 44 : 34,
            lineHeight: 1.1,
            color: cream,
          }}
        >
          {copy.title}
        </h1>

        <p style={{ ...body, fontSize: 14, color: 'var(--text-eyebrow)', margin: '0 0 28px' }}>{copy.updated}</p>

        <p
          style={{
            ...body,
            fontSize: 18,
            color: sage,
            borderLeft: '2px solid var(--border-outline)',
            paddingLeft: 18,
            margin: '0 0 36px',
          }}
        >
          {copy.lead}
        </p>

        {copy.sections.map((section) => (
          <section key={section.heading} style={{ margin: '0 0 30px' }}>
            <h2
              style={{
                fontFamily: display,
                fontWeight: 400,
                fontSize: 22,
                color: sage,
                margin: '0 0 10px',
              }}
            >
              {section.heading}
            </h2>
            <p style={body}>{section.body}</p>
          </section>
        ))}

        <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: 22, color: sage, margin: '0 0 10px' }}>
          {lang === 'es' ? 'Contacto' : 'Contact'}
        </h2>
        <p style={body}>
          {lang === 'es' ? 'Por cualquier consulta sobre privacidad, escribinos a ' : 'For any privacy question, write to '}
          <a href={`mailto:${CONTACT}`} style={{ color: sage, fontWeight: 600, textDecoration: 'none' }}>
            {CONTACT}
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default PrivacyScreen;
