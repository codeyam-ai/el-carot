import type Component from "./ReadingActionsMobile.render";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Component>;

// Scenario data for ReadingActionsMobile's isolation route; the render sidecar beside this
// file maps each variant name to concrete props (see readingFixtures.ts).
export const scenarios: Record<string, Props> = {
  Default: { scenario: 'Default' },
  Saving: { scenario: 'Saving' },
};

// Full-width surface: the render sidecar sets its own frame width.
export const captureWidth: number | undefined = undefined;
