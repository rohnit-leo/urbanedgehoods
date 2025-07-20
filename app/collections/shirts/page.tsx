"use client"

import { createClient } from "@/lib/supabase"
import ProductCard from "@/components/product-card"
import { motion } from "framer-motion"

export default async function ShirtsPage() {
  const supabase = createClient()

  const { data: products } = await supabase
    .from("products")
    .select(`
      *,
      product_images!inner(image_url, is_primary)
    `)
    .eq("category", "shirts")
    .eq("status", "active")
    .eq("product_images.is_primary", true)
    .order("created_at", { ascending: false })

  // Transform data to include image_url from product_images
  const productsWithImages =
    products?.map((product) => ({
      ...product,
      image_url: product.product_images?.[0]?.image_url || null,
    })) || []

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            CUBAN COLLAR <span className="text-amber-500">SHIRTS</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Premium Cuban collar shirts perfect for parties, casual outings, and street fashion. Gender-neutral designs
            with breathable fabrics and bold patterns that make a statement.
          </p>

          {/* Collection Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">9</div>
              <div className="text-zinc-400 text-sm font-medium">UNIQUE PATTERNS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
              <div className="text-zinc-400 text-sm font-medium">COTTON BLEND</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">CUBAN</div>
              <div className="text-zinc-400 text-sm font-medium">COLLAR STYLE</div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        {productsWithImages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsWithImages.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-zinc-400 text-xl">No shirts found. Please run the database setup script.</p>
          </div>
        )}

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-2xl border border-amber-500/20">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Cuban Collar Design</h3>
            <p className="text-zinc-400">Relaxed open-neck silhouette perfect for parties and casual occasions.</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-500/20">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Premium Cotton Blend</h3>
            <p className="text-zinc-400">Breathable fabric that feels soft and maintains vibrant colors.</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl border border-purple-500/20">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Bold Pattern Designs</h3>
            <p className="text-zinc-400">From flames to geometric patterns, each shirt makes a unique statement.</p>
          </div>
        </motion.div>

        {/* Style Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 border border-zinc-700"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">STYLING GUIDE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-500 mb-4">Party & Night Out</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Pair with black jeans and fresh white sneakers</li>
                <li>• Add silver chain accessories for extra flair</li>
                <li>• Leave a few buttons open for relaxed party vibes</li>
                <li>• Perfect for clubs, parties, and music events</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-500 mb-4">Casual & Street Style</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Layer over a fitted tank top for depth</li>
                <li>• Style with chinos for smart-casual occasions</li>
                <li>• Roll up sleeves for a more relaxed look</li>
                <li>• Great for casual dates and weekend outings</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
