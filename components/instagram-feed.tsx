"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const instagramPosts = [
  {
    id: 1,
    image: "/products/bomber-jacket-1.webp",
    likes: 1247,
    comments: 89,
    caption:
      "New drop alert! 🔥 Cyber Luxe Bomber Jacket now available. Limited edition piece that's already flying off the shelves! #UrbanEdgeHoods #StreetStyle",
  },
  {
    id: 2,
    image: "/products/hoodie-1.webp",
    likes: 892,
    comments: 56,
    caption:
      "Premium comfort meets street style 💯 Our oversized hoodies are perfect for those cozy winter vibes. What's your favorite color? #ComfortWear #StreetFashion",
  },
  {
    id: 3,
    image: "/products/shirt-1.webp",
    likes: 654,
    comments: 34,
    caption:
      "Cuban collar shirts for that effortless summer look ☀️ Versatile pieces that work from beach to street. Shop the collection now! #SummerVibes #CubanCollar",
  },
  {
    id: 4,
    image: "/products/bomber-jacket-2.webp",
    likes: 1156,
    comments: 78,
    caption:
      "Artistic Fusion Bomber - where art meets fashion 🎨 Each piece tells a story. What story will yours tell? #ArtisticFashion #BomberJacket",
  },
  {
    id: 5,
    image: "/products/hoodie-2.webp",
    likes: 743,
    comments: 42,
    caption:
      "Street Essential Hoodie in action 🏙️ Perfect for those urban adventures. Tag us in your street style photos! #StreetEssential #UrbanStyle",
  },
  {
    id: 6,
    image: "/products/shirt-2.webp",
    likes: 567,
    comments: 29,
    caption:
      "Urban Safari vibes with our latest shirt collection 🌿 Bringing nature-inspired designs to the concrete jungle. #UrbanSafari #NatureInspired",
  },
]

export default function InstagramFeed() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 border-y border-gray-300 mb-16">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center text-center">
            <p className="text-sm font-medium text-gray-800">
              📸 <span className="font-bold">FOLLOW US</span> on Instagram @urbanedgehoods for daily style inspiration
              and exclusive drops
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <Instagram className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Follow Our{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get daily style inspiration, behind-the-scenes content, and be the first to know about new drops by
            following us on Instagram.
          </p>
          <Link href="https://instagram.com/urbanedgehoods" target="_blank">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold">
              <Instagram className="h-5 w-5 mr-2" />
              Follow @urbanedgehoods
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
              className="group cursor-pointer"
            >
              <Card className="bg-white border border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={`Instagram post ${post.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300 ${
                      hoveredPost === post.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="text-center text-white space-y-4">
                      <div className="flex items-center justify-center space-x-6">
                        <div className="flex items-center">
                          <Heart className="h-6 w-6 mr-2" />
                          <span className="font-semibold">{post.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-6 w-6 mr-2" />
                          <span className="font-semibold">{post.comments}</span>
                        </div>
                      </div>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on Instagram
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-gray-700 text-sm line-clamp-3 leading-relaxed">{post.caption}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {post.comments}
                      </div>
                    </div>
                    <Instagram className="h-5 w-5 text-pink-500" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="https://instagram.com/urbanedgehoods" target="_blank">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-pink-200 text-pink-600 hover:border-pink-500 hover:bg-pink-50 px-8 py-3 text-lg font-semibold bg-transparent"
            >
              <Instagram className="h-5 w-5 mr-2" />
              View More on Instagram
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
