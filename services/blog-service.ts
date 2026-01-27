import { blogPostsData } from "@/mock-data/blog"
import type { BlogPost } from "@/types"

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))

  return [...blogPostsData].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return blogPostsData.find((post) => post.slug === slug) || null
}

