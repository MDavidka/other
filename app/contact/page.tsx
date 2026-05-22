import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { type Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Get In Touch | Pixel Perfect Customer Service",
  description: "Have questions or need support? Contact Pixel Perfect's friendly customer service team via form, email, or phone. We're here to help.",
}

export default function ContactPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Get In Touch</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">We're Here to Help You.</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Whether you have a question about a product, need support, or just want to chat tech, our team is ready to assist.</p>
        <p className="text-muted-foreground max-w-2xl">Reach out to us through the contact form, email, or phone. We aim to respond to all inquiries within 24 hours.</p></div>

    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-24">
  <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
    <div>
      <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Connect With Us</Badge>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Send Us a Message Directly.</h2>
<p className="text-muted-foreground max-w-2xl">Fill out the form below, and a member of our dedicated support team will get back to you promptly.</p></div>
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
    <p className="text-muted-foreground max-w-2xl">Find immediate answers to common questions about ordering, shipping, returns, and product information.</p></div>

    <div className="mt-12 max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-0">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>We offer a 30-day no-questions-asked return policy for all devices in their original condition. Please see our full return policy for details.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>How long does shipping take?</AccordionTrigger>
          <AccordionContent>Standard shipping typically takes 3-5 business days. Expedited options are available at checkout for 1-2 day delivery.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you offer financing options?</AccordionTrigger>
          <AccordionContent>Yes, we partner with leading financing providers to offer flexible payment plans. You can explore options during the checkout process.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Are your phones unlocked?</AccordionTrigger>
          <AccordionContent>All phones sold by Pixel Perfect are factory unlocked and compatible with major carriers worldwide, unless explicitly stated otherwise.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Can I trade in my old phone?</AccordionTrigger>
          <AccordionContent>We currently do not offer a trade-in program, but we are exploring options to provide this service in the near future.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <Badge variant="outline" className="mb-3">Still Have Questions?</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Don't Hesitate to Reach Out.</h2>
        <p className="text-muted-foreground mt-2">If your question wasn't answered in our FAQ, our friendly support team is always ready to provide personalized assistance.</p>
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/contactchat">Chat with Us</a></Button></div>
    </div>
  </div>
</section>

<section id="footer-main" className="bg-gray-900 text-gray-300 py-12"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid-cols-1 md:grid-cols-4 gap-8"><div className="space-y-4"><h3 className="text-2xl font-bold text-white">Pixel Perfect</h3>
<p className="text-sm text-gray-400">Your next phone, perfected.</p>
<div className="space-x-4"><Link href="https://twitter.com/pixelperfect" className="text-gray-400 hover:text-white">Twitter</Link>
<Link href="https://instagram.com/pixelperfect" className="text-gray-400 hover:text-white">Instagram</Link></div></div>
<div className="space-y-4"><h4 className="text-lg font-semibold text-white">Shop</h4>
<Link href="/shop" className="text-gray-400 hover:text-white">All Phones</Link>
<Link href="/brands" className="text-gray-400 hover:text-white">Brands</Link>
<Link href="/accessories" className="text-gray-400 hover:text-white">Accessories</Link></div>
<div className="space-y-4"><h4 className="text-lg font-semibold text-white">Company</h4>
<Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
<Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
<Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></div>
<div className="space-y-4"><h4 className="text-lg font-semibold text-white">Contact Us</h4>
<p className="text-gray-400">Email: hello@pixelperfect.com</p>
<p className="text-gray-400">Phone: +1 (555) 123-4567</p>
<p className="text-gray-400">123 Tech Avenue, Suite 100, Innovation City, CA 90210</p></div></div>
<Separator className="my-8 bg-gray-700" />
<p className="text-center text-sm text-gray-500">© 2024 Pixel Perfect. All rights reserved.</p></div></section>
    </>
  )
}
