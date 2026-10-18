import { YANDEX_METRIKA_ID } from "@/config/metrika";

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

/** Keys that must never be forwarded to Metrika (PII / free-text personal content). */
const BLOCKED_PAYLOAD_KEYS = new Set([
  "name",
  "fullname",
  "firstname",
  "lastname",
  "fio",
  "phone",
  "tel",
  "mobile",
  "email",
  "telegram",
  "whatsapp",
  "username",
  "contact",
  "message",
  "text",
  "comment",
  "concern",
  "request",
  "query",
  "psychology_request",
  "psychological_request",
]);

function sanitizePayload(
  payload?: EventPayload,
): EventPayload | undefined {
  if (!payload) return undefined;

  const clean: EventPayload = {};
  for (const [key, value] of Object.entries(payload)) {
    if (value === undefined) continue;
    if (BLOCKED_PAYLOAD_KEYS.has(key.toLowerCase())) continue;
    clean[key] = typeof value === "string" ? value.slice(0, 120) : value;
  }

  return Object.keys(clean).length > 0 ? clean : undefined;
}

/**
 * Unified analytics layer.
 * Forwards goals via `ym(113666342, 'reachGoal', …)` only when the counter
 * is already loaded (after cookie consent). Does not inject tag.js itself.
 */
export function track(event: AnalyticsEvent, payload?: EventPayload): void {
  if (typeof window === "undefined") return;

  const safePayload = sanitizePayload(payload);

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", event, safePayload ?? {});
  }

  if (typeof window.ym !== "function") return;

  try {
    if (safePayload) {
      window.ym(YANDEX_METRIKA_ID, "reachGoal", event, safePayload);
    } else {
      window.ym(YANDEX_METRIKA_ID, "reachGoal", event);
    }
  } catch {
    // Ignore provider errors — never break UX for analytics.
  }
}
