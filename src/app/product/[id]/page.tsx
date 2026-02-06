import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getProductById, products } from "@/data/products";
import { getLang } from "@/i18n/server";
import { t } from "@/i18n/t";
import ProductDetailClient from "./product-detail-client";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const lang = await getLang();
  const resolvedParams = await Promise.resolve(params);
  const product = getProductById(resolvedParams.id);

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="font-display text-2xl mb-4">{t(lang, "product.notFound.title")}</h1>
        <Button variant="hero" asChild>
          <Link href="/shop">{t(lang, "product.notFound.backToShop")}</Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id,
  );

  return <ProductDetailClient lang={lang} product={product} relatedProducts={relatedProducts} />;
}

