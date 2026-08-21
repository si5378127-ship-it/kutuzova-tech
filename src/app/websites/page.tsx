"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Static-export friendly redirect for the legacy /websites route.
 * next/navigation redirect() is not reliable with output: "export".
 */
export default function WebsitesRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/sites/");
  }, [router]);

  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container-page">
        <p className="text-sm text-ink-muted">
          Страница переехала.{" "}
          <Link
            href="/sites/"
            className="text-gold-muted underline-offset-4 hover:underline"
          >
            Перейти к разделу «Сайты»
          </Link>
        </p>
      </div>
    </section>
  );
}
