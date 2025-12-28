import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesGrid } from "@/components/services/services-grid"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Orthodontic Services - Clear Aligners & Braces | Dr. Ayman Zain",
  description:
    "Explore our comprehensive orthodontic services including clear aligners, traditional braces, and personalized treatment plans. Transform your smile with advanced technology.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ServicesGrid />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
