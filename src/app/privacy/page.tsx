import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";
import { pageStubs } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

const page = pageStubs.privacy;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <StubPage title={page.title} description={page.description} body={page.body}>
      {/* TODO: add full privacy policy text and data operator details */}
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-ink-dim">
        <p>
          На этой странице будет размещена политика обработки персональных данных.
          Реквизиты и юридические формулировки появятся после подготовки документов.
        </p>
      </div>
    </StubPage>
  );
}
