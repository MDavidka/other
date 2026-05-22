import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "About Us | Phone Emporium's Commitment to Mobile Excellence",
  description: "Learn about Phone Emporium's mission to provide the best mobile devices, expert advice, and exceptional customer service. Our story and values.",
}

export default function AboutPage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-5">
            <Badge variant="secondary" className="rounded-full">Our Journey</Badge>
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Dedicated to Mobile Innovation &amp; Customer Delight</h1>
          </div>
          <div className="lg:col-span-5 space-y-5">
            <p className="text-pretty text-lg text-muted-foreground">Since 2018, Phone Emporium has been at the forefront of mobile technology, connecting people with devices that empower their lives. We believe in quality, expertise, and genuine service.</p>
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Driving Satisfaction, One Phone at a Time</h2>
          <p className="text-pretty text-muted-foreground">Our commitment to excellence has fostered a thriving community of satisfied customers and a reputation for reliable mobile solutions.</p>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Devices Sold Annually</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">42,800+</dd>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Customer Satisfaction Rate</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">99.97%</dd>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Faster Order Fulfillment</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">6.3x</dd>
          </div>
        </dl>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Meet the Experts</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Our Passionate Team of Tech Enthusiasts</h2>
    <p className="text-muted-foreground max-w-2xl">Behind every seamless purchase and helpful recommendation is a dedicated team committed to your mobile experience.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card key={i}>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">Elena Rodriguez</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Founder &amp; CEO</p>
        </CardContent>
      </Card>
      <Card key={i}>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">Marcus Chen</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Head of Product Curation</p>
        </CardContent>
      </Card>
      <Card key={i}>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">Sophia K. Patel</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Customer Success Lead</p>
        </CardContent>
      </Card>
      <Card key={i}>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">Liam O'Connell</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Logistics &amp; Operations</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
      <CardContent className="p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
        <Badge variant="secondary">Join Our Community</Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Connect With Phone Emporium Today</h2>
        <p className="text-lg text-muted-foreground max-w-xl">Have questions or want to learn more about our values? We're always happy to chat.</p>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/contact">Contact Our Team</a></Button></div>
      </CardContent>
    </Card>
  </div>
</section>
    </>
  )
}
