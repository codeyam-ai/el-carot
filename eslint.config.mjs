import { defineConfig, globalIgnores } from "eslint/config";
// These subpath imports require eslint-config-next v16+ (its `exports` map and
// flat-config arrays). Keep it on the same major as `next` — v15 exported legacy
// eslintrc objects here and `npm run lint` died with "nextVitals is not iterable".
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // codeyam-editor's generated capture scripts / design bundles / interceptors.
    // Editor-internal cache state, not app source — same class as node_modules.
    ".codeyam/**",
  ]),
]);

export default eslintConfig;
