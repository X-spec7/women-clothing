import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HERO_MAIN_IMAGE } from "@/constants";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={HERO_MAIN_IMAGE}
          alt="Kolekcja wiosna 2025"
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
            Kolekcja Wiosna/Lato 2025
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Elegancja<br />
            <span className="italic">w każdym detalu</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
            Odkryj nową kolekcję inspirowaną polską tradycją rzemieślniczą
            i współczesnym minimalizmem.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link href="/shop">Odkryj kolekcję</Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link href="/about">Nasza historia</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
