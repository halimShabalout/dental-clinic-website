import { ReactNode } from "react";
import { LocaleProvider } from "@/lib/locale-context";

interface LayoutProps {
  children: ReactNode;
  params: { lang: string }; 
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang: routeLang } = await params;
  const lang = routeLang === "ar" ? "ar" : "en";
    console.log('اللغة',lang);
    
  return (
    <LocaleProvider userLang={lang}>
      {children}
    </LocaleProvider>
  );
}
