import { cn } from "@/lib/seo";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const Heading = as;
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-xs font-medium uppercase tracking-[0.22em]",
            isDark ? "text-gold-soft" : "text-gold-muted",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "heading-serif text-balance text-3xl sm:text-4xl",
          isDark ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            isDark ? "text-cream-muted" : "text-ink-muted",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
