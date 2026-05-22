import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Connect Devices: Your Premier Online Phone Store | Latest Smartphones & Accessories",
  description: "Explore the newest smartphones, tablets, and mobile accessories. Connect Devices offers fast shipping, expert support, and a seamless shopping experience.",
}

export default function HomePage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <Badge variant="secondary" className="rounded-full">Unleash Innovation</Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Discover Your Next Favorite Device</h1>
          
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="/shop">Shop All Devices</Link></Button>
        <Button asChild size="lg" variant="outline"><Link href="/shopcompare">Compare Models</Link></Button>
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
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">Leading Brands You Know and Love</p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Apple</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Samsung</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Google</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">OnePlus</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Xiaomi</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Motorola</div>
        </div>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Why Choose Us?</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Experience Unmatched Service and Selection</h2>
    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Connect Devices offers more than just products; we deliver a superior shopping journey from start to finish.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardHeader><div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-lg">Package</span></div><CardTitle>Fast, Reliable Shipping</CardTitle><CardDescription>Receive your new device within 2-3 business days, fully insured and tracked every step.</CardDescription></CardHeader>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardHeader><div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-lg">ShieldCheck</span></div><CardTitle>Authentic Products Guaranteed</CardTitle><CardDescription>Every item is 100% genuine, new, and comes with a full manufacturer's warranty.</CardDescription></CardHeader>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardHeader><div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-lg">Headset</span></div><CardTitle>Dedicated Customer Support</CardTitle><CardDescription>Our expert team is available 24/7 to assist with any questions or concerns.</CardDescription></CardHeader>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardHeader><div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-lg">RefreshCcw</span></div><CardTitle>Hassle-Free Returns</CardTitle><CardDescription>Not satisfied? Enjoy a 30-day easy return policy on all eligible purchases.</CardDescription></CardHeader>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Featured Selection</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Top Picks: Devices You'll Love</h2>
    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Handpicked for performance, innovation, and value. Find your next upgrade here.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/s24-ultra.webp" alt="Galaxy S24 Ultra" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Galaxy S24 Ultra</h3>
          <p className="text-sm text-muted-foreground mt-1">$1299</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/iphone-15-pro-max.webp" alt="iPhone 15 Pro Max" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">iPhone 15 Pro Max</h3>
          <p className="text-sm text-muted-foreground mt-1">$1199</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/pixel-8-pro.webp" alt="Google Pixel 8 Pro" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Google Pixel 8 Pro</h3>
          <p className="text-sm text-muted-foreground mt-1">$999</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/apple-watch-ultra-2.webp" alt="Apple Watch Ultra 2" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Apple Watch Ultra 2</h3>
          <p className="text-sm text-muted-foreground mt-1">$799</p>
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
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Happy Customers</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What Our Valued Shoppers Say</h2>
    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Real experiences from people who found their perfect device with Connect Devices.</p></div>

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
      <div className="flex flex-col gap-6"><Card key={i}><CardContent className="p-6"><p className="text-sm leading-relaxed"></p><div className="flex items-center gap-2 mt-4"><Avatar className="h-8 w-8"><AvatarFallback>U</AvatarFallback></Avatar><div className="text-sm font-medium"></div></div></CardContent></Card>
      <Card key={i}><CardContent className="p-6"><p className="text-sm leading-relaxed"></p><div className="flex items-center gap-2 mt-4"><Avatar className="h-8 w-8"><AvatarFallback>U</AvatarFallback></Avatar><div className="text-sm font-medium"></div></div></CardContent></Card></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Got Questions?</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Common Inquiries Answered</h2>
    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Find quick answers to the most frequently asked questions about shopping with us.</p></div>

    <div className="mt-12 max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-0">
          <AccordionTrigger>What is your return policy for devices?</AccordionTrigger>
          <AccordionContent>We offer a 30-day hassle-free return policy on most devices, provided they are in original condition with all accessories. Some exclusions apply; please see our full policy.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>How long does shipping usually take?</AccordionTrigger>
          <AccordionContent>Standard shipping typically takes 2-3 business days within the continental US. Expedited options are available at checkout for faster delivery.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Are your products new and authentic?</AccordionTrigger>
          <AccordionContent>Yes, all products sold on Connect Devices are brand new, factory sealed, and 100% authentic, sourced directly from authorized distributors.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do you offer financing options for purchases?</AccordionTrigger>
          <AccordionContent>We partner with leading financial services to offer flexible payment plans. Look for financing options during the checkout process.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <Badge variant="outline" className="mb-3">Ready for an Upgrade?</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Your Next Great Device Awaits</h2>
        
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/shop">Start Shopping Now</a></Button></div>
    </div>
  </div>
</section>
    </>
  )
}
