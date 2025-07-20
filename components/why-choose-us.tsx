"use client"

import { CheckCircle, Users, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    title: "Premium Materials",
    description: "We use only the finest fabrics and materials sourced from trusted suppliers worldwide.",
    stats: "400+ GSM",
  },
  {
    icon: Users,
    title: "Expert Craftsmanship",
    description: "Each piece is carefully crafted by skilled artisans with years of experience in fashion.",
    stats: "10+ Years",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick processing and shipping to get your order to you as fast as possible.",
    stats: "2-5 Days",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Shipping worldwide with local customer support in multiple languages.",
    stats: "50+ Countries",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-amber-600 bg-clip-text text-transparent mb-6">
            The UrbanEdge Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another clothing brand. We're a community of fashion enthusiasts dedicated to bringing you
            the highest quality streetwear with unmatched style and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:-translate-y-4 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-8 mb-6 group-hover:shadow-xl group-hover:shadow-amber-100/50 transition-all duration-300">
                <div className="text-amber-600 mb-4 flex justify-center">
                  <feature.icon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-amber-600 bg-clip-text text-transparent mb-2">
                  {feature.stats}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
