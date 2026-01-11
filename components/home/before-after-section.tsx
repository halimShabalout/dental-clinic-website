"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "@/lib/locale-context";
import { BeforeAfter } from "@/types/index";

interface BeforeAfterSectionProps {
  beforeAfterData: BeforeAfter[];
  lang: "en" | "ar";
}

const BeforeAfterSection = ({ beforeAfterData, lang }: BeforeAfterSectionProps) => {
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

  return (
    <section className="py-20 bg-secondary/20" dir={dir}>
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
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {/* Slider */}
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
                </div>

                {/* Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
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
                      document.removeEventListener("mousemove", handleMouseMove);
                      document.removeEventListener("mouseup", handleMouseUp);
                    };

                    document.addEventListener("mousemove", handleMouseMove);
                    document.addEventListener("mouseup", handleMouseUp);
                  }}
                />
              </div>

              {/* Details */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center flex-wrap gap-4">
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
                <div className="flex items-center justify-between pt-4 border-t">
                  <Button size="icon" variant="outline" onClick={handlePrevious}>
                    {dir === "rtl" ? (
                      <ChevronRight className="h-5 w-5" />
                    ) : (
                      <ChevronLeft className="h-5 w-5" />
                    )}
                  </Button>

                  <div className="flex gap-2">
                    {beforeAfterData.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setCurrentIndex(i);
                          setSliderPosition(50);
                        }}
                        className={`h-2 rounded-full transition-all ${i === currentIndex
                            ? "bg-primary w-8"
                            : "bg-border w-2"
                          }`}
                      />
                    ))}
                  </div>

                  <Button size="icon" variant="outline" onClick={handleNext}>
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
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
