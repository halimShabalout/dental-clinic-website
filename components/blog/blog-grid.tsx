"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useBlogPosts, useCategories } from "@/hooks/use-blog"
import { useLocale } from "@/lib/locale-context"

export function BlogGrid() {
  const { posts, loading } = useBlogPosts()
  const { categories } = useCategories()
  const { locale, message } = useLocale()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">{message("blog_loading")}</div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">{message("blog_page_title")}</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              {message("blog_page_subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border bg-background/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              {message("blog_all_posts")}
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post, index) => {
              const translated = post.translated?.[locale] || {
                title: post.title,
                excerpt: post.excerpt,
              }

              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300 group">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative overflow-hidden rounded-t-xl">
                        <img
                          src={post.imageUrl || "/placeholder.svg"}
                          alt={translated.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                          {post.category}
                        </Badge>
                      </div>
                    </Link>
                    <CardHeader>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString(
                              locale === "ar" ? "ar-EG" : "en-US",
                              { dateStyle: "long" }
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>
                            {post.readTime} {message("blog_min_read")}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {translated.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">{translated.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" asChild className="w-full group/btn">
                        <Link href={`/blog/${post.slug}`}>
                          {message("blog_read_article")}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
