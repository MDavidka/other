import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us: The Story Behind Cockie Clicker",
  description: "Learn about the passionate team behind Cockie Clicker, our vision for the ultimate idle game experience, and how we're building a sweet community.",
}

export default function AboutPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#">Get started</Link></Button>
          
        </div>
        
      </div>
    </section>

<div className="py-16"><h2 className="text-4xl font-bold mb-4">The Genesis of the Cookieverse</h2>
<p className="text-lg text-muted-foreground mb-4">Cockie Clicker began as a simple thought: 'What if we could make the most satisfying, endlessly engaging idle game ever?' Our small team of developers and designers, fueled by copious amounts of actual cookies, set out to create a world where every click, every upgrade, and every new building felt incredibly rewarding.</p>
<p className="text-lg text-muted-foreground mb-4">We believe games should be fun, accessible, and provide a sense of accomplishment without demanding all your time. Cockie Clicker is built on these principles, offering deep progression for dedicated players and casual enjoyment for those who just want to relax and watch their cookie count soar.</p>
<p className="text-lg text-muted-foreground">Join us as we continue to expand the cookieverse, adding new features, events, and challenges. Your feedback helps us make Cockie Clicker even sweeter!</p></div>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Meet the team</h2>
          
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <Avatar className="mx-auto h-20 w-20"><AvatarFallback className="text-base">A'</AvatarFallback></Avatar>
            <p className="mt-4 font-semibold">Alex 'The Architect' Chen</p>
            <p className="text-sm text-primary"></p>
            <p className="mt-1 text-sm text-muted-foreground">Lead Developer &amp; Game Visionary</p>
          </div>
          <div className="text-center">
            <Avatar className="mx-auto h-20 w-20"><AvatarFallback className="text-base">M'</AvatarFallback></Avatar>
            <p className="mt-4 font-semibold">Maya 'The Maestro' Singh</p>
            <p className="text-sm text-primary"></p>
            <p className="mt-1 text-sm text-muted-foreground">Lead Designer &amp; UI/UX Guru</p>
          </div>
          <div className="text-center">
            <Avatar className="mx-auto h-20 w-20"><AvatarFallback className="text-base">L'</AvatarFallback></Avatar>
            <p className="mt-4 font-semibold">Liam 'The Loremaster' O'Connell</p>
            <p className="text-sm text-primary"></p>
            <p className="mt-1 text-sm text-muted-foreground">Content Writer &amp; Lore Creator</p>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="space-y-5">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Tell us about your project</h2>
          
          
        </div>
        <div className="rounded-2xl border bg-card p-6 sm:p-8">
          <form className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your full name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" placeholder="What can we help with?" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" placeholder="Tell us more..." rows={6} required />
        </div>
        <Button type="submit" size="lg" className="w-full sm:w-auto">Send message</Button>
      </form>
        </div>
      </div>
    </section>
    </>
  )
}
