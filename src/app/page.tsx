import type { Metadata } from "next";
import Image from "next/image";
import { ArtWorkPlaceholder } from "@/components/ArtWorkPlaceholder";
import { DirectionCard } from "@/components/DirectionCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StartProductCard } from "@/components/StartProductCard";
import { TextLink } from "@/components/TextLink";
import { brandHomeContent } from "@/content/brand-home";
import { withBasePath } from "@/lib/paths";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Анастасия Кутузова — психология, картины и сайты",
  description:
    "Анастасия Кутузова — психолог и коуч. Авторские практики, картины и цифровые проекты. Помогаю находить ясность, новые возможности и форму для их воплощения.",
  path: "/",
});

export default function BrandHomePage() {
  const c = brandHomeContent;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-x-clip bg-bg pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="container-page">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-12 lg:gap-16 xl:gap-20">
            <div className="max-w-[34rem]">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-gold-muted">
                {c.hero.eyebrow}
              </p>
              <h1 className="heading-serif text-balance text-[2rem] leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]">
                {c.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {c.hero.subtitle}
              </p>
              <nav
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3"
                aria-label="Направления"
              >
                {c.hero.directions.map((item) => (
                  <TextLink key={item.href} href={item.href}>
                    {item.label}
                  </TextLink>
                ))}
              </nav>
            </div>

            <figure className="relative mx-auto w-full max-w-[380px] md:mx-0 md:max-w-none md:justify-self-stretch">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px] sm:aspect-[2/3]">
                <Image
                  src={withBasePath("/images/anastasia-kutuzova-hero.png")}
                  alt="Анастасия Кутузова"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 420px"
                  className="object-cover object-[center_18%] md:object-[center_16%]"
                />
              </div>
              <figcaption className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-gold-muted md:text-left">
                Психолог · Коуч · Автор
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading title={c.directions.title} className="mb-10" />
          <div className="grid gap-5 lg:grid-cols-3">
            {c.directions.cards.map((card) => (
              <DirectionCard
                key={card.id}
                number={card.number}
                title={card.title}
                lead={card.lead}
                text={card.text}
                cta={card.cta}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bridge */}
      <section className="bg-bg-alt py-20 sm:py-28">
        <div className="container-narrow">
          <h2 className="heading-serif text-balance text-3xl text-ink sm:text-4xl lg:text-[2.6rem]">
            {c.bridge.title}
          </h2>
          <p className="mt-8 text-xl text-gold sm:text-2xl">{c.bridge.intro}</p>
          <div className="mt-12 space-y-8">
            {c.bridge.paragraphs.map((paragraph) => (
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

      {/* About */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 md:gap-14 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-20">
          <figure className="relative mx-auto w-full max-w-[440px] lg:mx-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px]">
              <Image
                src={withBasePath("/images/anastasia-about.jpg")}
                alt="Анастасия Кутузова"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-cover object-[center_28%]"
              />
            </div>
          </figure>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gold-muted">
              {c.about.eyebrow}
            </p>
            <h2 className="heading-serif text-3xl text-ink sm:text-4xl">
              {c.about.title}
            </h2>
            <div className="mt-6 space-y-4">
              {c.about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-xl text-base leading-relaxed text-ink-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <TextLink href={c.about.cta.href}>{c.about.cta.label}</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* Start products */}
      <section className="bg-bg-alt py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading title={c.start.title} className="mb-10" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {c.start.products.map((product) => (
              <StartProductCard
                key={product.id}
                product={{
                  id: product.id,
                  title: product.title,
                  description: product.description,
                  href: product.href,
                  ctaLabel: product.ctaLabel,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Art */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title={c.art.title}
            description={c.art.text}
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            <ArtWorkPlaceholder label="Работа 01" />
            <ArtWorkPlaceholder label="Работа 02" />
            <ArtWorkPlaceholder label="Работа 03" />
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            <TextLink href={c.art.primaryCta.href}>
              {c.art.primaryCta.label}
            </TextLink>
            {/* TODO: enable secondary CTA when learning offer is ready */}
            {c.art.secondaryCta.enabled ? (
              <TextLink href={c.art.secondaryCta.href}>
                {c.art.secondaryCta.label}
              </TextLink>
            ) : null}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-bg-alt py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading title={c.projects.title} className="mb-10" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {c.projects.items.map((project) => (
              <ProjectCard
                key={project.id}
                project={{
                  id: project.id,
                  title: project.title,
                  category: project.category,
                  summary: project.summary,
                  href: project.href,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="container-narrow text-center">
          <h2 className="heading-serif text-balance text-3xl text-ink sm:text-4xl">
            {c.final.title}
          </h2>
          <p className="mt-5 text-base text-ink-muted sm:text-lg">
            {c.final.subtitle}
          </p>
          <nav
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10"
            aria-label="Выбор направления"
          >
            {c.final.directions.map((item) => (
              <TextLink key={item.href} href={item.href} className="text-lg">
                {item.label}
              </TextLink>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}
