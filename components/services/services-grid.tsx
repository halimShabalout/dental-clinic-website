"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
import { useLocale } from "@/lib/locale-context";
import type { Service } from "@/types";

interface ServicesGridProps {
  lang: "en" | "ar";
  services: Service[];
}

const ServiceCard = memo(function ServiceCard({
  service,
  lang,
  index,
  dir,
  learnMoreLabel,
  featuredLabel,
}: {
  service: Service;
  lang: "en" | "ar";
  index: number;
  dir: string;
  learnMoreLabel: string;
  featuredLabel: string;
}) {
  const translated = service.translated[lang];
  const isRtl = dir === "rtl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="h-full flex flex-col hover:shadow-2xl transition-shadow duration-300 group">
        <div className="relative overflow-hidden rounded-t-xl h-56">
          <Image
            src={service.imageUrl || "/placeholder.svg"}
            alt={translated.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

          {service.featured && (
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
              {featuredLabel}
            </Badge>
          )}
        </div>

        <CardHeader>
          <CardTitle className="text-xl">{translated.name}</CardTitle>
          <CardDescription className="text-base">{translated.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
            <span>{translated.duration}</span>
          </div>

          <ul className="space-y-2">
            {translated.benefits.slice(0, 4).map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter>
          <Button asChild className="w-full group/btn">
            <Link href={`/${lang}/services/${service.slug}`}>
              {learnMoreLabel}
              <ArrowRight
                className={`h-4 w-4 transition-transform group-hover/btn:translate-x-1 ${
                  isRtl ? "rotate-180 ml-0 mr-2" : "ml-2"
                }`}
                aria-hidden="true"
              />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
});

const ServicesGrid = ({ lang, services }: ServicesGridProps) => {
  const { message, dir } = useLocale();

  return (
    <div dir={dir}>
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                lang={lang}
                index={index}
                dir={dir}
                learnMoreLabel={message("services_learn_more")}
                featuredLabel={message("services_featured")}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesGrid;