import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "CloudWave Hosting | High-Performance Web Hosting Solutions",
  description: "Experience blazing fast speeds and unwavering reliability with CloudWave Hosting. Secure, scalable web hosting for businesses and developers.",
}

export default function HomePage() {
  return (
    <>
<section id="hero-main" className="py-16 md:py-24 bg-gradient-to-b from-background to-card-foreground"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid-cols-1 md:grid-cols-2 gap-12 items-center"><div className="text-center md:text-left space-y-6"><h1 className="text-4xl md:text-5xl font-bold leading-tight">Launch Your Vision with CloudWave Hosting</h1>
<p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">Experience unparalleled speed, security, and support. CloudWave empowers your online presence, from personal blogs to enterprise applications.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"><Button size="lg"><Link href="/pricing">View Hosting Plans</Link></Button>
<Button variant="outline" size="lg"><Link href="/services">Explore Features</Link></Button></div></div>
<Image src="/placeholder-dashboard.png" alt="CloudWave Hosting Dashboard Screenshot" width={800} height={600} className="rounded-lg shadow-xl border" /></div></div></section>

<section id="logos-section" className="py-12 md:py-16 bg-muted"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h3 className="text-center text-xl font-semibold text-muted-foreground mb-8">Trusted by Leading Innovators</h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center"><p className="text-2xl font-bold text-gray-700 dark:text-gray-300">Google Cloud</p>
<p className="text-2xl font-bold text-gray-700 dark:text-gray-300">AWS</p>
<p className="text-2xl font-bold text-gray-700 dark:text-gray-300">Vercel</p>
<p className="text-2xl font-bold text-gray-700 dark:text-gray-300">Stripe</p>
<p className="text-2xl font-bold text-gray-700 dark:text-gray-300">Docker</p>
<p className="text-2xl font-bold text-gray-700 dark:text-gray-300">Cloudflare</p>
<p className="text-2xl font-bold text-gray-700 dark:text-gray-300">DigitalOcean</p></div></div></section>

<section id="features-bento" className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-4 mb-12"><h2 className="text-3xl md:text-4xl font-bold">Why Choose CloudWave Hosting?</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">We combine cutting-edge technology with unparalleled support to deliver a hosting experience you can trust.</p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><Card className="p-6 flex flex-col items-center text-center space-y-3"><p className="text-primary text-4xl">⚡</p>
<CardTitle>Unmatched Speed</CardTitle>
<CardDescription>Leverage NVMe SSDs and global CDN integration for lightning-fast website load times.</CardDescription></Card>
<Card className="p-6 flex flex-col items-center text-center space-y-3"><p className="text-primary text-4xl">🔒</p>
<CardTitle>Ironclad Security</CardTitle>
<CardDescription>Advanced DDoS protection, free SSL certificates, and daily backups keep your data safe and sound.</CardDescription></Card>
<Card className="p-6 flex flex-col items-center text-center space-y-3"><p className="text-primary text-4xl">🧑‍💻</p>
<CardTitle>24/7 Expert Support</CardTitle>
<CardDescription>Our dedicated team of hosting specialists is always on standby, ready to assist you around the clock.</CardDescription></Card>
<Card className="p-6 flex flex-col items-center text-center space-y-3"><p className="text-primary text-4xl">📈</p>
<CardTitle>Scalable Solutions</CardTitle>
<CardDescription>Easily upgrade your resources as your traffic grows, ensuring your site always performs optimally.</CardDescription></Card>
<Card className="p-6 flex flex-col items-center text-center space-y-3"><p className="text-primary text-4xl">🖥️</p>
<CardTitle>Intuitive Control Panel</CardTitle>
<CardDescription>Manage your websites, databases, and emails with ease using our user-friendly control panel.</CardDescription></Card>
<Card className="p-6 flex flex-col items-center text-center space-y-3"><p className="text-primary text-4xl">⚙️</p>
<CardTitle>Developer Friendly</CardTitle>
<CardDescription>Support for multiple programming languages, Git integration, and SSH access for seamless development workflows.</CardDescription></Card></div></div></section>

<section id="stats-split-callout" className="py-16 md:py-24 bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"><div className="text-center md:text-left space-y-4"><h2 className="text-3xl md:text-4xl font-bold">Our Commitment to Excellence</h2>
<p className="text-lg opacity-90 max-w-xl mx-auto md:mx-0">We are dedicated to providing the highest quality hosting experience, backed by robust infrastructure and customer-centric values.</p></div>
<div className="grid grid-cols-2 gap-8"><div className="text-center"><div className="text-3xl font-semibold">99.99</div></div>
<div className="text-center"><div className="text-3xl font-semibold">10</div></div>
<div className="text-center"><div className="text-3xl font-semibold">20</div></div>
<div className="text-center"><div className="text-3xl font-semibold">5</div></div></div></div></div></section>

<section id="testimonials-spotlight" className="py-16 md:py-24 bg-muted"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-4 mb-12"><h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">Hear directly from businesses and developers who trust CloudWave Hosting for their critical online operations.</p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><Card className="p-6 flex flex-col space-y-4"><p className="text-lg italic leading-relaxed">“CloudWave Hosting transformed our online presence. The speed is incredible, and their support team is truly exceptional.”</p>
<div className="flex items-center space-x-3"><Avatar className="h-10 w-10"><AvatarFallback>SY</AvatarFallback></Avatar>
<div className="flex flex-col gap-4"><p className="font-semibold">Jane Doe</p>
<p className="text-sm text-muted-foreground">CEO, InnovateTech</p></div></div></Card>
<Card className="p-6 flex flex-col space-y-4"><p className="text-lg italic leading-relaxed">“As a developer, I appreciate the flexibility and robust features CloudWave offers. It's a game-changer for my projects.”</p>
<div className="flex items-center space-x-3"><Avatar className="h-10 w-10"><AvatarFallback>SY</AvatarFallback></Avatar>
<div className="flex flex-col gap-4"><p className="font-semibold">John Smith</p>
<p className="text-sm text-muted-foreground">Lead Developer, CodeCraft</p></div></div></Card>
<Card className="p-6 flex flex-col space-y-4"><p className="text-lg italic leading-relaxed">“Reliability is key for our e-commerce store. CloudWave delivers consistent uptime and peace of mind.”</p>
<div className="flex items-center space-x-3"><Avatar className="h-10 w-10"><AvatarFallback>SY</AvatarFallback></Avatar>
<div className="flex flex-col gap-4"><p className="font-semibold">Emily Chen</p>
<p className="text-sm text-muted-foreground">Founder, StyleHub</p></div></div></Card></div></div></section>

<section id="pricing-three-tier" className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-4 mb-12"><h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Hosting Pricing</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose a plan that fits your needs, from personal projects to high-traffic business sites. No hidden fees, just powerful hosting.</p></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"><Card className="border-border/60"><CardHeader><CardTitle>Starter</CardTitle></CardHeader><CardContent><Button className="w-full"><Link href="/pricing">Get Started</Link></Button></CardContent><CardFooter></CardFooter></Card>
<Card className="border-border/60"><CardHeader><CardTitle>Pro</CardTitle></CardHeader><CardContent><Button className="w-full"><Link href="/pricing">Choose Pro</Link></Button></CardContent><CardFooter></CardFooter></Card>
<Card className="border-border/60"><CardHeader><CardTitle>Business</CardTitle></CardHeader><CardContent><Button className="w-full"><Link href="/pricing">Go Business</Link></Button></CardContent><CardFooter></CardFooter></Card></div></div></section>

<section id="faq-accordion" className="py-16 md:py-24 bg-muted"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-4 mb-12"><h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">Find quick answers to common questions about our hosting services, billing, and support.</p></div>
<Accordion type="single" collapsible className="w-full max-w-3xl mx-auto"><AccordionItem value="item-1"><AccordionTrigger>What types of hosting do you offer?</AccordionTrigger>
<AccordionContent>We offer Shared Hosting for beginners, VPS Hosting for more control and resources, and Dedicated Servers for ultimate performance and customization.</AccordionContent></AccordionItem>
<AccordionItem value="item-2"><AccordionTrigger>Do you offer a money-back guarantee?</AccordionTrigger>
<AccordionContent>Yes, we offer a 30-day money-back guarantee on all our shared and VPS hosting plans. Your satisfaction is our priority.</AccordionContent></AccordionItem>
<AccordionItem value="item-3"><AccordionTrigger>How do I migrate my existing website?</AccordionTrigger>
<AccordionContent>Our expert support team offers free website migration services. Simply contact us after signing up, and we'll handle the entire process for you.</AccordionContent></AccordionItem>
<AccordionItem value="item-4"><AccordionTrigger>What kind of support can I expect?</AccordionTrigger>
<AccordionContent>We provide 24/7/365 expert support via live chat, email, and phone. Our specialists are always ready to assist with any hosting-related queries.</AccordionContent></AccordionItem></Accordion></div></section>

<section id="cta-banner-home" className="py-16 md:py-24 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-6"><h2 className="text-3xl md:text-4xl font-bold">Ready to Elevate Your Online Presence?</h2>
<p className="text-lg opacity-90 max-w-2xl mx-auto">Join thousands of satisfied customers who trust CloudWave Hosting for their websites and applications.</p>
<Button size="lg" variant="secondary"><Link href="/pricing">Get Started Today</Link></Button></div></div></section>
    </>
  )
}
