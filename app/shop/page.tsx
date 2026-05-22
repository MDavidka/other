import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { type Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Shop All Smartphones | Pixel Perfect",
  description: "Browse our complete collection of the latest smartphones from Apple, Samsung, Google, and more. Find your next device with detailed specs and competitive prices.",
}

export default function ShopPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Full Collection</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Discover Every Device, Perfectly Priced.</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Explore a diverse range of smartphones, from budget-friendly options to premium flagships. Your ideal phone is just a click away.</p>
        <p className="text-muted-foreground max-w-2xl">We update our inventory regularly with new releases and special offers. Use our filters to narrow down your perfect match.</p></div>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="#product-list">Filter Options</a></Button>
        <Button variant="outline" size="lg" asChild><a href="/comparison">Compare Models</a></Button></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Browse &amp; Buy</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">All Available Smartphones.</h2>
    <p className="text-muted-foreground max-w-2xl">From the latest innovations to reliable classics, find detailed specifications and customer reviews for every phone.</p></div>

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
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/galaxy-a55.webp" alt="Samsung Galaxy A55" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Samsung Galaxy A55</h3>
          <p className="text-sm text-muted-foreground mt-1">$499</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/iphone-se-3rd-gen.webp" alt="iPhone SE (3rd Gen)" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">iPhone SE (3rd Gen)</h3>
          <p className="text-sm text-muted-foreground mt-1">$429</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/xiaomi-14-ultra.webp" alt="Xiaomi 14 Ultra" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Xiaomi 14 Ultra</h3>
          <p className="text-sm text-muted-foreground mt-1">$1099</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
 <Card className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/motorola-edge-50-pro.webp" alt="Motorola Edge 50 Pro" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Motorola Edge 50 Pro</h3>
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
    <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
      <CardContent className="p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
        <Badge variant="secondary">Need Assistance?</Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Experts Are Ready to Help.</h2>
        <p className="text-lg text-muted-foreground max-w-xl">Can't decide which phone is right for you? Our knowledgeable team offers personalized recommendations and answers all your questions.</p>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/contact">Contact Support</a></Button></div>
      </CardContent>
    </Card>
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
