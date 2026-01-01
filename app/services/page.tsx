import type { Metadata } from "next"
import { ServicesGrid } from "@/components/services/services-grid"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
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
  openGraph: {
    title: "خدمات تقويم الأسنان – د. أيمن زين",
    description:
      "استكشف خدماتنا في التقويم الشفاف والأسلاك وخطط العلاج المخصصة لتحسين ابتسامتك.",
    type: "website",
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesGrid />
      <CTASection />
    </>
  )
}
