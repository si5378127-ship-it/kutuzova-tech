import type { Metadata } from "next";
import { LabGallery } from "@/components/LabGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { TextLink } from "@/components/TextLink";
import { getActiveLabCategories, labProjects } from "@/content/lab";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Лаборатория проектов",
  description:
    "Витрина цифровых проектов Анастасии Кутузовой: сайты, лендинги, боты, приложения, квизы и другие инструменты.",
  path: "/lab",
});

export default function LabPage() {
  const categories = getActiveLabCategories();

  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          as="h1"
          title="Лаборатория проектов"
          description="Живая витрина цифровых решений: сайты и лендинги, боты и ИИ, приложения, квизы и калькуляторы. Здесь можно посмотреть разные варианты реализации — проекты могут дорабатываться."
        />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-dim">
          Демонстрационные и экспериментальные работы отмечены отдельно. Они
          показывают возможности разработки и не заменяют клиентские кейсы в
          разделе «Сайты».
        </p>

        <div className="mt-12">
          <LabGallery projects={labProjects} categories={categories} />
        </div>

        <div className="mt-14 flex flex-wrap gap-6">
          <TextLink href="/sites/">← К разделу сайтов</TextLink>
          <TextLink href="/about/">Обо мне →</TextLink>
        </div>
      </div>
    </section>
  );
}
