import type { Metadata } from "next";
import { CaseMediaSlot } from "@/components/CaseMediaSlot";
import { CTAButton } from "@/components/CTAButton";
import { InquiryFlowCompare } from "@/components/InquiryFlowCompare";
import { SectionHeading } from "@/components/SectionHeading";
import { TextLink } from "@/components/TextLink";
import { tvernefteregionCase as c } from "@/content/sites-cases";
import { buildMetadata, cn } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: c.meta.title,
  description: c.meta.description,
  path: c.meta.path,
});

export default function TvernefteregionCasePage() {
  return (
    <>
      <section className="bg-bg pt-10 pb-16 sm:pt-16 sm:pb-24">
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
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={c.hero.liveCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border-strong bg-transparent px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-gold hover:text-green-deep"
              aria-label={`${c.hero.liveCta.label} (откроется в новой вкладке)`}
            >
              {c.hero.liveCta.label}
            </a>
            <CTAButton href={c.finalCta.cta.href} className="min-h-11">
              {c.finalCta.cta.label}
            </CTAButton>
          </div>
          <p className="mt-6 text-sm text-ink-dim">
            <TextLink href="/sites/">← Все проекты сайтов</TextLink>
          </p>
        </div>
      </section>

      <section className="bg-bg-alt py-16 sm:py-24">
        <div className="container-narrow">
          <SectionHeading as="h2" title={c.task.title} />
          <div className="mt-10 space-y-6">
            {c.task.paragraphs.map((paragraph) => (
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

      {c.inquiryFlow ? (
        <section className="bg-bg py-16 sm:py-24">
          <div className="container-page">
            <InquiryFlowCompare flow={c.inquiryFlow} />
          </div>
        </section>
      ) : null}

      {c.highlightExample ? (
        <section className="bg-bg-alt py-16 sm:py-24">
          <div className="container-narrow">
            <aside className="panel-light p-6 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-muted">
                Главный акцент
              </p>
              <h2 className="heading-serif mt-4 text-2xl text-ink sm:text-3xl">
                {c.highlightExample.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink sm:text-lg">
                {c.highlightExample.text}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-dim sm:text-base">
                {c.highlightExample.caveat}
              </p>
            </aside>
          </div>
        </section>
      ) : null}

      <section className="bg-bg py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading as="h2" title={c.delivery.title} className="mb-10" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {c.delivery.items.map((item) => (
              <li key={item}>
                <article className="surface-card-soft soft-shadow h-full p-6">
                  <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                    {item}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg-alt py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            as="h2"
            title={c.results.title}
            description={c.results.description}
            className="mb-10"
          />
          <ol className="grid gap-4">
            {c.results.items.map((item, index) => (
              <li key={item.title}>
                <article
                  className={cn(
                    "soft-shadow h-full p-6 sm:p-8",
                    item.emphasis === "primary"
                      ? "panel-light"
                      : "surface-card",
                  )}
                >
                  <p className="text-xs tracking-[0.2em] text-gold">
                    {String(index + 1).padStart(2, "0")}
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

      <section className="bg-bg py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            as="h2"
            title="Материалы проекта"
            description="Слоты под реальные изображения. Файлы будут добавлены отдельно; скрин переписки в MAX не публикуется до проверки конфиденциальности и разрешения."
            className="mb-10"
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {c.media.map((slot) => (
              <CaseMediaSlot key={slot.id} slot={slot} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-20 sm:py-28">
        <div className="container-narrow text-center">
          <h2 className="heading-serif text-balance text-3xl text-ink sm:text-4xl">
            {c.finalCta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {c.finalCta.text}
          </p>
          <div className="mt-10">
            <CTAButton href={c.finalCta.cta.href}>
              {c.finalCta.cta.label}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
