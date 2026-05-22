import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop All Smartphones, Tablets & Accessories | Connect Devices",
  description: "Browse our complete catalog of the latest smartphones, smartwatches, and mobile accessories from top brands. Find your perfect device today.",
}

export default function ShopPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Full Collection</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Explore Every Innovative Device</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">From flagship smartphones to essential accessories, find exactly what you need.</p></div>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="#products-grid">Filter Products</a></Button></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Extensive Catalog</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Discover Your Ideal Technology</h2>
    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Filter by brand, price, features, or category to quickly find the perfect match for your lifestyle.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/iphone-15-pro.webp" alt="iPhone 15 Pro" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">iPhone 15 Pro</h3>
          <p className="text-sm text-muted-foreground mt-1">$999</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/galaxy-z-fold5.webp" alt="Samsung Galaxy Z Fold5" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Samsung Galaxy Z Fold5</h3>
          <p className="text-sm text-muted-foreground mt-1">$1799</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/pixel-watch-2.webp" alt="Google Pixel Watch 2" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Google Pixel Watch 2</h3>
          <p className="text-sm text-muted-foreground mt-1">$349</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/oneplus-12.webp" alt="OnePlus 12" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">OnePlus 12</h3>
          <p className="text-sm text-muted-foreground mt-1">$799</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/ipad-air-m2.webp" alt="iPad Air M2" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">iPad Air M2</h3>
          <p className="text-sm text-muted-foreground mt-1">$599</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/galaxy-tab-s9.webp" alt="Samsung Galaxy Tab S9" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Samsung Galaxy Tab S9</h3>
          <p className="text-sm text-muted-foreground mt-1">$799</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
      <CardContent className="p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
        <Badge variant="secondary">Need Assistance?</Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Can't Find Your Perfect Device?</h2>
        
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/contact">Contact Support</a></Button></div>
      </CardContent>
    </Card>
  </div>
</section>
    </>
  )
}
