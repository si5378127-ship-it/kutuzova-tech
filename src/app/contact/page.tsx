import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { TextLink } from "@/components/TextLink";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Контакты",
  description: "Связаться с Анастасией Кутузовой.",
  path: "/contact",
  noIndex: true,
});

export default function ContactPage() {
  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          as="h1"
          title="Контакты"
          description="Страница контактов в подготовке. Способ связи появится здесь после предоставления данных."
        />
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink-dim">
          {/* TODO: add contact email / form when provided */}
          Пока email и форма обратной связи не подключены — без вымышленных
          контактов.
        </p>
        <div className="mt-10 flex flex-wrap gap-6">
          <TextLink href="/">На главную →</TextLink>
          <TextLink href="/audit">Аудит сайта →</TextLink>
        </div>
      </div>
    </section>
  );
}
