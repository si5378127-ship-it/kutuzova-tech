import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";

type StubPageProps = {
  title: string;
  description?: string;
  body: string;
  children?: React.ReactNode;
};

export function StubPage({ title, description, body, children }: StubPageProps) {
  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading title={title} description={description} as="h1" />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-muted">
          {body}
        </p>
        {children}
        <div className="mt-10 flex flex-wrap gap-4">
          <CTAButton href="/audit" event="audit_cta_click" eventPayload={{ location: "stub_page" }}>
            Проверить мой сайт
          </CTAButton>
          <Link
            href="/"
            className="focus-ring inline-flex items-center text-sm text-gold-muted underline-offset-4 hover:underline"
          >
            На главную
          </Link>
        </div>
      </div>
    </section>
  );
}
