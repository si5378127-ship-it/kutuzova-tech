import type { Metadata } from "next";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { TextLink } from "@/components/TextLink";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Обо мне",
  description:
    "Анастасия Кутузова — психолог и коуч. Работаю с людьми, создаю авторские практики, картины и цифровые проекты.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container-page grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="mx-auto w-full max-w-[280px] lg:mx-0">
          {/* TODO: replace with Anastasia portrait */}
          <PortraitPlaceholder caption="Анастасия Кутузова" />
        </div>
        <div>
          <SectionHeading
            as="h1"
            title="Обо мне"
            description="Я Анастасия Кутузова — психолог и коуч. Работаю с людьми, создаю собственные продукты и исследую, как современные технологии могут помогать частной практике и бизнесу."
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
            Мне важно не просто дать человеку готовый ответ, а создать условия, в
            которых становится легче увидеть собственное решение и воплотить его
            в жизни.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-dim">
            {/* TODO: add verified biography details when provided */}
            Раздел будет расширен без выдуманных фактов, сертификатов и цифр.
          </p>
          <div className="mt-10 flex flex-wrap gap-6">
            <TextLink href="/">На главную →</TextLink>
            <TextLink href="/contact">Связаться →</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
