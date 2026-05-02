import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Other Pleasures | Discreet Adult Toys, Lingerie & More",
  description: "Discover premium vibrators, lingerie, bondage gear, and wellness products. Fast, private shipping. Shop now with 15% off first order.",
}

export default function HomePage() {
  return (
    <>
<section id="hero-1" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="items-center lg:grid-cols-2 gap-12"><div className="space-y-6"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Unlock Your Desires</h2>
<p className="text-muted-foreground max-w-md">Curated adult toys, lingerie, and intimates. Discreet packaging. Free shipping over $69.</p>
<Button size="lg">Shop Best Sellers</Button></div>
<Image src="/hero-product.jpg" alt="Premium vibrator collection" className="rounded-2xl" /></div></div></section>

<section id="products-1" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="items-center space-y-6 text-center mb-12"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Top Sellers</h2>
<p className="text-muted-foreground max-w-md">Customer favorites that never disappoint</p></div>
<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><Card className="group hover:shadow-xl overflow-hidden"><Image src="/vibrator-pink.jpg" alt="Satisfy Pro Vibrator" className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
<CardContent className="pt-4 space-y-2"><CardTitle className="text-lg font-medium">Satisfy Pro</CardTitle>
<p className="font-bold text-primary">$89</p></CardContent></Card>
<Card className="group hover:shadow-xl overflow-hidden"><Image src="/lingerie-set.jpg" alt="Lace Dream Set" className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
<CardContent className="pt-4 space-y-2"><CardTitle className="text-lg font-medium">Lace Dream Set</CardTitle>
<p className="font-bold text-primary">$59</p></CardContent></Card>
<Card className="group hover:shadow-xl overflow-hidden"><Image src="/bondage-kit.jpg" alt="Beginner Bondage Kit" className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
<CardContent className="pt-4 space-y-2"><CardTitle className="text-lg font-medium">Beginner Kit</CardTitle>
<p className="font-bold text-primary">$79</p></CardContent></Card>
<Card className="group hover:shadow-xl overflow-hidden"><Image src="/lube-collection.jpg" alt="Premium Lube Collection" className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
<CardContent className="pt-4 space-y-2"><CardTitle className="text-lg font-medium">Lube Collection</CardTitle>
<p className="font-bold text-primary">$29</p></CardContent></Card></div></div></section>

<section id="stats-1" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid-cols-4 gap-8"><div className="rounded-2xl border bg-card p-6"><div className="text-3xl font-semibold">12K+</div></div>
<div className="rounded-2xl border bg-card p-6"><div className="text-3xl font-semibold">24h</div></div>
<div className="rounded-2xl border bg-card p-6"><div className="text-3xl font-semibold">100%</div></div>
<div className="rounded-2xl border bg-card p-6"><div className="text-3xl font-semibold">365</div></div></div></div></section>

<section id="features-1" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="items-center space-y-6 text-center mb-16"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Why Shop With Us</h2></div>
<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><Card className="border-border/60"><CardHeader><CardTitle></CardTitle></CardHeader><CardContent><CardTitle>Private Browsing</CardTitle>
<CardDescription>Incognito mode + no tracking cookies</CardDescription></CardContent></Card>
<Card className="border-border/60"><CardHeader><CardTitle></CardTitle></CardHeader><CardContent><CardTitle>Fast Discreet Shipping</CardTitle>
<CardDescription>Plain boxes, 24hr dispatch</CardDescription></CardContent></Card>
<Card className="border-border/60"><CardHeader><CardTitle></CardTitle></CardHeader><CardContent><CardTitle>Expert Curated</CardTitle>
<CardDescription>Tested by real people</CardDescription></CardContent></Card></div></div></section>

<section id="testimonials-1" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="items-center space-y-6 text-center mb-16"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Real Pleasure, Real Reviews</h2></div>
<div className="grid-cols-1 md:grid-cols-2 gap-8"><Card><CardContent className="pt-6 space-y-4"><p className="italic text-lg leading-relaxed">"Best online experience ever. Packaging was completely discreet and arrived next day."</p>
<div className="items-center gap-3 pt-4"><Avatar><AvatarFallback>SY</AvatarFallback></Avatar>
<div className="flex flex-col gap-4"><p className="font-medium">Jessica C.</p>
<p className="text-muted-foreground">Verified Buyer</p></div></div></CardContent></Card>
<Card><CardContent className="pt-6 space-y-4"><p className="italic text-lg leading-relaxed">"Quality products at great prices. Customer service went above and beyond."</p>
<div className="items-center gap-3 pt-4"><Avatar><AvatarFallback>SY</AvatarFallback></Avatar>
<div className="flex flex-col gap-4"><p className="font-medium">Michael R.</p>
<p className="text-muted-foreground">Verified Buyer</p></div></div></CardContent></Card></div></div></section>

<section id="cta-1" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Card className="text-center border-0 bg-gradient-to-r from-pink-500 to-purple-600 text-white"><CardContent className="pt-12 pb-12 space-y-6"><h2 className="text-white">Ready to Explore?</h2>
<p className="text-white/90 max-w-md mx-auto">15% off your first order. Free shipping over $69.</p>
<Button size="lg" variant="secondary">Claim My Discount</Button></CardContent></Card></div></section>
    </>
  )
}
