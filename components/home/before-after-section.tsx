"use client";

import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = beforeAfterData[currentIndex];

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
    setSliderPosition(50);
  }, []);

  const handlePrevious = useCallback(() => {
    goTo(currentIndex === 0 ? beforeAfterData.length - 1 : currentIndex - 1);
  }, [currentIndex, beforeAfterData.length, goTo]);

  const handleNext = useCallback(() => {
    goTo(currentIndex === beforeAfterData.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, beforeAfterData.length, goTo]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const updatePosition = (clientX: number) => {
      const rect = container.getBoundingClientRect();
      const percentage = ((clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    updatePosition(e.clientX);
    const target = e.currentTarget as HTMLElement;
    target.setPointerCapture(e.pointerId);

    const onMove = (moveEvent: PointerEvent) => updatePosition(moveEvent.clientX);
    const onUp = () => {
      target.removeEventListener("pointermove", onMove);
      target.removeEventListener("pointerup", onUp);
    };

    target.addEventListener("pointermove", onMove);
    target.addEventListener("pointerup", onUp);
  }, []);

  return (
    <section className="py-20 bg-secondary/20" dir={dir}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
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
              <div ref={containerRef} className="relative aspect-video bg-muted select-none">
                <div
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <Image
                    src={currentItem.afterImageUrl}
                    alt={message("after_label")}
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                >
                  <Image
                    src={currentItem.beforeImageUrl}
                    alt={message("before_label")}
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-cover"
                  />
                </div>

                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize touch-none z-10"
                  style={{ left: `${sliderPosition}%` }}
                  onPointerDown={handlePointerDown}
                  role="slider"
                  aria-valuenow={Math.round(sliderPosition)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={message("before_after_slider_label")}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none">
                    <ChevronLeft className="h-3 w-3 text-gray-600" />
                    <ChevronRight className="h-3 w-3 text-gray-600" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded pointer-events-none">
                  {message("after_label")}
                </div>
                <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded pointer-events-none">
                  {message("before_label")}
                </div>
              </div>

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

                <div className="flex items-center justify-between pt-4 border-t">
                  <Button size="icon" variant="outline" onClick={handlePrevious} aria-label={message("previous_label")}>
                    {dir === "rtl" ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                  </Button>

                  <div className="flex gap-2" role="tablist">
                    {beforeAfterData.map((_, i) => (
                      <button
                        key={i}
                        role="tab"
                        aria-selected={i === currentIndex}
                        onClick={() => goTo(i)}
                        className={`h-2 rounded-full transition-all ${
                          i === currentIndex ? "bg-primary w-8" : "bg-border w-2"
                        }`}
                      />
                    ))}
                  </div>

                  <Button size="icon" variant="outline" onClick={handleNext} aria-label={message("next_label")}>
                    {dir === "rtl" ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
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