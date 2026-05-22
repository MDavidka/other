import { type Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "other: Speak to an Expert",
  description: "Reach out to other's customer support team for sales inquiries, technical help, or general questions. We're here to assist.",
}

export default function ContactPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Get In Touch</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">How Can We Help You Today?</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Our friendly team is ready to assist with any questions about products, orders, or technical support.</p>
        <p className="text-muted-foreground max-w-2xl">Fill out the form below or reach out directly via phone or email for prompt assistance.</p></div>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="#contact-form">Send a Message</a></Button></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-24">
  <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
    <div>
      <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Reach Out</Badge>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Connect With Our Support Team.</h2>
<p className="text-muted-foreground max-w-2xl">Whether you have a sales inquiry, need technical assistance, or have a general question, we're here to help.</p></div>
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
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions.</h2>
    <p className="text-muted-foreground max-w-2xl">Before reaching out, check our comprehensive FAQ section for immediate solutions to common queries.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
 <Card>
        <CardHeader><CardTitle className="text-base">What payment methods do you accept?</CardTitle></CardHeader>
        <CardContent><CardDescription>We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and offer financing options through select partners.</CardDescription></CardContent>
      </Card>
 <Card>
        <CardHeader><CardTitle className="text-base">Can I track my order after purchase?</CardTitle></CardHeader>
        <CardContent><CardDescription>Yes, once your order ships, you will receive a tracking number via email to monitor its delivery status.</CardDescription></CardContent>
      </Card>
 <Card>
        <CardHeader><CardTitle className="text-base">Do you offer international shipping?</CardTitle></CardHeader>
        <CardContent><CardDescription>Currently, we only ship within the United States. We are working to expand our shipping regions soon.</CardDescription></CardContent>
      </Card>
 <Card>
        <CardHeader><CardTitle className="text-base">What if my device arrives damaged?</CardTitle></CardHeader>
        <CardContent><CardDescription>Please contact our support team immediately with photos of the damage. We will arrange a replacement or refund promptly.</CardDescription></CardContent>
      </Card>
 <Card>
        <CardHeader><CardTitle className="text-base">How do I initiate a product return?</CardTitle></CardHeader>
        <CardContent><CardDescription>Visit our Returns Policy page for detailed instructions, or contact support to begin the return process.</CardDescription></CardContent>
      </Card>
 <Card>
        <CardHeader><CardTitle className="text-base">Do phones come with a warranty?</CardTitle></CardHeader>
        <CardContent><CardDescription>All new devices come with the manufacturer's standard warranty. Extended warranty options are also available for purchase.</CardDescription></CardContent>
      </Card>
    </div>
  </div>
</section>
    </>
  )
}
