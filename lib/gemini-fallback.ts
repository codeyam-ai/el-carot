/**
 * Models tried in order for card interpretations. The first is the cheapest;
 * the next ones are used only when an earlier model fails (for example a 503
 * "high demand" from Google), so a saturated model no longer forces the
 * written-meaning fallback.
 */
export const INTERPRET_MODELS = ['gemini-3.1-flash-lite', 'gemini-3.5-flash-lite'];

/** True when Gemini says the model is temporarily overloaded (HTTP 503). */
export function isOverloaded(err: unknown): boolean {
  if (typeof err === 'object' && err !== null && (err as { status?: unknown }).status === 503) {
    return true;
  }
  const message = err instanceof Error ? err.message : String(err);
  return /"code"\s*:\s*503|\b503\b|UNAVAILABLE/.test(message);
}

type Options = {
  /** Pause before retrying an overloaded model. */
  retryDelayMs?: number;
  sleep?: (ms: number) => Promise<void>;
  log?: (...args: unknown[]) => void;
};

const defaultSleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Ask each model in turn until one returns non-empty text. An overloaded
 * model gets one retry after a short pause; any other failure moves straight
 * to the next model. Returns null when every model fails, so the caller can
 * fall back to the card's written meaning. Every failure is logged.
 */
export async function generateWithFallback(
  models: readonly string[],
  generate: (model: string) => Promise<string>,
  { retryDelayMs = 600, sleep = defaultSleep, log = console.error }: Options = {},
): Promise<{ text: string; model: string } | null> {
  for (const model of models) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const text = (await generate(model)).trim();
        if (text) return { text, model };
        log(`[interpret] ${model} returned no text`);
        break;
      } catch (err) {
        log(`[interpret] ${model} failed (attempt ${attempt}):`, err instanceof Error ? err.message : err);
        if (attempt === 1 && isOverloaded(err)) {
          await sleep(retryDelayMs);
          continue;
        }
        break;
      }
    }
  }
  return null;
}
