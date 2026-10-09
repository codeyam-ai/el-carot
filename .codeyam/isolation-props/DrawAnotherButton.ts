import type Component from "./DrawAnotherButton.render";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Component>;

// Scenario data for DrawAnotherButton's isolation route; the render sidecar beside this
// file maps each variant name to concrete props (see readingFixtures.ts).
export const scenarios: Record<string, Props> = {
  Inline: { scenario: 'Inline' },
  FullWidth: { scenario: 'FullWidth' },
};

// Full-width surface: the render sidecar sets its own frame width.
export const captureWidth: number | undefined = undefined;
