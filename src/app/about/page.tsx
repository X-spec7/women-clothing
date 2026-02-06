import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { BRAND_STORY_IMAGE, HERO_MAIN_IMAGE } from "@/constants";
import { getLang } from "@/i18n/server";
import { t } from "@/i18n/t";

export default async function AboutPage() {
  const lang = await getLang();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={BRAND_STORY_IMAGE}
            alt={t(lang, "about.hero.title")}
            fill priority className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center text-background">
          <h1 className="font-display text-4xl md:text-6xl mb-4">{t(lang, "about.hero.title")}</h1>
          <p className="text-background/80 font-body max-w-xl mx-auto px-4">
            {t(lang, "about.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-4 block">
              {t(lang, "about.story.kicker")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              {t(lang, "about.story.title")}
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              {t(lang, "about.story.p1")}
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              {t(lang, "about.story.p2")}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">{t(lang, "about.values.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl text-primary">01</span>
              </div>
              <h3 className="font-display text-xl mb-4">{t(lang, "about.values.quality")}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {t(lang, "about.values.qualityP")}
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl text-primary">02</span>
              </div>
              <h3 className="font-display text-xl mb-4">{t(lang, "about.values.sustainability")}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {t(lang, "about.values.sustainabilityP")}
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl text-primary">03</span>
              </div>
              <h3 className="font-display text-xl mb-4">{t(lang, "about.values.timeless")}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {t(lang, "about.values.timelessP")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={HERO_MAIN_IMAGE}
                alt={t(lang, "about.atelier.title")}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-4 block">
                {t(lang, "about.atelier.kicker")}
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-6">{t(lang, "about.atelier.title")}</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                {t(lang, "about.atelier.p1")}
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                {t(lang, "about.atelier.p2")}
              </p>
              <Button variant="hero-outline" asChild>
                <Link href="/contact">{t(lang, "about.atelier.cta")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

