"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Lang } from "@/i18n/lang";
import { t } from "@/i18n/t";

const Header = ({ lang }: { lang: Lang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t(lang, "header.nav.new"), href: "/shop?filter=new" },
    { name: t(lang, "header.nav.dresses"), href: "/shop?category=dresses" },
    { name: t(lang, "header.nav.tops"), href: "/shop?category=tops" },
    { name: t(lang, "header.nav.outerwear"), href: "/shop?category=outerwear" },
    { name: t(lang, "header.nav.accessories"), href: "/shop?category=accessories" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-foreground text-background text-center py-2 text-xs tracking-widest font-body">
        {t(lang, "header.topbar")}
      </div>

      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={t(lang, "header.menu")}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo */}
          <Link href="/" className="font-display text-xl md:text-2xl tracking-wider">
            ATELIER POLSKA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors link-underline"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex">
              <LanguageSwitcher lang={lang} />
            </div>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <div className="pb-2">
                <LanguageSwitcher lang={lang} />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="flex-1 justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  {t(lang, "header.search")}
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 justify-start">
                  <User className="h-4 w-4 mr-2" />
                  {t(lang, "header.account")}
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
