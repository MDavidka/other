import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Cockie Clicker Leaderboard: See the World's Best Bakers",
  description: "Check out the top players on the Cockie Clicker global leaderboard. Compete to see who can bake the most cookies and claim the title of Grand Baker!",
}

export default function LeaderboardPage() {
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

<div className="py-12"><div className="grid-cols-3 gap-4 font-bold text-lg border-b pb-2 mb-4"><p className="text-pretty text-muted-foreground">Rank</p>
<p className="text-pretty text-muted-foreground">Player</p>
<p className="text-pretty text-muted-foreground">Cookies Baked</p></div>
<div className="grid-cols-3 gap-4 py-2 border-b last:border-b-0"><p className="text-pretty text-muted-foreground">1</p>
<p className="text-pretty text-muted-foreground">CookieGodX</p>
<p className="text-pretty text-muted-foreground">987,654,321,000</p></div>
<div className="grid-cols-3 gap-4 py-2 border-b last:border-b-0"><p className="text-pretty text-muted-foreground">2</p>
<p className="text-pretty text-muted-foreground">MegaBaker</p>
<p className="text-pretty text-muted-foreground">765,432,109,876</p></div>
<div className="grid-cols-3 gap-4 py-2 border-b last:border-b-0"><p className="text-pretty text-muted-foreground">3</p>
<p className="text-pretty text-muted-foreground">SweetVictory</p>
<p className="text-pretty text-muted-foreground">543,210,987,654</p></div>
<div className="grid-cols-3 gap-4 py-2 border-b last:border-b-0"><p className="text-pretty text-muted-foreground">4</p>
<p className="text-pretty text-muted-foreground">ClickMaster</p>
<p className="text-pretty text-muted-foreground">321,098,765,432</p></div>
<div className="grid-cols-3 gap-4 py-2 border-b last:border-b-0"><p className="text-pretty text-muted-foreground">5</p>
<p className="text-pretty text-muted-foreground">CookieQueen</p>
<p className="text-pretty text-muted-foreground">109,876,543,210</p></div></div>

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
