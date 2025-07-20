"use client"

import { createClient } from "@/lib/supabase"
import ProductCard from "@/components/product-card"
import { motion } from "framer-motion"

export default async function FeaturedProducts() {
  const supabase = createClient()

  const { data: products } = await supabase
    .from("products")
    .select(`
      *,
      product_images!inner(image_url, is_primary)
    `)
    .eq("featured", true)
    .eq("status", "active")
    .eq("product_images.is_primary", true)
    .limit(8)

  // Transform data to include image_url from product_images
  const productsWithImages =
    products?.map((product) => ({
      ...product,
      image_url: product.product_images?.[0]?.image_url || null,
    })) || []

  if (!productsWithImages || productsWithImages.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">FEATURED DROPS</h2>
            <p className="text-zinc-400 text-xl">Handpicked pieces that define the streets</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-zinc-800 rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              FEATURED <span className="text-amber-500">DROPS</span>
            </h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Handpicked pieces that define the streets. Premium triple-layered bomber jackets with exclusive vector art
              designs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsWithImages.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/collections/ue-hoods-bomber-jackets"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
          >
            VIEW ALL BOMBER JACKETS
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
