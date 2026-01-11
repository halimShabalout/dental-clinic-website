import type { Metadata } from "next";
import ContactInfo  from "@/components/contact/contact-info";

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
      title: "تواصل مع د. أيمن زين – احجز استشارتك لتقويم الأسنان",
      description:
        "تواصل مع د. أيمن زين لحجز استشارة مجانية لتقويم الأسنان. خدمات متخصصة في التقويم الشفاف وتصحيح الابتسامة في مكة المكرمة.",
      keywords: [
        "تواصل مع دكتور تقويم أسنان",
        "حجز استشارة تقويم الأسنان",
        "تقويم شفاف مكة",
        "تصحيح الابتسامة",
        "دكتور أيمن زين",
      ],
      alternates: { canonical: "/ar/contact" },
      openGraph: {
        title: "تواصل مع د. أيمن زين – احجز استشارتك الآن",
        description: "احجز استشارتك المجانية لتقويم الأسنان اليوم",
        url: "/ar/contact",
        siteName: "Dr. Ayman Zain Orthodontics",
        type: "website",
      },
    };
  }

  return {
    title: "Contact Dr. Ayman Zain – Book Your Orthodontic Consultation",
    description:
      "Contact Dr. Ayman Zain to book your free orthodontic consultation. Specialized in clear aligners and smile correction in Mecca.",
    keywords: [
      "Contact Orthodontist Mecca",
      "Book orthodontic consultation",
      "Clear aligners Mecca",
      "Smile correction",
      "Dr Ayman Zain",
    ],
    alternates: { canonical: "/en/contact" },
    openGraph: {
      title: "Contact Dr. Ayman Zain – Book Your Consultation Now",
      description: "Book your free orthodontic consultation today",
      url: "/en/contact",
      siteName: "Dr. Ayman Zain Orthodontics",
      type: "website",
    },
  };
}

/* =========================
   Page
========================= */
export default async function ContactPage({ params }: PageProps) {
  const { lang: routeLang } = await params
  const lang: 'en' | 'ar' = routeLang === 'en' ? 'en' : 'ar'
  return <ContactInfo lang={lang} />;
}
