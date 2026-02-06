import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LIFESTYLE_EDITORIAL_IMAGE } from "@/constants";
import type { Lang } from "@/i18n/lang";
import { t } from "@/i18n/t";

const EditorialSection = ({ lang }: { lang: Lang }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden">
          {/* Background */}
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={LIFESTYLE_EDITORIAL_IMAGE}
              alt={t(lang, "home.editorial.alt")}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="max-w-md text-background">
                <span className="text-xs uppercase tracking-[0.3em] text-background/70 font-body mb-4 block">
                  {t(lang, "home.editorial.kicker")}
                </span>
                <h2 className="font-display text-3xl md:text-5xl mb-4">
                  {t(lang, "home.editorial.title").split("\n")[0]}
                  <br />
                  <span className="italic">{t(lang, "home.editorial.title").split("\n")[1]}</span>
                </h2>
                <p className="text-background/80 font-body mb-6 hidden md:block">
                  {t(lang, "home.editorial.p")}
                </p>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-background hover:text-background/80 transition-colors group"
                >
                  {t(lang, "home.editorial.cta")}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
