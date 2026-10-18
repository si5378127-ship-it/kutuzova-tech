import type { Metadata } from "next";
import { PrivacyConsentControls } from "@/components/PrivacyConsentControls";
import { StubPage } from "@/components/StubPage";
import { pageStubs } from "@/content/pages";
import { YANDEX_METRIKA_ID } from "@/config/metrika";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

const page = pageStubs.privacy;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <StubPage title={page.title} description={page.description} body={page.body}>
      <div className="mt-8 max-w-2xl space-y-6 text-sm leading-relaxed text-ink-dim">
        <section className="space-y-3">
          <h2 className="font-serif text-xl text-ink">Персональные данные</h2>
          <p>
            Полный юридический текст политики (реквизиты оператора, цели и сроки
            обработки, права субъекта) будет опубликован после подготовки
            документов. До этого на сайте собираются только данные, которые вы
            сами отправляете через формы (например, заявку на аудит сайта), и
            технические сведения, необходимые для работы сайта.
          </p>
          <p>
            Имена, телефоны, адреса электронной почты, сообщения в Telegram,
            тексты психологических запросов и иное содержание обращений{" "}
            <strong className="font-medium text-ink">не передаются</strong> в
            системы веб-аналитики.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-ink">Яндекс Метрика</h2>
          <p>
            На сайте {siteConfig.url.replace(/^https?:\/\//, "")} может
            использоваться сервис веб-аналитики Яндекс Метрика (счётчик{" "}
            {YANDEX_METRIKA_ID}). Он помогает оценивать посещаемость и поведение
            на страницах (просмотры, источники переходов, достижение целей).
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Скрипт Метрики загружается{" "}
              <strong className="font-medium text-ink">только после</strong>{" "}
              вашего согласия на аналитические cookies.
            </li>
            <li>
              Вебвизор, карта кликов и аналитика форм в коде счётчика{" "}
              <strong className="font-medium text-ink">отключены</strong>.
            </li>
            <li>
              Оператор сервиса — ООО «ЯНДЕКС». Политика Яндекса:{" "}
              <a
                href="https://yandex.ru/legal/confidential/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-muted underline-offset-4 hover:underline"
              >
                yandex.ru/legal/confidential
              </a>
              .
            </li>
          </ul>
          <p>
            Вы можете в любой момент отозвать согласие на аналитику ниже. После
            отказа счётчик на новых загрузках страницы не подключается. Уже
            установленные cookies Метрики можно дополнительно удалить в
            настройках браузера.
          </p>
        </section>

        <PrivacyConsentControls />
      </div>
    </StubPage>
  );
}
