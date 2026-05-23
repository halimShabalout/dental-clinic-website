"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Testimonial } from "@/types/index";
import { useLocale } from "@/lib/locale-context";

interface TestimonialsSectionProps {
  testimonialsData: Testimonial[];
  lang: "en" | "ar";
}

const StarRating = memo(function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
      ))}
    </div>
  );
});

const TestimonialCard = memo(function TestimonialCard({
  testimonial,
  lang,
  index,
}: {
  testimonial: Testimonial;
  lang: "en" | "ar";
  index: number;
}) {
  const t = testimonial.translated?.[lang] ?? testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="h-full hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <Quote className="h-8 w-8 text-primary/30" aria-hidden="true" />
            <StarRating rating={testimonial.rating} />
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {t.comment}
          </p>

          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <Avatar>
              <AvatarImage
                src={testimonial.imageUrl || "/placeholder.svg"}
                alt={t.patientName}
              />
              <AvatarFallback aria-hidden="true">
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
});

const TestimonialsSection = ({ testimonialsData, lang }: TestimonialsSectionProps) => {
  const { message, dir } = useLocale();

  return (
    <section className="py-20" dir={dir}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              lang={lang}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;