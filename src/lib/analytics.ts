export type AnalyticsEvent =
  | "audit_cta_click"
  | "audit_form_start"
  | "audit_form_submit"
  | "ai_copywriter_interest"
  | "ai_assistant_interest"
  | "website_project_interest"
  | "case_view"
  | "pinterest_landing_visit";

type EventPayload = Record<string, string | number | boolean | undefined>;

/**
 * Unified analytics layer.
 * TODO: connect Google Analytics / Yandex Metrika / other provider when IDs are available.
 */
export function track(event: AnalyticsEvent, payload?: EventPayload): void {
  if (typeof window === "undefined") return;

  // Dev-friendly fallback until a real provider is connected
  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", event, payload ?? {});
  }

  // TODO: forward to analytics provider
  // window.gtag?.("event", event, payload);
  // window.ym?.(COUNTER_ID, "reachGoal", event, payload);
}
