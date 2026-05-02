import Image from "next/image"
import { Button } from "@/components/ui/button"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Beginner's Guides | How to Choose Sex Toys",
  description: "Expert guides for beginners and beyond. Vibrator selection, first-time anal, bondage basics.",
}

export default function GuidesPage() {
  return (
    <>
<section id="hero-guides" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="items-center lg:grid-cols-2 gap-12"><div className="flex flex-col gap-4"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Pleasure Guides</h2>
<p className="text-muted-foreground max-w-md">Everything you need to know before you shop</p>
<Button>Start Shopping</Button></div>
<Image src="/guide-hero.jpg" alt="Pleasure education" className="rounded-2xl object-cover" /></div></div></section>

<section id="guides-process" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="items-center text-center space-y-6 mb-16"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">How We Guide You</h2></div>
<div className="flex flex-col gap-4"></div></div></section>

<section id="blog-previews" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="items-center text-center space-y-6 mb-16"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Popular Guides</h2></div>
<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div></section>
    </>
  )
}
