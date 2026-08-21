import type { Metadata } from "next";
import { ArtWorkPlaceholder } from "@/components/ArtWorkPlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { TextLink } from "@/components/TextLink";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Картины",
  description:
    "Авторские картины Анастасии Кутузовой, созданные с помощью коучингового метода.",
  path: "/art",
});

export default function ArtPage() {
  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          as="h1"
          title="Картины"
          description="Раздел в подготовке. Здесь появится галерея работ и возможность узнать больше о творческом процессе."
        />
        <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {/* TODO: replace with real painting photographs */}
          <ArtWorkPlaceholder label="Работа 01" />
          <ArtWorkPlaceholder label="Работа 02" />
          <ArtWorkPlaceholder label="Работа 03" />
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-dim">
          {/* TODO: enable “Научиться создавать свои” offer when ready */}
          Фотографии работ и подробности появятся позже.
        </p>
        <div className="mt-10 flex flex-wrap gap-6">
          <TextLink href="/">На главную →</TextLink>
          <TextLink href="/psychology">Психология →</TextLink>
        </div>
      </div>
    </section>
  );
}
