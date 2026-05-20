import Link from "next/link"
import Image from "next/image"
import { Palette, Quote, Rocket, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "A Cockie Clikker | Tap, Click, Score!",
  description: "Discover A Cockie Clikker, the fun and addictive game where you click on cockatoos to earn points and climb the global leaderboard. Play now for free!",
}

export default function HomePage() {
  return (
    <>
<section id="hero-main" className="py-20 md:py-32 bg-gradient-to-br from-blue-100 to-purple-100"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid-cols-1 md:grid-cols-2 gap-8 items-center"><div className="text-center md:text-left space-y-6"><h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">Unleash the Clikking Fun!</h1>
<p className="text-xl text-gray-700 max-w-lg mx-auto md:mx-0">Tap, click, and collect points with our delightful feathered friends. How high can you score on the global leaderboard?</p>
<div className="justify-center md:justify-start space-x-4"><Button size="lg">Start Clicking!</Button>
<Button variant="outline" size="lg">Learn More</Button></div></div>
<Image src="/images/hero-cockatoo.png" alt="Playful Cockatoo Illustration" width={600} height={600} className="mx-auto md:ml-auto" /></div></div></section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams who care about the details</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Discover what makes A cockie clikker the ultimate casual game experience.</p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Zap className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Fast-Paced Gameplay</CardTitle>
              <CardDescription className="text-base">Quick rounds, instant fun. Perfect for a few minutes or hours of engaging play.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-1 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Unlockable Cockies</CardTitle>
              <CardDescription className="text-base">Discover and collect rare and unique cockatoo varieties as you progress.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-1 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Global Leaderboards</CardTitle>
              <CardDescription className="text-base">Compete with friends and players worldwide to claim the top spot.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-2 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Daily Challenges</CardTitle>
              <CardDescription className="text-base">New objectives every day to earn bonus points and exclusive rewards.</CardDescription>
            </CardHeader>
            
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          
          
          <p className="text-pretty text-muted-foreground">Join thousands of players enjoying the fun, and see how much clikking happens every day!</p>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Total Cliks</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">120k+</dd>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Active Players</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">15k+</dd>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <dt className="text-sm text-muted-foreground">Unique Cockies Unlocked</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">500+</dd>
          </div>
        </dl>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        
        <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-semibold tracking-tight sm:text-4xl">Loved by people who care about quality</h2>
        <figure className="mt-12 rounded-3xl border bg-card p-8 sm:p-12">
          <Quote className="h-10 w-10 text-primary/40" />
          <blockquote className="mt-6 text-pretty text-2xl font-medium leading-relaxed sm:text-3xl">"A cockie clikker is my go-to game for a quick break. So simple, yet so incredibly addictive!"</blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Avatar><AvatarFallback>AR</AvatarFallback></Avatar>
            <div>
              <p className="font-semibold">Ava R.</p>
              <p className="text-sm text-muted-foreground">Casual Gamer</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-primary to-primary/70 p-10 text-primary-foreground sm:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
            <p className="text-pretty text-base text-primary-foreground/90">Your next addiction is just a click away. Join the fun and see how high you can score!</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary"><Link href="/play">Play A Cockie Clikker Now!</Link></Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Got questions about A cockie clikker? We've got answers!</p>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-left text-base">How do I play A cockie clikker?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Simply click on the cockatoo that appears on your screen to earn points. The faster you click, the more points you get! Use points to unlock upgrades and new cockies.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-base">Is the game free to play?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Yes, A cockie clikker is completely free to play. We may offer optional in-app purchases for cosmetic items or boosters, but the core game experience is always free.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-base">Can I play on multiple devices?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Currently, your game progress is tied to the device you're playing on. We are working on cloud saving and account features for multi-device play in a future update!</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-base">How do I get on the leaderboard?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Achieve high scores by clikking efficiently and strategically using power-ups. Your best score will automatically be submitted to the global leaderboard.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
    </>
  )
}
