"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhoneCard } from "@/components/PhoneCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { CartDrawer } from "@/components/CartDrawer";
import type { Phone, CartItem } from "@/lib/types";
import {
  getCartFromStorage,
  saveCartToStorage,
  addToCart,
  filterPhones,
  sortPhones,
  formatPrice,
} from "@/lib/utils";
import { ArrowRight, Star, Truck, Shield, Award } from "lucide-react";

const FEATURED_PHONES: Phone[] = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    brand: "Apple",
    price: 999,
    originalPrice: 1099,
    storage: 128,
    color: "Titanium",
    image: "https://placehold.co/800x600.png",
    rating: 4.8,
    reviewCount: 1243,
    stock: 45,
    isNew: true,
    specs: {
      display: "6.1-inch Super Retina XDR OLED",
      processor: "A17 Pro chip",
      camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      battery: "Up to 29 hours video playback",
      os: "iOS 17",
    },
    description: "The most advanced iPhone ever.",
  },
  {
    id: "2",
    name: "Galaxy S24 Ultra",
    slug: "galaxy-s24-ultra",
    brand: "Samsung",
    price: 1299,
    storage: 256,
    color: "Titanium Black",
    image: "https://placehold.co/800x600.png",
    rating: 4.7,
    reviewCount: 892,
    stock: 32,
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "200MP Main + 12MP Ultra Wide + 50MP Telephoto",
      battery: "5000mAh with 45W fast charging",
      os: "Android 14",
    },
    description: "The ultimate Android flagship.",
  },
  {
    id: "3",
    name: "Pixel 8 Pro",
    slug: "pixel-8-pro",
    brand: "Google",
    price: 999,
    storage: 128,
    color: "Obsidian",
    image: "https://placehold.co/800x600.png",
    rating: 4.6,
    reviewCount: 654,
    stock: 28,
    specs: {
      display: "6.7-inch LTPO OLED",
      processor: "Google Tensor G3",
      camera: "50MP Main + 48MP Ultra Wide + 48MP Telephoto",
      battery: "5050mAh with 30W charging",
      os: "Android 14",
    },
    description: "Google's most advanced Pixel.",
  },
  {
    id: "4",
    name: "iPhone 15",
    slug: "iphone-15",
    brand: "Apple",
    price: 799,
    originalPrice: 899,
    storage: 128,
    color: "Blue",
    image: "https://placehold.co/800x600.png",
    rating: 4.5,
    reviewCount: 987,
    stock: 67,
    specs: {
      display: "6.1-inch Super Retina XDR OLED",
      processor: "A16 Bionic chip",
      camera: "48MP Main + 12MP Ultra Wide",
      battery: "Up to 26 hours video playback",
      os: "iOS 17",
    },
    description: "The iconic iPhone experience.",
  },
  {
    id: "5",
    name: "Galaxy S24",
    slug: "galaxy-s24",
    brand: "Samsung",
    price: 899,
    storage: 128,
    color: "Marble Gray",
    image: "https://placehold.co/800x600.png",
    rating: 4.4,
    reviewCount: 521,
    stock: 41,
    specs: {
      display: "6.2-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main + 12MP Ultra Wide",
      battery: "4000mAh with 25W fast charging",
      os: "Android 14",
    },
    description: "Premium Galaxy experience.",
  },
  {
    id: "6",
    name: "OnePlus 12",
    slug: "oneplus-12",
    brand: "OnePlus",
    price: 799,
    storage: 256,
    color: "Flowy Emerald",
    image: "https://placehold.co/800x600.png",
    rating: 4.3,
    reviewCount: 312,
    stock: 19,
    specs: {
      display: "6.82-inch AMOLED",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main + 48MP Ultra Wide + 64MP Telephoto",
      battery: "5400mAh with 80W fast charging",
      os: "Android 14",
    },
    description: "Flagship killer with incredible speed.",
  },
];

export default function HomePage() {
  const router = useRouter();
  const [phones] = React.useState<Phone[]>(FEATURED_PHONES);
  const [filteredPhones, setFilteredPhones] = React.useState<Phone[]>(FEATURED_PHONES);
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
  const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 2000]);
  const [selectedStorage, setSelectedStorage] = React.useState<number[]>([]);
  const [sortBy, setSortBy] = React.useState<"price-low" | "price-high" | "rating" | "newest">("newest");
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  // Load cart from localStorage
  React.useEffect(() => {
    const savedCart = getCartFromStorage();
    setCartItems(savedCart);
  }, []);

  // Apply filters and sorting
  React.useEffect(() => {
    let result = filterPhones(phones, selectedBrands, priceRange, selectedStorage);
    result = sortPhones(result, sortBy);
    setFilteredPhones(result);
  }, [phones, selectedBrands, priceRange, selectedStorage, sortBy]);

  const handleAddToCart = (phone: Phone) => {
    const updatedCart = addToCart(cartItems, phone);
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);
    setIsCartOpen(true);

    // Dispatch custom event for layout cart count update
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleViewDetails = (slug: string) => {
    router.push(`/phones/${slug}`);
  };

  const handleUpdateCartQuantity = (id: string, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleRemoveFromCart = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    router.push("/cart");
  };

  const handleResetFilters = () => {
    setSelectedBrands([]);
    setPriceRange([0, 2000]);
    setSelectedStorage([]);
    setSortBy("newest");
  };

  const handleBrandChange = (brands: string[]) => {
    setSelectedBrands(brands);
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  const handleStorageChange = (storage: number[]) => {
    setSelectedStorage(storage);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value as "price-low" | "price-high" | "rating" | "newest");
  };

  const maxPrice = React.useMemo(() => {
    return Math.max(...phones.map((p) => p.price));
  }, [phones]);

  const minPrice = React.useMemo(() => {
    return Math.min(...phones.map((p) => p.price));
  }, [phones]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background border-b">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">
              New Arrivals 2025
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Premium smartphones.<br />Exceptional experience.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Discover the latest flagship devices from Apple, Samsung, Google and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => document.getElementById("phones")?.scrollIntoView({ behavior: "smooth" })}>
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => router.push("/deals")}>
                View Deals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4" /> Free shipping on orders over $500
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" /> 2-year warranty included
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" /> 30-day money-back guarantee
            </div>
          </div>
        </div>
      </section>

      {/* Featured Phones Section */}
      <section id="phones" className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <FilterSidebar
              phones={phones}
              selectedBrands={selectedBrands}
              priceRange={priceRange}
              selectedStorage={selectedStorage}
              onBrandsChange={handleBrandChange}
              onPriceRangeChange={handlePriceChange}
              onStorageChange={handleStorageChange}
              onResetFilters={handleResetFilters}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Featured Phones</h2>
                <p className="text-muted-foreground mt-1">
                  {filteredPhones.length} phones available
                </p>
              </div>

              {/* Sort Controls */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground hidden sm:inline">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="h-9 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Phones Grid */}
            {filteredPhones.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredPhones.map((phone) => (
                  <PhoneCard
                    key={phone.id}
                    phone={phone}
                    onAddToCart={handleAddToCart}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center border rounded-lg">
                <div className="rounded-full bg-muted p-4 mb-4">
                  <Star className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No phones found</h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Try adjusting your filters to see more results.
                </p>
                <Button variant="outline" onClick={handleResetFilters}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-muted/30 border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Shop by Brand</h2>
            <p className="text-muted-foreground">Explore our curated selection of premium devices</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Apple", "Samsung", "Google", "OnePlus"].map((brand) => (
              <button
                key={brand}
                onClick={() => {
                  setSelectedBrands([brand]);
                  document.getElementById("phones")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex flex-col items-center justify-center rounded-xl border bg-background p-8 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="text-4xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {brand === "Apple" && ""}
                  {brand === "Samsung" && "S"}
                  {brand === "Google" && "G"}
                  {brand === "OnePlus" && "1+"}
                </div>
                <span className="font-semibold text-lg">{brand}</span>
                <span className="text-xs text-muted-foreground mt-1">View collection →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Ready to upgrade?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of happy customers who chose Nexlify for their next device.
          </p>
          <Button size="lg" onClick={() => router.push("/phones")}>
            Browse All Phones
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Cart Drawer */}
      <CartDrawer
        open={isCartOpen}
        onOpenChange={setIsCartOpen}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />