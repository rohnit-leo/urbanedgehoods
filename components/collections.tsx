"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Collections() {
  const collections = [
    {
      name: "UE HOODS BOMBER JACKETS",
      description: "Premium triple-layered bomber jackets with exclusive vector art",
      image: "/products/bomber-jacket-1.webp",
      href: "/collections/ue-hoods-bomber-jackets",
      featured: true,
    },
    {
      name: "OVERSIZED TEES",
      description: "Cotton, breathable, stone-washed perfection",
      image: "/placeholder.svg?height=600&width=400",
      href: "/collections/t-shirts",
      featured: false,
    },
    {
      name: "HOODIES & SWEATSHIRTS",
      description: "400 GSM heavy cotton fleece",
      image: "/placeholder.svg?height=600&width=400",
      href: "/collections/hoodies",
      featured: false,
    },
    {
      name: "CUBAN COLLAR SHIRTS",
      description: "Gender-neutral partywear essentials",
      image: "/placeholder.svg?height=600&width=400",
      href: "/collections/shirts",
      featured: false,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-20 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-red-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">COLLECTIONS</h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Curated for the streets, crafted for you. Each collection tells a story of premium quality and urban style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={collection.href} className="group block">
                <div
                  className={`relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl ${
                    collection.featured
                      ? "bg-gradient-to-br from-amber-500/20 to-amber-600/20 border-2 border-amber-500/30 hover:border-amber-400/50"
                      : "bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 hover:border-amber-500/30"
                  }`}
                >
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {collection.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold">FEATURED</div>
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className={`font-bold text-xl mb-2 transition-colors ${
                        collection.featured
                          ? "text-amber-400 group-hover:text-amber-300"
                          : "text-white group-hover:text-amber-400"
                      }`}
                    >
                      {collection.name}
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed">{collection.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
