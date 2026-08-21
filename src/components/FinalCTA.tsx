import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";

type FinalCTAProps = {
  title: string;
  text: string;
  priceLine?: string;
  cta: { label: string; href: string };
};

export function FinalCTA({ title, text, priceLine, cta }: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-bg-alt py-20 sm:py-24">
      <div className="container-narrow relative text-center">
        <SectionHeading title={title} description={text} align="center" />
        {priceLine ? (
          <p className="mt-6 text-base text-gold sm:text-lg">{priceLine}</p>
        ) : null}
        <div className="mt-8 flex justify-center">
          <CTAButton
            href={cta.href}
            event="audit_cta_click"
            eventPayload={{ location: "final_cta" }}
          >
            {cta.label}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
