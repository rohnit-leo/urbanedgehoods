import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  title: string
  price: number
  image_url: string
  category: string
  slug: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-zinc-800 rounded-lg overflow-hidden hover:bg-zinc-700 transition-all duration-300">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={product.image_url || `/placeholder.svg?height=400&width=400&query=${product.title} streetwear clothing`}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>

      <div className="p-6">
        <div className="text-xs text-zinc-400 uppercase tracking-wide mb-2">{product.category}</div>
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-red-400 transition-colors">
          {product.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">₹{product.price}</span>
          <Link href={`/products/${product.slug}`}>
            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
              VIEW
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
