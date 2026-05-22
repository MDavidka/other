import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Shop Smartphones | Latest Models & Best Deals - Mobile Hub",
  description: "Explore a wide selection of the newest smartphones from top brands. Find your next device with detailed specs and competitive pricing.",
}

export default function PhonesPage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-5">
            <Badge variant="secondary" className="rounded-full">Your Next Connection</Badge>
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Explore Our Extensive Phone Catalog</h1>
          </div>
          <div className="lg:col-span-5 space-y-5">
            <p className="text-pretty text-lg text-muted-foreground">Dive into our curated collection of smartphones, from budget-friendly options to high-performance flagships. Filter by brand, features, or price.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="#">Get started</Link></Button>
        
      </div>
          </div>
        </div>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">All Devices</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Smartphones for Every Lifestyle</h2>
    <p className="text-muted-foreground max-w-2xl">Find the perfect phone that fits your needs, whether you prioritize camera quality, battery life, or processing power.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/phone-quantum-x.webp" alt="Quantum X Pro (256GB)" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Quantum X Pro (256GB)</h3>
          <p className="text-sm text-muted-foreground mt-1">$1199</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/phone-aura-fold.webp" alt="Aura Fold 5G (512GB)" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Aura Fold 5G (512GB)</h3>
          <p className="text-sm text-muted-foreground mt-1">$1799</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/phone-pixel-vision.webp" alt="Pixel Vision 8 Pro (128GB)" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Pixel Vision 8 Pro (128GB)</h3>
          <p className="text-sm text-muted-foreground mt-1">$899</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/phone-oneplus-nova.webp" alt="OnePlus Nova 12 (256GB)" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">OnePlus Nova 12 (256GB)</h3>
          <p className="text-sm text-muted-foreground mt-1">$749</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/phone-xiaomi-hyper.webp" alt="Xiaomi Hyper 14 (512GB)" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Xiaomi Hyper 14 (512GB)</h3>
          <p className="text-sm text-muted-foreground mt-1">$999</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/phone-motorola-edge.webp" alt="Motorola Edge 50 (128GB)" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Motorola Edge 50 (128GB)</h3>
          <p className="text-sm text-muted-foreground mt-1">$599</p>
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
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Make an Informed Choice</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Compare Top Smartphone Models</h2>
    <p className="text-muted-foreground max-w-2xl">Side-by-side comparison of key specifications to help you decide on your next device.</p></div>

    <div className="mt-12 overflow-x-auto rounded-xl border">
      <table className="w-full">
        <thead><tr className="bg-muted/50">
    <th className="p-4 text-left font-semibold">Feature</th>

        </tr></thead>
        <tbody>

        </tbody>
      </table>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
      <CardContent className="p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
        
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Need Personalized Advice?</h2>
        <p className="text-lg text-muted-foreground max-w-xl">Our mobile experts are ready to guide you through the options and help you select your ideal smartphone.</p>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/contact">Talk to an Expert</a></Button></div>
      </CardContent>
    </Card>
  </div>
</section>
    </>
  )
}
