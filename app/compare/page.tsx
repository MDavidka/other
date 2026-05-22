import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Compare Flagship Phones — other",
  description: "Side-by-side comparison of iPhone 16 Pro Max, Galaxy S25 Ultra, Pixel 9 Pro XL, and Xperia 1 VI across specs and pricing.",
}

export default function ComparePage() {
  return (
    <>
<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-5">
            
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Ship something people remember.</h1>
          </div>
          <div className="lg:col-span-5 space-y-5">
            <p className="text-pretty text-lg text-muted-foreground">Compare camera, battery, display, and performance metrics across the four leading flagships.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg"><Link href="#">Get started</Link></Button>
        
      </div>
          </div>
        </div>
      </div>
    </section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"></div>

    <div className="mt-12 overflow-x-auto rounded-xl border">
      <table className="w-full">
        <thead><tr className="bg-muted/50">
    <th className="p-4 text-left font-semibold">Feature</th>

        </tr></thead>
        <tbody>
          <tr key={i} className="border-t">
            <td className="p-4 font-medium">Display</td>

          </tr>
          <tr key={i} className="border-t">
            <td className="p-4 font-medium">Camera</td>

          </tr>
          <tr key={i} className="border-t">
            <td className="p-4 font-medium">Battery</td>

          </tr>
          <tr key={i} className="border-t">
            <td className="p-4 font-medium">Storage options</td>

          </tr>
          <tr key={i} className="border-t">
            <td className="p-4 font-medium">Starting price</td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
    </>
  )
}
