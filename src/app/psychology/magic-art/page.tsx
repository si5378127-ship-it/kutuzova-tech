import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { TelegramBookingButton } from "@/components/TelegramBookingButton";
import { TextLink } from "@/components/TextLink";
import { magicArtContent as c } from "@/content/magic-art";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: c.meta.title,
    description: c.meta.description,
    path: c.meta.path,
  }),
  title: c.meta.title,
  keywords: [
    "Magic Art",
    "сессия Magic Art",
    "интегративное рисование",
    "Magic Art психолог",
    "индивидуальная сессия рисование",
  ],
};

export default function MagicArtSessionPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-x-clip bg-bg pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="container-page">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-gold-muted">
            {c.hero.eyebrow}
          </p>
          <h1 className="heading-serif max-w-[18ch] text-balance text-[2rem] leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]">
            {c.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {c.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-end gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-muted">
                {c.hero.priceLabel}
              </p>
              <p className="heading-serif mt-2 text-4xl text-green-deep sm:text-5xl">
                {c.hero.price}
              </p>
            </div>
            <TelegramBookingButton
              href={c.hero.cta.href}
              location="magic_art_hero"
            >
              {c.hero.cta.label}
            </TelegramBookingButton>
          </div>
          <p className="mt-8 text-sm text-ink-dim">
            <TextLink href="/psychology/">← Психология и коучинг</TextLink>
          </p>
        </div>
      </section>

      {/* 2. Audience */}
      <section className="bg-bg-alt py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading as="h2" title={c.audience.title} className="mb-10" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {c.audience.items.map((item, index) => (
              <li key={item}>
                <article className="surface-card soft-shadow h-full p-6 sm:p-7">
                  <p className="text-xs tracking-[0.2em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">
                    {item}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Method */}
      <section className="bg-bg py-16 sm:py-24">
        <div className="container-narrow">
          <SectionHeading as="h2" title={c.method.title} />
          <div className="mt-10 space-y-6">
            {c.method.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-ink-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Session flow */}
      <section className="bg-bg-alt py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading as="h2" title={c.session.title} className="mb-4" />
          <p className="max-w-2xl text-sm leading-relaxed text-ink-dim sm:text-base">
            {c.session.note}
          </p>
          <ol className="mt-10 grid gap-4 lg:grid-cols-2">
            {c.session.steps.map((step) => (
              <li key={step.number}>
                <article className="surface-card-soft soft-shadow flex h-full flex-col p-6 sm:p-8">
                  <p className="text-xs tracking-[0.2em] text-gold">
                    {step.number}
                  </p>
                  <h3 className="heading-serif mt-4 text-2xl text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {step.text}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. About */}
      <section className="bg-bg py-16 sm:py-24">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading as="h2" title={c.about.title} />
            <div className="mt-10 space-y-6">
              {c.about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <aside className="panel-light p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-muted">
              {c.about.certificate.label}
            </p>
            <div
              className="mt-5 aspect-[4/3] rounded-[1.1rem] bg-gradient-to-br from-bg-soft via-bg to-bg-soft"
              aria-hidden
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-dim">
              {c.about.certificate.caption}
            </p>
          </aside>
        </div>
      </section>

      {/* 6. Pricing + booking */}
      <section id="booking" className="scroll-mt-24 bg-bg-alt py-16 sm:py-24">
        <div className="container-narrow">
          <div className="panel-light p-6 text-center sm:p-10">
            <SectionHeading
              as="h2"
              title={c.pricing.title}
              align="center"
              className="mx-auto"
            />
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-gold-muted">
              {c.pricing.priceLabel}
            </p>
            <p className="heading-serif mt-3 text-5xl text-green-deep">
              {c.pricing.price}
            </p>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
              {c.pricing.text}
            </p>
            <div className="mt-8">
              <TelegramBookingButton
                href={c.pricing.cta.href}
                location="magic_art_pricing"
              >
                {c.pricing.cta.label}
              </TelegramBookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-bg py-16 sm:py-24">
        <div className="container-narrow">
          <SectionHeading as="h2" title={c.faq.title} className="mb-10" />
          <dl className="divide-y divide-border overflow-hidden rounded-[1.25rem] border border-border bg-bg-surface">
            {c.faq.items.map((item) => (
              <div key={item.question} className="px-6 py-5 sm:px-8 sm:py-6">
                <dt className="heading-serif text-xl text-ink sm:text-2xl">
                  {item.question}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-6">
            <TextLink href="/psychology/">← К разделу психологии</TextLink>
            <TextLink href="/contact/">Контакты →</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
