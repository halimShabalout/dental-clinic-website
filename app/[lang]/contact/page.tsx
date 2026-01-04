import type { Metadata } from "next"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "تواصل مع د. أيمن زين – احجز استشارتك لتقويم الأسنان",
  description:
    "تواصل مع د. أيمن زين لحجز استشارة مجانية لتقويم الأسنان. خدمات متخصصة في التقويم الشفاف وتصحيح الابتسامة في مكة المكرمة.",
  openGraph: {
    title: "تواصل مع د. أيمن زين – احجز استشارتك الآن",
    description: "احجز استشارتك المجانية لتقويم الأسنان اليوم",
    type: "website",
  },
  keywords: [
    "تواصل مع دكتور تقويم أسنان",
    "حجز استشارة تقويم الأسنان",
    "تقويم شفاف مكة",
    "تصحيح الابتسامة",
    "دكتور أيمن زين",
  ],
}

export default function ContactPage() {
  return <ContactInfo />
}
