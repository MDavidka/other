import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/types";
import { getProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/product-card";
import { MainNav } from "@/components/main-nav";

export default async function HomePage() {
  const products: Product[] = await getProducts();
  const featuredProducts = products.slice(0, 4); // Display first 4 products as featured

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] w-full overflow-hidden bg-gradient-to-r from-primary to-blue-600 text-primary-foreground">
          <img
            src="https://placehold.co/1920x500.png"
            alt="Hero Background"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              Discover Your Next Smartphone
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-8">
              Explore the latest models, cutting-edge technology, and unbeatable deals.
            </p>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Shop All Phones
            </Button>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="container py-12 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Phones</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Handpicked selections of our most popular and innovative devices.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Call to Action / About Us Section */}
        <section className="bg-secondary py-12 md:py-20">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Why Choose Our Store?
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                We offer a curated selection of the best smartphones, competitive pricing, and exceptional customer service. Find your perfect device with confidence.
              </p>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src="https://placehold.co/600x400.png"
                alt="About Us"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />