import Image from "next/image";
import { cn, formatCurrency } from "@/lib/utils";
import { PhoneProduct } from "@/lib/types";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const featuredProducts: PhoneProduct[] = [
  {
    id: "1",
    name: "Quantum X Pro",
    description: "The ultimate smartphone experience with a stunning display and powerful processor.",
    price: 1299.99,
    imageUrl: "https://placehold.co/800x600.png",
    storageOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Black", "Silver", "Midnight Blue"],
  },
  {
    id: "2",
    name: "Aura 5G",
    description: "Blazing-fast 5G connectivity and an all-day battery life. Stay connected, always.",
    price: 999.99,
    imageUrl: "https://placehold.co/800x600.png",
    storageOptions: ["64GB", "128GB", "256GB"],
    colorOptions: ["White", "Graphite", "Rose Gold"],
  },
  {
    id: "3",
    name: "Spectra Mini",
    description: "Compact design with flagship features. Perfect for one-handed use.",
    price: 799.99,
    imageUrl: "https://placehold.co/800x600.png",
    storageOptions: ["64GB", "128GB"],
    colorOptions: ["Coral", "Mint Green", "Sky Blue"],
  },
  {
    id: "4",
    name: "Zenith Fold",
    description: "Experience the future with our revolutionary foldable display technology.",
    price: 1899.99,
    imageUrl: "https://placehold.co/800x600.png",
    storageOptions: ["256GB", "512GB"],
    colorOptions: ["Cosmic Black", "Stardust Silver"],
  },
];

export default async function Home() {
  return (
    <main className={cn("flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-16")}>
      {/* Hero Section with Carousel */}
      <section className={cn("w-full max-w-6xl mb-16")}>
        <Carousel className={cn("w-full")}>
          <CarouselContent>
            {featuredProducts.map((product, index) => (
              <CarouselItem key={product.id}>
                <div className={cn("p-1")}>
                  <Card className={cn("overflow-hidden")}>
                    <CardContent className={cn("flex flex-col md:flex-row items-center justify-center p-6 md:p-0")}>
                      <div className={cn("w-full md:w-1/2 h-64 md:h-96 relative")}>
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className={cn("rounded-t-lg md:rounded-l-lg md:rounded-t-none")}
                          priority={index === 0}
                        />
                      </div>
                      <div className={cn("w-full md:w-1/2 p-6 md:p-8 text-center md:text-left")}>
                        <CardTitle className={cn("text-3xl md:text-4xl font-bold mb-2")}>{product.name}</CardTitle>
                        <CardDescription className={cn("text-lg text-muted-foreground mb-4")}>
                          {product.description}
                        </CardDescription>
                        <p className={cn("text-2xl font-semibold mb-6")}>{formatCurrency(product.price)}</p>
                        <Button size="lg" className={cn("w-full md:w-auto")}>Shop Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={cn("hidden md:flex")} />
          <CarouselNext className={cn("hidden md:flex")} />
        </Carousel>
      </section>

      {/* Featured Products Section */}
      <section className={cn("w-full max-w-6xl")}>
        <h2 className={cn("text-4xl font-bold text-center mb-10")}>Featured Products</h2>
        <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6")}>
          {featuredProducts.map((product) => (
            <Card key={product.id} className={cn("flex flex-col")}>
              <CardHeader className={cn("p-0")}>
                <div className={cn("relative w-full h-48")}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className={cn("rounded-t-lg")}
                  />
                </div>
              </CardHeader>
              <CardContent className={cn("flex-grow p-4")}>
                <CardTitle className={cn("text-xl font-semibold mb-2")}>{product.name}</CardTitle>
                <CardDescription className={cn("text-sm text-muted-foreground line-clamp-3")}>
                  {product.description}
                </CardDescription>
              </CardContent>
              <CardFooter className={cn("flex justify-between items-center p-4 pt-0")}>
                <span className={cn("text-lg font-bold")}>{formatCurrency(product.price)}</span>
                <Button variant="default" size="sm">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

app/page.tsx[usedfor]Home page.[usedfor]