import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Cockie Clicker: Learn the Basics, Master the Game",
  description: "New to Cockie Clicker? This guide walks you through the simple steps to start baking, upgrading, and building your ultimate cookie empire.",
}

export default function HowToPlayPage() {
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

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">1</div>
            <h3 className="text-lg font-semibold">Click the Big Cookie</h3>
            <p className="text-sm text-muted-foreground">Your journey begins with a single tap. Each click generates cookies. The more you click, the more you earn!</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">2</div>
            <h3 className="text-lg font-semibold">Buy Your First Upgrade</h3>
            <p className="text-sm text-muted-foreground">Spend your initial cookies on 'Cursor' upgrades to make your clicks more powerful, or 'Grandmas' to start baking automatically.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">3</div>
            <h3 className="text-lg font-semibold">Unlock New Buildings</h3>
            <p className="text-sm text-muted-foreground">As your cookie count grows, unlock advanced buildings like 'Farms', 'Factories', and 'Portals' for exponential production.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">4</div>
            <h3 className="text-lg font-semibold">Discover Achievements &amp; Boosts</h3>
            <p className="text-sm text-muted-foreground">Complete challenges for special rewards, and activate temporary boosts to skyrocket your cookie per second (CPS).</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">5</div>
            <h3 className="text-lg font-semibold">Ascend and Prestige</h3>
            <p className="text-sm text-muted-foreground">When your progress slows, 'Ascend' to gain powerful 'Heavenly Chips' that provide permanent bonuses for your next playthrough, making you stronger each time!</p>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked</h2>
          
        </div>
        <dl className="lg:col-span-2 divide-y rounded-2xl border bg-card">
          <div className="px-6 py-5">
            <dt className="font-semibold">What's the best strategy for early game?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Focus on balancing manual clicks with automated production. Buying a few Grandmas early can provide a steady income while you save for more expensive upgrades.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">When should I 'Ascend'?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Ascending is typically recommended when your cookie production starts to slow significantly, and you have accumulated a good number of 'Heavenly Chips' from achievements. There's no single 'right' time, but generally after unlocking several buildings.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">Are there secret cookies or achievements?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Yes! The cookieverse is full of secrets. Keep an eye out for golden cookies, explore all upgrade paths, and experiment with different strategies to uncover hidden bonuses.</dd>
          </div>
        </dl>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-primary to-primary/70 p-10 text-primary-foreground sm:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
            <p className="text-pretty text-base text-primary-foreground/90">Start now and feel the difference within minutes.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary"><Link href="#">Get started</Link></Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
