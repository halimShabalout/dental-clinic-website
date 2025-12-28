import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Dr. Ayman Zain - Book Your Orthodontic Consultation",
  description:
    "Get in touch with Dr. Ayman Zain to schedule your free orthodontic consultation. Expert clear aligner and orthodontic services in Cairo, Egypt.",
  openGraph: {
    title: "Contact Dr. Ayman Zain - Book Your Consultation",
    description: "Schedule your free orthodontic consultation today",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Get in Touch</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Ready to start your smile transformation journey? Contact us today to schedule your free consultation
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Google Maps Integration Placeholder</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
