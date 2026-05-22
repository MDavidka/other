import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { type Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Smartphone Brands | Apple, Samsung, Google | Pixel Perfect",
  description: "Discover all the leading smartphone brands available at Pixel Perfect. From Apple to Samsung, Google to OnePlus, find your preferred manufacturer.",
}

export default function BrandsPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Valued Partners</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Explore the World's Leading Phone Brands.</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">We proudly stock devices from the most innovative and trusted names in mobile technology. Find your favorite brand here.</p>
        <p className="text-muted-foreground max-w-2xl">Each brand offers unique strengths, from cutting-edge cameras to robust operating systems. Dive into their ecosystems.</p></div>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/shop">Shop All Brands</a></Button></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Collection</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Brands Shaping Mobile Innovation.</h2>
    <p className="text-muted-foreground max-w-2xl">Click on a brand to see their full range of available smartphones and accessories.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
 <div className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/brand-apple.webp" alt="Apple" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
 <div className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/brand-samsung.webp" alt="Samsung" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
 <div className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/brand-google.webp" alt="Google" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
 <div className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/brand-oneplus.webp" alt="OnePlus" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
 <div className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/brand-xiaomi.webp" alt="Xiaomi" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
 <div className="aspect-square rounded-xl bg-muted overflow-hidden"><img src="/images/brand-motorola.webp" alt="Motorola" className="object-cover w-full h-full hover:scale-105 transition-transform" loading="lazy" /></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Commitment</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Why We Partner with Industry Leaders.</h2>
    <p className="text-muted-foreground max-w-2xl">We choose brands that consistently deliver on quality, innovation, and customer satisfaction, ensuring you get the best.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
 <Card className="group hover:shadow-lg transition-shadow">
        <CardHeader><div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-lg">ShieldCheck</span></div><CardTitle>Guaranteed Authenticity</CardTitle><CardDescription>All devices are 100% genuine, sourced directly from authorized distributors.</CardDescription></CardHeader>
      </Card>
 <Card className="group hover:shadow-lg transition-shadow">
        <CardHeader><div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-lg">Sparkles</span></div><CardTitle>Latest Models</CardTitle><CardDescription>Access to new releases and popular devices as soon as they hit the market.</CardDescription></CardHeader>
      </Card>
 <Card className="group hover:shadow-lg transition-shadow">
        <CardHeader><div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-lg">Award</span></div><CardTitle>Full Warranty Support</CardTitle><CardDescription>Benefit from manufacturer warranties and our dedicated after-sales service.</CardDescription></CardHeader>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <Badge variant="outline" className="mb-3">Ready to Choose?</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Start Browsing by Your Favorite Brand.</h2>
        <p className="text-muted-foreground mt-2">Whether you're loyal to one ecosystem or exploring new options, we have the perfect device for you.</p>
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/shop">Shop All Brands</a></Button></div>
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
