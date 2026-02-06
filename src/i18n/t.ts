import type { Lang } from "./lang";
import type { MessageKey } from "./messages";
import { messages } from "./messages";

export function t(lang: Lang, key: MessageKey): string {
  return messages[lang][key] ?? messages.pl[key] ?? key;
}

