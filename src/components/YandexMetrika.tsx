"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  METRIKA_SCRIPT_SRC,
  YANDEX_METRIKA_ID,
  metrikaInitParams,
} from "@/config/metrika";

/** Module-level guards so React Strict Mode / remount after re-consent cannot double-init. */
let scriptRequested = false;
let counterInitialized = false;

function ensureYmStubAndScript(): void {
  type YmFn = ((...args: unknown[]) => void) & {
    a?: IArguments[];
    l?: number;
  };

  const w = window as Window & { ym?: YmFn };
  if (typeof w.ym !== "function") {
    const ym: YmFn = function () {
      // Official Metrika stub queues call arguments until tag.js loads.
      // eslint-disable-next-line prefer-rest-params
      (ym.a = ym.a || []).push(arguments);
    };
    ym.l = Date.now();
    w.ym = ym;
  }

  if (scriptRequested) return;
  scriptRequested = true;

  const alreadyInDom = Array.from(document.scripts).some(
    (s) => s.src === METRIKA_SCRIPT_SRC,
  );
  if (alreadyInDom) return;

  const script = document.createElement("script");
  script.src = METRIKA_SCRIPT_SRC;
  script.async = true;
  const first = document.getElementsByTagName("script")[0];
  first?.parentNode?.insertBefore(script, first);
}

function sendHit(url: string): void {
  if (typeof window.ym !== "function") return;
  try {
    window.ym(YANDEX_METRIKA_ID, "hit", url, {
      title: document.title,
    });
  } catch {
    // Never break the page for analytics.
  }
}

/**
 * Loads Yandex Metrika once (after consent) and reports SPA navigations via `hit`.
 * Must not be mounted until the visitor accepts analytics cookies.
 */
export function YandexMetrika() {
  const pathname = usePathname();
  const lastHitUrl = useRef<string | null>(null);

  useEffect(() => {
    ensureYmStubAndScript();

    if (!counterInitialized) {
      counterInitialized = true;
      try {
        window.ym?.(YANDEX_METRIKA_ID, "init", metrikaInitParams);
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    if (lastHitUrl.current === url) return;
    lastHitUrl.current = url;
    sendHit(url);
  }, [pathname]);

  return null;
}
