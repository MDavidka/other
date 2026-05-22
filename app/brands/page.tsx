import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "other: Top Phone Brands",
  description: "Explore the world's leading smartphone brands available at other. Discover innovation from Apple, Samsung, Google, and more.",
}

export default function BrandsPage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-5">
            <Badge variant="secondary" className="rounded-full">Innovation Leaders</Badge>
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Discover Mobile Technology's Best.</h1>
          </div>
          <div className="lg:col-span-5 space-y-5">
            <p className="text-pretty text-lg text-muted-foreground">Explore their unique philosophies, groundbreaking technologies, and iconic product lines. Find your favorite brand here.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="#">Get started</Link></Button>
        
      </div>
          </div>
        </div>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Valued Partners</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">The World's Most Popular Brands.</h2>
    <p className="text-muted-foreground max-w-2xl">We've curated a selection of brands known for their quality, innovation, and customer satisfaction.</p></div>

    <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
 <div className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Apple</div>
 <div className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Samsung</div>
 <div className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Google</div>
 <div className="text-muted-foreground/60 font-semibold text-sm sm:text-base">OnePlus</div>
 <div className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Xiaomi</div>
 <div className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Motorola</div>
 <div className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Sony</div>
 <div className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Nokia</div>
 <div className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Realme</div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Brand Spotlights</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Showcasing Signature Devices.</h2>
    <p className="text-muted-foreground max-w-2xl">A visual journey through the standout products and design philosophies of our featured mobile brands.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
 <div className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/brand-apple-iphone.webp" alt="iPhone 15 Pro Max" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
 <div className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/brand-samsung-s24.webp" alt="Galaxy S24 Ultra" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
 <div className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/brand-google-fold.webp" alt="Google Pixel Fold" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
 <div className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/brand-oneplus-open.webp" alt="OnePlus Open" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
 <div className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/brand-xiaomi-13.webp" alt="Xiaomi 13 Ultra" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
 <div className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/brand-motorola-edge.webp" alt="Motorola Edge+" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <Badge variant="outline" className="mb-3">Ready to Explore?</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Find Your Favorite Brand's Latest.</h2>
        <p className="text-muted-foreground mt-2">Click to dive directly into the full product lineup from your preferred mobile manufacturer.</p>
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/shop">Shop All Brands</a></Button>
    <Button variant="outline" size="lg" asChild><a href="/contact">Contact Sales</a></Button></div>
    </div>
  </div>
</section>
    </>
  )
}
