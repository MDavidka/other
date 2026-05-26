import { cn } from "@/lib/utils";
import { Product } from "@/lib/types";
import { getProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/product-card";
import { MainNav } from "@/components/main-nav";

export default async function ProductsPage() {
  const products: Product[] = await getProducts();

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 container py-8 md:py-12">
        <section className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Latest Smartphones
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore a wide range of mobile phones from top brands, featuring the
            latest technology and designs.
          </p>
        </section>

        <section>
          {products.length === 0 ? (
            <div className="text-center text-muted-foreground text-xl py-10">
              No products found. Please check back later!
            </div>
          ) : (
            <div
              className={cn(
                "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              )}
            >
              {products.map((product) => (