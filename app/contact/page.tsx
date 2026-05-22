import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | other - Get In Touch",
  description: "Have questions or need assistance? Reach out to the 'other' customer support team. We're here to help with your orders, products, or any inquiries.",
}

export default function ContactPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        <Badge variant="secondary" className="mx-auto mb-5 rounded-full">We're Here to Help</Badge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Get In Touch With Our Support Team</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">Whether you have a question about an order, a product, or just want to say hello, we'd love to hear from you.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#contact-form">Send a Message</Link></Button>
          
        </div>
        
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Reach Out Directly</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Send Us a Message or Visit</h2>
          <p className="text-pretty text-muted-foreground">Fill out the form below for a prompt response, or find our contact details and office location.</p>
          
        </div>
        <div className="rounded-2xl border bg-card p-6 sm:p-8">
          <form className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your full name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" placeholder="What can we help with?" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" placeholder="Tell us more..." rows={6} required />
        </div>
        <Button type="submit" size="lg" className="w-full sm:w-auto">Send message</Button>
      </form>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Quick Answers</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <p className="text-pretty text-muted-foreground">Before reaching out, check if your question has already been answered in our comprehensive FAQ section.</p>
        </div>
        <dl className="lg:col-span-2 divide-y rounded-2xl border bg-card">
          <div className="px-6 py-5">
            <dt className="font-semibold">Can I modify my order after placing it?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Order modifications are possible within 2 hours of purchase. Please contact us immediately for assistance.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">How do I track my shipment?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Once your order ships, you'll receive an email with tracking information. You can also log into your account to check status.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">What is your policy on damaged goods?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">If an item arrives damaged, please contact us within 48 hours with photos, and we will arrange a replacement or refund.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">Do you offer gift wrapping services?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Yes, we offer elegant gift wrapping options for a small additional fee. Select this option during the checkout process.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">Are your products ethically sourced?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Absolutely. We are committed to ethical sourcing and partner with suppliers who adhere to fair labor and environmental standards.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">How do I apply a discount code?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Discount codes can be entered during the checkout process in the designated 'promo code' field before finalizing your purchase.</dd>
          </div>
        </dl>
      </div>
    </section>
    </>
  )
}
