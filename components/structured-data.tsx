"use client"

import Script from "next/script"
import { useDoctor } from "@/hooks/use-doctor"

interface StructuredDataProps {
  locale: "en" | "ar"
}

export function StructuredData({ locale }: StructuredDataProps) {
  const { doctor } = useDoctor()
  if (!doctor) return null

  const t = doctor.translated[locale]

  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: t.name,
    description: t.bio,
    image: doctor.imageUrl,
    jobTitle: t.title,
    worksFor: {
      "@type": "MedicalBusiness",
      name: "Zain Orthodontic Center",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Medical Street",
        addressLocality: "Cairo",
        addressCountry: "Egypt",
      },
      telephone: "+20 123 456 7890",
      email: "info@draymanzain.com",
    },
    alumniOf: t.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu,
    })),
  }

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://draymanzain.com",
    name: "Dr. Ayman Zain - Orthodontic Center",
    description: "Expert orthodontic care specializing in clear aligners and smile transformation",
    url: "https://draymanzain.com",
    telephone: "+20 123 456 7890",
    email: "info@draymanzain.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Medical Street",
      addressLocality: "Cairo",
      addressCountry: "Egypt",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.0444",
      longitude: "31.2357",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    medicalSpecialty: "Orthodontics",
    priceRange: "$$",
  }

  return (
    <>
      <Script
        id="doctor-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />
      <Script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  )
}
