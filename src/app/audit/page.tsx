import type { Metadata } from "next";
import { AuditForm } from "@/components/AuditForm";
import { AuditPdfMockup } from "@/components/AuditPdfMockup";
import { AuditStep } from "@/components/AuditStep";
import { CheckoutCTA } from "@/components/CheckoutCTA";
import { JsonLd, auditServiceJsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { SevenPointsGrid } from "@/components/SevenPointsGrid";
import { products } from "@/config/products";
import { auditContent } from "@/content/audit";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Персональный аудит сайта психолога",
  description: `Персональный письменный аудит сайта психолога за ${products.audit.priceLabel}. Без созвонов. Срок: ${products.audit.deliveryTime}. Что мешает посетителю сделать следующий шаг и что изменить в первую очередь.`,
  path: "/audit",
});

export default function AuditPage() {
  const c = auditContent;
  const product = products.audit;

  return (
    <>
      <JsonLd data={auditServiceJsonLd()} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-bg pt-10 pb-14 sm:pt-16 sm:pb-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gold-muted">
              Персональный письменный аудит
            </p>
            <h1 className="heading-serif text-balance text-[2rem] text-ink sm:text-4xl lg:text-[2.85rem]">
              {c.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-snug text-gold sm:text-xl">
              {c.hero.lead}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
              {c.hero.subtitle}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {c.hero.highlights.map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl border border-border bg-bg-alt px-4 py-3"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-gold-muted">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="panel-light p-6 sm:p-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Стартовая цена
            </p>
            <p className="heading-serif mt-3 text-5xl text-green-deep">
              {product.priceLabel}
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-muted">
              <li>Персональный письменный аудит</li>
              <li>Без созвонов</li>
              <li>Срок: {product.deliveryTime}</li>
              <li>Первые 5 аудитов по стартовой цене</li>
            </ul>
            <p className="mt-4 text-sm text-ink-dim">{product.note}</p>
            <div className="mt-6">
              <CheckoutCTA
                label={c.hero.cta.label}
                href="#audit-form"
                variant="primary"
              />
            </div>
          </aside>
        </div>
      </section>

      {/* 2. Для кого */}
      <section className="bg-bg py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading title={c.forWhom.title} className="mb-8" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {c.forWhom.items.map((item) => (
              <li
                key={item}
                className="surface-card-soft soft-shadow flex gap-3 p-5 text-sm leading-relaxed text-ink-muted"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. 7 точек */}
      <section className="bg-bg-alt py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title={c.checklist.title}
            description={c.checklist.description}
            className="mb-10"
          />
          <SevenPointsGrid points={[...c.checklist.points]} mode="detailed" />
        </div>
      </section>

      {/* 4. Что получает клиент */}
      <section className="bg-bg py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              title={c.deliverables.title}
              description={c.deliverables.intro}
            />
            <ul className="mt-8 space-y-3">
              {c.deliverables.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-ink-muted sm:text-base"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <AuditPdfMockup />
        </div>
      </section>

      {/* 5. Как проходит */}
      <section className="bg-bg py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title={c.process.title}
            description={c.process.deliveryNote}
            className="mb-10"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {c.process.steps.map((step) => (
              <AuditStep
                key={step.number}
                number={step.number}
                title={step.title}
                text={step.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Компактная светлая CTA */}
      <section id="pricing" className="bg-bg py-14 sm:py-16">
        <div className="container-narrow">
          <div className="panel-light px-6 py-10 text-center sm:px-10 sm:py-12">
            <h2 className="heading-serif text-balance text-3xl text-ink sm:text-4xl">
              {c.pricing.title}
            </h2>
            <p className="heading-serif mt-5 text-4xl text-green-deep sm:text-5xl">
              {c.pricing.price}
            </p>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
              {c.pricing.summary}
            </p>
            <div className="mt-8 flex justify-center">
              <CheckoutCTA
                label={c.pricing.cta.label}
                href="#audit-form"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7–8. Форма → PaymentStep */}
      <section className="bg-bg-alt py-14 sm:py-24">
        <div className="container-narrow">
          <AuditForm />
        </div>
      </section>
    </>
  );
}
