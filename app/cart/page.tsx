"use client";

import React, { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  CreditCard,
  Truck,
  CheckCircle2,
  Ticket,
} from "lucide-react";
import { toast } from "sonner";

function CartContent() {
  const searchParams = useSearchParams();
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartSubtotal,
    getCartTotal,
    promoCode,
    promoDiscount,
    tradeInPromoCode,
    tradeInDiscount,
    applyPromoCode,
    removePromoCode,
  } = useCart();

  // Dialog State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [promoInput, setPromoInput] = useState("");

  // Checkout Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  // Order Result State
  const [submittingOrder, setSubmittingOrder] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderData, setOrderConfirmedData] = useState<{
    orderNumber: string;
    trackingCode: string;
    estimatedDelivery: string;
  } | null>(null);

  // Auto-trigger checkout modal if ?checkout=true in URL
  useEffect(() => {
    if (searchParams.get("checkout") === "true" && cart.length > 0) {
      setIsCheckoutOpen(true);
    }
  }, [searchParams, cart]);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const applied = applyPromoCode(promoInput);
    if (applied) {
      setPromoInput("");
    }
  };

  const calculateTax = () => {
    // 8.25% standard consumer electronics tax
    return Math.round(getCartSubtotal() * 0.0825);
  };

  const calculateFinalTotalWithTax = () => {
    const sub = getCartTotal();
    if (sub <= 0) return 0;
    return sub + calculateTax();
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !address || !city || !zip) {
      toast.error("Please complete all shipping address fields.");
      return;
    }
    if (!cardNumber || !cardExpiry || !cardCVV) {
      toast.error("Please provide payment details.");
      return;
    }

    setSubmittingOrder(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map((i) => ({
            productId: i.product.id,
            name: i.product.name,
            color: i.selectedColor.name,
            storage: i.selectedStorage,
            quantity: i.quantity,
            price: i.product.price,
          })),
          customer: {
            fullName,
            email,
            shippingAddress: `${address}, ${city}, ${zip}`,
          },
          pricing: {
            subtotal: getCartSubtotal(),
            discount: getCartSubtotal() * promoDiscount,
            tradeInCredit: tradeInDiscount,
            tax: calculateTax(),
            total: calculateFinalTotalWithTax(),
          },
          promoApplied: promoCode,
          tradeInApplied: tradeInPromoCode,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setOrderConfirmedData({
          orderNumber: data.orderNumber,
          trackingCode: data.trackingCode,
          estimatedDelivery: data.estimatedDelivery,
        });
        setOrderConfirmed(true);
        toast.success("Order processed successfully!");
        clearCart();
      } else {
        toast.error(data.error || "Fulfillment server error.");
      }
    } catch (err) {
      toast.error("Network error during checkout simulator.");
    } finally {
      setSubmittingOrder(false);
    }
  };

  if (orderConfirmed && orderData) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl text-center space-y-8 animate-in zoom-in-95 duration-300">
        <div className="w-20 h-20 rounded-full bg-emerald-950/50 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <Badge className="bg-emerald-500 text-slate-950 font-extrabold uppercase text-[10px] tracking-widest">
            PAYMENT APPROVED & SECURED
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-white">
            Your Upgrade is Confirmed!
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
            Your transaction has been approved. A digital receipt along with shipment tracking details has been sent to <span className="text-white font-bold">{email}</span>.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-900 text-left space-y-4 font-mono text-xs text-slate-300">
          <div className="flex justify-between border-b border-slate-900 pb-2.5">
            <span className="text-slate-500">ORDER IDENTIFIER</span>
            <span className="text-white font-bold">{orderData.orderNumber}</span>
          </div>
          <div className="flex justify-between border-b border-slate-900 pb-2.5">
            <span className="text-slate-500">UPS AIR TRACKING</span>
            <span className="text-cyan-400 font-bold underline select-all">{orderData.trackingCode}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">ESTIMATED DELIVERY</span>
            <span className="text-emerald-400 font-bold">{orderData.estimatedDelivery}</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 max-w-sm mx-auto">
          Need to make changes? Contact our 24/7 priority support team immediately with your order identifier.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link href="/phones">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs px-6">
              Browse More Devices
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-slate-800 text-white hover:bg-slate-900 text-xs px-6">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Your Selection</span>
        <h1 className="text-3xl font-extrabold text-white mt-1">Shopping Cart</h1>
      </div>

      {cart.length === 0 ? (
        <div className="p-16 text-center bg-slate-900/10 border border-slate-900 rounded-xl space-y-6 max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mx-auto text-slate-600">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="font-semibold text-xl text-slate-200">Your cart is currently empty</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            Upgrade your connection with one of our next-generation titanium smartphones. Browse the catalog to select color finishes, storage levels, and add accessories.
          </p>
          <Link href="/phones" className="inline-block">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs px-6">
              Browse Smartphones
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Cart Items */}
          <div className="lg:col-span-8 space-y-4">
            <div className="space-y-3.5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-900 items-center justify-between"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    {/* Image */}
                    <div className="w-20 h-20 bg-slate-950 rounded-lg p-3 border border-slate-800 shrink-0 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    {/* Meta */}
                    <div className="min-w-0">
                      <Link href={`/phones/${item.product.id}`}>
                        <h3 className="font-bold text-base text-white hover:text-cyan-400 transition-colors truncate">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-slate-400 italic mt-0.5 line-clamp-1">{item.product.tagline}</p>
                      
                      <div className="flex flex-wrap gap-x-2.5 gap-y-0.5 mt-2 text-[10px] font-mono">
                        <span className="text-cyan-400 font-bold">STORAGE: {item.selectedStorage}</span>
                        <span className="text-slate-600">|</span>
                        <span className="text-slate-300">COLOR: {item.selectedColor.name}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity Controls & Price */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-900">
                    <div className="flex items-center gap-1.5 border border-slate-800 rounded-lg bg-slate-950 p-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-7 h-7 text-slate-400 hover:text-white"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </Button>
                      <span className="text-xs font-mono w-6 text-center text-white font-bold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-7 h-7 text-slate-400 hover:text-white"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </Button>
                    </div>

                    <div className="text-right min-w-[70px]">
                      <span className="block text-xs text-slate-500 font-mono">${item.product.price} each</span>
                      <span className="text-sm font-bold font-mono text-emerald-400">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-500 hover:text-rose-400"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code Input Field */}
            <Card className="border border-slate-900 bg-slate-950 p-5 rounded-xl">
              <h3 className="font-bold text-xs text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Ticket className="w-4 h-4 text-cyan-400" />
                Apply Promotional Discounts
              </h3>

              <div className="space-y-3">
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enter Coupon (e.g. LAUNCH10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="bg-slate-900 border-slate-800 text-xs text-white focus-visible:ring-cyan-500 uppercase font-mono"
                  />
                  <Button type="submit" variant="outline" className="border-slate-800 text-white hover:bg-slate-900 text-xs px-5">
                    Apply
                  </Button>
                </form>

                <div className="flex flex-wrap gap-2 text-[10px] text-slate-500">
                  <span>Available:</span>
                  <button type="button" onClick={() => applyPromoCode("LAUNCH10")} className="text-cyan-400 hover:underline font-mono">
                    LAUNCH10 (10% Off)
                  </button>
                  <span>•</span>
                  <button type="button" onClick={() => applyPromoCode("SUPERSAVE20")} className="text-cyan-400 hover:underline font-mono">
                    SUPERSAVE20 (20% Off)
                  </button>
                </div>

                {promoCode && (
                  <div className="flex items-center justify-between p-2.5 rounded bg-emerald-950/20 border border-emerald-900 text-emerald-400 text-xs mt-2">
                    <span className="font-mono">Active Coupon: <strong>{promoCode}</strong> (10% Discount Applied)</span>
                    <Button variant="ghost" size="sm" onClick={removePromoCode} className="h-6 text-xs text-slate-400 hover:text-rose-400 p-1">
                      Remove
                    </Button>
                  </div>
                )}

                {tradeInPromoCode && (
                  <div className="p-2.5 rounded bg-cyan-950/20 border border-cyan-900 text-cyan-400 text-xs flex justify-between items-center">
                    <span className="font-mono">Active Trade-In: <strong>{tradeInPromoCode}</strong> (-${tradeInDiscount} Credit Applied)</span>
                    <span className="text-[10px] text-slate-500">Applied from Trade-In Estimator</span>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Right Column: Order Summary */}
          <aside className="lg:col-span-4 bg-slate-900/40 border border-slate-900 rounded-xl p-6 space-y-6">
            <h3 className="font-bold text-sm text-white uppercase tracking-wider">Order Summary</h3>

            <div className="space-y-3 text-xs font-mono text-slate-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">${getCartSubtotal()}</span>
              </div>

              {promoDiscount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Promo Code Discount</span>
                  <span>-${Math.round(getCartSubtotal() * promoDiscount)}</span>
                </div>
              )}

              {tradeInDiscount > 0 && (
                <div className="flex justify-between text-cyan-400">
                  <span>Trade-In Credit</span>
                  <span>-${tradeInDiscount}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Estimated Sales Tax (8.25%)</span>
                <span className="text-white">${calculateTax()}</span>
              </div>

              <div className="flex justify-between">
                <span>Priority Air Shipping</span>
                <span className="text-emerald-400 font-bold">FREE</span>
              </div>

              <Separator className="bg-slate-900" />

              <div className="flex justify-between text-sm font-bold text-white pt-1">
                <span>Total Cost</span>
                <span className="text-emerald-400 font-mono text-lg">
                  ${calculateFinalTotalWithTax()}
                </span>
              </div>
            </div>

            <Button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs py-6 gap-1.5 shadow-lg shadow-cyan-500/10"
            >
              Proceed to Secure Checkout <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Bullet trust list */}
            <div className="space-y-2 text-[10px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                <span>256-bit AES SSL Secure Transaction</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                <span>Priority tracking sent immediately</span>
              </div>
            </div>
          </aside>

        </div>
      )}

      {/* Checkout Dialog Form */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="bg-slate-950 border border-slate-900 text-white sm:max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-cyan-400" />
              Secure Checkout Portal
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-400">
              Provide your delivery details and mock credentials to complete your smartphone upgrade.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCheckoutSubmit} className="space-y-4">
            
            {/* Shipping Info */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">1. Shipping Address</h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">Full Name</label>
                  <Input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Marcus Sterling"
                    className="bg-slate-900 border-slate-800 text-xs text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">Email Address</label>
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marcus@aerophone.com"
                    className="bg-slate-900 border-slate-800 text-xs text-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-400 uppercase">Street Address</label>
                <Input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="100 Cyberpunk Plaza, Suite 4B"
                  className="bg-slate-900 border-slate-800 text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">City / State</label>
                  <Input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Neo San Francisco, CA"
                    className="bg-slate-900 border-slate-800 text-xs text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">Zip / Postal Code</label>
                  <Input
                    type="text"
                    required
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="94103"
                    className="bg-slate-900 border-slate-800 text-xs text-white"
                  />
                </div>
              </div>
            </div>

            <Separator className="bg-slate-900" />

            {/* Payment Info */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">2. Mock Payment Credentials</h4>
              
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-400 uppercase">Credit Card Number</label>
                <Input
                  type="text"
                  required
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="4111 2222 3333 4444"
                  className="bg-slate-900 border-slate-800 text-xs text-white font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">Expiry Date</label>
                  <Input
                    type="text"
                    required
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    placeholder="12/28"
                    className="bg-slate-900 border-slate-800 text-xs text-white font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">CVV Code</label>
                  <Input
                    type="text"
                    required
                    value={cardCVV}
                    onChange={(e) => setCardCVV(e.target.value)}
                    placeholder="382"
                    className="bg-slate-900 border-slate-800 text-xs text-white font-mono"
                  />
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-slate-400 leading-relaxed font-mono">
              ⚡ <strong className="text-cyan-400">Sandbox Environment:</strong> This is a secure Next.js transaction simulator. No physical funds will be charged.
            </div>

            <DialogFooter className="pt-4 border-t border-slate-900 flex gap-2">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="border-slate-800 text-white hover:bg-slate-900 text-xs">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={submittingOrder}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs px-6"
              >
                {submittingOrder ? "Authorizing Security..." : `Confirm Payment: $${calculateFinalTotalWithTax()}`}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function ShoppingCartPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-slate-400 font-mono animate-pulse">Loading secure cart...</p>
        </div>
      }
    >
      <CartContent />
    </Suspense>
  );
}
