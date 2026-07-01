'use client';

/* El Carot — internationalization (ES / EN).
 * Ported from the design handoff (mobile/i18n.jsx).
 * Exposes: CarotProvider, useCarot(), LangToggle, STRINGS.
 * Initial language: ?lang= URL override -> saved storage -> browser locale -> timezone.
 */

import React, { createContext } from 'react';

export type Lang = 'es' | 'en';

export const STRINGS = {
  es: {
    langName: 'Español',
    // Home
    welcome: '¡Bienvenida!',
    homeMessage: 'Quiero recibir un mensaje',
    homeQuestion: 'Tengo una pregunta específica',
    homeDaily: 'Carta del Día',
    // intents (message / draw)
    messageTitle: 'Quiero recibir un mensaje',
    messageHeading: '¿Sobre qué quisieras recibir un mensaje?',
    messageLines: ['Conectá con ese tema.', 'Respirá hondo.', 'Elegí tu carta.'],
    drawTitle: 'Sacar una carta',
    drawHeading: 'Sacar una carta',
    drawLines: ['Respirá hondo.', 'Elegí tu carta.'],
    // QuestionInput
    questionTitle: 'Tengo una pregunta específica',
    questionHeading: 'Dejá tu pregunta',
    questionSub: 'Cuanto más específica sea tu pregunta, mejor devolución te podremos hacer.',
    questionPlaceholder: 'Dejá tu pregunta aquí',
    drawCard: 'Sacar una carta',
    // CardReading
    dailyLabel: 'Carta del día',
    yourQuestion: 'Tu pregunta',
    interpreting: 'Interpretando tu carta…',
    download: 'Descargar Imagen',
    share: 'Compartir',
    copied: '¡Link copiado!',
    imageSaved: '¡Imagen guardada!',
    drawAnother: 'Elegir otra carta',
    // Comments
    commentsTitle: 'Comentarios',
    commentCta: 'Comentar',
    commentsEmpty: ['Todavía no hay comentarios.', 'Sé el primero en dejar uno ✨'],
    yourName: 'Tu nombre',
    yourComment: 'Tu comentario…',
    post: 'Publicar',
    cancel: 'Cancelar',
    viewAll: 'Ver todos los comentarios',
    viewLess: 'Ver menos',
    // Menu
    menuAbout: 'Sobre El Carot',
    menuAllCards: 'Ver todas las cartas',
    menuBuy: 'Comprar Mazo',
    menuOpenSource: 'Open Source',
    menuInstagram: 'Instagram',
    menuLove: 'El Carot te ama',
    footLove: 'te ama',
    // Footer
    footAbout: 'Sobre El Carot',
    footBuy: 'Comprar Mazo',
    footDaily: 'Carta del día',
    footGallery: 'Ver todas las cartas',
    createdBy: 'Creado por',
    developedIn: 'Desarrollado en',
    // About
    aboutTitle: '¿Qué es esto?',
    aboutP1html:
      'Un mazo de tarot de los 22 arcanos mayores, donde cada arcano está encarnado por un personaje querido cuyo nombre empieza con <strong>C</strong> — por eso, el <em>C-arot</em>.',
    aboutP2:
      'Charly García es El Loco, Cleopatra es La Sacerdotisa, Celia Cruz es El Sol. El arte respeta las composiciones clásicas del Rider–Waite, pero collagea la cara de cada figura en la escena, impresa en un estilo cálido, gastado y hecho a mano.',
    aboutP3:
      'Acá podés tirar una carta, verla darse vuelta y leer su mensaje. Sin cuentas, sin vueltas.',
    aboutTagline: ['Tirá con confianza.', 'El Carot te ama ♥'],
    aboutCreditPre: 'por ',
    followInstagram: 'Seguir en Instagram',
    // Gallery
    galleryTitle: 'Todas las cartas',
    galleryHeading: 'Los 22 arcanos',
    gallerySub: 'Tocá la que te llame.',
    // aria
    back: 'Volver',
    menu: 'Menú',
    close: 'Cerrar',
    prev: 'Anterior',
    next: 'Siguiente',
  },
  en: {
    langName: 'English',
    welcome: 'Welcome!',
    homeMessage: 'I want to receive a message',
    homeQuestion: 'I have a specific question',
    homeDaily: 'Card of the Day',
    messageTitle: 'I want to receive a message',
    messageHeading: 'What would you like a message about?',
    messageLines: ['Connect with that theme.', 'Take a deep breath.', 'Choose your card.'],
    drawTitle: 'Draw a card',
    drawHeading: 'Draw a card',
    drawLines: ['Take a deep breath.', 'Choose your card.'],
    questionTitle: 'I have a specific question',
    questionHeading: 'Ask your question',
    questionSub: 'The more specific your question, the better the reading we can give you.',
    questionPlaceholder: 'Type your question here',
    drawCard: 'Draw a card',
    dailyLabel: 'Card of the day',
    yourQuestion: 'Your question',
    interpreting: 'Reading your card…',
    download: 'Download Image',
    share: 'Share',
    copied: 'Link copied!',
    imageSaved: 'Image saved!',
    drawAnother: 'Draw another card',
    commentsTitle: 'Comments',
    commentCta: 'Comment',
    commentsEmpty: ['No comments yet.', 'Be the first to leave one ✨'],
    yourName: 'Your name',
    yourComment: 'Your comment…',
    post: 'Post',
    cancel: 'Cancel',
    viewAll: 'View all comments',
    viewLess: 'View less',
    menuAbout: 'About El Carot',
    menuAllCards: 'See all cards',
    menuBuy: 'Buy the Deck',
    menuOpenSource: 'Open Source',
    menuInstagram: 'Instagram',
    menuLove: 'El Carot loves you',
    footLove: 'loves you',
    footAbout: 'About El Carot',
    footBuy: 'Buy the Deck',
    footDaily: 'Card of the day',
    footGallery: 'See all cards',
    createdBy: 'Created by',
    developedIn: 'Developed at',
    aboutTitle: 'What is this?',
    aboutP1html:
      'A tarot deck of the 22 major arcana, where each arcanum is embodied by a beloved character whose name starts with <strong>C</strong> — hence, the <em>C-arot</em>.',
    aboutP2:
      'Charly García is The Fool, Cleopatra is The High Priestess, Celia Cruz is The Sun. The art keeps the classic Rider–Waite compositions, but collages each figure’s face into the scene, printed in a warm, worn, handmade style.',
    aboutP3:
      'Here you can draw a card, watch it flip over, and read its message. No accounts, no fuss.',
    aboutTagline: ['Pull with confidence.', 'El Carot loves you ♥'],
    aboutCreditPre: 'by ',
    followInstagram: 'Follow on Instagram',
    galleryTitle: 'All cards',
    galleryHeading: 'The 22 arcana',
    gallerySub: 'Tap the one that calls you.',
    back: 'Back',
    menu: 'Menu',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
  },
} as const;

// ES and EN carry different string-literal types under `as const`; the active
// table is one or the other, so `Strings` is their union.
export type Strings = (typeof STRINGS)['es'] | (typeof STRINGS)['en'];

interface CarotCtx {
  lang: Lang;
  t: Strings;
  setLang: (l: Lang) => void;
}

const Ctx = createContext<CarotCtx>({
  lang: 'es',
  t: STRINGS.es,
  setLang: () => {},
});

export function useCarot(): CarotCtx {
  return React.useContext(Ctx);
}

/**
 * Language is resolved server-side (middleware -> layout) and passed in as
 * `initialLang`, so SSR and the first client render agree (no hydration
 * mismatch, no flash). Toggling persists to the cookie (so the next SSR matches)
 * and localStorage.
 */
export function CarotProvider({
  children,
  initialLang = 'es',
}: {
  children: React.ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLangState] = React.useState<Lang>(initialLang);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
    try {
      document.cookie = `carot_lang=${l};path=/;max-age=${60 * 60 * 24 * 365}`;
    } catch {
      /* cookies unavailable */
    }
    try {
      localStorage.setItem('carot_lang', l);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = React.useMemo<CarotCtx>(
    () => ({ lang, t: STRINGS[lang], setLang }),
    [lang, setLang],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
