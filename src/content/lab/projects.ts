import type { LabCategory, LabProject } from "./types";

/** Filter labels — order is display order on /lab/. */
export const labCategories: readonly LabCategory[] = [
  { id: "sites-landings", label: "Сайты и лендинги" },
  { id: "bots-ai", label: "Боты и ИИ" },
  { id: "apps", label: "Приложения" },
  { id: "quizzes-calculators", label: "Квизы и калькуляторы" },
] as const;

/**
 * Living registry of lab projects.
 * Add a new entry here to show it on /lab/ — no page rewrite needed.
 * Include `detail` only when a dedicated /lab/[slug]/ page should exist.
 */
export const labProjects: readonly LabProject[] = [
  {
    id: "kutuzova-tech",
    slug: "kutuzova-tech",
    title: "Kutuzova.Tech",
    typeLabel: "Лендинг",
    category: "sites-landings",
    summary:
      "Лендинг о сайтах и ИИ-ассистентах для психологов: путь клиента от первого касания до записи.",
    projectUrl: "https://kutuzovatech.lovable.app/",
    imageSrc: "/images/lab/kutuzova-tech-home.webp",
    imageAlt:
      "Первый экран лендинга Kutuzova.Tech — сайты и ИИ для психологов",
    statusLabel: "Демонстрационный проект",
    detail: {
      task: {
        title: "Задача проекта",
        paragraphs: [
          "Показать, как может выглядеть понятный офер для психологов и коучей: сайт как система доверия, а не набор красивых блоков.",
          "Собрать структуру, которая объясняет проблему с соцсетями, предлагает путь решения и три формата работы — от визитки до связки «сайт + ИИ».",
        ],
      },
      features: {
        title: "Что реализовано",
        items: [
          "Герой с оффером для психологов и коучей",
          "Блоки узнавания проблемы и причин",
          "Три тарифных формата с разным уровнем системы",
          "Акцент на понимание клиента «изнутри»",
          "CTA в мессенджеры и почту",
        ],
      },
      notes: {
        title: "О статусе",
        paragraphs: [
          "Это демонстрационный лендинг направления «сайты и ИИ». Он может дорабатываться. Актуальные услуги и клиентские кейсы — в разделе «Сайты» на этом сайте.",
        ],
      },
    },
  },
  {
    id: "granicy-i-opora",
    slug: "granicy-i-opora",
    title: "Границы и опора",
    typeLabel: "Лендинг",
    category: "sites-landings",
    summary:
      "Психологический лендинг о границах и внутренней опоре: мастер-класс и индивидуальный формат работы.",
    projectUrl: "https://granicy-i-opora.lovable.app/",
    imageSrc: "/images/lab/granicy-i-opora-home.webp",
    imageAlt:
      "Первый экран лендинга «Границы и опора» — психология и нейрографика",
    statusLabel: "Экспериментальный проект",
    detail: {
      task: {
        title: "Задача проекта",
        paragraphs: [
          "Собрать бережный лендинг для женской аудитории: узнавание состояния, два формата работы и понятный путь к записи в мессенджеры.",
          "Проверить, как сочетаются психологический тон, офер мастер-класса и индивидуальной сессии на одной странице.",
        ],
      },
      features: {
        title: "Что реализовано",
        items: [
          "Герой с акцентом на внутренний покой",
          "Блок узнавания ситуаций",
          "Два продукта: мастер-класс и индивидуальная сессия",
          "Шаги работы и блок «Обо мне»",
          "CTA в Telegram, Instagram, WhatsApp и VK",
        ],
      },
      notes: {
        title: "О статусе",
        paragraphs: [
          "Это экспериментальный лендинг психологического направления. Он может меняться. Актуальные психологические форматы на основном сайте — в разделе «Психология».",
        ],
      },
    },
  },
] as const;
