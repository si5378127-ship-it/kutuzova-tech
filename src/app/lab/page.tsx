import { ClientRedirect } from "@/components/ClientRedirect";

/**
 * Legacy /lab/ — portfolio now lives on /sites/#portfolio.
 */
export default function LabRedirectPage() {
  return (
    <ClientRedirect
      href="/sites/#portfolio"
      message="Лаборатория переехала в единое портфолио."
      linkLabel="Перейти к портфолио на странице «Сайты»"
    />
  );
}
