import { products } from "@/config/products";

export const blogCategories = [
  "Сайт психолога",
  "Ошибки сайта",
  "Тексты для сайта",
  "Продвижение психолога",
  "SEO",
  "ИИ для частной практики",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt?: string;
  readingTime?: string;
  coverImage?: string;
  /** Vertical image optimized for Pinterest pins */
  pinterestImage?: string;
  href: string;
};

/**
 * Content slots for future articles.
 * Do not invent published posts until real content is ready.
 */
export const articles: Article[] = [];

export const pageStubs = {
  aiAssistants: {
    title: "Персональные ИИ-помощники",
    description:
      "Помощники, настроенные под специализацию, аудиторию и задачи частной практики.",
    body: "Раздел в разработке. Здесь появится подробное описание ИИ-копирайтера психолога и ИИ-помощника частной практики.",
    products: [products.aiCopywriter, products.aiAssistant],
  },
  websites: {
    title: "Создание и доработка сайтов",
    description:
      "Сайты для психологов и помогающих специалистов с вниманием к структуре, текстам и пути клиента.",
    body: "Раздел в разработке. Здесь появится описание подхода к созданию и доработке сайтов.",
  },
  cases: {
    title: "Кейсы",
    description:
      "Примеры работы со структурой, текстами и поисковой понятностью сайтов.",
    body: "Раздел в разработке. Кейсы будут добавляться по мере подтверждённых материалов.",
  },
  about: {
    title: "Обо мне",
    description:
      "Анастасия Кутузова — психолог и создатель цифровых систем для помогающих специалистов.",
    body: "Меня зовут Анастасия Кутузова. Я психолог и создаю сайты и цифровые инструменты для помогающих специалистов.",
  },
  blog: {
    title: "Полезные материалы",
    description:
      "Статьи о сайтах психологов, текстах, продвижении и ИИ для частной практики.",
    body: "Материалы появятся здесь. Контентная архитектура подготовлена под статьи из Pinterest и органического поиска.",
    categories: blogCategories,
  },
  privacy: {
    title: "Политика конфиденциальности",
    description: "Политика обработки персональных данных.",
    body: "Шаблон страницы. Юридический текст и реквизиты будут добавлены после предоставления данных владельцем сайта.",
  },
  offer: {
    title: "Публичная оферта",
    description: "Условия оказания услуг.",
    body: "Место под оферту. Текст и реквизиты будут добавлены без вымышленных данных.",
  },
} as const;
