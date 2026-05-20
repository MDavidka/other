import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Play A Cockie Clikker Now! | Get Your High Score",
  description: "Jump into the action! Play A Cockie Clikker directly in your browser and start tapping for points. Challenge yourself and climb the global leaderboard.",
}

export default function PlayPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">The cockatoos are waiting. How many points can you rack up?</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#game-canvas">Start New Game</Link></Button>
          
        </div>
        
      </div>
    </section>

<section id="game-section" className="py-16 bg-gray-50"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Card className="p-8 text-center max-w-2xl mx-auto shadow-lg"><h2 className="text-4xl font-bold mb-4">Score: 0</h2>
<div className="relative w-full h-64 bg-yellow-100 border-4 border-yellow-400 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden"><Image src="/images/clickable-cockatoo.png" alt="Clickable Cockatoo" width={200} height={200} className="animate-bounce" />
<p className="absolute text-3xl font-bold text-green-500 opacity-0 animate-fade-out">+1</p></div>
<div className="mt-8 justify-center space-x-4"><Button variant="outline">Reset Game</Button>
<Button>View Leaderboard</Button></div></Card></div></section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">Keep clikking to beat your high score or challenge a friend!</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="/play">Play Again!</Link></Button>
          
        </div>
      </div>
    </section>
    </>
  )
}
