"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search, ShoppingBag, User, Heart, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const collections = [
    { name: "UE Hoods Bomber Jackets", href: "/collections/ue-hoods-bomber-jackets" },
    { name: "Cuban Collar Shirts", href: "/collections/shirts" },
    { name: "Sweatshirts & Hoodies", href: "/collections/sweatshirts-hoodies" },
    { name: "All Collections", href: "/collections" },
  ]

  return (
    <>
      {/* Single Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50 border-b border-amber-200 py-3 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-8 text-gray-800 font-medium">
            🔥 FREE SHIPPING ON ORDERS OVER ₹2999 🔥
          </span>
          <span className="inline-block px-8 text-gray-800 font-medium">
            ✨ NEW BOMBER JACKET COLLECTION - SHOP NOW ✨
          </span>
          <span className="inline-block px-8 text-gray-800 font-medium">
            🎯 PREMIUM QUALITY GUARANTEED 🎯
          </span>
          <span className="inline-block px-8 text-gray-800 font-medium">
            🚀 FAST DELIVERY ACROSS INDIA 🚀
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                <Image
                  src="/logo-light.png"
                  alt="UrbanEdge Hoods"
                  fill
                  className="object-contain relative z-10"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-amber-600 bg-clip-text text-transparent tracking-tight">
                  URBANEDGE
                </h1>
                <p className="text-xs text-amber-600 font-semibold tracking-wider -mt-1">HOODS</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-800 hover:text-amber-600 transition-colors duration-300 font-medium">
                Home
              </Link>

              {/* Collections Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("collections")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-800 hover:text-amber-600 transition-colors duration-300 font-medium">
                  <span>Collections</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === "collections" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                    {collections.map((collection) => (
                      <Link
                        key={collection.href}
                        href={collection.href}
                        className="block px-6 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 hover:text-amber-700 transition-all duration-300"
                      >
                        {collection.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-gray-800 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                About
              </Link>
              <Link
                href="/brand-works"
                className="text-gray-800 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                Brand Works
              </Link>
              <Link
                href="/sportswear"
                className="text-gray-800 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                Sportswear
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-64 bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-500 focus:border-amber-500 focus:ring-amber-500/20"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-800 hover:text-amber-600 hover:bg-amber-50">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-800 hover:text-amber-600 hover:bg-amber-50">
                <User className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-800 hover:text-amber-600 hover:bg-amber-50"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-800 hover:text-amber-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-800 hover:text-amber-600 transition-colors duration-300 py-2">
                  Home
                </Link>
                <div className="space-y-2">
                  <p className="text-amber-600 font-medium">Collections</p>
                  {collections.map((collection) => (
                    <Link
                      key={collection.href}
                      href={collection.href}
                      className="block text-gray-600 hover:text-amber-600 transition-colors duration-300 py-1 pl-4"
                    >
                      {collection.name}
                    </Link>
                  ))}
                </div>
                <Link href="/about" className="text-gray-800 hover:text-amber-600 transition-colors duration-300 py-2">
                  About
                </Link>
                <Link
                  href="/brand-works"
                  className="text-gray-800 hover:text-amber-600 transition-colors duration-300 py-2"
                >
                  Brand Works
                </Link>
                <Link
                  href="/sportswear"
                  className="text-gray-800 hover:text-amber-600 transition-colors duration-300 py-2"
                >
                  Sportswear
                </Link>
                <Link href="/contact" className="text-gray-800 hover:text-amber-600 transition-colors duration-300 py-2">
                  Contact
                </Link>

                {/* Mobile Search */}
                <div className="relative mt-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 w-full bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-500 focus:border-amber-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
