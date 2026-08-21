/**
 * Future blog article content model for Pinterest-led SEO content.
 *
 * Required structure per article:
 * - H1
 * - intro
 * - table of contents
 * - H2 / H3 sections
 * - images
 * - CTA to /audit
 * - related posts
 * - metadata (title, description, canonical, OG)
 * - pinterestImage: vertical pin-friendly asset
 *
 * Categories live in `content/pages.ts` → blogCategories.
 */

export type BlogArticleContent = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  intro: string;
  tableOfContents: Array<{ id: string; label: string }>;
  sections: Array<{
    id: string;
    heading: string;
    level: 2 | 3;
    body: string[];
    image?: { src: string; alt: string };
  }>;
  coverImage?: string;
  /** Vertical image optimized for Pinterest */
  pinterestImage?: string;
  relatedSlugs?: string[];
  auditCta?: {
    title: string;
    text: string;
    label: string;
  };
};
