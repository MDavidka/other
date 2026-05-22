import { type Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge, Button, Card, CardContent, Input, Label, Textarea } from "@/components/ui/Accordion"

export const metadata: Metadata = {
  title: "Get In Touch | NextGen Mobile Support & Sales",
  description: "Have questions or need assistance? Contact NextGen Mobile's friendly support team via email, phone, or our online contact form.",
}

export default function ContactPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Reach Out</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">We're Here to Help You</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Whether you have a question about a product, an order, or need technical assistance, our team is ready to provide prompt and helpful support.</p></div>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/contactfaq">Visit Our FAQ</a></Button></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-24">
  <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
    <div>
      <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Get in Touch</Badge>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Send Us a Message</h2>
<p className="text-muted-foreground max-w-2xl">Fill out the form below, and a member of our support team will get back to you within 24 business hours.</p></div>
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
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
    <p className="text-muted-foreground max-w-2xl">Find immediate solutions to common inquiries about orders, shipping, returns, and product information.</p></div>

    <div className="mt-12 max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-0">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>We offer a 30-day no-questions-asked return policy for all devices in their original condition. Simply initiate a return through your account portal or contact support.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>How long does shipping take?</AccordionTrigger>
          <AccordionContent>Standard shipping typically takes 3-5 business days. Expedited options are available at checkout for 1-2 business day delivery. You'll receive a tracking number via email.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you offer financing options?</AccordionTrigger>
          <AccordionContent>Yes, we partner with Affirm and Klarna to provide flexible financing plans for eligible purchases. Look for payment options at checkout.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I trade in my old phone?</AccordionTrigger>
          <AccordionContent>Absolutely! We offer competitive trade-in values for a wide range of devices. Visit our trade-in page or contact support for an appraisal.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Are your phones unlocked?</AccordionTrigger>
          <AccordionContent>Most of our phones are sold unlocked and compatible with all major carriers. Specific carrier-locked models will be clearly indicated on the product page.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</section>
    </>
  )
}
