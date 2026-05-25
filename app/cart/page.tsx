"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Trash2, Plus, Minus, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"
import type { CartItem, Product } from "@/lib/types"

const initialCartItems: CartItem[] = [
  {
    product: {
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
    quantity: 1
  },
  {
    product: {
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
    quantity: 2
  }

export default function CartPage() {
  const [cartItems, setCartItems] = React.useState<CartItem[]>(initialCartItems)
  const [promoCode, setPromoCode] = React.useState("")
  const [promoApplied, setPromoApplied] = React.useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const discount = promoApplied ? Math.floor(subtotal * 0.1) : 0
  const shipping = subtotal > 0 ? 0 : 0
  const total = subtotal - discount + shipping

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return
    
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const removeItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId))
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setPromoApplied(true)
    }
  }

  const clearCart = () => {
    setCartItems([])
    setPromoApplied(false)
    setPromoCode("")
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <ShoppingCart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-3">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any phones to your cart yet.
            </p>
            <Button size="lg" asChild>
              <a href="/products">
                Browse Phones <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </a>
            </Button>
          </div>
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
            <h1 className="text-3xl font-bold tracking-tight">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your cart
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.product.id} className="overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-48 h-48 sm:h-auto bg-muted flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline">{item.product.brand}</Badge>
                          {!item.product.inStock && (
                            <Badge variant="destructive">Out of Stock</Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-xl mb-1">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {item.product.description}
                        </p>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold">${item.product.price}</span>
                          {item.product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${item.product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.product.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>

                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 rounded-r-none border-r"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <div className="px-4 py-1.5 text-sm font-medium min-w-[2.5rem] text-center">
                            {item.quantity}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 rounded-l-none border-l"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Subtotal</div>
                          <div className="font-semibold text-lg">
                            ${(item.product.price * item.quantity).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button variant="ghost" asChild>
                <a href="/products">Continue Shopping</a>
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>

                {promoApplied && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Promo discount (SAVE10)</span>
                    <span>-${discount}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>

                {!promoApplied && (
                  <div className="pt-2">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        onClick={applyPromoCode}
                        disabled={!promoCode}
                      >
                        Apply
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1.5">
                      Try code: SAVE10
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button size="lg" className="w-full" asChild>
                  <a href="/checkout">
                    Proceed to Checkout
                  </a>
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Taxes calculated at checkout
                </p>