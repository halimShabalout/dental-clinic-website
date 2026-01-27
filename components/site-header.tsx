"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Smile, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { message, dir, locale, toggleLocale } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: message("nav_home") },
    { href: "/about", label: message("nav_about") },
    { href: "/services", label: message("nav_services") },
    { href: "/blog", label: message("nav_blog") },
    { href: "/contact", label: message("nav_contact") },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex h-16 items-center justify-between",
            dir === "rtl" ? "flex-row" : "flex-row-reverse"
          )}
        >
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground"
            >
              <Smile className="h-6 w-6" />
            </motion.div>

            <div className={cn("flex flex-col", dir === "rtl" ? "items-end" : "items-start")}>
              <span className="font-bold text-lg leading-none">
                {message("header_doctor_name")}
              </span>
              <span className="text-xs text-muted-foreground">
                {message("header_doctor_title")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={cn(
              "hidden md:flex items-center gap-1",
              dir === "rtl" ? "flex-row" : "flex-row-reverse"
            )}
          >
            {navItems.map((item) => (
              <Button key={item.href} variant="ghost" asChild>
                <Link href={`/${locale}${item.href}`}>{item.label}</Link>
              </Button>
            ))}
          </nav>

          {/* Actions */}
          <div className={cn("flex items-center gap-2", dir === "rtl" ? "flex-row" : "flex-row-reverse")}>
            <div className="hidden md:flex items-center gap-2">
              <ThemeSwitcher />

              {/* Language toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLocale}
                aria-label="Toggle language"
              >
                <Globe className="h-5 w-5" />
              </Button>

              <Button asChild className="ml-2">
                <Link href={`/${locale}/contact`}>{message("nav_bookConsultation")}</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  asChild
                  className="justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href={`/${locale}${item.href}`}>
                    {item.label}
                  </Link>
                </Button>
              ))}

              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <ThemeSwitcher />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleLocale}
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </div>

              <Button asChild className="mt-2">
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {message("nav_bookConsultation")}
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
