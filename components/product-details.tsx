"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Heart, Share2, ShoppingBag } from "lucide-react"
import { createClient } from "@/utils/supabase/client"

interface ProductDetailsProps {
  product: {
    id: string
    title: string
    description: string
    price: number
    category: string
    image_url: string
    sizes: string[]
    colors: string[]
  }
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color")
      return
    }

    // Initialize Razorpay payment
    const options = {
      key: "rzp_live_VTrMKfLm3cgEZN", // Your live Razorpay Key ID
      amount: product.price * quantity * 100, // Amount in paise
      currency: "INR",
      name: "UrbanEdge Hoods",
      description: product.title,
      image: "/logo.png",
      handler: (response: any) => {
        // Handle successful payment
        console.log("Payment successful:", response)
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`)
        // Save order to Supabase
        saveOrderToSupabase(response)
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#dc2626",
      },
    }

    const rzp = new (window as any).Razorpay(options)
    rzp.open()
  }

  const saveOrderToSupabase = async (paymentResponse: any) => {
    const supabase = createClient()

    const orderData = {
      customer_email: "customer@example.com", // You can get this from auth
      total_amount: product.price * quantity,
      payment_status: "completed",
      razorpay_payment_id: paymentResponse.razorpay_payment_id,
      shipping_address: {
        name: "Customer Name",
        address: "Customer Address",
      },
      order_status: "processing",
    }

    const { error } = await supabase.from("orders").insert([orderData])
    if (!error) {
      console.log("Order saved successfully!")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-zinc-900">
              <Image
                src={product.image_url || `/placeholder.svg?height=600&width=600&query=${product.title} streetwear`}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category.toUpperCase()}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              <p className="text-3xl font-bold text-red-500 mb-6">₹{product.price}</p>
            </div>

            <div className="prose prose-invert">
              <p className="text-zinc-300 leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <Select onValueChange={setSelectedSize}>
                <SelectTrigger className="bg-zinc-900 border-zinc-700">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes?.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <Select onValueChange={setSelectedColor}>
                <SelectTrigger className="bg-zinc-900 border-zinc-700">
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  {product.colors?.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <Select onValueChange={(value) => setQuantity(Number.parseInt(value))}>
                <SelectTrigger className="bg-zinc-900 border-zinc-700 w-24">
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
              <Button
                onClick={handleBuyNow}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-lg"
                size="lg"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                BUY NOW
              </Button>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="flex-1 border-zinc-700 text-white hover:bg-zinc-800 bg-transparent"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  WISHLIST
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-zinc-700 text-white hover:bg-zinc-800 bg-transparent"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  SHARE
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <div className="border-t border-zinc-800 pt-6">
              <h3 className="font-semibold mb-4">PRODUCT FEATURES</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Premium 400 GSM cotton fleece</li>
                <li>• Oversized fit for ultimate comfort</li>
                <li>• Stone-washed for vintage appeal</li>
                <li>• Made in India with love</li>
                <li>• Machine washable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Razorpay Script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </div>
  )
}
