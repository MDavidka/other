"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingCart } from "lucide-react";
import type { CartItem } from "@/lib/types";
import {
  getCartFromStorage,
  saveCartToStorage,
  updateCartItemQuantity,
  removeFromCart,
  calculateCartTotal,
  calculateShipping,
  calculateTax,
  formatPrice,
} from "@/lib/utils";

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // Load cart from localStorage on mount
  React.useEffect(() => {
    const savedCart = getCartFromStorage();
    setCartItems(savedCart);
    setIsLoading(false);
  }, []);

  // Save cart to localStorage whenever it changes
  React.useEffect(() => {
    if (!isLoading) {
      saveCartToStorage(cartItems);
    }
  }, [cartItems, isLoading]);

  const subtotal = calculateCartTotal(cartItems);
  const shipping = calculateShipping(subtotal);
  const tax = calculateTax(subtotal);
  const total = subtotal + shipping + tax;
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = updateCartItemQuantity(cartItems, id, newQuantity);
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (id: string) => {
    const updatedCart = removeFromCart(cartItems, id);
    setCartItems(updatedCart);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      router.push("/checkout");
    }
  };

  const handleContinueShopping = () => {
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading cart...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="rounded-full bg-muted p-8 mb-6">
              <ShoppingCart className="h-16 w-16 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-3">Your cart is empty</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Looks like you haven&apos;t added any phones to your cart yet.
            </p>
            <Button onClick={handleContinueShopping} size="lg">
              Browse Phones
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={handleContinueShopping}
            className="mb-4 -ml-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Shopping Cart</h1>
              <p className="text-muted-foreground mt-1">
                {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
              </p>
            </div>
            <Button
              variant="outline"
              onClick={handleClearCart}
              className="text-destructive hover:text-destructive"
            >
              Clear Cart
            </Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Cart Items */}
          <div className="lg:col-span-7">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Cart Items
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex gap-4 rounded-lg border p-4">
                      {/* Product Image */}
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-muted">
                        <img
                          src={item.image || "https://placehold.co/96x96.png"}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex flex-1 flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0 flex-1">
                              <p className="text-xs text-muted-foreground font-medium">
                                {item.brand}
                              </p>
                              <h3 className="font-semibold text-lg leading-tight line-clamp-2 mt-0.5">
                                {item.name}
                              </h3>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-xs font-normal">
                                  {item.storage} GB
                                </Badge>
                                <Badge variant="outline" className="text-xs font-normal">
                                  {item.color}
                                </Badge>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-destructive flex-shrink-0"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Quantity and Price Controls */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-1 border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </Button>
                            <span className="px-3 text-sm font-medium tabular-nums min-w-[32px] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <p className="font-semibold tabular-nums text-lg">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {formatPrice(item.price)} each
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < cartItems.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div className="flex-1 pr-4">
                        <p className="font-medium line-clamp-1">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.storage}GB • {item.color} × {item.quantity}
                        </p>
                      </div>
                      <span className="font-medium tabular-nums">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium tabular-nums">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium tabular-nums">{formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (8%)</span>
                    <span className="font-medium tabular-nums">{formatPrice(tax)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="tabular-nums">{formatPrice(total)}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button
                  onClick={handleCheckout}
                  className="w-full"
                  size="lg"
                >
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outline"
                  onClick={handleContinueShopping}
                  className="w-full"
                >
                  Continue Shopping
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

app/cart/page.tsx[usedfor]Shopping cart: Cart items list, quantity controls, price summary and checkout button[/usedfor]