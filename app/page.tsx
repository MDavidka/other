import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "other: Latest Smartphones & Accessories",
  description: "Discover the newest phones and essential accessories. Your trusted source for mobile technology with expert advice and fast delivery.",
}

export default function HomePage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <Badge variant="secondary" className="rounded-full">Welcome to other</Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Upgrade Your World, Seamlessly.</h1>
          <p className="max-w-xl text-pretty text-lg text-muted-foreground">We offer a curated selection of devices, expert guidance, and a smooth shopping experience. Your next mobile adventure starts here.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="/shop">Shop All Phones</Link></Button>
        <Button asChild size="lg" variant="outline"><Link href="/shopcomparison">Compare Devices</Link></Button>
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
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">Leading Brands You Love</p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Apple</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Samsung</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Google</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">OnePlus</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Xiaomi</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Motorola</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Sony</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Nokia</div>
        </div>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Why Choose Us?</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Experience Unmatched Mobile Shopping.</h2>
    <p className="text-muted-foreground max-w-2xl">From expert guidance to lightning-fast delivery, we make finding your perfect phone simple and satisfying.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
 <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">Package</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Curated Selection</h3>
          <p className="text-sm text-muted-foreground">Discover hand-picked devices and accessories, ensuring quality and the latest innovations for every budget.</p>
        </CardContent>
      </Card>
 <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">MessageCircle</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Expert Advice</h3>
          <p className="text-sm text-muted-foreground">Our knowledgeable team provides personalized recommendations to help you make the best choice, every time.</p>
        </CardContent>
      </Card>
 <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">Truck</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Fast, Reliable Delivery</h3>
          <p className="text-sm text-muted-foreground">Get your new device delivered swiftly and securely to your doorstep, typically within 2-3 business days.</p>
        </CardContent>
      </Card>
 <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">RefreshCw</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Seamless Trade-Ins</h3>
          <p className="text-sm text-muted-foreground">Upgrade effortlessly with our competitive trade-in program. Get value for your old device towards a new one.</p>
        </CardContent>
      </Card>
 <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">Headset</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
          <p className="text-sm text-muted-foreground">Access friendly and efficient customer service for any questions or assistance you might need post-purchase.</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Fresh Arrivals</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Explore Our Latest Smartphones.</h2>
    <p className="text-muted-foreground max-w-2xl">Be the first to get your hands on the newest devices from top brands, featuring cutting-edge technology and design.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/phone-x-pro-max.webp" alt="Phone X Pro Max" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Phone X Pro Max</h3>
          <p className="text-sm text-muted-foreground mt-1">$1299</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/galaxy-z-flip-6.webp" alt="Galaxy Z Flip 6" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Galaxy Z Flip 6</h3>
          <p className="text-sm text-muted-foreground mt-1">$1099</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/pixel-9-ultra.webp" alt="Pixel 9 Ultra" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Pixel 9 Ultra</h3>
          <p className="text-sm text-muted-foreground mt-1">$899</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/oneplus-12r.webp" alt="OnePlus 12R" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">OnePlus 12R</h3>
          <p className="text-sm text-muted-foreground mt-1">$699</p>
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
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Customer Success</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Hear From Our Happy Customers.</h2>
    <p className="text-muted-foreground max-w-2xl">Read what people are saying about their experience finding the perfect device and service with us.</p></div>

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
 <div className="flex flex-col gap-6"><Card><CardContent className="p-6"><p className="text-sm leading-relaxed"></p><div className="flex items-center gap-2 mt-4"><Avatar className="h-8 w-8"><AvatarFallback>U</AvatarFallback></Avatar><div className="text-sm font-medium"></div></div></CardContent></Card>
 <Card><CardContent className="p-6"><p className="text-sm leading-relaxed"></p><div className="flex items-center gap-2 mt-4"><Avatar className="h-8 w-8"><AvatarFallback>U</AvatarFallback></Avatar><div className="text-sm font-medium"></div></div></CardContent></Card></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Need Answers?</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Common Questions About Your Purchase.</h2>
    <p className="text-muted-foreground max-w-2xl">Find quick answers to frequently asked questions regarding orders, shipping, returns, and device compatibility.</p></div>

    <div className="mt-12 max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-0">
          <AccordionTrigger>What is your return policy for phones?</AccordionTrigger>
          <AccordionContent>We offer a 30-day satisfaction guarantee. If you're not completely happy, you can return your device in its original condition for a full refund or exchange.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>How long does shipping usually take?</AccordionTrigger>
          <AccordionContent>Standard shipping typically takes 2-5 business days within the continental US. Expedited options are available at checkout for faster delivery.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you offer financing options for devices?</AccordionTrigger>
          <AccordionContent>Yes, we partner with leading financing providers to offer flexible payment plans. You can check your eligibility during the checkout process.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I trade in my old smartphone?</AccordionTrigger>
          <AccordionContent>Absolutely! We provide competitive trade-in values for eligible devices. Visit our trade-in page or contact support for an appraisal.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Are your phones unlocked and compatible with all carriers?</AccordionTrigger>
          <AccordionContent>Most of our phones are factory unlocked. Please check the product description for specific carrier compatibility details or contact us for assistance.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <Badge variant="outline" className="mb-3">Ready for More?</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Find Your Perfect Mobile Match Today.</h2>
        <p className="text-muted-foreground mt-2">Browse our extensive catalog of smartphones and accessories. Your next great device is just a click away.</p>
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/shop">Start Shopping Now</a></Button>
    <Button variant="outline" size="lg" asChild><a href="/contact">Get Expert Help</a></Button></div>
    </div>
  </div>
</section>
    </>
  )
}
