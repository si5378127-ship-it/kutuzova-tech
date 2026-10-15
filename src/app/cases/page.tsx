import type { Metadata } from "next";
import { CaseCard } from "@/components/CaseCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TextLink } from "@/components/TextLink";
import { sitesCases } from "@/content/sites-cases";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Кейсы",
  description:
    "Примеры работы со структурой, текстами, путём заявки и поисковой понятностью сайтов.",
  path: "/cases",
});

export default function CasesPage() {
  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          as="h1"
          title="Кейсы"
          description="Подтверждённые проекты — без выдуманных цифр посещаемости и продаж. Главный акцент: как меняется путь клиента от интереса до разговора с менеджером."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {sitesCases.map((item) => (
            <CaseCard
              key={item.id}
              title={item.card.title}
              industry={item.card.industry}
              summary={item.card.summary}
              imageSrc={item.card.imageSrc}
              imageAlt={item.card.imageAlt}
              detailsHref={`/sites/${item.slug}/`}
            />
          ))}
        </div>
        <div className="mt-10">
          <TextLink href="/sites/">Смотреть раздел сайтов →</TextLink>
        </div>
      </div>
    </section>
  );
}
