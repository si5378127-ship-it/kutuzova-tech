import { tvernefteregionCase } from "@/content/sites-cases";
import type { PortfolioCategory, PortfolioProject } from "./types";

/** Filter labels — display order on /sites/ portfolio. */
export const portfolioCategories: readonly PortfolioCategory[] = [
  { id: "sites", label: "Сайты" },
  { id: "ai-assistants", label: "ИИ-помощники" },
  { id: "digital-tools", label: "Цифровые инструменты" },
] as const;

/**
 * Published portfolio cards.
 * Do not invent metrics, testimonials, or unverified links.
 * Full case pages stay in sites-cases; only TNR has one for now.
 */
export const portfolioProjects: readonly PortfolioProject[] = [
  {
    id: tvernefteregionCase.id,
    slug: tvernefteregionCase.slug,
    title: tvernefteregionCase.card.title,
    category: "sites",
    industry: tvernefteregionCase.card.industry,
    summary: tvernefteregionCase.card.summary,
    imageSrc: tvernefteregionCase.card.imageSrc!,
    imageAlt: tvernefteregionCase.card.imageAlt!,
    detailsHref: `/sites/${tvernefteregionCase.slug}/`,
    projectUrl: tvernefteregionCase.projectUrl,
  },
  {
    id: "filimonova",
    slug: "filimonova",
    title: "Елена Филимонова",
    category: "sites",
    industry: "Клиентский сайт · визаж",
    summary:
      "Сайт визажиста Елены Филимоновой — макияж в Твери: знакомство с услугами и путь к записи.",
    imageSrc: "/images/portfolio/filimonova-home.webp",
    imageAlt: "Главная страница сайта визажиста Елены Филимоновой",
    projectUrl: "https://vizazhist-filimonova.ru/",
  },
  {
    id: "kutuzova-tech",
    slug: "kutuzova-tech",
    title: "Kutuzova.Tech",
    category: "sites",
    industry: "Собственный проект · лендинг",
    summary:
      "Лендинг о сайтах и ИИ-ассистентах для психологов: путь клиента от первого касания до записи.",
    imageSrc: "/images/portfolio/kutuzova-tech-home.webp",
    imageAlt:
      "Первый экран лендинга Kutuzova.Tech — сайты и ИИ для психологов",
    projectUrl: "https://kutuzovatech.lovable.app/",
  },
  {
    id: "magic-art",
    slug: "magic-art",
    title: "Magic Art",
    category: "sites",
    industry: "Авторский лендинг",
    summary:
      "Авторский лендинг об интегративном рисовании Magic Art.",
    imageSrc: "/images/portfolio/magic-art-home.webp",
    imageAlt: "Первый экран лендинга Magic Art — интегративное рисование",
    projectUrl: "https://magic-art-kutuzova.vercel.app/",
  },
  {
    id: "moi-finansy",
    slug: "moi-finansy",
    title: "Мои финансы",
    category: "digital-tools",
    industry: "Цифровой инструмент · учёт бюджета",
    summary:
      "Инструмент для учёта доходов, расходов, счетов и переводов с историей операций и возможностью экспорта данных.",
    imageSrc: "/images/portfolio/moi-finansy-home.webp",
    imageAlt: "Главный экран веб-приложения «Мои финансы»",
    projectUrl: "https://si5378127-ship-it.github.io/kalkulyator-semji/",
  },
] as const;
