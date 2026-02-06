import { Suspense } from "react";

import ShopClient from "./shop-client";

export default function ShopPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  return (
    <Suspense fallback={<div className="container py-12">Ładowanie…</div>}>
      <ShopClient searchParams={searchParams} />
    </Suspense>
  );
}

