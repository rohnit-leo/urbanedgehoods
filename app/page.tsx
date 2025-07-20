import { Suspense } from "react"
import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Collections from "@/components/collections"
import Newsletter from "@/components/newsletter"

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Suspense fallback={<div className="h-96 bg-zinc-900 animate-pulse" />}>
        <FeaturedProducts />
      </Suspense>
      <Collections />
      <Newsletter />
    </div>
  )
}
