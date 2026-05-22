import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "Phone Emporium | Discover Latest Smartphones & Accessories",
  description: "Explore the newest smartphones, smartwatches, and accessories. Find expert advice, competitive prices, and seamless shopping for your ideal mobile experience.",
}

export default function HomePage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <Badge variant="secondary" className="rounded-full">Unleash Your Potential</Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Discover Mobile Innovation, Tailored for You</h1>
          <p className="max-w-xl text-pretty text-lg text-muted-foreground">Browse our curated collection of cutting-edge smartphones and essential accessories. Upgrade your digital life with confidence and expert support.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="/shop">Shop All Phones</Link></Button>
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
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">Leading Brands, Uncompromised Quality</p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Apple</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Samsung</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Google</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">OnePlus</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Xiaomi</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Motorola</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Nokia</div>
        </div>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Curated Selection</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Featured Devices &amp; Essential Gear</h2>
    <p className="text-muted-foreground max-w-2xl">Explore our top-selling smartphones and must-have accessories, hand-picked for performance, style, and value.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
          <img src="/images/galaxy-s24-ultra.webp" alt="Samsung Galaxy S24 Ultra" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Samsung Galaxy S24 Ultra</h3>
          <p className="text-sm text-muted-foreground mt-1">$1299</p>
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
          <img src="/images/airpods-pro.webp" alt="AirPods Pro (2nd Gen)" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">AirPods Pro (2nd Gen)</h3>
          <p className="text-sm text-muted-foreground mt-1">$249</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/galaxy-watch-6.webp" alt="Samsung Galaxy Watch 6 Classic" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Samsung Galaxy Watch 6 Classic</h3>
          <p className="text-sm text-muted-foreground mt-1">$399</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/anker-powercore.webp" alt="Anker PowerCore 20000" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Anker PowerCore 20000</h3>
          <p className="text-sm text-muted-foreground mt-1">$59</p>
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
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Commitment</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Why Choose Phone Emporium for Your Next Upgrade?</h2>
    <p className="text-muted-foreground max-w-2xl">Experience unparalleled service, expert guidance, and a seamless shopping journey for all your mobile needs.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">Users</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Expert Guidance, Every Step</h3>
          <p className="text-sm text-muted-foreground">Our knowledgeable team provides personalized recommendations to match you with the perfect device, saving you hours of research.</p>
        </CardContent>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">ShieldCheck</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Secure Shopping &amp; Data Privacy</h3>
          <p className="text-sm text-muted-foreground">Shop with complete peace of mind. Our platform uses advanced encryption to protect your personal and payment information.</p>
        </CardContent>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">Truck</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Fast, Reliable Shipping</h3>
          <p className="text-sm text-muted-foreground">Get your new device quickly and safely with our expedited shipping options. Most orders arrive within 2-3 business days.</p>
        </CardContent>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">Tag</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Competitive Pricing &amp; Deals</h3>
          <p className="text-sm text-muted-foreground">Access the best prices on the latest models, alongside exclusive bundles and seasonal promotions to maximize your savings.</p>
        </CardContent>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">RefreshCcw</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Hassle-Free Returns &amp; Warranty</h3>
          <p className="text-sm text-muted-foreground">Enjoy a 30-day satisfaction guarantee and full manufacturer's warranty on all devices, ensuring your investment is protected.</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Customer Success</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Hear From Our Delighted Mobile Users</h2>
    <p className="text-muted-foreground max-w-2xl">Real stories from customers who found their perfect device and exceptional service at Phone Emporium.</p></div>

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

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <Badge variant="outline" className="mb-3">Ready for an Upgrade?</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Find Your Perfect Mobile Companion Today</h2>
        <p className="text-muted-foreground mt-2">Explore our full range of smartphones and accessories. Your next digital adventure begins here.</p>
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/shop">Start Shopping Now</a></Button></div>
    </div>
  </div>
</section>
    </>
  )
}
