/**
 * Portfolio case studies for /sites/.
 * Keep results factual — no invented traffic, leads, or sales metrics.
 */

export type CaseCta = {
  label: string;
  href: string;
};

export type CaseMediaSlot = {
  id: string;
  /** Alt text / internal label when image is published */
  label: string;
  /** Caption under the image when published */
  caption?: string;
  /**
   * Path under public/ when the asset is ready.
   * Leave undefined until a real file exists — never invent imagery.
   */
  src?: string;
  /**
   * When true, do not render the image even if src is set
   * (e.g. awaiting privacy review / client permission).
   */
  privacyHold?: boolean;
};

export type InquiryFlowSide = {
  title: string;
  steps: readonly string[];
};

/**
 * Optional “how it was / how it became” for the inquiry path.
 * Omit on cases that have no previous site or comparable flow.
 */
export type InquiryFlowCompare = {
  title: string;
  description?: string;
  before: InquiryFlowSide;
  after: InquiryFlowSide;
  /** Clarifies that the visitor sends the MAX message themselves */
  sendDisclaimer: string;
};

/** Optional visual before/after of the website itself */
export type SiteVisualCompare = {
  title: string;
  description?: string;
  before: CaseMediaSlot;
  after: CaseMediaSlot;
};

export type CaseHighlightExample = {
  title: string;
  text: string;
  /** Explicitly states this is one case, not an average */
  caveat: string;
};

export type CaseResultItem = {
  title: string;
  text: string;
  /** Primary results appear first / emphasized */
  emphasis?: "primary" | "secondary";
};

export type SitesCaseCard = {
  title: string;
  industry: string;
  /** Short preview line for portfolio grids */
  summary: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type SitesCase = {
  id: string;
  slug: string;
  clientName: string;
  projectUrl: string;
  meta: {
    title: string;
    description: string;
    path: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    liveCta: CaseCta;
  };
  task: {
    title: string;
    paragraphs: readonly string[];
  };
  /** Optional — only when a previous flow/site comparison exists */
  inquiryFlow?: InquiryFlowCompare;
  /** Optional website before/after visuals */
  siteVisualCompare?: SiteVisualCompare;
  /** Optional form before/after visuals for the inquiry scenario */
  formVisualCompare?: SiteVisualCompare;
  highlightExample?: CaseHighlightExample;
  delivery: {
    title: string;
    items: readonly string[];
  };
  results: {
    title: string;
    description?: string;
    items: readonly CaseResultItem[];
  };
  /** Only include assets that are ready to show (or explicitly held) */
  media: readonly CaseMediaSlot[];
  card: SitesCaseCard;
  finalCta: {
    title: string;
    text: string;
    cta: CaseCta;
  };
};
