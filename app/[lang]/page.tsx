import HeroSection from "@/components/home/hero-section"
import StatsSection from "@/components/home/stats-section"
import ServicesSection from "@/components/home/services-section"
import BeforeAfterSection from "@/components/home/before-after-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import CTASection from "@/components/home/cta-section"

import { testimonialsData } from "@/mock-data/testimonials";
import { beforeAfterData } from "@/mock-data/beforeAfter";
import { getFeaturedServices } from "@/services/service-service"

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

      <ServicesSection services={services} lang={lang}  /> 

      <BeforeAfterSection beforeAfterData={beforeAfterData} lang={lang} />
      <TestimonialsSection testimonialsData={testimonialsData} lang={lang} />
      <CTASection lang={lang} />
    </>
  )
}
