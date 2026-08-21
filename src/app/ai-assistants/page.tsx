import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { StubPage } from "@/components/StubPage";
import { pageStubs } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

const page = pageStubs.aiAssistants;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/ai-assistants",
});

export default function AiAssistantsPage() {
  return (
    <StubPage title={page.title} description={page.description} body={page.body}>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {page.products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            description={product.description}
            price={product.priceLabel}
            note={product.note}
            event={
              product.id === "ai-copywriter"
                ? "ai_copywriter_interest"
                : "ai_assistant_interest"
            }
          />
        ))}
      </div>
    </StubPage>
  );
}
