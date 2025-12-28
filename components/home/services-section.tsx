"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFeaturedServices } from "@/hooks/use-services";
import { useLocale } from "@/lib/locale-context";

export function ServicesSection() {
  const { services, loading } = useFeaturedServices();
  const { message, dir, locale } = useLocale();

  if (loading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            {message("services_loading")}
          </div>
        </div>
      </section>
    );
  }

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
            {message("services_title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {message("services_subtitle")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const t = service.translated[locale];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={service.imageUrl || "/placeholder.svg"}
                      alt={t.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">
                      {t.name}
                    </CardTitle>
                    <CardDescription>
                      {t.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {t.benefits.slice(0, 3).map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      variant="ghost"
                      asChild
                      className="w-full group/btn"
                    >
                      <Link href={`/services/${service.slug}`}>
                        {message("services_learn_more")}
                        <ArrowRight
                          className={`ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 ${
                            dir === "rtl" ? "rotate-180 ml-0 mr-2" : ""
                          }`}
                        />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">
              {message("services_view_all")}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
