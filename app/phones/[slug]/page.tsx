"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PhoneCard } from "@/components/PhoneCard";
import { Star, ArrowLeft, ShoppingCart, Truck, Shield } from "lucide-react";
import type { Phone, CartItem } from "@/lib/types";
import {
  getCartFromStorage,
  saveCartToStorage,
  addToCart,
  formatPrice,
} from "@/lib/utils";

const PHONES: Phone[] = [
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
    description: "The most advanced iPhone ever. Features a titanium design, powerful A17 Pro chip, and an advanced camera system.",
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
    description: "The ultimate Android flagship with S Pen, incredible zoom camera, and the brightest display on any phone.",
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
    description: "Google's most advanced Pixel with incredible AI features and the best computational photography.",
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [phone, setPhone] = React.useState<Phone | null>(null);
  const [selectedColor, setSelectedColor] = React.useState("");
  const [selectedStorage, setSelectedStorage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [isAddingToCart, setIsAddingToCart] = React.useState(false);

  // Load phone data
  React.useEffect(() => {
    const foundPhone = PHONES.find((p) => p.slug === slug);
    if (foundPhone) {
      setPhone(foundPhone);
      setSelectedColor(foundPhone.color);
      setSelectedStorage(foundPhone.storage);
    }
  }, [slug]);

  // Load cart from localStorage
  React.useEffect(() => {
    const savedCart = getCartFromStorage();
    setCartItems(savedCart);
  }, []);

  const relatedPhones = React.useMemo(() => {
    if (!phone) return [];
    return PHONES.filter(
      (p) => p.id !== phone.id && p.brand === phone.brand
    ).slice(0, 3);
  }, [phone]);

  const handleAddToCart = () => {
    if (!phone) return;

    setIsAddingToCart(true);

    const updatedPhone = {
      ...phone,
      color: selectedColor,
      storage: selectedStorage,
    };

    const updatedCart = addToCart(cartItems, updatedPhone);
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);

    setTimeout(() => {
      setIsAddingToCart(false);
      setQuantity(1);
    }, 600);
  };

  const handleViewDetails = (phoneSlug: string) => {
    router.push(`/phones/${phoneSlug}`);
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  if (!phone) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading product...</p>
        </div>
      </div>
    );
  }

  const currentPrice = phone.price;
  const totalPrice = currentPrice * quantity;

  const colors = [phone.color, "Black", "Silver", "Gold"].slice(0, 4);
  const storageOptions = [phone.storage, 256, 512].filter(
    (v, i, arr) => arr.indexOf(v) === i
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={handleBackToHome}
            className="mb-4 -ml-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Store
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Phones</span>
            <span>/</span>
            <span>{phone.brand}</span>
            <span>/</span>
            <span className="text-foreground">{phone.name}</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-muted">
              <img
                src={phone.image || "https://placehold.co/800x600.png"}
                alt={phone.name}
                className="h-full w-full object-cover"
              />
              {phone.isNew && (
                <Badge className="absolute top-4 left-4">New</Badge>
              )}
              {phone.stock <= 5 && phone.stock > 0 && (
                <Badge variant="destructive" className="absolute top-4 right-4">
                  Only {phone.stock} left
                </Badge>
              )}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-2">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>2-Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="outline">{phone.brand}</Badge>
                {phone.isNew && <Badge>New Arrival</Badge>}
              </div>
              <h1 className="text-4xl font-bold tracking-tight">{phone.name}</h1>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-5 w-5",
                        i < Math.floor(phone.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground/40"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {phone.rating.toFixed(1)} ({phone.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-semibold tabular-nums">
                {formatPrice(currentPrice)}
              </span>
              {phone.originalPrice && phone.originalPrice > currentPrice && (
                <span className="text-xl text-muted-foreground line-through tabular-nums">
                  {formatPrice(phone.originalPrice)}
                </span>
              )}
            </div>

            {/* Color Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Color</span>
                <span className="text-sm text-muted-foreground">{selectedColor}</span>
              </div>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "h-10 w-10 rounded-full border-2 transition-all",
                      selectedColor === color
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border hover:border-muted-foreground"
                    )}
                    style={{
                      backgroundColor:
                        color.toLowerCase() === "titanium"
                          ? "#8B8B8B"
                          : color.toLowerCase() === "black"
                          ? "#1F2937"
                          : color.toLowerCase() === "silver"
                          ? "#D1D5DB"
                          : color.toLowerCase() === "gold"
                          ? "#D4AF37"
                          : "#64748B",
                    }}
                    aria-label={color}
                  />
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Storage</span>
                <span className="text-sm text-muted-foreground">
                  {selectedStorage} GB
                </span>
              </div>
              <div className="flex gap-3">
                {storageOptions.map((storage) => (
                  <Button
                    key={storage}
                    variant={selectedStorage === storage ? "default" : "outline"}
                    onClick={() => setSelectedStorage(storage)}
                    className="flex-1"
                  >
                    {storage} GB
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="text-sm font-medium mb-3 block">Quantity</span>
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    −
                  </Button>
                  <span className="px-4 text-sm font-medium tabular-nums min-w-[40px] text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10"
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {phone.stock} available
                </span>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="pt-2">
              <Button
                onClick={handleAddToCart}
                disabled={phone.stock === 0 || isAddingToCart}
                className="w-full h-12 text-base"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {isAddingToCart
                  ? "Adding to Cart..."
                  : `Add to Cart — ${formatPrice(totalPrice)}`}
              </Button>
              {phone.stock === 0 && (
                <p className="text-sm text-destructive mt-2 text-center">
                  This product is currently out of stock
                </p>
              )}
            </div>

            {/* Description */}
            <div className="pt-4">
              <p className="text-muted-foreground leading-relaxed">
                {phone.description}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/3">Feature</TableHead>
                        <TableHead>Specification</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Display</TableCell>
                        <TableCell>{phone.specs.display}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Processor</TableCell>
                        <TableCell>{phone.specs.processor}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Camera</TableCell>
                        <TableCell>{phone.specs.camera}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Battery</TableCell>
                        <TableCell>{phone.specs.battery}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Operating System</TableCell>
                        <TableCell>{phone.specs.os}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Storage</TableCell>
                        <TableCell>{phone.storage} GB</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Color</TableCell>
                        <TableCell>{phone.color}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Experience premium performance with the {phone.name}. Built with
                    cutting-edge technology and designed for those who demand the best.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Premium build quality with durable materials</li>
                    <li>Advanced camera system for professional photography</li>
                    <li>Long-lasting battery with fast charging support</li>
                    <li>Latest operating system with regular security updates</li>
                    <li>1-year manufacturer warranty included</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Shipping &amp; Returns</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Truck className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Free Standard Shipping</p>
                      <p className="text-sm text-muted-foreground">
                        Delivery in 3-5 business days. Express shipping available at checkout.
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <Shield className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">30-Day Return Policy</p>
                      <p className="text-sm text-muted-foreground">
                        Return any unused product within 30 days for a full refund.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedPhones.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                More from {phone.brand}
              </h2>
              <Button variant="ghost" onClick={() => router.push("/")}>
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPhones.map((relatedPhone) => (
                <PhoneCard
                  key={relatedPhone.id}
                  phone={relatedPhone}
                  onAddToCart={(p) => {
                    const updated = addToCart(cartItems, p);
                    setCartItems(updated);
                    saveCartToStorage(updated);
                  }}
                  onViewDetails={handleViewDetails}
                />