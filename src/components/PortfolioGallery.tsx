"use client";

import { useMemo, useState } from "react";
import { CaseCard } from "@/components/CaseCard";
import type {
  PortfolioCategory,
  PortfolioCategoryId,
  PortfolioProject,
} from "@/content/portfolio";
import { cn } from "@/lib/seo";

type PortfolioGalleryProps = {
  projects: readonly PortfolioProject[];
  categories: readonly PortfolioCategory[];
};

type FilterId = "all" | PortfolioCategoryId;

export function PortfolioGallery({
  projects,
  categories,
}: PortfolioGalleryProps) {
  const [filter, setFilter] = useState<FilterId>("all");

  const visible = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  const filters: { id: FilterId; label: string }[] = [
    { id: "all", label: "Все проекты" },
    ...categories.map((c) => ({ id: c.id as FilterId, label: c.label })),
  ];

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Категории портфолио"
      >
        {filters.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              className={cn(
                "focus-ring inline-flex min-h-10 items-center rounded-full border px-4 text-sm transition-colors",
                active
                  ? "border-green-deep bg-green-deep text-[#F7F2E9]"
                  : "border-border-strong bg-transparent text-ink-muted hover:border-gold hover:text-ink",
              )}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-ink-dim">
        {visible.length === projects.length
          ? `${projects.length} ${projectWord(projects.length)}`
          : `${visible.length} из ${projects.length}`}
      </p>

      {visible.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {visible.map((project) => (
            <CaseCard
              key={project.id}
              title={project.title}
              industry={project.industry}
              summary={project.summary}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              detailsHref={project.detailsHref}
              projectUrl={
                project.detailsHref ? undefined : project.projectUrl
              }
            />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-sm text-ink-muted">
          В этой категории пока нет проектов.
        </p>
      )}
    </div>
  );
}

function projectWord(n: number): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "проект";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return "проекта";
  }
  return "проектов";
}
