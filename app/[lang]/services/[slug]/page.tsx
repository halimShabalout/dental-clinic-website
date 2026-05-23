import { notFound } from "next/navigation"
import type { Metadata } from "next"
import ServiceDetail from "@/components/services/service-detail"
import { ServiceSchema } from "@/components/schema-org"
import { getServiceBySlug, getAllServices } from "@/services/service-service"

type Props = {
  params: Promise<{ slug: string; lang: string }>
}

// generateStaticParams — Pre-render 
export async function generateStaticParams() {
  const services = await getAllServices()
  const langs = ["ar", "en"]
  return langs.flatMap((lang) =>
    services.map((service) => ({ lang, slug: service.slug }))
  )
}

//  Metadata 
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lang: langParam } = await params
  const lang: "ar" | "en" = langParam === "ar" ? "ar" : "en"

  const service = await getServiceBySlug(slug)
  if (!service) return {}

  const t = service.translated[lang]
  const isAr = lang === "ar"
  const BASE_URL = "https://makkahorthodontist.com"

  return {
    title: `${t.name} – ${isAr ? "د. أيمن زين مكة" : "Dr. Ayman Zain Mecca"}`,
    description: t.description,
    keywords: isAr
      ? [`${t.name}`, "تقويم أسنان مكة", "د أيمن زين", "تقويم شفاف مكة المكرمة"]
      : [`${t.name}`, "orthodontist mecca", "dr ayman zain", "clear aligners makkah"],
    alternates: {
      canonical: `${BASE_URL}/${lang}/services/${slug}`,
      languages: {
        "ar-SA": `${BASE_URL}/ar/services/${slug}`,
        "en-US": `${BASE_URL}/en/services/${slug}`,
      },
    },
    openGraph: {
      title: t.name,
      description: t.description,
      url: `${BASE_URL}/${lang}/services/${slug}`,
      images: [{ url: service.imageUrl, alt: t.name }],
      type: "website",
    },
  }
}

export default async function ServicePage({ params }: Readonly<Props>) {
  const { slug, lang: routeLang } = await params
  const lang: "en" | "ar" = routeLang === "en" ? "en" : "ar"
  const service = await getServiceBySlug(slug)

  if (!service) notFound()

  return (
    <>
      {/* Schema.org MedicalProcedure */}
      <ServiceSchema
        lang={lang}
        name={service.translated[lang].name}
        description={service.translated[lang].description}
        slug={service.slug}
        imageUrl={service.imageUrl}
      />
      <ServiceDetail service={service} lang={lang} />
    </>
  )
}
