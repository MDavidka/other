import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

export function ProductCard({ product, className, ...props }: ProductCardProps) {
  return (
    <Card className={cn("flex flex-col overflow-hidden", className)} {...props}>
      <Link href={`/products/${product.slug}`} className="relative block aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <CardHeader className="flex-grow">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-lg font-semibold leading-tight">
            <Link href={`/products/${product.slug}`} className="hover:underline">
              {product.name}
            </Link>
          </CardTitle>
          <Badge variant="secondary" className="ml-2">
            {product.brand}
          </Badge>
        </div>
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <span className="text-xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </span>