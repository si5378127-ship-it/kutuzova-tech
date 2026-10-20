import type { Metadata } from "next";
import Image from "next/image";
import { AuditStep } from "@/components/AuditStep";
import { CaseCard } from "@/components/CaseCard";
import { CTAButton } from "@/components/CTAButton";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { ProblemCard } from "@/components/ProblemCard";
import { ProductCard, RouteCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SevenPointsGrid } from "@/components/SevenPointsGrid";
import { TextLink } from "@/components/TextLink";
import { homeContent } from "@/content/home";
import { sitesCases } from "@/content/sites-cases";
import { sevenPoints } from "@/content/seven-points";
import { withBasePath } from "@/lib/paths";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Сайты для частной практики и бизнеса",
  description:
    "Персональный аудит сайта, создание сайтов и ИИ-помощники для психологов и помогающих специалистов. Понятный цифровой путь клиента — от знакомства с сайтом до записи.",
  path: "/sites",
});

export default function SitesPage() {
  const c = homeContent;

  return (
    <>
      <Hero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
      >
        <figure className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem]">
            <Image
              src={withBasePath("/images/anastasia-kutuzova-websites-ai.webp")}
              alt="Анастасия Кутузова — разработка сайтов и ИИ-инструментов для частной практики"
              fill
              priority
              sizes="(max-width: 1024px) 320px, 360px"
              className="object-cover object-[center_18%]"
            />
          </div>
        </figure>
      </Hero>

      <section className="bg-bg py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading title={c.problems.title} description={c.problems.text} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.problems.cards.map((title, index) => (
              <ProblemCard key={title} title={title} index={index + 1} />
            ))}
          </div>
          <blockquote className="editorial-quote mt-12 max-w-2xl border-l-2 border-gold/50 pl-5">
            {c.problems.note}
          </blockquote>
          <div className="mt-8">
            <CTAButton
              href={c.problems.cta.href}
              event="audit_cta_click"
              eventPayload={{ location: "problems" }}
            >
              {c.problems.cta.label}
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 sm:py-20">
        <div className="container-page">
          <div className="panel-light relative overflow-hidden p-6 sm:p-10 lg:p-12">
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <SectionHeading
                  eyebrow={c.auditProduct.eyebrow}
                  title={c.auditProduct.title}
                  description={c.auditProduct.text}
                />
                <p className="mt-6 max-w-xl text-base font-medium text-gold">
                  {c.auditProduct.highlight}
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {c.auditProduct.steps.map((step) => (
                    <AuditStep
                      key={step.number}
                      number={step.number}
                      title={step.title}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-border bg-bg p-6 soft-shadow">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                    Стартовая цена
                  </p>
                  <p className="heading-serif mt-3 text-5xl text-green-deep">
                    {c.auditProduct.price}
                  </p>
                  <p className="mt-3 text-sm text-ink-muted">
                    {c.auditProduct.priceNote}
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  <CTAButton
                    href={c.auditProduct.primaryCta.href}
                    event="audit_cta_click"
                    eventPayload={{ location: "home_audit_product" }}
                  >
                    {c.auditProduct.primaryCta.label}
                  </CTAButton>
                  <CTAButton
                    href={c.auditProduct.secondaryCta.href}
                    variant="ghost"
                    event="audit_cta_click"
                    eventPayload={{ location: "home_audit_details" }}
                  >
                    {c.auditProduct.secondaryCta.label}
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading title={c.sevenPoints.title} className="mb-10" />
          <SevenPointsGrid points={sevenPoints} mode="short" />
        </div>
      </section>

      <section className="bg-bg-alt py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading title={c.routes.title} className="mb-10" />
          <div className="grid gap-4 lg:grid-cols-3">
            {c.routes.cards.map((card) => (
              <RouteCard
                key={card.id}
                title={card.title}
                text={card.text}
                note={"note" in card ? card.note : undefined}
                price={"price" in card ? card.price : undefined}
                cta={"cta" in card ? card.cta : undefined}
                variant={
                  card.id === "diy"
                    ? "neutral"
                    : card.id === "ai"
                      ? "accent"
                      : "contrast"
                }
                event={
                  card.id === "ai"
                    ? "ai_assistant_interest"
                    : card.id === "expert"
                      ? "website_project_interest"
                      : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow={c.ai.eyebrow}
            title={c.ai.title}
            description={c.ai.text}
            className="mb-10"
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {c.ai.cards.map((card) => (
              <ProductCard
                key={card.title}
                title={card.title}
                items={card.helps}
                price={card.price}
                event={card.event}
              />
            ))}
          </div>
          <div className="mt-8">
            <CTAButton
              href={c.ai.cta.href}
              variant="secondary"
              event="ai_assistant_interest"
              eventPayload={{ location: "home_ai_block" }}
            >
              {c.ai.cta.label}
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <SectionHeading title={c.websites.title} description={c.websites.text} />
            <div className="surface-card soft-shadow p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-ink-muted">
                Структура, тексты, путь клиента и поисковая понятность — без
                обещаний «гарантированного потока заявок».
              </p>
              <div className="mt-6">
                <CTAButton
                  href={c.websites.cta.href}
                  event="website_project_interest"
                  eventPayload={{ location: "home_websites" }}
                >
                  {c.websites.cta.label}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title={c.cases.title}
            description={c.cases.text}
            className="mb-10"
          />
          <div className="grid gap-6 lg:grid-cols-2">
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
          <aside className="panel-light mt-10 max-w-2xl p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-muted">
              Дополнительная витрина
            </p>
            <h3 className="heading-serif mt-3 text-2xl text-ink">
              Лаборатория проектов
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              Лендинги, боты, приложения, квизы и другие цифровые решения — чтобы
              увидеть разнообразие форматов разработки. Демонстрационные проекты
              отмечены отдельно и не смешиваются с клиентскими кейсами.
            </p>
            <div className="mt-5">
              <TextLink href="/lab/">Открыть лабораторию →</TextLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-bg py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="mx-auto w-full max-w-[280px] lg:mx-0">
            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-border soft-shadow">
                <Image
                  src={withBasePath(
                    "/images/anastasia-kutuzova-sites-about.webp",
                  )}
                  alt="Анастасия Кутузова — психолог и создатель цифровых систем"
                  fill
                  sizes="(max-width: 1024px) 280px, 280px"
                  className="object-cover object-top"
                />
              </div>
            </figure>
          </div>
          <SectionHeading title={c.about.title} description={c.about.text} />
        </div>
      </section>

      <FinalCTA
        title={c.finalCta.title}
        text={c.finalCta.text}
        priceLine={c.finalCta.priceLine}
        cta={c.finalCta.cta}
      />
    </>
  );
}
