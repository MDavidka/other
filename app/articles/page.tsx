import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "All Articles | other",
  description: "Browse 127+ articles on design tools, creative workflows, and tech trends. Sorted by latest.",
}

export default function ArticlesPage() {
  return (
    <>
<section id="articles-hero" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="items-center space-y-6 text-center"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">All Articles</h2>
<p className="text-muted-foreground max-w-md mx-auto">127 articles on design, tech, and creative work. Updated weekly.</p></div></div></section>

<section id="articles-grid" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div></div></section>

<section id="articles-cta" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Card className="border-0"><CardContent className="text-center py-12"><p className="text-pretty text-muted-foreground">Want articles in your inbox?</p>
<Button size="lg" className="mt-4"><Link href="/contact">Subscribe Free</Link></Button></CardContent></Card></div></section>
    </>
  )
}
