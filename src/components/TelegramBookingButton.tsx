"use client";

import { track, type AnalyticsEvent } from "@/lib/analytics";
import { cn } from "@/lib/seo";

type TelegramBookingButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  event?: AnalyticsEvent;
  eventPayload?: Record<string, string | number | boolean | undefined>;
  location?: string;
};

const variants = {
  primary:
    "cta-primary bg-[#173126] text-[#F7F2E9] hover:bg-[#23382D] hover:text-[#F7F2E9] shadow-[0_8px_24px_rgba(23,49,38,0.18)]",
  secondary:
    "bg-transparent text-ink border border-border-strong hover:border-gold hover:text-green-deep",
};

/**
 * External booking CTA (Telegram). Tracks a Metrika-ready goal via `track`
 * without injecting a second analytics counter.
 */
export function TelegramBookingButton({
  href,
  children,
  className,
  variant = "primary",
  event = "magic_art_booking_click",
  eventPayload,
  location,
}: TelegramBookingButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200",
        variants[variant],
        className,
      )}
      onClick={() =>
        track(event, {
          location,
          destination: "telegram",
          ...eventPayload,
        })
      }
      aria-label={`${typeof children === "string" ? children : "Записаться на сессию"} (откроется в новой вкладке)`}
    >
      {children}
    </a>
  );
}
