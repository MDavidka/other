import { type Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Shop Phone Accessories | Cases, Chargers & More - Mobile Hub",
  description: "Enhance your mobile experience with our range of high-quality phone accessories, including cases, chargers, headphones, and power banks.",
}

export default function AccessoriesPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Complete Your Setup</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Enhance Your Device Experience</h2>
        <p className="text-muted-foreground max-w-2xl">Discover essential accessories that protect, power, and personalize your smartphone or tablet. Quality accessories for every need.</p></div>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="#accessories">Shop All Accessories</a></Button></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Must-Have Gear</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Essential Accessories for Your Tech</h2>
    <p className="text-muted-foreground max-w-2xl">From protective cases to high-speed chargers, find everything you need to get the most out of your devices.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/acc-case.webp" alt="Ultra-Slim Protective Case" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Ultra-Slim Protective Case</h3>
          <p className="text-sm text-muted-foreground mt-1">$29.99</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/acc-charger.webp" alt="65W Fast Wall Charger" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">65W Fast Wall Charger</h3>
          <p className="text-sm text-muted-foreground mt-1">$39.99</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/acc-earbuds.webp" alt="Wireless Earbuds Pro" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Wireless Earbuds Pro</h3>
          <p className="text-sm text-muted-foreground mt-1">$129.00</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/acc-powerbank.webp" alt="10,000mAh Power Bank" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">10,000mAh Power Bank</h3>
          <p className="text-sm text-muted-foreground mt-1">$49.99</p>
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
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Style &amp; Function</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Accessorize Your Life</h2>
    <p className="text-muted-foreground max-w-2xl">See how our accessories integrate seamlessly into your daily routine, combining aesthetics with practicality.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <div key={i} className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/gallery-workstation.webp" alt="Workstation Setup" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
      <div key={i} className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/gallery-travel.webp" alt="Travel Essentials" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
      <div key={i} className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/gallery-fitness.webp" alt="Fitness Companion" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
      <div key={i} className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/gallery-creative.webp" alt="Creative Hub" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Find Your Perfect Add-ons</h2>
        <p className="text-muted-foreground mt-2">Upgrade your mobile experience with accessories designed for protection, performance, and style.</p>
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/accessories">Shop Accessories Now</a></Button></div>
    </div>
  </div>
</section>
    </>
  )
}
