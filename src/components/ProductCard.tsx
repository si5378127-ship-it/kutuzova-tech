import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { cn } from "@/lib/seo";
import type { AnalyticsEvent } from "@/lib/analytics";

type ProductCardProps = {
  title: string;
  description?: string;
  items?: readonly string[];
  price?: string;
  note?: string;
  cta?: { label: string; href: string };
  event?: AnalyticsEvent;
  featured?: boolean;
  className?: string;
};

export function ProductCard({
  title,
  description,
  items,
  price,
  note,
  cta,
  event,
  featured = false,
  className,
}: ProductCardProps) {
  return (
    <article
      className={cn(
        "surface-card soft-shadow flex h-full flex-col p-6 sm:p-7",
        featured && "border-gold/35 bg-bg-alt",
        className,
      )}
    >
      <h3 className="heading-serif text-2xl text-ink sm:text-3xl">{title}</h3>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
          {description}
        </p>
      ) : null}
      {items && items.length > 0 ? (
        <ul className="mt-5 space-y-2.5 text-sm text-ink-muted">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-auto pt-6">
        {price ? <p className="text-xl font-medium text-gold">{price}</p> : null}
        {note ? <p className="mt-2 text-sm text-ink-dim">{note}</p> : null}
        {cta ? (
          <div className="mt-5">
            <CTAButton href={cta.href} variant={featured ? "primary" : "secondary"} event={event}>
              {cta.label}
            </CTAButton>
          </div>
        ) : null}
      </div>
    </article>
  );
}

type RouteCardVariant = "neutral" | "accent" | "contrast";

export function RouteCard({
  title,
  text,
  note,
  price,
  cta,
  event,
  variant = "neutral",
}: {
  title: string;
  text: string;
  note?: string;
  price?: string;
  cta?: { label: string; href: string };
  event?: AnalyticsEvent;
  variant?: RouteCardVariant;
}) {
  const isContrast = variant === "contrast";
  const isAccent = variant === "accent";

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[1.25rem] border p-6 soft-shadow",
        isContrast && "border-green-deep/20 bg-bg-alt",
        isAccent && "border-gold/35 bg-bg-alt",
        !isContrast && !isAccent && "surface-card-soft",
      )}
    >
      <h3 className="text-xl font-medium text-ink">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted">{text}</p>
      {note ? <p className="mt-4 text-sm text-ink-dim">{note}</p> : null}
      {price ? <p className="mt-4 text-lg text-gold">{price}</p> : null}
      {cta ? (
        <div className="mt-auto pt-6">
          {event ? (
            <CTAButton
              href={cta.href}
              variant={isContrast ? "primary" : "secondary"}
              event={event}
            >
              {cta.label}
            </CTAButton>
          ) : (
            <Link
              href={cta.href}
              className="focus-ring text-sm text-gold-muted underline-offset-4 hover:underline"
            >
              {cta.label}
            </Link>
          )}
        </div>
      ) : null}
    </article>
  );
}
