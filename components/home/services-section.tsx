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
import { useLocale } from "@/lib/locale-context";
import type { Service } from "@/types";

interface ServicesSectionProps {
  lang: "en" | "ar";
  services: Service[];
}

const ServicesSection = ({ lang, services }: ServicesSectionProps) => {
  const { message, dir } = useLocale();
  
  return (
    <section className="py-20" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            {message("services_title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {message("services_subtitle")}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const t = service.translated[lang];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full flex flex-col">
                  <img
                    src={service.imageUrl}
                    alt={t.name}
                    className="h-48 w-full object-cover"
                  />

                  <CardHeader>
                    <CardTitle>{t.name}</CardTitle>
                    <CardDescription>{t.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {t.benefits.slice(0, 3).map((b, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button variant="ghost" asChild className="w-full">
                      <Link href={`/${lang}/services/${service.slug}`}>
                        {message("services_learn_more")}
                        <ArrowRight
                          className={`h-4 w-4 ${
                            dir === "rtl" ? "mr-2 rotate-180" : "ml-2"
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

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href={`/${lang}/services`}>
              {message("services_view_all")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
