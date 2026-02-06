import { Suspense } from "react";

import ShopClient from "./shop-client";
import { getLang } from "@/i18n/server";
import { t } from "@/i18n/t";

export default async function ShopPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const lang = await getLang();

  return (
    <Suspense fallback={<div className="container py-12">{t(lang, "common.loading")}</div>}>
      <ShopClient searchParams={searchParams} lang={lang} />
    </Suspense>
  );
}

