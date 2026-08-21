export const mainNav = [
  { label: "Психология", href: "/psychology" },
  { label: "Картины", href: "/art" },
  { label: "Сайты", href: "/sites" },
  { label: "Обо мне", href: "/about" },
] as const;

export const footerNav = [...mainNav] as const;

export const legalNav = [
  { label: "Политика конфиденциальности", href: "/privacy" },
  // TODO: enable when contacts page content is ready — currently a soft stub
  { label: "Контакты", href: "/contact" },
] as const;

/** Soft links used on brand home for direction jumps */
export const brandDirections = [
  { label: "Психология и коучинг", href: "/psychology" },
  { label: "Картины", href: "/art" },
  { label: "Сайты", href: "/sites" },
] as const;
