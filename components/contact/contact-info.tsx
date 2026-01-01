"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLocale } from "@/lib/locale-context"

export function ContactInfo() {
  const { message } = useLocale()

  const contactDetails = [
    {
      icon: Phone,
      title: message("contact_phone"),
      details: [message("footer_phone")],
    },
    {
      icon: Mail,
      title: message("contact_email"),
      details: [message("footer_email")],
    },
    {
      icon: MapPin,
      title: message("contact_address"),
      details: [message("footer_address")],
    },
    {
      icon: Clock,
      title: message("contact_hours"),
      details: [message("contact_hours_details_open"),message("contact_hours_details_close")],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              {message("contact_page_title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              {message("contact_page_subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">
                {message("contact_info_title")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {message("contact_info_description")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {contactDetails.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
                          <item.icon className="h-5 w-5" />
                        </div>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-xl h-[400px]">
              <iframe
                title={message("contact_map_title")}
                src="https://www.google.com/maps?q=Alsaigh%20Care%20Clinic%20Makkah&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
