import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getLang } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Atelier Polska",
  description: "Elegancka moda z polskim charakterem.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await getLang();

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header lang={lang} />
            <main className="flex-1">{children}</main>
            <Footer lang={lang} />
          </div>
        </Providers>
      </body>
    </html>
  );
}

