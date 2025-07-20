"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const discountPercentage = product.compare_price
    ? Math.round(((product.compare_price - product.price) / product.compare_price) * 100)
    : 0

  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-amber-300 transition-all duration-500 hover:shadow-xl hover:shadow-amber-100/50 transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="aspect-square relative overflow-hidden bg-gray-50">
        <Image
          src={product.image_url || `/placeholder.svg?height=400&width=400&query=${product.title} fashion`}
          alt={product.title}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.new_arrival && (
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold">
              NEW
            </Badge>
          )}
          {product.trending && (
            <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold">
              TRENDING
            </Badge>
          )}
          {discountPercentage > 0 && (
            <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold">
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <Button
            size="icon"
            variant="secondary"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${
              isWishlisted
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-white/90 hover:bg-white text-gray-800"
            }`}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg backdrop-blur-sm hover:scale-110 transition-all duration-300"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Rating */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span className="text-gray-800 text-xs font-medium">4.9</span>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-4 left-4 right-16 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xs text-amber-600 uppercase tracking-wide mb-2 font-semibold">
          {product.category.replace("-", " ")}
        </div>

        <h3 className="text-gray-900 font-bold text-lg mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors">
          {product.title}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              ₹{product.price}
            </span>
            {product.compare_price && (
              <span className="text-lg text-gray-500 line-through">₹{product.compare_price}</span>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <Link href={`/products/${product.slug}`} className="block">
          <Button
            variant="outline"
            className="w-full border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-xl font-semibold"
          >
            View Details
          </Button>
        </Link>

        {/* Premium Features */}
        <div className="flex items-center gap-4 text-xs mt-4">
          <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            Premium
          </span>
          <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            Quality
          </span>
          <span className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-200">
            <div className="w-2 h-2 bg-amber-500 rounded-full" />
            Exclusive
          </span>
        </div>
      </div>
    </div>
  )
}
