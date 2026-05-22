import { type Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "other: Buy Smartphones Online",
  description: "Browse and buy the latest smartphones, tablets, and accessories from top brands. Find deals and compare models.",
}

export default function ShopPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Full Collection</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Discover Every Device Imaginable.</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">From budget-friendly options to premium flagships, find the perfect phone and essential accessories tailored to your needs.</p>
        <p className="text-muted-foreground max-w-2xl">Use our advanced filters to sort by brand, price, features, and more. Your ideal mobile experience awaits.</p></div>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="#product-list">Filter Products</a></Button></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Curated for You</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Explore Our Extensive Catalog.</h2>
    <p className="text-muted-foreground max-w-2xl">Dive into a diverse range of smartphones and accessories. We've got something for every user and every budget.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/shop-phone-x-pro-max.webp" alt="Phone X Pro Max" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Phone X Pro Max</h3>
          <p className="text-sm text-muted-foreground mt-1">$1299</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/shop-galaxy-z-fold-5.webp" alt="Galaxy Z Fold 5" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Galaxy Z Fold 5</h3>
          <p className="text-sm text-muted-foreground mt-1">$1799</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/shop-pixel-9-pro.webp" alt="Pixel 9 Pro" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Pixel 9 Pro</h3>
          <p className="text-sm text-muted-foreground mt-1">$999</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/shop-oneplus-12.webp" alt="OnePlus 12" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">OnePlus 12</h3>
          <p className="text-sm text-muted-foreground mt-1">$799</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/shop-iphone-se.webp" alt="iPhone SE (2024)" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">iPhone SE (2024)</h3>
          <p className="text-sm text-muted-foreground mt-1">$429</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/shop-galaxy-a55.webp" alt="Samsung Galaxy A55" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Samsung Galaxy A55</h3>
          <p className="text-sm text-muted-foreground mt-1">$399</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/shop-pixel-8a.webp" alt="Google Pixel 8a" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Google Pixel 8a</h3>
          <p className="text-sm text-muted-foreground mt-1">$499</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/shop-xiaomi-14-ultra.webp" alt="Xiaomi 14 Ultra" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Xiaomi 14 Ultra</h3>
          <p className="text-sm text-muted-foreground mt-1">$1199</p>
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
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Can't Decide? Let Our Experts Help.</h2>
        <p className="text-lg text-muted-foreground max-w-xl">Our team is ready to guide you through the options and help you select the perfect device that fits your lifestyle.</p>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/contact">Talk to an Expert</a></Button></div>
      </CardContent>
    </Card>
  </div>
</section>
    </>
  )
}
