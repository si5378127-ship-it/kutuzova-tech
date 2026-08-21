import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/content/pages";
import { cn } from "@/lib/seo";

type ArticleCardProps = {
  article: Article;
  className?: string;
};

export function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <article className={cn("surface-card soft-shadow overflow-hidden", className)}>
      <div className="relative aspect-[4/5] bg-bg-soft">
        {article.coverImage || article.pinterestImage ? (
          <Image
            src={article.pinterestImage || article.coverImage || ""}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center text-sm text-ink-dim">
            Pinterest-friendly cover
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-gold-muted">
          {article.category}
        </p>
        <h3 className="mt-3 text-lg font-medium leading-snug text-ink">
          <Link href={article.href} className="focus-ring hover:text-gold">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {article.excerpt}
        </p>
      </div>
    </article>
  );
}
