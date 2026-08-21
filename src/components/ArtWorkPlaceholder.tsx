import { cn } from "@/lib/seo";

type ArtWorkPlaceholderProps = {
  label?: string;
  className?: string;
};

/**
 * Aesthetic placeholder for artworks.
 * TODO: replace with real painting photographs
 */
export function ArtWorkPlaceholder({
  label = "Работа",
  className,
}: ArtWorkPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-border bg-[linear-gradient(160deg,#FAF7F1_0%,#EFE8DC_55%,#E5DCCE_100%)] soft-shadow",
        className,
      )}
      role="img"
      aria-label={`${label} — фотография появится позже`}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(213,183,127,0.22),transparent_50%)]"
      />
      <div className="absolute inset-0 flex flex-col items-end justify-between p-4">
        <span className="rounded-full border border-border bg-bg/70 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-ink-dim">
          Placeholder
        </span>
        <p className="text-xs text-ink-dim">{label}</p>
      </div>
    </div>
  );
}
