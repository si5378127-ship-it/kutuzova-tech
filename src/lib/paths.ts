/**
 * Public asset paths for local (no prefix) and GitHub Pages project sites.
 * Uses NEXT_PUBLIC_BASE_PATH — same env as next.config.ts basePath.
 * Do not hardcode "/kutuzova-tech" in components.
 */
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";
}

/** Prefix a root-relative public path with the current basePath. */
export function withBasePath(path: string): string {
  const base = getBasePath();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
