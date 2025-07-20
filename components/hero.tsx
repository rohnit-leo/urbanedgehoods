"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const heroImages = [
    {
      src: "/hero/hero-image-1.jpg",
      alt: "UrbanEdge Hoods - Premium Streetwear Collection",
      title: "PREMIUM STREETWEAR",
      subtitle: "Hoodies & Long Sleeves",
      description: "Crafted for the streets, designed for comfort",
      cta: "Shop Hoodies",
      ctaLink: "/collections/hoodies",
    },
    {
      src: "/hero/hero-image-2.jpg",
      alt: "UrbanEdge Hoods - Patterned Shirts Collection",
      title: "STATEMENT PIECES",
      subtitle: "Patterned Shirts & Polos",
      description: "Bold patterns that define your unique style",
      cta: "Shop Shirts",
      ctaLink: "/collections/shirts",
    },
    {
      src: "/hero/hero-image-3.jpg",
      alt: "UrbanEdge Hoods - Bomber Jacket Collection",
      title: "ORIGINALS COLLECTION",
      subtitle: "Exclusive Bomber Jackets",
      description: "Limited edition pieces for the fashion-forward",
      cta: "Shop Originals",
      ctaLink: "/collections/originals",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="100vw"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Image
              src="/logo-dark.png"
              alt="UrbanEdge Hoods"
              width={100}
              height={100}
              className="object-contain md:w-[120px] md:h-[120px]"
              priority
            />
            <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-2xl -z-10 animate-pulse" />
          </div>
        </div>

        {/* Dynamic Content Based on Current Slide */}
        <div className="space-y-6 animate-fade-in">
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 px-4 py-2 text-sm font-medium">
            🔥 {heroImages[currentSlide].subtitle}
          </Badge>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight leading-none">
            URBAN<span className="text-amber-500">EDGE</span>
            <br />
            <span className="text-2xl md:text-5xl lg:text-6xl font-light text-zinc-300 block mt-2">
              {heroImages[currentSlide].title}
            </span>
          </h1>

          <p className="text-lg md:text-2xl lg:text-3xl text-zinc-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            {heroImages[currentSlide].description}
            <br />
            <span className="text-amber-500 font-medium">Bold. Unique. Uncompromising.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link href={heroImages[currentSlide].ctaLink}>
              <Button
                size="lg"
                className="bg-amber-500 text-black hover:bg-amber-400 font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
              >
                {heroImages[currentSlide].cta}
              </Button>
            </Link>
            <Link href="/collections">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg rounded-full bg-transparent transition-all duration-300 transform hover:scale-105"
              >
                VIEW ALL COLLECTIONS
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-amber-500 mb-2">400+</div>
            <div className="text-zinc-400 text-xs md:text-base font-medium">GSM PREMIUM</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-amber-500 mb-2">100%</div>
            <div className="text-zinc-400 text-xs md:text-base font-medium">COTTON</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-amber-500 mb-2">MADE</div>
            <div className="text-zinc-400 text-xs md:text-base font-medium">IN INDIA</div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-amber-500 scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-8 right-8 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
