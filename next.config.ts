import type { NextConfig } from "next";

/**
 * GitHub Pages serves only static files.
 * Custom domain https://coach-kytyzova.ru/ is served from the site root —
 * leave NEXT_PUBLIC_BASE_PATH empty. Set it only for a project-pages URL.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
