import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "About Mobile Hub | Our Mission & Values",
  description: "Learn about Mobile Hub's commitment to providing high-quality mobile devices, exceptional customer service, and expert tech guidance.",
}

export default function AboutPage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-5">
            <Badge variant="secondary" className="rounded-full">Our Story</Badge>
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Committed to Mobile Excellence</h1>
          </div>
          <div className="lg:col-span-5 space-y-5">
            <p className="text-pretty text-lg text-muted-foreground">Mobile Hub was founded on the principle of making cutting-edge technology accessible with unparalleled service and genuine expertise.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="#">Get started</Link></Button>
        
      </div>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Impact</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Mobile Hub By The Numbers</h2>
          <p className="text-pretty text-muted-foreground">Proud of the milestones we've achieved and the trust we've built within our growing community.</p>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Happy Customers</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">12,500+</dd>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Order Accuracy</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">99.8%%</dd>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Average Rating</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">4.9/5</dd>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Support Hours</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">24/7</dd>
          </div>
        </dl>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Visionaries</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Meet Our Dedicated Tech Enthusiasts</h2>
    <p className="text-muted-foreground max-w-2xl">Our passionate team drives Mobile Hub forward, ensuring you receive the best products and support.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card key={i}>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">Alice Chen</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Founder &amp; CEO</p>
        </CardContent>
      </Card>
      <Card key={i}>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">David Lee</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Head of Product</p>
        </CardContent>
      </Card>
      <Card key={i}>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">Maria Garcia</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Customer Success Lead</p>
        </CardContent>
      </Card>
      <Card key={i}>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">Omar Khan</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Logistics Manager</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Promise</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Ensuring Quality and Customer Satisfaction</h2>
    <p className="text-muted-foreground max-w-2xl">Our meticulous process guarantees every device and accessory meets the highest standards before reaching you.</p></div>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">1</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 01</Badge>
          <h3 className="font-semibold text-lg">Curated Selection</h3>
          <p className="text-sm text-muted-foreground mt-1">We carefully select devices and accessories from trusted brands, focusing on performance and reliability.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">2</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 02</Badge>
          <h3 className="font-semibold text-lg">Rigorous Testing</h3>
          <p className="text-sm text-muted-foreground mt-1">Every product undergoes thorough quality checks to ensure it meets our strict standards and your expectations.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">3</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 03</Badge>
          <h3 className="font-semibold text-lg">Expert Support</h3>
          <p className="text-sm text-muted-foreground mt-1">Our knowledgeable team is always ready to assist you, from purchase advice to post-sale troubleshooting.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">4</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 04</Badge>
          <h3 className="font-semibold text-lg">Seamless Delivery</h3>
          <p className="text-sm text-muted-foreground mt-1">We ensure fast, secure, and tracked shipping so your new device arrives safely and on time.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
      <CardContent className="p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
        
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Join Our Growing Community</h2>
        <p className="text-lg text-muted-foreground max-w-xl">Experience the Mobile Hub difference for yourself. We're here to power your digital life.</p>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/phones">Start Shopping Today</a></Button></div>
      </CardContent>
    </Card>
  </div>
</section>
    </>
  )
}
