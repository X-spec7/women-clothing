"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Nowości", href: "/shop?filter=new" },
    { name: "Sukienki", href: "/shop?category=dresses" },
    { name: "Bluzki", href: "/shop?category=tops" },
    { name: "Okrycia", href: "/shop?category=outerwear" },
    { name: "Akcesoria", href: "/shop?category=accessories" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-foreground text-background text-center py-2 text-xs tracking-widest font-body">
        DARMOWA DOSTAWA OD 500 ZŁ • BEZPŁATNE ZWROTY
      </div>

      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
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
                  Szukaj
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Konto
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
