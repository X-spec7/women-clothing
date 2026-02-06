import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-xl mx-auto text-center mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-4 block">
          Jesteśmy tu dla Ciebie
        </span>
        <h1 className="font-display text-3xl md:text-5xl mb-4">Kontakt</h1>
        <p className="text-muted-foreground font-body">
          Masz pytania? Chętnie pomożemy. Skontaktuj się z nami przez formularz lub bezpośrednio.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div>
          <h2 className="font-display text-xl mb-6">Napisz do nas</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider font-body text-muted-foreground mb-2 block">
                  Imię
                </label>
                <Input placeholder="Anna" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider font-body text-muted-foreground mb-2 block">
                  Nazwisko
                </label>
                <Input placeholder="Kowalska" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider font-body text-muted-foreground mb-2 block">
                Email
              </label>
              <Input type="email" placeholder="anna@example.com" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider font-body text-muted-foreground mb-2 block">
                Temat
              </label>
              <Input placeholder="W czym możemy pomóc?" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider font-body text-muted-foreground mb-2 block">
                Wiadomość
              </label>
              <Textarea placeholder="Opisz swoją sprawę..." className="min-h-[150px]" />
            </div>
            <Button variant="hero" size="lg" className="w-full">
              Wyślij wiadomość
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-display text-xl mb-6">Informacje kontaktowe</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-display text-sm mb-1">Adres</h3>
                <p className="text-muted-foreground font-body text-sm">
                  ul. Mokotowska 45
                  <br />
                  00-551 Warszawa, Polska
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-display text-sm mb-1">Telefon</h3>
                <p className="text-muted-foreground font-body text-sm">+48 22 123 45 67</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-display text-sm mb-1">Email</h3>
                <p className="text-muted-foreground font-body text-sm">kontakt@atelierpolska.pl</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-display text-sm mb-1">Godziny pracy</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Pon - Pt: 9:00 - 18:00
                  <br />
                  Sob: 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-8 aspect-video bg-secondary/50 rounded flex items-center justify-center">
            <span className="text-muted-foreground font-body text-sm">
              Mapa - ul. Mokotowska 45, Warszawa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

