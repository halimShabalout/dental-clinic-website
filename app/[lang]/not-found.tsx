import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-8">

            <div className="space-y-4">
              <h1 className="text-9xl font-bold text-primary">404</h1>

              <h2 className="text-3xl md:text-4xl font-bold">
                Page Not Found
              </h2>

              <p className="text-lg text-muted-foreground">
                Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="group">
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild className="group bg-transparent">
                <Link href="/contact">
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  Contact Us
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
