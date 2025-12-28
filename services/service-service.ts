// Service layer for services data - simulates API calls

import { servicesData } from "@/mock-data/services"
import type { Service } from "@/types"

export async function getAllServices(): Promise<Service[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return servicesData
}

export async function getFeaturedServices(): Promise<Service[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return servicesData.filter((service) => service.featured)
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return servicesData.find((service) => service.slug === slug) || null
}
