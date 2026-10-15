import { CaseMediaSlot } from "@/components/CaseMediaSlot";
import { cn } from "@/lib/seo";
import type { SiteVisualCompare as SiteVisualCompareType } from "@/content/sites-cases/types";

type SiteVisualCompareProps = {
  compare: SiteVisualCompareType;
  eyebrow?: string;
  className?: string;
};

export function SiteVisualCompare({
  compare,
  eyebrow = "Внешний вид",
  className,
}: SiteVisualCompareProps) {
  return (
    <div className={cn(className)}>
      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-muted">
          {eyebrow}
        </p>
        <h2 className="heading-serif mt-4 text-3xl text-ink sm:text-4xl">
          {compare.title}
        </h2>
        {compare.description ? (
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {compare.description}
          </p>
        ) : null}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="min-w-0">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-gold-muted">
            До
          </p>
          <CaseMediaSlot slot={compare.before} allowNeutralEmpty />
        </div>
        <div className="min-w-0">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            После
          </p>
          <CaseMediaSlot slot={compare.after} allowNeutralEmpty />
        </div>
      </div>
    </div>
  );
}
