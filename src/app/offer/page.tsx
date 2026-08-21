import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";
import { pageStubs } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

const page = pageStubs.offer;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/offer",
  noIndex: true,
});

export default function OfferPage() {
  return (
    <StubPage title={page.title} description={page.description} body={page.body}>
      {/* TODO: add public offer text and contractor details */}
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-ink-dim">
        <p>
          Здесь будет размещена публичная оферта на услуги. Текст и реквизиты
          появятся после подготовки документов владельцем сайта.
        </p>
      </div>
    </StubPage>
  );
}
