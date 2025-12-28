import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DoctorProfile } from "@/components/about/doctor-profile"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "About Dr. Ayman Zain - Expert Orthodontist | Clear Aligner Specialist",
  description:
    "Meet Dr. Ayman Zain, a leading orthodontist with 23+ years of experience in clear aligner therapy and smile transformation. Learn about his expertise, education, and patient-centered approach.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <DoctorProfile />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
