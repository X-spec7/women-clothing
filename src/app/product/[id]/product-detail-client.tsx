"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Minus, Plus, Truck, RotateCcw, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import type { Lang } from "@/i18n/lang";
import { t } from "@/i18n/t";

export default function ProductDetailClient({
  lang,
  product,
  relatedProducts,
}: {
  lang: Lang;
  product: Product;
  relatedProducts: Product[];
}) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const name = lang === "pl" ? product.namePl : product.name;
  const description = lang === "pl" ? product.descriptionPl : product.description;

  return (
    <div className="container py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="text-xs font-body text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          {t(lang, "common.home")}
        </Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-foreground">
          {t(lang, "common.shop")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary/30">
          <Image
            src={product.image}
            alt={name}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              {product.isNew && (
                <span className="inline-block bg-foreground text-background text-[10px] uppercase tracking-wider px-2 py-1 font-body mb-3">
                  {t(lang, "product.badge.new")}
                </span>
              )}
              <h1 className="font-display text-2xl md:text-3xl">{name}</h1>
            </div>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mt-4">
            <span className="font-display text-2xl">{product.price} zł</span>
            {product.originalPrice && (
              <span className="text-muted-foreground line-through font-body">
                {product.originalPrice} zł
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground font-body mt-6 leading-relaxed">{description}</p>

          {/* Colors */}
          <div className="mt-8">
            <h3 className="text-xs uppercase tracking-wider font-body mb-3">
              {t(lang, "product.color")}
            </h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="px-3 py-1.5 border rounded text-xs font-body cursor-pointer hover:border-foreground transition-colors"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs uppercase tracking-wider font-body">
                {t(lang, "product.size")}
              </h3>
              <button className="text-xs text-muted-foreground hover:text-foreground font-body underline">
                {t(lang, "product.sizeTable")}
              </button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 border rounded text-sm font-body transition-colors ${
                    selectedSize === size
                      ? "bg-foreground text-background border-foreground"
                      : "hover:border-foreground"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <h3 className="text-xs uppercase tracking-wider font-body mb-3">
              {t(lang, "product.quantity")}
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-body">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mt-8 space-y-3">
            <Button variant="hero" size="xl" className="w-full">
              {t(lang, "product.addToCart")}
            </Button>
            <Button variant="hero-outline" size="xl" className="w-full">
              {t(lang, "product.buyNow")}
            </Button>
          </div>

          {/* Features */}
          <div className="mt-10 pt-8 border-t space-y-4">
            <div className="flex items-center gap-3 text-sm font-body">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span>{t(lang, "product.features.shipping")}</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-body">
              <RotateCcw className="h-5 w-5 text-muted-foreground" />
              <span>{t(lang, "product.features.returns")}</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-body">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span>{t(lang, "product.features.warranty")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16 md:mt-24">
          <h2 className="font-display text-2xl mb-8">{t(lang, "product.related")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} lang={lang} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

