"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingBag, Eye, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

interface Product {
  id: string
  title: string
  price: number
  compare_price?: number
  image_url?: string
  category: string
  slug: string
  featured?: boolean
  trending?: boolean
  new_arrival?: boolean
}

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const discountPercentage = product.compare_price
    ? Math.round(((product.compare_price - product.price) / product.compare_price) * 100)
    : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="aspect-square relative overflow-hidden bg-zinc-800">
        <Image
          src={product.image_url || `/placeholder.svg?height=400&width=400&query=${product.title} bomber jacket`}
          alt={product.title}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 animate-pulse" />
        )}

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.new_arrival && <Badge className="bg-green-500 text-white font-bold">NEW</Badge>}
          {product.trending && (
            <Badge className="bg-red-500 text-white font-bold flex items-center gap-1">
              <Zap className="h-3 w-3" />
              TRENDING
            </Badge>
          )}
          {discountPercentage > 0 && (
            <Badge className="bg-amber-500 text-black font-bold">-{discountPercentage}%</Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div
          className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <Button
            size="icon"
            variant="secondary"
            className="bg-white/90 hover:bg-white text-black rounded-full shadow-lg"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Link href={`/products/${product.slug}`}>
            <Button
              size="icon"
              variant="secondary"
              className="bg-white/90 hover:bg-white text-black rounded-full shadow-lg"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Quick Add to Cart */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xs text-amber-500 uppercase tracking-wide mb-2 font-semibold">
          {product.category.replace("-", " ")}
        </div>

        <h3 className="text-white font-bold text-lg mb-3 line-clamp-2 group-hover:text-amber-400 transition-colors">
          {product.title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-amber-500">₹{product.price}</span>
            {product.compare_price && (
              <span className="text-lg text-zinc-500 line-through">₹{product.compare_price}</span>
            )}
          </div>

          <Link href={`/products/${product.slug}`}>
            <Button
              size="sm"
              className="bg-zinc-800 hover:bg-amber-500 hover:text-black text-white border border-zinc-600 hover:border-amber-500 transition-all duration-300"
            >
              VIEW
            </Button>
          </Link>
        </div>

        {/* Premium Features */}
        <div className="mt-4 flex items-center gap-4 text-xs text-zinc-400">
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            Waterproof
          </span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            Triple Layer
          </span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            Premium
          </span>
        </div>
      </div>
    </motion.div>
  )
}
