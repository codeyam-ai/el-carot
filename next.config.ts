import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // pg is a server-side DB driver — keep it external so it isn't bundled.
  serverExternalPackages: ['pg'],

  turbopack: {
    // Required: prevents Turbopack from inferring a parent directory as root
    // when .codeyam/ exists above the project (which breaks import resolution)
    root: '.',
  },
};

export default nextConfig;
