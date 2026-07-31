'use client';

import React from 'react';
import { useCarot } from '@/lib/i18n';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { BackHeader } from '@/components/BackHeader';
import { DesktopNav } from '@/components/DesktopNav';

/**
 * The privacy policy — required by the App Store, and short because there is
 * genuinely nothing to disclose: El Carot has no backend, so nothing a reader
 * does here or in the app leaves their device.
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
    updated: 'Última actualización: 30 de julio de 2026',
    lead: 'El Carot guarda lo mínimo. En la app, nada sale de tu teléfono. En el sitio guardamos las preguntas que se escriben, sin saber quién las escribió.',
    sections: [
      {
        heading: 'Qué guardamos',
        body: 'En la app, nada: no hay servidores donde guardar nada tuyo. En el sitio guardamos las preguntas y qué carta salió, para entender qué se le pregunta al mazo. No hay cuentas, ni publicidad, ni rastreadores, ni forma de vincular una pregunta con una persona.',
      },
      {
        heading: 'Qué se guarda en tu dispositivo',
        body: 'Las cartas que sacaste y su historial, la carta del día y su fecha, y tu preferencia de idioma. Todo eso vive en el almacenamiento local de tu navegador o de la app, y desaparece si borrás los datos del sitio o desinstalás la app.',
      },
      {
        heading: 'Las preguntas que escribís',
        body: 'En la app se resuelven en tu teléfono y no viajan a ningún lado. En el sitio quedan guardadas sin identificar: no sabemos de quién es cada una. Como se escriben libremente, te pedimos que no incluyas datos personales.',
      },
      {
        heading: 'Iniciar sesión',
        body: 'En la app iniciar sesión es opcional y todo funciona sin hacerlo. Si usás Sign in with Apple o tu cuenta de Google, el nombre y el correo que el proveedor devuelva se guardan sólo en tu teléfono, para saludarte por tu nombre y mantener tus cartas en su propio cajón. No se transmiten a ningún servidor nuestro, y no le damos a Google ni a Apple ninguna información sobre lo que hacés en la app.',
      },
      {
        heading: 'Menores de edad',
        body: 'El Carot no está dirigido a menores de 13 años. No pedimos edad, nombre ni ningún dato que permita identificar a quien usa la app o el sitio.',
      },
      {
        heading: 'Cambios en esta política',
        body: 'Si en el futuro El Carot llegara a recopilar algún dato, actualizaremos esta página antes de que ese cambio llegue a la App Store.',
      },
    ],
  },
  en: {
    context: 'Privacy',
    title: 'Privacy Policy',
    updated: 'Last updated: 30 July 2026',
    lead: 'El Carot keeps as little as possible. In the app, nothing leaves your phone. On the website we keep the questions people type, without knowing who typed them.',
    sections: [
      {
        heading: 'What we keep',
        body: 'In the app, nothing: there are no servers on which to keep anything of yours. On the website we keep the questions and which card came up, to understand what people ask the deck. There are no accounts, no advertising, no trackers, and no way to tie a question to a person.',
      },
      {
        heading: 'What is stored on your device',
        body: 'The cards you have drawn and their history, the card of the day and its date, and your language preference. All of it lives in your browser or app local storage, and disappears if you clear the site data or uninstall the app.',
      },
      {
        heading: 'The questions you type',
        body: 'In the app they are handled on your phone and travel nowhere. On the website they are kept without identification: we do not know whose each one is. Since they are written freely, please do not include personal details.',
      },
      {
        heading: 'Signing in',
        body: 'In the app, signing in is optional and everything works without it. If you use Sign in with Apple or your Google account, the name and email the provider returns are stored only on your phone, so the app can greet you by name and keep your cards in their own drawer. They are never sent to any server of ours, and we tell neither Google nor Apple anything about what you do in the app.',
      },
      {
        heading: 'Children',
        body: 'El Carot is not directed at children under 13. We do not ask for an age, a name, or anything else that would identify whoever is using the app or the site.',
      },
      {
        heading: 'Changes to this policy',
        body: 'If El Carot ever begins collecting data, we will update this page before that change reaches the App Store.',
      },
    ],
  },
};

export function PrivacyScreen() {
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

        <p style={{ ...body, fontSize: 14, color: 'rgba(175,188,167,.6)', margin: '0 0 28px' }}>{copy.updated}</p>

        <p
          style={{
            ...body,
            fontSize: 18,
            color: sage,
            borderLeft: '2px solid rgba(175,188,167,.35)',
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
