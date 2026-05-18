import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Aura Atelier - Inquiries & Support",
  description: "Have questions about our products, an order, or just want to say hello? Reach out to Aura Atelier's customer support team.",
}

export default function ContactPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#contact-form">Send Us a Message</Link></Button>
          
        </div>
        
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="space-y-5">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Tell us about your project</h2>
          
          
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
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked</h2>
          
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-left text-base">What is Aura Atelier's shipping policy?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Aura Atelier offers both standard and expedited shipping options to suit your needs. Orders are meticulously processed within 1-2 business days. For comprehensive details, please visit our dedicated Shipping &amp; Returns page.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-base">Do you offer international shipping?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Yes, Aura Atelier proudly ships to a curated selection of international destinations. Please note that shipping costs and estimated delivery times will vary by region. Kindly refer to our International Shipping policy for complete details.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-base">What is your return policy?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">We gladly accept returns of unused items in their original, pristine packaging within 30 days of your purchase. Please be aware that certain exclusions may apply. For a comprehensive overview, we invite you to review our Returns &amp; Exchanges page.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-base">How do I care for my ceramic items?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">While many of our ceramic pieces are designed to be dishwasher and microwave safe, we gently recommend hand-washing to preserve their exquisite quality and ensure lasting longevity. Detailed care instructions are thoughtfully provided with each individual product.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
    </>
  )
}
