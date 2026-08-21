import { NextResponse } from "next/server";
import { products } from "@/config/products";
import {
  submitAuditRequest,
  type AuditRequestPayload,
} from "@/lib/forms/submit-audit-request";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Некорректный JSON" },
      { status: 400 },
    );
  }

  const data = body as Partial<AuditRequestPayload>;

  const payload: AuditRequestPayload = {
    name: String(data.name ?? ""),
    email: String(data.email ?? ""),
    website: String(data.website ?? ""),
    specialization: String(data.specialization ?? ""),
    clients: String(data.clients ?? ""),
    mainService: String(data.mainService ?? ""),
    concern: String(data.concern ?? ""),
    consent: Boolean(data.consent),
    paid: false,
    productId: products.audit.id,
    submittedAt: new Date().toISOString(),
  };

  const result = await submitAuditRequest(payload);

  if (!result.ok) {
    return NextResponse.json(result, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    channel: result.channel,
    paid: false,
    message: "Заявка принята. Оплата ещё не подтверждена.",
  });
}
