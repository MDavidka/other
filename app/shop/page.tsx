import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop | other - Curated Home & Lifestyle Goods",
  description: "Browse our complete collection of meticulously selected home goods, fashion accessories, and personal care items. Find quality products for every aspect of your life.",
}

export default function ShopPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        <Badge variant="secondary" className="mx-auto mb-5 rounded-full">Our Full Collection</Badge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Explore Our Diverse Product Range</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">Dive into our extensive catalog, featuring unique items for every room and occasion. Discover something special today.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#categories">View Categories</Link></Button>
          
        </div>
        
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Find Exactly What You Need</h2>
            <p className="mt-2 max-w-xl text-pretty text-muted-foreground">Filter by category or browse our entire selection of high-quality, thoughtfully sourced products for your home and lifestyle.</p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:inline-flex"><Link href="/shopall">Load More Products</Link></Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Hand-Woven Basket</p>
                <p className="font-semibold">$75.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Perfect for storage or decor.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Organic Cotton Tee</p>
                <p className="font-semibold">$38.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Soft and breathable for everyday wear.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Walnut Cutting Board</p>
                <p className="font-semibold">$55.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Durable and elegant kitchen essential.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Natural Soap Bar Set</p>
                <p className="font-semibold">$24.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Nourishing and aromatic, 3-pack.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Brass Desk Lamp</p>
                <p className="font-semibold">$120.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Adjustable and stylish task lighting.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-square w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">Wool Knit Throw</p>
                <p className="font-semibold">$99.00</p>
              </div>
              <p className="text-sm text-muted-foreground">Cozy warmth for chilly evenings.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Shopping Questions</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Common Questions About Your Order</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Find quick answers to frequently asked questions regarding shipping, returns, payment, and product details.</p>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-left text-base">What is your return policy?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">We offer a 30-day return window for unused items in their original packaging. Please see our full policy for details.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-base">How long does shipping take?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Standard shipping typically takes 3-7 business days. Expedited options are available at checkout for faster delivery.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-base">Do you offer international shipping?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Yes, we ship to over 50 countries worldwide. Shipping costs and times vary by destination and are calculated at checkout.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-base">What payment methods do you accept?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and Apple Pay for your convenience.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-primary to-primary/70 p-10 text-primary-foreground sm:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Our Team is Ready to Help</h2>
            <p className="text-pretty text-base text-primary-foreground/90">Can't find what you're looking for or have a specific question? Reach out to our friendly support team.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary"><Link href="/contact">Contact Support</Link></Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
