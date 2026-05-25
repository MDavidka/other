import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, ArrowLeft, ShoppingCart, Truck, Shield } from "lucide-react"
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
    description: "Premium compact flagship with Leica optics and top-tier performance.",
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

interface ProductDetailPageProps {
  params: { slug: string }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = allProducts.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The phone you're looking for doesn't exist.</p>
          <Button asChild>
            <a href="/products">Back to Products</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <a href="/products">
              <ArrowLeft className="h-4 w-4" />
            </a>
          </Button>
          <div>
            <Badge variant="outline">{product.brand}</Badge>
            <h1 className="text-3xl font-bold tracking-tight mt-1">{product.name}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(0, 3).map((img, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg border bg-muted cursor-pointer hover:opacity-80 transition">
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-lg">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                {!product.inStock && <Badge variant="destructive">Out of Stock</Badge>}
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1" disabled={!product.inStock}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              <Button variant="outline" size="lg" className="flex-1" disabled={!product.inStock}>
                Buy Now
              </Button>