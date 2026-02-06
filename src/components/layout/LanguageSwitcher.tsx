"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import type { Lang } from "@/i18n/lang";
import { Button } from "@/components/ui/button";

async function setLang(lang: Lang) {
  await fetch("/api/lang", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ lang }),
  });
}

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();

  function onSelect(nextLang: Lang) {
    startTransition(async () => {
      await setLang(nextLang);
      router.refresh();
    });
  }

  return (
    <div className="flex items-center gap-1 border rounded-md p-1">
      <Button
        type="button"
        variant={lang === "pl" ? "secondary" : "ghost"}
        size="sm"
        className="h-8 px-2 text-xs"
        onClick={() => onSelect("pl")}
        disabled={isPending}
      >
        PL
      </Button>
      <Button
        type="button"
        variant={lang === "en" ? "secondary" : "ghost"}
        size="sm"
        className="h-8 px-2 text-xs"
        onClick={() => onSelect("en")}
        disabled={isPending}
      >
        EN
      </Button>
    </div>
  );
}

