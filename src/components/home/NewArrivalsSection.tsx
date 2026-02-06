import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getNewArrivals } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

const NewArrivalsSection = () => {
  const newArrivals = getNewArrivals();

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-2 block">
              Właśnie dodane
            </span>
            <h2 className="font-display text-3xl md:text-4xl">Nowości</h2>
          </div>
          <Link
            href="/shop?filter=new"
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors group"
          >
            Zobacz wszystkie
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/shop?filter=new"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors"
          >
            Zobacz wszystkie
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
