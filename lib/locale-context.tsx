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
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const LANGUAGES: Locale[] = ["en", "ar"];
const RTL_LANGS: Locale[] = ["ar"];
const DEFAULT_LOCALE: Locale = "ar";

export function LocaleProvider({
  children,
  userLang,
}: {
  children: React.ReactNode;
  userLang?: string;
}) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    let initial: Locale = DEFAULT_LOCALE;

    if (userLang && LANGUAGES.includes(userLang as Locale)) {
      initial = userLang as Locale;
    } else {
      const stored = localStorage.getItem("locale");
      if (stored && LANGUAGES.includes(stored as Locale)) {
        initial = stored as Locale;
      }
    }

    const pathLang = window.location.pathname.split("/")[1];
    if (LANGUAGES.includes(pathLang as Locale)) {
      initial = pathLang as Locale;
    }

    setLocale(initial);
    setIsHydrated(true);
  }, [userLang]);

  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem("locale", locale);
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL_LANGS.includes(locale) ? "rtl" : "ltr";

    const segments = window.location.pathname.split("/");
    if (!LANGUAGES.includes(segments[1] as Locale)) {
      segments.splice(1, 0, locale);
      window.history.replaceState(null, "", segments.join("/"));
    }
  }, [locale, isHydrated]);

  const toggleLocale = () => {
    const newLocale: Locale = locale === "en" ? "ar" : "en";
    setLocale(newLocale);

    const segments = window.location.pathname.split("/");
    if (LANGUAGES.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    window.location.href = segments.join("/");
  };

  const messages: Messages = useMemo(() => {
    return messagesData.data[locale] ?? {};
  }, [locale]);

  const message = (key: string) => messages[key] ?? key;

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        message,
        isHydrated,
        dir: RTL_LANGS.includes(locale) ? "rtl" : "ltr",
        toggleLocale,
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
