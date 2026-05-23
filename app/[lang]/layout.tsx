import { ReactNode } from "react";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/locale-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import FloatingActionButtons from "@/components/floating-action-buttons";

const BASE_URL = "https://makkahorthodontist.com";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang: "ar" | "en" = langParam === "ar" ? "ar" : "en";

  const isAr = lang === "ar";

  return {
    title: {
      default: isAr
        ? "أفضل طبيب تقويم أسنان في مكة المكرمة – د. أيمن زين"
        : "Top Orthodontist in Mecca – Dr. Ayman Zain",
      template: isAr
        ? "%s | د. أيمن زين – تقويم الأسنان مكة"
        : "%s | Dr. Ayman Zain – Orthodontist Mecca",
    },

    description: isAr
      ? "د. أيمن زين أخصائي تقويم الأسنان في مكة المكرمة. خبرة أكثر من 23 سنة في التقويم الشفاف والأسلاك وتصحيح الابتسامة بأحدث التقنيات الطبية."
      : "Dr. Ayman Zain, specialist orthodontist in Mecca with 23+ years of experience in clear aligners, braces, and smile correction using the latest technology.",

    keywords: isAr
      ? [
          "تقويم أسنان مكة",
          "دكتور تقويم أسنان مكة المكرمة",
          "تقويم شفاف مكة",
          "أفضل طبيب أسنان مكة",
          "تقويم أسنان للكبار",
          "تقويم أسنان للأطفال",
          "د أيمن زين",
          "تقويم invisible aligners",
          "تصحيح الابتسامة مكة",
          "تقويم أسنان بدون أسلاك",
        ]
      : [
          "orthodontist mecca",
          "clear aligners mecca",
          "braces makkah",
          "dr ayman zain",
          "invisible aligners saudi arabia",
          "orthodontic treatment mecca",
          "smile correction mecca",
          "best orthodontist makkah",
        ],

    //  hreflang — toll search engines about language and regional targeting of pages
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        "ar-SA": `${BASE_URL}/ar`,
        "en-US": `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/ar`,
      },
    },

    openGraph: {
      type: "website",
      siteName: "Dr. Ayman Zain Orthodontics",
      title: isAr
        ? "أفضل طبيب تقويم أسنان في مكة المكرمة – د. أيمن زين"
        : "Top Orthodontist in Mecca – Dr. Ayman Zain",
      description: isAr
        ? "أخصائي تقويم أسنان في مكة المكرمة. تقويم شفاف، أسلاك، وتصحيح الابتسامة بأكثر من 23 سنة خبرة."
        : "Orthodontist in Mecca specializing in clear aligners and smile correction with 23+ years of experience.",
      url: `${BASE_URL}/${lang}`,
      locale: isAr ? "ar_SA" : "en_US",
      alternateLocale: isAr ? "en_US" : "ar_SA",
      images: [
        {
          url: "/dr-ayman.png",
          width: 1200,
          height: 630,
          alt: isAr
            ? "د. أيمن زين – أخصائي تقويم الأسنان في مكة المكرمة"
            : "Dr. Ayman Zain – Orthodontist in Mecca",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: isAr
        ? "أفضل طبيب تقويم أسنان في مكة – د. أيمن زين"
        : "Top Orthodontist in Mecca – Dr. Ayman Zain",
      description: isAr
        ? "أخصائي تقويم أسنان في مكة المكرمة. تقويم شفاف وأسلاك بخبرة 23 سنة."
        : "Orthodontist in Mecca. Clear aligners and braces with 23+ years of experience.",
      images: ["/dr-ayman.png"],
    },
  };
}

export default async function LangLayout({ children, params }: Readonly<LayoutProps>) {
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
