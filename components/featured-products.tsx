"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import ProductCard from "./product-card"

interface Product {
  id: string
  name: string
  price: number
  image_url: string
  slug: string
  category: string
  description?: string
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .limit(8)
          .order("created_at", { ascending: false })

        if (error) throw error
        setProducts(data || [])
      } catch (err) {
        console.error("Error fetching products:", err)
        setError("Failed to load products")
        // Fallback products for demo
        setProducts([
          {
            id: "1",
            name: "Urban Bomber Jacket",
            price: 4999,
            image_url: "/products/bomber-jacket-1.webp",
            slug: "urban-bomber-jacket",
            category: "Jackets",
          },
          {
            id: "2",
            name: "Street Style Hoodie",
            price: 2999,
            image_url: "/products/hoodie-1.webp",
            slug: "street-style-hoodie",
            category: "Hoodies",
          },
          {
            id: "3",
            name: "Classic Cuban Shirt",
            price: 1999,
            image_url: "/products/shirt-1.webp",
            slug: "classic-cuban-shirt",
            category: "Shirts",
          },
          {
            id: "4",
            name: "Premium Bomber",
            price: 5999,
            image_url: "/products/bomber-jacket-2.webp",
            slug: "premium-bomber",
            category: "Jackets",
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600">Discover our most popular streetwear pieces</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600">Discover our most popular streetwear pieces</p>
        </div>

        {error && (
          <div className="text-center text-red-600 mb-8">
            <p>{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && !loading && (
          <div className="text-center text-gray-500">
            <p>No products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}
