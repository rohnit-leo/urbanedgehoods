"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createClient } from "@/lib/supabase"
import { Trash2, Edit } from "lucide-react"

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [products, setProducts] = useState<any[]>([])
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // Product form state
  const [productForm, setProductForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image_url: "",
    featured: false,
    status: "active",
  })

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "admin" && password === "urbanedge") {
      setIsAuthenticated(true)
      fetchProducts()
      fetchOrders()
    } else {
      alert("Invalid credentials")
    }
  }

  const fetchProducts = async () => {
    const supabase = createClient()
    const { data } = await supabase.from("products").select("*").order("created_at", { ascending: false })
    setProducts(data || [])
  }

  const fetchOrders = async () => {
    const supabase = createClient()
    const { data } = await supabase.from("orders").select("*").order("created_at", { ascending: false })
    setOrders(data || [])
  }

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const supabase = createClient()
    const slug = productForm.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")

    const { error } = await supabase.from("products").insert([
      {
        ...productForm,
        price: Number.parseFloat(productForm.price),
        slug,
      },
    ])

    if (!error) {
      setProductForm({
        title: "",
        description: "",
        price: "",
        category: "",
        image_url: "",
        featured: false,
        status: "active",
      })
      fetchProducts()
    }

    setLoading(false)
  }

  const handleDeleteProduct = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      const supabase = createClient()
      await supabase.from("products").delete().eq("id", id)
      fetchProducts()
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">ADMIN LOGIN</h2>
            <p className="mt-2 text-zinc-400">UrbanEdge Hoods Admin Panel</p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-6">
            <div>
              <Label htmlFor="username" className="text-white">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 bg-zinc-900 border-zinc-700 text-white"
                placeholder="admin"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 bg-zinc-900 border-zinc-700 text-white"
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">
              LOGIN TO ADMIN
            </Button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">URBANEDGE ADMIN</h1>
          <Button onClick={() => setIsAuthenticated(false)} variant="outline">
            Logout
          </Button>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="bg-zinc-900">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="add-product">Add Product</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <Card className="bg-zinc-900 border-zinc-700">
              <CardHeader>
                <CardTitle className="text-white">Product Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-white">{product.title}</h3>
                        <p className="text-zinc-400">
                          ₹{product.price} • {product.category}
                        </p>
                        <p className="text-sm text-zinc-500">
                          {product.featured ? "Featured" : "Not Featured"} • {product.status}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDeleteProduct(product.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card className="bg-zinc-900 border-zinc-700">
              <CardHeader>
                <CardTitle className="text-white">Order Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {orders.length === 0 ? (
                    <p className="text-zinc-400">No orders yet</p>
                  ) : (
                    orders.map((order) => (
                      <div key={order.id} className="p-4 bg-zinc-800 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-white">Order #{order.id.slice(0, 8)}</h3>
                            <p className="text-zinc-400">{order.customer_email}</p>
                            <p className="text-sm text-zinc-500">₹{order.total_amount}</p>
                          </div>
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              order.payment_status === "completed" ? "bg-green-600" : "bg-yellow-600"
                            }`}
                          >
                            {order.payment_status}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="add-product">
            <Card className="bg-zinc-900 border-zinc-700">
              <CardHeader>
                <CardTitle className="text-white">Add New Product</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddProduct} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="title" className="text-white">
                        Product Title
                      </Label>
                      <Input
                        id="title"
                        value={productForm.title}
                        onChange={(e) => setProductForm({ ...productForm, title: e.target.value })}
                        required
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="Oversized Hoodie"
                      />
                    </div>

                    <div>
                      <Label htmlFor="price" className="text-white">
                        Price (₹)
                      </Label>
                      <Input
                        id="price"
                        type="number"
                        value={productForm.price}
                        onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                        required
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="2999"
                      />
                    </div>

                    <div>
                      <Label htmlFor="category" className="text-white">
                        Category
                      </Label>
                      <Select onValueChange={(value) => setProductForm({ ...productForm, category: value })}>
                        <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="t-shirts">T-Shirts</SelectItem>
                          <SelectItem value="hoodies">Hoodies</SelectItem>
                          <SelectItem value="jackets">Jackets</SelectItem>
                          <SelectItem value="shirts">Shirts</SelectItem>
                          <SelectItem value="originals">Originals</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="image_url" className="text-white">
                        Image URL
                      </Label>
                      <Input
                        id="image_url"
                        value={productForm.image_url}
                        onChange={(e) => setProductForm({ ...productForm, image_url: e.target.value })}
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-white">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      value={productForm.description}
                      onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                      className="bg-zinc-800 border-zinc-700 text-white"
                      placeholder="Product description..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2 text-white">
                      <input
                        type="checkbox"
                        checked={productForm.featured}
                        onChange={(e) => setProductForm({ ...productForm, featured: e.target.checked })}
                        className="rounded"
                      />
                      <span>Featured Product</span>
                    </label>
                  </div>

                  <Button type="submit" disabled={loading} className="bg-red-600 hover:bg-red-700 text-white">
                    {loading ? "Adding Product..." : "Add Product"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
