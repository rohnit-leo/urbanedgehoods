"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: 10000, suffix: "+", label: "Happy Customers", description: "Worldwide" },
  { number: 50, suffix: "+", label: "Unique Designs", description: "And Growing" },
  { number: 99, suffix: "%", label: "Satisfaction Rate", description: "Customer Reviews" },
  { number: 24, suffix: "/7", label: "Support", description: "Always Available" },
]

export default function StatsSection() {
  const [counters, setCounters] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true)
          stats.forEach((stat, index) => {
            let start = 0
            const end = stat.number
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                setCounters((prev) => {
                  const newCounters = [...prev]
                  newCounters[index] = end
                  return newCounters
                })
                clearInterval(timer)
              } else {
                setCounters((prev) => {
                  const newCounters = [...prev]
                  newCounters[index] = Math.floor(start)
                  return newCounters
                })
              }
            }, 16)
          })
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our growing community of fashion enthusiasts who trust UrbanEdge Hoods for premium streetwear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                  {counters[index].toLocaleString()}{stat.suffix}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
