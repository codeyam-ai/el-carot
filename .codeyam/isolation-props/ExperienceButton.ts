import type Component from "./ExperienceButton.render";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Component>;

// Scenario data for this component's isolation route. It lives here, under
// `.codeyam/`, rather than in the app's source tree — anything under the app's
// source tree compiles into the app and ships with it.
export const scenarios: Record<string, Props> = {
  // Solid sage block — the primary experience buttons.
  Solid: { scenario: 'solid' },
  // Outline keyline variant — "Carta del Día".
  Outline: { scenario: 'outline' },
};

// Capture width, in pixels, or `undefined` for a full-width surface. The
// renderer already fixes the button to its real 338px column.
export const captureWidth: number | undefined = undefined;
