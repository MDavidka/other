import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "other — Premium flagship phones",
  description: "Discover curated flagship smartphones with transparent pricing, expert support, and 30-day peace of mind.",
}

export default function HomePage() {
  return (
    <>
<section className="relative px-4 py-24 sm:py-32 lg:py-40 overflow-hidden">
  <div className="absolute inset-0 bg-grid opacity-30" />
  <div className="relative mx-auto max-w-4xl flex flex-col items-center text-center gap-8">
    <div className="max-w-3xl"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Phones that perform without compromise</h2>
    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Hand-selected flagships. Zero retail markup. 30-day peace of mind.</p>
    <p className="text-muted-foreground max-w-2xl">Every device ships with a 1-year warranty and lifetime software updates from our team.</p></div>

  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Numbers that speak for themselves</h2></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
      <div key={i} className="text-center">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">14,800+</div>
        <div className="text-sm text-muted-foreground mt-1">Phones sold this year</div>
      </div>
      <div key={i} className="text-center">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">4.98/5</div>
        <div className="text-sm text-muted-foreground mt-1">Average customer rating</div>
      </div>
      <div key={i} className="text-center">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">3.2</div>
        <div className="text-sm text-muted-foreground mt-1">Average days to delivery</div>
      </div>
      <div key={i} className="text-center">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">98%</div>
        <div className="text-sm text-muted-foreground mt-1">Repeat customer rate</div>
      </div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Why buyers choose other</h2></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          
          
          <h3 className="text-lg font-semibold mb-2">Flagship only</h3>
          <p className="text-sm text-muted-foreground">We stock only the top 3% of devices released each quarter.</p>
        </CardContent>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          
          
          <h3 className="text-lg font-semibold mb-2">Transparent pricing</h3>
          <p className="text-sm text-muted-foreground">No hidden fees. Price shown is the final price.</p>
        </CardContent>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          
          
          <h3 className="text-lg font-semibold mb-2">Expert setup</h3>
          <p className="text-sm text-muted-foreground">Free 20-minute call with a specialist before you buy.</p>
        </CardContent>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          
          
          <h3 className="text-lg font-semibold mb-2">30-day returns</h3>
          <p className="text-sm text-muted-foreground">No questions. Full refund if the phone isn't perfect.</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Real buyers. Real results.</h2></div>

    <div className="mt-12 grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardContent className="p-8 lg:p-10">
          <p className="text-lg sm:text-xl leading-relaxed"></p>
          <div className="flex items-center gap-3 mt-6">
            <Avatar className="h-12 w-12"><AvatarFallback>U</AvatarFallback></Avatar>
            <div>
              <div className="font-semibold"></div>
              
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-6"><Card key={i}><CardContent className="p-6"><p className="text-sm leading-relaxed"></p><div className="flex items-center gap-2 mt-4"><Avatar className="h-8 w-8"><AvatarFallback>U</AvatarFallback></Avatar><div className="text-sm font-medium"></div></div></CardContent></Card>
      <Card key={i}><CardContent className="p-6"><p className="text-sm leading-relaxed"></p><div className="flex items-center gap-2 mt-4"><Avatar className="h-8 w-8"><AvatarFallback>U</AvatarFallback></Avatar><div className="text-sm font-medium"></div></div></CardContent></Card></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Choose your phone</h2></div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start max-w-5xl mx-auto">
      <Card key={i} className={''}>
        
        <CardHeader className="text-center">
          <CardTitle>Pixel 8 Pro</CardTitle>
          <CardDescription></CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold">899</span>
            
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3"></ul>
        </CardContent>
        <CardFooter className="flex-col">
          <Button className="w-full" variant={"outline"} asChild>
            <a href="#">Get started</a>
          </Button>
        </CardFooter>
      </Card>
      <Card key={i} className={{'relative border-primary shadow-lg scale-[1.02]'}}>
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Popular</Badge>
        <CardHeader className="text-center">
          <CardTitle>iPhone 16 Pro</CardTitle>
          <CardDescription></CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold">1199</span>
            
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3"></ul>
        </CardContent>
        <CardFooter className="flex-col">
          <Button className="w-full" variant={"default"} asChild>
            <a href="#">Get started</a>
          </Button>
        </CardFooter>
      </Card>
      <Card key={i} className={''}>
        
        <CardHeader className="text-center">
          <CardTitle>Galaxy S25 Ultra</CardTitle>
          <CardDescription></CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold">1299</span>
            
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3"></ul>
        </CardContent>
        <CardFooter className="flex-col">
          <Button className="w-full" variant={"outline"} asChild>
            <a href="#">Get started</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Questions before you buy</h2></div>

    <div className="mt-12 max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-0">
          <AccordionTrigger>What happens if I change my mind?</AccordionTrigger>
          <AccordionContent>You have 30 days from delivery to return the device. We cover return shipping.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer carrier deals?</AccordionTrigger>
          <AccordionContent>No. We sell unlocked devices only. You choose your own carrier after purchase.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How long does setup take?</AccordionTrigger>
          <AccordionContent>Most buyers finish setup in under 20 minutes with our specialist on the call.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I trade in my old phone?</AccordionTrigger>
          <AccordionContent>Yes. Submit photos after purchase and receive a credit within 5 business days.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
      <CardContent className="p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
        
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to upgrade?</h2>
        <p className="text-lg text-muted-foreground max-w-xl">Join 14,800 customers who chose transparent pricing and real support.</p>
        
      </CardContent>
    </Card>
  </div>
</section>
    </>
  )
}
