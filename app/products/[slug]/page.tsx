import { cn } from "@/lib/utils";
import { Product } from "@/lib/types";
import { getProductBySlug } from "@/lib/data/products";
import { MainNav } from "@/components/main-nav";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const product: Product | undefined = await getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1 container py-8 md:py-12 text-center">
          <h1 className="text-3xl font-bold text-destructive mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground text-lg">
            The product you are looking for does not exist or has been removed.
          </p>
          <Button variant="link" className="mt-4" asChild>
            <a href="/products">Back to Products</a>
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image Gallery */}
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full h-auto rounded-lg shadow-lg object-contain max-h-[600px]"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-foreground">
              {product.name}
            </h1>
            <div className="flex items-center space-x-2">
              <Badge variant="default">{product.brand}</Badge>
              <Badge variant="secondary">{product.category}</Badge>
              {product.inStock ? (
                <Badge variant="default">In Stock</Badge>
              ) : (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>

            <p className="text-3xl font-semibold text-primary">
              ${product.price.toFixed(2)}
            </p>

            <Separator />

            <p className="text-muted-foreground text-lg leading-relaxed">
              {product.description}
            </p>

            <Separator />

            {/* Specifications */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
                <CardDescription>Key features of this device.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Display:</p>
                  <p className="text-muted-foreground">{product.displaySize}</p>
                </div>
                <div>
                  <p className="font-medium">Camera:</p>
                  <p className="text-muted-foreground">{product.cameraSpecs}</p>
                </div>
                <div>
                  <p className="font-medium">Battery Life:</p>
                  <p className="text-muted-foreground">
                    {product.batteryLife}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Storage Options:</p>
                  <p className="text-muted-foreground">
                    {product.storageOptions.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Color Options:</p>
                  <p className="text-muted-foreground">
                    {product.colorOptions.join(", ")}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="flex-1" disabled={!product.inStock}>
                {product.inStock ? "Add to Cart" : "Notify Me When Available"}
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Add to Wishlist
              </Button>