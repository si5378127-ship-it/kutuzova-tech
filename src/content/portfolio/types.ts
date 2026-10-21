/**
 * Unified portfolio cards for /sites/.
 * Keep copy factual — no invented results, traffic, or testimonials.
 */

export type PortfolioCategoryId =
  | "sites"
  | "ai-assistants"
  | "digital-tools";

export type PortfolioCategory = {
  id: PortfolioCategoryId;
  label: string;
};

export type PortfolioProject = {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategoryId;
  /** Small line above the title (industry / project type) */
  industry: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  /**
   * Internal case page (preferred when a full case exists).
   * Takes precedence over projectUrl in the card link.
   */
  detailsHref?: string;
  /** Live project URL — used when there is no internal case page */
  projectUrl?: string;
};
