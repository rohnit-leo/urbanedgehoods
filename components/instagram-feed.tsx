"use client"

import { Instagram, Heart, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

const instagramPosts = [
  {
    id: 1,
    image: "/products/bomber-jacket-1.webp",
    likes: 1234,
    comments: 89,
    caption: "New bomber jacket drop! 🔥 #UrbanEdgeHoods #StreetStyle",
  },
  {
    id: 2,
    image: "/products/shirt-1.webp",
    likes: 987,
    comments: 56,
    caption: "Cuban collar vibes ✨ #Fashion #Style",
  },
  {
    id: 3,
    image: "/products/hoodie-1.webp",
    likes: 1567,
    comments: 123,
    caption: "Comfort meets style 💯 #Hoodies #Comfort",
  },
  {
    id: 4,
    image: "/products/bomber-jacket-2.webp",
    likes: 2134,
    comments: 178,
    caption: "Premium quality, unmatched style 🌟 #Premium",
  },
  {
    id: 5,
    image: "/products/shirt-2.webp",
    likes: 876,
    comments: 67,
    caption: "Bold patterns for bold personalities 🎨 #Patterns",
  },
  {
    id: 6,
    image: "/products/hoodie-2.webp",
    likes: 1345,
    comments: 98,
    caption: "Cozy season essentials 🍂 #CozyVibes",
  },
]

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Instagram className="w-8 h-8 text-pink-500" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-amber-600 bg-clip-text text-transparent">
              Follow Us on Instagram
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay updated with our latest drops, behind-the-scenes content, and style inspiration.
          </p>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-full">
            <Instagram className="w-5 h-5 mr-2" />
            @urbanedgehoods
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt="Instagram post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm mb-3 line-clamp-2">{post.caption}</p>
                    <div className="flex items-center space-x-4 text-white">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{post.likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instagram Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Announcement Bar */}
        <div className="mt-16 bg-gradient-to-r from-gray-100 via-amber-50 to-gray-100 border border-amber-200 rounded-2xl py-4 overflow-hidden">
          <div className="animate-scroll-reverse whitespace-nowrap">
            <span className="inline-block px-8 text-gray-800 font-medium">
              🌟 JOIN 10K+ FASHION ENTHUSIASTS ON INSTAGRAM 🌟
            </span>
            <span className="inline-block px-8 text-gray-800 font-medium">
              📸 TAG US FOR A CHANCE TO BE FEATURED 📸
            </span>
            <span className="inline-block px-8 text-gray-800 font-medium">
              💎 EXCLUSIVE BEHIND-THE-SCENES CONTENT 💎
            </span>
            <span className="inline-block px-8 text-gray-800 font-medium">
              🎁 INSTAGRAM-ONLY GIVEAWAYS & CONTESTS 🎁
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
