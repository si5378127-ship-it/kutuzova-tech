import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { withBasePath } from "@/lib/paths";

const defaultOgImage = "/og-default.png"; // TODO: add real OG image

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  // Metadata absolute URLs use the configured site origin (not github.io basePath).
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

/** Root-relative asset path that respects NEXT_PUBLIC_BASE_PATH on GitHub Pages. */
export function publicAsset(path: string): string {
  return withBasePath(path);
}

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: absoluteUrl(defaultOgImage),
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(defaultOgImage)],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
