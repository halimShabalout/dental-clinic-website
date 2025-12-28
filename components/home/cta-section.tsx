"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale-context";

export function CTASection() {
  const { message, dir } = useLocale();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Calendar className="h-10 w-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            {message("cta_title")}
          </h2>

          <p className="text-lg md:text-xl text-white/90 text-pretty max-w-2xl mx-auto">
            {message("cta_subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/contact">
                {message("nav_bookConsultation")}
                <ArrowRight
                  className={`h-5 w-5 transition-transform ${
                    dir === "rtl"
                      ? "mr-2 group-hover:-translate-x-1"
                      : "ml-2 group-hover:translate-x-1"
                  }`}
                />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Link href="/services">
                {message("cta_explore_services")}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
