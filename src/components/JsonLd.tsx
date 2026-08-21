import { siteConfig } from "@/config/site";
import { products } from "@/config/products";
import { absoluteUrl } from "@/lib/seo";

type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.role,
    },
    // TODO: add email when provided
    // TODO: add sameAs social profiles when provided
    areaServed: "RU",
    availableLanguage: ["ru"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "ru-RU",
    description: siteConfig.description,
  };
}

export function auditServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: products.audit.name,
    description: products.audit.description,
    provider: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    url: absoluteUrl("/audit"),
    offers: {
      "@type": "Offer",
      price: products.audit.price,
      priceCurrency: products.audit.currency,
      availability: "https://schema.org/LimitedAvailability",
      description: products.audit.note,
      // delivery lead time for the service
      ...(products.audit.deliveryTime
        ? {
            deliveryLeadTime: {
              "@type": "QuantitativeValue",
              minValue: 3,
              maxValue: 5,
              unitCode: "d",
              description: products.audit.deliveryTime,
            },
          }
        : {}),
    },
  };
}
