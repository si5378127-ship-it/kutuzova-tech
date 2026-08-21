"use client";

import { CTAButton } from "@/components/CTAButton";
import { products } from "@/config/products";

type CheckoutCTAProps = {
  label?: string;
  href?: string;
  type?: "button" | "submit";
  loading?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "onDark";
};

/**
 * Isolated checkout entry point for future payment integration.
 * TODO: connect payment provider
 */
export function CheckoutCTA({
  label = products.audit.cta.label,
  href = "#audit-form",
  type,
  loading = false,
  onClick,
  variant = "primary",
}: CheckoutCTAProps) {
  if (type === "submit" || type === "button") {
    return (
      <CTAButton
        href={href}
        type={type}
        variant={variant}
        disabled={loading}
        event="audit_cta_click"
        eventPayload={{ location: "checkout_cta" }}
        onClick={onClick}
        className="w-full sm:w-auto"
      >
        {loading ? "Отправляем…" : label}
      </CTAButton>
    );
  }

  return (
    <CTAButton
      href={href}
      variant={variant}
      event="audit_cta_click"
      eventPayload={{ location: "checkout_cta" }}
      onClick={onClick}
      className="w-full sm:w-auto"
    >
      {label}
    </CTAButton>
  );
}
