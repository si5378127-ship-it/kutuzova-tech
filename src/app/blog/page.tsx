import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";
import { blogCategories, pageStubs } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

const page = pageStubs.blog;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/blog",
});

/**
 * Blog architecture prepared for Pinterest-led content.
 * Future article shape: H1, intro, TOC, H2/H3, images,
 * audit CTA, related posts, metadata, pinterestImage.
 */
export default function BlogPage() {
  return (
    <StubPage title={page.title} description={page.description} body={page.body}>
      <div className="mt-10">
        <p className="mb-4 text-xs uppercase tracking-[0.18em] text-gold-muted">
          Категории
        </p>
        <ul className="flex flex-wrap gap-2">
          {blogCategories.map((category) => (
            <li
              key={category}
              className="rounded-full border border-border px-4 py-2 text-sm text-ink-muted"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </StubPage>
  );
}
