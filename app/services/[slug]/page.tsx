import { notFound } from "next/navigation"
import { ServiceDetail } from "@/components/services/service-detail"
import { getServiceBySlug } from "@/services/service-service"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <ServiceDetail service={service} />
    </>
  )
}
