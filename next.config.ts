import type { NextConfig } from "next";

/**
 * GitHub Pages serves only static files.
 * Set NEXT_PUBLIC_BASE_PATH for project pages, e.g. "/kutuzova-tech".
 * Leave empty for custom domain or username.github.io root site.
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
