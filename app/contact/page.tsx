import { type Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Get In Touch | Mobile Hub Support & Sales",
  description: "Contact Mobile Hub for sales inquiries, customer support, or expert advice on our range of smartphones and accessories.",
}

export default function ContactPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">We're Here to Help</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Get In Touch With Our Experts</h2>
        <p className="text-muted-foreground max-w-2xl">Have a question about a product, an order, or need technical assistance? Our dedicated team is ready to assist you.</p></div>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/tel18005550199">Call Us Now</a></Button></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-24">
  <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
    <div>
      <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Reach Out</Badge>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">How Can We Help You Today?</h2>
<p className="text-muted-foreground max-w-2xl">Fill out the form below, and a member of our team will get back to you promptly. We aim to respond within 24 hours.</p></div>
      <div className="mt-8 space-y-4">
        
      </div>
    </div>
    <Card>
      <CardContent className="p-6 sm:p-8 space-y-4">
        <div className="space-y-2"><Label>Name</Label><Input placeholder="Your name" /></div>
        <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="you@example.com" /></div>
        <div className="space-y-2"><Label>Message</Label><Textarea placeholder="How can we help?" className="min-h-[120px]" /></div>
        <Button className="w-full" asChild><a href="#">Send message</a></Button>
      </CardContent>
    </Card>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Quick Answers</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Frequently Asked Contact Questions</h2>
    <p className="text-muted-foreground max-w-2xl">Before reaching out, check these common questions for immediate assistance.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card key={i}>
        <CardHeader><CardTitle className="text-base">Where can I track my order?</CardTitle></CardHeader>
        <CardContent><CardDescription>You can track your order status directly from your account dashboard or via the tracking link sent to your email.</CardDescription></CardContent>
      </Card>
      <Card key={i}>
        <CardHeader><CardTitle className="text-base">How do I initiate a return?</CardTitle></CardHeader>
        <CardContent><CardDescription>Please visit our 'Returns Policy' page for detailed instructions and to start the return process.</CardDescription></CardContent>
      </Card>
      <Card key={i}>
        <CardHeader><CardTitle className="text-base">Do you offer technical support for devices?</CardTitle></CardHeader>
        <CardContent><CardDescription>Our support team can assist with general device setup and troubleshooting. For in-depth issues, we recommend contacting the manufacturer.</CardDescription></CardContent>
      </Card>
      <Card key={i}>
        <CardHeader><CardTitle className="text-base">Can I modify my order after it's placed?</CardTitle></CardHeader>
        <CardContent><CardDescription>Orders are processed quickly. Please contact us immediately if you need to modify an order; changes are not guaranteed.</CardDescription></CardContent>
      </Card>
    </div>
  </div>
</section>
    </>
  )
}
