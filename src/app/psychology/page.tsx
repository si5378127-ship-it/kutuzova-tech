import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { StartProductCard } from "@/components/StartProductCard";
import { TextLink } from "@/components/TextLink";
import { boundariesTeaser } from "@/content/boundaries";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Психология и коучинг",
  description:
    "Индивидуальная работа, коучинговые методы, нейрографика и практические программы Анастасии Кутузовой.",
  path: "/psychology",
});

export default function PsychologyPage() {
  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          as="h1"
          title="Психология и коучинг"
          description="Раздел в подготовке. Здесь появятся материалы об индивидуальной работе, коучинговых методах и программах для самостоятельной практики."
        />
        <div className="mt-10 max-w-xl">
          <StartProductCard product={boundariesTeaser} />
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-dim">
          {/* TODO: expand psychology direction landing */}
          Пока можно вернуться на главную или посмотреть другие направления.
        </p>
        <div className="mt-10 flex flex-wrap gap-6">
          <TextLink href="/">На главную →</TextLink>
          <TextLink href="/art">Картины →</TextLink>
          <TextLink href="/sites">Сайты →</TextLink>
        </div>
      </div>
    </section>
  );
}
