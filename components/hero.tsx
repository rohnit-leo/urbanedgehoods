"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star, Shield, Truck, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroImages = [
  {
    src: "/hero/hero-image-1.jpg",
    alt: "Premium Streetwear Collection",
    title: "Premium Streetwear",
    subtitle: "Elevate Your Style",
  },
  {
    src: "/hero/hero-image-2.jpg",
    alt: "Urban Fashion Collection",
    title: "Urban Fashion",
    subtitle: "Express Yourself",
  },
  {
    src: "/hero/hero-image-3.jpg",
    alt: "Exclusive Designs",
    title: "Exclusive Designs",
    subtitle: "Stand Out",
  },
]

const stats = [
  { number: "50K+", label: "Happy Customers" },
  { number: "1000+", label: "Products" },
  { number: "99%", label: "Satisfaction" },
  { number: "24/7", label: "Support" },
]

const features = [
  { icon: Shield, text: "Premium Quality" },
  { icon: Truck, text: "Free Shipping" },
  { icon: Award, text: "Authentic Products" },
  { icon: Star, text: "5-Star Rated" },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                ✨ New Collection Available
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Redefine Your
                <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Street Style
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover premium streetwear that combines comfort, style, and authenticity. From hoodies to bomber
                jackets, express your unique urban identity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 text-lg"
                asChild
              >
                <Link href="/collections">Shop Collection</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 hover:border-amber-600 hover:text-amber-600 px-8 py-3 text-lg bg-transparent"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-600">
                  <feature.icon className="h-5 w-5 text-amber-600" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold">{image.title}</h3>
                    <p className="text-lg opacity-90">{image.subtitle}</p>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              New Arrivals
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-900">4.9/5</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Trusted by 50K+ customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
