"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Service } from "@/types";
import { useLocale } from "@/lib/locale-context";

interface ServiceDetailProps {
  service: Service;
  lang: "en" | "ar";
}

const BenefitItem = memo(function BenefitItem({
  benefit,
  index,
  isRtl,
}: {
  benefit: string;
  index: number;
  isRtl: boolean;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="flex items-start gap-3"
    >
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 shrink-0 mt-0.5">
        <Check className="h-4 w-4 text-primary" aria-hidden="true" />
      </div>
      <span className="text-muted-foreground leading-relaxed">{benefit}</span>
    </motion.li>
  );
});

const ServiceDetail = ({ service, lang }: ServiceDetailProps) => {
  const { dir, message } = useLocale();
  const t = service.translated[lang];
  const isRtl = dir === "rtl";

  return (
    <div dir={dir}>
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Button variant="ghost" asChild>
                <Link href={`/${lang}/services`} className="flex items-center">
                  {isRtl ? (
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  ) : (
                    <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                  )}
                  {message("service_back")}
                </Link>
              </Button>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {service.featured && (
                  <Badge className="bg-accent text-accent-foreground">
                    {message("service_featured")}
                  </Badge>
                )}

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                  {t.name}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t.description}
                </p>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-lg">{t.duration}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
                  <Image
                    src={service.imageUrl || "/placeholder.svg"}
                    alt={t.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{message("service_about_title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t.longDescription}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{message("service_benefits_title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {t.benefits.map((benefit, index) => (
                      <BenefitItem
                        key={index}
                        benefit={benefit}
                        index={index}
                        isRtl={isRtl}
                      />
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              {message("service_cta_title")}
            </h2>

            <p className="text-lg text-muted-foreground text-pretty">
              {message("service_cta_description")}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="group">
                <Link href={`/${lang}/contact`}>
                  {message("service_book_consultation")}
                  <ArrowRight
                    className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                      isRtl ? "rotate-180 ml-0 mr-2" : "ml-2"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href={`/${lang}/services`}>{message("service_view_all")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;