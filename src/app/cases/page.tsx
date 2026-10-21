import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { TextLink } from "@/components/TextLink";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Кейсы и портфолио",
  description:
    "Сайты, цифровые инструменты и ИИ-проекты — подтверждённые материалы без выдуманных метрик.",
  path: "/cases",
});

export default function CasesPage() {
  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          as="h1"
          title="Портфолио"
          description="Подтверждённые проекты — без выдуманных цифр посещаемости и продаж. Смотрите сайты, цифровые инструменты и (когда появятся) ИИ-помощники."
        />
        <div className="mt-10">
          <PortfolioGallery />
        </div>
        <div className="mt-10">
          <TextLink href="/sites/#portfolio">Смотреть раздел сайтов →</TextLink>
        </div>
      </div>
    </section>
  );
}
