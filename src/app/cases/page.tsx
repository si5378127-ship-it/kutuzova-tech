import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { TextLink } from "@/components/TextLink";
import {
  portfolioCategories,
  portfolioProjects,
} from "@/content/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Портфолио",
  description:
    "Сайты и лендинги, квизы, приложения и инструменты. Подтверждённые проекты — без выдуманных цифр посещаемости и продаж.",
  path: "/cases",
});

export default function CasesPage() {
  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          as="h1"
          title="Портфолио"
          description="Подтверждённые проекты с акцентом на задачу и функции. Можно отфильтровать по категории — без выдуманных цифр посещаемости и продаж."
        />
        <div className="mt-10">
          <PortfolioGallery
            projects={portfolioProjects}
            categories={portfolioCategories}
          />
        </div>
        <div className="mt-10">
          <TextLink href="/sites/#portfolio">
            Смотреть портфолио в разделе сайтов →
          </TextLink>
        </div>
      </div>
    </section>
  );
}
