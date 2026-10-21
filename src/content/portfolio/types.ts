/**
 * Unified portfolio cards for /sites/.
 * Keep copy factual — no invented results, rankings, traffic, or testimonials.
 */

export type PortfolioCategoryId =
  | "sites-landings"
  | "quizzes"
  | "apps-tools"
  | "ai-assistants";

export type PortfolioCategory = {
  id: PortfolioCategoryId;
  label: string;
};

export type PortfolioProject = {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategoryId;
  /** Product format, e.g. «Клиентский сайт», «Квиз» */
  format: string;
  /** What task / problem the project addresses */
  task: string;
  /** Main functions shown on the card */
  features: readonly string[];
  imageSrc: string;
  imageAlt: string;
  /**
   * Internal case page (preferred when present).
   * Example: /sites/tvernefteregion/
   */
  detailsHref?: string;
  /** Live project URL when there is no internal case page */
  projectUrl?: string;
  /**
   * Optional factual note about Yandex indexing preparation.
   * Do not claim rankings or traffic without Webmaster/Metrika confirmation.
   */
  indexingNote?: string;
};
