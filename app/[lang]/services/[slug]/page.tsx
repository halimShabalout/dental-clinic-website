import { notFound } from "next/navigation"
import  ServiceDetail  from "@/components/services/service-detail"
import { getServiceBySlug } from "@/services/service-service"

type Props = {
  params: Promise<{ slug: string, lang: string }>
}

export default async function ServicePage({ params }: Props) {
  const { slug, lang: routeLang } = await params
  const lang: 'en' | 'ar' = routeLang === 'en' ? 'en' : 'ar'
  const service = await getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <ServiceDetail service={service} lang={lang} />
    </>
  )
}
