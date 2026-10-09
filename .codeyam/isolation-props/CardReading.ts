import type Component from "./CardReading.render";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Component>;

// Scenario data for this component's isolation route. It lives here, under
// `.codeyam/`, rather than in the app's source tree — anything under the app's
// source tree compiles into the app and ships with it.
//
// Register each scenario with:
//   codeyam-editor editor register '{"name":"<Name> - <Scenario>","componentName":"<Name>","url":"/isolated-components/<Name>?s=<Scenario>","dimensions":["Desktop"]}'
const QUESTION = '¿Debería dejar mi trabajo para dedicarme a la música?';

export const scenarios: Record<string, Props> = {
  // El Loco's reading, opened from the gallery.
  Default: { scenario: {} },
  // El Ermitaño, opened from "Quiero recibir un mensaje": name, arcanum, quote, meaning, actions.
  DesktopIdentidad: { scenario: { desktop: true, cardN: 9 } },
  MobileIdentidad: { scenario: { cardN: 9 } },
  // The same reading after asking a question: the question on top, then name,
  // arcanum and the (stubbed) AI interpretation.
  DesktopPreguntaComillasSinEtiqueta: {
    scenario: {
      desktop: true,
      cardN: 9,
      question: QUESTION,
      interpretation:
        'El Ermitaño no te empuja a saltar: te invita a apagar el ruido antes de decidir. Confucio camina con su lámpara, despacio, iluminando solo el próximo paso. Antes de renunciar, date un tiempo a solas con la música — componé, tocá, escuchate — y mirá si ese llamado se sostiene en el silencio.',
    },
  },
  MobilePreguntaComillasSinEtiqueta: {
    scenario: {
      cardN: 9,
      question: QUESTION,
      interpretation:
        'El Ermitaño no te empuja a saltar: te invita a apagar el ruido antes de decidir. Confucio camina con su lámpara, despacio, iluminando solo el próximo paso.',
    },
  },
};

// Capture width, in pixels, or `undefined` for a full-width surface.
//
// CENTERING is handled by the route layout (flex + min-height:100vh), so never
// re-wrap in min-h-screen / items-center / justify-center — that fights the
// layout and produces an off-center capture.
//
// WIDTH should match the component's real container, read from its usage site.
// Leave this `undefined` for a full-width surface, or set it to the number
// from the real grid/column for a bounded card. Never a fabricated width.
//
// It lives here rather than in the route file so the route stays fully
// derived — a width hand-edited into the route would be lost on regeneration.
export const captureWidth: number | undefined = undefined;
