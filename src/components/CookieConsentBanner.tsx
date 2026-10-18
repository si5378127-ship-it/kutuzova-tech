"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ANALYTICS_CONSENT_EVENT,
  readAnalyticsConsent,
  writeAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/cookie-consent";

/**
 * Bottom notice: analytics cookies stay off until the visitor accepts.
 */
export function CookieConsentBanner() {
  const [consent, setConsent] = useState<AnalyticsConsent | null | "loading">(
    "loading",
  );

  useEffect(() => {
    setConsent(readAnalyticsConsent());

    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<AnalyticsConsent | null>).detail;
      setConsent(detail ?? null);
    };

    window.addEventListener(ANALYTICS_CONSENT_EVENT, onChange);
    return () => window.removeEventListener(ANALYTICS_CONSENT_EVENT, onChange);
  }, []);

  if (consent === "loading" || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-bg-elevated/95 p-4 shadow-[0_-8px_32px_rgba(41,36,31,0.12)] backdrop-blur-sm sm:p-5"
    >
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p
            id="cookie-consent-title"
            className="text-sm font-semibold text-ink"
          >
            Файлы cookie и аналитика
          </p>
          <p
            id="cookie-consent-desc"
            className="mt-2 text-sm leading-relaxed text-ink-muted"
          >
            Мы используем Яндекс Метрику, чтобы понимать, как посетители
            пользуются сайтом. Счётчик загружается только после вашего согласия.
            Подробнее — в{" "}
            <Link
              href="/privacy/"
              className="text-gold-muted underline-offset-4 hover:underline"
            >
              политике конфиденциальности
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-wrap gap-3">
          <button
            type="button"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-border-strong bg-transparent px-5 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-green-deep"
            onClick={() => writeAnalyticsConsent("declined")}
          >
            Только необходимые
          </button>
          <button
            type="button"
            className="focus-ring cta-primary inline-flex min-h-11 items-center justify-center rounded-full bg-[#173126] px-5 text-sm font-medium text-[#F7F2E9] shadow-[0_8px_24px_rgba(23,49,38,0.18)] transition-colors hover:bg-[#23382D]"
            onClick={() => writeAnalyticsConsent("accepted")}
          >
            Принять аналитику
          </button>
        </div>
      </div>
    </div>
  );
}
