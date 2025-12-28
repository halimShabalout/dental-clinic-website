"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import messagesData from "@/locales/message-keys.json";

type Locale = "en" | "ar";
type Messages = Record<string, string>;

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  message: (key: string) => string;
  isHydrated: boolean;
  dir: "ltr" | "rtl";
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const LANGUAGES: Locale[] = ["en", "ar"];
const RTL_LANGS: Locale[] = ["ar"];

export function LocaleProvider({
  children,
  userLang,
}: {
  children: React.ReactNode;
  userLang?: string;
}) {
  const [locale, setLocale] = useState<Locale>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    let initial: Locale = "en";

    if (userLang && LANGUAGES.includes(userLang as Locale)) {
      initial = userLang as Locale;
    } else {
      const stored = localStorage.getItem("locale");
      if (stored && LANGUAGES.includes(stored as Locale)) {
        initial = stored as Locale;
      }
    }

    setLocale(initial);
    setIsHydrated(true);
  }, [userLang]);

  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL_LANGS.includes(locale) ? "rtl" : "ltr";
  }, [locale, isHydrated]);

  const messages: Messages = useMemo(() => {
    return messagesData.data[locale] ?? {};
  }, [locale]);

  const message = (key: string) => {
    return messages[key] ?? key;
  };

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        message,
        isHydrated,
        dir: RTL_LANGS.includes(locale) ? "rtl" : "ltr",
      }}
    >
      {isHydrated ? children : null}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }
  return context;
}
