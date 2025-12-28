"use client"

import { useState, useEffect } from "react"
import type { Doctor } from "@/types"
import { getDoctorInfo } from "@/services/doctor-service"

export function useDoctor() {
  const [doctor, setDoctor] = useState<Doctor | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getDoctorInfo()
      .then(setDoctor)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { doctor, loading, error }
}
