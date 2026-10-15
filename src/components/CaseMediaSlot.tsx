import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import { cn } from "@/lib/seo";
import type { CaseMediaSlot as CaseMediaSlotType } from "@/content/sites-cases/types";

type CaseMediaSlotProps = {
  slot: CaseMediaSlotType;
  className?: string;
};

/**
 * Renders a real image when available and cleared for publishing.
 * Otherwise shows a labeled reserved placeholder — never invented imagery.
 */
export function CaseMediaSlot({ slot, className }: CaseMediaSlotProps) {
  const canShowImage = Boolean(slot.src) && !slot.privacyHold;

  return (
    <figure className={cn("overflow-hidden rounded-[1.25rem]", className)}>
      <div className="relative aspect-[16/10] bg-bg-soft">
        {canShowImage && slot.src ? (
          <Image
            src={slot.src.startsWith("/") ? withBasePath(slot.src) : slot.src}
            alt={slot.label}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-muted">
              Место для изображения
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
              {slot.label}
            </p>
            {slot.privacyHold ? (
              <p className="mt-1 max-w-sm text-xs leading-relaxed text-ink-dim">
                Слот зарезервирован. Публикация после проверки
                конфиденциальности и разрешения на использование.
              </p>
            ) : (
              <p className="mt-1 max-w-sm text-xs leading-relaxed text-ink-dim">
                Реальный файл будет добавлен отдельно — без подставных картинок.
              </p>
            )}
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-ink-muted">
        {slot.caption}
      </figcaption>
    </figure>
  );
}
