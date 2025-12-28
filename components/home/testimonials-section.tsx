"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonialsData } from "@/mock-data/testimonials";
import { useLocale } from "@/lib/locale-context";

export function TestimonialsSection() {
  const { message, locale } = useLocale(); 

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            {message("testimonials_title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {message("testimonials_subtitle")}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => {
            const t = testimonial.translated?.[locale] || testimonial;

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    {/* Quote & Rating */}
                    <div className="flex items-center justify-between">
                      <Quote className="h-8 w-8 text-primary/30" />
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Comment */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t.comment}
                    </p>

                    {/* Patient Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <Avatar>
                        <AvatarImage
                          src={testimonial.imageUrl || "/placeholder.svg"}
                          alt={t.patientName}
                        />
                        <AvatarFallback>
                          {t.patientName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{t.patientName}</p>
                        <p className="text-xs text-muted-foreground">{t.treatment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
