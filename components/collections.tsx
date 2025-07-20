import Link from "next/link"
import Image from "next/image"

export default function Collections() {
  const collections = [
    {
      name: "OVERSIZED TEES",
      description: "Cotton, breathable, stone-washed perfection",
      image: "/placeholder.svg?height=600&width=400",
      href: "/collections/t-shirts",
    },
    {
      name: "ORIGINALS JACKETS",
      description: "Premium triple-layered bomber jackets",
      image: "/placeholder.svg?height=600&width=400",
      href: "/collections/originals",
    },
    {
      name: "HOODIES & SWEATSHIRTS",
      description: "400 GSM heavy cotton fleece",
      image: "/placeholder.svg?height=600&width=400",
      href: "/collections/hoodies",
    },
    {
      name: "CUBAN COLLAR SHIRTS",
      description: "Gender-neutral partywear essentials",
      image: "/placeholder.svg?height=600&width=400",
      href: "/collections/shirts",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">COLLECTIONS</h2>
          <p className="text-zinc-400 text-lg">Curated for the streets, crafted for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <Link key={collection.name} href={collection.href} className="group">
              <div className="relative overflow-hidden rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-all duration-300">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-400 transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-zinc-300 text-sm">{collection.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
