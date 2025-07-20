"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Menu, Search, ShoppingCart, User, Heart } from "lucide-react"
import { createClient } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function Header() {
  const [user, setUser] = useState<any>(null)
  const [cartCount, setCartCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        const { data: cartItems } = await supabase.from("cart").select("quantity").eq("user_id", user.id)

        const total = cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0
        setCartCount(total)
      }
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    router.refresh()
  }

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-center text-center">
            <p className="text-sm font-medium text-amber-900">
              🔥 <span className="font-bold">WINTER SALE</span> - Up to 40% OFF on Premium Streetwear | Free Shipping on
              Orders ₹2999+
            </p>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/logo-light.png"
                  alt="UrbanEdge Hoods"
                  width={50}
                  height={50}
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-amber-600 to-gray-900 bg-clip-text text-transparent">
                  URBANEDGE
                </h1>
                <p className="text-xs text-gray-600 font-medium tracking-wider">PREMIUM STREETWEAR</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Home
              </Link>
              <div className="relative group">
                <Link href="/collections" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                  Collections
                </Link>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-4 space-y-2">
                    <Link
                      href="/collections/ue-hoods-bomber-jackets"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                    >
                      UE Hoods Bomber Jackets
                    </Link>
                    <Link
                      href="/collections/shirts"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                    >
                      Cuban Collar Shirts
                    </Link>
                    <Link
                      href="/collections/sweatshirts-hoodies"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                    >
                      Sweatshirts & Hoodies
                    </Link>
                  </div>
                </div>
              </div>
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

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <Button variant="ghost" size="sm" className="hidden sm:flex text-gray-700 hover:text-amber-600">
                <Search className="h-5 w-5" />
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="sm" className="hidden sm:flex text-gray-700 hover:text-amber-600">
                <Heart className="h-5 w-5" />
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="sm" className="relative text-gray-700 hover:text-amber-600">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center">
                    {cartCount}
                  </Badge>
                )}
              </Button>

              {/* User Account */}
              {user ? (
                <div className="hidden sm:flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="text-gray-700 hover:text-amber-600">
                    <User className="h-5 w-5" />
                  </Button>
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    size="sm"
                    className="border-amber-200 text-amber-700 hover:bg-amber-50 bg-transparent"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="hidden sm:flex items-center space-x-2">
                  <Link href="/auth/login">
                    <Button variant="ghost" size="sm" className="text-gray-700 hover:text-amber-600">
                      Login
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}

              {/* Mobile Menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden text-gray-700">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-white">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <Image src="/logo-light.png" alt="UrbanEdge Hoods" width={40} height={40} />
                      <div>
                        <h2 className="font-bold text-gray-900">URBANEDGE</h2>
                        <p className="text-xs text-gray-600">PREMIUM STREETWEAR</p>
                      </div>
                    </div>
                  </div>

                  <nav className="space-y-4">
                    <Link
                      href="/"
                      className="block py-3 px-4 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/collections"
                      className="block py-3 px-4 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Collections
                    </Link>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/collections/ue-hoods-bomber-jackets"
                        className="block py-2 px-4 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        UE Hoods Bomber Jackets
                      </Link>
                      <Link
                        href="/collections/shirts"
                        className="block py-2 px-4 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Cuban Collar Shirts
                      </Link>
                      <Link
                        href="/collections/sweatshirts-hoodies"
                        className="block py-2 px-4 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sweatshirts & Hoodies
                      </Link>
                    </div>
                    <Link
                      href="/about"
                      className="block py-3 px-4 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/brand-works"
                      className="block py-3 px-4 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Brand Works
                    </Link>
                    <Link
                      href="/sportswear"
                      className="block py-3 px-4 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sportswear
                    </Link>
                    <Link
                      href="/contact"
                      className="block py-3 px-4 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>

                    <div className="border-t border-gray-200 pt-4 mt-6">
                      {user ? (
                        <div className="space-y-2">
                          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-amber-600">
                            <User className="h-5 w-5 mr-2" />
                            Profile
                          </Button>
                          <Button
                            onClick={handleLogout}
                            variant="outline"
                            className="w-full border-amber-200 text-amber-700 hover:bg-amber-50 bg-transparent"
                          >
                            Logout
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-amber-600">
                              Login
                            </Button>
                          </Link>
                          <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
                            <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                              Sign Up
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
