import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { BRAND_STORY_IMAGE, HERO_MAIN_IMAGE } from "@/constants";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={BRAND_STORY_IMAGE}
            alt="O nas"
            fill priority className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center text-background">
          <h1 className="font-display text-4xl md:text-6xl mb-4">Nasza historia</h1>
          <p className="text-background/80 font-body max-w-xl mx-auto px-4">
            Pasja, rzemiosło i polska elegancja
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-4 block">
              Od 2018 roku
            </span>
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              Tworzymy z myślą o Tobie
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Atelier Polska powstało z prostej idei: stworzyć markę odzieżową, która łączy
              najwyższą jakość europejskich tkanin z polskim rzemiosłem i nowoczesnym designem.
              Nasza założycielka, Maria Kowalska, przez lata pracowała w międzynarodowych domach
              mody, zanim zdecydowała się wrócić do Polski i założyć własną markę.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Dziś projektujemy i szyjemy w naszym warszawskim atelier, współpracując z najlepszymi
              polskimi krawcami i rzemieślnikami. Każdy element naszych kolekcji jest starannie
              przemyślany - od wyboru materiałów po ostatni szew.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">Nasze wartości</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl text-primary">01</span>
              </div>
              <h3 className="font-display text-xl mb-4">Jakość</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Używamy tylko najlepszych europejskich tkanin. Każdy produkt przechodzi
                wieloetapową kontrolę jakości.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl text-primary">02</span>
              </div>
              <h3 className="font-display text-xl mb-4">Zrównoważony rozwój</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Dbamy o środowisko. Produkujemy w Polsce, minimalizując ślad węglowy i wspierając
                lokalne społeczności.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl text-primary">03</span>
              </div>
              <h3 className="font-display text-xl mb-4">Ponadczasowość</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Projektujemy ubrania, które nie wychodzą z mody. Inwestycja w jakość, która służy
                przez lata.
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
                alt="Nasze atelier"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-4 block">
                Warszawa, Polska
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-6">Nasze atelier</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                W sercu Warszawy mieści się nasze atelier - miejsce, gdzie rodzą się wszystkie nasze
                kolekcje. To tutaj projektujemy, szyjemy i pakujemy każde zamówienie z najwyższą
                starannością.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Nasz zespół to ponad 30 utalentowanych osób - od projektantów, przez krawców, po
                specjalistów ds. obsługi klienta. Każdy z nich dzieli naszą pasję do tworzenia
                pięknych rzeczy.
              </p>
              <Button variant="hero-outline" asChild>
                <Link href="/contact">Skontaktuj się z nami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

