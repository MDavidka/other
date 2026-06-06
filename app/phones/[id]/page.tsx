"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Star,
  Cpu,
  Camera,
  Battery,
  Smartphone,
  Scale,
  ShieldCheck,
  Truck,
  RotateCcw,
  Zap,
  Check,
  ShoppingCart,
  Heart,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";

export default function PhoneDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const phoneId = params.id as string;
  const product = PRODUCTS.find((p) => p.id === phoneId);

  // Fallback if product not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Device Not Found</h2>
        <p className="text-slate-400">The requested smartphone model does not exist or has been discontinued.</p>
        <Link href="/phones">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold">
            Back to Catalog
          </Button>
        </Link>
      </div>
    );
  }

  // Configuration States
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(product.storage[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Price adjustment based on storage tier selected
  const getAdjustedPrice = () => {
    const baseIndex = product.storage.indexOf(product.storage[0]);
    const currentIndex = product.storage.indexOf(selectedStorage);
    const difference = currentIndex - baseIndex;
    return product.price + difference * 100;
  };

  const currentPrice = getAdjustedPrice();

  const handleAddToCart = () => {
    // Create a modified copy of product with updated price for the cart provider
    const configuredProduct = {
      ...product,
      price: currentPrice,
    };
    addToCart(configuredProduct, selectedColor, selectedStorage);
  };

  const handleExpressCheckout = () => {
    const configuredProduct = {
      ...product,
      price: currentPrice,
    };
    addToCart(configuredProduct, selectedColor, selectedStorage);
    router.push("/cart?checkout=true");
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    if (!isWishlisted) {
      toast.success(`${product.name} added to your wishlist.`);
    } else {
      toast.info(`${product.name} removed from wishlist.`);
    }
  };

  // Simulated ratings breakdown
  const ratingStats = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 11 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 },
  ];

  const simulatedComments = [
    {
      author: "Alex Mercer",
      rating: 5,
      title: "Unbelievable Battery Life",
      content: "I routinely get 11 hours of screen-on time even with 120Hz turned on full-time. Charging is so fast I don't even plug it in overnight anymore.",
      date: "3 days ago",
      verified: true,
    },
    {
      author: "Sarah Jenkins",
      rating: 5,
      title: "Perfect for Pro Photography",
      content: "The dynamic range on the ultra-wide lens is absolutely breath-taking. Color temperature is neutral and matches my professional DSLR closely.",
      date: "1 week ago",
      verified: true,
    },
    {
      author: "David K.",
      rating: 4,
      title: "Extremely Premium Build",
      content: "The titanium bezel is extremely rigid and has a beautiful brushed metal texture. Only drawback is the weight is slightly noticeable compared to last year's standard alloy.",
      date: "2 weeks ago",
      verified: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      
      {/* Breadcrumbs */}
      <Breadcrumb className="text-xs">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-slate-400 hover:text-cyan-400">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-slate-600" />
          <BreadcrumbItem>
            <BreadcrumbLink href="/phones" className="text-slate-400 hover:text-cyan-400">Devices</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-slate-600" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-white font-semibold">{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Main Configuration Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Device Gallery */}
        <div className="lg:col-span-6 space-y-6">
          <div className="border border-slate-900 bg-slate-900/20 rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden group">
            {/* Holographic grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

            {/* Glowing active color backdrop */}
            <div
              className="absolute w-64 h-64 rounded-full blur-3xl opacity-20 transition-colors duration-500"
              style={{ backgroundColor: selectedColor.hex }}
            />

            {/* Main Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[340px] object-contain relative z-10 drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-105"
            />

            {/* Color Swatch Label Indicator */}
            <span className="absolute bottom-4 left-4 z-20 text-[10px] font-mono text-slate-400 bg-slate-950/80 border border-slate-900 px-2.5 py-1 rounded">
              Active Color: <span className="text-white font-bold">{selectedColor.name}</span>
            </span>
          </div>

          {/* Guarantee Badges */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-slate-900/30 border border-slate-900 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-cyan-400 mx-auto mb-1.5" />
              <span className="block text-[10px] font-bold text-white uppercase">2-Yr Warranty</span>
              <span className="text-[9px] text-slate-500">Included free</span>
            </div>
            <div className="p-3 bg-slate-900/30 border border-slate-900 rounded-lg">
              <Truck className="w-4 h-4 text-cyan-400 mx-auto mb-1.5" />
              <span className="block text-[10px] font-bold text-white uppercase">Fast Delivery</span>
              <span className="text-[9px] text-slate-500">Same-Day available</span>
            </div>
            <div className="p-3 bg-slate-900/30 border border-slate-900 rounded-lg">
              <RotateCcw className="w-4 h-4 text-cyan-400 mx-auto mb-1.5" />
              <span className="block text-[10px] font-bold text-white uppercase">30-Day Returns</span>
              <span className="text-[9px] text-slate-500">Risk-free trial</span>
            </div>
          </div>
        </div>

        {/* Right: Configuration Form & Pricing */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2 items-center">
              <Badge className="bg-cyan-500 text-slate-950 font-bold text-[10px] tracking-wider uppercase">
                {product.brand}
              </Badge>
              {product.isFlagship && (
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-[10px] uppercase">
                  Flagship Elite
                </Badge>
              )}
              <div className="flex items-center gap-1 text-xs text-slate-400 ml-auto">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-slate-200">{product.rating}</span>
                <span>({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-white">
              {product.name}
            </h1>
            <p className="text-sm text-slate-400 italic">
              {product.tagline}
            </p>
          </div>

          <Separator className="bg-slate-900" />

          {/* Color Selector */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
              1. Choose Exoskeleton Finish
            </span>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((c) => {
                const isSelected = selectedColor.name === c.name;
                return (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-all ${
                      isSelected
                        ? "border-cyan-500 bg-cyan-950/20 text-white"
                        : "border-slate-800 bg-slate-950 text-slate-400 hover:text-white"
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-slate-950 block shrink-0"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span>{c.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Storage Capacity Selector */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
              2. Choose Storage Capacity
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {product.storage.map((st, idx) => {
                const isSelected = selectedStorage === st;
                // Mock storage tier price markup
                const priceMarkup = idx * 100;
                return (
                  <button
                    key={st}
                    onClick={() => setSelectedStorage(st)}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      isSelected
                        ? "border-cyan-500 bg-cyan-950/20 text-white"
                        : "border-slate-800 bg-slate-950 text-slate-400 hover:text-white"
                    }`}
                  >
                    <span className="block text-xs font-mono font-bold">{st}</span>
                    <span className="text-[10px] text-slate-500 block mt-1">
                      {priceMarkup === 0 ? "Base Model" : `+$${priceMarkup}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <Separator className="bg-slate-900" />

          {/* Price & Call To Actions */}
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-900 space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase">Configured Price</span>
              <div className="text-right">
                {product.originalPrice && (
                  <span className="text-xs text-slate-500 line-through font-mono mr-2">
                    ${product.originalPrice + (product.storage.indexOf(selectedStorage) * 100)}
                  </span>
                )}
                <span className="text-2xl font-extrabold font-mono text-emerald-400">
                  ${currentPrice} USD
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="sm:col-span-8 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
              <Button
                onClick={toggleWishlist}
                variant="outline"
                size="lg"
                className="sm:col-span-4 border-slate-800 text-white hover:bg-slate-900 gap-1.5"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? "fill-rose-500 text-rose-500" : ""}`} />
                {isWishlisted ? "Saved" : "Wishlist"}
              </Button>
            </div>

            <Button
              onClick={handleExpressCheckout}
              variant="outline"
              className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 text-xs font-bold py-5"
            >
              Express Checkout
            </Button>
          </div>

          {/* Key specs short preview */}
          <div className="text-xs text-slate-400 leading-relaxed font-mono space-y-1.5 pt-2">
            <p>✔ Brand: <span className="text-white">{product.brand}</span></p>
            <p>✔ Operating System: <span className="text-white">{product.os}</span></p>
            <p>✔ Processor: <span className="text-white">{product.chipset}</span></p>
          </div>

        </div>
      </div>

      {/* Specifications Table Section */}
      <section className="pt-8 space-y-4">
        <div className="border-b border-slate-900 pb-2">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            Technical Specifications
          </h2>
        </div>

        <div className="border border-slate-900 rounded-xl overflow-hidden bg-slate-900/20">
          <Table>
            <TableBody>
              <TableRow className="border-slate-900 hover:bg-slate-900/40">
                <TableCell className="font-mono text-xs text-cyan-400 w-1/3 py-3.5 pl-6">Processor / Neural Chipset</TableCell>
                <TableCell className="text-xs text-slate-200 py-3.5">{product.chipset}</TableCell>
              </TableRow>
              <TableRow className="border-slate-900 hover:bg-slate-900/40">
                <TableCell className="font-mono text-xs text-cyan-400 w-1/3 py-3.5 pl-6">Cinematic Optics System</TableCell>
                <TableCell className="text-xs text-slate-200 py-3.5">{product.camera}</TableCell>
              </TableRow>
              <TableRow className="border-slate-900 hover:bg-slate-900/40">
                <TableCell className="font-mono text-xs text-cyan-400 w-1/3 py-3.5 pl-6">LTPO Display Matrix</TableCell>
                <TableCell className="text-xs text-slate-200 py-3.5">{product.display}</TableCell>
              </TableRow>
              <TableRow className="border-slate-900 hover:bg-slate-900/40">
                <TableCell className="font-mono text-xs text-cyan-400 w-1/3 py-3.5 pl-6">Battery Cell & Charge Speed</TableCell>
                <TableCell className="text-xs text-slate-200 py-3.5">{product.battery}</TableCell>
              </TableRow>
              <TableRow className="border-slate-900 hover:bg-slate-900/40">
                <TableCell className="font-mono text-xs text-cyan-400 w-1/3 py-3.5 pl-6">Operating Architecture</TableCell>
                <TableCell className="text-xs text-slate-200 py-3.5">{product.os}</TableCell>
              </TableRow>
              <TableRow className="border-slate-900 hover:bg-slate-900/40">
                <TableCell className="font-mono text-xs text-cyan-400 w-1/3 py-3.5 pl-6">Net Device Weight</TableCell>
                <TableCell className="text-xs text-slate-200 py-3.5">{product.weight}</TableCell>
              </TableRow>
              <TableRow className="border-slate-900 hover:bg-slate-900/40">
                <TableCell className="font-mono text-xs text-cyan-400 w-1/3 py-3.5 pl-6">Features & Protections</TableCell>
                <TableCell className="text-xs text-slate-200 py-3.5">
                  <ul className="list-disc list-inside space-y-1">
                    {product.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Customer Reviews & Breakdown Section */}
      <section className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Ratings Summary */}
        <div className="lg:col-span-4 space-y-4">
          <h2 className="text-xl font-bold text-white">Customer Reviews</h2>
          
          <div className="p-6 bg-slate-900/30 border border-slate-900 rounded-xl space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-extrabold text-white font-mono">{product.rating}</span>
              <div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-700"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-500">Based on {product.reviewsCount} buyers</span>
              </div>
            </div>

            <Separator className="bg-slate-900" />

            {/* Progress Bar Breakdown */}
            <div className="space-y-2.5">
              {ratingStats.map((stat) => (
                <div key={stat.stars} className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-12">{stat.stars} Stars</span>
                  <Progress value={stat.percentage} className="h-2 bg-slate-950" />
                  <span className="w-8 text-right font-bold text-white">{stat.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Comments List */}
        <div className="lg:col-span-8 space-y-4">
          <h3 className="font-bold text-sm text-slate-400 uppercase tracking-widest">
            Recent Feedback
          </h3>

          <div className="space-y-4">
            {simulatedComments.map((com, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/20 border border-slate-900 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-sm text-white block">{com.author}</span>
                    <span className="text-[10px] text-slate-500 font-mono block mt-0.5">{com.date}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded border border-slate-900">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-white">{com.rating}.0</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-xs text-cyan-400">{com.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    "{com.content}"
                  </p>
                </div>

                {com.verified && (
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium">
                    <Check className="w-3.5 h-3.5" />
                    <span>Verified Hardware Purchase</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}
