import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/types"

const allProducts: Product[] = [
  {
    id: "1",
    slug: "iphone-15-pro",
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 999,
    originalPrice: 1099,
    image: "https://placehold.co/400x400.png",
    images: ["https://placehold.co/800x600.png", "https://placehold.co/800x600.png", "https://placehold.co/800x600.png"],
    specs: {
      display: "6.1-inch Super Retina XDR",
      processor: "A17 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      battery: "3274mAh",
      os: "iOS 17"
    },
    inStock: true,
    rating: 4.8,
    reviewCount: 1247
  },
  {
    id: "2",
    slug: "samsung-galaxy-s24",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1299,
    image: "https://placehold.co/400x400.png",
    images: ["https://placehold.co/800x600.png", "https://placehold.co/800x600.png", "https://placehold.co/800x600.png"],
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256GB",
      camera: "200MP Main + 50MP Periscope + 12MP Ultra Wide + 10MP Telephoto",
      battery: "5000mAh",
      os: "Android 14"
    },
    inStock: true,
    rating: 4.7,
    reviewCount: 892
  },
  {
    id: "3",
    slug: "google-pixel-8-pro",
    name: "Pixel 8 Pro",
    brand: "Google",
    price: 999,
    originalPrice: 1099,
    image: "https://placehold.co/400x400.png",
    images: ["https://placehold.co/800x600.png", "https://placehold.co/800x600.png", "https://placehold.co/800x600.png"],
    description: "Google's AI-powered flagship with exceptional camera and clean software.",
    specs: {
      display: "6.7-inch LTPO OLED",
      processor: "Google Tensor G3",
      ram: "12GB",
      storage: "128GB",
      camera: "50MP Main + 48MP Ultra Wide + 48MP Telephoto",
      battery: "5050mAh",
      os: "Android 14"
    },
    inStock: false,
    rating: 4.6,
    reviewCount: 634
  },
  {
    id: "4",
    slug: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 799,
    image: "https://placehold.co/400x400.png",
    images: ["https://placehold.co/800x600.png", "https://placehold.co/800x600.png", "https://placehold.co/800x600.png"],
    description: "Flagship killer with Hasselblad cameras and ultra-fast charging.",
    specs: {
      display: "6.82-inch AMOLED",
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256GB",
      camera: "50MP Main + 48MP Ultra Wide + 64MP Telephoto",
      battery: "5400mAh",
      os: "Android 14"
    },
    inStock: true,
    rating: 4.5,
    reviewCount: 423
  },
  {
    id: "5",
    slug: "xiaomi-14",
    name: "Xiaomi 14",
    brand: "Xiaomi",
    price: 699,
    image: "https://placehold.co/400x400.png",
    images: ["https://placehold.co/800x600.png", "https://placehold.co/800x600.png", "https://placehold.co/800x600.png"],
    specs: {
      display: "6.36-inch AMOLED",
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256GB",
      camera: "50MP Main + 50MP Ultra Wide + 50MP Telephoto",
      battery: "4610mAh",
      os: "Android 14"
    },
    inStock: true,
    rating: 4.4,
    reviewCount: 312
  }

const brands = ["All", "Apple", "Samsung", "Google", "OnePlus", "Xiaomi"]
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" }

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedBrand, setSelectedBrand] = React.useState("All")
  const [sortBy, setSortBy] = React.useState("featured")
  const [showInStockOnly, setShowInStockOnly] = React.useState(false)

  const filteredProducts = React.useMemo(() => {
    let result = [...allProducts]

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      )
    }

    if (selectedBrand !== "All") {
      result = result.filter(p => p.brand === selectedBrand)
    }

    if (showInStockOnly) {
      result = result.filter(p => p.inStock)
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [searchQuery, selectedBrand, sortBy, showInStockOnly])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <a href="/">
              <ArrowLeft className="h-4 w-4" />
            </a>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">All Phones</h1>
            <p className="text-muted-foreground">Browse our complete collection</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8 space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Search</h3>
                <Input
                  placeholder="Search phones..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <h3 className="font-semibold mb-3">Brand</h3>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Sort by</h3>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="inStock"
                  checked={showInStockOnly}
                  onChange={(e) => setShowInStockOnly(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <label htmlFor="inStock" className="text-sm font-medium cursor-pointer">
                  In stock only
                </label>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedBrand("All")
                  setSortBy("featured")
                  setShowInStockOnly(false)
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} of {allProducts.length} phones
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">No phones found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedBrand("All")
                    setSortBy("featured")
                    setShowInStockOnly(false)
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group overflow-hidden flex flex-col h-full">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />