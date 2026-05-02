import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | other - Get updates & submit ideas",
  description: "Subscribe to weekly updates or submit article ideas. We read every message.",
}

export default function ContactPage() {
  return (
    <>
<section id="contact-hero" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="items-center lg:grid-cols-2 gap-12"><div className="space-y-6"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Stay updated</h2>
<p className="text-muted-foreground max-w-md">Weekly articles delivered to your inbox. Or submit your article ideas.</p></div>
<Card><CardHeader className="space-y-2"><CardTitle>Newsletter signup</CardTitle></CardHeader>
<CardContent className="space-y-4"><Input placeholder="your@email.com" type="email"></Input>
<Label className="text-xs text-muted-foreground flex items-center gap-2"><p className="text-pretty text-muted-foreground">One email per week. No spam.</p></Label>
<Button className="w-full">Subscribe Free</Button></CardContent></Card></div></div></section>

<section id="contact-faq" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="space-y-4 max-w-2xl mx-auto"><h2 className="text-center">Frequently asked</h2>
<Accordion type="single" collapsible className="w-full"></Accordion></div></div></section>

<section id="contact-info" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Card><CardHeader className="space-y-2"><CardTitle>Get in touch</CardTitle></CardHeader>
<CardContent className="space-y-4 text-sm"><p className="font-medium">hello@other.com</p>
<p className="text-muted-foreground">RSS: /rss.xml</p></CardContent></Card></div></section>
    </>
  )
}
