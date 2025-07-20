"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Handshake, TrendingUp, Package, DollarSign, Users, Globe, Mail, Phone, MessageCircle } from "lucide-react"

export default function BrandWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 px-6 py-2 text-lg mb-8">
              PARTNERSHIPS & WHOLESALE
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              BRAND <span className="text-amber-500">WORKS</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
              Partner with UrbanEdge Hoods and bring premium streetwear to your customers. We're passionate about
              working with retailers who share our vision for high-quality, trend-setting fashion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-500">PARTNERSHIP PROGRAM</h2>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  At UrbanEdge Hoods, we're passionate about bringing high-quality, trend-setting fashion to more
                  people, and we're thrilled to partner with retailers who share our vision.
                </p>
                <p>
                  Our Brand Works and Wholesale program is designed for business owners who want to offer their
                  customers premium, contemporary clothing that stands out.
                </p>
                <p>
                  Whether you own a retail store, an online boutique, or are simply looking to purchase in bulk, we
                  welcome the opportunity to work together.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl overflow-hidden border border-blue-500/30">
                <Image src="/products/bomber-jacket-2.webp" alt="Brand Partnership" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              WHY PARTNER <span className="text-amber-500">WITH US?</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              By partnering with UrbanEdge Hoods, you'll benefit from our commitment to excellence and dedicated support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-amber-500/20 h-full">
                <CardContent className="p-8">
                  <Package className="h-12 w-12 text-amber-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Exclusive, High-Quality Products</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Our apparel is crafted with premium fabrics and attention to detail, making each piece stand out in
                    your store and attract discerning customers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/20 h-full">
                <CardContent className="p-8">
                  <TrendingUp className="h-12 w-12 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Flexible Ordering</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Whether you're looking to stock a few items or purchase in large quantities, we offer flexible
                    options to fit your business needs and budget.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20 h-full">
                <CardContent className="p-8">
                  <DollarSign className="h-12 w-12 text-green-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Competitive Wholesale Pricing</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Enjoy wholesale pricing that allows for solid profit margins, giving you the value and quality your
                    customers expect from premium streetwear.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">PARTNERSHIP OPPORTUNITIES</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              We work with various types of businesses to bring UrbanEdge Hoods to customers worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Retail Stores</h3>
              <p className="text-zinc-400">Physical retail locations looking to stock premium streetwear collections</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Online Boutiques</h3>
              <p className="text-zinc-400">E-commerce platforms and online stores seeking unique fashion brands</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Bulk Orders</h3>
              <p className="text-zinc-400">Businesses looking for large quantity orders for events or resale</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Collaborations</h3>
              <p className="text-zinc-400">Creative partnerships and collaborative projects with other brands</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 bg-gradient-to-r from-amber-500/10 to-red-500/10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              HOW TO <span className="text-amber-500">GET STARTED</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Starting your partnership with UrbanEdge Hoods is simple and straightforward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
              <p className="text-zinc-400 leading-relaxed">
                Reach out through our contact form or email us directly to express your interest in partnership
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Review Catalog</h3>
              <p className="text-zinc-400 leading-relaxed">
                We'll provide you with our wholesale catalog and terms, showcasing our complete product range
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Start Partnership</h3>
              <p className="text-zinc-400 leading-relaxed">
                Once approved, you can start ordering and bringing UrbanEdge Hoods to your customers
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-lg text-zinc-300 mb-8">
              Simply reach out through our contact form, and we'll be happy to provide you with our wholesale catalog
              and terms. Let's work together to bring UrbanEdge Hoods to your shelves and introduce your customers to
              the next level of fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 text-lg">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Us Now
                </Button>
              </Link>
              <a href="mailto:support@urbanedgehoods.com">
                <Button
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-8 py-4 text-lg bg-transparent"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Email Direct
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold text-white mb-12">PARTNERSHIP CONTACT</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-amber-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-zinc-400">support@urbanedgehoods.com</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-amber-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-zinc-400">+91 7798984147</p>
              </div>
              <div className="flex flex-col items-center">
                <MessageCircle className="h-8 w-8 text-amber-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Instagram</h3>
                <p className="text-zinc-400">@urbanedgehoods</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
