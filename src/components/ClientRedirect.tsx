"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type ClientRedirectProps = {
  href: string;
  message: string;
  linkLabel: string;
};

/**
 * Static-export friendly client redirect (same pattern as /websites/).
 */
export function ClientRedirect({
  href,
  message,
  linkLabel,
}: ClientRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    router.replace(href);
  }, [href, router]);

  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container-page">
        <p className="text-sm text-ink-muted">
          {message}{" "}
          <Link
            href={href}
            className="text-gold-muted underline-offset-4 hover:underline"
          >
            {linkLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}
