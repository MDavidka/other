import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Story | other - Crafting a Better Everyday",
  description: "Learn about 'other's' mission to provide high-quality, ethically sourced products that enhance modern living. Discover our values and commitment to thoughtful curation.",
}

export default function AboutPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-primary/10 to-transparent" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <Badge variant="secondary" className="rounded-full">Our Journey</Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Crafting a Better Everyday Experience</h1>
          <p className="max-w-xl text-pretty text-lg text-muted-foreground">We believe in the power of well-designed objects to elevate daily routines. Our story began with a passion for quality and purpose.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="#values">Our Values</Link></Button>
        
      </div>
          
          
        </div>
        <div className="relative rounded-3xl border bg-card p-6 shadow-2xl shadow-primary/10">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/30 to-transparent blur-2xl" aria-hidden="true" />
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-card flex items-end p-6">
              <div className="space-y-2">
                <span className="inline-flex items-center rounded-full bg-background/80 backdrop-blur px-3 py-1 text-xs font-medium text-foreground border">Our Journey</span>
                <p className="text-sm text-muted-foreground">We believe in the power of well-designed objects to elevate daily routines. Our story began with a passion for quality and purpose.</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-xl border bg-background/60 p-3">
                <p className="text-xl font-semibold tracking-tight">10x</p>
                <p className="text-xs text-muted-foreground">Faster</p>
              </div>
              <div className="rounded-xl border bg-background/60 p-3">
                <p className="text-xl font-semibold tracking-tight">99.9%</p>
                <p className="text-xs text-muted-foreground">Uptime</p>
              </div>
              <div className="rounded-xl border bg-background/60 p-3">
                <p className="text-xl font-semibold tracking-tight">4.9/5</p>
                <p className="text-xs text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Commitment</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">How We Bring You Exceptional Products</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">From meticulous sourcing to careful delivery, every step is designed to ensure quality, sustainability, and your satisfaction.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-card p-6">
            <p className="text-5xl font-semibold tracking-tight text-primary/60">01</p>
            <h3 className="mt-4 text-lg font-semibold">Thoughtful Curation</h3>
            <p className="mt-2 text-sm text-muted-foreground">We rigorously research and select products based on design, material quality, and environmental impact.</p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <p className="text-5xl font-semibold tracking-tight text-primary/60">02</p>
            <h3 className="mt-4 text-lg font-semibold">Ethical Partnerships</h3>
            <p className="mt-2 text-sm text-muted-foreground">Collaborating directly with artisans and responsible manufacturers ensures fair practices and exceptional craftsmanship.</p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <p className="text-5xl font-semibold tracking-tight text-primary/60">03</p>
            <h3 className="mt-4 text-lg font-semibold">Quality Assurance</h3>
            <p className="mt-2 text-sm text-muted-foreground">Every item undergoes thorough inspection to meet our high standards before it ever reaches your hands.</p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <p className="text-5xl font-semibold tracking-tight text-primary/60">04</p>
            <h3 className="mt-4 text-lg font-semibold">Sustainable Packaging</h3>
            <p className="mt-2 text-sm text-muted-foreground">We prioritize eco-friendly materials and minimal waste in our packaging to reduce our ecological footprint.</p>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Meet the Minds</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">The Dedicated Team Behind 'other'</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">We are a small, passionate group united by a shared vision: to offer products that inspire and endure.</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <Avatar className="mx-auto h-20 w-20"><AvatarFallback className="text-base">ER</AvatarFallback></Avatar>
            <p className="mt-4 font-semibold">Elena Rodriguez</p>
            <p className="text-sm text-primary"></p>
            <p className="mt-1 text-sm text-muted-foreground">Founder &amp; Head Curator</p>
          </div>
          <div className="text-center">
            <Avatar className="mx-auto h-20 w-20"><AvatarFallback className="text-base">MC</AvatarFallback></Avatar>
            <p className="mt-4 font-semibold">Marcus Chen</p>
            <p className="text-sm text-primary"></p>
            <p className="mt-1 text-sm text-muted-foreground">Operations &amp; Logistics</p>
          </div>
          <div className="text-center">
            <Avatar className="mx-auto h-20 w-20"><AvatarFallback className="text-base">SP</AvatarFallback></Avatar>
            <p className="mt-4 font-semibold">Sophia Patel</p>
            <p className="text-sm text-primary"></p>
            <p className="mt-1 text-sm text-muted-foreground">Customer Experience Lead</p>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-semibold tracking-tight sm:text-4xl">Meaningful Milestones We've Achieved</h2>
        <dl className="mt-10 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
          <div className="px-2 text-center sm:px-6">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">12,500+</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Happy Customers</dt>
          </div>
          <div className="px-2 text-center sm:px-6">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">99.8%</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Satisfaction Rate</dt>
          </div>
          <div className="px-2 text-center sm:px-6">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">350+</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Unique Products</dt>
          </div>
        </dl>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Connect With Our Growing Community</h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">Follow us on social media, sign up for our newsletter, and be part of our journey to a more thoughtful lifestyle.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="https://instagram.com/other">Follow Us</Link></Button>
          
        </div>
      </div>
    </section>
    </>
  )
}
