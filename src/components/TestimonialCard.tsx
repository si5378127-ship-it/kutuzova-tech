/**
 * Prepared for real testimonials.
 * Do not render on public pages until verified reviews exist.
 */
export type TestimonialCardProps = {
  quote: string;
  author: string;
  role?: string;
};

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <figure className="surface-card soft-shadow p-6">
      <blockquote className="text-base leading-relaxed text-ink-muted">
        “{quote}”
      </blockquote>
      <figcaption className="mt-5">
        <p className="text-sm font-medium text-ink">{author}</p>
        {role ? <p className="mt-1 text-sm text-ink-dim">{role}</p> : null}
      </figcaption>
    </figure>
  );
}
