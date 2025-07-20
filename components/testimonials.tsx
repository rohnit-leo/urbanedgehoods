"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "The quality of UrbanEdge hoodies is unmatched! The fabric is premium, the fit is perfect, and the designs are absolutely fire. Been wearing their pieces for over a year now.",
    product: "Premium Oversized Hoodie",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Delhi, India",
    rating: 5,
    text: "Finally found a brand that understands streetwear! Their bomber jackets are my go-to for any occasion. The attention to detail and craftsmanship is incredible.",
    product: "Cyber Luxe Bomber Jacket",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Rohit Kumar",
    location: "Bangalore, India",
    rating: 5,
    text: "UrbanEdge has completely transformed my wardrobe. The Cuban collar shirts are versatile and stylish. Customer service is top-notch too!",
    product: "Tropical Paradise Cuban Shirt",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    location: "Pune, India",
    rating: 5,
    text: "Love the sustainable approach and premium quality. Every piece I've bought has exceeded my expectations. The fit is perfect and the designs are trendy.",
    product: "Street Essential Hoodie",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Hyderabad, India",
    rating: 5,
    text: "Been following UrbanEdge since day one. Their evolution in design and quality is remarkable. The bomber jackets are my absolute favorite!",
    product: "Midnight Black Bomber",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our community of streetwear enthusiasts has to say about their
            UrbanEdge experience.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white border border-gray-200 shadow-xl">
                  <CardContent className="p-12">
                    <div className="text-center">
                      {/* Quote Icon */}
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Quote className="h-8 w-8 text-white" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center justify-center mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                        "{testimonials[currentIndex].text}"
                      </blockquote>

                      {/* Customer Info */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-200">
                          <Image
                            src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                            alt={testimonials[currentIndex].name}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                          <div className="text-gray-600">{testimonials[currentIndex].location}</div>
                          <div className="text-sm text-amber-600 font-medium">
                            Purchased: {testimonials[currentIndex].product}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-amber-200 text-amber-600 hover:bg-amber-50 bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-amber-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-amber-200 text-amber-600 hover:bg-amber-50 bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-3">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-gray-600 text-xs">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
