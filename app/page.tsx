import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "other | Actionable insights on design, tech, and creative work",
  description: "Weekly posts sharing tools, workflows, and trends from design and tech practitioners. Practical advice for creators.",
}

export default function HomePage() {
  return (
    <>
<section id="hero-1" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="items-center lg:grid-cols-2 gap-12"><div className="space-y-6"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Stories that spark ideas</h2>
<p className="text-muted-foreground max-w-md">Practical insights on design tools, creative workflows, and tech trends. Weekly posts from practitioners who ship real work.</p>
<Button size="lg"><Link href="/articles">Read Latest</Link></Button></div>
<Image src="/hero-image.jpg" alt="Creative workspace" className="rounded-2xl object-cover" /></div></div></section>

<section id="blog-1" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="space-y-12"><h2 className="text-center">Latest Articles</h2>
<div className="lg:grid-cols-2 gap-8"><Card className="lg:col-span-2 lg:h-[500px]"><CardHeader><CardTitle>Building Design Systems at Scale</CardTitle></CardHeader>
<CardContent className="space-y-4"><p className="text-pretty text-muted-foreground">How we standardized components across 12 teams and reduced design debt by 78%. Complete playbook included.</p>
<Badge>Design Systems</Badge></CardContent>
<CardFooter><Link href="/articles/design-systems">Read Article →</Link></CardFooter></Card>
<Card><CardHeader><CardTitle>Figma Plugins That Save Hours</CardTitle></CardHeader>
<CardContent>Top 8 plugins every designer needs. From auto-layout helpers to color system generators.</CardContent></Card>
<Card><CardHeader><CardTitle>TypeScript for Designers</CardTitle></CardHeader>
<CardContent>Why designers need to understand TypeScript in 2024. No coding required.</CardContent></Card></div></div></div></section>

<section id="stats-1" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid-cols-4 gap-8"><div className="rounded-2xl border bg-card p-6"><div className="text-3xl font-semibold">127</div></div>
<div className="rounded-2xl border bg-card p-6"><div className="text-3xl font-semibold">24</div></div>
<div className="rounded-2xl border bg-card p-6"><div className="text-3xl font-semibold">8.2</div></div>
<div className="rounded-2xl border bg-card p-6"><div className="text-3xl font-semibold">92</div></div></div></div></section>

<section id="testimonials-1" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="space-y-8 text-center max-w-2xl mx-auto"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">What creators are saying</h2>
<div className="lg:grid-cols-2 gap-6"><Card><CardContent className="pt-6 space-y-3"><p className="text-pretty text-muted-foreground">"The most practical design blog I've found. Every post ships with me to client calls."</p>
<Avatar><AvatarFallback>SY</AvatarFallback></Avatar>
<p className="font-medium">Jamie Miller</p>
<p className="text-muted-foreground">Senior Designer</p></CardContent></Card>
<Card><CardContent className="pt-6 space-y-3"><p className="text-pretty text-muted-foreground">"Saved me 20+ hours learning Figma plugins. Straight to the good stuff."</p>
<Avatar><AvatarFallback>SY</AvatarFallback></Avatar>
<p className="font-medium">Sarah Kim</p>
<p className="text-muted-foreground">Product Designer</p></CardContent></Card></div></div></div></section>

<section id="cta-1" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Card className="border-0 bg-gradient-to-r from-primary/10 to-secondary/10"><CardContent className="lg:grid-cols-2 lg:items-center lg:gap-8 p-8 lg:p-12"><div className="space-y-4 text-center lg:text-left"><h2 className="max-w-md mx-auto lg:mx-0">Never miss a post</h2>
<p className="text-muted-foreground max-w-sm mx-auto lg:mx-0">Get new articles delivered to your inbox. One email per week, no spam.</p>
<Button size="lg" className="mx-auto lg:mx-0"><Link href="/contact">Get Updates</Link></Button></div></CardContent></Card></div></section>
    </>
  )
}
