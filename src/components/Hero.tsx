import { CTAButton } from "@/components/CTAButton";
import { cn } from "@/lib/seo";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: React.ReactNode;
  className?: string;
  titleAs?: "h1" | "h2";
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
  className,
  titleAs = "h1",
}: HeroProps) {
  const Title = titleAs;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-bg pt-10 pb-16 sm:pt-14 sm:pb-20",
        className,
      )}
    >
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div>
          {eyebrow ? (
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-gold-muted">
              {eyebrow}
            </p>
          ) : null}
          <Title className="heading-serif text-balance text-[2rem] leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]">
            {title}
          </Title>
          {subtitle ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {subtitle}
            </p>
          ) : null}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {primaryCta ? (
                <CTAButton
                  href={primaryCta.href}
                  event="audit_cta_click"
                  eventPayload={{ location: "hero" }}
                >
                  {primaryCta.label}
                </CTAButton>
              ) : null}
              {secondaryCta ? (
                <CTAButton
                  href={secondaryCta.href}
                  variant="ghost"
                  event="website_project_interest"
                  eventPayload={{ location: "hero" }}
                >
                  {secondaryCta.label}
                </CTAButton>
              ) : null}
            </div>
          )}
        </div>
        {children ? (
          <div className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-[360px]">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
