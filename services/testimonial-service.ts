// Service layer for testimonials data - simulates API calls

import { testimonialsData } from "@/mock-data/testimonials"
import type { Testimonial } from "@/types"

export async function getAllTestimonials(): Promise<Testimonial[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return testimonialsData
}
