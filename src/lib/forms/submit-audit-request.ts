import { auditFormConfig } from "@/config/forms";
import { products } from "@/config/products";

export type AuditRequestPayload = {
  name: string;
  email: string;
  website: string;
  specialization: string;
  clients: string;
  mainService: string;
  concern: string;
  consent: boolean;
  /** Always false until a payment provider confirms payment */
  paid: false;
  productId: typeof products.audit.id;
  submittedAt: string;
};

export type SubmitAuditResult =
  | { ok: true; channel: "log" | "webhook" | "email" }
  | { ok: false; error: string };

function assertPayload(payload: AuditRequestPayload): string | null {
  if (!payload.name.trim()) return "Укажите имя";
  if (!payload.email.trim()) return "Укажите email";
  if (!payload.website.trim()) return "Укажите ссылку на сайт";
  if (!payload.specialization.trim()) return "Укажите специализацию";
  if (!payload.clients.trim()) return "Опишите клиентов или запросы";
  if (!payload.mainService.trim()) return "Укажите, что продаёт сайт";
  if (!payload.concern.trim()) return "Опишите, что беспокоит в сайте";
  if (!payload.consent) return "Нужно согласие на обработку данных";
  if (payload.paid !== false) return "Некорректный статус оплаты";
  return null;
}

async function deliverViaWebhook(
  payload: AuditRequestPayload,
): Promise<SubmitAuditResult> {
  if (!auditFormConfig.webhookUrl) {
    return {
      ok: false,
      error: "Webhook URL не задан (AUDIT_FORM_WEBHOOK_URL)",
    };
  }

  const response = await fetch(auditFormConfig.webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return {
      ok: false,
      error: `Webhook ответил статусом ${response.status}`,
    };
  }

  return { ok: true, channel: "webhook" };
}

async function deliverViaEmail(
  payload: AuditRequestPayload,
): Promise<SubmitAuditResult> {
  if (!auditFormConfig.emailTo) {
    return {
      ok: false,
      error: "Email получателя не задан (AUDIT_FORM_EMAIL_TO)",
    };
  }

  // TODO: connect email provider (Resend / SMTP / etc.)
  // Keep payload ready so wiring is a single provider call.
  console.info("[audit-form:email-ready]", {
    to: auditFormConfig.emailTo,
    subject: `Заявка на аудит: ${payload.website}`,
    payload,
  });

  return {
    ok: false,
    error:
      "Email-провайдер ещё не подключён. Задайте AUDIT_FORM_MODE=webhook или оставьте log.",
  };
}

/**
 * Server-side delivery for audit applications.
 * Never marks the request as paid — payment is a separate confirmed step.
 */
export async function submitAuditRequest(
  payload: AuditRequestPayload,
): Promise<SubmitAuditResult> {
  const validationError = assertPayload(payload);
  if (validationError) {
    return { ok: false, error: validationError };
  }

  const safePayload: AuditRequestPayload = {
    ...payload,
    paid: false,
    productId: products.audit.id,
  };

  switch (auditFormConfig.mode) {
    case "webhook":
      return deliverViaWebhook(safePayload);
    case "email":
      return deliverViaEmail(safePayload);
    case "log":
    default:
      console.info("[audit-form]", safePayload);
      return { ok: true, channel: "log" };
  }
}
