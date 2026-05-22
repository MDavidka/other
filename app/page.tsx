import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Mobile Hub | Your Premier Online Phone Store",
  description: "Discover the latest smartphones, tablets, and accessories at Mobile Hub. Enjoy expert advice, competitive prices, and fast, reliable shipping.",
}

export default function HomePage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <Badge variant="secondary" className="rounded-full">Innovation in Your Hand</Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Discover Your Next Favorite Device</h1>
          <p className="max-w-xl text-pretty text-lg text-muted-foreground">Explore cutting-edge smartphones and essential accessories designed to elevate your digital life. Find the perfect tech with confidence.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="/phones">Shop Latest Phones</Link></Button>
        <Button asChild size="lg" variant="outline"><Link href="/accessories">Explore Accessories</Link></Button>
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

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Trusted Brands</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Leading Manufacturers We Carry</h2>
    <p className="text-muted-foreground max-w-2xl">Browse the latest devices from the world's most innovative and reliable technology companies.</p></div>

    <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
      <div key={i} className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Apple</div>
      <div key={i} className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Samsung</div>
      <div key={i} className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Google</div>
      <div key={i} className="text-muted-foreground/60 font-semibold text-sm sm:text-base">OnePlus</div>
      <div key={i} className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Xiaomi</div>
      <div key={i} className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Motorola</div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Featured Devices</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Latest Flagship Phones Arrived</h2>
    <p className="text-muted-foreground max-w-2xl">Experience peak performance and stunning design with our hand-picked selection of new arrivals and top sellers.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/phone-quantum-x.webp" alt="Quantum X Pro" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Quantum X Pro</h3>
          <p className="text-sm text-muted-foreground mt-1">$1199</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/phone-aura-fold.webp" alt="Aura Fold 5G" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Aura Fold 5G</h3>
          <p className="text-sm text-muted-foreground mt-1">$1799</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/phone-pixel-vision.webp" alt="Pixel Vision 8" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Pixel Vision 8</h3>
          <p className="text-sm text-muted-foreground mt-1">$799</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/tablet-zenith.webp" alt="Zenith Tablet Pro" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Zenith Tablet Pro</h3>
          <p className="text-sm text-muted-foreground mt-1">$899</p>
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
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Why Shop With Us?</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Experience Unmatched Service and Value</h2>
    <p className="text-muted-foreground max-w-2xl">Mobile Hub delivers a superior shopping experience with dedicated support and competitive advantages.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardHeader><CardTitle>Expert Guidance Always</CardTitle><CardDescription>Our team provides personalized recommendations, ensuring you choose the perfect device for your needs.</CardDescription></CardHeader>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardHeader><CardTitle>Fast, Secure Shipping</CardTitle><CardDescription>Receive your new tech quickly and safely, with tracked delivery straight to your doorstep.</CardDescription></CardHeader>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardHeader><CardTitle>Competitive Pricing</CardTitle><CardDescription>Get the best deals on the latest models without compromising on quality or service.</CardDescription></CardHeader>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardHeader><CardTitle>Dedicated Support</CardTitle><CardDescription>Access responsive customer service for any questions or assistance you might need post-purchase.</CardDescription></CardHeader>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Customer Success</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What Our Happy Customers Say</h2>
    <p className="text-muted-foreground max-w-2xl">Real feedback from users who found their ideal devices and accessories at Mobile Hub.</p></div>

    <div className="mt-12 grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardContent className="p-8 lg:p-10">
          <p className="text-lg sm:text-xl leading-relaxed"></p>
          <div className="flex items-center gap-3 mt-6">
            <Avatar className="h-12 w-12"><AvatarFallback>U</AvatarFallback></Avatar>
            <div>
              <div className="font-semibold"></div>
              
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-6"><Card key={i}><CardContent className="p-6"><p className="text-sm leading-relaxed"></p><div className="flex items-center gap-2 mt-4"><Avatar className="h-8 w-8"><AvatarFallback>U</AvatarFallback></Avatar><div className="text-sm font-medium"></div></div></CardContent></Card></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Got Questions?</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Common Inquiries Answered Quickly</h2>
    <p className="text-muted-foreground max-w-2xl">Find quick answers to the most frequently asked questions about our products, orders, and services.</p></div>

    <div className="mt-12 max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-0">
          <AccordionTrigger>What is your return policy for phones?</AccordionTrigger>
          <AccordionContent>We offer a 30-day satisfaction guarantee. Devices must be returned in original condition with all packaging. A 15% restocking fee may apply.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer financing options for purchases?</AccordionTrigger>
          <AccordionContent>Yes, we partner with leading financing providers to offer flexible payment plans. You can check eligibility during checkout.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How long does shipping usually take?</AccordionTrigger>
          <AccordionContent>Standard shipping typically takes 3-5 business days. Expedited options are available for 1-2 day delivery at an additional cost.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I trade in my old device?</AccordionTrigger>
          <AccordionContent>Currently, we do not offer trade-in services directly. However, we can recommend trusted partners who provide competitive trade-in values.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready for an Upgrade?</h2>
        <p className="text-muted-foreground mt-2">Browse our complete collection of smartphones and accessories today. Your perfect device awaits.</p>
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/phones">Shop All Products</a></Button></div>
    </div>
  </div>
</section>
    </>
  )
}
