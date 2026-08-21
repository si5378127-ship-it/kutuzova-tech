import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  JsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...buildMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
  }),
  title: {
    default: `${siteConfig.name} — психология, картины и сайты`,
    template: `%s | ${siteConfig.name}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${cormorant.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
