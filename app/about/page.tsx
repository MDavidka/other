import { type Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "other: Who We Are",
  description: "Learn about other's mission to provide the best mobile technology and customer experience. Our story and values.",
}

export default function AboutPage() {
  return (
    <>
<section className="relative px-4 py-24 sm:py-32 lg:py-40 overflow-hidden">
  <div className="absolute inset-0 bg-grid opacity-30" />
  <div className="relative mx-auto max-w-4xl flex flex-col items-center text-center gap-8">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Story</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Redefining Your Mobile Experience.</h2>
    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Since 2018, we've been dedicated to connecting people with the perfect technology to power their lives.</p>
    <p className="text-muted-foreground max-w-2xl">We believe in transparency, expert advice, and a seamless journey from discovery to delivery. Join our community of satisfied tech users.</p></div>

  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Impact</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Making a Difference, One Device at a Time.</h2>
    <p className="text-muted-foreground max-w-2xl">See the numbers that reflect our commitment to customer satisfaction and growth in the mobile tech industry.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
 <Card>
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold tracking-tight text-primary">12,500+</div>
          <div className="text-sm text-muted-foreground mt-2">Happy Customers</div>
          
        </CardContent>
      </Card>
 <Card>
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold tracking-tight text-primary">4.9/5</div>
          <div className="text-sm text-muted-foreground mt-2">Average Rating</div>
          
        </CardContent>
      </Card>
 <Card>
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold tracking-tight text-primary">150+</div>
          <div className="text-sm text-muted-foreground mt-2">Devices Shipped Daily</div>
          
        </CardContent>
      </Card>
 <Card>
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold tracking-tight text-primary">2018</div>
          <div className="text-sm text-muted-foreground mt-2">Founded Year</div>
          
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Values</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">How We Deliver Exceptional Service.</h2>
    <p className="text-muted-foreground max-w-2xl">Our core principles guide every interaction, ensuring you receive the best advice, products, and support.</p></div>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
 <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">1</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 01</Badge>
          <h3 className="font-semibold text-lg">Curate Quality</h3>
          <p className="text-sm text-muted-foreground mt-1">We meticulously select devices and accessories, ensuring every product meets our high standards for performance and reliability.</p>
        </div>
      </div>
 <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">2</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 02</Badge>
          <h3 className="font-semibold text-lg">Empower Choices</h3>
          <p className="text-sm text-muted-foreground mt-1">Our experts provide unbiased information and personalized recommendations, empowering you to make informed decisions.</p>
        </div>
      </div>
 <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">3</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 03</Badge>
          <h3 className="font-semibold text-lg">Simplify Experience</h3>
          <p className="text-sm text-muted-foreground mt-1">From browsing to checkout to delivery, we streamline every step for a hassle-free and enjoyable shopping journey.</p>
        </div>
      </div>
 <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">4</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 04</Badge>
          <h3 className="font-semibold text-lg">Support Continuously</h3>
          <p className="text-sm text-muted-foreground mt-1">Our dedicated support team is always ready to assist, ensuring your satisfaction extends far beyond your purchase.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Meet the Team</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Passionate Experts Behind Your Experience.</h2>
    <p className="text-muted-foreground max-w-2xl">Our diverse team of tech enthusiasts and customer service professionals is dedicated to your satisfaction.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 <Card>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">Jane Doe</h3>
          
          <p className="text-sm text-muted-foreground mt-2">CEO &amp; Founder</p>
        </CardContent>
      </Card>
 <Card>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">John Smith</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Head of Product Curation</p>
        </CardContent>
      </Card>
 <Card>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">Emily White</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Customer Success Lead</p>
        </CardContent>
      </Card>
 <Card>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">David Lee</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Logistics &amp; Operations</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <Badge variant="outline" className="mb-3">Join Our Journey</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Connect With Us Today.</h2>
        <p className="text-muted-foreground mt-2">Have questions or want to learn more about our mission? We'd love to hear from you.</p>
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/contact">Contact Our Team</a></Button></div>
    </div>
  </div>
</section>
    </>
  )
}
