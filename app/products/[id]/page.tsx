"use client"

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Phone, CartItem } from '@/lib/types'
import { cn } from '@/lib/utils'
import { Star, ArrowLeft, ShoppingCart, Truck, Shield, Award } from 'lucide-react'

const allPhones: Phone[] = [
  {
    id: '1',
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    price: 1199,
    originalPrice: 1299,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.3" Super Retina XDR',
      processor: 'A18 Pro',
      ram: '8GB',
      storage: '128GB',
      camera: '48MP + 48MP + 12MP',
      battery: '3582mAh',
      os: 'iOS 18'
    },
    inStock: true,
    rating: 4.9,
    reviewCount: 1247,
    colors: ['Natural Titanium', 'Blue Titanium', 'Black Titanium', 'White Titanium'],
    category: 'flagship'
  },
  {
    id: '2',
    name: 'Galaxy S25 Ultra',
    brand: 'Samsung',
    price: 1299,
    originalPrice: 1399,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.8" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 4',
      ram: '12GB',
      storage: '256GB',
      camera: '200MP + 50MP + 12MP + 10MP',
      battery: '5000mAh',
      os: 'Android 15'
    },
    inStock: true,
    rating: 4.8,
    reviewCount: 892,
    colors: ['Titanium Black', 'Titanium Gray', 'Titanium Silver', 'Titanium Blue'],
    category: 'flagship'
  },
  {
    id: '3',
    name: 'Pixel 9 Pro',
    brand: 'Google',
    price: 999,
    originalPrice: 1099,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.3" LTPO OLED',
      processor: 'Google Tensor G4',
      ram: '16GB',
      storage: '128GB',
      camera: '50MP + 48MP + 48MP',
      battery: '4700mAh',
      os: 'Android 15'
    },
    inStock: true,
    rating: 4.7,
    reviewCount: 634,
    colors: ['Obsidian', 'Porcelain', 'Hazel', 'Rose Quartz'],
    category: 'flagship'
  },
  {
    id: '4',
    name: 'iPhone 16',
    brand: 'Apple',
    price: 799,
    originalPrice: 899,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.1" Super Retina XDR',
      processor: 'A18',
      ram: '8GB',
      storage: '128GB',
      camera: '48MP + 12MP',
      battery: '3561mAh',
      os: 'iOS 18'
    },
    inStock: true,
    rating: 4.6,
    reviewCount: 1089,
    colors: ['Black', 'White', 'Pink', 'Teal', 'Ultramarine'],
    category: 'mid-range'
  },
  {
    id: '5',
    name: 'Galaxy S25',
    brand: 'Samsung',
    price: 799,
    originalPrice: 899,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.2" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 4',
      ram: '12GB',
      storage: '128GB',
      camera: '50MP + 12MP + 10MP',
      battery: '4000mAh',
      os: 'Android 15'
    },
    inStock: true,
    rating: 4.5,
    reviewCount: 567,
    colors: ['Navy', 'Silver Shadow', 'Icy Blue', 'Mint'],
    category: 'mid-range'
  },
  {
    id: '6',
    name: 'Pixel 9',
    brand: 'Google',
    price: 799,
    originalPrice: 899,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.3" Actua OLED',
      processor: 'Google Tensor G4',
      ram: '12GB',
      storage: '128GB',
      camera: '50MP + 48MP',
      battery: '4700mAh',
      os: 'Android 15'
    },
    inStock: true,
    rating: 4.4,
    reviewCount: 423,
    colors: ['Obsidian', 'Porcelain', 'Hazel'],
    category: 'mid-range'
  },
  {
    id: '7',
    name: 'Galaxy A55',
    brand: 'Samsung',
    price: 449,
    originalPrice: 499,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.6" Super AMOLED',
      processor: 'Exynos 1480',
      ram: '8GB',
      storage: '128GB',
      camera: '50MP + 12MP + 5MP',
      battery: '5000mAh',
      os: 'Android 14'
    },
    inStock: true,
    rating: 4.2,
    reviewCount: 312,
    colors: ['Awesome Navy', 'Awesome Lemon', 'Awesome Lilac', 'Awesome Iceblue'],
    category: 'budget'
  },
  {
    id: '8',
    name: 'iPhone SE (2025)',
    brand: 'Apple',
    price: 429,
    originalPrice: 479,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '4.7" Retina HD',
      processor: 'A18',
      ram: '4GB',
      storage: '64GB',
      camera: '12MP',
      battery: '2018mAh',
      os: 'iOS 18'
    },
    inStock: false,
    rating: 4.3,
    reviewCount: 756,
    colors: ['Midnight', 'Starlight', 'Red'],
    category: 'budget'
  }

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const phone = allPhones.find(p => p.id === productId)

  if (!phone) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The phone you're looking for doesn't exist.</p>
          <Button asChild>
            <a href="/products">Back to Products</a>
          </Button>
        </div>
      </div>
    )
  }

  const discount = phone.originalPrice ? Math.round(((phone.originalPrice - phone.price) / phone.originalPrice) * 100) : 0

  React.useEffect(() => {
    if (phone.colors.length > 0 && !selectedColor) {
      setSelectedColor(phone.colors[0])
    }
  }, [phone, selectedColor])

  const handleAddToCart = async () => {
    if (!selectedColor) return

    setIsAdding(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // In a real app, this would dispatch to cart context
    console.log('Added to cart:', { phone, color: selectedColor, quantity })
    
    setIsAdding(false)
    
    // Show success feedback
    const originalText = 'Add to Cart'
    // You could add a toast here
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/products" className="hover:text-foreground transition-colors">Products</a>
          <span>/</span>
          <span>{phone.brand}</span>
          <span>/</span>
          <span className="text-foreground">{phone.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
              <img
                src={phone.image}
                alt={phone.name}
                className="object-cover w-full h-full"
              />
              {!phone.inStock && (
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive">Out of Stock</Badge>
                </div>
              )}
              {discount > 0 && (
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">Save {discount}%</Badge>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="outline">{phone.brand}</Badge>
                <Badge variant="secondary" className="capitalize">{phone.category}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{phone.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-5 w-5",
                        i < Math.floor(phone.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                      )}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">{phone.rating}</span>
                <span className="text-muted-foreground">({phone.reviewCount} reviews)</span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold">${phone.price}</span>
                {phone.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">${phone.originalPrice}</span>
                )}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {phone.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "px-4 py-2 rounded-lg border text-sm transition-all",
                      selectedColor === color
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 10}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="flex-1"
                disabled={!phone.inStock || !selectedColor || isAdding}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {isAdding ? 'Adding...' : phone.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cart">View Cart</a>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Free Shipping</div>
                  <div className="text-xs text-muted-foreground">2-day delivery</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">2-Year Warranty</div>
                  <div className="text-xs text-muted-foreground">Full coverage</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Price Match</div>
                  <div className="text-xs text-muted-foreground">Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Display & Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Display</span>
                  <span className="font-medium">{phone.specs.display}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Processor</span>
                  <span className="font-medium">{phone.specs.processor}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">RAM</span>
                  <span className="font-medium">{phone.specs.ram}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Storage</span>
                  <span className="font-medium">{phone.specs.storage}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Camera & Battery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Camera</span>
                  <span className="font-medium">{phone.specs.camera}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Battery</span>
                  <span className="font-medium">{phone.specs.battery}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Operating System</span>
                  <span className="font-medium">{phone.specs.os}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">You might also like</h2>
            <Button variant="ghost" asChild>
              <a href="/products">View All</a>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allPhones
              .filter(p => p.id !== phone.id && p.brand === phone.brand)
              .slice(0, 4)
              .map((relatedPhone) => (
                <Card key={relatedPhone.id} className="group overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={relatedPhone.image}
                      alt={relatedPhone.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />