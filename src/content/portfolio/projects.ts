import type { PortfolioCategory, PortfolioProject } from "./types";

/** Filter labels — display order on /sites/. */
export const portfolioCategories: readonly PortfolioCategory[] = [
  { id: "sites-landings", label: "Сайты и лендинги" },
  { id: "quizzes", label: "Квизы и интерактивные решения" },
  { id: "apps-tools", label: "Приложения и инструменты" },
  { id: "ai-assistants", label: "ИИ-помощники" },
] as const;

const indexingPrepared =
  "Проект добавлен в Яндекс для индексации. Позиции и поисковый трафик здесь не указываем.";

/**
 * Unified portfolio registry for /sites/.
 * Full ТверьНефтеРегион case lives in sites-cases — do not rewrite it here.
 */
export const portfolioProjects: readonly PortfolioProject[] = [
  {
    id: "tvernefteregion",
    slug: "tvernefteregion",
    title: "ТверьНефтеРегион",
    category: "sites-landings",
    format: "Корпоративный сайт",
    task: "Изменить путь заявки на поставку топлива: от ожидания письма к диалогу с менеджером в MAX.",
    features: [
      "Короткая форма из трёх шагов",
      "Готовый текст запроса для клиента",
      "Переход в MAX, сообщение отправляет сам покупатель",
    ],
    imageSrc: "/images/cases/tvernefteregion/new-site-home.webp",
    imageAlt: "Главная страница сайта ТверьНефтеРегион",
    detailsHref: "/sites/tvernefteregion/",
    indexingNote: indexingPrepared,
  },
  {
    id: "filimonova",
    slug: "filimonova",
    title: "Елена Филимонова",
    category: "sites-landings",
    format: "Клиентский сайт визажиста",
    task: "Показать услуги и работы визажиста и дать понятный путь к записи на макияж.",
    features: [
      "Услуги и стоимость",
      "Портфолио работ",
      "Онлайн-запись",
    ],
    imageSrc: "/images/portfolio/filimonova-home.webp",
    imageAlt: "Главная страница сайта визажиста Елены Филимоновой",
    projectUrl: "https://vizazhist-filimonova.ru/",
    indexingNote: indexingPrepared,
  },
  {
    id: "kutuzova-tech",
    slug: "kutuzova-tech",
    title: "Kutuzova.Tech",
    category: "sites-landings",
    format: "Лендинг с чат-ботом",
    task: "Объяснить форматы сайтов и цифровых решений и помочь посетителю выбрать следующий шаг.",
    features: [
      "Структура от первого касания до записи",
      "Чат-бот для подбора решения",
      "Блоки об услугах и демо",
    ],
    imageSrc: "/images/portfolio/kutuzova-tech-home.webp",
    imageAlt:
      "Первый экран лендинга Kutuzova.Tech — сайты, ИИ и digital-решения",
    projectUrl: "https://kutuzovatech.vercel.app/",
    indexingNote: indexingPrepared,
  },
  {
    id: "magic-art",
    slug: "magic-art",
    title: "Magic Art",
    category: "sites-landings",
    format: "Авторский лендинг",
    task: "Рассказать об интегративном рисовании Magic Art и провести к записи на практику.",
    features: [
      "Описание метода и хода сессии",
      "Блоки о запросах и формате",
      "Призыв к записи",
    ],
    imageSrc: "/images/portfolio/magic-art-home.webp",
    imageAlt: "Главная страница лендинга Magic Art",
    projectUrl: "https://magic-art-kutuzova.vercel.app/",
    indexingNote: indexingPrepared,
  },
  {
    id: "vibe-coder",
    slug: "vibe-coder",
    title: "Вайб-кодер",
    category: "sites-landings",
    format: "Лендинг-портфолио",
    task: "Показать подход к сайтам, интерфейсам и digital-проектам через выразительную подачу.",
    features: [
      "Блоки о подходе и услугах",
      "Визуальный ритм страницы",
      "Контакты и призыв к действию",
    ],
    imageSrc: "/images/portfolio/vibe-coder-home.webp",
    imageAlt: "Первый экран лендинга Vibe Coder",
    projectUrl: "https://si5378127-ship-it.github.io/vibe-coder-kutuzova/",
    indexingNote: indexingPrepared,
  },
  {
    id: "granicy-i-opora",
    slug: "granicy-i-opora",
    title: "Границы и опора",
    category: "sites-landings",
    format: "Лендинг мастер-класса",
    task: "Представить онлайн-мастер-класс по личным границам и дать путь к записи.",
    features: [
      "Описание формата мастер-класса",
      "Блоки узнавания и содержания",
      "Запись на мастер-класс",
    ],
    imageSrc: "/images/portfolio/granicy-i-opora-home.webp",
    imageAlt:
      "Страница мастер-класса «Мои личные границы» на лендинге «Границы и опора»",
    projectUrl: "https://granicy-i-opora.lovable.app/masterclass",
    indexingNote: indexingPrepared,
  },
  {
    id: "elena-quiz",
    slug: "elena-quiz",
    title: "Квиз Елены",
    category: "quizzes",
    format: "Интерактивный квиз",
    task: "За несколько вопросов подобрать макияж под настроение, повод и предпочтения.",
    features: [
      "6 коротких вопросов",
      "Подбор образа без регистрации",
      "Без запроса номера телефона",
    ],
    imageSrc: "/images/portfolio/elena-quiz-home.webp",
    imageAlt: "Стартовый экран квиза визажиста Елены Филимоновой",
    projectUrl: "https://elena-makeup-quiz.vercel.app/",
    indexingNote: indexingPrepared,
  },
  {
    id: "tvoy-krasnyy",
    slug: "tvoy-krasnyy",
    title: "Твой красный",
    category: "quizzes",
    format: "Интерактивное бьюти-приложение",
    task: "Вовлечь посетителя в подбор оттенка красной помады: попробовать образ на своём фото или продолжить без загрузки снимка.",
    features: [
      "Загрузка фотографии или селфи",
      "Выбор из пяти оттенков красной помады",
      "Предпросмотр образа",
      "Можно продолжить без фотографии",
    ],
    imageSrc: "/images/portfolio/tvoy-krasnyy-home.webp",
    imageAlt: "Стартовый экран интерактивного приложения «Твой красный»",
    projectUrl: "https://tvoy-krasnyy.vercel.app/",
    indexingNote: indexingPrepared,
  },
  {
    id: "gde-ya",
    slug: "gde-ya",
    title: "Квиз «Где я?»",
    category: "quizzes",
    format: "Интерактивная психологическая практика",
    task: "Помочь остановиться, обратить внимание на себя и зафиксировать важные мысли.",
    features: [
      "Пошаговый сценарий практики",
      "Ответы остаются в браузере",
      "Персональная карточка в конце",
    ],
    imageSrc: "/images/portfolio/gde-ya-home.webp",
    imageAlt:
      "Стартовый экран практики «А где в своей жизни сейчас Я?»",
    projectUrl: "https://coach-kytyzova.ru/gde-ya/",
    indexingNote: indexingPrepared,
  },
  {
    id: "moi-finansy",
    slug: "moi-finansy",
    title: "Мои финансы",
    category: "apps-tools",
    format: "Веб-приложение",
    task: "Дать удобный инструмент учёта доходов, расходов, счетов и переводов.",
    features: [
      "Доходы, расходы и переводы",
      "Счета, категории и история",
      "Экспорт и импорт данных",
    ],
    imageSrc: "/images/portfolio/moi-finansy-home.webp",
    imageAlt: "Главный экран веб-приложения «Мои финансы»",
    projectUrl: "https://si5378127-ship-it.github.io/kalkulyator-semji/",
    indexingNote: indexingPrepared,
  },
] as const;
