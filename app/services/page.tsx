import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "CloudWave Hosting Services | Shared, VPS, Dedicated, WordPress Hosting",
  description: "Explore CloudWave Hosting's comprehensive range of services including shared hosting, VPS, dedicated servers, and managed WordPress solutions.",
}

export default function ServicesPage() {
  return (
    <>
<section id="services-hero-centered" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-6 max-w-3xl mx-auto"><h1 className="text-4xl md:text-5xl font-bold leading-tight">Our Comprehensive Hosting Solutions</h1>
<p className="text-lg text-muted-foreground">From powerful shared hosting to fully managed dedicated servers, CloudWave offers a spectrum of services tailored to your unique requirements.</p></div></div></section>

<section id="services-feature-alternating" className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-4 mb-12"><h2 className="text-3xl md:text-4xl font-bold">Explore Our Hosting Options</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">Discover the perfect hosting solution designed to scale with your ambitions.</p></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:mb-24"><div className="space-y-4 text-center md:text-left"><h3 className="text-2xl font-bold">Shared Hosting</h3>
<p className="text-muted-foreground">Perfect for personal websites, blogs, and small businesses. Enjoy an easy-to-use control panel, free SSL, and reliable performance at an affordable price.</p>
<Button><Link href="/pricing">View Shared Plans</Link></Button></div>
<Image src="/placeholder-shared-hosting.png" alt="Shared Hosting Illustration" width={600} height={400} className="rounded-lg shadow-lg" /></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:mb-24 md:grid-flow-col-dense"><Image src="/placeholder-vps-hosting.png" alt="VPS Hosting Illustration" width={600} height={400} className="rounded-lg shadow-lg md:col-start-2" />
<div className="space-y-4 text-center md:text-left md:col-start-1 md:row-start-1"><h3 className="text-2xl font-bold">VPS Hosting</h3>
<p className="text-muted-foreground">Gain more power, control, and flexibility with our Virtual Private Servers. Ideal for growing websites and developers needing dedicated resources.</p>
<Button><Link href="/pricing">Explore VPS Plans</Link></Button></div></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:mb-24"><div className="space-y-4 text-center md:text-left"><h3 className="text-2xl font-bold">Dedicated Servers</h3>
<p className="text-muted-foreground">Experience ultimate performance and security with a server entirely dedicated to your needs. Full root access and custom configurations available.</p>
<Button><Link href="/contact">Get a Quote</Link></Button></div>
<Image src="/placeholder-dedicated-hosting.png" alt="Dedicated Server Illustration" width={600} height={400} className="rounded-lg shadow-lg" /></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:grid-flow-col-dense"><Image src="/placeholder-wordpress-hosting.png" alt="Managed WordPress Illustration" width={600} height={400} className="rounded-lg shadow-lg md:col-start-2" />
<div className="space-y-4 text-center md:text-left md:col-start-1 md:row-start-1"><h3 className="text-2xl font-bold">Managed WordPress</h3>
<p className="text-muted-foreground">Optimized hosting environment specifically for WordPress. Enjoy automatic updates, enhanced security, and expert support for your WordPress sites.</p>
<Button><Link href="/pricing">View WordPress Plans</Link></Button></div></div></div></section>

<section id="process-steps" className="py-16 md:py-24 bg-muted"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-4 mb-12"><h2 className="text-3xl md:text-4xl font-bold">Getting Started is Simple</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">We've streamlined our process to get your website online quickly and efficiently.</p></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"><Card className="p-6 text-center space-y-3"><Badge>Step 01</Badge>
<CardTitle>Choose Your Perfect Plan</CardTitle>
<CardDescription>Select from our range of shared, VPS, or dedicated hosting plans tailored to your needs.</CardDescription></Card>
<Card className="p-6 text-center space-y-3"><Badge>Step 02</Badge>
<CardTitle>Easy Setup &amp; Migration</CardTitle>
<CardDescription>Set up your new account in minutes, or let our experts handle a seamless migration of your existing site.</CardDescription></Card>
<Card className="p-6 text-center space-y-3"><Badge>Step 03</Badge>
<CardTitle>Go Live with Confidence</CardTitle>
<CardDescription>Launch your website with our robust infrastructure and 24/7 support, ensuring peak performance.</CardDescription></Card></div></div></section>

<section id="services-cta-boxed" className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Card className="p-8 md:p-12 text-center max-w-3xl mx-auto space-y-6 bg-card text-card-foreground shadow-lg"><h2 className="text-3xl md:text-4xl font-bold">Need a Custom Hosting Solution?</h2>
<p className="text-lg text-muted-foreground">Our team can help design a tailored hosting environment for your unique project requirements.</p>
<Button size="lg"><Link href="/contact">Contact Sales</Link></Button></Card></div></section>
    </>
  )
}
