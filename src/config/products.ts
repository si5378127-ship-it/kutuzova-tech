export type ProductStatus = "available" | "hypothesis" | "custom";

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number | null;
  priceLabel: string;
  currency: "RUB";
  description: string;
  status: ProductStatus;
  cta: {
    label: string;
    href: string;
  };
  note?: string;
  /** Human-readable delivery estimate shown on product pages */
  deliveryTime?: string;
  format?: string;
};

export const products = {
  audit: {
    id: "audit",
    name: "Персональный аудит сайта психолога",
    slug: "audit",
    price: 1490,
    priceLabel: "1 490 ₽",
    currency: "RUB",
    description:
      "Персональное письменное заключение по сайту: что работает, где теряется интерес или доверие, и что изменить в первую очередь.",
    status: "available",
    format: "Персональный письменный аудит",
    deliveryTime: "3–5 рабочих дней",
    cta: {
      label: "Хочу аудит моего сайта",
      href: "/audit",
    },
    note: "Стартовая цена для первых 5 персональных аудитов.",
  },
  aiCopywriter: {
    id: "ai-copywriter",
    name: "ИИ-копирайтер психолога",
    slug: "ai-copywriter",
    price: 9900,
    priceLabel: "от 9 900 ₽",
    currency: "RUB",
    description:
      "Персональный помощник для текстов сайта, первого экрана, услуг, «Обо мне», статей и CTA.",
    status: "hypothesis",
    cta: {
      label: "Посмотреть ИИ-помощников",
      href: "/ai-assistants",
    },
    note: "Тестовая продуктовая гипотеза.",
  },
  aiAssistant: {
    id: "ai-assistant",
    name: "ИИ-помощник частной практики",
    slug: "ai-assistant",
    price: 14900,
    priceLabel: "от 14 900 ₽",
    currency: "RUB",
    description:
      "Персональный помощник под практику: тексты, контент, путь клиента, Pinterest и маркетинговые задачи.",
    status: "hypothesis",
    cta: {
      label: "Подробнее об ИИ-помощниках",
      href: "/ai-assistants",
    },
    note: "Тестовая продуктовая гипотеза.",
  },
  website: {
    id: "website",
    name: "Доработка или создание сайта",
    slug: "websites",
    price: null,
    priceLabel: "Индивидуально",
    currency: "RUB",
    description:
      "Доработка или создание сайта для психологов и помогающих специалистов с учётом структуры, текстов, пути клиента и поисковой понятности.",
    status: "custom",
    cta: {
      label: "Обсудить сайт",
      href: "/sites",
    },
  },
} as const satisfies Record<string, Product>;

export type ProductKey = keyof typeof products;

export function getProduct(key: ProductKey): Product {
  return products[key];
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
}
