"use client";

import { products } from "@/config/products";

type PaymentStepProps = {
  /** Reserved for future paid=true after provider webhook confirmation */
  paymentConfirmed?: boolean;
};

/**
 * Isolated payment step for the audit funnel.
 * TODO: connect payment provider
 * Never treat an application as paid until the provider confirms it.
 */
export function PaymentStep({ paymentConfirmed = false }: PaymentStepProps) {
  const product = products.audit;

  return (
    <div
      id="payment-step"
      className="surface-card soft-shadow mt-6 border-border-strong p-6 sm:p-8"
      aria-labelledby="payment-step-title"
    >
      <p className="text-xs uppercase tracking-[0.18em] text-gold-muted">
        Следующий шаг
      </p>
      <h3 id="payment-step-title" className="heading-serif mt-3 text-3xl text-ink">
        Оплата аудита
      </h3>

      <dl className="mt-6 space-y-4 text-sm">
        <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
          <dt className="text-ink-muted">Продукт</dt>
          <dd className="text-right text-ink">{product.name}</dd>
        </div>
        <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
          <dt className="text-ink-muted">Стоимость</dt>
          <dd className="text-right text-lg text-gold">{product.priceLabel}</dd>
        </div>
        <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
          <dt className="text-ink-muted">Срок</dt>
          <dd className="text-right text-ink">{product.deliveryTime}</dd>
        </div>
        <div className="flex items-start justify-between gap-4">
          <dt className="text-ink-muted">Статус оплаты</dt>
          <dd className="text-right text-ink">
            {paymentConfirmed
              ? "Оплата подтверждена"
              : "Ожидает подключения оплаты"}
          </dd>
        </div>
      </dl>

      <div className="mt-8">
        {/* TODO: connect payment provider — replace disabled placeholder with real checkout button */}
        <button
          type="button"
          disabled
          className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-full border border-border bg-bg-soft px-6 py-3 text-sm font-medium text-ink-dim sm:w-auto"
          aria-disabled="true"
        >
          Оплатить {product.priceLabel}
        </button>
        <p className="mt-3 text-sm leading-relaxed text-ink-dim">
          Кнопка оплаты появится после подключения платёжного сервиса. Заявка не
          считается оплаченной без подтверждения платёжного провайдера.
        </p>
      </div>
    </div>
  );
}
