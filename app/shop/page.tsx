import { type Metadata } from "next"
import { Badge, Button, Card, CardContent, CardFooter } from "@/components/ui/Badge"

export const metadata: Metadata = {
  title: "Shop Smartphones | Latest Models & Best Deals - NextGen Mobile",
  description: "Browse NextGen Mobile's extensive collection of the latest smartphones from Apple, Samsung, Google, and more. Find your next device with competitive pricing.",
}

export default function ShopPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Your Mobile Universe</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Explore Our Full Smartphone Collection</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Dive into a curated selection of the newest devices, from flagships to budget-friendly options. Find exactly what you need.</p></div>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="#product-list">Filter by Brand</a></Button></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">All Devices</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Find Your Perfect Match</h2>
    <p className="text-muted-foreground max-w-2xl">Filter by brand, features, or price to discover the smartphone that fits your lifestyle and budget perfectly.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://cdn.nextgenmobile.com/iphone-15-pro-max.webp" alt="iPhone 15 Pro Max" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">iPhone 15 Pro Max</h3>
          <p className="text-sm text-muted-foreground mt-1">$1199</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://cdn.nextgenmobile.com/galaxy-z-fold5.webp" alt="Samsung Galaxy Z Fold5" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
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
          <img src="https://cdn.nextgenmobile.com/pixel-8a.webp" alt="Google Pixel 8a" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Google Pixel 8a</h3>
          <p className="text-sm text-muted-foreground mt-1">$499</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://cdn.nextgenmobile.com/oneplus-open.webp" alt="OnePlus Open" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">OnePlus Open</h3>
          <p className="text-sm text-muted-foreground mt-1">$1699</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://cdn.nextgenmobile.com/xiaomi-14-ultra.webp" alt="Xiaomi 14 Ultra" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Xiaomi 14 Ultra</h3>
          <p className="text-sm text-muted-foreground mt-1">$999</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://cdn.nextgenmobile.com/motorola-edge-50-pro.webp" alt="Motorola Edge 50 Pro" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Motorola Edge 50 Pro</h3>
          <p className="text-sm text-muted-foreground mt-1">$699</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://cdn.nextgenmobile.com/nothing-phone-2.webp" alt="Nothing Phone (2)" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Nothing Phone (2)</h3>
          <p className="text-sm text-muted-foreground mt-1">$599</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://cdn.nextgenmobile.com/asus-rog-phone-8-pro.webp" alt="Asus ROG Phone 8 Pro" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Asus ROG Phone 8 Pro</h3>
          <p className="text-sm text-muted-foreground mt-1">$1099</p>
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
        
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Unlock Exclusive Student Discounts</h2>
        <p className="text-lg text-muted-foreground max-w-xl">Verify your student status and save up to 15% on any new smartphone purchase. Education just got smarter.</p>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/dealsstudent">Verify &amp; Save</a></Button></div>
      </CardContent>
    </Card>
  </div>
</section>
    </>
  )
}
