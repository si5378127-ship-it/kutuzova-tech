"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function LabSlugRedirectClient() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/sites/#portfolio");
  }, [router]);

  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container-page">
        <p className="text-sm text-ink-muted">
          Проект переехал в единое портфолио.{" "}
          <Link
            href="/sites/#portfolio"
            className="text-gold-muted underline-offset-4 hover:underline"
          >
            Смотреть портфолио
          </Link>
        </p>
      </div>
    </section>
  );
}
