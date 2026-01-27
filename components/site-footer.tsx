"use client"

import Link from "next/link"
import { Smile, Phone, Mail, MapPin } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { cn } from "@/lib/utils"
import {
  SiSnapchat,
  SiTiktok,
  SiLinphone,
  SiGmail,
  SiInstagram,
  SiX,
  SiYoutube,
  SiWhatsapp,
} from 'react-icons/si'

export function SiteFooter() {
  const { message, dir, locale } = useLocale()
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { key: "nav_about", href: "/about" },
    { key: "nav_services", href: "/services" },
    { key: "nav_blog", href: "/blog" },
    { key: "nav_contact", href: "/contact" },
  ]

  return (
    <footer className="bg-secondary/30 border-t border-border" dir={dir}>
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
          <div className={cn("space-y-4")}>
            <h3 className="font-semibold">{message("footer_quickLinks")}</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.key}
                  href={`/${locale}${link.href}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {message(link.key)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className={cn("space-y-4", dir === "rtl" && "text-right")}>
            <h3 className="font-semibold">{message("footer_contact")}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <SiLinphone className="h-4 w-4 text-primary" />
                <span dir="ltr">{message("footer_phone")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <SiGmail className="h-5 w-5" />
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
                href="https://www.snapchat.com/@drayma3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <SiSnapchat className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/d.ymnzy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@drayman75?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <SiTiktok className="h-5 w-5" />
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
