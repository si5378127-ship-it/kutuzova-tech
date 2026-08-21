"use client";

import { useState } from "react";
import { CheckoutCTA } from "@/components/CheckoutCTA";
import { PaymentStep } from "@/components/PaymentStep";
import { products } from "@/config/products";
import { auditContent } from "@/content/audit";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/seo";

type FormState = {
  name: string;
  email: string;
  website: string;
  specialization: string;
  clients: string;
  mainService: string;
  concern: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  website: "",
  specialization: "",
  clients: "",
  mainService: "",
  concern: "",
  consent: false,
};

function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    return Boolean(url.hostname.includes("."));
  } catch {
    return false;
  }
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validate(state: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!state.name.trim()) errors.name = "Укажите имя";
  if (!state.email.trim()) errors.email = "Укажите email";
  else if (!isValidEmail(state.email.trim())) {
    errors.email = "Проверьте формат email";
  }
  if (!state.website.trim()) errors.website = "Укажите ссылку на сайт";
  else if (!isValidUrl(state.website.trim())) {
    errors.website = "Проверьте ссылку на сайт";
  }
  if (!state.specialization.trim()) {
    errors.specialization = "Укажите специализацию";
  }
  if (!state.clients.trim()) {
    errors.clients = "Кратко опишите клиентов или запросы";
  }
  if (!state.mainService.trim()) {
    errors.mainService = "Укажите, что должно продаваться через сайт";
  }
  if (!state.concern.trim()) {
    errors.concern = "Опишите, что больше всего беспокоит";
  }
  if (!state.consent) {
    errors.consent = "Нужно согласие на обработку данных";
  }

  return errors;
}

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
};

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-ink">
        {label}
        {required ? <span className="text-gold-soft"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus-ring";

export function AuditForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const copy = auditContent.form;
  const product = products.audit;

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    if (!started) {
      setStarted(true);
      track("audit_form_start");
    }
    setState((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setSubmitError(null);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(state);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.name.trim(),
          email: state.email.trim(),
          website: state.website.trim(),
          specialization: state.specialization.trim(),
          clients: state.clients.trim(),
          mainService: state.mainService.trim(),
          concern: state.concern.trim(),
          consent: state.consent,
          paid: false,
        }),
      });

      const result = (await response.json()) as {
        ok: boolean;
        error?: string;
        paid?: boolean;
      };

      if (!response.ok || !result.ok) {
        setSubmitError(result.error || "Не удалось отправить заявку. Попробуйте ещё раз.");
        setSubmitting(false);
        return;
      }

      track("audit_form_submit", {
        specialization: state.specialization.slice(0, 80),
      });

      setSubmitted(true);
    } catch {
      setSubmitError("Не удалось отправить заявку. Проверьте соединение и попробуйте ещё раз.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="space-y-6">
        <div
          className="surface-card soft-shadow p-6 sm:p-8"
          role="status"
          aria-live="polite"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-gold-muted">
            Заявка
          </p>
          <h3 className="heading-serif mt-3 text-3xl text-ink">
            {copy.successTitle}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
            {copy.successText}
          </p>
          <p className="mt-4 text-sm text-ink-dim">
            Оплата пока не подтверждена. Работа начнётся только после оплаты.
          </p>
        </div>
        <PaymentStep paymentConfirmed={false} />
      </div>
    );
  }

  return (
    <form
      id="audit-form"
      onSubmit={onSubmit}
      className="surface-card soft-shadow space-y-5 p-6 sm:p-8"
      noValidate
    >
      <div>
        <h2 className="heading-serif text-3xl text-ink">{copy.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {copy.subtitle}
        </p>
        <p className="mt-3 text-sm text-gold-soft">
          {product.priceLabel} · {product.deliveryTime} · {product.note}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Имя" required error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={inputClass}
            value={state.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>

        <Field id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            className={inputClass}
            value={state.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
      </div>

      <Field id="website" label="Ссылка на сайт" required error={errors.website}>
        <input
          id="website"
          name="website"
          inputMode="url"
          placeholder="https://..."
          className={inputClass}
          value={state.website}
          onChange={(e) => update("website", e.target.value)}
          aria-invalid={Boolean(errors.website)}
          aria-describedby={errors.website ? "website-error" : undefined}
        />
      </Field>

      <Field
        id="specialization"
        label="Специализация"
        required
        error={errors.specialization}
      >
        <input
          id="specialization"
          name="specialization"
          className={inputClass}
          value={state.specialization}
          onChange={(e) => update("specialization", e.target.value)}
          aria-invalid={Boolean(errors.specialization)}
        />
      </Field>

      <Field
        id="clients"
        label="С какими клиентами или запросами вы работаете?"
        required
        error={errors.clients}
      >
        <textarea
          id="clients"
          name="clients"
          rows={3}
          className={cn(inputClass, "resize-y")}
          value={state.clients}
          onChange={(e) => update("clients", e.target.value)}
          aria-invalid={Boolean(errors.clients)}
        />
      </Field>

      <Field
        id="mainService"
        label="Что продаёт ваш сайт? Какая основная услуга?"
        required
        error={errors.mainService}
      >
        <textarea
          id="mainService"
          name="mainService"
          rows={2}
          className={cn(inputClass, "resize-y")}
          value={state.mainService}
          onChange={(e) => update("mainService", e.target.value)}
          aria-invalid={Boolean(errors.mainService)}
        />
      </Field>

      <Field
        id="concern"
        label="Что сейчас больше всего беспокоит вас в сайте?"
        required
        error={errors.concern}
      >
        <textarea
          id="concern"
          name="concern"
          rows={3}
          className={cn(inputClass, "resize-y")}
          value={state.concern}
          onChange={(e) => update("concern", e.target.value)}
          aria-invalid={Boolean(errors.concern)}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-muted">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-border bg-bg accent-gold"
            checked={state.consent}
            onChange={(e) => update("consent", e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
          />
          <span>
            Я согласен(на) на обработку данных.{" "}
            <a
              href="/privacy"
              className="text-gold-soft underline-offset-4 hover:underline"
            >
              Политика конфиденциальности
            </a>
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-2 text-sm text-danger" role="alert">
            {errors.consent}
          </p>
        ) : null}
      </div>

      {submitError ? (
        <p className="text-sm text-danger" role="alert">
          {submitError}
        </p>
      ) : null}

      <CheckoutCTA
        label="Отправить заявку на аудит"
        loading={submitting}
        type="submit"
      />
    </form>
  );
}
