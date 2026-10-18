"use client";

import { useEffect, useState } from "react";
import {
  ANALYTICS_CONSENT_EVENT,
  clearAnalyticsConsent,
  readAnalyticsConsent,
  writeAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/cookie-consent";

function labelFor(consent: AnalyticsConsent | null): string {
  if (consent === "accepted") return "Аналитика включена";
  if (consent === "declined") return "Аналитика отключена";
  return "Выбор ещё не сделан";
}

/**
 * Lets visitors change analytics cookie consent from the privacy page.
 */
export function PrivacyConsentControls() {
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);

  useEffect(() => {
    setConsent(readAnalyticsConsent());
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<AnalyticsConsent | null>).detail;
      setConsent(detail ?? null);
    };
    window.addEventListener(ANALYTICS_CONSENT_EVENT, onChange);
    return () => window.removeEventListener(ANALYTICS_CONSENT_EVENT, onChange);
  }, []);

  return (
    <div className="mt-8 rounded-2xl border border-border bg-bg-soft/60 p-5 sm:p-6">
      <p className="text-sm font-semibold text-ink">Управление аналитикой</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        Текущий статус:{" "}
        <span className="text-ink">{labelFor(consent)}</span>. Счётчик Яндекс
        Метрики загружается только при согласии на аналитические cookies.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          className="focus-ring cta-primary inline-flex min-h-11 items-center justify-center rounded-full bg-[#173126] px-5 text-sm font-medium text-[#F7F2E9] transition-colors hover:bg-[#23382D]"
          onClick={() => writeAnalyticsConsent("accepted")}
        >
          Включить аналитику
        </button>
        <button
          type="button"
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-border-strong bg-transparent px-5 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-green-deep"
          onClick={() => writeAnalyticsConsent("declined")}
        >
          Отключить аналитику
        </button>
        <button
          type="button"
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-medium text-ink-muted underline-offset-4 hover:text-ink hover:underline"
          onClick={() => clearAnalyticsConsent()}
        >
          Спросить снова
        </button>
      </div>
    </div>
  );
}
