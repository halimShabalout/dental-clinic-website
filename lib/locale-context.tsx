"use client";

import { createContext, useContext, useMemo, useState } from "react";
import messagesData from "@/locales/message-keys.json";
import { usePathname, useRouter } from "next/navigation";

type Locale = "en" | "ar";
type Messages = Record<string, string>;

interface LocaleContextType {
  locale: Locale;
  toggleLocale: () => void;
  dir: "ltr" | "rtl";
  message: (key: string, fallback?: string) => string;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

const RTL_LANGS: Locale[] = ["ar"];

export function LocaleProvider({
  children,
  userLang = "ar",
}: {
  children: React.ReactNode;
  userLang: Locale;
}) {
  const [locale] = useState<Locale>(userLang);
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale: Locale = locale === "en" ? "ar" : "en";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  const messages: Messages = useMemo(
    () => messagesData.data[locale] ?? {},
    [locale]
  );

  const message = (key: string, fallback?: string) =>
    messages[key] ?? fallback ?? key;

  const dir: "ltr" | "rtl" = RTL_LANGS.includes(locale) ? "rtl" : "ltr";

  return (
    <LocaleContext.Provider
      value={{
        locale,
        toggleLocale,
        dir,
        message,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
