import Link from "next/link";
import { cn } from "@/lib/seo";

export type ProjectItem = {
  id: string;
  title: string;
  category?: string;
  summary: string;
  href?: string;
};

type ProjectCardProps = {
  project: ProjectItem;
  className?: string;
};

/**
 * Neutral project card — sites, psychology products, art series, digital tools.
 * Do not invent results or testimonials.
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "surface-card-soft soft-shadow flex h-full flex-col p-6",
        className,
      )}
    >
      {project.category ? (
        <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-gold-muted">
          {project.category}
        </p>
      ) : null}
      <h3 className="heading-serif text-2xl text-ink">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {project.summary}
      </p>
      {project.href ? (
        <Link
          href={project.href}
          className="focus-ring mt-6 inline-flex text-sm text-gold-muted underline-offset-4 hover:text-green-deep hover:underline"
        >
          Смотреть подробнее →
        </Link>
      ) : (
        <p className="mt-6 text-sm text-ink-dim">Материалы появятся позже</p>
      )}
    </article>
  );
}
