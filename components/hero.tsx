"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Shield, Truck, Award, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const slides = [
  {
    id: 1,
    title: "PREMIUM BOMBER",
    subtitle: "JACKETS",
    description: "Discover our exclusive collection of premium bomber jackets crafted with precision and style.",
    image: "/hero/hero-image-1.jpg",
    cta: "Shop Bombers",
    link: "/collections/ue-hoods-bomber-jackets",
    badge: "NEW COLLECTION",
  },
  {
    id: 2,
    title: "CUBAN COLLAR",
    subtitle: "SHIRTS",
    description: "Bold patterns and premium fabrics that define your unique style and personality.",
    image: "/hero/hero-image-2.jpg",
    cta: "Shop Shirts",
    link: "/collections/shirts",
    badge: "TRENDING NOW",
  },
  {
    id: 3,
    title: "CUSTOM",
    subtitle: "SPORTSWEAR",
    description: "Professional grade sportswear with custom designs and premium performance materials.",
    image: "/hero/hero-image-3.jpg",
    cta: "Order Custom",
    link: "/sportswear",
    badge: "PROFESSIONAL",
  },
]

const features = [
  { icon: Shield, text: "Premium Quality", color: "text-amber-600" },
  { icon: Truck, text: "Free Shipping", color: "text-green-600" },
  { icon: Award, text: "Award Winning", color: "text-blue-600" },
  { icon: Star, text: "5-Star Rated", color: "text-purple-600" },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-gray-200/30 to-amber-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-100/20 to-yellow-100/20 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Slider Container */}
      <div className="relative h-screen flex items-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left Content */}
                <div className="space-y-8 z-10 relative">
                  <Badge className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border-amber-200 px-4 py-2 text-sm font-semibold">
                    {slide.badge}
                  </Badge>

                  <div className="space-y-6">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                      <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-amber-600 bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                      <br />
                      <span className="text-gray-800">{slide.subtitle}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">{slide.description}</p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-8">
                    <Link href={slide.link}>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        {slide.cta}
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 px-8 py-4 text-lg font-bold bg-transparent"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Watch Story
                    </Button>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-6 pt-8">
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                        <feature.icon className={`w-5 h-5 ${feature.color}`} />
                        <span className="text-sm font-medium text-gray-800">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                        10K+
                      </div>
                      <div className="text-sm text-gray-600">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                        50+
                      </div>
                      <div className="text-sm text-gray-600">Unique Designs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                        5★
                      </div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                  </div>
                </div>

                {/* Right Content - Image */}
                <div className="relative z-10">
                  <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-gray-800 text-sm font-medium">4.9</span>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <span className="text-gray-800 text-sm font-semibold">Premium Quality</span>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-2xl opacity-30 animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-gray-400 to-amber-400 rounded-full blur-2xl opacity-20 animate-pulse delay-1000" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gradient-to-r from-amber-500 to-yellow-500 scale-125"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
