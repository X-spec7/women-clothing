export type Lang = "pl" | "en";

export const LANG_COOKIE = "lang";
export const DEFAULT_LANG: Lang = "pl";

export function isLang(value: string): value is Lang {
  return value === "pl" || value === "en";
}

export function normalizeLang(value: string | null | undefined): Lang {
  if (!value) return DEFAULT_LANG;
  const lower = value.toLowerCase();
  return isLang(lower) ? lower : DEFAULT_LANG;
}

