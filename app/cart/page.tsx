"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CartItem } from '@/lib/types'
import { cn } from '@/lib/utils'
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, CreditCard } from 'lucide-react'

const mockCartItems: CartItem[] = [
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
    category: 'flagship',
    quantity: 1,
    selectedColor: 'Natural Titanium'
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
    category: 'flagship',
    quantity: 2,
    selectedColor: 'Titanium Black'
  }

export default function CartPage() {
  const [cartItems, setCartItems] = React.useState<CartItem[]>(mockCartItems)
  const [isCheckingOut, setIsCheckingOut] = React.useState(false)

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 15
  const tax = Math.round(subtotal * 0.08)
  const total = subtotal + shipping + tax

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const handleCheckout = async () => {
    setIsCheckingOut(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsCheckingOut(false)
    window.location.href = '/checkout'
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Looks like you haven't added any phones to your cart yet.</p>
            <Button size="lg" asChild>
              <a href="/products">
                Browse Phones <ArrowLeft className="ml-2 h-4 w-4" />
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
          <Button variant="ghost" size="sm" asChild>
            <a href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
            </a>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Shopping Cart</h1>
            <p className="text-muted-foreground">{totalItems} items in your cart</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-48 aspect-[4/3] md:aspect-auto bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline">{item.brand}</Badge>
                          <Badge variant="secondary" className="capitalize">{item.category}</Badge>
                        </div>
                        <h3 className="font-semibold text-xl mb-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">Color: {item.selectedColor}</p>

                        <div className="flex items-center gap-2 mb-4">
                          <div className="text-2xl font-bold">${item.price}</div>
                          {item.originalPrice && (
                            <div className="text-sm text-muted-foreground line-through">${item.originalPrice}</div>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-16 text-center"
                            min="1"
                            max="10"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= 10}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <div className="text-lg font-semibold">
                            ${(item.price * item.quantity).toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">Total</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <div className="flex justify-end pt-4">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Estimated Tax</span>
                  <span>${tax}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <p className="text-xs text-muted-foreground">Taxes calculated at checkout</p>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" /> Proceed to Checkout
                    </>
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Secure checkout powered by Stripe
                </p>