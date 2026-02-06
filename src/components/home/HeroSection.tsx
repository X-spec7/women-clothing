import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HERO_MAIN_IMAGE } from "@/constants";
import type { Lang } from "@/i18n/lang";
import { t } from "@/i18n/t";

const HeroSection = ({ lang }: { lang: Lang }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={HERO_MAIN_IMAGE}
          alt={t(lang, "home.hero.alt")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-lg animate-slide-up">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-4 block">
            {t(lang, "home.hero.collection")}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            {t(lang, "home.hero.title").split("\n")[0]}
            <br />
            <span className="italic">{t(lang, "home.hero.title").split("\n")[1]}</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
            {t(lang, "home.hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link href="/shop">{t(lang, "home.hero.cta.shop")}</Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link href="/about">{t(lang, "home.hero.cta.about")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
