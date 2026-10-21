import type { PortfolioCategory, PortfolioProject } from "./types";

/** Filter labels — display order on /sites/. */
export const portfolioCategories: readonly PortfolioCategory[] = [
  { id: "sites", label: "Сайты" },
  { id: "ai-assistants", label: "ИИ-помощники" },
  { id: "digital-tools", label: "Цифровые инструменты" },
] as const;

/**
 * Unified portfolio registry for /sites/.
 * Full ТверьНефтеРегион case lives in sites-cases — do not rewrite it here.
 */
export const portfolioProjects: readonly PortfolioProject[] = [
  {
    id: "tvernefteregion",
    slug: "tvernefteregion",
    title: "ТверьНефтеРегион",
    category: "sites",
    industry: "Корпоративный сайт · поставки топлива",
    summary:
      "Путь заявки: короткая форма готовит текст запроса, клиент сам отправляет его в MAX и может сразу начать диалог.",
    imageSrc: "/images/cases/tvernefteregion/new-site-home.webp",
    imageAlt: "Главная страница сайта ТверьНефтеРегион",
    detailsHref: "/sites/tvernefteregion/",
  },
  {
    id: "filimonova",
    slug: "filimonova",
    title: "Елена Филимонова",
    category: "sites",
    industry: "Клиентский сайт · визажист",
    summary:
      "Сайт визажиста Елены Филимоновой: услуги, портфолио работ и запись на макияж.",
    imageSrc: "/images/portfolio/filimonova-home.webp",
    imageAlt: "Главная страница сайта визажиста Елены Филимоновой",
    projectUrl: "https://vizazhist-filimonova.ru/",
  },
  {
    id: "kutuzova-tech",
    slug: "kutuzova-tech",
    title: "Kutuzova.Tech",
    category: "sites",
    industry: "Собственный проект · сайты и цифровые решения",
    summary:
      "Лендинг о создании сайтов и цифровых решений: путь клиента от первого касания до записи.",
    imageSrc: "/images/portfolio/kutuzova-tech-home.webp",
    imageAlt:
      "Первый экран лендинга Kutuzova.Tech — сайты и цифровые решения",
    projectUrl: "https://kutuzovatech.lovable.app/",
  },
  {
    id: "magic-art",
    slug: "magic-art",
    title: "Magic Art",
    category: "sites",
    industry: "Авторский лендинг · интегративное рисование",
    summary:
      "Лендинг об интегративном рисовании Magic Art: как устроена практика и как записаться на сессию.",
    imageSrc: "/images/portfolio/magic-art-home.webp",
    imageAlt: "Главная страница лендинга Magic Art",
    projectUrl: "https://magic-art-kutuzova.vercel.app/",
  },
  {
    id: "moi-finansy",
    slug: "moi-finansy",
    title: "Мои финансы",
    category: "digital-tools",
    industry: "Цифровой инструмент · учёт бюджета",
    summary:
      "Веб-приложение для учёта доходов, расходов, счетов и переводов с историей операций и экспортом данных.",
    imageSrc: "/images/portfolio/moi-finansy-home.webp",
    imageAlt: "Главный экран веб-приложения «Мои финансы»",
    projectUrl: "https://si5378127-ship-it.github.io/kalkulyator-semji/",
  },
] as const;
