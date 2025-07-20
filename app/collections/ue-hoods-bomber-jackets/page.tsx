"use client"

import { createClient } from "@/lib/supabase"
import ProductCard from "@/components/product-card"

export default async function BomberJacketsPage() {
  const supabase = createClient()

  const { data: products } = await supabase
    .from("products")
    .select(`
      *,
      product_images!inner(image_url, is_primary)
    `)
    .eq("category", "ue-hoods-bomber-jackets")
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
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            UE HOODS <span className="text-amber-500">BOMBER JACKETS</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Premium triple-layered bomber jackets with exclusive vector art designs. In-house manufactured with
            waterproof outer shell, soft cushioning layer, and microfiber inner lining.
          </p>

          {/* Collection Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">8</div>
              <div className="text-zinc-400 text-sm font-medium">UNIQUE DESIGNS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">3</div>
              <div className="text-zinc-400 text-sm font-medium">LAYER CONSTRUCTION</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
              <div className="text-zinc-400 text-sm font-medium">WATERPROOF</div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {productsWithImages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsWithImages.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-zinc-400 text-xl">No bomber jackets found. Please run the database setup script.</p>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-500/20">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Waterproof Outer Shell</h3>
            <p className="text-zinc-400">Advanced waterproof technology keeps you dry in any weather condition.</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl border border-purple-500/20">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Soft Cushioning Layer</h3>
            <p className="text-zinc-400">Premium cushioning provides superior comfort and insulation.</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-2xl border border-amber-500/20">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Microfiber Inner Lining</h3>
            <p className="text-zinc-400">Luxurious microfiber interior feels incredible against your skin.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
