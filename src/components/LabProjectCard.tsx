import Image from "next/image";
import Link from "next/link";
import type { LabProject } from "@/content/lab";
import { withBasePath } from "@/lib/paths";

type LabProjectCardProps = {
  project: LabProject;
};

function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

export function LabProjectCard({ project }: LabProjectCardProps) {
  const detailHref = project.detail ? `/lab/${project.slug}/` : undefined;
  const ctaLabel = project.ctaLabel ?? "Посмотреть проект";
  const external = isExternalUrl(project.projectUrl);
  const href = external
    ? project.projectUrl
    : withBasePath(project.projectUrl);

  return (
    <article className="surface-card soft-shadow flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] bg-bg-soft">
        <Image
          src={withBasePath(project.imageSrc)}
          alt={project.imageAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-muted">
            {project.typeLabel}
          </p>
          {project.statusLabel ? (
            <p className="text-xs text-ink-dim">{project.statusLabel}</p>
          ) : null}
        </div>
        <h2 className="heading-serif mt-3 text-2xl text-ink">{project.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="focus-ring cta-primary inline-flex min-h-11 items-center justify-center rounded-full bg-[#173126] px-5 text-sm font-medium text-[#F7F2E9] transition-colors hover:bg-[#23382D]"
          >
            {ctaLabel}
          </a>
          {detailHref ? (
            <Link
              href={detailHref}
              className="focus-ring text-sm text-gold-muted underline-offset-4 hover:underline"
            >
              О проекте →
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
