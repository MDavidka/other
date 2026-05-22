import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"
import { Card } from "@/components/ui/card"
import { CardContent } from "@/components/ui/cardcontent"
import { CardFooter } from "@/components/ui/cardfooter"

export const metadata: Metadata = {
  title: "Shop Flagship Phones — other",
  description: "Browse the latest iPhone, Galaxy, Pixel, and Xperia models. Filter by brand, storage, and price. 2-day shipping included.",
}

export default function ShopPage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-5">
            
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Ship something people remember.</h1>
          </div>
          <div className="lg:col-span-5 space-y-5">
            <p className="text-pretty text-lg text-muted-foreground">Filter by brand, storage, camera specs, and price. Every device ships same day with full diagnostic report.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="#">Get started</Link></Button>
        
      </div>
          </div>
        </div>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><p className="text-muted-foreground max-w-2xl">Hand-selected devices with verified battery health and carrier unlock status.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://via.placeholder.com/600x600" alt="iPhone 16 Pro Max" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">iPhone 16 Pro Max</h3>
          <p className="text-sm text-muted-foreground mt-1">1199</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://via.placeholder.com/600x600" alt="Galaxy S25 Ultra" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Galaxy S25 Ultra</h3>
          <p className="text-sm text-muted-foreground mt-1">1299</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://via.placeholder.com/600x600" alt="Pixel 9 Pro XL" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Pixel 9 Pro XL</h3>
          <p className="text-sm text-muted-foreground mt-1">999</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://via.placeholder.com/600x600" alt="Xperia 1 VI" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Xperia 1 VI</h3>
          <p className="text-sm text-muted-foreground mt-1">1399</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</section>
    </>
  )
}
