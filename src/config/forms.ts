/**
 * Delivery channels for audit form submissions.
 *
 * Set env vars when ready:
 * - AUDIT_FORM_WEBHOOK_URL — POST JSON payload to Zapier / Make / custom endpoint
 * - AUDIT_FORM_EMAIL_TO — destination email (used once an email provider is wired)
 * - AUDIT_FORM_MODE — "log" | "webhook" | "email" (default: "log")
 *
 * TODO: connect Resend / SMTP / other email provider when credentials are available
 * TODO: connect payment provider confirmation webhook separately
 */
export type FormDeliveryMode = "log" | "webhook" | "email";

export const auditFormConfig = {
  mode: (process.env.AUDIT_FORM_MODE as FormDeliveryMode | undefined) ?? "log",
  webhookUrl: process.env.AUDIT_FORM_WEBHOOK_URL ?? "",
  emailTo: process.env.AUDIT_FORM_EMAIL_TO ?? "",
  // TODO: add from-address when email provider is connected
} as const;
