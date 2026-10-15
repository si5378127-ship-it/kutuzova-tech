"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { withBasePath } from "@/lib/paths";
import { cn } from "@/lib/seo";

export type CaseCardProps = {
  title: string;
  industry?: string;
  /** Short portfolio preview copy */
  summary?: string;
  challenge?: string;
  work?: string;
  result?: string;
  imageSrc?: string;
  imageAlt?: string;
  projectUrl?: string;
  detailsHref?: string;
  className?: string;
};

export function CaseCard({
  title,
  industry,
  summary,
  challenge,
  work,
  result,
  imageSrc,
  imageAlt,
  projectUrl,
  detailsHref,
  className,
}: CaseCardProps) {
  const href = detailsHref || projectUrl;
  const previewMode = Boolean(summary);

  return (
    <article
      className={cn("surface-card soft-shadow overflow-hidden", className)}
      onClick={() => track("case_view", { title })}
    >
      <div className="relative aspect-[16/10] bg-bg-soft">
        {imageSrc ? (
          <Image
            src={
              imageSrc.startsWith("/") ? withBasePath(imageSrc) : imageSrc
            }
            alt={imageAlt || title}
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
      <div className="p-6">
        {industry ? (
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gold-muted">
            {industry}
          </p>
        ) : null}
        <h3 className="heading-serif text-2xl text-ink">{title}</h3>
        {previewMode ? (
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            {summary}
          </p>
        ) : (
          <>
            {challenge ? (
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                <span className="text-ink">Задача: </span>
                {challenge}
              </p>
            ) : null}
            {work ? (
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                <span className="text-ink">Работа: </span>
                {work}
              </p>
            ) : null}
            {result ? (
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                <span className="text-ink">Результат: </span>
                {result}
              </p>
            ) : null}
          </>
        )}
        {href ? (
          <Link
            href={href}
            className="focus-ring mt-5 inline-flex text-sm text-gold-muted underline-offset-4 hover:underline"
            target={projectUrl ? "_blank" : undefined}
            rel={projectUrl ? "noopener noreferrer" : undefined}
          >
            Смотреть подробнее →
          </Link>
        ) : null}
      </div>
    </article>
  );
}
