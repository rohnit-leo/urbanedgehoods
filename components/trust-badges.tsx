"use client"

import { Shield, Award, Truck, RefreshCw, Star, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const badges = [
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Genuine products guaranteed",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Crafted with finest materials",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders above ₹2999",
    color: "from-green-500 to-green-600",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day return policy",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Trusted by 50K+ customers",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always here to help",
    color: "from-teal-500 to-teal-600",
  },
]

export default function TrustBadges() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              UrbanEdge Hoods
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience premium streetwear with unmatched quality, service, and style
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${badge.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <badge.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{badge.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{badge.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
