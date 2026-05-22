import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { type Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "Buy iPhone 15 Pro Max | Pixel Perfect",
  description: "Get the iPhone 15 Pro Max with A17 Pro chip, advanced camera, and titanium design. Explore features, read reviews, and buy now at Pixel Perfect.",
}

export default function ProductIphone15ProMaxPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-24 lg:py-32">
  <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    <div className="flex flex-col gap-6">
      <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Apple Flagship</Badge>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">iPhone 15 Pro Max: Power &amp; Precision.</h2>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Experience the pinnacle of mobile technology with the A17 Pro chip, groundbreaking camera system, and a robust titanium design.</p>
      <p className="text-muted-foreground max-w-2xl">Dynamic Island, Always-On display, and an Action Button. This device redefines what a smartphone can do, crafted for professionals and enthusiasts alike.</p></div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/cartitemiphone-15-pro-max">Add to Cart - $1199</a></Button>
      <Button variant="outline" size="lg" asChild><a href="#specs">View Full Specs</a></Button></div>
    </div>
    <div className="relative aspect-[4/3] rounded-2xl bg-muted overflow-hidden">
      <img src="https://via.placeholder.com/800x600" alt="" className="object-cover w-full h-full" loading="lazy" />
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Key Innovations</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Unmatched Performance &amp; Features.</h2>
    <p className="text-muted-foreground max-w-2xl">Dive deeper into what makes the iPhone 15 Pro Max an extraordinary device. Every detail engineered for excellence.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
 <Card className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">Cpu</span></div><CardTitle className="text-base">A17 Pro Chip</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>Industry-leading mobile processor for console-level gaming and demanding tasks.</CardDescription></CardContent>
      </Card>
 <Card className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">Camera</span></div><CardTitle className="text-base">Pro Camera System</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>48MP Main, 3x/5x Telephoto, and Ultra Wide lenses for stunning photos and 4K video.</CardDescription></CardContent>
      </Card>
 <Card className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">Gem</span></div><CardTitle className="text-base">Titanium Design</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>Aerospace-grade titanium for an incredibly strong yet lightweight and durable frame.</CardDescription></CardContent>
      </Card>
 <Card className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">Usb</span></div><CardTitle className="text-base">USB-C Connectivity</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>Universal charging and data transfer with up to 10Gbps speeds for external drives.</CardDescription></CardContent>
      </Card>
 <Card className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">Bell</span></div><CardTitle className="text-base">Dynamic Island</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>Interactive alerts and Live Activities seamlessly integrated into the display.</CardDescription></CardContent>
      </Card>
 <Card className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">BatteryCharging</span></div><CardTitle className="text-base">All-Day Battery</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>Optimized power efficiency for extended usage, keeping you connected longer.</CardDescription></CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Customer Reviews</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What Owners Say About iPhone 15 Pro Max.</h2>
    <p className="text-muted-foreground max-w-2xl">Read authentic feedback from users who have experienced the power and elegance of this flagship device.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
 <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <p className="text-sm leading-relaxed"></p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 flex items-center gap-3">
          <Avatar><AvatarFallback>U</AvatarFallback></Avatar>
          <div>
            <div className="text-sm font-medium"></div>
            
          </div>
        </CardFooter>
      </Card>
 <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <p className="text-sm leading-relaxed"></p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 flex items-center gap-3">
          <Avatar><AvatarFallback>U</AvatarFallback></Avatar>
          <div>
            <div className="text-sm font-medium"></div>
            
          </div>
        </CardFooter>
      </Card>
 <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <p className="text-sm leading-relaxed"></p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 flex items-center gap-3">
          <Avatar><AvatarFallback>U</AvatarFallback></Avatar>
          <div>
            <div className="text-sm font-medium"></div>
            
          </div>
        </CardFooter>
      </Card>
    </div>
  </div>
</section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Related Products &amp; Accessories.</h2>
        <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">Enhance your iPhone 15 Pro Max experience with essential accessories or consider other premium devices.</p>
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="aspect-square w-full overflow-hidden rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">MagSafe Clear Case</p>
                <p className="text-xs text-muted-foreground"></p>
              </div>
              <p className="font-semibold">$49</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="aspect-square w-full overflow-hidden rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">Apple Watch Ultra 2</p>
                <p className="text-xs text-muted-foreground"></p>
              </div>
              <p className="font-semibold">$799</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="aspect-square w-full overflow-hidden rounded-2xl border bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">AirPods Pro (2nd Gen)</p>
                <p className="text-xs text-muted-foreground"></p>
              </div>
              <p className="font-semibold">$249</p>
            </div>
          </div>
        </div>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <Badge variant="outline" className="mb-3">Ready to Own?</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Secure Your iPhone 15 Pro Max Today.</h2>
        <p className="text-muted-foreground mt-2">Don't miss out on the ultimate smartphone experience. Add to cart now for fast, insured shipping and dedicated support.</p>
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/checkoutitemiphone-15-pro-max">Buy Now</a></Button>
    <Button variant="outline" size="lg" asChild><a href="/contact">Learn More</a></Button></div>
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
