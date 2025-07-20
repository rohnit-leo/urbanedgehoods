"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, Shield, Truck, Award, Sparkles, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const heroImages = ["/hero/hero-image-1.jpg", "/hero/hero-image-2.jpg", "/hero/hero-image-3.jpg"]

const stats = [
  { number: "50K+", label: "Happy Customers", icon: Star },
  { number: "1000+", label: "Premium Products", icon: Award },
  { number: "99%", label: "Satisfaction Rate", icon: TrendingUp },
]

const features = [
  { icon: Shield, title: "Premium Quality", desc: "Crafted with finest materials" },
  { icon: Truck, title: "Free Shipping", desc: "On orders above ₹2999" },
  { icon: Award, title: "Authentic Brand", desc: "100% original products" },
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-gray-200/30 to-gray-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-100/20 to-gray-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border-amber-300 px-4 py-2 text-sm font-semibold">
                <Sparkles className="h-4 w-4 mr-2" />
                Premium Streetwear Collection 2024
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-amber-600 to-gray-900 bg-clip-text text-transparent">
                  URBAN
                </span>
                <br />
                <span className="text-gray-900">EDGE</span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                  HOODS
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 font-medium max-w-lg">
                Redefining streetwear with premium quality, authentic designs, and unmatched style.
              </p>

              <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                Discover our exclusive collection of bomber jackets, hoodies, and streetwear essentials crafted for the
                modern urban lifestyle.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/collections">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:border-amber-500 hover:text-amber-600 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
                >
                  Our Story
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-amber-600 mr-2" />
                    <span className="text-3xl font-bold text-gray-900">{stat.number}</span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={heroImages[currentImageIndex] || "/placeholder.svg"}
                alt="UrbanEdge Hoods Premium Collection"
                fill
                className="object-cover transition-all duration-1000"
                priority
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6">
                <Badge className="bg-white/90 text-gray-900 font-bold px-3 py-2 shadow-lg">NEW ARRIVAL</Badge>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-200"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Premium Quality</p>
                  <p className="text-sm text-gray-600">Certified Materials</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-200"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Free Shipping</p>
                  <p className="text-sm text-gray-600">Orders ₹2999+</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-amber-500 w-8" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
