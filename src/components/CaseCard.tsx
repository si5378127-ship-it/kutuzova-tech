"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/seo";

export type CaseCardProps = {
  title: string;
  industry?: string;
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

  return (
    <article
      className={cn("surface-card soft-shadow overflow-hidden", className)}
      onClick={() => track("case_view", { title })}
    >
      <div className="relative aspect-[16/10] bg-bg-soft">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-ink-dim">
            Место для скриншота проекта
          </div>
        )}
      </div>
      <div className="p-6">
        {industry ? (
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gold-muted">
            {industry}
          </p>
        ) : null}
        <h3 className="heading-serif text-2xl text-ink">{title}</h3>
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
        ) : (
          <p className="mt-3 text-sm text-ink-dim">
            Подтверждённые данные и материалы будут добавлены позже.
          </p>
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
