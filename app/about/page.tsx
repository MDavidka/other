import { Card, CardContent } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "About other | Practical design & tech insights",
  description: "Learn about our mission, team, and editorial approach. Publishing actionable content since 2022.",
}

export default function AboutPage() {
  return (
    <>
<section id="about-hero" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Card className="border-0 max-w-4xl mx-auto"><CardContent className="pt-12 pb-16 text-center space-y-6"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Practical insights for creators</h2>
<p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">other publishes weekly articles on design tools, creative workflows, and emerging tech. Written by practitioners for practitioners. No fluff, all action.</p></CardContent></Card></div></section>

<section id="about-stats" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div></div></section>

<section id="about-process" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="space-y-8 max-w-4xl mx-auto"><h2 className="text-center">How we create content</h2>
<div className="grid-cols-1 md:grid-cols-3 gap-8"></div></div></div></section>

<section id="team-section" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="space-y-12 text-center"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Meet the editors</h2>
<div className="lg:grid-cols-3 gap-8"></div></div></div></section>
    </>
  )
}
