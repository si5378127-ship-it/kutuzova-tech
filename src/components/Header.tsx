"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/content/navigation";
import { cn } from "@/lib/seo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-[#F5F0E8]/95 backdrop-blur-md transition-shadow duration-300",
        scrolled || open
          ? "border-border shadow-[0_1px_0_rgba(41,36,31,0.06)]"
          : "border-border",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link
          href="/"
          className="focus-ring shrink-0 text-sm font-semibold tracking-[0.14em] text-ink"
          aria-label={`${siteConfig.name} — на главную`}
        >
          {siteConfig.brand}
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Основная навигация"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton href="/contact" className="px-5 py-2.5" variant="primary">
            Связаться
          </CTAButton>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-full border border-border p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-border bg-[#F5F0E8] lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          className="container-page flex flex-col gap-1 py-4"
          aria-label="Мобильная навигация"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg px-3 py-3 text-base text-ink-muted hover:bg-bg-soft hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 px-3 pb-2">
            <CTAButton
              href="/contact"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Связаться
            </CTAButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
