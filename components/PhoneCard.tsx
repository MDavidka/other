"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import type { Phone } from "@/lib/types";

interface PhoneCardProps {
  phone: Phone;
  onAddToCart: (phone: Phone) => void;
  onViewDetails: (slug: string) => void;
  className?: string;
}

export function PhoneCard({
  phone,
  onAddToCart,
  onViewDetails,
  className,
}: PhoneCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(phone);
  };

  const handleViewDetails = () => {
    onViewDetails(phone.slug);
  };

  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all duration-200 hover:shadow-lg cursor-pointer",
        className
      )}
      onClick={handleViewDetails}
    >
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={phone.image || "https://placehold.co/400x300.png"}
            alt={phone.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {phone.stock <= 5 && phone.stock > 0 && (
            <Badge
              variant="destructive"
              className="absolute top-3 right-3 text-xs"
            >
              Only {phone.stock} left
            </Badge>
          )}
          {phone.stock === 0 && (
            <Badge
              variant="secondary"
              className="absolute top-3 right-3 text-xs"
            >
              Out of stock
            </Badge>
          )}
          {phone.isNew && (
            <Badge className="absolute top-3 left-3 text-xs">New</Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted-foreground font-medium">
                {phone.brand}
              </p>
              <h3 className="font-semibold text-lg leading-tight line-clamp-2 mt-0.5">
                {phone.name}
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3.5 w-3.5",
                  i < Math.floor(phone.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted-foreground/40"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground tabular-nums">
            {phone.rating.toFixed(1)} ({phone.reviewCount})
          </span>
        </div>

        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-semibold tabular-nums">
            {formatPrice(phone.price)}
          </span>
          {phone.originalPrice && phone.originalPrice > phone.price && (
            <span className="text-sm text-muted-foreground line-through tabular-nums">
              {formatPrice(phone.originalPrice)}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          <Badge variant="outline" className="text-xs font-normal">
            {phone.storage} GB
          </Badge>
          <Badge variant="outline" className="text-xs font-normal">
            {phone.color}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={phone.stock === 0}
          className="w-full"
          size="sm"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {phone.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
}

components/PhoneCard.tsx[usedfor]Product card component: Reusable phone card with image, price, rating and quick add to cart using Card and Button[/usedfor]