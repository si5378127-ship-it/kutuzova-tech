/**
 * Lab project showcase — living gallery of digital experiments and demos.
 * Not the same registry as client cases under /sites/.
 */

export type LabCategoryId =
  | "sites-landings"
  | "bots-ai"
  | "apps"
  | "quizzes-calculators";

export type LabCategory = {
  id: LabCategoryId;
  label: string;
};

/** Optional long-form page at /lab/[slug]/ */
export type LabProjectDetail = {
  task: {
    title: string;
    paragraphs: readonly string[];
  };
  features: {
    title: string;
    items: readonly string[];
  };
  notes?: {
    title: string;
    paragraphs: readonly string[];
  };
};

export type LabProject = {
  id: string;
  slug: string;
  title: string;
  /** Short type label shown on the card, e.g. «Лендинг» */
  typeLabel: string;
  category: LabCategoryId;
  summary: string;
  /** Absolute URL or same-site path of the live project */
  projectUrl: string;
  imageSrc: string;
  imageAlt: string;
  /** Primary CTA on the card / detail hero. Default: «Посмотреть проект» */
  ctaLabel?: string;
  /**
   * Soft status for demos / experiments — never “archive” or “finished”.
   * Omit for projects without a special status line.
   */
  statusLabel?: string;
  /** When set, a detail page is generated at /lab/[slug]/ */
  detail?: LabProjectDetail;
};
