"use client";

import Link from "next/link";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import { cn } from "@/lib/seo";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  className?: string;
  event?: AnalyticsEvent;
  eventPayload?: Record<string, string | number | boolean | undefined>;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const variants = {
  primary:
    "cta-primary bg-[#173126] text-[#F7F2E9] hover:bg-[#23382D] hover:text-[#F7F2E9] focus-visible:text-[#F7F2E9] active:text-[#F7F2E9] visited:text-[#F7F2E9] shadow-[0_8px_24px_rgba(23,49,38,0.18)]",
  secondary:
    "bg-transparent text-ink border border-border-strong hover:border-gold hover:text-green-deep",
  ghost:
    "bg-transparent text-gold-muted hover:text-green-deep underline-offset-4 hover:underline px-0",
  onDark:
    "bg-gold text-green-deep hover:bg-gold-soft shadow-[0_8px_24px_rgba(0,0,0,0.18)]",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  event,
  eventPayload,
  onClick,
  type,
  disabled,
}: CTAButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-ring disabled:opacity-60 disabled:pointer-events-none",
    variants[variant],
    className,
  );

  const handleClick = () => {
    if (event) track(event, eventPayload);
    onClick?.();
  };

  if (type === "submit" || type === "button") {
    return (
      <button type={type} className={classes} onClick={handleClick} disabled={disabled}>
        {children}
      </button>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick}>
      {children}
    </Link>
  );
}
