/**
 * Abstract PDF mockup without personal client data.
 */
export function AuditPdfMockup() {
  return (
    <div className="surface-card soft-shadow overflow-hidden p-4 sm:p-5" aria-hidden="true">
      <div className="rounded-xl border border-border bg-bg p-5">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold-muted">
              Kutuzova.Tech
            </p>
            <p className="mt-2 text-sm font-medium text-ink">
              Персональный аудит сайта
            </p>
          </div>
          <div className="h-8 w-8 rounded-full border border-border bg-green-deep" />
        </div>

        <div className="mt-5 space-y-4">
          <div className="h-2.5 w-2/3 rounded bg-ink/10" />
          <div className="h-2 w-full rounded bg-ink/8" />
          <div className="h-2 w-[92%] rounded bg-ink/8" />
          <div className="h-2 w-[80%] rounded bg-ink/8" />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {["Сильные стороны", "Приоритеты", "Барьеры", "Рекомендации"].map(
            (label) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-bg-alt p-3"
              >
                <p className="text-[11px] text-gold-muted">{label}</p>
                <div className="mt-3 space-y-2">
                  <div className="h-1.5 w-full rounded bg-ink/10" />
                  <div className="h-1.5 w-4/5 rounded bg-ink/10" />
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mt-6 rounded-lg border border-dashed border-border-strong p-3">
          <p className="text-[11px] text-ink-dim">
            Абстрактный пример структуры заключения · без данных клиентов
          </p>
        </div>
      </div>
    </div>
  );
}
