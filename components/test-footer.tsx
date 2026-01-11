'use client'

import Link from "next/link"
import { Smile } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { cn } from "@/lib/utils"

interface FooterProps {
  contactInfo?: {
    phone?: string
    email?: string
    address?: string
  }
  socialLinks?: Array<{ icon: React.ReactNode; url: string }>
}

export function SiteFooter({ contactInfo, socialLinks }: FooterProps) {
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
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>

          {/* Brand */}
          <div className={cn("space-y-4")}>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
                <Smile className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-lg">{message("footer_doctorName")}</p>
                <p className="text-sm text-muted-foreground">{message("footer_orthodontist")}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{message("footer_tagline")}</p>
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
          <div className={cn("space-y-4")}>
            <h3 className="font-semibold">{message("footer_contact")}</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              {contactInfo?.phone && <div dir="ltr">{contactInfo.phone}</div>}
              {contactInfo?.email && <div>{contactInfo.email}</div>}
              {contactInfo?.address && <div>{contactInfo.address}</div>}
            </div>
          </div>

          {/* Social Links */}
          <div className={cn("space-y-4")}>
            <h3 className="font-semibold">{message("footer_followUs")}</h3>
            <div className={`flex gap-3 ${dir === 'rtl' ? 'justify-end flex-row-reverse' : 'justify-start'}`}>
              {socialLinks?.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Social Link"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {message("footer_doctorName")}. {message("footer_rights")}.
          </p>
        </div>
      </div>
    </footer>
  )
}
