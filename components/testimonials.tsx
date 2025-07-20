"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "The quality of UrbanEdge Hoods bomber jackets is absolutely incredible. The fit is perfect and the design is so unique. I've received so many compliments!",
    image: "/placeholder.svg?height=80&width=80",
    product: "UE Bomber Jacket",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Delhi, India",
    rating: 5,
    text: "I ordered a custom sportswear set for my team and the results exceeded our expectations. Professional quality and amazing customer service!",
    image: "/placeholder.svg?height=80&width=80",
    product: "Custom Sportswear",
  },
  {
    id: 3,
    name: "Rohit Kumar",
    location: "Bangalore, India",
    rating: 5,
    text: "The Cuban collar shirts are my new favorite. The fabric quality is premium and the patterns are so stylish. Definitely recommending to friends!",
    image: "/placeholder.svg?height=80&width=80",
    product: "Cuban Collar Shirt",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-amber-600 bg-clip-text text-transparent mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their UrbanEdge experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-amber-400 opacity-50" />
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonials[currentTestimonial].rating
                        ? "text-amber-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-amber-200"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].location}</div>
                  <div className="text-amber-600 text-sm font-medium">
                    Purchased: {testimonials[currentTestimonial].product}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-2 border-gray-300 hover:border-amber-400 hover:bg-amber-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-gradient-to-r from-amber-400 to-yellow-500 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-2 border-gray-300 hover:border-amber-400 hover:bg-amber-50"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
