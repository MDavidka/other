import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Get In Touch with Connect Devices Support",
  description: "Have questions or need assistance? Contact Connect Devices customer support via email, phone, or our online form.",
}

export default function ContactPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Reach Out</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">We're Here to Help You</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Our dedicated support team is ready to assist with any questions, concerns, or feedback you may have.</p></div>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="#contact-form">Send a Message</a></Button></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-24">
  <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
    <div>
      <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Get Support</Badge>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Connect with Our Expert Team</h2>
<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Fill out the form below or use our direct contact details for immediate assistance.</p></div>
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
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Common Support Questions</h2>
    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Before reaching out, check our frequently asked questions for instant solutions.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card key={i}>
        <CardHeader><CardTitle className="text-base">How do I track my order status?</CardTitle></CardHeader>
        <CardContent><CardDescription>You can track your order using the tracking number provided in your shipping confirmation email, or by logging into your account.</CardDescription></CardContent>
      </Card>
      <Card key={i}>
        <CardHeader><CardTitle className="text-base">What payment methods do you accept?</CardTitle></CardHeader>
        <CardContent><CardDescription>We accept major credit cards (Visa, MasterCard, Amex), PayPal, and offer financing options through our partners.</CardDescription></CardContent>
      </Card>
      <Card key={i}>
        <CardHeader><CardTitle className="text-base">Can I modify or cancel an order after placing it?</CardTitle></CardHeader>
        <CardContent><CardDescription>Orders can only be modified or canceled within a short window after placement. Please contact support immediately for assistance.</CardDescription></CardContent>
      </Card>
      <Card key={i}>
        <CardHeader><CardTitle className="text-base">Do you offer international shipping?</CardTitle></CardHeader>
        <CardContent><CardDescription>Currently, we only ship within the United States. We are working to expand our shipping regions soon.</CardDescription></CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <Badge variant="outline" className="mb-3">Still Need Help?</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Our Team is Standing By</h2>
        
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/tel18005550199">Call Us Now</a></Button></div>
    </div>
  </div>
</section>
    </>
  )
}
