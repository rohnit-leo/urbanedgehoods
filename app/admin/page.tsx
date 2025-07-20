"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { createClient } from "@/lib/supabase"
import { Trash2, Edit, Plus, Eye, Package, Users, ShoppingCart, TrendingUp } from "lucide-react"

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [products, setProducts] = useState<any[]>([])
  const [orders, setOrders] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [editingProduct, setEditingProduct] = useState<any>(null)
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
  })
  const router = useRouter()

  // Enhanced product form state
  const [productForm, setProductForm] = useState({
    title: "",
    description: "",
    short_description: "",
    price: "",
    compare_price: "",
    category: "",
    subcategory: "",
    brand: "UrbanEdge Hoods",
    sku: "",
    featured: false,
    trending: false,
    new_arrival: false,
    status: "active",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White"],
    materials: ["Cotton"],
    care_instructions: "",
    stock_quantity: "",
    weight: "",
    tags: [],
    seo_title: "",
    seo_description: "",
  })

  const [productImages, setProductImages] = useState<string[]>([])
  const [newImageUrl, setNewImageUrl] = useState("")

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "admin" && password === "urbanedge") {
      setIsAuthenticated(true)
      fetchData()
    } else {
      alert("Invalid credentials")
    }
  }

  const fetchData = async () => {
    const supabase = createClient()

    // Fetch products
    const { data: productsData } = await supabase.from("products").select("*").order("created_at", { ascending: false })
    setProducts(productsData || [])

    // Fetch orders
    const { data: ordersData } = await supabase.from("orders").select("*").order("created_at", { ascending: false })
    setOrders(ordersData || [])

    // Fetch categories
    const { data: categoriesData } = await supabase.from("categories").select("*").order("sort_order")
    setCategories(categoriesData || [])

    // Calculate stats
    const totalRevenue = ordersData?.reduce((sum, order) => sum + Number.parseFloat(order.total_amount || 0), 0) || 0
    setStats({
      totalProducts: productsData?.length || 0,
      totalOrders: ordersData?.length || 0,
      totalRevenue,
      totalCustomers: 0, // You can implement this later
    })
  }

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const supabase = createClient()
    const slug = productForm.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")

    try {
      const productData = {
        ...productForm,
        price: Number.parseFloat(productForm.price),
        compare_price: productForm.compare_price ? Number.parseFloat(productForm.compare_price) : null,
        stock_quantity: Number.parseInt(productForm.stock_quantity) || 0,
        weight: productForm.weight ? Number.parseFloat(productForm.weight) : null,
        slug: editingProduct ? editingProduct.slug : slug,
        sizes: JSON.stringify(productForm.sizes),
        colors: JSON.stringify(productForm.colors),
        materials: JSON.stringify(productForm.materials),
        tags: JSON.stringify(productForm.tags),
      }

      let result
      if (editingProduct) {
        result = await supabase.from("products").update(productData).eq("id", editingProduct.id).select()
      } else {
        result = await supabase.from("products").insert([productData]).select()
      }

      if (result.error) throw result.error

      // Handle product images
      if (productImages.length > 0 && result.data?.[0]) {
        const productId = result.data[0].id

        // Delete existing images if editing
        if (editingProduct) {
          await supabase.from("product_images").delete().eq("product_id", productId)
        }

        // Insert new images
        const imageData = productImages.map((url, index) => ({
          product_id: productId,
          image_url: url,
          alt_text: `${productForm.title} - Image ${index + 1}`,
          sort_order: index,
          is_primary: index === 0,
        }))

        await supabase.from("product_images").insert(imageData)
      }

      // Reset form
      setProductForm({
        title: "",
        description: "",
        short_description: "",
        price: "",
        compare_price: "",
        category: "",
        subcategory: "",
        brand: "UrbanEdge Hoods",
        sku: "",
        featured: false,
        trending: false,
        new_arrival: false,
        status: "active",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White"],
        materials: ["Cotton"],
        care_instructions: "",
        stock_quantity: "",
        weight: "",
        tags: [],
        seo_title: "",
        seo_description: "",
      })
      setProductImages([])
      setEditingProduct(null)
      fetchData()
      alert(editingProduct ? "Product updated successfully!" : "Product added successfully!")
    } catch (error) {
      console.error("Error saving product:", error)
      alert("Failed to save product")
    } finally {
      setLoading(false)
    }
  }

  const handleEditProduct = (product: any) => {
    setEditingProduct(product)
    setProductForm({
      ...product,
      price: product.price.toString(),
      compare_price: product.compare_price?.toString() || "",
      stock_quantity: product.stock_quantity.toString(),
      weight: product.weight?.toString() || "",
      sizes: Array.isArray(product.sizes) ? product.sizes : JSON.parse(product.sizes || '["S", "M", "L", "XL", "XXL"]'),
      colors: Array.isArray(product.colors) ? product.colors : JSON.parse(product.colors || '["Black", "White"]'),
      materials: Array.isArray(product.materials) ? product.materials : JSON.parse(product.materials || '["Cotton"]'),
      tags: Array.isArray(product.tags) ? product.tags : JSON.parse(product.tags || "[]"),
    })
  }

  const handleDeleteProduct = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      const supabase = createClient()
      const { error } = await supabase.from("products").delete().eq("id", id)
      if (!error) {
        fetchData()
        alert("Product deleted successfully!")
      }
    }
  }

  const addImageUrl = () => {
    if (newImageUrl.trim()) {
      setProductImages([...productImages, newImageUrl.trim()])
      setNewImageUrl("")
    }
  }

  const removeImage = (index: number) => {
    setProductImages(productImages.filter((_, i) => i !== index))
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center px-4">
        <Card className="w-full max-w-md bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Image src="/logo-dark.png" alt="UrbanEdge Hoods" width={80} height={80} className="object-contain" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">ADMIN LOGIN</CardTitle>
            <p className="text-zinc-400">UrbanEdge Hoods Admin Panel</p>
          </CardHeader>
          <CardContent>
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
                  className="mt-1 bg-zinc-800 border-zinc-700 text-white"
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
                  className="mt-1 bg-zinc-800 border-zinc-700 text-white"
                  placeholder="••••••••"
                />
              </div>

              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold">
                LOGIN TO ADMIN
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Image src="/logo-dark.png" alt="UrbanEdge Hoods" width={50} height={50} />
            <div>
              <h1 className="text-3xl font-bold">URBANEDGE ADMIN</h1>
              <p className="text-zinc-400">Manage your streetwear empire</p>
            </div>
          </div>
          <Button
            onClick={() => setIsAuthenticated(false)}
            variant="outline"
            className="border-amber-500 text-amber-500"
          >
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 border-amber-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-400 text-sm font-medium">Total Products</p>
                  <p className="text-3xl font-bold text-white">{stats.totalProducts}</p>
                </div>
                <Package className="h-8 w-8 text-amber-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-400 text-sm font-medium">Total Orders</p>
                  <p className="text-3xl font-bold text-white">{stats.totalOrders}</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-400 text-sm font-medium">Total Revenue</p>
                  <p className="text-3xl font-bold text-white">₹{stats.totalRevenue.toLocaleString()}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-400 text-sm font-medium">Customers</p>
                  <p className="text-3xl font-bold text-white">{stats.totalCustomers}</p>
                </div>
                <Users className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="bg-zinc-900 border border-zinc-800">
            <TabsTrigger value="products" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
              Products
            </TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
              Orders
            </TabsTrigger>
            <TabsTrigger
              value="add-product"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
            >
              {editingProduct ? "Edit Product" : "Add Product"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Product Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-6 bg-zinc-800/50 rounded-xl border border-zinc-700"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-zinc-700 rounded-lg overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=64&width=64&query=${product.title}`}
                            alt={product.title}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg">{product.title}</h3>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-amber-500 font-bold">₹{product.price}</span>
                            <Badge variant="secondary" className="bg-zinc-700 text-zinc-300">
                              {product.category}
                            </Badge>
                            {product.featured && (
                              <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">Featured</Badge>
                            )}
                            {product.trending && (
                              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Trending</Badge>
                            )}
                          </div>
                          <p className="text-zinc-500 text-sm mt-1">
                            Stock: {product.stock_quantity} • Status: {product.status}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditProduct(product)}
                          className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-zinc-600 text-zinc-400 hover:bg-zinc-700 bg-transparent"
                        >
                          <Eye className="h-4 w-4" />
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
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Order Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.length === 0 ? (
                    <p className="text-zinc-400 text-center py-8">No orders yet</p>
                  ) : (
                    orders.map((order) => (
                      <div key={order.id} className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-white text-lg">
                              Order #{order.order_number || order.id.slice(0, 8)}
                            </h3>
                            <p className="text-zinc-400">{order.customer_email}</p>
                            <p className="text-amber-500 font-bold text-xl mt-2">₹{order.total_amount}</p>
                            <p className="text-zinc-500 text-sm mt-1">
                              {new Date(order.created_at).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <Badge
                              className={
                                order.payment_status === "completed"
                                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                                  : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                              }
                            >
                              {order.payment_status}
                            </Badge>
                            <Badge
                              className={
                                order.order_status === "delivered"
                                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                                  : order.order_status === "shipped"
                                    ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                    : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                              }
                            >
                              {order.order_status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="add-product">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  {editingProduct ? "Edit Product" : "Add New Product"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddProduct} className="space-y-8">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="title" className="text-white">
                        Product Title *
                      </Label>
                      <Input
                        id="title"
                        value={productForm.title}
                        onChange={(e) => setProductForm({ ...productForm, title: e.target.value })}
                        required
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="Premium Oversized Hoodie"
                      />
                    </div>

                    <div>
                      <Label htmlFor="sku" className="text-white">
                        SKU
                      </Label>
                      <Input
                        id="sku"
                        value={productForm.sku}
                        onChange={(e) => setProductForm({ ...productForm, sku: e.target.value })}
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="UH-HOD-001"
                      />
                    </div>

                    <div>
                      <Label htmlFor="price" className="text-white">
                        Price (₹) *
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
                      <Label htmlFor="compare_price" className="text-white">
                        Compare Price (₹)
                      </Label>
                      <Input
                        id="compare_price"
                        type="number"
                        value={productForm.compare_price}
                        onChange={(e) => setProductForm({ ...productForm, compare_price: e.target.value })}
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="3499"
                      />
                    </div>

                    <div>
                      <Label htmlFor="category" className="text-white">
                        Category *
                      </Label>
                      <Select onValueChange={(value) => setProductForm({ ...productForm, category: value })}>
                        <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.slug} value={cat.slug}>
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="stock_quantity" className="text-white">
                        Stock Quantity *
                      </Label>
                      <Input
                        id="stock_quantity"
                        type="number"
                        value={productForm.stock_quantity}
                        onChange={(e) => setProductForm({ ...productForm, stock_quantity: e.target.value })}
                        required
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="50"
                      />
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="short_description" className="text-white">
                        Short Description
                      </Label>
                      <Input
                        id="short_description"
                        value={productForm.short_description}
                        onChange={(e) => setProductForm({ ...productForm, short_description: e.target.value })}
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="Premium 400 GSM cotton fleece hoodie"
                      />
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-white">
                        Full Description
                      </Label>
                      <Textarea
                        id="description"
                        value={productForm.description}
                        onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                        className="bg-zinc-800 border-zinc-700 text-white min-h-[120px]"
                        placeholder="Detailed product description..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="care_instructions" className="text-white">
                        Care Instructions
                      </Label>
                      <Textarea
                        id="care_instructions"
                        value={productForm.care_instructions}
                        onChange={(e) => setProductForm({ ...productForm, care_instructions: e.target.value })}
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="Machine wash cold, tumble dry low..."
                      />
                    </div>
                  </div>

                  {/* Product Images */}
                  <div className="space-y-4">
                    <Label className="text-white">Product Images</Label>
                    <div className="flex gap-4">
                      <Input
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                        className="bg-zinc-800 border-zinc-700 text-white flex-1"
                        placeholder="Enter image URL"
                      />
                      <Button
                        type="button"
                        onClick={addImageUrl}
                        className="bg-amber-500 hover:bg-amber-400 text-black"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Image
                      </Button>
                    </div>

                    {productImages.length > 0 && (
                      <div className="grid grid-cols-4 gap-4">
                        {productImages.map((url, index) => (
                          <div key={index} className="relative">
                            <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden">
                              <Image
                                src={url || "/placeholder.svg"}
                                alt={`Product image ${index + 1}`}
                                width={200}
                                height={200}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <Button
                              type="button"
                              size="sm"
                              variant="destructive"
                              className="absolute top-2 right-2"
                              onClick={() => removeImage(index)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                            {index === 0 && (
                              <Badge className="absolute bottom-2 left-2 bg-amber-500 text-black">Primary</Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Product Options */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label className="text-white">Available Sizes</Label>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                          <label key={size} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={productForm.sizes.includes(size)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setProductForm({
                                    ...productForm,
                                    sizes: [...productForm.sizes, size],
                                  })
                                } else {
                                  setProductForm({
                                    ...productForm,
                                    sizes: productForm.sizes.filter((s) => s !== size),
                                  })
                                }
                              }}
                              className="rounded"
                            />
                            <span className="text-white text-sm">{size}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-white">Available Colors</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {["Black", "White", "Grey", "Navy", "Olive", "Beige"].map((color) => (
                          <label key={color} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={productForm.colors.includes(color)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setProductForm({
                                    ...productForm,
                                    colors: [...productForm.colors, color],
                                  })
                                } else {
                                  setProductForm({
                                    ...productForm,
                                    colors: productForm.colors.filter((c) => c !== color),
                                  })
                                }
                              }}
                              className="rounded"
                            />
                            <span className="text-white text-sm">{color}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-white">Materials</Label>
                      <div className="grid grid-cols-1 gap-2 mt-2">
                        {["Cotton", "Polyester", "Cotton Blend", "Fleece", "Denim"].map((material) => (
                          <label key={material} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={productForm.materials.includes(material)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setProductForm({
                                    ...productForm,
                                    materials: [...productForm.materials, material],
                                  })
                                } else {
                                  setProductForm({
                                    ...productForm,
                                    materials: productForm.materials.filter((m) => m !== material),
                                  })
                                }
                              }}
                              className="rounded"
                            />
                            <span className="text-white text-sm">{material}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Product Flags */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={productForm.featured}
                        onCheckedChange={(checked) => setProductForm({ ...productForm, featured: checked })}
                      />
                      <Label className="text-white">Featured Product</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={productForm.trending}
                        onCheckedChange={(checked) => setProductForm({ ...productForm, trending: checked })}
                      />
                      <Label className="text-white">Trending</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={productForm.new_arrival}
                        onCheckedChange={(checked) => setProductForm({ ...productForm, new_arrival: checked })}
                      />
                      <Label className="text-white">New Arrival</Label>
                    </div>
                  </div>

                  {/* SEO Fields */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">SEO Settings</h3>
                    <div>
                      <Label htmlFor="seo_title" className="text-white">
                        SEO Title
                      </Label>
                      <Input
                        id="seo_title"
                        value={productForm.seo_title}
                        onChange={(e) => setProductForm({ ...productForm, seo_title: e.target.value })}
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="Premium Oversized Hoodie - UrbanEdge Hoods"
                      />
                    </div>

                    <div>
                      <Label htmlFor="seo_description" className="text-white">
                        SEO Description
                      </Label>
                      <Textarea
                        id="seo_description"
                        value={productForm.seo_description}
                        onChange={(e) => setProductForm({ ...productForm, seo_description: e.target.value })}
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="Shop premium oversized hoodies from UrbanEdge Hoods. 400 GSM cotton fleece, streetwear style..."
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8"
                    >
                      {loading
                        ? editingProduct
                          ? "Updating Product..."
                          : "Adding Product..."
                        : editingProduct
                          ? "Update Product"
                          : "Add Product"}
                    </Button>

                    {editingProduct && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setEditingProduct(null)
                          setProductForm({
                            title: "",
                            description: "",
                            short_description: "",
                            price: "",
                            compare_price: "",
                            category: "",
                            subcategory: "",
                            brand: "UrbanEdge Hoods",
                            sku: "",
                            featured: false,
                            trending: false,
                            new_arrival: false,
                            status: "active",
                            sizes: ["S", "M", "L", "XL", "XXL"],
                            colors: ["Black", "White"],
                            materials: ["Cotton"],
                            care_instructions: "",
                            stock_quantity: "",
                            weight: "",
                            tags: [],
                            seo_title: "",
                            seo_description: "",
                          })
                          setProductImages([])
                        }}
                        className="border-zinc-600 text-zinc-400"
                      >
                        Cancel Edit
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
