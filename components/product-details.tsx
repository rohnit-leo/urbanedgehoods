"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Star, Zap, Award, Droplets } from "lucide-react"
import { createClient } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import PaymentModal from "@/components/payment-modal"
import { motion } from "framer-motion"
import Label from "@/components/ui/label"

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
    featured?: boolean
    trending?: boolean
    new_arrival?: boolean
  }
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [user, setUser] = useState<any>(null)
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [loading, setLoading] = useState(false)
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    status: "loading" as "loading" | "success" | "error",
    orderDetails: undefined as any,
    errorMessage: "",
  })
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
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
      const { data: existingItem } = await supabase
        .from("cart")
        .select("*")
        .eq("user_id", user.id)
        .eq("product_id", product.id)
        .eq("size", selectedSize)
        .eq("color", selectedColor)
        .single()

      if (existingItem) {
        await supabase
          .from("cart")
          .update({ quantity: existingItem.quantity + quantity })
          .eq("id", existingItem.id)
      } else {
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

    // Show loading modal
    setPaymentModal({
      isOpen: true,
      status: "loading",
      orderDetails: undefined,
      errorMessage: "",
    })

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

            // Show success modal
            setPaymentModal({
              isOpen: true,
              status: "success",
              orderDetails: {
                orderId: order.order_number || order.id.slice(0, 8),
                amount: product.price * quantity,
                productName: product.title,
              },
              errorMessage: "",
            })
          } catch (error) {
            console.error("Error saving order:", error)
            setPaymentModal({
              isOpen: true,
              status: "error",
              orderDetails: undefined,
              errorMessage: "Payment successful but failed to save order details",
            })
          }
        },
        modal: {
          ondismiss: () => {
            setPaymentModal({
              isOpen: true,
              status: "error",
              orderDetails: undefined,
              errorMessage: "Payment was cancelled",
            })
          },
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

    script.onerror = () => {
      setPaymentModal({
        isOpen: true,
        status: "error",
        orderDetails: undefined,
        errorMessage: "Failed to load payment gateway",
      })
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
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="aspect-square relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-2xl">
                <Image
                  src={`/products/bomber-jacket-${
                    product.slug.includes("cyber-luxe")
                      ? "1"
                      : product.slug.includes("artistic-fusion")
                        ? "2"
                        : product.slug.includes("digital-wave")
                          ? "3"
                          : product.slug.includes("velocity-orange")
                            ? "4"
                            : product.slug.includes("signature-white")
                              ? "5"
                              : product.slug.includes("arctic-blue")
                                ? "6"
                                : product.slug.includes("spectrum-burst")
                                  ? "7"
                                  : "8"
                  }.webp`}
                  alt={product.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-3">
                  {product.new_arrival && (
                    <Badge className="bg-green-500 text-white font-bold px-3 py-1">NEW ARRIVAL</Badge>
                  )}
                  {product.trending && (
                    <Badge className="bg-red-500 text-white font-bold flex items-center gap-1 px-3 py-1">
                      <Zap className="h-3 w-3" />
                      TRENDING
                    </Badge>
                  )}
                  {discountPercentage > 0 && (
                    <Badge className="bg-amber-500 text-black font-bold px-3 py-1">-{discountPercentage}% OFF</Badge>
                  )}
                </div>
              </div>

              {/* Premium Features */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/20">
                  <CardContent className="p-4 text-center">
                    <Droplets className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-blue-400">Waterproof</p>
                    <p className="text-xs text-zinc-400">Outer Shell</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/20">
                  <CardContent className="p-4 text-center">
                    <Award className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-purple-400">Triple Layer</p>
                    <p className="text-xs text-zinc-400">Premium Build</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-amber-500/20">
                  <CardContent className="p-4 text-center">
                    <Shield className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-amber-400">In-House</p>
                    <p className="text-xs text-zinc-400">Manufactured</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <Badge
                  variant="secondary"
                  className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30 px-4 py-2"
                >
                  {product.category.toUpperCase().replace("-", " ")}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  {product.title}
                </h1>

                <div className="flex items-center gap-6 mb-6">
                  <span className="text-5xl font-bold text-amber-500">₹{product.price}</span>
                  {product.compare_price && (
                    <div className="flex flex-col">
                      <span className="text-2xl text-zinc-500 line-through">₹{product.compare_price}</span>
                      <span className="text-sm text-green-400 font-semibold">
                        Save ₹{product.compare_price - product.price}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-zinc-400">(4.9) • 247 reviews</span>
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
                      className={`h-14 text-lg font-semibold transition-all duration-300 ${
                        selectedSize === size
                          ? "bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/25"
                          : "border-zinc-600 text-white hover:border-amber-500 hover:text-amber-500 hover:shadow-lg hover:shadow-amber-500/10"
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
                <div className="grid grid-cols-5 gap-3">
                  {product.colors?.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? "default" : "outline"}
                      onClick={() => setSelectedColor(color)}
                      className={`h-14 text-lg font-semibold transition-all duration-300 ${
                        selectedColor === color
                          ? "bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/25"
                          : "border-zinc-600 text-white hover:border-amber-500 hover:text-amber-500 hover:shadow-lg hover:shadow-amber-500/10"
                      }`}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Quantity</Label>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(Number.parseInt(value))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(product.stock_quantity)].map((_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button onClick={handleAddToCart} className="bg-amber-500 text-black hover:bg-amber-600">
                  Add to Cart
                </Button>
                <Button onClick={handleBuyNow} className="bg-green-500 text-black hover:bg-green-600">
                  Buy Now
                </Button>
              </div>

              {/* Wishlist Button */}
              <div className="flex items-center gap-2">
                <Button onClick={handleWishlist} className="bg-zinc-800 text-white hover:bg-zinc-900">
                  {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                </Button>
                <Heart className="h-6 w-6 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {paymentModal.isOpen && (
        <PaymentModal
          status={paymentModal.status}
          orderDetails={paymentModal.orderDetails}
          errorMessage={paymentModal.errorMessage}
          onClose={() =>
            setPaymentModal({ isOpen: false, status: "loading", orderDetails: undefined, errorMessage: "" })
          }
        />
      )}
    </>
  )
}
