import { cn } from "@/lib/seo";

type PortraitPlaceholderProps = {
  className?: string;
  caption?: string;
};

/**
 * TODO: replace with Anastasia portrait
 * Keep aspect ratio close to a portrait so a real photo can swap in easily.
 */
export function PortraitPlaceholder({
  className,
  caption = "Фотография Анастасии",
}: PortraitPlaceholderProps) {
  return (
    <figure className={cn("relative", className)}>
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-border bg-[linear-gradient(165deg,#FAF7F1_0%,#EFE9DF_48%,#E4DDD0_100%)] soft-shadow"
        role="img"
        aria-label={caption}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(213,183,127,0.28),transparent_48%)]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-4 h-16 w-16 rounded-full border border-border bg-bg/80" />
          <p className="text-sm text-ink-muted">{caption}</p>
          <p className="mt-2 text-xs text-ink-dim">Скоро здесь будет портрет</p>
        </div>
      </div>
    </figure>
  );
}
