import dynamic from "next/dynamic"
import type { Metadata } from "next"
import HeroSection from "@/components/home/hero-section"
import { SchemaOrg } from "@/components/schema-org"
import { testimonialsData } from "@/mock-data/testimonials"
import { beforeAfterData } from "@/mock-data/beforeAfter"
import { getFeaturedServices } from "@/services/service-service"

const StatsSection = dynamic(() => import("@/components/home/stats-section"))
const ServicesSection = dynamic(() => import("@/components/home/services-section"))
const BeforeAfterSection = dynamic(() => import("@/components/home/before-after-section"))
const TestimonialsSection = dynamic(() => import("@/components/home/testimonials-section"))
const CTASection = dynamic(() => import("@/components/home/cta-section"))

interface PageProps {
  params: Promise<{ lang: string }>
}

// Metadata 
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: langParam } = await params
  const lang: "ar" | "en" = langParam === "ar" ? "ar" : "en"
  const isAr = lang === "ar"

  return {
    title: isAr
      ? "أفضل طبيب تقويم أسنان في مكة المكرمة – د. أيمن زين"
      : "Top Orthodontist in Mecca – Dr. Ayman Zain",
    description: isAr
      ? "د. أيمن زين أخصائي تقويم الأسنان في مكة المكرمة. خبرة 23+ سنة في التقويم الشفاف والأسلاك. احجز استشارتك المجانية اليوم."
      : "Dr. Ayman Zain, top orthodontist in Mecca with 23+ years in clear aligners & braces. Book your free consultation today.",
    alternates: {
      canonical: `https://makkahorthodontist.com/${lang}`,
      languages: {
        "ar-SA": "https://makkahorthodontist.com/ar",
        "en-US": "https://makkahorthodontist.com/en",
      },
    },
  }
}

export default async function HomePage({ params }: Readonly<PageProps>) {
  const { lang: routeLang } = await params
  const lang: "en" | "ar" = routeLang === "en" ? "en" : "ar"

  const services = await getFeaturedServices()
  
  return (
    <>
      {/* Schema.org — MedicalBusiness + Physician + WebSite */}
      <SchemaOrg lang={lang} page="home" />

      <HeroSection lang={lang} />
      <StatsSection lang={lang} />
      <ServicesSection services={services} lang={lang} />
      <BeforeAfterSection beforeAfterData={beforeAfterData} lang={lang} />
      <TestimonialsSection testimonialsData={testimonialsData} lang={lang} />
      <CTASection lang={lang} />
    </>
  )
}
