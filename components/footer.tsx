import Link from "next/link"
import { Instagram, Twitter, Facebook, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              URBAN<span className="text-red-500">EDGE</span> HOODS
            </div>
            <p className="text-zinc-400 mb-6 max-w-md">
              Premium streetwear that blends urban culture with high-fashion luxury. Made in India for the global
              streets.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/collections/t-shirts" className="text-zinc-400 hover:text-white transition-colors">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/collections/hoodies" className="text-zinc-400 hover:text-white transition-colors">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link href="/collections/jackets" className="text-zinc-400 hover:text-white transition-colors">
                  Jackets
                </Link>
              </li>
              <li>
                <Link href="/collections/originals" className="text-zinc-400 hover:text-white transition-colors">
                  Originals
                </Link>
              </li>
              <li>
                <Link href="/custom-orders" className="text-zinc-400 hover:text-white transition-colors">
                  Custom Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-zinc-400 hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-zinc-400 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-zinc-400 hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-zinc-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm">© 2024 UrbanEdge Hoods. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-zinc-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-zinc-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
