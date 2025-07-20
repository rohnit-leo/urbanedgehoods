"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share2, ShoppingBag, Truck, Shield, RotateCcw, Star } from "lucide-react"
import { createClient } from "@/lib/supabase"
import { useRouter } from "next/navigation"

interface ProductDetailsProps {
  product: {
    id: string
    title: string
    description: string
    short_description: string
    price: number
    compare_price?: number
    category: string
    sizes: string[]
    colors: string[]
    materials: string[]
    care_instructions: string
    stock_quantity: number
  }
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [user, setUser] = useState<any>(null)
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [loading, setLoading] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        // Check if product is in wishlist
        const { data } = await supabase
          .from("wishlist")
          .select("id")
          .eq("user_id", user.id)
          .eq("product_id", product.id)
          .single()
        setIsInWishlist(!!data)
      }
    }
    getUser()
  }, [product.id])

  const handleAddToCart = async () => {
    if (!user) {
      router.push("/auth/login")
      return
    }

    if (!selectedSize || !selectedColor) {
      alert("Please select size and color")
      return
    }

    setLoading(true)

    try {
      // Check if item already exists in cart
      const { data: existingItem } = await supabase
        .from("cart")
        .select("*")
        .eq("user_id", user.id)
        .eq("product_id", product.id)
        .eq("size", selectedSize)
        .eq("color", selectedColor)
        .single()

      if (existingItem) {
        // Update quantity
        await supabase
          .from("cart")
          .update({ quantity: existingItem.quantity + quantity })
          .eq("id", existingItem.id)
      } else {
        // Add new item
        await supabase.from("cart").insert([
          {
            user_id: user.id,
            product_id: product.id,
            quantity,
            size: selectedSize,
            color: selectedColor,
          },
        ])
      }

      alert("Added to cart!")
    } catch (error) {
      console.error("Error adding to cart:", error)
      alert("Failed to add to cart")
    } finally {
      setLoading(false)
    }
  }

  const handleBuyNow = async () => {
    if (!user) {
      router.push("/auth/login")
      return
    }

    if (!selectedSize || !selectedColor) {
      alert("Please select size and color")
      return
    }

    // Load Razorpay script
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const options = {
        key: "rzp_live_VTrMKfLm3cgEZN",
        amount: product.price * quantity * 100,
        currency: "INR",
        name: "UrbanEdge Hoods",
        description: `${product.title} - ${selectedSize} - ${selectedColor}`,
        image: "/logo-dark.png",
        handler: async (response: any) => {
          try {
            // Save order to database
            const orderData = {
              customer_email: user.email,
              customer_name: user.user_metadata?.full_name || "Customer",
              total_amount: product.price * quantity,
              payment_status: "completed",
              razorpay_payment_id: response.razorpay_payment_id,
              shipping_address: {
                name: user.user_metadata?.full_name || "Customer",
                email: user.email,
                address: "Address to be collected",
              },
              order_status: "processing",
            }

            const { data: order, error: orderError } = await supabase
              .from("orders")
              .insert([orderData])
              .select()
              .single()

            if (orderError) throw orderError

            // Add order items
            await supabase.from("order_items").insert([
              {
                order_id: order.id,
                product_id: product.id,
                product_title: product.title,
                quantity,
                unit_price: product.price,
                total_price: product.price * quantity,
                size: selectedSize,
                color: selectedColor,
              },
            ])

            alert(`Payment successful! Order ID: ${order.order_number}`)
            router.push("/account/orders")
          } catch (error) {
            console.error("Error saving order:", error)
            alert("Payment successful but failed to save order details")
          }
        },
        prefill: {
          name: user.user_metadata?.full_name || "",
          email: user.email || "",
          contact: "",
        },
        theme: {
          color: "#f59e0b",
        },
      }

      const rzp = new (window as any).Razorpay(options)
      rzp.open()
    }
  }

  const handleWishlist = async () => {
    if (!user) {
      router.push("/auth/login")
      return
    }

    try {
      if (isInWishlist) {
        await supabase.from("wishlist").delete().eq("user_id", user.id).eq("product_id", product.id)
        setIsInWishlist(false)
      } else {
        await supabase.from("wishlist").insert([{ user_id: user.id, product_id: product.id }])
        setIsInWishlist(true)
      }
    } catch (error) {
      console.error("Error updating wishlist:", error)
    }
  }

  const discountPercentage = product.compare_price
    ? Math.round(((product.compare_price - product.price) / product.compare_price) * 100)
    : 0

  return (
    <div className="min-h-screen bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
              <Image
                src={`/placeholder.svg?height=800&width=800&query=${product.title} ${product.category} streetwear clothing`}
                alt={product.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              {discountPercentage > 0 && (
                <Badge className="absolute top-4 left-4 bg-red-500 text-white">-{discountPercentage}%</Badge>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square relative overflow-hidden rounded-lg bg-zinc-800 border border-zinc-700"
                >
                  <Image
                    src={`/placeholder.svg?height=200&width=200&query=${product.title} angle ${i}`}
                    alt={`${product.title} view ${i}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
                {product.category.toUpperCase()}
              </Badge>
              <h1 className="text-4xl font-bold mb-4 leading-tight">{product.title}</h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-amber-500">₹{product.price}</span>
                {product.compare_price && (
                  <span className="text-2xl text-zinc-500 line-through">₹{product.compare_price}</span>
                )}
                {discountPercentage > 0 && <Badge className="bg-red-500 text-white">Save {discountPercentage}%</Badge>}
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-zinc-400">(4.8) • 124 reviews</span>
              </div>

              <p className="text-zinc-300 text-lg leading-relaxed mb-8">{product.short_description}</p>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Size</Label>
              <div className="grid grid-cols-5 gap-3">
                {product.sizes?.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 ${
                      selectedSize === size
                        ? "bg-amber-500 text-black border-amber-500"
                        : "border-zinc-700 text-white hover:border-amber-500 hover:text-amber-500"
                    }`}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Color</Label>
              <div className="flex gap-3">
                {product.colors?.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 ${
                      selectedColor === color
                        ? "bg-amber-500 text-black border-amber-500"
                        : "border-zinc-700 text-white hover:border-amber-500 hover:text-amber-500"
                    }`}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Quantity</Label>
              <Select onValueChange={(value) => setQuantity(Number.parseInt(value))}>
                <SelectTrigger className="w-32 bg-zinc-900 border-zinc-700">
                  <SelectValue placeholder="1" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button
                  onClick={handleBuyNow}
                  className="flex-1 bg-amber-500 hover:bg-amber-400 text-black font-semibold py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
                  size="lg"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  BUY NOW
                </Button>
                <Button
                  onClick={handleAddToCart}
                  disabled={loading}
                  variant="outline"
                  className="flex-1 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-semibold py-4 text-lg rounded-xl transition-all duration-300 bg-transparent"
                  size="lg"
                >
                  {loading ? "ADDING..." : "ADD TO CART"}
                </Button>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleWishlist}
                  variant="outline"
                  className={`flex-1 border-zinc-700 hover:bg-zinc-800 font-semibold py-3 rounded-xl transition-all duration-300 ${
                    isInWishlist ? "bg-red-500/20 border-red-500 text-red-400" : "text-white"
                  }`}
                >
                  <Heart className={`mr-2 h-4 w-4 ${isInWishlist ? "fill-current" : ""}`} />
                  {isInWishlist ? "IN WISHLIST" : "ADD TO WISHLIST"}
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-zinc-700 text-white hover:bg-zinc-800 font-semibold py-3 rounded-xl transition-all duration-300 bg-transparent"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  SHARE
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-4 text-center">
                  <Truck className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm text-zinc-300">Free Shipping</p>
                  <p className="text-xs text-zinc-500">Above ₹2999</p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-4 text-center">
                  <RotateCcw className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm text-zinc-300">Easy Returns</p>
                  <p className="text-xs text-zinc-500">7 Day Return</p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-4 text-center">
                  <Shield className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm text-zinc-300">Authentic</p>
                  <p className="text-xs text-zinc-500">100% Original</p>
                </CardContent>
              </Card>
            </div>

            {/* Stock Status */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-zinc-300">Stock Status:</span>
                <Badge
                  className={
                    product.stock_quantity > 10 ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                  }
                >
                  {product.stock_quantity > 10 ? "In Stock" : `Only ${product.stock_quantity} left`}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-zinc-900 border border-zinc-800">
              <TabsTrigger
                value="description"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="materials"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
              >
                Materials
              </TabsTrigger>
              <TabsTrigger value="care" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                Care Guide
              </TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-8">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-zinc-300 leading-relaxed text-lg">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="materials" className="mt-8">
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Materials & Construction</h3>
                  <ul className="space-y-3">
                    {product.materials?.map((material, index) => (
                      <li key={index} className="flex items-center text-zinc-300">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                        {material}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="care" className="mt-8">
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Care Instructions</h3>
                  <p className="text-zinc-300 leading-relaxed">{product.care_instructions}</p>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-zinc-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Washing</h4>
                      <p className="text-zinc-400 text-sm">Machine wash cold with similar colors</p>
                    </div>
                    <div className="bg-zinc-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Drying</h4>
                      <p className="text-zinc-400 text-sm">Tumble dry low or hang dry</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white">Customer Reviews</h3>
                    <Button
                      variant="outline"
                      className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black bg-transparent"
                    >
                      Write Review
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border-b border-zinc-800 pb-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold">
                            U
                          </div>
                          <div>
                            <p className="font-semibold text-white">Urban Fashionista</p>
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                                ))}
                              </div>
                              <span className="text-zinc-500 text-sm">2 days ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-zinc-300">
                          Amazing quality and fit! The material feels premium and the design is exactly what I was
                          looking for. Definitely recommend this to anyone looking for authentic streetwear.
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={`block text-sm font-medium ${className}`}>{children}</label>
}
