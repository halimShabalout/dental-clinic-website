"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+20 123 456 7890", "+20 098 765 4321"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@draymanzain.com", "appointments@draymanzain.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Medical Street", "Nasr City, Cairo, Egypt"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Fri: 9:00 AM - 8:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"],
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold">Contact Information</h2>
        <p className="text-lg text-muted-foreground">
          We're here to answer your questions and help you start your smile transformation journey
        </p>
      </motion.div>

      <div className="space-y-4">
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
  )
}
