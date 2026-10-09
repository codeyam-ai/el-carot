import type Component from "./ReadingDesktop.render";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Component>;

// Scenario data for ReadingDesktop's isolation route; the render sidecar beside this
// file maps each variant name to concrete props (see readingFixtures.ts).
export const scenarios: Record<string, Props> = {
  Default: { scenario: 'Default' },
  Pregunta: { scenario: 'Pregunta' },
  Diaria: { scenario: 'Diaria' },
};

// Full-width surface: the render sidecar sets its own frame width.
export const captureWidth: number | undefined = undefined;
