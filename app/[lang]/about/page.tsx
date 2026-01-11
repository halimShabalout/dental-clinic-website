import type { Metadata } from "next";
import { DoctorProfile } from "@/components/about/doctor-profile";
import CTASection from "@/components/home/cta-section";
import { getDoctorInfo } from "@/services/doctor-service";

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
      title: "عن الدكتور أيمن زين | أخصائي تقويم الأسنان",
      description:
        "تعرّف على الدكتور أيمن زين، أخصائي تقويم الأسنان بخبرة تزيد عن 23 عامًا.",
      keywords: [
        "تقويم أسنان",
        "تقويم شفاف",
        "دكتور تقويم أسنان مكة",
        "تقويم بدون أسلاك",
        "تقويم الأسنان للأطفال والكبار",
        "تقويم الأسنان مكة",
        "Dr Ayman Zain",
        "Orthodontist Mecca",
      ],
      alternates: { canonical: "/ar/about" },
      openGraph: {
        title: "عن الدكتور أيمن زين | أخصائي تقويم الأسنان",
        description:
          "تعرّف على الدكتور أيمن زين، أخصائي تقويم الأسنان بخبرة تزيد عن 23 عامًا.",
        url: "/ar/about",
        siteName: "Dr. Ayman Zain Orthodontics",
        type: "website",
      },
    };
  }

  return {
    title: "About Dr. Ayman Zain | Orthodontist",
    description:
      "Learn about Dr. Ayman Zain, orthodontist with over 23 years of experience.",
    keywords: [
      "Orthodontist Mecca",
      "Clear aligners Mecca",
      "Invisible braces Mecca",
      "Dr Ayman Zain",
    ],
    alternates: { canonical: "/en/about" },
    openGraph: {
      title: "About Dr. Ayman Zain | Orthodontist",
      description:
        "Learn about Dr. Ayman Zain, orthodontist with over 23 years of experience.",
      url: "/en/about",
      siteName: "Dr. Ayman Zain Orthodontics",
      type: "website",
    },
  };
}

/* =========================
   Page (Server Component)
========================= */
export default async function AboutPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  const lang: "ar" | "en" = langParam === "ar" ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  const doctor = await getDoctorInfo(); 

  return (
    <>
      <DoctorProfile doctor={doctor} lang={lang} dir={dir} />
      <CTASection lang={lang} />
    </>
  );
}
