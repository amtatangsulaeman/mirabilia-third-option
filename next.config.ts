import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // Build timestamp: drives the offer expiry and the footer year (pages are static, so "now" means "this build").
  env: { BUILD_TIME: new Date().toISOString() },
  // Keep links from the old site working.
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/coming-soon", destination: "/champion-lakes", permanent: true },
      { source: "/promotion---25---off", destination: "/promotion", permanent: true },
      // Nov 2026 revision: new sitemap.
      { source: "/about-us", destination: "/our-story", permanent: true },
      { source: "/our-family", destination: "/our-story", permanent: true },
      { source: "/ccs-information", destination: "/childcare-subsidy#claim", permanent: true },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
