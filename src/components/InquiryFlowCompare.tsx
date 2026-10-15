import { cn } from "@/lib/seo";
import type { InquiryFlowCompare as InquiryFlowCompareType } from "@/content/sites-cases/types";

type InquiryFlowCompareProps = {
  flow: InquiryFlowCompareType;
  className?: string;
};

/**
 * Optional “how it was / how it became” for the inquiry path.
 * Only render when a case provides `inquiryFlow`.
 */
export function InquiryFlowCompare({
  flow,
  className,
}: InquiryFlowCompareProps) {
  return (
    <div className={cn(className)}>
      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-muted">
          Путь заявки
        </p>
        <h2 className="heading-serif mt-4 text-3xl text-ink sm:text-4xl">
          {flow.title}
        </h2>
        {flow.description ? (
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {flow.description}
          </p>
        ) : null}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <FlowColumn side={flow.before} tone="before" />
        <FlowColumn side={flow.after} tone="after" />
      </div>

      <aside className="surface-card-soft mt-6 p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
          {flow.sendDisclaimer}
        </p>
      </aside>
    </div>
  );
}

function FlowColumn({
  side,
  tone,
}: {
  side: InquiryFlowCompareType["before"];
  tone: "before" | "after";
}) {
  const isAfter = tone === "after";

  return (
    <article
      className={cn(
        "rounded-[1.35rem] border p-6 sm:p-8",
        isAfter
          ? "border-[rgba(181,138,75,0.35)] bg-bg-alt shadow-[0_14px_40px_rgba(41,36,31,0.05)]"
          : "border-border bg-bg",
      )}
    >
      <p
        className={cn(
          "text-xs font-medium uppercase tracking-[0.18em]",
          isAfter ? "text-gold" : "text-gold-muted",
        )}
      >
        {side.title}
      </p>
      <ol className="mt-6 space-y-4">
        {side.steps.map((step, index) => (
          <li key={step} className="flex gap-3">
            <span
              className={cn(
                "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-medium",
                isAfter
                  ? "bg-[#173126] text-[#F7F2E9]"
                  : "bg-bg-soft text-ink-muted",
              )}
              aria-hidden
            >
              {index + 1}
            </span>
            <p className="pt-0.5 text-sm leading-relaxed text-ink-muted sm:text-base">
              {step}
            </p>
          </li>
        ))}
      </ol>
    </article>
  );
}
