import { createClient } from "@/lib/supabase"
import ProductCard from "@/components/product-card"

export default async function FeaturedProducts() {
  const supabase = createClient()

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("featured", true)
    .eq("status", "active")
    .limit(8)

  if (!products || products.length === 0) {
    return (
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">FEATURED DROPS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-zinc-800 rounded-lg h-96 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">FEATURED DROPS</h2>
          <p className="text-zinc-400 text-lg">Handpicked pieces that define the streets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
