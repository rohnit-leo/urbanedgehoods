"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Eye, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

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
  short_description?: string
}

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const discountPercentage = product.compare_price
    ? Math.round(((product.compare_price - product.price) / product.compare_price) * 100)
    : 0

  const getProductImage = (slug: string) => {
    if (slug.includes("cyber-luxe")) return "/products/bomber-jacket-1.webp"
    if (slug.includes("artistic-fusion")) return "/products/bomber-jacket-2.webp"
    if (slug.includes("digital-wave")) return "/products/bomber-jacket-3.webp"
    if (slug.includes("velocity-orange")) return "/products/bomber-jacket-4.webp"
    if (slug.includes("signature-white")) return "/products/bomber-jacket-5.webp"
    if (slug.includes("arctic-blue")) return "/products/bomber-jacket-6.webp"
    if (slug.includes("spectrum-burst")) return "/products/bomber-jacket-7.webp"
    if (slug.includes("midnight-black")) return "/products/bomber-jacket-8.webp"

    // Shirts
    if (slug.includes("tropical-paradise")) return "/products/shirt-1.webp"
    if (slug.includes("urban-safari")) return "/products/shirt-2.webp"
    if (slug.includes("midnight-bloom")) return "/products/shirt-3.webp"
    if (slug.includes("ocean-breeze")) return "/products/shirt-4.webp"
    if (slug.includes("desert-sunset")) return "/products/shirt-5.webp"
    if (slug.includes("forest-whisper")) return "/products/shirt-6.webp"
    if (slug.includes("city-lights")) return "/products/shirt-7.webp"
    if (slug.includes("vintage-charm")) return "/products/shirt-8.webp"
    if (slug.includes("modern-classic")) return "/products/shirt-9.webp"

    // Hoodies
    if (slug.includes("premium-oversized")) return "/products/hoodie-1.webp"
    if (slug.includes("street-essential")) return "/products/hoodie-2.webp"
    if (slug.includes("urban-comfort")) return "/products/hoodie-3.webp"
    if (slug.includes("classic-pullover")) return "/products/hoodie-4.webp"
    if (slug.includes("minimalist-crew")) return "/products/hoodie-5.webp"

    return "/products/bomber-jacket-1.webp"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card
        className="bg-white border border-gray-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={getProductImage(product.slug) || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.new_arrival && <Badge className="bg-green-500 text-white font-bold px-2 py-1 text-xs">NEW</Badge>}
            {product.trending && <Badge className="bg-red-500 text-white font-bold px-2 py-1 text-xs">TRENDING</Badge>}
            {product.featured && (
              <Badge className="bg-amber-500 text-white font-bold px-2 py-1 text-xs">FEATURED</Badge>
            )}
            {discountPercentage > 0 && (
              <Badge className="bg-black text-white font-bold px-2 py-1 text-xs">-{discountPercentage}%</Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div
            className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <Button
              size="sm"
              variant="secondary"
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
            >
              <ShoppingCart className="h-4 w-4 text-gray-600" />
            </Button>
          </div>

          {/* Quick View Overlay */}
          <div
            className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link href={`/products/${product.slug}`}>
              <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 py-2">
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </Link>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="space-y-3">
            {/* Category */}
            <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs font-medium">
              {product.category.replace("-", " ").toUpperCase()}
            </Badge>

            {/* Title */}
            <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-amber-600 transition-colors">
              {product.title}
            </h3>

            {/* Description */}
            {product.short_description && (
              <p className="text-sm text-gray-600 line-clamp-2">{product.short_description}</p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-sm text-gray-500 ml-1">(4.9)</span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
                {product.compare_price && (
                  <span className="text-lg text-gray-500 line-through">₹{product.compare_price}</span>
                )}
              </div>
              {discountPercentage > 0 && (
                <Badge className="bg-green-100 text-green-700 font-semibold">
                  Save ₹{product.compare_price! - product.price}
                </Badge>
              )}
            </div>

            {/* Add to Cart Button */}
            <Link href={`/products/${product.slug}`} className="block">
              <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 transition-all duration-300">
                View Product
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
