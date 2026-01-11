"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Heart, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocale } from "@/lib/locale-context";
import type { Doctor } from "@/types";

interface DoctorProfileProps {
  doctor: Doctor;
  lang: "en" | "ar";
  dir: "ltr" | "rtl";
}

export function DoctorProfile({ doctor, lang, dir }: DoctorProfileProps) {
  const { message } = useLocale();
  const t = doctor.translated[lang];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={doctor.imageUrl || "/placeholder.svg"} alt={t.name} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl"
              >
                <Award className="h-8 w-8 mb-2" />
                <div className="text-sm font-semibold">{message("platinum_provider")}</div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                {message("meet_your_orthodontist")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">{t.name}</h1>
              <p className="text-xl text-primary font-semibold">{t.title}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.bio}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20" dir={dir}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                    <Heart className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">{message("my_philosophy")}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">{t.philosophy}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20 bg-secondary/20" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Education */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl">{message("education")}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {t.education.map((edu, i) => (
                      <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }} className="flex gap-3 items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">{edu}</p>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl">{message("experience")}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {t.experience.map((exp, i) => (
                      <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }} className="flex gap-3 items-start">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">{exp}</p>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
