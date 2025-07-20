"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Award, Globe, Heart, Users, Zap, Target } from "lucide-react"

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              ABOUT <span className="text-amber-500">URBANEDGE</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
              Where fashion meets innovation. We are a dynamic clothing brand dedicated to bringing you the latest in
              clothing and fast fashion with an edge that sets you apart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-500">OUR STORY</h2>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  UrbanEdge Hoods was founded with a passion for high-quality, trendsetting fashion. We wanted to create
                  a brand that offers more than just clothing—it's a lifestyle, a statement, and a way to stand out in
                  any crowd.
                </p>
                <p>
                  Inspired by modern urban culture and global fashion trends, UrbanEdge Hoods provides timeless designs
                  that embrace both individuality and versatility. As manufacturers, we are committed to producing
                  premium garments with a focus on craftsmanship and innovation.
                </p>
                <p>
                  Our goal is not just to create a brand but to make a global impact. We envision UrbanEdge Hoods
                  becoming a recognized name worldwide, offering contemporary, high-quality fashion that stands out in
                  every market.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-red-500/20 rounded-3xl overflow-hidden border border-amber-500/30">
                <Image src="/products/hoodie-1.webp" alt="UrbanEdge Hoods Story" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-gradient-to-r from-amber-500/5 to-red-500/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-amber-500">FOUNDER'S MESSAGE</h2>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 md:p-12 border border-zinc-700">
              <div className="max-w-4xl mx-auto">
                <blockquote className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-8 italic">
                  "We are not just sellers like a typical fashion brand. We are the customer. We are our first consumer
                  and we are among all the customers. We understand what a customer expects from a brand."
                </blockquote>
                <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                  <p>
                    Every design, every fabric choice, and every product is something we ourselves would wear. Our
                    founder's vision is clear: we aren't just creating a brand; we're creating an experience.
                  </p>
                  <p>
                    We don't just sell clothes; we sell the experience, the vibe, and the feeling that each piece
                    brings. Every collection is crafted to make you feel as if it's made for you, because we believe in
                    offering more than just a product.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">WHAT WE OFFER</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              At UrbanEdge Hoods, we focus on delivering premium quality and innovative designs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl p-8 border border-blue-500/20"
            >
              <Award className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Premium Clothing</h3>
              <p className="text-zinc-400 leading-relaxed">
                From oversized tees to sleek jackets, our collections bring you versatile pieces that are crafted to
                perfection with premium, skin-friendly fabrics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-2xl p-8 border border-amber-500/20"
            >
              <Zap className="h-12 w-12 text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Quality Craftsmanship</h3>
              <p className="text-zinc-400 leading-relaxed">
                Every piece is made with premium materials that ensure comfort, durability, and an elevated style that
                stands the test of time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl p-8 border border-purple-500/20"
            >
              <Target className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Innovative Sportswear</h3>
              <p className="text-zinc-400 leading-relaxed">
                Through our high-tech designs and customized sports kits, we provide performance-driven apparel that
                matches your athletic needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl overflow-hidden border border-purple-500/30">
                <Image src="/products/bomber-jacket-1.webp" alt="UrbanEdge Vision" fill className="object-cover" />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-500">OUR VISION</h2>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Our mission is simple: to elevate your wardrobe and empower you to express your unique style. With a
                  blend of classic and bold looks, UrbanEdge Hoods is committed to offering next-level fashion that
                  stands up to the standards of global brands.
                </p>
                <p>
                  We're here for individuals who dare to make a statement, inspiring confidence through style. As we
                  grow, our vision expands globally. We aim to create a brand that resonates with fashion-forward
                  individuals worldwide.
                </p>
                <p>
                  Our commitment to innovation, quality, and style will guide us toward becoming a global fashion
                  leader.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              WHY <span className="text-amber-500">URBANEDGE HOODS?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Attention to Detail</h3>
              <p className="text-zinc-400">
                From fabric selection to stitching, every detail is meticulously crafted to give you an exceptional
                product.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Customization Options</h3>
              <p className="text-zinc-400">
                Whether you're looking for custom sports kits or personalized apparel, we offer tailored solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Fast Fashion with Integrity</h3>
              <p className="text-zinc-400">
                We blend the pace of fast fashion with sustainable practices, ensuring high-quality products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Reach</h3>
              <p className="text-zinc-400">
                As manufacturers, we have the capacity to scale and meet the needs of international markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500/10 to-red-500/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Users className="h-16 w-16 text-amber-500 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              JOIN <span className="text-amber-500">THE UE HOOD</span>
            </h2>
            <p className="text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed mb-8">
              At UrbanEdge Hoods, we're more than just a brand. We're a community of fashion enthusiasts, athletes, and
              individuals who appreciate style, quality, and innovation. Known as The UE Hood, our community is all
              about connecting those who share a passion for unique, premium fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/urbanedgehoods"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Follow on Instagram
              </a>
              <a
                href="https://facebook.com/urbanedgehoods"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Follow on Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
