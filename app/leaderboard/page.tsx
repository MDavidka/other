import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "A Cockie Clikker Leaderboard | Top Scores",
  description: "See the highest scores in A Cockie Clikker! Compete with players worldwide and find out who the ultimate clikker is.",
}

export default function LeaderboardPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">Who reigns supreme in the world of A cockie clikker? Check out the global rankings below.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="/play">Start Clikking to Join!</Link></Button>
          
        </div>
        
      </div>
    </section>

<section id="leaderboard-section" className="py-16 bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Card className="p-6 shadow-lg max-w-3xl mx-auto"><CardTitle>Global Top 100</CardTitle>
<CardDescription>Updated in real-time. Can you make it to the top?</CardDescription>
<CardContent className="mt-6"><div className="flex flex-col gap-4"><div className="grid-cols-3 font-bold text-gray-600 border-b pb-2 mb-2"><p className="text-pretty text-muted-foreground">Rank</p>
<p className="text-pretty text-muted-foreground">Player</p>
<p className="text-pretty text-muted-foreground">Score</p></div>
<div className="grid-cols-3 py-2 border-b last:border-b-0 items-center"><Badge className="w-fit">#1</Badge>
<p className="text-pretty text-muted-foreground">ClikkingKing</p>
<p className="font-semibold">1,234,567</p></div>
<div className="grid-cols-3 py-2 border-b last:border-b-0 items-center"><Badge className="w-fit">#2</Badge>
<p className="text-pretty text-muted-foreground">FeatherFanatic</p>
<p className="font-semibold">987,654</p></div>
<div className="grid-cols-3 py-2 border-b last:border-b-0 items-center"><Badge className="w-fit">#3</Badge>
<p className="text-pretty text-muted-foreground">CockieChamp</p>
<p className="font-semibold">765,432</p></div></div></CardContent></Card></div></section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">Start playing now and see if you have what it takes to reach the top!</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="/play">Play Now!</Link></Button>
          
        </div>
      </div>
    </section>
    </>
  )
}
