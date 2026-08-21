"use client";

import { useState } from "react";
import type { SevenPoint } from "@/content/seven-points";
import { cn } from "@/lib/seo";

type SevenPointsGridProps = {
  points: SevenPoint[];
  mode?: "short" | "detailed";
};

export function SevenPointsGrid({
  points,
  mode = "short",
}: SevenPointsGridProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {points.map((point) => {
        const isActive = activeId === point.id;
        const description = mode === "detailed" ? point.detailed : point.short;

        return (
          <button
            key={point.id}
            type="button"
            className={cn(
              "surface-card-soft soft-shadow focus-ring group min-h-[150px] p-5 text-left transition-all duration-300 sm:min-h-[170px]",
              isActive && "border-gold/40 bg-bg",
            )}
            onMouseEnter={() => setActiveId(point.id)}
            onMouseLeave={() => setActiveId(null)}
            onFocus={() => setActiveId(point.id)}
            onBlur={() => setActiveId(null)}
            onClick={() =>
              setActiveId((current) => (current === point.id ? null : point.id))
            }
            aria-expanded={isActive}
            aria-controls={`point-desc-${point.id}`}
          >
            <p className="text-xs tracking-[0.2em] text-gold">{point.number}</p>
            <h3 className="mt-3 text-lg font-medium text-ink">{point.title}</h3>
            <p
              id={`point-desc-${point.id}`}
              className={cn(
                "mt-3 text-sm leading-relaxed text-ink-muted transition-opacity duration-300",
                mode === "detailed" || isActive
                  ? "opacity-100"
                  : "opacity-75 group-hover:opacity-100",
              )}
            >
              {description}
            </p>
          </button>
        );
      })}
    </div>
  );
}
