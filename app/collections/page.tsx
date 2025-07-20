"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Star, TrendingUp } from "lucide-react"

export default function CollectionsPage() {
  const collections = [
    {
      id: 1,
      name: "UE Hoods Bomber Jackets",
      slug: "ue-hoods-bomber-jackets",
      description: "Premium bomber jackets with triple-layered construction and urban edge styling",
      image: "/products/bomber-jacket-1.webp",
      itemCount: 8,
      featured: true,
      color: "amber",
    },
    {
      id: 2,
      name: "Cuban Collar Shirts",
      slug: "shirts",
      description: "Sophisticated Cuban collar shirts perfect for any occasion",
      image: "/products/shirt-1.webp",
      itemCount: 10,
      featured: true,
      color: "blue",
    },
    {
      id: 3,
      name: "Sweatshirts & Hoodies",
      slug: "sweatshirts-hoodies",
      description: "Comfortable and stylish hoodies and sweatshirts for everyday wear",
      image: "/products/hoodie-1.webp",
      itemCount: 5,
      featured: true,
      color: "purple",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-red-500/10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 px-6 py-2 text-lg mb-8">
              PREMIUM COLLECTIONS
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              OUR <span className="text-amber-500">COLLECTIONS</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
              Discover our carefully curated collections of premium streetwear, each designed with attention to detail
              and crafted for the modern urban lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              FEATURED <span className="text-amber-500">COLLECTIONS</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Each collection represents our commitment to quality, style, and innovation in streetwear fashion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-zinc-800 to-zinc-900 border-zinc-700 overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      {collection.featured && (
                        <Badge className="bg-amber-500/90 text-black font-semibold">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge
                        className={`bg-${collection.color}-500/20 text-${collection.color}-400 border-${collection.color}-500/30 mb-2`}
                      >
                        {collection.itemCount} Items
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">{collection.description}</p>
                    <Link href={`/collections/${collection.slug}`}>
                      <Button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold group">
                        Explore Collection
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              WHY CHOOSE <span className="text-amber-500">OUR COLLECTIONS?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Quality</h3>
              <p className="text-zinc-400 leading-relaxed">
                Every piece is crafted with premium materials and attention to detail, ensuring durability and comfort
                that lasts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Trendsetting Designs</h3>
              <p className="text-zinc-400 leading-relaxed">
                Our designs are inspired by modern urban culture and global fashion trends, keeping you ahead of the
                curve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Exclusive Collections</h3>
              <p className="text-zinc-400 leading-relaxed">
                Limited edition pieces and exclusive designs that you won't find anywhere else, making you stand out
                from the crowd.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500/20 to-red-500/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              READY TO UPGRADE <span className="text-amber-500">YOUR STYLE?</span>
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join The UE Hood community and discover fashion that makes a statement. Each collection is designed to
              elevate your wardrobe and express your unique style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/collections/ue-hoods-bomber-jackets">
                <Button className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 text-lg">
                  <Star className="h-5 w-5 mr-2" />
                  Shop Bomber Jackets
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-8 py-4 text-lg bg-transparent"
                >
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
