import Link from "next/link";
import { cn } from "@/lib/seo";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/** Calm text transition — not a heavy CTA button */
export function TextLink({ href, children, className }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex text-base text-ink-muted transition-colors hover:text-green-deep",
        className,
      )}
    >
      {children}
    </Link>
  );
}
