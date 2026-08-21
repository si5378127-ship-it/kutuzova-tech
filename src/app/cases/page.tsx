import type { Metadata } from "next";
import { CaseCard } from "@/components/CaseCard";
import { StubPage } from "@/components/StubPage";
import { pageStubs } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

const page = pageStubs.cases;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/cases",
});

export default function CasesPage() {
  return (
    <StubPage title={page.title} description={page.description} body={page.body}>
      <div className="mt-10 max-w-2xl">
        <CaseCard
          title="Сайт для нефтяной компании"
          industry="Корпоративный сайт"
          challenge="Сделать сайт понятным человеку и поисковым системам."
          work="Структура, содержание и поисковая понятность."
          // TODO: add confirmed company name, query, screenshots and results
        />
      </div>
    </StubPage>
  );
}
