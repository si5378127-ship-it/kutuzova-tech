"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { withBasePath } from "@/lib/paths";
import { cn } from "@/lib/seo";

type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  /** object-fit for the thumbnail frame */
  objectPosition?: string;
};

/**
 * Thumbnail that opens a simple full-screen lightbox on click/Enter.
 * Keeps focus management and Escape-to-close for accessibility.
 */
export function ZoomableImage({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  objectPosition = "object-top",
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const resolvedSrc = src.startsWith("/") ? withBasePath(src) : src;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "focus-ring group relative block h-full w-full overflow-hidden rounded-[1.25rem] bg-bg-soft text-left",
          className,
        )}
        aria-label={`${alt}. Открыть крупнее`}
      >
        <Image
          src={resolvedSrc}
          alt={alt}
          fill
          className={cn(
            "object-cover transition-transform duration-300 group-hover:scale-[1.02]",
            objectPosition,
            imageClassName,
          )}
          sizes={sizes}
        />
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-[#173126]/90 px-3 py-1 text-[11px] font-medium tracking-[0.04em] text-[#F7F2E9] opacity-90">
          Увеличить
        </span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(23,49,38,0.72)] p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[1.25rem] bg-bg p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <p id={titleId} className="text-sm text-ink-muted">
                {alt}
              </p>
              <button
                type="button"
                className="focus-ring rounded-full border border-border px-3 py-1.5 text-sm text-ink-muted hover:text-ink"
                onClick={() => setOpen(false)}
              >
                Закрыть
              </button>
            </div>
            <div className="relative mx-auto w-full overflow-hidden rounded-[1rem] bg-bg-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={resolvedSrc}
                alt={alt}
                className="mx-auto h-auto max-h-[78vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
