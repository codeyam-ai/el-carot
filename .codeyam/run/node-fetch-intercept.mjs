// CodeYam node-fetch-intercept (ES module) — codeyam-node-fetch-intercept v2
//
// See the .cjs variant for the full doc comment. Behavior is identical:
// monkey-patches global fetch via `Object.defineProperty(globalThis,
// 'fetch', { get, set })` so it survives downstream wrappers (Next.js
// runtime, vitest, OpenTelemetry, etc.) that do `globalThis.fetch = ...`.
// Matches against `<projectDir>/.codeyam/tmp/active-mocks.json`,
// returns synthetic Responses for matches and falls through to native
// fetch otherwise. Zero npm dependencies required.
//
// Installed at `.codeyam/run/node-fetch-intercept.mjs` and loaded via
// `NODE_OPTIONS=--import <path>`.
import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { AsyncLocalStorage } from 'node:async_hooks';

const projectDir = process.env.CODEYAM_PROJECT_DIR || process.cwd();
const activeMocksPath = join(projectDir, '.codeyam', 'tmp', 'active-mocks.json');
const originalFetch = globalThis.fetch;

if (!originalFetch || typeof Response === 'undefined') {
  console.error(
    '[codeyam] node-fetch-intercept: requires Node 18+ (global fetch + Response)',
  );
} else {
  let cachedMocks = null;
  let cachedMtime = 0;

  const loadActiveMocks = () => {
    try {
      const stat = statSync(activeMocksPath);
      if (cachedMocks && stat.mtimeMs === cachedMtime) return cachedMocks;
      const content = readFileSync(activeMocksPath, 'utf-8');
      let parsed;
      try {
        parsed = JSON.parse(content);
      } catch {
        parsed = [];
      }
      cachedMocks = Array.isArray(parsed) ? parsed : [];
      cachedMtime = stat.mtimeMs;
      return cachedMocks;
    } catch {
      return [];
    }
  };

  const extractUrl = (input) => {
    if (typeof input === 'string') return input;
    if (input instanceof URL) return input.href;
    if (input && typeof input.url === 'string') return input.url;
    if (input && typeof input.href === 'string') return input.href;
    return String(input);
  };

  const matchMock = (mocks, method, url) => {
    const upper = method.toUpperCase();
    for (const m of mocks) {
      if (!m || !m.pattern) continue;
      if ((m.method || 'GET').toUpperCase() !== upper) continue;
      if (m.passthrough) continue;
      if (url === m.pattern || url.includes(m.pattern)) return m;
    }
    return null;
  };

  // ── Preview auth mocking ────────────────────────────────────────────
  // A project whose auth gate validates sessions server-side (e.g.
  // Next.js middleware calling Supabase's `/auth/v1/user`) rejects the
  // mock session JWTs scenarios sign, so live preview renders the login
  // page instead of the authenticated app. When the editor runs the dev
  // server in preview mode (`CODEYAM_PREVIEW_MODE=1`) for a supported
  // provider, we recognize the sentinel signature `codeyam-mock-signature`
  // on the bearer JWT and synthesize a provider-shaped user response. Real
  // JWTs (any other signature) fall through untouched, so a real sign-in on
  // the running dev server still hits the real provider. Outside the
  // editor's managed preview the whole block is inert (authConfig === null)
  // and fetch behaves identically.
  const AUTH_SENTINEL = 'codeyam-mock-signature';
  const authConfig =
    process.env.CODEYAM_PREVIEW_MODE === '1' &&
    process.env.CODEYAM_AUTH_VALIDATOR_URL &&
    process.env.CODEYAM_AUTH_PROVIDER
      ? {
          validatorUrl: process.env.CODEYAM_AUTH_VALIDATOR_URL,
          provider: process.env.CODEYAM_AUTH_PROVIDER,
        }
      : null;

  const decodeBase64Url = (segment) => {
    try {
      const b64 = segment.replace(/-/g, '+').replace(/_/g, '/');
      const padded = b64.padEnd(b64.length + ((4 - (b64.length % 4)) % 4), '=');
      return Buffer.from(padded, 'base64').toString('utf-8');
    } catch {
      return '';
    }
  };

  const authHeaderFrom = (headers) => {
    if (!headers) return null;
    if (typeof headers.get === 'function') {
      return headers.get('authorization') || headers.get('Authorization');
    }
    if (Array.isArray(headers)) {
      for (const pair of headers) {
        if (pair && String(pair[0]).toLowerCase() === 'authorization') return pair[1];
      }
      return null;
    }
    if (typeof headers === 'object') {
      for (const key of Object.keys(headers)) {
        if (key.toLowerCase() === 'authorization') return headers[key];
      }
    }
    return null;
  };

  const bearerToken = (input, init) => {
    let header = init && init.headers ? authHeaderFrom(init.headers) : null;
    if (!header && input && typeof input === 'object') header = authHeaderFrom(input.headers);
    if (!header) return null;
    const match = /^Bearer\s+(.+)$/i.exec(String(header).trim());
    return match ? match[1] : null;
  };

  const synthUser = (provider, payload) => {
    if (provider === 'supabase') {
      const epoch = new Date(0).toISOString();
      return {
        id: payload.sub,
        aud: payload.aud || 'authenticated',
        role: payload.role || 'authenticated',
        email: payload.email,
        email_confirmed_at: epoch,
        phone: '',
        confirmed_at: epoch,
        last_sign_in_at: epoch,
        app_metadata: payload.app_metadata || { provider: 'email', providers: ['email'] },
        user_metadata: payload.user_metadata || (payload.name ? { name: payload.name } : {}),
        identities: [],
        created_at: epoch,
        updated_at: epoch,
      };
    }
    return null;
  };

  // Returns a synthetic Response for a recognized mock-JWT auth-validation
  // request, or null to let the request proceed normally.
  const synthAuthResponse = (url, input, init) => {
    if (!authConfig) return null;
    if (url !== authConfig.validatorUrl && !url.startsWith(authConfig.validatorUrl)) return null;
    const token = bearerToken(input, init);
    if (!token) return null;
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    // The signature segment is the raw sentinel literal (see buildFakeJwt in
    // seed-adapters/supabase.ts) — a real provider JWT carries a real HMAC
    // here, so any other value falls through to the real provider.
    if (parts[2] !== AUTH_SENTINEL) return null;
    let payload;
    try {
      payload = JSON.parse(decodeBase64Url(parts[1]));
    } catch {
      return null;
    }
    const user = synthUser(authConfig.provider, payload);
    if (!user) return null;
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  };

  // downstreamFetch tracks the last function assigned to
  // globalThis.fetch by anyone else; ourWrapper delegates to it after
  // a mock miss so multiple wrappers compose cleanly.
  let downstreamFetch = originalFetch;

  // Re-entry flag scoped per call chain. Next.js's dev runtime captures
  // ourWrapper via the getter into a local (`const orig = globalThis.fetch`)
  // and then installs its own wrapper that calls `orig(...)`. That
  // wrapper-captured reference is identity-equal to ourWrapper, so a
  // simple `downstreamFetch === ourWrapper` check fails to detect the
  // cycle. AsyncLocalStorage flips a flag for the duration of the
  // downstream call; when ourWrapper re-enters within that scope we
  // bail to originalFetch. Per-call-chain scoping keeps concurrent
  // fetches isolated.
  const reentryStore = new AsyncLocalStorage();

  // codeyam-node-fetch-intercept v2 — the marker also appears as an
  // in-body string literal below so `globalThis.fetch.toString()` shows
  // it (Function.prototype.toString strips comments outside the body).
  async function ourWrapper(input, init) {
    'codeyam-node-fetch-intercept v2';
    const method = (init && init.method ? init.method : 'GET').toUpperCase();
    const url = extractUrl(input);

    // Preview auth mocking runs before scenario mock matching: a mock-JWT
    // auth-validation request gets a synthesized provider user response.
    const authResponse = synthAuthResponse(url, input, init);
    if (authResponse) return authResponse;

    const mocks = loadActiveMocks();
    const mock = matchMock(mocks, method, url);

    if (mock) {
      const body = mock.body != null ? JSON.stringify(mock.body) : '';
      const headers = {
        'content-type': 'application/json',
        ...(mock.headers || {}),
      };
      return new Response(body, { status: mock.status || 200, headers });
    }

    // Re-entry guard: if downstream code captures ourWrapper (directly
    // or via the getter) and later calls it, we'd infinite-loop. The
    // ALS flag is set for the duration of the downstream call, so any
    // re-entry into ourWrapper short-circuits to the captured native.
    if (reentryStore.getStore() === true) {
      return originalFetch.call(this, input, init);
    }
    const self = this;
    return reentryStore.run(true, () => downstreamFetch.call(self, input, init));
  }

  Object.defineProperty(globalThis, 'fetch', {
    configurable: true,
    get() {
      return ourWrapper;
    },
    set(newFetch) {
      // Anyone installing their own fetch goes through here. Keep their
      // function in the delegation chain; ourWrapper stays on top via
      // the getter. The `!== ourWrapper` guard prevents an infinite
      // loop on `globalThis.fetch = globalThis.fetch`.
      if (typeof newFetch === 'function' && newFetch !== ourWrapper) {
        downstreamFetch = newFetch;
      }
    },
  });
}
