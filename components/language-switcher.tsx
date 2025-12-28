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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
          <span className="sr-only">
            {locale === "ar"
              ? "تبديل اللغة"
              : "Switch language"}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLocale("en")}
          className={locale === "en" ? "font-semibold" : ""}
        >
          {locale === "ar"
            ? "الإنجليزية"
            : "English"}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setLocale("ar")}
          className={locale === "ar" ? "font-semibold" : ""}
        >
          {locale === "ar"
            ? "العربية"
            : "Arabic"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
