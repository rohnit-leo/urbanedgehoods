"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="mb-6">Subscribe to get special offers, free giveaways, and exclusive deals.</p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <Input type="email" placeholder="Enter your email" className="bg-white text-gray-900 border-0" />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo-light.png" alt="UrbanEdge" width={40} height={40} className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold">URBANEDGE</span>
                  <span className="text-xs text-gray-400 -mt-1">PREMIUM STREETWEAR</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm">
                Redefining street style with premium quality streetwear. Express your unique urban identity with our
                exclusive collections.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/collections" className="text-gray-400 hover:text-white transition-colors">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/brand-works" className="text-gray-400 hover:text-white transition-colors">
                    Brand Works
                  </Link>
                </li>
                <li>
                  <Link href="/sportswear" className="text-gray-400 hover:text-white transition-colors">
                    Custom Sportswear
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/collections/ue-hoods-bomber-jackets"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Bomber Jackets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections/sweatshirts-hoodies"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Hoodies & Sweatshirts
                  </Link>
                </li>
                <li>
                  <Link href="/collections/shirts" className="text-gray-400 hover:text-white transition-colors">
                    Cuban Shirts
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Accessories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Sale Items
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-400 text-sm">
                    123 Street Style Avenue
                    <br />
                    Urban District, City 110001
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-400 text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-400 text-sm">hello@urbanedge.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 UrbanEdge. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Return Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
