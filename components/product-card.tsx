"use client"

import Image from "next/image"
import Link from "next/link"
import { Eye, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  name: string
  price: number
  image_url: string
  slug: string
  category: string
  description?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.image_url || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>

          {/* View Details Button */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button asChild className="w-full bg-white text-gray-900 hover:bg-gray-100">
              <Link href={`/products/${product.slug}`} className="flex items-center justify-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>View Details</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium">{product.category}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
          <div className="flex items-center space-x-1 text-amber-400">
            <span className="text-sm">★★★★★</span>
            <span className="text-xs text-gray-500">(4.8)</span>
          </div>
        </div>
        {product.description && <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>}
      </div>
    </div>
  )
}
