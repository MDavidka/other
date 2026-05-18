import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Aura Atelier - Craftsmanship, Design & Conscious Living",
  description: "Learn about Aura Atelier's commitment to quality, timeless design, and sustainable practices. Discover our passion for curating beautiful and functional essentials.",
}

export default function AboutPage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-5">
            
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Ship something people remember.</h1>
          </div>
          <div className="lg:col-span-5 space-y-5">
            
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="#">Get started</Link></Button>
        
      </div>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-card p-6">
            <p className="text-5xl font-semibold tracking-tight text-primary/60">01</p>
            <h3 className="mt-4 text-lg font-semibold">Curated with Intention</h3>
            <p className="mt-2 text-sm text-muted-foreground">Every product within our meticulously assembled collection is handpicked with purpose, chosen not only for its inherent aesthetic appeal but also for its unique story, the skilled hands that crafted it, and its profound potential to enrich your daily life.</p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <p className="text-5xl font-semibold tracking-tight text-primary/60">02</p>
            <h3 className="mt-4 text-lg font-semibold">Championing Craftsmanship</h3>
            <p className="mt-2 text-sm text-muted-foreground">At Aura Atelier, we deeply celebrate the profound skill and unwavering dedication of master artisans. Our exquisite products reflect meticulous attention to every detail and an unyielding commitment to enduring quality, far surpassing fleeting trends.</p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <p className="text-5xl font-semibold tracking-tight text-primary/60">03</p>
            <h3 className="mt-4 text-lg font-semibold">Sustainable &amp; Ethical</h3>
            <p className="mt-2 text-sm text-muted-foreground">Our unwavering commitment to sustainability and ethics guides every partnership. We collaborate exclusively with suppliers who champion fair labor practices and prioritize environmentally conscious materials, ensuring a positive impact from creation to your cherished home.</p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <p className="text-5xl font-semibold tracking-tight text-primary/60">04</p>
            <h3 className="mt-4 text-lg font-semibold">Inspiring Mindful Living</h3>
            <p className="mt-2 text-sm text-muted-foreground">Aura Atelier exists to inspire a more thoughtful, intentional way of living. We believe every object should serve a meaningful purpose, bringing a profound sense of calm, beauty, and utility to your personal environment.</p>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          
          
          
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Ethically Sourced Materials</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">100%</dd>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Artisan Partnerships</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">25+</dd>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Happy Homes Transformed</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">5K</dd>
          </div>
        </dl>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        <div className="space-y-3">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
          <p className="text-pretty text-muted-foreground">Start now and feel the difference within minutes.</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Button asChild size="lg"><Link href="/shop">Shop Now</Link></Button>
          
        </div>
      </div>
    </section>
    </>
  )
}
