import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerSocialLinks } from "@/content/contacts";
import { footerNav, legalNav } from "@/content/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-bg-alt">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-semibold tracking-[0.08em] text-ink">
              {siteConfig.shortBrand}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-gold-muted">
              Навигация
            </p>
            <ul className="space-y-1">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring flex min-h-11 items-center text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-gold-muted">
              Соцсети
            </p>
            <ul className="space-y-1">
              {footerSocialLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex min-h-11 items-center text-sm text-ink-muted transition-colors hover:text-ink"
                    aria-label={`${item.label} (откроется в новой вкладке)`}
                  >
                    {item.shortLabel ?? item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-gold-muted">
              Документы
            </p>
            <ul className="space-y-1">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring flex min-h-11 items-center text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gold-line my-10" />

        <p className="text-sm text-ink-dim">
          © {year} {siteConfig.shortBrand}
        </p>
      </div>
    </footer>
  );
}
