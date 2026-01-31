import { ReactNode } from "react";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/locale-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import FloatingActionButtons from '@/components/floating-action-buttons'

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
        default: "أشهر أطباء تقويم الأسنان في مكة - الدكتور أيمن زين",
        template: "%s | أشهر أطباء تقويم الأسنان في مكة – الدكتور أيمن زين",
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
        title: "أشهر أطباء تقويم الأسنان في مكة - الدكتور أيمن زين",
        description:
          "أخصائي تقويم أسنان في مكة المكرمة متخصص في التقويم الشفاف وتصحيح الابتسامة بأحدث التقنيات.",
        locale: "ar_SA",
        type: "website",
      },
    };
  }
  return {
    title: {
      default: "Top Orthodontist in Mecca – Dr. Ayman Zain",
      template: "%s | Top Orthodontist in Mecca – Dr. Ayman Zain",
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
      title: "Top Orthodontist in Mecca – Dr. Ayman Zain",
      description:
        "Orthodontist in Mecca specializing in clear aligners and smile correction using the latest techniques.",
      locale: "en_US",
      type: "website",
    },
  };

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
          <FloatingActionButtons />
        </div>
      </LocaleProvider>
    );
  }
