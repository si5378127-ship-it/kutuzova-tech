type ProblemCardProps = {
  title: string;
  index?: number;
};

export function ProblemCard({ title, index }: ProblemCardProps) {
  return (
    <article className="surface-card-soft soft-shadow p-5 transition-colors duration-300 hover:border-border-strong sm:p-6">
      {typeof index === "number" ? (
        <p className="mb-4 text-xs tracking-[0.18em] text-gold">
          {String(index).padStart(2, "0")}
        </p>
      ) : null}
      <h3 className="text-base font-medium leading-snug text-ink sm:text-lg">
        {title}
      </h3>
    </article>
  );
}
