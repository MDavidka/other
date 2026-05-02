import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop All Products | Other Pleasures",
  description: "Browse our full collection of adult toys, lingerie, lubricants, and bondage gear. Fast discreet shipping.",
}

export default function ShopPage() {
  return (
    <>
<section id="hero-shop" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Card className="border-0 overflow-hidden"><CardContent className="pt-16 pb-16 text-center space-y-6"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Full Collection</h2>
<p className="text-muted-foreground max-w-lg mx-auto">Everything you need for pleasure</p></CardContent></Card></div></section>

<section id="products-shop" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid-cols-2 lg:grid-cols-4 gap-4"></div></div></section>

<section id="cta-shop" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="items-center lg:grid-cols-2 gap-12"><div className="flex flex-col gap-4"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Not sure where to start?</h2>
<p className="text-muted-foreground">Our guides help you find the perfect toy</p>
<Button>Browse Guides</Button></div>
<Image src="/guide-preview.jpg" alt="Pleasure guides" className="rounded-2xl object-cover" /></div></div></section>
    </>
  )
}
