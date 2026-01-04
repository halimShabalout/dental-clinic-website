"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "@/lib/locale-context";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  const changeLocale = (newLocale: "en" | "ar") => {
    if (newLocale === locale) return;

    setLocale(newLocale);

    const segments = window.location.pathname.split("/");

    if (segments[1] === "en" || segments[1] === "ar") {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join("/") + window.location.search;

    window.history.replaceState(null, "", newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
          <span className="sr-only">
            {locale === "ar" ? "تبديل اللغة" : "Switch language"}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => changeLocale("en")}
          className={locale === "en" ? "font-semibold" : ""}
        >
          {locale === "ar" ? "الإنجليزية" : "English"}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => changeLocale("ar")}
          className={locale === "ar" ? "font-semibold" : ""}
        >
          {locale === "ar" ? "العربية" : "Arabic"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
