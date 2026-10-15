import { tvernefteregionCase } from "./tvernefteregion";
import type { SitesCase } from "./types";

export type { SitesCase, SitesCaseCard, CaseMediaSlot } from "./types";

/** Published sites portfolio cases — add new entries here. */
export const sitesCases: readonly SitesCase[] = [tvernefteregionCase];

export function getSitesCaseBySlug(slug: string): SitesCase | undefined {
  return sitesCases.find((item) => item.slug === slug);
}

export { tvernefteregionCase };
