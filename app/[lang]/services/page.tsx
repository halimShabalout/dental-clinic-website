import type { Metadata } from "next";
import  ServicesGrid  from "@/components/services/services-grid";
import CTASection from "@/components/home/cta-section";
import { getAllServices } from "@/services/service-service"

interface PageProps {
  params: Promise<{ lang: string }>;
}

/* =========================
   Metadata 
========================= */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang: "ar" | "en" = langParam === "ar" ? "ar" : "en";

  if (lang === "ar") {
    return {
      title: "خدمات تقويم الأسنان – التقويم الشفاف والأسلاك | د. أيمن زين",
      description:
        "اكتشف خدماتنا الشاملة في تقويم الأسنان، بما في ذلك التقويم الشفاف، والأسلاك التقليدية، وخطط العلاج الشخصية. احصل على ابتسامة مثالية باستخدام أحدث التقنيات.",
      keywords: [
        "خدمات تقويم الأسنان",
        "تقويم شفاف مكة",
        "تقويم أسنان أسلاك",
        "خطط علاج شخصية",
        "دكتور أيمن زين",
      ],
      alternates: { canonical: "/ar/services" },
      openGraph: {
        title: "خدمات تقويم الأسنان – د. أيمن زين",
        description:
          "استكشف خدماتنا في التقويم الشفاف والأسلاك وخطط العلاج المخصصة لتحسين ابتسامتك.",
        url: "/ar/services",
        siteName: "Dr. Ayman Zain Orthodontics",
        type: "website",
      },
    };
  }

  return {
    title: "Orthodontic Services – Clear Aligners & Braces | Dr. Ayman Zain",
    description:
      "Explore our comprehensive orthodontic services, including clear aligners, traditional braces, and personalized treatment plans. Achieve your perfect smile with the latest technology.",
    keywords: [
      "Orthodontic services",
      "Clear aligners Mecca",
      "Braces Mecca",
      "Personalized treatment plans",
      "Dr Ayman Zain",
    ],
    alternates: { canonical: "/en/services" },
    openGraph: {
      title: "Orthodontic Services – Dr. Ayman Zain",
      description:
        "Explore our clear aligners, braces, and customized treatment plans to improve your smile.",
      url: "/en/services",
      siteName: "Dr. Ayman Zain Orthodontics",
      type: "website",
    },
  };
}

/* =========================
   Page
========================= */
export default async function ServicesPage({ params }: PageProps) {
  const { lang: routeLang } = await params
  const lang: 'en' | 'ar' = routeLang === 'en' ? 'en' : 'ar'
  const services = await getAllServices()

  return (
    <>
      <ServicesGrid services={services} lang={lang} />
      <CTASection lang={lang} />
    </>
  );
}
