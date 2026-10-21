"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Legacy /lab/ route from the laboratories PR preview.
 * Redirects to the unified portfolio on /sites/.
 */
export default function LabRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/sites/#portfolio");
  }, [router]);

  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container-page">
        <p className="text-sm text-ink-muted">
          Лаборатория переехала в единое портфолио.{" "}
          <Link
            href="/sites/#portfolio"
            className="text-gold-muted underline-offset-4 hover:underline"
          >
            Перейти к разделу «Сайты»
          </Link>
        </p>
      </div>
    </section>
  );
}
