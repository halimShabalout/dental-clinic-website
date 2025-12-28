"use client"

import Link from "next/link"
import { Smile, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  const { message, dir } = useLocale()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className={cn("space-y-4", dir === "rtl" && "text-right")}>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
                <Smile className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-lg">{message("footer_doctorName")}</p>
                <p className="text-sm text-muted-foreground">
                  {message("footer_orthodontist")}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {message("footer_tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div className={cn("space-y-4", dir === "rtl" && "text-right")}>
            <h3 className="font-semibold">{message("footer_quickLinks")}</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {message("nav_about")}
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {message("nav_services")}
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {message("nav_blog")}
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {message("nav_contact")}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className={cn("space-y-4", dir === "rtl" && "text-right")}>
            <h3 className="font-semibold">{message("footer_contact")}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span dir="ltr">{message("footer_phone")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span dir="ltr">{message("footer_email")}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>{message("footer_address")}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className={cn("space-y-4", dir === "rtl" && "text-right")}>
            <h3 className="font-semibold">{message("footer_followUs")}</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {message("footer_doctorName")}. {message("footer_rights")}</p>
        </div>
      </div>
    </footer>
  )
}
