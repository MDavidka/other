import Link from "next/link"
import { Quote, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Cockie Clicker: Bake, Upgrade, Conquer the Cookieverse!",
  description: "Dive into the most addictive cookie clicker game! Tap to bake, unlock powerful upgrades, and build your cookie empire. Play Cockie Clicker now!",
}

export default function HomePage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-primary/15 via-accent/10 to-background p-8 sm:p-14">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl space-y-5">
            
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Ship something people remember.</h1>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="#">Get started</Link></Button>
        
      </div>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        
        <dl className="mt-10 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
          <div className="px-2 text-center sm:px-6">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">1.2B+</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Total Cookies Baked</dt>
          </div>
          <div className="px-2 text-center sm:px-6">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">12,400</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Active Bakers</dt>
          </div>
          <div className="px-2 text-center sm:px-6">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">250+</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Unique Upgrades</dt>
          </div>
        </dl>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams who care about the details</h2>
          
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Tap to Bake</CardTitle>
              <CardDescription className="text-base">Start your journey by simply tapping the giant cookie. Every tap counts!</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-1 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Unlock Upgrades</CardTitle>
              <CardDescription className="text-base">Invest your hard-earned cookies into powerful upgrades and auto-bakers.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-1 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Expand Your Empire</CardTitle>
              <CardDescription className="text-base">Discover new buildings, technologies, and secret recipes to boost production.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-2 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Compete Globally</CardTitle>
              <CardDescription className="text-base">Climb the leaderboard and prove you're the ultimate cookie mogul.</CardDescription>
            </CardHeader>
            
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Loved by people who care about quality</h2>
          
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border/60">
            <CardContent className="p-6">
              <Quote className="h-6 w-6 text-primary/40" />
              <p className="mt-4 text-pretty text-base leading-relaxed">"I started playing Cockie Clicker last week and now I can't stop. My productivity at work has plummeted, but my cookie count is soaring!"</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-9 w-9"><AvatarFallback>CM</AvatarFallback></Avatar>
                <div>
                  <p className="text-sm font-semibold">CookieMonster92</p>
                  <p className="text-xs text-muted-foreground">Addicted Gamer</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="p-6">
              <Quote className="h-6 w-6 text-primary/40" />
              <p className="mt-4 text-pretty text-base leading-relaxed">"The upgrades are so satisfying, and the progression feels just right. Best idle game I've played in years!"</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-9 w-9"><AvatarFallback>SS</AvatarFallback></Avatar>
                <div>
                  <p className="text-sm font-semibold">SweetToothSam</p>
                  <p className="text-xs text-muted-foreground">Casual Player</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="p-6">
              <Quote className="h-6 w-6 text-primary/40" />
              <p className="mt-4 text-pretty text-base leading-relaxed">"My kids love it, I love it. It's become a family competition to see who can bake the most. Highly recommend!"</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-9 w-9"><AvatarFallback>MB</AvatarFallback></Avatar>
                <div>
                  <p className="text-sm font-semibold">MommyBakes</p>
                  <p className="text-xs text-muted-foreground">Parent &amp; Player</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked</h2>
          
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-left text-base">Is Cockie Clicker free to play?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Yes! Cockie Clicker is completely free to play. You can enjoy the full game experience without spending a dime. Optional in-game purchases are available for those who wish to accelerate their progress, but they are never required.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-base">How do I save my game progress?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">To save your progress, simply create a free account. Your game will automatically sync to our servers, allowing you to pick up where you left off on any device.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-base">Can I play on multiple devices?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Absolutely! Once you've created an account, your game progress is saved to the cloud, letting you seamlessly switch between your desktop, tablet, or mobile device.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-base">What are 'upgrades' and 'buildings'?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Upgrades enhance your cookie production rate or click power. Buildings (like 'Cookie Farms' or 'Grandma's Kitchen') are automated producers that bake cookies for you even when you're not clicking. They are key to idle progression!</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">Start now and feel the difference within minutes.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#">Get started</Link></Button>
          
        </div>
      </div>
    </section>
    </>
  )
}
