export type ContactLink = {
  label: string;
  href: string;
  /** Short label for compact footer / tight layouts */
  shortLabel?: string;
};

/** Personal messaging — “Написать Анастасии” */
export const personalContacts = [
  {
    label: "Написать в Telegram",
    shortLabel: "Telegram",
    href: "https://t.me/kutuzova_mind",
  },
  {
    label: "Написать в MAX",
    shortLabel: "MAX",
    href: "https://max.ru/u/f9LHodD0cOJXFI_6cWfyEs3x4ASuuwLPDlNCx9mbhKsv1WS8o6t6UI-AuCk",
  },
] as const satisfies readonly ContactLink[];

/** Public channels and social profiles */
export const socialChannels = [
  {
    label: "Telegram-канал",
    shortLabel: "Telegram",
    href: "https://t.me/psyholog_kutuzova",
  },
  {
    label: "MAX-канал",
    shortLabel: "MAX",
    href: "https://max.ru/id690102035976_biz",
  },
  {
    label: "ВКонтакте — личная страница",
    shortLabel: "ВК · личная",
    href: "https://vk.ru/kutuzova_mind",
  },
  {
    label: "ВКонтакте — сообщество",
    shortLabel: "ВК · сообщество",
    href: "https://vk.ru/psychologist_kutuzova",
  },
  {
    label: "YouTube",
    shortLabel: "YouTube",
    href: "https://www.youtube.com/@psyholog_kutuzova",
  },
  {
    label: "Instagram",
    shortLabel: "Instagram",
    href: "https://www.instagram.com/kutuzova_anastacia/",
  },
  {
    label: "TikTok",
    shortLabel: "TikTok",
    href: "https://www.tiktok.com/@anastasiianeiro?lang=ru-RU",
  },
] as const satisfies readonly ContactLink[];

/** Compact footer set — main channels only (no personal DMs, no secondary VK) */
export const footerSocialLinks: readonly ContactLink[] = [
  {
    label: "Telegram-канал",
    shortLabel: "Telegram",
    href: "https://t.me/psyholog_kutuzova",
  },
  {
    label: "MAX-канал",
    shortLabel: "MAX",
    href: "https://max.ru/id690102035976_biz",
  },
  {
    label: "ВКонтакте",
    shortLabel: "ВКонтакте",
    href: "https://vk.ru/psychologist_kutuzova",
  },
  {
    label: "YouTube",
    shortLabel: "YouTube",
    href: "https://www.youtube.com/@psyholog_kutuzova",
  },
  {
    label: "Instagram",
    shortLabel: "Instagram",
    href: "https://www.instagram.com/kutuzova_anastacia/",
  },
  {
    label: "TikTok",
    shortLabel: "TikTok",
    href: "https://www.tiktok.com/@anastasiianeiro?lang=ru-RU",
  },
];
