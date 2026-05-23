import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { BlogPost } from "@/components/blog/blog-post"
import { BlogPostingSchema } from "@/components/schema-org"
import { getBlogPostBySlug, getAllBlogPosts } from "@/services/blog-service"

type Props = {
  params: Promise<{ slug: string; lang: string }>
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  const langs = ["ar", "en"]
  return langs.flatMap((lang) =>
    posts.map((post) => ({ lang, slug: post.slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lang: langParam } = await params
  const lang: "ar" | "en" = langParam === "ar" ? "ar" : "en"

  const post = await getBlogPostBySlug(slug)
  if (!post || !post.translated) return {}

  const t = post.translated[lang]
  const isAr = lang === "ar"
  const BASE_URL = "https://makkahorthodontist.com"

  return {
    title: t.title,
    description: t.excerpt,
    keywords: isAr
      ? [...(t.tags || []), "تقويم أسنان مكة", "مدونة تقويم الأسنان", "د أيمن زين"]
      : [...(t.tags || []), "orthodontist mecca", "orthodontics blog", "dr ayman zain"],
    authors: [{ name: t.author }],
    alternates: {
      canonical: `${BASE_URL}/${lang}/blog/${slug}`,
      languages: {
        "ar-SA": `${BASE_URL}/ar/blog/${slug}`,
        "en-US": `${BASE_URL}/en/blog/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: t.title,
      description: t.excerpt,
      url: `${BASE_URL}/${lang}/blog/${slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [t.author],
      tags: t.tags,
      images: [{ url: post.imageUrl, alt: t.title, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.excerpt,
      images: [post.imageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: Readonly<Props>) {
  const { slug, lang: routeLang } = await params
  const lang: "en" | "ar" = routeLang === "en" ? "en" : "ar"

  const post = await getBlogPostBySlug(slug)
  if (!post?.translated) notFound()

  const t = post.translated[lang]

  return (
    <>
      <BlogPostingSchema
        lang={lang}
        title={t.title}
        excerpt={t.excerpt}
        slug={post.slug}
        imageUrl={post.imageUrl}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
      />
      <BlogPost post={post} lang={lang} />
    </>
  )
}
