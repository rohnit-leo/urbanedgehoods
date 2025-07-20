"use client"

import { CheckCircle, Users, Zap, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    icon: CheckCircle,
    title: "Premium Materials",
    description:
      "We source only the finest fabrics and materials for our streetwear collection, ensuring durability and comfort.",
    points: ["400 GSM Cotton Fleece", "Water-resistant outer shell", "Reinforced stitching"],
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by streetwear enthusiasts for streetwear lovers. We understand what you need.",
    points: ["50K+ satisfied customers", "Active community feedback", "Trend-focused designs"],
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Quick processing, fast shipping, and reliable customer service that you can count on.",
    points: ["24-48 hour processing", "Express shipping available", "Real-time order tracking"],
  },
  {
    icon: Heart,
    title: "Passion for Style",
    description: "Every piece is designed with passion and attention to detail, reflecting urban culture.",
    points: ["In-house design team", "Limited edition drops", "Authentic street style"],
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                  UrbanEdge?
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're not just another clothing brand. We're a community of urban style enthusiasts committed to
                delivering exceptional quality and authentic streetwear experiences.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-50 border-gray-200 hover:border-amber-300 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600 mb-4">{feature.description}</p>
                          <ul className="space-y-2">
                            {feature.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/hero/hero-image-2.jpg" alt="UrbanEdge Quality" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">99%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
