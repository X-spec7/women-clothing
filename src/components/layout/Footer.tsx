import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Lang } from "@/i18n/lang";
import { t } from "@/i18n/t";

const Footer = ({ lang }: { lang: Lang }) => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter */}
      <div className="border-b border-background/10">
        <div className="container py-12 md:py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl mb-4">
              {t(lang, "footer.newsletter.title")}
            </h3>
            <p className="text-background/70 mb-6 font-body text-sm">
              {t(lang, "footer.newsletter.subtitle")}
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t(lang, "footer.newsletter.placeholder")}
                className="bg-transparent border-background/30 text-background placeholder:text-background/50 focus:border-background"
              />
              <Button variant="hero-outline" className="border-background text-background hover:bg-background hover:text-foreground">
                {t(lang, "footer.newsletter.submit")}
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
              {t(lang, "footer.brand.blurb")}
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
              {t(lang, "footer.section.shop")}
            </h4>
            <ul className="space-y-3 text-sm text-background/60 font-body">
              <li><Link href="/shop?filter=new" className="hover:text-background transition-colors">{t(lang, "header.nav.new")}</Link></li>
              <li><Link href="/shop?category=dresses" className="hover:text-background transition-colors">{t(lang, "header.nav.dresses")}</Link></li>
              <li><Link href="/shop?category=tops" className="hover:text-background transition-colors">{t(lang, "header.nav.tops")}</Link></li>
              <li><Link href="/shop?category=outerwear" className="hover:text-background transition-colors">{t(lang, "header.nav.outerwear")}</Link></li>
              <li><Link href="/shop?category=accessories" className="hover:text-background transition-colors">{t(lang, "header.nav.accessories")}</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4">
              {t(lang, "footer.section.help")}
            </h4>
            <ul className="space-y-3 text-sm text-background/60 font-body">
              <li><Link href="/contact" className="hover:text-background transition-colors">{t(lang, "contact.title")}</Link></li>
              <li><a href="#" className="hover:text-background transition-colors">{t(lang, "footer.link.shipping")}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t(lang, "footer.link.returns")}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t(lang, "footer.link.faq")}</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4">
              {t(lang, "footer.section.about")}
            </h4>
            <ul className="space-y-3 text-sm text-background/60 font-body">
              <li><Link href="/about" className="hover:text-background transition-colors">{t(lang, "footer.link.story")}</Link></li>
              <li><a href="#" className="hover:text-background transition-colors">{t(lang, "footer.link.sustainable")}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t(lang, "footer.link.careers")}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t(lang, "footer.link.press")}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40 font-body">
            {t(lang, "footer.bottom.rights")}
          </p>
          <div className="flex gap-6 text-xs text-background/40 font-body">
            <a href="#" className="hover:text-background/60 transition-colors">{t(lang, "footer.bottom.privacy")}</a>
            <a href="#" className="hover:text-background/60 transition-colors">{t(lang, "footer.bottom.terms")}</a>
            <a href="#" className="hover:text-background/60 transition-colors">{t(lang, "footer.bottom.cookies")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
