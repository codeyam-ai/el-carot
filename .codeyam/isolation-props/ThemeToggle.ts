import type Component from "../../components/ThemeToggle";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Component>;

// Scenario data for this component's isolation route. It lives here, under
// `.codeyam/`, rather than in the app's source tree — anything under the app's
// source tree compiles into the app and ships with it. The theme itself comes
// from the scenario URL (`&theme=light|dark`), like `&lang=`.
export const scenarios: Record<string, Props> = {
  // Icon-only, as in the home header and desktop nav cluster.
  Icon: {},
  // With its label, as in the star menu.
  Labeled: { withLabel: true, style: { fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 17 } },
};

// Capture width, in pixels, or `undefined` for a full-width surface.
export const captureWidth: number | undefined = undefined;
