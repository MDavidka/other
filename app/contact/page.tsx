import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Get In Touch with CloudWave Hosting Support & Sales",
  description: "Have questions or need assistance? Contact CloudWave Hosting's sales or support team via form, email, or phone. We're here to help 24/7.",
}

export default function ContactPage() {
  return (
    <>
<section id="contact-hero-centered" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-6 max-w-3xl mx-auto"><h1 className="text-4xl md:text-5xl font-bold leading-tight">Get In Touch With CloudWave</h1>
<p className="text-lg text-muted-foreground">Whether you have a question about our services, need technical support, or want to discuss a custom solution, our team is ready to assist you.</p></div></div></section>

<section id="contact-split-form" className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12"><Card className="p-8 space-y-6"><CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
<CardDescription>Fill out the form below, and we'll get back to you as soon as possible.</CardDescription>
<div className="space-y-4"><Label>Name</Label>
<Input placeholder="Your Name"></Input>
<Label>Email</Label>
<Input type="email" placeholder="your@email.com"></Input>
<Label>Subject</Label>
<Input placeholder="Inquiry Subject"></Input>
<Label>Message</Label>
<Textarea placeholder="Your message..."></Textarea>
<Button className="w-full">Send Message</Button></div></Card>
<Card className="p-8 space-y-6"><CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
<CardDescription>Reach out to us through our direct channels.</CardDescription>
<div className="space-y-4"><div className="space-y-1"><p className="font-semibold">Email Support</p>
<p className="text-muted-foreground">support@cloudwave.com</p></div>
<div className="space-y-1"><p className="font-semibold">Phone Support</p>
<p className="text-muted-foreground">+1 (800) 555-0199</p></div>
<div className="space-y-1"><p className="font-semibold">Our Office</p>
<p className="text-muted-foreground">123 Cloud Avenue, Suite 400, Tech City, CA 90210</p></div>
<div className="space-y-1"><p className="font-semibold">Live Chat</p>
<p className="text-muted-foreground">Available 24/7 on our website</p></div></div></Card></div></div></section>

<section id="contact-faq-accordion" className="py-16 md:py-24 bg-muted"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-4 mb-12"><h2 className="text-3xl md:text-4xl font-bold">Common Support Questions</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">Before reaching out, check our frequently asked questions for quick solutions.</p></div>
<Accordion type="single" collapsible className="w-full max-w-3xl mx-auto"><AccordionItem value="item-1"><AccordionTrigger>What are your support hours?</AccordionTrigger>
<AccordionContent>Our technical support team is available 24/7/365 via live chat, email, and phone. Sales and billing support are available during business hours, Monday-Friday.</AccordionContent></AccordionItem>
<AccordionItem value="item-2"><AccordionTrigger>How quickly will I get a response?</AccordionTrigger>
<AccordionContent>For critical issues, our average response time is under 15 minutes for live chat and phone, and under 1 hour for email tickets.</AccordionContent></AccordionItem>
<AccordionItem value="item-3"><AccordionTrigger>Where can I find documentation?</AccordionTrigger>
<AccordionContent>Our comprehensive knowledge base and documentation portal are available 24/7 at docs.cloudwave.com.</AccordionContent></AccordionItem></Accordion></div></section>
    </>
  )
}
