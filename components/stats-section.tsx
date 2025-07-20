"use client"

import { TrendingUp, Users, Award, ShoppingBag } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  {
    icon: Users,
    number: 50000,
    suffix: "+",
    label: "Happy Customers",
    description: "Trusted by streetwear enthusiasts worldwide",
  },
  {
    icon: ShoppingBag,
    number: 1000,
    suffix: "+",
    label: "Premium Products",
    description: "Curated collection of urban essentials",
  },
  {
    icon: Award,
    number: 99,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Customer satisfaction is our priority",
  },
  {
    icon: TrendingUp,
    number: 5,
    suffix: " Years",
    label: "Industry Experience",
    description: "Leading streetwear innovation since 2019",
  },
]

function AnimatedNumber({ number, suffix }: { number: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = number / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [number])

  return (
    <span className="text-4xl lg:text-5xl font-bold text-gray-900">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our growing community of streetwear enthusiasts who trust UrbanEdge Hoods for premium quality and
            authentic urban style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>

                <div className="mb-4">
                  <AnimatedNumber number={stat.number} suffix={stat.suffix} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
