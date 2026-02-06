import { cookies } from "next/headers";

import { LANG_COOKIE, normalizeLang } from "./lang";

export async function getLang() {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(LANG_COOKIE)?.value;
  return normalizeLang(cookieValue);
}

