import { type Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Explore Mobile Brands | Apple, Samsung, Google & More",
  description: "Discover the full range of mobile brands available at Phone Emporium. Learn about each brand's unique offerings and find your favorite manufacturer.",
}

export default function BrandsPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Partners</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">The World's Leading Mobile Brands</h2>
        <p className="text-muted-foreground max-w-2xl">We proudly feature devices from the most innovative and trusted names in mobile technology, ensuring quality and performance.</p></div>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/shop">Shop By Brand</a></Button></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Brand Spotlight</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Discover Your Preferred Ecosystem</h2>
    <p className="text-muted-foreground max-w-2xl">Explore the unique philosophies and technological advancements offered by each of our esteemed brand partners.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <Card key={i} className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">Apple</span></div><CardTitle className="text-base">Apple</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>Iconic design, powerful performance, and a seamless ecosystem experience.</CardDescription></CardContent>
      </Card>
      <Card key={i} className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">Smartphone</span></div><CardTitle className="text-base">Samsung</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>Cutting-edge displays, versatile cameras, and innovative foldable technology.</CardDescription></CardContent>
      </Card>
      <Card key={i} className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">Search</span></div><CardTitle className="text-base">Google</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>Pure Android experience, exceptional computational photography, and AI-driven features.</CardDescription></CardContent>
      </Card>
      <Card key={i} className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">Zap</span></div><CardTitle className="text-base">OnePlus</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>Blazing-fast charging, smooth software, and premium performance.</CardDescription></CardContent>
      </Card>
      <Card key={i} className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">BatteryCharging</span></div><CardTitle className="text-base">Xiaomi</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>High-value devices with advanced features and rapid innovation.</CardDescription></CardContent>
      </Card>
      <Card key={i} className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">Radio</span></div><CardTitle className="text-base">Motorola</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>Reliable performance, clean software, and iconic designs.</CardDescription></CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <Badge variant="outline" className="mb-3">Ready to Choose?</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Browse Devices from Your Favorite Brands</h2>
        <p className="text-muted-foreground mt-2">Click below to explore the latest models and accessories from our trusted partners.</p>
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/shop">View All Products</a></Button></div>
    </div>
  </div>
</section>
    </>
  )
}
