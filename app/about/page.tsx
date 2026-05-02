import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | CloudWave Hosting's Mission & Values",
  description: "Learn about CloudWave Hosting's mission to provide fast, reliable, and secure web hosting. Meet our team and discover our commitment to excellence.",
}

export default function AboutPage() {
  return (
    <>
<section id="about-hero-editorial" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"><div className="space-y-6 text-center md:text-left"><h1 className="text-4xl md:text-5xl font-bold leading-tight">Our Story: Building the Future of Hosting</h1>
<p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">Since 2015, CloudWave Hosting has been dedicated to empowering individuals and businesses with world-class hosting infrastructure and unwavering support.</p></div>
<Image src="/placeholder-datacenter.png" alt="CloudWave Data Center" width={800} height={600} className="rounded-lg shadow-xl border" /></div></div></section>

<section id="team-card-grid" className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-4 mb-12"><h2 className="text-3xl md:text-4xl font-bold">Meet Our Dedicated Team</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">We are a passionate group of hosting enthusiasts committed to providing you with the best possible service and innovation.</p></div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"><Card className="p-6 text-center space-y-4"><Image src="/placeholder-avatar-1.png" alt="Alex Johnson" width={120} height={120} className="rounded-full mx-auto" />
<CardTitle>Alex Johnson</CardTitle>
<CardDescription>CEO &amp; Founder</CardDescription></Card>
<Card className="p-6 text-center space-y-4"><Image src="/placeholder-avatar-2.png" alt="Maria Rodriguez" width={120} height={120} className="rounded-full mx-auto" />
<CardTitle>Maria Rodriguez</CardTitle>
<CardDescription>Chief Technology Officer</CardDescription></Card>
<Card className="p-6 text-center space-y-4"><Image src="/placeholder-avatar-3.png" alt="David Lee" width={120} height={120} className="rounded-full mx-auto" />
<CardTitle>David Lee</CardTitle>
<CardDescription>Head of Customer Success</CardDescription></Card>
<Card className="p-6 text-center space-y-4"><Image src="/placeholder-avatar-4.png" alt="Sarah Chen" width={120} height={120} className="rounded-full mx-auto" />
<CardTitle>Sarah Chen</CardTitle>
<CardDescription>Lead Infrastructure Engineer</CardDescription></Card></div></div></section>

<section id="about-stats-row" className="py-16 md:py-24 bg-muted"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-4 mb-12"><h2 className="text-3xl md:text-4xl font-bold">Our Milestones &amp; Achievements</h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">A testament to our growth, dedication, and the trust our customers place in us.</p></div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"><div className="text-center space-y-2"><h3 className="text-5xl font-bold text-primary">2015</h3>
<p className="text-muted-foreground text-lg">Founded In</p></div>
<div className="text-center space-y-2"><h3 className="text-5xl font-bold text-primary">100K+</h3>
<p className="text-muted-foreground text-lg">Websites Hosted</p></div>
<div className="text-center space-y-2"><h3 className="text-5xl font-bold text-primary">5</h3>
<p className="text-muted-foreground text-lg">Global Data Centers</p></div>
<div className="text-center space-y-2"><h3 className="text-5xl font-bold text-primary">99.99%</h3>
<p className="text-muted-foreground text-lg">Uptime Record</p></div></div></div></section>

<section id="about-cta-banner" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center space-y-6"><h2 className="text-3xl md:text-4xl font-bold">Join the CloudWave Family</h2>
<p className="text-lg opacity-90 max-w-2xl mx-auto">We're always looking for talented individuals to join our growing team. Explore career opportunities with us.</p>
<Button size="lg" variant="secondary"><Link href="/contact">View Careers</Link></Button></div></div></section>
    </>
  )
}
