import Link from "next/link";
import Image from "next/image";
import {
  CATEGORY_DRESSES_IMAGE,
  CATEGORY_TOPS_IMAGE,
  CATEGORY_ACCESSORIES_IMAGE,
  CATEGORY_OUTERWEAR_IMAGE
} from "@/constants";

const categories = [
  {
    id: "dresses",
    name: "Sukienki",
    image: CATEGORY_DRESSES_IMAGE,
    description: "Elegancja na każdą okazję",
  },
  {
    id: "tops",
    name: "Bluzki i Topy",
    image: CATEGORY_TOPS_IMAGE,
    description: "Codzienne piękno",
  },
  {
    id: "outerwear",
    name: "Okrycia wierzchnie",
    image: CATEGORY_OUTERWEAR_IMAGE,
    description: "Styl na chłodniejsze dni",
  },
  {
    id: "accessories",
    name: "Akcesoria",
    image: CATEGORY_ACCESSORIES_IMAGE,
    description: "Dopełnienie stylizacji",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-2 block">
            Przeglądaj
          </span>
          <h2 className="font-display text-3xl md:text-4xl">Kategorie</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.id}`}
              className="group relative overflow-hidden aspect-[3/4] img-zoom"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-background">
                <h3 className="font-display text-lg md:text-xl mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-background/70 font-body hidden md:block">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
