import { cn } from "@/lib/seo";

type AuditStepProps = {
  number: string;
  title: string;
  text?: string;
  tone?: "light" | "dark";
};

export function AuditStep({
  number,
  title,
  text,
  tone = "light",
}: AuditStepProps) {
  const isDark = tone === "dark";

  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm",
            isDark
              ? "border border-border-on-dark bg-green text-gold-soft"
              : "border border-border bg-bg-soft text-gold",
          )}
        >
          {number}
        </div>
      </div>
      <div className="pb-2 pt-1.5">
        <h3
          className={cn(
            "text-base font-medium",
            isDark ? "text-cream" : "text-ink",
          )}
        >
          {title}
        </h3>
        {text ? (
          <p
            className={cn(
              "mt-2 text-sm leading-relaxed",
              isDark ? "text-cream-muted" : "text-ink-muted",
            )}
          >
            {text}
          </p>
        ) : null}
      </div>
    </div>
  );
}
