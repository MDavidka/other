"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/lib/products";
import { useCart } from "@/components/cart-provider";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Cpu, Camera, Smartphone } from "lucide-react";

interface PhoneCardProps {
  product: Product;
}

export function PhoneCard({ product }: PhoneCardProps) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden border border-slate-800 bg-slate-950/60 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-950/20 flex flex-col justify-between h-full">
      <Link href={`/phones/${product.id}`} className="block flex-grow">
        <CardHeader className="relative p-0 aspect-[4/3] bg-slate-900/40 overflow-hidden flex items-center justify-center">
          {/* Badge Indicators */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
            {product.isFlagship && (
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold border-none text-[10px] tracking-wide uppercase px-2 py-0.5">
                Flagship
              </Badge>
            )}
            {product.isTrending && (
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold border-none text-[10px] tracking-wide uppercase px-2 py-0.5">
                Trending
              </Badge>
            )}
            {discountPercent > 0 && (
              <Badge className="bg-emerald-500 text-slate-950 font-bold border-none text-[10px] px-2 py-0.5">
                SAVE {discountPercent}%
              </Badge>
            )}
          </div>

          {/* Product Image */}
          <div className="relative w-full h-full p-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="object-contain max-h-[140px] w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
            />
          </div>
        </CardHeader>

        <CardContent className="p-5 flex-grow">
          {/* Brand & Stars */}
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
            <span className="font-mono text-cyan-400 tracking-wider uppercase text-[10px]">
              {product.brand}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-slate-200">{product.rating}</span>
              <span className="text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title & Tagline */}
          <h3 className="font-sans font-bold text-lg text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-slate-400 line-clamp-1 mb-3.5 italic">
            {product.tagline}
          </p>

          {/* Specifications Chips */}
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300 border-t border-slate-900 pt-3 mb-4">
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-cyan-500 shrink-0" />
              <span className="truncate">{product.chipset.split(" ")[0]}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Camera className="w-3 h-3 text-cyan-500 shrink-0" />
              <span className="truncate">{product.camera.split(" ")[0]}</span>
            </div>
            <div className="flex items-center gap-1.5 col-span-2">
              <Smartphone className="w-3 h-3 text-cyan-500 shrink-0" />
              <span className="truncate">{product.display.split(",")[0]}</span>
            </div>
          </div>

          {/* Colors Swatches Teaser */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono text-slate-500 uppercase">Colors:</span>
            <div className="flex items-center gap-1">
              {product.colors.map((c) => (
                <span
                  key={c.name}
                  className="w-2.5 h-2.5 rounded-full border border-slate-950 ring-1 ring-slate-800"
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Link>

      <CardFooter className="px-5 pb-5 pt-0 flex items-center justify-between gap-2 border-t border-slate-900/50 mt-auto">
        <div className="flex flex-col pt-3">
          {product.originalPrice && (
            <span className="text-xs text-slate-500 line-through font-mono">
              ${product.originalPrice}
            </span>
          )}
          <span className="text-lg font-bold font-mono text-emerald-400">
            ${product.price}
          </span>
        </div>

        <Button
          onClick={handleQuickAdd}
          size="sm"
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold gap-1.5 transition-colors shrink-0 mt-3"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
