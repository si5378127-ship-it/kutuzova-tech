import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { boundariesContent as c } from "@/content/boundaries";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: c.meta.title,
  description: c.meta.description,
  path: c.meta.path,
});

export default function BoundariesPracticumPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-x-clip bg-bg pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="container-page">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-gold-muted">
            {c.hero.eyebrow}
          </p>
          <h1 className="heading-serif max-w-[20ch] text-balance text-[2rem] leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]">
            {c.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {c.hero.subtitle}
          </p>
          <div className="mt-8">
            <CTAButton href={c.hero.cta.href} variant="secondary">
              {c.hero.cta.label}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 2. Situation recognition */}
      <section className="bg-bg-alt py-16 sm:py-24">
        <div className="container-narrow">
          <SectionHeading as="h2" title={c.recognition.title} />
          <div className="mt-10 space-y-6">
            {c.recognition.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Three steps */}
      <section
        id={c.steps.id}
        className="scroll-mt-24 bg-bg py-16 sm:scroll-mt-28 sm:py-24"
      >
        <div className="container-page">
          <SectionHeading
            as="h2"
            eyebrow={c.steps.eyebrow}
            title={c.steps.title}
          />

          <p
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.18em] text-gold-muted"
            aria-hidden="true"
          >
            {c.steps.sequence.map((verb, index) => (
              <span key={verb} className="inline-flex items-center gap-3">
                {index > 0 ? (
                  <span className="text-gold/70" aria-hidden>
                    →
                  </span>
                ) : null}
                {verb}
              </span>
            ))}
          </p>

          <ol className="mt-10 grid gap-5 lg:grid-cols-3">
            {c.steps.items.map((step) => (
              <li key={step.number}>
                <article className="surface-card-soft soft-shadow flex h-full flex-col p-6 sm:p-8">
                  <p className="text-xs tracking-[0.2em] text-gold">
                    {step.number}
                  </p>
                  <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-gold-muted">
                    {step.verb}
                  </p>
                  <h3 className="heading-serif mt-3 text-2xl text-ink sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base font-medium leading-snug text-ink">
                    {step.lead}
                  </p>
                  {"preface" in step && step.preface ? (
                    <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                      {step.preface}
                    </p>
                  ) : null}
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {step.questions.map((question) => (
                      <li key={question} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                          aria-hidden
                        />
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-6 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {step.closing}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Outcomes */}
      <section className="bg-bg-alt py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading as="h2" title={c.outcomes.title} className="mb-10" />
          <ol className="grid gap-4 sm:grid-cols-2">
            {c.outcomes.items.map((item) => (
              <li key={item.number}>
                <article className="surface-card soft-shadow flex h-full flex-col p-6 sm:p-8">
                  <p className="text-xs tracking-[0.2em] text-gold">
                    {item.number}
                  </p>
                  <h3 className="heading-serif mt-4 text-2xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {item.text}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. How the work is structured */}
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
          <aside className="surface-card-soft mt-10 p-6 sm:p-7">
            <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
              {c.method.imageNote}
            </p>
          </aside>
        </div>
      </section>

      {/* 6. Format placeholders */}
      <section className="bg-bg-alt py-16 sm:py-24">
        <div className="container-narrow">
          <SectionHeading as="h2" title={c.format.title} />
          <dl className="mt-10 divide-y divide-border overflow-hidden rounded-[1.25rem] border border-border bg-bg-surface">
            {c.format.items.map((item) => (
              <div
                key={item.label}
                className="grid gap-2 px-6 py-5 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] sm:items-baseline sm:gap-8"
              >
                <dt className="text-sm font-medium text-ink">{item.label}</dt>
                <dd className="text-sm leading-relaxed text-ink-dim">
                  {item.value}
                </dd>
              </div>
            ))}
            <div className="grid gap-2 px-6 py-5 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] sm:items-center sm:gap-8">
              <dt className="text-sm font-medium text-ink">
                {c.format.payment.label}
              </dt>
              <dd>
                <p className="text-sm leading-relaxed text-ink-dim">
                  {c.format.payment.value}
                </p>
                {/* TODO: replace with Prodamus checkout when the payment URL exists */}
                <p className="mt-2 text-xs tracking-[0.04em] text-ink-dim">
                  {c.format.payment.note}
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="container-narrow text-center">
          <h2 className="heading-serif text-balance text-3xl text-ink sm:text-4xl">
            {c.final.title}
          </h2>
          <div className="mt-8 space-y-6">
            {c.final.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-ink-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-3">
            <CTAButton
              href="#practicum-content"
              type="button"
              disabled
              aria-describedby="boundaries-cta-note"
            >
              {c.final.ctaLabel}
            </CTAButton>
            <p id="boundaries-cta-note" className="text-sm text-ink-dim">
              {c.final.ctaNote}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
