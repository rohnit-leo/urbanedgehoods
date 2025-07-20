"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ShoppingBag, User, Search, Heart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        // Get cart count
        const { count: cartCount } = await supabase.from("cart").select("*", { count: "exact" }).eq("user_id", user.id)
        setCartCount(cartCount || 0)

        // Get wishlist count
        const { count: wishlistCount } = await supabase
          .from("wishlist")
          .select("*", { count: "exact" })
          .eq("user_id", user.id)
        setWishlistCount(wishlistCount || 0)
      }
    }
    getUser()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  const navigation = [
    { name: "New Arrivals", href: "/collections/new-arrivals" },
    { name: "T-Shirts", href: "/collections/t-shirts" },
    { name: "Hoodies", href: "/collections/hoodies" },
    { name: "Jackets", href: "/collections/jackets" },
    { name: "ORIGINALS", href: "/collections/originals", featured: true },
    { name: "Custom Orders", href: "/custom-orders" },
  ]

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-black text-center py-2 text-sm font-medium">
        🔥 FREE SHIPPING ON ORDERS ABOVE ₹2999 | LIMITED TIME OFFER 🔥
      </div>

      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-amber-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image src="/logo-dark.png" alt="UrbanEdge Hoods" fill className="object-contain" priority />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white tracking-tight">
                  URBAN<span className="text-amber-500">EDGE</span>
                </div>
                <div className="text-xs text-amber-500 font-medium tracking-wider">NEXT LEVEL FASHION</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                    item.featured ? "text-amber-500 hover:text-amber-400" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  {item.featured && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                      NEW
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-zinc-300 hover:text-white hover:bg-zinc-800"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* User Account */}
              {user ? (
                <div className="flex items-center space-x-2">
                  <Link href="/account">
                    <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-white hover:bg-zinc-800">
                      <User className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Button variant="ghost" onClick={handleSignOut} className="text-zinc-300 hover:text-white text-sm">
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Link href="/auth/login">
                  <Button variant="ghost" className="text-zinc-300 hover:text-white text-sm">
                    Sign In
                  </Button>
                </Link>
              )}

              {/* Wishlist */}
              <Link href="/wishlist">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-300 hover:text-white hover:bg-zinc-800 relative"
                >
                  <Heart className="h-5 w-5" />
                  {wishlistCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center p-0">
                      {wishlistCount}
                    </Badge>
                  )}
                </Button>
              </Link>

              {/* Shopping Bag */}
              <Link href="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-300 hover:text-white hover:bg-zinc-800 relative"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-amber-500 text-black text-xs min-w-[20px] h-5 flex items-center justify-center p-0">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </Link>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden text-zinc-300 hover:text-white">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-black border-zinc-800 w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="flex items-center space-x-3 pb-4 border-b border-zinc-800">
                      <Image src="/logo-dark.png" alt="UrbanEdge Hoods" width={40} height={40} />
                      <div>
                        <div className="text-lg font-bold text-white">URBANEDGE</div>
                        <div className="text-xs text-amber-500">NEXT LEVEL FASHION</div>
                      </div>
                    </div>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors ${
                          item.featured ? "text-amber-500 hover:text-amber-400" : "text-zinc-300 hover:text-white"
                        }`}
                      >
                        {item.name}
                        {item.featured && (
                          <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="py-4 border-t border-zinc-800">
              <div className="relative">
                <Input
                  placeholder="Search for products, categories..."
                  className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400 pr-10"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
