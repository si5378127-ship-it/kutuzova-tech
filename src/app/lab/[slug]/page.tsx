import { LabSlugRedirectClient } from "./LabSlugRedirectClient";

/**
 * Catch-all redirect for legacy /lab/[slug]/ URLs from the lab PR preview.
 * Static export needs an explicit slug list.
 */
const LEGACY_LAB_SLUGS = [
  "kutuzova-tech",
  "granicy-i-opora",
  "gde-ya",
  "vibe-coder",
  "moi-finansy",
] as const;

export function generateStaticParams() {
  return LEGACY_LAB_SLUGS.map((slug) => ({ slug }));
}

export default function LabSlugRedirectPage() {
  return <LabSlugRedirectClient />;
}
