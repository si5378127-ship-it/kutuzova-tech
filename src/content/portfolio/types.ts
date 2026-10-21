/**
 * Unified portfolio cards for /sites/.
 * Keep copy factual — no invented results, metrics, or testimonials.
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
  /** Short type / industry line on the card */
  industry: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  /**
   * Internal case page (preferred when present).
   * Example: /sites/tvernefteregion/
   */
  detailsHref?: string;
  /** Live project URL when there is no internal case page */
  projectUrl?: string;
};
