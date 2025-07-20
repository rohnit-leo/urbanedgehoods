"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Shield,
  Droplets,
  Wind,
  Target,
  Users,
  Trophy,
  Palette,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
} from "lucide-react"

export default function SportswarePage() {
  const fabrics = [
    "Dot Knit",
    "PMC",
    "Dry-Fit",
    "Airmesh",
    "Ultra-Light",
    "Super Polyester",
    "Moisture-Wicking",
    "4-Way Stretch",
  ]

  const features = [
    {
      icon: Droplets,
      title: "Moisture Control & Breathability",
      description: "Stay cool and focused with fabrics designed for optimal airflow",
      color: "blue",
    },
    {
      icon: Zap,
      title: "4-Way Stretch",
      description: "Enjoy maximum flexibility and unrestricted movement",
      color: "purple",
    },
    {
      icon: Shield,
      title: "Enhanced Comfort & Support",
      description: "Engineered for athletes, providing comfort and support for top performance",
      color: "green",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30 px-6 py-2 text-lg mb-8">
              CUSTOM SPORTSWEAR
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              FULLY CUSTOMISED <span className="text-amber-500">SPORTSWEAR</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Premium, fully customized sportswear that brings your team's identity to life. From concept to completion,
              we manage every step to ensure outstanding performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 text-lg">
                <Target className="h-5 w-5 mr-2" />
                Start Custom Order
              </Button>
              <Button
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-8 py-4 text-lg bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call +91 77989 84147
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              OUR <span className="text-amber-500">PROCESS</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Our streamlined process ensures your team gets the perfect look and feel for peak performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Design Consultation</h3>
              <p className="text-zinc-400 leading-relaxed">
                Share your vision with us, and our team will craft a 3D model of your custom design for a realistic
                preview
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Approval Process</h3>
              <p className="text-zinc-400 leading-relaxed">
                Review the design and request adjustments to ensure it meets your exact specifications before production
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Fabric Selection</h3>
              <p className="text-zinc-400 leading-relaxed">
                Choose from our range of premium sports fabrics tailored to your sport's demands and performance needs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Production & Delivery</h3>
              <p className="text-zinc-400 leading-relaxed">
                With minimum order of just 7 pieces, your sportswear will be crafted and delivered to your doorstep on
                schedule
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Fabrics */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              PREMIUM <span className="text-amber-500">FABRICS</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Choose from our range of high-performance fabrics designed for different sports and activities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {fabrics.map((fabric, index) => (
              <motion.div
                key={fabric}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-6 text-center border border-zinc-700 hover:border-amber-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2">{fabric}</h3>
                <div className="w-full h-2 bg-gradient-to-r from-amber-500 to-red-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Tech Features */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              HIGH-TECH <span className="text-amber-500">FEATURES</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Enhance performance with our advanced design options engineered for athletes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card
                  className={`bg-gradient-to-br from-${feature.color}-500/10 to-${feature.color}-600/10 border-${feature.color}-500/20 h-full`}
                >
                  <CardContent className="p-8 text-center">
                    <feature.icon className={`h-12 w-12 text-${feature.color}-400 mx-auto mb-6`} />
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              IDEAL <span className="text-amber-500">FOR</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Teams</h3>
              <p className="text-zinc-400 leading-relaxed">
                Showcase your team spirit with custom uniforms that combine functionality and style for competitive
                sports
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Gyms & Fitness Studios</h3>
              <p className="text-zinc-400 leading-relaxed">
                Equip your staff and members with premium branded sportswear that represents your fitness brand
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Individual Athletes</h3>
              <p className="text-zinc-400 leading-relaxed">
                Enjoy performance-focused sportswear designed exclusively for your personal training and competition
                needs
              </p>
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
              WHY CHOOSE <span className="text-amber-500">URBANEDGE HOODS?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <Droplets className="h-12 w-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Performance-Driven Fabrics</h3>
              <p className="text-zinc-400 leading-relaxed">
                Stay comfortable with high-quality, moisture-wicking fabrics designed for intense activities and
                competitions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <Wind className="h-12 w-12 text-purple-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Tailored Fit & Flexibility</h3>
              <p className="text-zinc-400 leading-relaxed">
                Our designs balance freedom of movement with a style that stands out, ensuring optimal performance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Durable & Resilient</h3>
              <p className="text-zinc-400 leading-relaxed">
                Crafted to endure, our gear withstands even the toughest workouts and competitions while maintaining
                quality
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              CUSTOM <span className="text-amber-500">SPORTSWEAR RANGE</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              We offer a wide range of fully customized sportswear designed specifically to meet your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Jerseys",
              "Tracksuits",
              "Pullovers",
              "Sports Kits",
              "Training Wear",
              "Team Uniforms",
              "Athletic Shorts",
              "Performance Tees",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-500/10 to-red-500/10 rounded-xl p-6 text-center border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300"
              >
                <CheckCircle className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500/20 to-red-500/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              READY TO ELEVATE <span className="text-amber-500">YOUR GAME?</span>
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Contact us today to discuss your sportswear needs and bring your vision to life! Let's create sportswear
              that empowers your performance and represents your team's identity like never before.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-amber-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zinc-400">+91 77989 84147</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-amber-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zinc-400">support@urbanedgehoods.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MessageCircle className="h-8 w-8 text-amber-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">DM Us</h3>
                <p className="text-zinc-400">@urbanedgehoods</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 text-lg">
                  <Palette className="h-5 w-5 mr-2" />
                  Start Custom Design
                </Button>
              </Link>
              <a href="tel:+917798984147">
                <Button
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-8 py-4 text-lg bg-transparent"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
