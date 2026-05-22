import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"
import { Avatar, AvatarFallback, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Avatar"

export const metadata: Metadata = {
  title: "NextGen Mobile | Shop Latest Smartphones & Exclusive Deals",
  description: "Discover the newest smartphones, accessories, and unbeatable deals at NextGen Mobile. Your one-stop shop for upgrading to the latest mobile technology.",
}

export default function HomePage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <Badge variant="secondary" className="rounded-full">Innovation in Your Hand</Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Experience the Future of Mobile Technology</h1>
          
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="/shopcategorynew-arrivals">Shop New Arrivals</Link></Button>
        <Button asChild size="lg" variant="outline"><Link href="/shop">Compare Models</Link></Button>
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
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Leading Manufacturers, Unbeatable Selection</h2>
    <p className="text-muted-foreground max-w-2xl">We partner with the world's most innovative mobile brands to bring you the highest quality devices.</p></div>

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
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Top Picks &amp; Must-Have Smartphones</h2>
    <p className="text-muted-foreground max-w-2xl">Handpicked for performance, innovation, and value. Discover why these phones are flying off our virtual shelves.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://cdn.nextgenmobile.com/iphone-15-pro.webp" alt="iPhone 15 Pro" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">iPhone 15 Pro</h3>
          <p className="text-sm text-muted-foreground mt-1">$999</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://cdn.nextgenmobile.com/galaxy-s24-ultra.webp" alt="Samsung Galaxy S24 Ultra" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Samsung Galaxy S24 Ultra</h3>
          <p className="text-sm text-muted-foreground mt-1">$1199</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://cdn.nextgenmobile.com/pixel-8-pro.webp" alt="Google Pixel 8 Pro" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Google Pixel 8 Pro</h3>
          <p className="text-sm text-muted-foreground mt-1">$899</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://cdn.nextgenmobile.com/oneplus-12.webp" alt="OnePlus 12" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">OnePlus 12</h3>
          <p className="text-sm text-muted-foreground mt-1">$799</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Impact</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Connecting Thousands, One Phone at a Time</h2>
          <p className="text-pretty text-muted-foreground">We're dedicated to providing exceptional service and the best mobile technology to our growing community.</p>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Happy Customers</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">42,800+</dd>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Customer Satisfaction</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">99.97%</dd>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Million Devices Sold</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">3.5M</dd>
          </div>
        </dl>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Why Choose NextGen?</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Seamless Upgrades, Superior Service</h2>
    <p className="text-muted-foreground max-w-2xl">From expert advice to hassle-free returns, we make your phone buying experience simple and rewarding.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardHeader><div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-lg">Wallet</span></div><CardTitle>Unlock Exclusive Savings Daily</CardTitle><CardDescription>Access special discounts and bundles available only to NextGen Mobile customers, saving you more on top devices.</CardDescription></CardHeader>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardHeader><div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-lg">RefreshCcw</span></div><CardTitle>Guaranteed 30-Day Returns</CardTitle><CardDescription>Shop with complete peace of mind. If you're not satisfied, return your device within 30 days, no questions asked.</CardDescription></CardHeader>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardHeader><div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-lg">LifeBuoy</span></div><CardTitle>Expert Support, Always Available</CardTitle><CardDescription>Our dedicated team provides personalized assistance, ensuring you get the right phone and continued support.</CardDescription></CardHeader>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardHeader><div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-lg">Truck</span></div><CardTitle>Fast, Trackable Shipping</CardTitle><CardDescription>Receive your new device quickly with our expedited shipping options and real-time tracking from warehouse to your door.</CardDescription></CardHeader>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">What Our Customers Say</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Real Stories, Real Satisfaction</h2>
    <p className="text-muted-foreground max-w-2xl">Hear directly from thousands of satisfied NextGen Mobile users who found their perfect device with us.</p></div>

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
        
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready for Your Next Upgrade?</h2>
        <p className="text-muted-foreground mt-2">Explore our full catalog of the latest smartphones and accessories. Your perfect device is just a click away.</p>
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/shop">Start Shopping Now</a></Button>
    <Button variant="outline" size="lg" asChild><a href="/contact">Contact Sales Team</a></Button></div>
    </div>
  </div>
</section>
    </>
  )
}
