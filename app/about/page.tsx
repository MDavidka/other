import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Story & Mission | Connect Devices",
  description: "Learn about Connect Devices' mission to provide the best mobile technology, exceptional service, and a seamless shopping experience.",
}

export default function AboutPage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-5">
            <Badge variant="secondary" className="rounded-full">Our Journey</Badge>
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Connecting You to Tomorrow's Technology</h1>
          </div>
          <div className="lg:col-span-5 space-y-5">
            
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="#team">Meet Our Team</Link></Button>
        
      </div>
          </div>
        </div>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Impact</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Numbers That Speak Our Dedication</h2>
    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Proudly serving a growing community of tech enthusiasts and everyday users.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <Card key={i}>
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold tracking-tight text-primary">42,800+</div>
          <div className="text-sm text-muted-foreground mt-2">Happy Customers</div>
          
        </CardContent>
      </Card>
      <Card key={i}>
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold tracking-tight text-primary">99.97%</div>
          <div className="text-sm text-muted-foreground mt-2">Satisfaction Rate</div>
          
        </CardContent>
      </Card>
      <Card key={i}>
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold tracking-tight text-primary">18+</div>
          <div className="text-sm text-muted-foreground mt-2">Top Brands Carried</div>
          
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Commitment</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">How We Ensure Your Best Experience</h2>
    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">From product selection to after-sales support, every step is designed with you in mind.</p></div>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">1</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 01</Badge>
          <h3 className="font-semibold text-lg">Curated Product Sourcing</h3>
          <p className="text-sm text-muted-foreground mt-1">We meticulously select devices from authorized distributors, guaranteeing authenticity and quality.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">2</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 02</Badge>
          <h3 className="font-semibold text-lg">Rigorous Quality Checks</h3>
          <p className="text-sm text-muted-foreground mt-1">Every item undergoes thorough inspection before shipping to ensure it meets our high standards.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">3</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 03</Badge>
          <h3 className="font-semibold text-lg">Seamless Order Fulfillment</h3>
          <p className="text-sm text-muted-foreground mt-1">Advanced logistics ensure your device is packed securely and shipped quickly to your doorstep.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">4</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 04</Badge>
          <h3 className="font-semibold text-lg">Ongoing Customer Care</h3>
          <p className="text-sm text-muted-foreground mt-1">Our support team is always ready to assist, from setup questions to warranty claims.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <Badge variant="outline" className="mb-3">Join Our Community</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Experience the Connect Devices Difference</h2>
        
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/shop">Start Shopping Today</a></Button>
    <Button variant="outline" size="lg" asChild><a href="/contact">Contact Our Team</a></Button></div>
    </div>
  </div>
</section>
    </>
  )
}
