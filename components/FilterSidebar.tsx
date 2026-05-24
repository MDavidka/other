"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Phone } from "@/lib/types";

interface FilterSidebarProps {
  phones: Phone[];
  selectedBrands: string[];
  priceRange: [number, number];
  selectedStorage: number[];
  onBrandsChange: (brands: string[]) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onStorageChange: (storage: number[]) => void;
  onResetFilters: () => void;
  className?: string;
}

const BRANDS = ["Apple", "Samsung", "Google", "OnePlus", "Sony"] as const;
const STORAGE_OPTIONS = [128, 256, 512, 1024] as const;

export function FilterSidebar({
  phones,
  selectedBrands,
  priceRange,
  selectedStorage,
  onBrandsChange,
  onPriceRangeChange,
  onStorageChange,
  onResetFilters,
  className,
}: FilterSidebarProps) {
  const maxPrice = React.useMemo(() => {
    if (phones.length === 0) return 2000;
    return Math.max(...phones.map((p) => p.price));
  }, [phones]);

  const minPrice = React.useMemo(() => {
    if (phones.length === 0) return 0;
    return Math.min(...phones.map((p) => p.price));
  }, [phones]);

  const handleBrandToggle = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      onBrandsChange(selectedBrands.filter((b) => b !== brand));
    } else {
      onBrandsChange([...selectedBrands, brand]);
    }
  };

  const handleStorageToggle = (storage: number) => {
    if (selectedStorage.includes(storage)) {
      onStorageChange(selectedStorage.filter((s) => s !== storage));
    } else {
      onStorageChange([...selectedStorage, storage].sort((a, b) => a - b));
    }
  };

  const handlePriceChange = (value: number[]) => {
    onPriceRangeChange([value[0], value[1]]);
  };

  const hasActiveFilters =
    selectedBrands.length > 0 ||
    selectedStorage.length > 0 ||
    priceRange[0] !== minPrice ||
    priceRange[1] !== maxPrice;

  return (
    <div className={cn("w-full space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onResetFilters}
            className="h-8 px-2 text-xs"
          >
            Reset all
          </Button>
        )}
      </div>

      <Separator />

      <Accordion type="multiple" defaultValue={["brand", "price", "storage"]} className="w-full">
        {/* Brand Filter */}
        <AccordionItem value="brand">
          <AccordionTrigger className="text-sm font-medium">Brand</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-1">
              {BRANDS.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => handleBrandToggle(brand)}
                  />
                  <Label
                    htmlFor={`brand-${brand}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range Filter */}
        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <div className="px-1">
                <Slider
                  value={priceRange}
                  min={minPrice}
                  max={maxPrice}
                  step={10}
                  onValueChange={handlePriceChange}
                  className="w-full"
                />
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Storage Filter */}
        <AccordionItem value="storage">
          <AccordionTrigger className="text-sm font-medium">Storage</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-1">
              {STORAGE_OPTIONS.map((storage) => (
                <div key={storage} className="flex items-center space-x-2">
                  <Checkbox
                    id={`storage-${storage}`}
                    checked={selectedStorage.includes(storage)}
                    onCheckedChange={() => handleStorageToggle(storage)}
                  />
                  <Label
                    htmlFor={`storage-${storage}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {storage} GB