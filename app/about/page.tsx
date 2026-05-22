import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Story | NextGen Mobile - Dedicated to Your Tech Journey",
  description: "Learn about NextGen Mobile's mission to provide the best mobile technology, exceptional customer service, and competitive pricing for every user.",
}

export default function AboutPage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-5">
            <Badge variant="secondary" className="rounded-full">Our Journey</Badge>
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Powering Connections Since 2018</h1>
          </div>
          <div className="lg:col-span-5 space-y-5">
            
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="/aboutteam">Meet Our Team</Link></Button>
        
      </div>
          </div>
        </div>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Promise</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">A Seamless Path to Your Next Device</h2>
    <p className="text-muted-foreground max-w-2xl">We've refined our process to ensure every step, from browsing to unboxing, is simple, secure, and satisfying.</p></div>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">1</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 01</Badge>
          <h3 className="font-semibold text-lg">Curated Selection</h3>
          <p className="text-sm text-muted-foreground mt-1">We meticulously select only the latest and most reliable devices from top global manufacturers, ensuring quality.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">2</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 02</Badge>
          <h3 className="font-semibold text-lg">Expert Guidance</h3>
          <p className="text-sm text-muted-foreground mt-1">Our knowledgeable support team is ready to assist you in finding the perfect phone, comparing features, and answering questions.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">3</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 03</Badge>
          <h3 className="font-semibold text-lg">Secure Transactions</h3>
          <p className="text-sm text-muted-foreground mt-1">Shop with confidence using our encrypted payment gateways and robust data protection measures for every purchase.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">4</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 04</Badge>
          <h3 className="font-semibold text-lg">Rapid Delivery</h3>
          <p className="text-sm text-muted-foreground mt-1">Benefit from our efficient logistics, ensuring your new device arrives safely and swiftly at your doorstep, fully trackable.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">5</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 05</Badge>
          <h3 className="font-semibold text-lg">Post-Purchase Support</h3>
          <p className="text-sm text-muted-foreground mt-1">Our commitment extends beyond the sale with comprehensive after-sales support, warranty assistance, and easy returns.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Achievements</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Milestones in Mobile Retail</h2>
    <p className="text-muted-foreground max-w-2xl">Our growth is a testament to our dedication to customer satisfaction and delivering unparalleled value in the mobile market.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
      <div key={i} className="text-center">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">8+</div>
        <div className="text-sm text-muted-foreground mt-1">Years in Business</div>
      </div>
      <div key={i} className="text-center">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">150,000+</div>
        <div className="text-sm text-muted-foreground mt-1">Devices Shipped</div>
      </div>
      <div key={i} className="text-center">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">4.9/5</div>
        <div className="text-sm text-muted-foreground mt-1">Average Rating</div>
      </div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Join Our Growing Community</h2>
        <p className="text-muted-foreground mt-2">Become part of the NextGen Mobile family and stay updated on the latest tech news, exclusive offers, and product launches.</p>
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/newsletter">Sign Up for Updates</a></Button>
    <Button variant="outline" size="lg" asChild><a href="https://twitter.com/nextgenmobile">Follow Us</a></Button></div>
    </div>
  </div>
</section>
    </>
  )
}
