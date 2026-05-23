import type React from "react";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { cookies } from "next/headers";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://makkahorthodontist.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: "Dr. Ayman Zain Orthodontics",

  // Default fallback — overridden by [lang]/layout.tsx
  title: {
    default: "أفضل طبيب تقويم أسنان في مكة المكرمة – د. أيمن زين",
    template: "%s | د. أيمن زين – تقويم الأسنان مكة",
  },
  description:
    "د. أيمن زين أخصائي تقويم الأسنان في مكة المكرمة. خبرة أكثر من 23 سنة في التقويم الشفاف والأسلاك وتصحيح الابتسامة.",

  keywords: [
    "تقويم أسنان مكة",
    "دكتور تقويم أسنان مكة المكرمة",
    "تقويم شفاف مكة",
    "د أيمن زين",
    "orthodontist mecca",
    "clear aligners mecca",
  ],

  authors: [{ name: "Dr. Ayman Zain", url: BASE_URL }],
  creator: "Dr. Ayman Zain",
  publisher: "Dr. Ayman Zain Orthodontics",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph defaults
  openGraph: {
    type: "website",
    siteName: "Dr. Ayman Zain Orthodontics",
    title: "أفضل طبيب تقويم أسنان في مكة المكرمة – د. أيمن زين",
    description:
      "أخصائي تقويم أسنان في مكة المكرمة. تقويم شفاف، أسلاك، وتصحيح الابتسامة بأحدث التقنيات.",
    url: BASE_URL,
    locale: "ar_SA",
    images: [
      {
        url: "/dr-ayman.png",
        width: 1200,
        height: 630,
        alt: "د. أيمن زين – أخصائي تقويم الأسنان في مكة المكرمة",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "أفضل طبيب تقويم أسنان في مكة – د. أيمن زين",
    description:
      "أخصائي تقويم أسنان في مكة المكرمة. تقويم شفاف وأسلاك بخبرة 23 سنة.",
    images: ["/dr-ayman.png"],
  },

  // Verification (أضف هنا كود Google Search Console لاحقاً)
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE",
  },

  // hreflang via alternates
  alternates: {
    canonical: BASE_URL,
    languages: {
      "ar-SA": `${BASE_URL}/ar`,
      "en-US": `${BASE_URL}/en`,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1f3a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value === "en" ? "en" : "ar";
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* hreflang tags — مهم لـ SEO متعدد اللغات */}
        <link rel="alternate" hrefLang="ar-SA" href="https://makkahorthodontist.com/ar" />
        <link rel="alternate" hrefLang="en-US" href="https://makkahorthodontist.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://makkahorthodontist.com/ar" />
      </head>
      <body className={`${cairo.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
