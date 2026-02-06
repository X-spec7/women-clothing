import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter */}
      <div className="border-b border-background/10">
        <div className="container py-12 md:py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl mb-4">
              Dołącz do naszego świata
            </h3>
            <p className="text-background/70 mb-6 font-body text-sm">
              Zapisz się do newslettera i otrzymaj 10% rabatu na pierwsze zakupy
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Twój adres e-mail"
                className="bg-transparent border-background/30 text-background placeholder:text-background/50 focus:border-background"
              />
              <Button variant="hero-outline" className="border-background text-background hover:bg-background hover:text-foreground">
                Zapisz
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display text-xl tracking-wider">
              ATELIER POLSKA
            </Link>
            <p className="text-background/60 text-sm mt-4 font-body leading-relaxed">
              Elegancja z polskim charakterem. Tworzymy ponadczasową modę dla współczesnej kobiety.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4">
              Sklep
            </h4>
            <ul className="space-y-3 text-sm text-background/60 font-body">
              <li><Link href="/shop?filter=new" className="hover:text-background transition-colors">Nowości</Link></li>
              <li><Link href="/shop?category=dresses" className="hover:text-background transition-colors">Sukienki</Link></li>
              <li><Link href="/shop?category=tops" className="hover:text-background transition-colors">Bluzki</Link></li>
              <li><Link href="/shop?category=outerwear" className="hover:text-background transition-colors">Okrycia</Link></li>
              <li><Link href="/shop?category=accessories" className="hover:text-background transition-colors">Akcesoria</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4">
              Pomoc
            </h4>
            <ul className="space-y-3 text-sm text-background/60 font-body">
              <li><Link href="/contact" className="hover:text-background transition-colors">Kontakt</Link></li>
              <li><a href="#" className="hover:text-background transition-colors">Dostawa</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Zwroty</a></li>
              <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4">
              O nas
            </h4>
            <ul className="space-y-3 text-sm text-background/60 font-body">
              <li><Link href="/about" className="hover:text-background transition-colors">Nasza historia</Link></li>
              <li><a href="#" className="hover:text-background transition-colors">Zrównoważona moda</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Kariera</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Prasa</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40 font-body">
            © 2025 Atelier Polska. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-xs text-background/40 font-body">
            <a href="#" className="hover:text-background/60 transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-background/60 transition-colors">Regulamin</a>
            <a href="#" className="hover:text-background/60 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
