import Link from "next/link";
import { cn } from "@/lib/seo";

type DirectionCardProps = {
  number: string;
  title: string;
  lead: string;
  text: string;
  cta: { label: string; href: string };
  className?: string;
};

export function DirectionCard({
  number,
  title,
  lead,
  text,
  cta,
  className,
}: DirectionCardProps) {
  return (
    <article
      className={cn(
        "surface-card-soft soft-shadow flex h-full flex-col p-6 sm:p-8",
        className,
      )}
    >
      <p className="text-xs tracking-[0.2em] text-gold">{number}</p>
      <h3 className="heading-serif mt-4 text-2xl text-ink sm:text-3xl">{title}</h3>
      <p className="mt-4 text-base font-medium leading-snug text-ink">{lead}</p>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
        {text}
      </p>
      <div className="mt-auto pt-8">
        <Link
          href={cta.href}
          className="focus-ring text-sm text-gold-muted underline-offset-4 transition-colors hover:text-green-deep hover:underline"
        >
          {cta.label}
        </Link>
      </div>
    </article>
  );
}
