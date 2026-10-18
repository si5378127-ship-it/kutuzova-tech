export type AnalyticsConsent = "accepted" | "declined";

export const ANALYTICS_CONSENT_KEY = "analytics_consent";
export const ANALYTICS_CONSENT_EVENT = "analytics-consent-change";

export function readAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    if (value === "accepted" || value === "declined") return value;
  } catch {
    // Private mode / blocked storage — treat as no choice yet.
  }
  return null;
}

export function hasAnalyticsConsent(): boolean {
  return readAnalyticsConsent() === "accepted";
}

export function writeAnalyticsConsent(value: AnalyticsConsent): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
  } catch {
    // Ignore write failures; consent still applies for this session via event.
  }
  window.dispatchEvent(
    new CustomEvent(ANALYTICS_CONSENT_EVENT, { detail: value }),
  );
}

export function clearAnalyticsConsent(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(ANALYTICS_CONSENT_KEY);
  } catch {
    // ignore
  }
  window.dispatchEvent(
    new CustomEvent(ANALYTICS_CONSENT_EVENT, { detail: null }),
  );
}
