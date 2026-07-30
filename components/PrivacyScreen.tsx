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
    lead: 'El Carot no recopila, no transmite y no comparte ningún dato personal. Todo lo que hacés se queda en tu dispositivo.',
    sections: [
      {
        heading: 'Qué datos recopilamos',
        body: 'Ninguno. El Carot no tiene servidores propios donde guardar información sobre vos. No hay cuentas alojadas, no hay analítica de terceros, no hay publicidad y no hay rastreadores.',
      },
      {
        heading: 'Qué se guarda en tu dispositivo',
        body: 'Las cartas que sacaste y su historial, la carta del día y su fecha, y tu preferencia de idioma. Todo eso vive en el almacenamiento local de tu navegador o de la app, y desaparece si borrás los datos del sitio o desinstalás la app.',
      },
      {
        heading: 'Las preguntas que escribís',
        body: 'Cuando le hacés una pregunta específica a las cartas, ese texto se usa únicamente para generar tu lectura. No queda asociado a tu identidad, no se usa para perfilarte y no se comparte con nadie.',
      },
      {
        heading: 'Iniciar sesión',
        body: 'En la app iniciar sesión es opcional y todo funciona sin hacerlo. Si usás Sign in with Apple o tu cuenta de Google, el nombre y el correo que el proveedor devuelva se guardan sólo en tu teléfono, para saludarte por tu nombre y mantener tus cartas en su propio cajón. No se transmiten a ningún servidor nuestro, y no le damos a Google ni a Apple ninguna información sobre lo que hacés en la app.',
      },
      {
        heading: 'Menores de edad',
        body: 'El Carot no está dirigido a menores de 13 años y, al no recopilar datos, no recoge información de ninguna persona sin importar su edad.',
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
    lead: 'El Carot collects nothing, transmits nothing, and shares nothing. Everything you do stays on your device.',
    sections: [
      {
        heading: 'What we collect',
        body: 'Nothing. El Carot has no servers of its own on which to keep information about you. There are no hosted accounts, no third-party analytics, no advertising and no trackers.',
      },
      {
        heading: 'What is stored on your device',
        body: 'The cards you have drawn and their history, the card of the day and its date, and your language preference. All of it lives in your browser or app local storage, and disappears if you clear the site data or uninstall the app.',
      },
      {
        heading: 'The questions you type',
        body: 'When you ask the cards a specific question, that text is used only to produce your reading. It is not tied to your identity, not used to profile you, and not shared with anyone.',
      },
      {
        heading: 'Signing in',
        body: 'In the app, signing in is optional and everything works without it. If you use Sign in with Apple or your Google account, the name and email the provider returns are stored only on your phone, so the app can greet you by name and keep your cards in their own drawer. They are never sent to any server of ours, and we tell neither Google nor Apple anything about what you do in the app.',
      },
      {
        heading: 'Children',
        body: 'El Carot is not directed at children under 13 and, collecting no data, gathers no information from anyone regardless of age.',
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
