import Link from "next/link"
import { ArrowUpRight, Brush, Heart, Leaf, Palette, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Aura Atelier | Thoughtfully Curated Home & Lifestyle Goods",
  description: "Discover Aura Atelier's exquisite selection of handcrafted and timeless essentials designed to elevate your home and daily rituals. Quality, craftsmanship, and conscious living.",
}

export default function HomePage() {
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
        <Button asChild size="lg"><Link href="/shop">Shop New Arrivals</Link></Button>
        <Button asChild size="lg" variant="outline"><Link href="/about">Our Philosophy</Link></Button>
      </div>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams who care about the details</h2>
          
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-4 lg:auto-rows-fr">
          <Card className="lg:col-span-2 lg:row-span-2 relative overflow-hidden border-border/60">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/12 via-accent/10 to-transparent" aria-hidden="true" />
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Brush className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Artisan Craftsmanship</CardTitle>
              <CardDescription className="text-base">Every piece is meticulously chosen for its superior quality and the skilled artistry behind its creation, ensuring lasting beauty and enduring appeal.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-1 relative overflow-hidden border-border/60">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/12 via-accent/10 to-transparent" aria-hidden="true" />
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Palette className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Enduring Design</CardTitle>
              <CardDescription className="text-base">Discover pieces that gracefully transcend fleeting trends, offering elegant simplicity and functional beauty that enriches your space for years.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-1 relative overflow-hidden border-border/60">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/12 via-accent/10 to-transparent" aria-hidden="true" />
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Leaf className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Conscious Sourcing</CardTitle>
              <CardDescription className="text-base">Our commitment to ethical practices means partnering exclusively with artisans and brands who share our vision for a more sustainable and equitable future.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-2 relative overflow-hidden border-border/60">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/12 via-accent/10 to-transparent" aria-hidden="true" />
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Heart className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Elevated Everyday Rituals</CardTitle>
              <CardDescription className="text-base">Thoughtfully designed products to transform your daily routines into moments of serenity and cultivate an inspiring environment within your home.</CardDescription>
            </CardHeader>
            
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Selected work</h2>
          
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="group relative aspect-square overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/20 via-accent/20 to-background p-6 lg:col-span-2 lg:aspect-[16/10]">
            <div className="flex h-full flex-col justify-end gap-1">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">Featured</span>
              <p className="text-2xl font-semibold tracking-tight">Handcrafted Ceramic Collection</p>
              <p className="max-w-md text-sm text-muted-foreground">Artfully hand-thrown pottery, bringing understated elegance to your daily rituals.</p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="aspect-[4/3] rounded-2xl border bg-gradient-to-br from-muted to-background p-4 text-sm">
              <span className="text-xs font-medium uppercase tracking-wider text-primary"></span>
              <p className="mt-2 font-semibold">Luxurious Textile Weaves</p>
            </div>
            <div className="aspect-[4/3] rounded-2xl border bg-gradient-to-br from-muted to-background p-4 text-sm">
              <span className="text-xs font-medium uppercase tracking-wider text-primary"></span>
              <p className="mt-2 font-semibold">Refined Workspace Essentials</p>
            </div>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        
        <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-semibold tracking-tight sm:text-4xl">Loved by people who care about quality</h2>
        <figure className="mt-12 rounded-3xl border bg-card p-8 sm:p-12">
          <Quote className="h-10 w-10 text-primary/40" />
          <blockquote className="mt-6 text-pretty text-2xl font-medium leading-relaxed sm:text-3xl">"Aura Atelier has transformed my home. Every piece feels special and thoughtfully chosen. The quality is simply unmatched."</blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Avatar><AvatarFallback>EV</AvatarFallback></Avatar>
            <div>
              <p className="font-semibold">Eleanor V.</p>
              <p className="text-sm text-muted-foreground">Interior Designer</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">From the blog</h2>
        
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Card className="overflow-hidden">
            <div className="aspect-[16/10] w-full bg-gradient-to-br from-primary/20 via-accent/20 to-background"></div>
            <CardContent className="space-y-2 p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-primary">Lifestyle · </p>
              <p className="text-xl font-semibold">The Art of Slow Living: Curating Your Personal Sanctuary</p>
              <p className="text-sm text-muted-foreground">Explore how intentional design choices and mindful consumption can cultivate a profound sense of peace and spark creativity within your personal sanctuary.</p>
            </CardContent>
          </Card>
          <ul className="divide-y rounded-2xl border bg-card">
            <li className="flex items-start justify-between gap-4 p-6">
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">Craftsmanship · </p>
                <p className="font-semibold">Behind the Loom: A Visit to Our Artisan Textile Workshop</p>
                <p className="text-sm text-muted-foreground">An exclusive, intimate glimpse into the traditional techniques and unwavering passion that define our exquisite woven goods.</p>
              </div>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
            </li>
            <li className="flex items-start justify-between gap-4 p-6">
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">Design · </p>
                <p className="font-semibold">Minimalist Design Principles for a Clutter-Free Home</p>
                <p className="text-sm text-muted-foreground">Unlock practical, elegant principles to embrace simplicity and cultivate truly serene, clutter-free living spaces.</p>
              </div>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
            </li>
          </ul>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-primary to-primary/70 p-10 text-primary-foreground sm:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
            <p className="text-pretty text-base text-primary-foreground/90">Start now and feel the difference within minutes.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary"><Link href="/shop">Shop All Collections</Link></Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
