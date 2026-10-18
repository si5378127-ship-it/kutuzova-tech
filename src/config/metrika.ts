/**
 * Single Yandex Metrika counter for coach-kytyzova.ru.
 * Do not add a second counter or inject tag.js from another place.
 */
export const YANDEX_METRIKA_ID = 113666342;

export const METRIKA_SCRIPT_SRC = "https://mc.yandex.ru/metrika/tag.js";

/**
 * Init options for static-export App Router (SPA-style client navigations).
 * - defer: true — no automatic pageview on init; we send `hit` ourselves
 * - webvisor / clickmap: off until explicitly requested
 * Form analytics is controlled in the Metrika cabinet, not via init.
 */
export const metrikaInitParams = {
  defer: true,
  clickmap: false,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: false,
  ecommerce: false,
} as const;
