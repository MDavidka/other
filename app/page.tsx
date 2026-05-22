import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { type Metadata } from "next"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "Pixel Perfect | Shop Latest Smartphones & Accessories",
  description: "Discover the newest smartphones from top brands. Pixel Perfect offers expert curation, competitive pricing, and seamless delivery for your next mobile device.",
}

export default function HomePage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <Badge variant="secondary" className="rounded-full">Welcome to Pixel Perfect</Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Find Your Next Device, Effortlessly.</h1>
          <p className="max-w-xl text-pretty text-lg text-muted-foreground">We meticulously select the best phones, ensuring quality, innovation, and value. Upgrade your world with confidence.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="/shop">Shop All Phones</Link></Button>
        <Button asChild size="lg" variant="outline"><Link href="/brands">Discover Brands</Link></Button>
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
        </div>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Why Choose Us?</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Experience the Pixel Perfect Difference.</h2>
    <p className="text-muted-foreground max-w-2xl">We're dedicated to making your phone buying journey simple, informed, and truly satisfying. Discover our core commitments.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
 <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">Smartphone</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Curated Selection</h3>
          <p className="text-sm text-muted-foreground">Only the best devices make our cut. We handpick phones for performance, camera, and battery life.</p>
        </CardContent>
      </Card>
 <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">Headphones</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
          <p className="text-sm text-muted-foreground">Our team provides knowledgeable assistance, from choosing your phone to setup and troubleshooting.</p>
        </CardContent>
      </Card>
 <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">Truck</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Fast, Secure Delivery</h3>
          <p className="text-sm text-muted-foreground">Get your new device quickly and safely with our reliable shipping partners and insured packages.</p>
        </CardContent>
      </Card>
 <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">Tag</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Competitive Pricing</h3>
          <p className="text-sm text-muted-foreground">Access great deals and transparent pricing without hidden fees. Value for your money, guaranteed.</p>
        </CardContent>
      </Card>
 <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-lg">RefreshCcw</span></div>
          
          <h3 className="text-lg font-semibold mb-2">Hassle-Free Returns</h3>
          <p className="text-sm text-muted-foreground">Not completely satisfied? Our straightforward return policy ensures your peace of mind.</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Top Picks</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Featured Smartphones for You.</h2>
    <p className="text-muted-foreground max-w-2xl">Explore our hand-picked selection of the most popular and highly-rated devices currently available. Find your next upgrade.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
 <Card className="group overflow-hidden">
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
 <Card className="group overflow-hidden">
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
 <Card className="group overflow-hidden">
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
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/oneplus-12.webp" alt="OnePlus 12" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
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

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Impact</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Numbers That Speak Volumes.</h2>
    <p className="text-muted-foreground max-w-2xl">See the tangible results of our commitment to customer satisfaction and quality mobile technology.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
 <Card>
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold tracking-tight text-primary">42,800+</div>
          <div className="text-sm text-muted-foreground mt-2">Phones Delivered</div>
          
        </CardContent>
      </Card>
 <Card>
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold tracking-tight text-primary">99.97%</div>
          <div className="text-sm text-muted-foreground mt-2">Customer Satisfaction</div>
          
        </CardContent>
      </Card>
 <Card>
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold tracking-tight text-primary">6.3x</div>
          <div className="text-sm text-muted-foreground mt-2">Faster Setup Time</div>
          
        </CardContent>
      </Card>
 <Card>
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold tracking-tight text-primary">1,500+</div>
          <div className="text-sm text-muted-foreground mt-2">5-Star Reviews</div>
          
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Happy Customers</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Hear From Our Valued Buyers.</h2>
    <p className="text-muted-foreground max-w-2xl">Real stories from people who found their perfect phone with Pixel Perfect. Your satisfaction is our priority.</p></div>

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

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <Badge variant="outline" className="mb-3">Ready for an Upgrade?</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Your Perfect Phone Awaits.</h2>
        <p className="text-muted-foreground mt-2">Dive into our extensive collection and find the device that truly fits your lifestyle and needs. Start exploring now.</p>
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/shop">Shop All Phones</a></Button></div>
    </div>
  </div>
</section>

<section id="footer-main" className="bg-gray-900 text-gray-300 py-12"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid-cols-1 md:grid-cols-4 gap-8"><div className="space-y-4"><h3 className="text-2xl font-bold text-white">Pixel Perfect</h3>
<p className="text-sm text-gray-400">Your next phone, perfected.</p>
<div className="space-x-4"><Link href="https://twitter.com/pixelperfect" className="text-gray-400 hover:text-white">Twitter</Link>
<Link href="https://instagram.com/pixelperfect" className="text-gray-400 hover:text-white">Instagram</Link></div></div>
<div className="space-y-4"><h4 className="text-lg font-semibold text-white">Shop</h4>
<Link href="/shop" className="text-gray-400 hover:text-white">All Phones</Link>
<Link href="/brands" className="text-gray-400 hover:text-white">Brands</Link>
<Link href="/accessories" className="text-gray-400 hover:text-white">Accessories</Link></div>
<div className="space-y-4"><h4 className="text-lg font-semibold text-white">Company</h4>
<Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
<Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
<Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></div>
<div className="space-y-4"><h4 className="text-lg font-semibold text-white">Contact Us</h4>
<p className="text-gray-400">Email: hello@pixelperfect.com</p>
<p className="text-gray-400">Phone: +1 (555) 123-4567</p>
<p className="text-gray-400">123 Tech Avenue, Suite 100, Innovation City, CA 90210</p></div></div>
<Separator className="my-8 bg-gray-700" />
<p className="text-center text-sm text-gray-500">© 2024 Pixel Perfect. All rights reserved.</p></div></section>
    </>
  )
}
