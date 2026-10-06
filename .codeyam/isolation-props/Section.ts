import type Component from "./Section.render";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Component>;

// Scenario data for this component's isolation route. It lives here, under
// `.codeyam/`, rather than in the app's source tree — anything under the app's
// source tree compiles into the app and ships with it.
export const scenarios: Record<string, Props> = {
  // A populated section, as it appears on the real stats page.
  Default: { scenario: 'daily' },
  // The empty state the page renders before anything has been logged.
  Empty: { scenario: 'empty' },
};

// Capture width, in pixels, or `undefined` for a full-width surface. The
// renderer already bounds the section to the stats page's 1000px column.
export const captureWidth: number | undefined = undefined;
