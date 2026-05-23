import dynamic from "next/dynamic"
import HeroSection from "@/components/home/hero-section"
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

export default async function HomePage({ params }: PageProps) {
  const { lang: routeLang } = await params
  const lang: 'en' | 'ar' = routeLang === 'en' ? 'en' : 'ar'

  const services = await getFeaturedServices()

  return (
    <>
      <HeroSection lang={lang} />
      <StatsSection lang={lang} />
      <ServicesSection services={services} lang={lang} />
      <BeforeAfterSection beforeAfterData={beforeAfterData} lang={lang} />
      <TestimonialsSection testimonialsData={testimonialsData} lang={lang} />
      <CTASection lang={lang} />
    </>
  )
}