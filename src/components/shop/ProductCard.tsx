import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  showBadge?: boolean;
}

const ProductCard = ({ product, showBadge = true }: ProductCardProps) => {
  return (
    <div className="group">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden mb-4 img-zoom">
        <Link
          href={`/product/${product.id}`}
          className="absolute inset-0 z-10"
          aria-label={product.namePl}
        />

        <Image
          src={product.image}
          alt={product.namePl}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover"
        />

        {/* Badges */}
        {showBadge && (
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
            {product.isNew && (
              <span className="bg-foreground text-background text-[10px] uppercase tracking-wider px-2 py-1 font-body">
                Nowość
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-wider px-2 py-1 font-body">
                Wyprzedaż
              </span>
            )}
          </div>
        )}

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick Add */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-3 bg-background/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button variant="hero" size="sm" className="w-full">
            Dodaj do koszyka
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <Link
          href={`/product/${product.id}`}
          className="block font-display text-sm hover:text-primary transition-colors"
        >
          {product.namePl}
        </Link>
        <div className="flex items-center gap-2 font-body text-sm">
          <span className="font-medium">{product.price} zł</span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-xs">
              {product.originalPrice} zł
            </span>
          )}
        </div>
        <div className="flex gap-1">
          {product.colors.slice(0, 3).map((color) => (
            <span
              key={color}
              className="text-[10px] text-muted-foreground font-body"
            >
              {color}
              {product.colors.indexOf(color) < Math.min(2, product.colors.length - 1) && ","}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
