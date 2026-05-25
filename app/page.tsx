import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Star, Truck, Shield, Award } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/types"

const featuredProducts: Product[] = [
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
    specs: {
      display: "6.7-inch LTPO OLED",
      processor: "Google Tensor G3",
      ram: "12GB",
      storage: "128GB",
      camera: "50MP Main + 48MP Ultra Wide + 48MP Telephoto",
      os: "Android 14"
    },
    inStock: false,
    rating: 4.6,
    reviewCount: 634
  }

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders over $50"
  },
  {
    icon: Shield,
    title: "2-Year Warranty",
  },
  {
    icon: Award,
    title: "Price Match",
  }

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              New Arrivals 2024
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Premium Phones.<br />Exceptional Experience.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
              Discover the latest flagship smartphones from Apple, Samsung, Google and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="/products">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-white/30 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Phones</h2>
              <p className="text-muted-foreground mt-2 text-lg">Handpicked premium devices</p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0 group" asChild>
              <a href="/products">
                View all products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {!product.inStock && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">Sale</Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{product.brand}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {product.rating} ({product.reviewCount})
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-2">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="pt-4">
                  <Button className="w-full" disabled={!product.inStock} asChild>
                    <a href={`/products/${product.slug}`}>
                      {product.inStock ? "View Details" : "Notify Me"}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Stay in the loop</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get the latest updates on new releases, exclusive deals, and tech insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              We respect your inbox. Unsubscribe anytime.
            </p>