import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { type Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "About Us | Our Mission & Values | Pixel Perfect",
  description: "Learn about Pixel Perfect's mission to provide the best mobile technology experience. Discover our commitment to quality, customer service, and innovation.",
}

export default function AboutPage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-5">
            <Badge variant="secondary" className="rounded-full">Our Journey</Badge>
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Dedicated to Your Mobile Experience.</h1>
          </div>
          <div className="lg:col-span-5 space-y-5">
            <p className="text-pretty text-lg text-muted-foreground">We believe finding your next phone should be exciting, not overwhelming. Our experts curate the best, so you can choose with confidence.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="#">Get started</Link></Button>
        
      </div>
          </div>
        </div>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Philosophy</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">How We Deliver Excellence.</h2>
    <p className="text-muted-foreground max-w-2xl">Every step of our process is designed to ensure you receive a premium product and exceptional service, every single time.</p></div>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
 <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">1</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 01</Badge>
          <h3 className="font-semibold text-lg">Rigorous Curation</h3>
          <p className="text-sm text-muted-foreground mt-1">We extensively research and test devices, selecting only those that meet our high standards for performance and reliability.</p>
        </div>
      </div>
 <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">2</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 02</Badge>
          <h3 className="font-semibold text-lg">Expert Guidance</h3>
          <p className="text-sm text-muted-foreground mt-1">Our team stays updated on the latest tech trends to provide you with informed, personalized recommendations.</p>
        </div>
      </div>
 <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">3</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 03</Badge>
          <h3 className="font-semibold text-lg">Seamless Shopping</h3>
          <p className="text-sm text-muted-foreground mt-1">From intuitive website navigation to secure checkout, we optimize every part of your buying journey.</p>
        </div>
      </div>
 <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">4</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 04</Badge>
          <h3 className="font-semibold text-lg">Dedicated Support</h3>
          <p className="text-sm text-muted-foreground mt-1">We're here for you after your purchase, offering technical assistance and hassle-free returns.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Achievements</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Making a Real Impact, Together.</h2>
          <p className="text-pretty text-muted-foreground">Our growth and success are a direct reflection of our customers' trust and our unwavering commitment to quality service.</p>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Years in Business</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">7+</dd>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Positive Feedback</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">99.97%</dd>
          </div>
        </dl>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Meet the Team</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">The Passion Behind Pixel Perfect.</h2>
    <p className="text-muted-foreground max-w-2xl">Our diverse team of tech enthusiasts and customer service professionals is united by a shared goal: your satisfaction.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 <Card>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">Alex Chen</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Founder &amp; CEO, visionary behind Pixel Perfect's curated approach.</p>
        </CardContent>
      </Card>
 <Card>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">Maria Rodriguez</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Head of Product Curation, ensures only the best phones make it to our store.</p>
        </CardContent>
      </Card>
 <Card>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">David Kim</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Lead Customer Success, dedicated to providing exceptional support and guidance.</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
      <CardContent className="p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
        <Badge variant="secondary">Join Our Journey</Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Discover Your Next Opportunity.</h2>
        <p className="text-lg text-muted-foreground max-w-xl">Passionate about mobile technology and customer service? Explore career opportunities and grow with our innovative team.</p>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/careers">View Careers</a></Button></div>
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
