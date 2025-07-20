"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ShoppingBag, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { createClient } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
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
    { name: "Collections", href: "/collections" },
    { name: "T-Shirts", href: "/collections/t-shirts" },
    { name: "Hoodies", href: "/collections/hoodies" },
    { name: "Jackets", href: "/collections/jackets" },
    { name: "Custom Orders", href: "/custom-orders" },
    { name: "About", href: "/about" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white tracking-tight">
              URBAN<span className="text-red-500">EDGE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {item.name}
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

            {/* Shopping Bag */}
            <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-white hover:bg-zinc-800">
              <ShoppingBag className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-zinc-300 hover:text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-zinc-800">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-zinc-300 hover:text-white transition-colors text-lg font-medium"
                    >
                      {item.name}
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
            <Input
              placeholder="Search products..."
              className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400"
            />
          </div>
        )}
      </div>
    </header>
  )
}
