"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, Product } from "@/lib/products";
import { PhoneCard } from "@/components/phone-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  Sparkles,
  Smartphone,
  Layers,
  Filter,
} from "lucide-react";

function CatalogContent() {
  const searchParams = useSearchParams();
  const searchParamQuery = searchParams.get("search") || "";
  const filterParamFlagship = searchParams.get("filter") === "flagship";

  // Filter States
  const [search, setSearch] = useState(searchParamQuery);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedOS, setSelectedOS] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [onlyFlagships, setOnlyFlagships] = useState<boolean>(filterParamFlagship);
  const [selectedStorage, setSelectedStorage] = useState<string>("");

  // Sync search input with URL search param changes
  useEffect(() => {
    setSearch(searchParamQuery);
  }, [searchParamQuery]);

  useEffect(() => {
    if (filterParamFlagship) {
      setOnlyFlagships(true);
    }
  }, [filterParamFlagship]);

  // Unique lists from data
  const brands = Array.from(new Set(PRODUCTS.map((p) => p.brand)));
  const storages = ["128GB", "256GB", "512GB", "1TB"];

  // Reset all filters action
  const handleReset = () => {
    setSearch("");
    setSelectedBrands([]);
    setSelectedOS([]);
    setMaxPrice(2000);
    setOnlyFlagships(false);
    setSelectedStorage("");
  };

  // Filter Logic
  const filteredProducts = PRODUCTS.filter((product) => {
    // Search Query
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        product.chipset.toLowerCase().includes(q) ||
        product.features.some((f) => f.toLowerCase().includes(q));
      if (!matchesSearch) return false;
    }

    // Brands
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }

    // OS
    if (selectedOS.length > 0 && !selectedOS.includes(product.os)) {
      return false;
    }

    // Price
    if (product.price > maxPrice) {
      return false;
    }

    // Flagship
    if (onlyFlagships && !product.isFlagship) {
      return false;
    }

    // Storage capacity check
    if (selectedStorage && !product.storage.includes(selectedStorage)) {
      return false;
    }

    return true;
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleOS = (os: string) => {
    setSelectedOS((prev) =>
      prev.includes(os) ? prev.filter((o) => o !== os) : [...prev, os]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Catalog Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Smartphone className="w-3.5 h-3.5" />
            <span>AeroPhone Hardware Catalog</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white mt-1">
            Explore Devices
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Showing <strong className="text-cyan-400 font-mono">{filteredProducts.length}</strong> of{" "}
            {PRODUCTS.length} premium mobile systems available.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <Input
            type="text"
            placeholder="Search processors, cameras, or features..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-10 bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500 rounded-lg text-xs py-5"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-3 bg-slate-900/40 border border-slate-900 rounded-xl p-6 space-y-6 sticky top-20">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <Filter className="w-4 h-4 text-cyan-400" />
              Specs Filter
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-cyan-400 h-8 px-2"
            >
              <RotateCcw className="w-3 h-3 mr-1" />
              Reset
            </Button>
          </div>

          <Separator className="bg-slate-900" />

          {/* Brands Filter */}
          <div className="space-y-2.5">
            <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
              Brand
            </label>
            <div className="space-y-2">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="rounded border-slate-800 bg-slate-950 text-cyan-500 focus:ring-cyan-500/20 w-3.5 h-3.5"
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* OS Filter */}
          <div className="space-y-2.5">
            <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
              Operating System
            </label>
            <div className="space-y-2">
              {["iOS", "Android"].map((os) => (
                <label
                  key={os}
                  className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedOS.includes(os)}
                    onChange={() => toggleOS(os)}
                    className="rounded border-slate-800 bg-slate-950 text-cyan-500 focus:ring-cyan-500/20 w-3.5 h-3.5"
                  />
                  <span>{os === "iOS" ? "iOS (Lumia)" : "Android (Aero/Apex)"}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Pricing Range */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                Max Price
              </label>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                ${maxPrice} USD
              </span>
            </div>
            <input
              type="range"
              min="400"
              max="2000"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-950 cursor-pointer h-1 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>$400</span>
              <span>$1200</span>
              <span>$2000</span>
            </div>
          </div>

          {/* Storage Capacity Selector */}
          <div className="space-y-2.5">
            <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
              Minimum Storage
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {storages.map((st) => (
                <Button
                  key={st}
                  type="button"
                  variant="outline"
                  onClick={() => setSelectedStorage(selectedStorage === st ? "" : st)}
                  className={`text-[10px] font-mono h-7 px-2 border-slate-800 ${
                    selectedStorage === st
                      ? "bg-cyan-500/10 border-cyan-500 text-cyan-400"
                      : "bg-slate-950 text-slate-400 hover:text-white"
                  }`}
                >
                  {st}
                </Button>
              ))}
            </div>
          </div>

          {/* Flagship Toggle */}
          <div className="space-y-2.5 pt-2">
            <label className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white cursor-pointer">
              <input
                type="checkbox"
                checked={onlyFlagships}
                onChange={(e) => setOnlyFlagships(e.target.checked)}
                className="rounded border-slate-800 bg-slate-950 text-cyan-500 focus:ring-cyan-500/20 w-3.5 h-3.5"
              />
              <span className="flex items-center gap-1">
                Show Only Flagships <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400" />
              </span>
            </label>
          </div>
        </aside>

        {/* Product Grid Area */}
        <main className="lg:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="p-12 text-center bg-slate-900/20 border border-slate-900 rounded-xl space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mx-auto text-slate-600">
                <SlidersHorizontal className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg text-slate-200">No smartphones match your filters</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                We couldn't find any premium devices matching those exact hardware specs. Try broadening your price range or selecting another brand.
              </p>
              <Button
                onClick={handleReset}
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs px-5"
              >
                Reset All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((phone) => (
                <div key={phone.id} className="animate-in fade-in duration-300">
                  <PhoneCard product={phone} />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function PhoneCatalog() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-slate-400 font-mono animate-pulse">Loading AeroPhone catalog...</p>
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
