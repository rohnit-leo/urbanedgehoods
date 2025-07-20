"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Heart, ShoppingCart, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center py-2 px-4 text-sm font-medium">
        🔥 WINTER SALE - Up to 40% OFF on Premium Streetwear | Free Shipping on Orders ₹2999+
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo-light.png" alt="UrbanEdge" width={40} height={40} className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">URBANEDGE</span>
                <span className="text-xs text-gray-600 -mt-1">PREMIUM STREETWEAR</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/collections" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Collections
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/brand-works" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Brand Works
              </Link>
              <Link href="/sportswear" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Sportswear
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <div className="hidden sm:flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                  Sign Up
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <Link href="/" className="block py-2 text-gray-700 hover:text-amber-600">
                Home
              </Link>
              <Link href="/collections" className="block py-2 text-gray-700 hover:text-amber-600">
                Collections
              </Link>
              <Link href="/about" className="block py-2 text-gray-700 hover:text-amber-600">
                About
              </Link>
              <Link href="/brand-works" className="block py-2 text-gray-700 hover:text-amber-600">
                Brand Works
              </Link>
              <Link href="/sportswear" className="block py-2 text-gray-700 hover:text-amber-600">
                Sportswear
              </Link>
              <Link href="/contact" className="block py-2 text-gray-700 hover:text-amber-600">
                Contact
              </Link>
              <div className="flex items-center space-x-2 pt-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  Login
                </Button>
                <Button size="sm" className="flex-1 bg-amber-600 hover:bg-amber-700">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
