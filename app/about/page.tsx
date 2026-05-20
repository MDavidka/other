import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | The Story Behind A Cockie Clikker",
  description: "Learn about the passionate team behind A Cockie Clikker, our mission to create fun, and the journey of bringing feathered friends to your screen.",
}

export default function AboutPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">Discover the passion and creativity that brought A cockie clikker to life, from a simple idea to a global phenomenon.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#">Get started</Link></Button>
          
        </div>
        
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Follow our journey from concept to launch, driven by a love for fun and feathered friends.</p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">1</div>
            <h3 className="text-lg font-semibold">The Spark of an Idea</h3>
            <p className="text-sm text-muted-foreground">It all started with a simple thought: what if clicking could be truly delightful? A cute cockatoo seemed like the perfect subject.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">2</div>
            <h3 className="text-lg font-semibold">Designing the Fun</h3>
            <p className="text-sm text-muted-foreground">Our small team of designers and developers crafted engaging mechanics, vibrant visuals, and satisfying sound effects.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">3</div>
            <h3 className="text-lg font-semibold">Building the Engine</h3>
            <p className="text-sm text-muted-foreground">Using modern web technologies, we built a robust and performant game engine capable of handling millions of clicks.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">4</div>
            <h3 className="text-lg font-semibold">Community Beta &amp; Feedback</h3>
            <p className="text-sm text-muted-foreground">Early players helped us refine the experience, providing invaluable feedback that shaped the game you see today.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">5</div>
            <h3 className="text-lg font-semibold">Global Launch!</h3>
            <p className="text-sm text-muted-foreground">With polish and passion, A cockie clikker was launched to the world, bringing joy to clikkers everywhere.</p>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-primary to-primary/70 p-10 text-primary-foreground sm:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
            <p className="text-pretty text-base text-primary-foreground/90">Be part of the A cockie clikker story. Connect with other players and share your high scores!</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary"><Link href="/play">Start Clikking Now!</Link></Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
