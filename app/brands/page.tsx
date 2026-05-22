import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Official Brands & Manufacturers | Connect Devices",
  description: "Discover the premium brands we partner with, including Apple, Samsung, Google, and more. Quality and innovation guaranteed.",
}

export default function BrandsPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-24 lg:py-32">
  <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    <div className="flex flex-col gap-6">
      <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Valued Partners</Badge>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Explore Industry-Leading Brands</h2>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">We curate devices from the most trusted and innovative technology companies worldwide, ensuring quality and performance.</p></div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/shop">Shop by Brand</a></Button></div>
    </div>
    <div className="relative aspect-[4/3] rounded-2xl bg-muted overflow-hidden">
      <img src="https://via.placeholder.com/800x600" alt="" className="object-cover w-full h-full" loading="lazy" />
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Our Portfolio</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">A Curated Selection of Excellence</h2>
    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Only the best make it to our store. Discover devices from these global technology leaders.</p></div>

    <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
      <div key={i} className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Apple</div>
      <div key={i} className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Samsung</div>
      <div key={i} className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Google</div>
      <div key={i} className="text-muted-foreground/60 font-semibold text-sm sm:text-base">OnePlus</div>
      <div key={i} className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Xiaomi</div>
      <div key={i} className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Motorola</div>
      <div key={i} className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Sony</div>
      <div key={i} className="text-muted-foreground/60 font-semibold text-sm sm:text-base">Nokia</div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Brand Promise</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Why Our Brand Partnerships Matter</h2>
    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Our commitment to quality starts with selecting partners known for innovation, reliability, and customer satisfaction.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <Card key={i} className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">Award</span></div><CardTitle className="text-base">Guaranteed Authenticity</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>Every device is genuine, directly from the manufacturer or authorized distributors.</CardDescription></CardContent>
      </Card>
      <Card key={i} className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">Sparkles</span></div><CardTitle className="text-base">Latest Innovations First</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>Access to new releases and cutting-edge technology as soon as they launch.</CardDescription></CardContent>
      </Card>
      <Card key={i} className="border-0 shadow-none bg-transparent">
        <CardHeader className="p-0"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><span className="text-xl">Handshake</span></div><CardTitle className="text-base">Strong Manufacturer Support</CardTitle></CardHeader>
        <CardContent className="p-0 mt-1"><CardDescription>Benefit from full warranty coverage and direct manufacturer assistance when needed.</CardDescription></CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 bg-primary/5">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <Badge variant="outline" className="mb-3">Explore More</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready to Find Your Favorite Brand?</h2>
        
      </div>
      <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="/shop">Browse All Brands</a></Button></div>
    </div>
  </div>
</section>
    </>
  )
}
