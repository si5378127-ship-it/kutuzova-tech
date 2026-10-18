"use client";

import { useMemo, useState } from "react";
import { LabProjectCard } from "@/components/LabProjectCard";
import type { LabCategory, LabCategoryId, LabProject } from "@/content/lab";
import { cn } from "@/lib/seo";

type LabGalleryProps = {
  projects: readonly LabProject[];
  categories: readonly LabCategory[];
};

type FilterId = "all" | LabCategoryId;

export function LabGallery({ projects, categories }: LabGalleryProps) {
  const [filter, setFilter] = useState<FilterId>("all");

  const visible = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  const filters: { id: FilterId; label: string }[] = [
    { id: "all", label: "Все" },
    ...categories.map((c) => ({ id: c.id as FilterId, label: c.label })),
  ];

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Категории проектов"
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

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {visible.map((project) => (
          <LabProjectCard key={project.id} project={project} />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-ink-muted">
          В этой категории пока нет проектов.
        </p>
      ) : null}
    </div>
  );
}

function projectWord(n: number): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "проект";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "проекта";
  return "проектов";
}
