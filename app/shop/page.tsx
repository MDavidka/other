import Link from "next/link"
import { Briefcase, Sparkles, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop | Aura Atelier - Handpicked Home & Lifestyle Goods",
  description: "Browse Aura Atelier's curated selection of home decor, kitchenware, textiles, and personal accessories. Find unique, high-quality items for a refined lifestyle.",
}

export default function ShopPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="/shopproducts">View All Products</Link></Button>
          
        </div>
        
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Shop the collection</h2>
            
          </div>
          
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Hand-Thrown Ceramic Mug</p>
                <p className="font-semibold">$32.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Elevate your morning ritual with this perfectly balanced, hand-thrown ceramic mug.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Linen Waffle Towel Set</p>
                <p className="font-semibold">$78.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Experience unparalleled softness and absorbency with this luxurious linen waffle towel set, transforming your bath into a spa-like retreat.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Minimalist Desk Organizer</p>
                <p className="font-semibold">$55.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Bring serene order to your workspace with this minimalist desk organizer, crafted for elegant simplicity and focused productivity.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Artisanal Scented Candle</p>
                <p className="font-semibold">$45.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Infuse your space with tranquil ambiance and captivating, natural fragrance from this artisanal scented candle.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Walnut Cutting Board</p>
                <p className="font-semibold">$68.00</p>
              </div>
              <p className="text-sm text-muted-foreground">A timeless kitchen essential, meticulously crafted from rich walnut wood for enduring beauty and exceptional durability.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Cashmere Throw Blanket</p>
                <p className="font-semibold">$220.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Wrap yourself in the unparalleled softness of pure cashmere, perfect for cozy evenings and adding a touch of luxury to your living space.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams who care about the details</h2>
          
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Home Decor</h3>
            <p className="text-sm text-muted-foreground"></p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Utensils className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Kitchen &amp; Dining</h3>
            <p className="text-sm text-muted-foreground"></p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Textiles</h3>
            <p className="text-sm text-muted-foreground"></p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Briefcase className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Workspace</h3>
            <p className="text-sm text-muted-foreground"></p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Personal Care</h3>
            <p className="text-sm text-muted-foreground"></p>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">Start now and feel the difference within minutes.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="/contact">Contact Us</Link></Button>
          
        </div>
      </div>
    </section>
    </>
  )
}
