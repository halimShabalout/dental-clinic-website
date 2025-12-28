import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogGrid } from "@/components/blog/blog-grid"

export const metadata: Metadata = {
  title: "Orthodontics Blog - Tips, Guides & Insights | Dr. Ayman Zain",
  description:
    "Explore expert articles on clear aligners, orthodontics, dental care, and smile transformation. Stay informed with the latest insights from Dr. Ayman Zain.",
  keywords: ["orthodontics blog", "clear aligners guide", "dental care tips", "smile transformation"],
}

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <BlogGrid />
      </main>
      <SiteFooter />
    </div>
  )
}
