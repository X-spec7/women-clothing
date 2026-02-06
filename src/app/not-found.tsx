import Link from "next/link";
import { getLang } from "@/i18n/server";
import { t } from "@/i18n/t";

export default async function NotFound() {
  const lang = await getLang();

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t(lang, "notFound.title")}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t(lang, "notFound.subtitle")}</p>
        <Link href="/" className="text-primary underline hover:text-primary/90">
          {t(lang, "notFound.backHome")}
        </Link>
      </div>
    </div>
  );
}

