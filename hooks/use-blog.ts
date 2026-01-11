"use client"

import { useState, useEffect } from "react"
import type { BlogPost } from "@/types"
import { getAllBlogPosts, getBlogPostBySlug } from "@/services/blog-service"

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getAllBlogPosts()
      .then(setPosts)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { posts, loading, error }
}

export function useBlogPost(slug: string) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getBlogPostBySlug(slug)
      .then(setPost)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [slug])

  return { post, loading, error }
}

