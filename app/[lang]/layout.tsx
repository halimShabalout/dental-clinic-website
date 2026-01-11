import { ReactNode } from "react";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/locale-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang: "ar" | "en" = langParam === "ar" ? "ar" : "en";

  if (lang === "ar") {
    return {
      title: {
        default:
          "تقويم شفاف في مكة | د. أيمن زين | Orthodontist & Clear Aligners",
        template: "%s | تقويم شفاف مكة – د. أيمن زين",
      },
      description:
        "د. أيمن زين، أخصائي تقويم الأسنان في مكة المكرمة. خبرة أكثر من 23 سنة في التقويم الشفاف وتصحيح الابتسامة بأحدث التقنيات الطبية.",
      alternates: {
        canonical: "/ar",
        languages: {
          ar: "/ar",
          en: "/en",
        },
      },
      openGraph: {
        title: "تقويم شفاف في مكة | د. أيمن زين",
        description:
          "أخصائي تقويم أسنان في مكة المكرمة متخصص في التقويم الشفاف وتصحيح الابتسامة بأحدث التقنيات.",
        locale: "ar_SA",
        type: "website",
      },
    };
  }

  return {
    title: {
      default:
        "Clear Aligners in Mecca | Dr. Ayman Zain | Orthodontist",
      template: "%s | Clear Aligners Mecca – Dr. Ayman Zain",
    },
    description:
      "Dr. Ayman Zain, orthodontist in Mecca with over 23 years of experience in clear aligners and modern orthodontic treatments.",
    alternates: {
      canonical: "/en",
      languages: {
        ar: "/ar",
        en: "/en",
      },
    },
    openGraph: {
      title: "Clear Aligners in Mecca | Dr. Ayman Zain",
      description:
        "Orthodontist in Mecca specializing in clear aligners and smile correction using the latest techniques.",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps) {
  const { lang: routeLang } = await params;
  const lang: "ar" | "en" = routeLang === "ar" ? "ar" : "en";

  return (
    <LocaleProvider userLang={lang}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </LocaleProvider>
  );
}
