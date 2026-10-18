"use client";

import { useEffect, useState } from "react";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { YandexMetrika } from "@/components/YandexMetrika";
import {
  ANALYTICS_CONSENT_EVENT,
  hasAnalyticsConsent,
} from "@/lib/cookie-consent";

/**
 * Site-wide analytics shell: consent banner + single Metrika counter after accept.
 */
export function Analytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(hasAnalyticsConsent());

    const onChange = () => setAllowed(hasAnalyticsConsent());
    window.addEventListener(ANALYTICS_CONSENT_EVENT, onChange);
    return () => window.removeEventListener(ANALYTICS_CONSENT_EVENT, onChange);
  }, []);

  return (
    <>
      {allowed ? <YandexMetrika /> : null}
      <CookieConsentBanner />
    </>
  );
}
