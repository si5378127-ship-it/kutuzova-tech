"use client";

import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/content/portfolio";
import { track } from "@/lib/analytics";
import { withBasePath } from "@/lib/paths";
import { cn } from "@/lib/seo";

type PortfolioProjectCardProps = {
  project: PortfolioProject;
  className?: string;
};

export function PortfolioProjectCard({
  project,
  className,
}: PortfolioProjectCardProps) {
  const href = project.detailsHref || project.projectUrl;
  const external = Boolean(project.projectUrl && !project.detailsHref);

  return (
    <article
      className={cn("surface-card soft-shadow overflow-hidden", className)}
      onClick={() => track("case_view", { title: project.title })}
    >
      <div className="relative aspect-[16/10] bg-bg-soft">
        <Image
          src={
            project.imageSrc.startsWith("/")
              ? withBasePath(project.imageSrc)
              : project.imageSrc
          }
          alt={project.imageAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gold-muted">
          {project.format}
        </p>
        <h3 className="heading-serif text-2xl text-ink">{project.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">
          <span className="text-ink">Задача: </span>
          {project.task}
        </p>
        <div className="mt-4">
          <p className="text-sm text-ink">Основные функции:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink-muted">
            {project.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {project.indexingNote ? (
          <p className="mt-4 text-xs leading-relaxed text-ink-dim">
            {project.indexingNote}
          </p>
        ) : null}
        {href ? (
          <Link
            href={href}
            className="focus-ring mt-5 inline-flex text-sm text-gold-muted underline-offset-4 hover:underline"
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            Посмотреть проект →
          </Link>
        ) : null}
      </div>
    </article>
  );
}
