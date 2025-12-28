"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Award, TrendingUp, Smile } from "lucide-react"
import { statisticsData } from "@/mock-data/statistics"
import { useLocale } from "@/lib/locale-context"

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true)
      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration, isVisible])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export function StatsSection() {
  const { message, dir } = useLocale()

  const stats = [
    {
      icon: Users,
      value: statisticsData.patientsServed,
      suffix: "+",
      label: message("stats_happy_patients"),
    },
    {
      icon: Award,
      value: statisticsData.yearsExperience,
      suffix: "+",
      label: message("stats_years_experience"),
    },
    {
      icon: TrendingUp,
      value: statisticsData.successRate,
      suffix: "%",
      label: message("stats_success_rate"),
    },
    {
      icon: Smile,
      value: statisticsData.alignersCases,
      suffix: "+",
      label: message("stats_aligner_cases"),
    },
  ]

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary">
                <AnimatedCounter end={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
