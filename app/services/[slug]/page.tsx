import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServiceDetail } from "@/components/services/service-detail"
import { getServiceBySlug } from "@/services/service-service"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.name} - Dr. Ayman Zain Orthodontics`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ServiceDetail service={service} />
      </main>
      <SiteFooter />
    </div>
  )
}
