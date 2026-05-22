import Link from "next/link"
import { Leaf, Package, Quote, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "other | Curated Essentials for a Modern Lifestyle",
  description: "Discover a thoughtfully selected range of high-quality products designed to enhance your daily life. Shop with confidence and elevate your everyday.",
}

export default function HomePage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <Badge variant="secondary" className="rounded-full">Elevate Your Everyday</Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Discover Thoughtfully Curated Collections</h1>
          <p className="max-w-xl text-pretty text-lg text-muted-foreground">Explore our handpicked selection of premium goods, designed to bring joy and functionality to your home and personal style.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="/shop">Shop New Arrivals</Link></Button>
        <Button asChild size="lg" variant="outline"><Link href="/shop">Explore Categories</Link></Button>
      </div>
          
        </div>
        <div className="relative aspect-square w-full overflow-hidden rounded-3xl border bg-gradient-to-br from-accent/40 via-primary/10 to-background p-6">
          <div className="flex h-full flex-col justify-end gap-2 rounded-2xl bg-background/40 p-6 backdrop-blur">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">Featured</span>
            <p className="text-2xl font-semibold tracking-tight">Best seller</p>
            <p className="text-sm text-muted-foreground">Customer favorite this season.</p>
            <p className="mt-2 text-3xl font-semibold"></p>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">Featured in Leading Lifestyle Publications</p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Vogue</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Architectural Digest</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">GQ</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Elle Decor</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Monocle</div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Shop Our Most Loved Products</h2>
            <p className="mt-2 max-w-xl text-pretty text-muted-foreground">Explore popular items that customers adore for their exceptional quality, timeless design, and everyday utility.</p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:inline-flex"><Link href="/shop">View All Products</Link></Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Ceramic Artisan Mug</p>
                <p className="font-semibold">$28.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Hand-thrown stoneware for your morning ritual.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Linen Blend Apron</p>
                <p className="font-semibold">$45.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Stylish and durable for the modern kitchen.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Minimalist Leather Wallet</p>
                <p className="font-semibold">$65.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Slim profile, premium full-grain leather.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Soy Wax Candle - Forest</p>
                <p className="font-semibold">$32.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Earthy notes of pine and cedarwood.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <Badge variant="secondary" className="rounded-full">Why Choose Us?</Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Experience the Difference in Every Detail</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">We are dedicated to providing an unparalleled shopping journey, from product selection to post-purchase support.</p>
        </div>
        <div className="mt-16 space-y-16 sm:space-y-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className=" space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Package className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Curated Quality Selection</h3>
              <p className="text-pretty text-muted-foreground">Every product is meticulously handpicked for its superior craftsmanship, durability, and aesthetic appeal, ensuring lasting satisfaction.</p>
              
            </div>
            <div className=" aspect-[4/3] rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background" aria-hidden="true"></div>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="lg:order-2 space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Leaf className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Sustainable &amp; Ethical Sourcing</h3>
              <p className="text-pretty text-muted-foreground">We partner with artisans and brands committed to responsible production, fair labor practices, and environmental stewardship.</p>
              
            </div>
            <div className="lg:order-1 aspect-[4/3] rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background" aria-hidden="true"></div>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className=" space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><ShoppingCart className="h-5 w-5" /></div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">Seamless Shopping Experience</h3>
              <p className="text-pretty text-muted-foreground">Enjoy effortless browsing, secure checkout, and reliable delivery, making your journey from discovery to doorstep a delight.</p>
              
            </div>
            <div className=" aspect-[4/3] rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-sm font-semibold uppercase tracking-wider text-primary">Hear From Our Customers</p>
        <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-semibold tracking-tight sm:text-4xl">Real Stories, Exceptional Experiences</h2>
        <figure className="mt-12 rounded-3xl border bg-card p-8 sm:p-12">
          <Quote className="h-10 w-10 text-primary/40" />
          <blockquote className="mt-6 text-pretty text-2xl font-medium leading-relaxed sm:text-3xl">"I'm absolutely thrilled with my new ceramic mugs. The quality is outstanding, and they arrived beautifully packaged in just three days! It's clear 'other' cares about every detail."</blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Avatar><AvatarFallback>SL</AvatarFallback></Avatar>
            <div>
              <p className="font-semibold">Sarah L.</p>
              <p className="text-sm text-muted-foreground">Home Decor Enthusiast</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Find Your Next Favorite Item Today</h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">Browse our expansive catalog and bring home pieces that resonate with your personal style and values.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="/shop">Start Shopping Now</Link></Button>
          
        </div>
      </div>
    </section>
    </>
  )
}
