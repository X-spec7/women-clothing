import Link from "next/link";
import Image from "next/image";
import {
  CATEGORY_DRESSES_IMAGE,
  CATEGORY_TOPS_IMAGE,
  CATEGORY_ACCESSORIES_IMAGE,
  CATEGORY_OUTERWEAR_IMAGE
} from "@/constants";
import type { Lang } from "@/i18n/lang";
import { t } from "@/i18n/t";
import type { MessageKey } from "@/i18n/messages";

const categories = [
  {
    id: "dresses",
    nameKey: "home.categories.dresses" satisfies MessageKey,
    descKey: "home.categories.dressesDesc" satisfies MessageKey,
    image: CATEGORY_DRESSES_IMAGE,
  },
  {
    id: "tops",
    nameKey: "home.categories.tops" satisfies MessageKey,
    descKey: "home.categories.topsDesc" satisfies MessageKey,
    image: CATEGORY_TOPS_IMAGE,
  },
  {
    id: "outerwear",
    nameKey: "home.categories.outerwear" satisfies MessageKey,
    descKey: "home.categories.outerwearDesc" satisfies MessageKey,
    image: CATEGORY_OUTERWEAR_IMAGE,
  },
  {
    id: "accessories",
    nameKey: "home.categories.accessories" satisfies MessageKey,
    descKey: "home.categories.accessoriesDesc" satisfies MessageKey,
    image: CATEGORY_ACCESSORIES_IMAGE,
  },
] as const;

const CategoriesSection = ({ lang }: { lang: Lang }) => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-2 block">
            {t(lang, "home.categories.kicker")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl">{t(lang, "home.categories.title")}</h2>
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
                alt={t(lang, category.nameKey)}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-background">
                <h3 className="font-display text-lg md:text-xl mb-1">
                  {t(lang, category.nameKey)}
                </h3>
                <p className="text-xs text-background/70 font-body hidden md:block">
                  {t(lang, category.descKey)}
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
