import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase"
import ProductDetails from "@/components/product-details"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const supabase = createClient()

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", params.slug)
    .eq("status", "active")
    .single()

  if (!product) {
    notFound()
  }

  return <ProductDetails product={product} />
}
