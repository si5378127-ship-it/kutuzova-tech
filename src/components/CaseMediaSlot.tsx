import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import { cn } from "@/lib/seo";
import type { CaseMediaSlot as CaseMediaSlotType } from "@/content/sites-cases/types";

type CaseMediaSlotProps = {
  slot: CaseMediaSlotType;
  className?: string;
  /**
   * When true and there is no publishable image, render a quiet neutral
   * frame without instructional copy. Default: hide the slot entirely.
   */
  allowNeutralEmpty?: boolean;
};

/**
 * Renders a real image when available and cleared for publishing.
 * Never invents imagery or shows “placeholder screenshot” labels to visitors.
 */
export function CaseMediaSlot({
  slot,
  className,
  allowNeutralEmpty = false,
}: CaseMediaSlotProps) {
  const canShowImage = Boolean(slot.src) && !slot.privacyHold;

  if (!canShowImage && !allowNeutralEmpty) {
    return null;
  }

  return (
    <figure className={cn("overflow-hidden", className)}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-bg-soft">
        {canShowImage && slot.src ? (
          <Image
            src={slot.src.startsWith("/") ? withBasePath(slot.src) : slot.src}
            alt={slot.label}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div
            className="h-full w-full bg-gradient-to-br from-bg-soft via-bg-alt to-bg-soft"
            aria-hidden
          />
        )}
      </div>
      {canShowImage && slot.caption ? (
        <figcaption className="mt-3 text-sm leading-relaxed text-ink-muted">
          {slot.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
