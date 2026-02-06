import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BRAND_STORY_IMAGE } from "@/constants";
import type { Lang } from "@/i18n/lang";
import { t } from "@/i18n/t";

const BrandStorySection = ({ lang }: { lang: Lang }) => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={BRAND_STORY_IMAGE}
                alt={t(lang, "home.brandStory.alt")}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 -z-10" />
          </div>

          {/* Content */}
          <div className="max-w-lg">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-4 block">
              {t(lang, "home.brandStory.kicker")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              {t(lang, "home.brandStory.title").split("\n")[0]}
              <br />
              <span className="italic">{t(lang, "home.brandStory.title").split("\n")[1]}</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              {t(lang, "home.brandStory.p1")}
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              {t(lang, "home.brandStory.p2")}
            </p>
            <Button variant="hero-outline" asChild>
              <Link href="/about">{t(lang, "home.brandStory.cta")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
