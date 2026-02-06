"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SlidersHorizontal, Grid3X3, LayoutGrid } from "lucide-react";

import ProductCard from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import type { Lang } from "@/i18n/lang";
import { t } from "@/i18n/t";

function getSearchParam(
  searchParams: Record<string, string | string[] | undefined> | undefined,
  key: string,
) {
  const value = searchParams?.[key];
  return Array.isArray(value) ? value[0] ?? null : value ?? null;
}

export default function ShopClient({
  searchParams,
  lang,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
  lang: Lang;
}) {
  const categoryParam = getSearchParam(searchParams, "category");
  const filterParam = getSearchParam(searchParams, "filter");
  const [gridCols, setGridCols] = useState<3 | 4>(4);

  const { filteredProducts, pageTitle } = useMemo(() => {
    let filtered = products;
    let title = t(lang, "shop.allProducts");

    if (categoryParam) {
      filtered = products.filter((p) => p.category === categoryParam);
      const category = categories.find((c) => c.id === categoryParam);
      title =
        (lang === "pl" ? category?.namePl : category?.name) ?? t(lang, "shop.products");
    } else if (filterParam === "new") {
      filtered = products.filter((p) => p.isNew);
      title = t(lang, "shop.new");
    } else if (filterParam === "bestsellers") {
      filtered = products.filter((p) => p.isBestSeller);
      title = t(lang, "shop.bestsellers");
    }

    return { filteredProducts: filtered, pageTitle: title };
  }, [categoryParam, filterParam, lang]);

  return (
    <div className="container py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="text-xs font-body text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          {t(lang, "common.home")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{pageTitle}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl md:text-4xl">{pageTitle}</h1>
          <p className="text-muted-foreground font-body text-sm mt-2">
            {filteredProducts.length} {t(lang, "shop.productsCount")}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Filter Button */}
          <Button variant="outline" size="sm" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            {t(lang, "shop.filters")}
          </Button>

          {/* Grid Toggle */}
          <div className="hidden md:flex items-center gap-1 border rounded-md p-1">
            <Button
              variant={gridCols === 3 ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setGridCols(3)}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={gridCols === 4 ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setGridCols(4)}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Pills (mobile) */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 md:hidden scrollbar-hide">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={categoryParam === category.id ? "hero" : "outline"}
            size="sm"
            className="shrink-0"
            asChild
          >
            <Link href={`/shop?category=${category.id}`}>
              {lang === "pl" ? category.namePl : category.name}
            </Link>
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div
        className={`grid gap-4 md:gap-6 ${
          gridCols === 3 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2 md:grid-cols-4"
        }`}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} lang={lang} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <h3 className="font-display text-xl mb-2">{t(lang, "shop.empty.title")}</h3>
          <p className="text-muted-foreground font-body">
            {t(lang, "shop.empty.subtitle")}
          </p>
        </div>
      )}
    </div>
  );
}

