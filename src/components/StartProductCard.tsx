import Link from "next/link";
import { cn } from "@/lib/seo";

export type StartProduct = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  ctaLabel?: string;
  direction?: string;
};

type StartProductCardProps = {
  product: StartProduct;
  className?: string;
};

/**
 * Universal product teaser for the brand home.
 * Add new products via content config without changing section layout.
 */
export function StartProductCard({ product, className }: StartProductCardProps) {
  return (
    <article
      className={cn(
        "surface-card soft-shadow flex h-full flex-col p-6",
        className,
      )}
    >
      {/* Optional direction tag can be added later via product.eyebrow */}
      <h3 className="heading-serif text-2xl text-ink">{product.title}</h3>
      {product.subtitle ? (
        <p className="mt-2 text-sm text-gold-muted">{product.subtitle}</p>
      ) : null}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {product.description}
      </p>
      <Link
        href={product.href}
        className="focus-ring mt-6 inline-flex text-sm text-gold-muted underline-offset-4 hover:text-green-deep hover:underline"
      >
        {product.ctaLabel ?? "Подробнее →"}
      </Link>
    </article>
  );
}
