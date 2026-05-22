import { type Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Contact Us | Phone Emporium Support & Inquiries",
  description: "Reach out to Phone Emporium customer support for assistance with orders, products, or general inquiries. We're here to help.",
}

export default function ContactPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">We're Here to Help</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Connect With Our Support Team</h2>
        <p className="text-muted-foreground max-w-2xl">Whether you have a question about a product, an order, or just want to say hello, our team is ready to assist you promptly.</p></div>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="#faq">View FAQs</a></Button></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-24">
  <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
    <div>
      <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Get In Touch</Badge>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Send Us a Message</h2>
<p className="text-muted-foreground max-w-2xl">Fill out the form below, and a member of our dedicated support team will get back to you within 24 business hours.</p></div>
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
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Instant Solutions to Common Questions</h2>
    <p className="text-muted-foreground max-w-2xl">Before reaching out, check our frequently asked questions for immediate answers to common concerns.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card key={i}>
        <CardHeader><CardTitle className="text-base">How can I track my order?</CardTitle></CardHeader>
        <CardContent><CardDescription>Once your order ships, you'll receive an email with a tracking number and a link to the carrier's website. You can also log into your account to check order status.</CardDescription></CardContent>
      </Card>
      <Card key={i}>
        <CardHeader><CardTitle className="text-base">What payment methods do you accept?</CardTitle></CardHeader>
        <CardContent><CardDescription>We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and offer financing options through select partners.</CardDescription></CardContent>
      </Card>
      <Card key={i}>
        <CardHeader><CardTitle className="text-base">Do you offer international shipping?</CardTitle></CardHeader>
        <CardContent><CardDescription>Currently, we only ship within the United States and Canada. We are working to expand our international shipping capabilities in the near future.</CardDescription></CardContent>
      </Card>
      <Card key={i}>
        <CardHeader><CardTitle className="text-base">How do I initiate a return or exchange?</CardTitle></CardHeader>
        <CardContent><CardDescription>Please visit our 'Returns Policy' page or contact our support team directly. We'll guide you through the process and provide a return authorization number.</CardDescription></CardContent>
      </Card>
      <Card key={i}>
        <CardHeader><CardTitle className="text-base">What if my device arrives damaged?</CardTitle></CardHeader>
        <CardContent><CardDescription>In the rare event of a damaged delivery, please contact us immediately with photos of the packaging and product. We will arrange a replacement or refund promptly.</CardDescription></CardContent>
      </Card>
      <Card key={i}>
        <CardHeader><CardTitle className="text-base">Can I change my order after it's been placed?</CardTitle></CardHeader>
        <CardContent><CardDescription>Order changes are possible if your order has not yet been processed for shipping. Please contact us as soon as possible for assistance.</CardDescription></CardContent>
      </Card>
    </div>
  </div>
</section>
    </>
  )
}
