export type AnalyticsEvent =
  | "audit_cta_click"
  | "audit_form_start"
  | "audit_form_submit"
  | "ai_copywriter_interest"
  | "ai_assistant_interest"
  | "website_project_interest"
  | "case_view"
  | "pinterest_landing_visit"
  | "magic_art_booking_click";

type EventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    /**
     * Yandex Metrika API, if a counter is already present on the page.
     * We never inject a second counter from this helper.
     */
    ym?: (
      counterId: number,
      method: string,
      target?: string,
      params?: EventPayload,
    ) => void;
  }
}

/**
 * Unified analytics layer.
 * If Yandex Metrika is already loaded (`window.ym`) and
 * NEXT_PUBLIC_YANDEX_METRIKA_ID is set, goals are forwarded via reachGoal.
 * No second Metrika counter is added here.
 */
export function track(event: AnalyticsEvent, payload?: EventPayload): void {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", event, payload ?? {});
  }

  const counterId = Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || "");
  if (
    Number.isFinite(counterId) &&
    counterId > 0 &&
    typeof window.ym === "function"
  ) {
    try {
      window.ym(counterId, "reachGoal", event, payload);
    } catch {
      // Ignore provider errors — never break UX for analytics.
    }
  }
}
