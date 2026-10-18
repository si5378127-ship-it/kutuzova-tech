import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { TextLink } from "@/components/TextLink";
import {
  getLabProjectBySlug,
  getLabProjectsWithDetail,
} from "@/content/lab";
import { withBasePath } from "@/lib/paths";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLabProjectsWithDetail().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getLabProjectBySlug(slug);
  if (!project?.detail) {
    return buildMetadata({
      title: "Проект лаборатории",
      description: "Страница проекта лаборатории.",
      path: `/lab/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${project.title} — лаборатория`,
    description: project.summary,
    path: `/lab/${project.slug}`,
  });
}

export default async function LabProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getLabProjectBySlug(slug);
  if (!project?.detail) notFound();

  const { detail } = project;
  const ctaLabel = project.ctaLabel ?? "Посмотреть проект";
  const external = /^https?:\/\//i.test(project.projectUrl);
  const projectHref = external
    ? project.projectUrl
    : withBasePath(project.projectUrl);

  return (
    <>
      <section className="bg-bg pt-10 pb-12 sm:pt-16 sm:pb-16">
        <div className="container-page">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gold-muted">
            Лаборатория · {project.typeLabel}
          </p>
          <h1 className="heading-serif max-w-[20ch] text-balance text-[2rem] leading-[1.15] text-ink sm:text-4xl">
            {project.title}
          </h1>
          {project.statusLabel ? (
            <p className="mt-4 text-sm text-ink-dim">{project.statusLabel}</p>
          ) : null}
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {project.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={projectHref}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="focus-ring cta-primary inline-flex min-h-11 items-center justify-center rounded-full bg-[#173126] px-6 text-sm font-medium text-[#F7F2E9] transition-colors hover:bg-[#23382D]"
            >
              {ctaLabel}
            </a>
            <TextLink href="/lab/">← Все проекты лаборатории</TextLink>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-12 sm:py-16">
        <div className="container-page">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.25rem] border border-border bg-bg-soft soft-shadow">
            <Image
              src={withBasePath(project.imageSrc)}
              alt={project.imageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 960px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 sm:py-20">
        <div className="container-narrow space-y-14">
          <div>
            <SectionHeading as="h2" title={detail.task.title} />
            <div className="mt-8 space-y-5">
              {detail.task.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-ink-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading as="h2" title={detail.features.title} />
            <ul className="mt-8 space-y-3">
              {detail.features.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-relaxed text-ink-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {detail.notes ? (
            <div className="panel-light p-6 sm:p-8">
              <h2 className="heading-serif text-2xl text-ink">
                {detail.notes.title}
              </h2>
              <div className="mt-5 space-y-4">
                {detail.notes.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-ink-muted sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-6">
            <a
              href={projectHref}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="focus-ring text-sm font-medium text-gold-muted underline-offset-4 hover:underline"
            >
              {ctaLabel} →
            </a>
            <TextLink href="/lab/">К лаборатории</TextLink>
            <TextLink href="/sites/">Клиентские кейсы и услуги</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
