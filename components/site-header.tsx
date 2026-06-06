"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  ShoppingCart,
  Menu,
  Trash2,
  Plus,
  Minus,
  Search,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export function SiteHeader() {
  const { cart, updateQuantity, removeFromCart, getCartSubtotal, getCartTotal, promoCode, tradeInDiscount } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/phones?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/phones");
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/phones", label: "Devices" },
    { href: "/trade-in", label: "Trade-In Estimator" },
    { href: "/contact", label: "Support & FAQs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight shrink-0">
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950">
            <Smartphone className="w-5 h-5" />
          </div>
          <span className="font-sans font-extrabold bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
            Aero<span className="text-cyan-400">Phone</span>
          </span>
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-cyan-400 ${
                  isActive ? "text-cyan-400 font-semibold" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 md:gap-4 shrink-0">
          
          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearchSubmit} className="hidden lg:flex items-center relative max-w-xs">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              type="search"
              placeholder="Search flagship specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9 w-[200px] xl:w-[240px] bg-slate-900/60 border-slate-800 text-xs text-white placeholder:text-slate-500 focus-visible:ring-cyan-500 rounded-lg"
            />
          </form>

          {/* Cart Slide-out Sheet Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative border-slate-800 bg-slate-900/40 text-white hover:text-cyan-400 hover:bg-slate-900"
              >
                <ShoppingCart className="w-4 h-4" />
                {totalItemsCount > 0 && (
                  <Badge className="absolute -top-1.5 -right-1.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-[10px] min-w-5 h-5 flex items-center justify-center p-1 rounded-full">
                    {totalItemsCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md bg-slate-950 border-l border-slate-800 text-white flex flex-col justify-between p-0">
              <div className="p-6 overflow-y-auto flex-grow">
                <SheetHeader className="pb-4 border-b border-slate-900">
                  <SheetTitle className="text-xl font-bold text-white flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-cyan-400" />
                    Your Cart
                    {totalItemsCount > 0 && (
                      <span className="text-xs font-mono font-normal text-slate-400">
                        ({totalItemsCount} {totalItemsCount === 1 ? "item" : "items"})
                      </span>
                    )}
                  </SheetTitle>
                </SheetHeader>

                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mb-4">
                      <ShoppingCart className="w-8 h-8 text-slate-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-slate-200">Your cart is empty</h3>
                    <p className="text-sm text-slate-500 mt-1 max-w-[240px]">
                      Explore our premium flagship smartphones to upgrade today.
                    </p>
                    <SheetClose asChild>
                      <Link href="/phones" className="mt-6">
                        <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold text-xs px-5">
                          Browse Devices
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                ) : (
                  <div className="space-y-4 mt-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-900"
                      >
                        {/* Image */}
                        <div className="w-16 h-16 rounded bg-slate-950 p-2 shrink-0 flex items-center justify-center border border-slate-800">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-grow min-w-0">
                          <h4 className="font-semibold text-sm truncate text-white">
                            {item.product.name}
                          </h4>
                          <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-[10px] text-slate-400 font-mono mt-0.5">
                            <span className="text-cyan-400">{item.selectedStorage}</span>
                            <span>•</span>
                            <span>{item.selectedColor.name}</span>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            {/* Quantity Adjuster */}
                            <div className="flex items-center gap-1 border border-slate-800 rounded bg-slate-950">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-6 h-6 rounded-none text-slate-400 hover:text-white"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="text-xs font-mono w-5 text-center text-white">
                                {item.quantity}
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-6 h-6 rounded-none text-slate-400 hover:text-white"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                              <span className="font-mono text-xs font-bold text-emerald-400">
                                ${item.product.price * item.quantity}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Remove */}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-slate-500 hover:text-rose-400 shrink-0 self-start"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="p-6 bg-slate-900/60 border-t border-slate-900 space-y-4">
                  <div className="space-y-1.5 font-mono text-xs text-slate-400">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-white">${getCartSubtotal()}</span>
                    </div>

                    {promoCode && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Promo Code ({promoCode})</span>
                        <span>-10%</span>
                      </div>
                    )}

                    {tradeInDiscount > 0 && (
                      <div className="flex justify-between text-cyan-400">
                        <span>Trade-In Credit</span>
                        <span>-${tradeInDiscount}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
                      <span>Estimated Total</span>
                      <span className="text-emerald-400 font-mono text-base">
                        ${getCartTotal()}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <SheetClose asChild>
                      <Link href="/cart">
                        <Button variant="outline" className="w-full border-slate-800 text-white text-xs hover:bg-slate-900">
                          View Cart
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/cart?checkout=true">
                        <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs gap-1">
                          Checkout <ArrowRight className="w-3 h-3" />
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              )}
            </SheetContent>
          </Sheet>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden border-slate-800 bg-slate-900/40 text-white"
              >
                <Menu className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-950 border-l border-slate-800 text-white flex flex-col justify-between p-6">
              <div className="space-y-6">
                <SheetHeader className="text-left pb-4 border-b border-slate-900">
                  <SheetTitle className="text-lg font-bold text-white">AeroPhone Navigation</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-4 text-base font-medium">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`transition-colors py-2 border-b border-slate-900 ${
                          isActive ? "text-cyan-400 font-semibold" : "text-slate-300"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>

                <form onSubmit={handleSearchSubmit} className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    type="search"
                    placeholder="Search specifications..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full bg-slate-900 border-slate-800 text-white"
                  />
                  <Button type="submit" className="w-full mt-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold text-xs">
                    Search Devices
                  </Button>
                </form>
              </div>

              <div className="border-t border-slate-900 pt-6">
                <div className="flex items-center gap-2.5 text-xs text-slate-400">
                  <ShieldAlert className="w-4 h-4 text-cyan-400" />
                  <span>Authorized Premium Reseller</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}
