import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "About Other Pleasures | Premium Adult Boutique",
  description: "Learn about our mission to provide quality adult products with discretion, education, and pleasure-focused curation.",
}

export default function AboutPage() {
  return (
    <>
<section id="hero-about" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="items-center text-center space-y-8 py-24"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Pleasure Without Limits</h2>
<p className="text-muted-foreground max-w-2xl">Curated for desire. Delivered with discretion.</p></div></div></section>

<section id="about-features" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col gap-4"></div></div></section>

<section id="contact-about" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="gap-12 lg:grid-cols-2"><div className="flex flex-col gap-4"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Get In Touch</h2>
<p className="text-muted-foreground">Questions about products or orders</p>
<Link href="mailto:hello@otherpleasures.com">hello@otherpleasures.com</Link></div>
<Card><CardContent className="space-y-4 pt-6"><Label>Message</Label>
<Textarea placeholder="Tell us what you need..."></Textarea>
<Button className="w-full">Send Message</Button></CardContent></Card></div></div></section>
    </>
  )
}
