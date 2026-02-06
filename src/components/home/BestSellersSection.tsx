import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { getBestSellers } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

const BestSellersSection = () => {
  const bestSellers = getBestSellers();

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-2 flex items-center gap-2">
              <Star className="h-3 w-3 fill-primary text-primary" />
              Wasze ulubione
            </span>
            <h2 className="font-display text-3xl md:text-4xl">Bestsellery</h2>
          </div>
          <Link
            href="/shop?filter=bestsellers"
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors group"
          >
            Zobacz wszystkie
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} showBadge={false} />
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
          <div>
            <div className="font-display text-3xl">15K+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-body">
              Zadowolonych klientek
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-border" />
          <div>
            <div className="font-display text-3xl">4.9</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-body">
              Średnia ocena
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-border" />
          <div>
            <div className="font-display text-3xl">98%</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-body">
              Poleca nas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
