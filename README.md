# Kutuzova.Tech / Anastasia Kutuzova

Персональный сайт Анастасии Кутузовой: психология, картины и сайты.

## Стек

- Next.js (App Router) + TypeScript + Tailwind CSS
- Статический экспорт для GitHub Pages (`output: "export"`)

## Команды

```bash
npm install
npm run dev
npm run build          # статическая сборка → папка out/
npm run preview:static # локальный просмотр out/
```

## GitHub Pages

Подробности: `STATIC_EXPORT.md`

Кратко:

1. Создайте репозиторий на GitHub.
2. Запушьте код.
3. Settings → Pages → Source: **GitHub Actions**.
4. Workflow `.github/workflows/deploy-pages.yml` соберёт `out/` и задеплоит.

## Важно про форму аудита

`/audit` на GitHub Pages **не сможет** отправлять заявки через `/api/audit`
(серверный API на Pages недоступен). Нужен внешний сервис/webhook.
