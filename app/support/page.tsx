import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Support — other",
  description: "Get help with orders, returns, setup calls, and technical questions from our expert team.",
}

export default function SupportPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">We're here when you need us</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Average response time under 4 hours during business days.</p>
        <p className="text-muted-foreground max-w-2xl">Book a setup call, start a return, or ask about compatibility.</p></div>

    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">How we help you</h2></div>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">1</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 01</Badge>
          <h3 className="font-semibold text-lg">Book a setup call</h3>
          <p className="text-sm text-muted-foreground mt-1">Schedule 20 minutes with a specialist who will migrate your data.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">2</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 02</Badge>
          <h3 className="font-semibold text-lg">Start a return</h3>
          <p className="text-sm text-muted-foreground mt-1">Open a ticket. Label prints automatically. Full refund in 48 hours.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">3</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 03</Badge>
          <h3 className="font-semibold text-lg">Get technical help</h3>
          <p className="text-sm text-muted-foreground mt-1">Troubleshoot battery, software, or network issues over video call.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-24">
  <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
    <div>
      <div className="max-w-3xl"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Talk to our team</h2>
<p className="text-muted-foreground max-w-2xl">Fill the form and we'll respond in under 4 hours on business days.</p></div>
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
    </>
  )
}
