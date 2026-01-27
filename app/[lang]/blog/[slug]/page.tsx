import { notFound } from "next/navigation"
import { BlogPost } from "@/components/blog/blog-post"
import { getBlogPostBySlug } from "@/services/blog-service"

type Props = {
  params: Promise<{ slug: string, lang: string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, lang: routeLang } = await params
  const lang: 'en' | 'ar' = routeLang === 'en' ? 'en' : 'ar'

  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return <BlogPost post={post} lang={lang} />

}
