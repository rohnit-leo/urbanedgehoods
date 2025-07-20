import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="UrbanEdge Hoods Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          URBAN<span className="text-red-500">EDGE</span>
          <br />
          <span className="text-3xl md:text-5xl font-light text-zinc-300">HOODS</span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Premium streetwear that defines your edge.
          <br />
          Bold. Unique. Uncompromising.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/collections">
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200 font-semibold px-8 py-3 text-lg">
              SHOP NOW
            </Button>
          </Link>
          <Link href="/collections/originals">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 text-lg bg-transparent"
            >
              ORIGINALS COLLECTION
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-8 mt-12 text-center">
          <div>
            <div className="text-2xl font-bold text-white">400+</div>
            <div className="text-zinc-400 text-sm">GSM PREMIUM</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-zinc-400 text-sm">COTTON</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">MADE</div>
            <div className="text-zinc-400 text-sm">IN INDIA</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
