// Service layer for doctor data - simulates API calls

import { doctorData } from "@/mock-data/doctor"
import type { Doctor } from "@/types"

export async function getDoctorInfo(): Promise<Doctor> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return doctorData
}
