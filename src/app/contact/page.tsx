import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { TextLink } from "@/components/TextLink";
import { personalContacts, socialChannels } from "@/content/contacts";
import { cn, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Контакты",
  description:
    "Написать Анастасии Кутузовой в Telegram или MAX и подписаться на каналы и социальные сети.",
  path: "/contact",
});

const primaryCtaClass =
  "cta-primary focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#173126] px-6 py-3 text-sm font-medium text-[#F7F2E9] shadow-[0_8px_24px_rgba(23,49,38,0.18)] transition-colors duration-200 hover:bg-[#23382D] hover:text-[#F7F2E9] sm:w-auto";

const secondaryCtaClass =
  "focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-border-strong bg-transparent px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-gold hover:text-green-deep sm:w-auto";

const channelLinkClass =
  "focus-ring flex min-h-11 items-center rounded-xl border border-border bg-bg px-4 py-3 text-sm text-ink transition-colors hover:border-gold hover:text-green-deep";

export default function ContactPage() {
  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          as="h1"
          title="Контакты"
          description="Можно написать лично или заглянуть в каналы — публикации, практики и видео."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <aside className="panel-light p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-muted">
              Личная связь
            </p>
            <h2 className="heading-serif mt-4 text-2xl text-ink sm:text-3xl">
              Написать Анастасии
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              Для вопросов по консультациям и личных сообщений — напишите в
              Telegram или MAX.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {personalContacts.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    index === 0 ? primaryCtaClass : secondaryCtaClass,
                  )}
                  aria-label={`${link.label} (откроется в новой вкладке)`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </aside>

          <aside className="panel-light p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-muted">
              Публикации и видео
            </p>
            <h2 className="heading-serif mt-4 text-2xl text-ink sm:text-3xl">
              Мои каналы и социальные сети
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              Подписывайтесь, чтобы следить за материалами, практиками и новыми
              роликами.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {socialChannels.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={channelLinkClass}
                    aria-label={`${link.label} (откроется в новой вкладке)`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-10 flex flex-wrap gap-6">
          <TextLink href="/">На главную →</TextLink>
          <TextLink href="/audit">Аудит сайта →</TextLink>
        </div>
      </div>
    </section>
  );
}
