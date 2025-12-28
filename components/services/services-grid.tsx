"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useServices } from "@/hooks/use-services";
import { useLocale } from "@/lib/locale-context";

export function ServicesGrid() {
  const { services, loading } = useServices();
  const { message, dir, locale } = useLocale();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          {message("services_loading")}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              {message("services_page_title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              {message("services_page_subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                  <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300 group">
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={service.imageUrl || "/placeholder.svg"}
                        alt={t.name}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

                      {service.featured && (
                        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                          {message("services_featured")}
                        </Badge>
                      )}
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl">
                        {t.name}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {t.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{t.duration}</span>
                      </div>

                      <ul className="space-y-2">
                        {t.benefits.slice(0, 4).map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter>
                      <Button asChild className="w-full group/btn">
                        <Link href={`/services/${service.slug}`}>
                          {message("services_learn_more")}
                          <ArrowRight
                            className={`ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 ${
                              dir === "rtl"
                                ? "rotate-180 ml-0 mr-2"
                                : ""
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
        </div>
      </section>
    </>
  );
}
