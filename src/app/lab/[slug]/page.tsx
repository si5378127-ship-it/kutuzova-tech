import { ClientRedirect } from "@/components/ClientRedirect";

/** Former lab detail slugs from PR11 — keep redirects for old links. */
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

/**
 * Legacy /lab/[slug]/ — redirect into the unified portfolio on /sites/.
 */
export default function LabSlugRedirectPage() {
  return (
    <ClientRedirect
      href="/sites/#portfolio"
      message="Проект смотрите в портфолио."
      linkLabel="Перейти к портфолио"
    />
  );
}
