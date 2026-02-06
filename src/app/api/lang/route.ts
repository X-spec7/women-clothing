import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { LANG_COOKIE, normalizeLang } from "@/i18n/lang";

export async function POST(req: Request) {
  let body: unknown = null;
  try {
    body = await req.json();
  } catch {
    // ignore
  }

  const lang = normalizeLang((body as any)?.lang);

  const cookieStore = await cookies();
  cookieStore.set(LANG_COOKIE, lang, {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });

  return NextResponse.json({ lang });
}

