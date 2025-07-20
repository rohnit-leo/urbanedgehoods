"use client"

import { Shield, Truck, Award, RefreshCw, Phone, Star } from 'lucide-react'

const badges = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "100% Authentic Products",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders above ₹2999",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Best Streetwear Brand 2024",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day return policy",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Always here to help",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "10,000+ happy customers",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
  },
]

export default function TrustBadges() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-amber-600 bg-clip-text text-transparent mb-4">
            Why Choose UrbanEdge Hoods?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the difference with our commitment to quality, service, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`${badge.bg} ${badge.border} border-2 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group`}
            >
              <div className={`${badge.color} mb-4 flex justify-center`}>
                <badge.icon className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">{badge.title}</h3>
              <p className="text-gray-600 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
