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
        <aside className="panel-light mt-10 max-w-xl p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-muted">
            Бесплатная практика
          </p>
          <h2 className="heading-serif mt-4 text-2xl text-ink sm:text-3xl">
            А где в своей жизни сейчас Я?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            Короткая интерактивная практика на 7–10 минут. Без регистрации —
            ответы остаются только в вашем браузере.
          </p>
          <div className="mt-6">
            {/* Plain <a>: /gde-ya/ is a static Vite SPA in public/, not a Next route */}
            <a
              href="/gde-ya/"
              className="cta-primary focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#173126] px-6 py-3 text-sm font-medium text-[#F7F2E9] shadow-[0_8px_24px_rgba(23,49,38,0.18)] transition-colors duration-200 hover:bg-[#23382D] hover:text-[#F7F2E9]"
            >
              Пройти бесплатную практику
            </a>
          </div>
        </aside>
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
