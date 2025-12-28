"use client"

import { useState, useEffect } from "react"
import type { Service } from "@/types"
import { getAllServices, getFeaturedServices, getServiceBySlug } from "@/services/service-service"

export function useServices() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getAllServices()
      .then(setServices)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { services, loading, error }
}

export function useFeaturedServices() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getFeaturedServices()
      .then(setServices)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { services, loading, error }
}

export function useService(slug: string) {
  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getServiceBySlug(slug)
      .then(setService)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [slug])

  return { service, loading, error }
}
