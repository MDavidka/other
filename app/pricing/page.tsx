import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "CloudWave Hosting Pricing | Affordable & Powerful Web Hosting",
  description: "View CloudWave Hosting's transparent pricing for shared, VPS, and dedicated hosting plans. Find the perfect solution for your budget and needs.",
}

export default function PricingPage() {
  return (
    <>
<section id="pricing-hero-centered" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-6 max-w-3xl mx-auto"><h1 className="text-4xl md:text-5xl font-bold leading-tight">Find Your Perfect Hosting Plan</h1>
<p className="text-lg text-muted-foreground">Choose from our flexible hosting plans, designed to deliver performance and value for every budget and project size.</p></div></div></section>

<section id="pricing-two-tier-toggle" className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-4 mb-12"><h2 className="text-3xl md:text-4xl font-bold">Flexible Plans for Every Need</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">Select your ideal hosting plan and choose between monthly or annual billing for extra savings.</p></div>
<Tabs defaultValue="monthly" className="w-full max-w-sm mx-auto mb-10"><TabsList className="grid w-full grid-cols-2"><TabsTrigger value="monthly">Monthly</TabsTrigger>
<TabsTrigger value="annually">Annually (Save 20%)</TabsTrigger></TabsList>
<TabsContent value="monthly"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"><Card className="border-border/60"><CardHeader><CardTitle>Basic Shared</CardTitle></CardHeader><CardContent><Button className="w-full"><Link href="#">Select Plan</Link></Button></CardContent><CardFooter></CardFooter></Card>
<Card className="border-border/60"><CardHeader><CardTitle>Pro Shared</CardTitle></CardHeader><CardContent><Button className="w-full"><Link href="#">Select Plan</Link></Button></CardContent><CardFooter></CardFooter></Card>
<Card className="border-border/60"><CardHeader><CardTitle>Managed VPS</CardTitle></CardHeader><CardContent><Button className="w-full"><Link href="#">Select Plan</Link></Button></CardContent><CardFooter></CardFooter></Card>
<Card className="border-border/60"><CardHeader><CardTitle>Dedicated Server</CardTitle></CardHeader><CardContent><Button className="w-full"><Link href="#">Select Plan</Link></Button></CardContent><CardFooter></CardFooter></Card></div></TabsContent>
<TabsContent value="annually"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"><Card className="border-border/60"><CardHeader><CardTitle>Basic Shared</CardTitle></CardHeader><CardContent><Button className="w-full"><Link href="#">Select Plan</Link></Button></CardContent><CardFooter></CardFooter></Card>
<Card className="border-border/60"><CardHeader><CardTitle>Pro Shared</CardTitle></CardHeader><CardContent><Button className="w-full"><Link href="#">Select Plan</Link></Button></CardContent><CardFooter></CardFooter></Card>
<Card className="border-border/60"><CardHeader><CardTitle>Managed VPS</CardTitle></CardHeader><CardContent><Button className="w-full"><Link href="#">Select Plan</Link></Button></CardContent><CardFooter></CardFooter></Card>
<Card className="border-border/60"><CardHeader><CardTitle>Dedicated Server</CardTitle></CardHeader><CardContent><Button className="w-full"><Link href="#">Select Plan</Link></Button></CardContent><CardFooter></CardFooter></Card></div></TabsContent></Tabs></div></section>

<section id="pricing-faq-two-column" className="py-16 md:py-24 bg-muted"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-4 mb-12"><h2 className="text-3xl md:text-4xl font-bold">Billing &amp; Plan Questions</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">Find answers to common questions about our pricing, billing cycles, and plan management.</p></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto"><div className="space-y-2"><h4 className="text-xl font-semibold">What payment methods do you accept?</h4>
<p className="text-muted-foreground">We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans.</p></div>
<div className="space-y-2"><h4 className="text-xl font-semibold">Can I upgrade or downgrade my plan?</h4>
<p className="text-muted-foreground">Yes, you can easily upgrade or downgrade your hosting plan at any time directly from your control panel. Prorated charges or credits will apply.</p></div>
<div className="space-y-2"><h4 className="text-xl font-semibold">Are there any setup fees?</h4>
<p className="text-muted-foreground">No, we do not charge any setup fees for any of our hosting plans.</p></div>
<div className="space-y-2"><h4 className="text-xl font-semibold">What is your refund policy?</h4>
<p className="text-muted-foreground">We offer a 30-day money-back guarantee for new shared and VPS hosting accounts. Dedicated servers and domain registrations are non-refundable.</p></div>
<div className="space-y-2"><h4 className="text-xl font-semibold">Do you offer custom plans?</h4>
<p className="text-muted-foreground">Yes, for enterprise-level needs or specific requirements, please contact our sales team for a custom quote.</p></div>
<div className="space-y-2"><h4 className="text-xl font-semibold">Is domain registration included?</h4>
<p className="text-muted-foreground">Domain registration is not included by default but can be added during checkout. We offer competitive pricing for popular domain extensions.</p></div></div></div></section>

<section id="pricing-cta-split" className="py-16 md:py-24 bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"><div className="space-y-4 text-center md:text-left"><h2 className="text-3xl md:text-4xl font-bold">Still Unsure Which Plan is Right?</h2>
<p className="text-lg opacity-90">Our hosting experts are here to help you select the perfect solution for your website.</p></div>
<div className="flex justify-center md:justify-end"><Button size="lg" variant="secondary"><Link href="/contact">Talk to an Expert</Link></Button></div></div></div></section>
    </>
  )
}
