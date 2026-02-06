import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BRAND_STORY_IMAGE } from "@/constants";

const BrandStorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={BRAND_STORY_IMAGE}
                alt="Atelier Polska - nasza historia"
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
              Nasza historia
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Tworzymy z pasją<br />
              <span className="italic">od 2018 roku</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Atelier Polska narodziło się z miłości do pięknych tkanin i polskiego
              rzemiosła. Każdy element naszych kolekcji jest starannie projektowany
              w Warszawie, z dbałością o najdrobniejsze detale.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Wierzymy, że prawdziwa elegancja jest ponadczasowa. Dlatego tworzymy
              ubrania, które będą towarzyszyć Ci przez lata.
            </p>
            <Button variant="hero-outline" asChild>
              <Link href="/about">Poznaj nas bliżej</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
