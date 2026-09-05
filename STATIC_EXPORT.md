# Static export / GitHub Pages

Конфиг: `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`.

После `npm run build` статическая версия лежит в папке **`out/`**.

## Что работает на GitHub Pages

Все основные HTML-маршруты и изображения из `public/`, в том числе:

- `/`, `/sites/`, `/audit/`, `/psychology/`, `/art/`, `/about/`, `/contact/`
- `/images/anastasia-kutuzova-hero.png`
- `/images/anastasia-about.jpg`

## Что НЕ работает на GitHub Pages

### `POST /api/audit` — `src/app/api/audit/route.ts`

Файл **сохранён** в проекте (не удалён). При static export он **не попадает** в `out/`.

Форма на `/audit` по-прежнему вызывает `/api/audit` в браузере → на Pages запрос упадёт.

Варианты позже (не подключены):

- Formspree / Getform / Basin
- webhook Make / Zapier
- отдельный backend

### Оплата аудита

По-прежнему не подключена (и не зависит от Pages).

## Base path

Production is the custom domain `https://coach-kytyzova.ru/` (site root). Leave `NEXT_PUBLIC_BASE_PATH` empty:

```bash
npm run build
```

Only a project site `https://USER.github.io/REPO/` needs a prefix:

```bash
NEXT_PUBLIC_BASE_PATH=/REPO npm run build
```
