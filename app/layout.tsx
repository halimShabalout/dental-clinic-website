import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LocaleProvider } from "@/lib/locale-context"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-arabic",
})

export const metadata: Metadata = {
  title: {
    default:
      "تقويم شفاف في مكة | د. أيمن زين | Orthodontist & Clear Aligners",
    template:
      "%s | تقويم شفاف مكة – د. أيمن زين",
  },
  description:
    "د. أيمن زين، أخصائي تقويم الأسنان في مكة المكرمة. خبرة أكثر من 23 سنة في التقويم الشفاف (Invisible Braces) وتصحيح الابتسامة بأحدث التقنيات الطبية.",
  keywords: [
    "تقويم شفاف مكة",
    "تقويم الأسنان مكة",
    "دكتور تقويم أسنان مكة",
    "تقويم بدون أسلاك",
    "Invisible braces Mecca",
    "Clear aligners Mecca",
    "Orthodontist Mecca",
    "Dr Ayman Zain",
  ],
  authors: [{ name: "Dr. Ayman Zain" }],
  creator: "Dr. Ayman Zain",
  applicationName: "Dr. Ayman Zain Orthodontics",
  metadataBase: new URL("https://draymanzain.com"),
  alternates: {
    canonical: "/",
    languages: {
      ar: "/ar",
      en: "/en",
    },
  },
  openGraph: {
    title: "تقويم شفاف في مكة | د. أيمن زين",
    description:
      "أخصائي تقويم أسنان في مكة المكرمة متخصص في التقويم الشفاف وتصحيح الابتسامة بأحدث التقنيات.",
    url: "https://draymanzain.com",
    siteName: "Dr. Ayman Zain Orthodontics",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "تقويم شفاف في مكة | د. أيمن زين",
    description:
      "تقويم أسنان شفاف بدون أسلاك في مكة المكرمة – خبرة أكثر من 23 سنة.",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1f3a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Dr. Ayman Zain Orthodontics",
    alternateName: "د. أيمن زين – تقويم أسنان",
    url: "https://draymanzain.com",
    description:
      "عيادة متخصصة في تقويم الأسنان والتقويم الشفاف في مكة المكرمة.",
    medicalSpecialty: "Orthodontics",
    address: {
      "@type": "PostalAddress",
      addressLocality: "مكة المكرمة",
      addressRegion: "منطقة مكة",
      addressCountry: "SA",
    },
    areaServed: {
      "@type": "City",
      name: "Mecca",
    },
    physician: {
      "@type": "Physician",
      name: "Dr. Ayman Zain",
    },
    makesOffer: [
      { "@type": "MedicalProcedure", name: "Clear Aligners" },
      { "@type": "MedicalProcedure", name: "Invisible Braces" },
      { "@type": "MedicalProcedure", name: "Orthodontic Consultation" },
    ],
  }

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`font-sans antialiased ${ibmPlexArabic.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
