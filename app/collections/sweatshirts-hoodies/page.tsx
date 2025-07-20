"use client"

import { createClient } from "@/lib/supabase"
import ProductCard from "@/components/product-card"
import { motion } from "framer-motion"

export default async function SweatshirtsHoodiesPage() {
  const supabase = createClient()

  const { data: products } = await supabase
    .from("products")
    .select(`
      *,
      product_images!inner(image_url, is_primary)
    `)
    .eq("category", "sweatshirts-hoodies")
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
            SWEATSHIRTS & <span className="text-amber-500">HOODIES</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Premium 400 GSM cotton fleece hoodies and sweatshirts with stone-washed finish. Oversized fits designed for
            ultimate comfort and authentic street style.
          </p>

          {/* Collection Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">400</div>
              <div className="text-zinc-400 text-sm font-medium">GSM COTTON FLEECE</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">STONE</div>
              <div className="text-zinc-400 text-sm font-medium">WASHED FINISH</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">OVERSIZED</div>
              <div className="text-zinc-400 text-sm font-medium">STREETWEAR FIT</div>
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
            <p className="text-zinc-400 text-xl">
              No hoodies or sweatshirts found. Please run the database setup script.
            </p>
          </div>
        )}

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-500/20">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">400 GSM Cotton Fleece</h3>
            <p className="text-zinc-400">Heavy-weight cotton fleece for superior warmth and comfort.</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-2xl border border-amber-500/20">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Stone-Washed Finish</h3>
            <p className="text-zinc-400">Pre-treated for authentic lived-in feel and enhanced softness.</p>
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
            <h3 className="text-xl font-bold text-white mb-2">Oversized Streetwear Fit</h3>
            <p className="text-zinc-400">Contemporary relaxed silhouette perfect for layering and comfort.</p>
          </div>
        </motion.div>

        {/* Style Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 border border-zinc-700"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">COMFORT MEETS STYLE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-500 mb-4">Casual Comfort</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Perfect for lazy weekends and cozy indoor days</li>
                <li>• Layer over basic tees for effortless style</li>
                <li>• Pair with joggers or sweatpants for maximum comfort</li>
                <li>• Ideal for gym sessions and active lifestyle</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-500 mb-4">Street Style</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Layer under jackets for elevated streetwear looks</li>
                <li>• Style with jeans and sneakers for urban appeal</li>
                <li>• Mix and match colors for creative combinations</li>
                <li>• Perfect for creative work and casual meetups</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
