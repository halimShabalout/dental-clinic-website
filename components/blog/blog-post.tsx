"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { BlogPost as BlogPostType } from "@/types"
import { useLocale } from "@/lib/locale-context"

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  const { locale, message } = useLocale()

  const translated = post.translated?.[locale] || {
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Button variant="ghost" asChild>
                <Link href="/blog">
                  {locale === "ar" ? <ArrowLeft className="ml-2 h-4 w-4" /> : <ArrowLeft className="mr-2 h-4 w-4" />}
                  {message("blog_back")}
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="space-y-6"
            >
              <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">{translated.title}</h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString(locale === "ar" ? "ar-EG" : "en-US", { dateStyle: "long" })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} {message("blog_min_read")}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={post.imageUrl || "/placeholder.svg"} alt={translated.title} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed">{translated.excerpt}</p>
              <Separator className="my-8" />
              <div className="space-y-6 text-foreground leading-relaxed">
                <p>{translated.content}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
                <h2 className="text-3xl font-bold mt-12 mb-6">{message("blog_key_takeaways")}</h2>
                <ul className="space-y-3">
                  <li>{message("blog_takeaway_1")}</li>
                  <li>{message("blog_takeaway_2")}</li>
                  <li>{message("blog_takeaway_3")}</li>
                  <li>{message("blog_takeaway_4")}</li>
                </ul>
                <h2 className="text-3xl font-bold mt-12 mb-6">{message("blog_conclusion")}</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance">{message("blog_cta_title")}</h2>
            <p className="text-lg text-muted-foreground text-pretty">{message("blog_cta_description")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">{message("blog_cta_book")}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">{message("blog_cta_read_more")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
