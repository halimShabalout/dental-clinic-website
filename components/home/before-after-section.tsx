"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "@/lib/locale-context";

const beforeAfterData = [
  {
    id: "1",
    beforeImageUrl: "/before-dental-treatment-crooked-teeth.jpg",
    afterImageUrl: "/perfect-smile-after-dental.png",
    translated: {
      en: {
        treatment: "Clear Aligners",
        duration: "12 months",
        description: "Corrected severe crowding and misalignment",
      },
      ar: {
        treatment: "تقويم شفاف",
        duration: "12 شهر",
        description: "تم تصحيح ازدحام الأسنان الشديد وسوء الاصطفاف",
      },
    },
  },
  {
    id: "2",
    beforeImageUrl: "/before-orthodontic-treatment-gap-teeth.jpg",
    afterImageUrl: "/after-orthodontic-treatment-closed-gap.jpg",
    translated: {
      en: {
        treatment: "Clear Aligners",
        duration: "8 months",
        description: "Closed gaps and aligned bite",
      },
      ar: {
        treatment: "تقويم شفاف",
        duration: "8 أشهر",
        description: "تم إغلاق الفجوات ومحاذاة العضّة",
      },
    },
  },
  {
    id: "3",
    beforeImageUrl: "/before-braces-treatment-overbite.jpg",
    afterImageUrl: "/after-braces-treatment-perfect-bite.jpg",
    translated: {
      en: {
        treatment: "Traditional Orthodontics",
        duration: "18 months",
        description: "Corrected overbite and aligned teeth",
      },
      ar: {
        treatment: "تقويم تقليدي",
        duration: "18 شهر",
        description: "تم تصحيح فرط العضة ومحاذاة الأسنان",
      },
    },
  },
];

export function BeforeAfterSection() {
  const { message, dir } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? beforeAfterData.length - 1 : prev - 1
    );
    setSliderPosition(50);
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === beforeAfterData.length - 1 ? 0 : prev + 1
    );
    setSliderPosition(50);
  };

  const currentItem = beforeAfterData[currentIndex];
  const lang = dir === "rtl" ? "ar" : "en"; 

  return (
    <section className="py-20 bg-secondary/20">
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
            {message("before_after_title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {message("before_after_subtitle")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {/* Before / After Slider */}
                <div className="relative aspect-video bg-muted">
                  {/* After */}
                  <div
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <img
                      src={currentItem.afterImageUrl}
                      alt={message("after_label")}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      {message("after_label")}
                    </div>
                  </div>

                  {/* Before */}
                  <div
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                  >
                    <img
                      src={currentItem.beforeImageUrl}
                      alt={message("before_label")}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      {message("before_label")}
                    </div>
                  </div>

                  {/* Slider Handle */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-auto cursor-ew-resize"
                      style={{ left: `${sliderPosition}%` }}
                      onMouseDown={(e) => {
                        const handleMouseMove = (moveEvent: MouseEvent) => {
                          const rect =
                            e.currentTarget.parentElement?.getBoundingClientRect();
                          if (!rect) return;
                          const x = moveEvent.clientX - rect.left;
                          const percentage = (x / rect.width) * 100;
                          setSliderPosition(
                            Math.max(0, Math.min(100, percentage))
                          );
                        };

                        const handleMouseUp = () => {
                          document.removeEventListener(
                            "mousemove",
                            handleMouseMove
                          );
                          document.removeEventListener(
                            "mouseup",
                            handleMouseUp
                          );
                        };

                        document.addEventListener(
                          "mousemove",
                          handleMouseMove
                        );
                        document.addEventListener("mouseup", handleMouseUp);
                      }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                        <div className="flex gap-1">
                          <ChevronLeft className="h-5 w-5" />
                          <ChevronRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">
                        {currentItem.translated[lang].treatment}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {currentItem.translated[lang].description}
                      </p>
                    </div>
                    <div className={dir === "rtl" ? "text-left" : "text-right"}>
                      <p className="text-sm text-muted-foreground">
                        {message("treatment_duration_label")}
                      </p>
                      <p className="font-semibold">
                        {currentItem.translated[lang].duration}
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <Button variant="outline" size="icon" onClick={handlePrevious}>
                      {dir === "rtl" ? (
                        <ChevronRight className="h-5 w-5" />
                      ) : (
                        <ChevronLeft className="h-5 w-5" />
                      )}
                    </Button>

                    <div className="flex gap-2">
                      {beforeAfterData.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentIndex(index);
                            setSliderPosition(50);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentIndex
                              ? "bg-primary w-8"
                              : "bg-border"
                          }`}
                        />
                      ))}
                    </div>

                    <Button variant="outline" size="icon" onClick={handleNext}>
                      {dir === "rtl" ? (
                        <ChevronLeft className="h-5 w-5" />
                      ) : (
                        <ChevronRight className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
