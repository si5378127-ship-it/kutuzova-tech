import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/psychology",
  "/psychology/boundaries",
  "/art",
  "/sites",
  "/about",
  "/contact",
  "/audit",
  "/ai-assistants",
  "/blog",
  "/cases",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency:
      path === "/" || path === "/audit" || path === "/sites" ? "weekly" : "monthly",
    priority:
      path === "/" ? 1 : path === "/sites" || path === "/audit" ? 0.9 : 0.6,
  }));
}
