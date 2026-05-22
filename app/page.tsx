import { type Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CardContent } from "@/components/ui/cardcontent"
import { CardFooter } from "@/components/ui/cardfooter"
import { Avatar } from "@/components/ui/avatar"
import { AvatarFallback } from "@/components/ui/avatarfallback"
import { CardHeader } from "@/components/ui/cardheader"
import { CardTitle } from "@/components/ui/cardtitle"
import { CardDescription } from "@/components/ui/carddescription"
import { Badge } from "@/components/ui/badge"
import { Accordion } from "@/components/ui/accordion"
import { AccordionItem } from "@/components/ui/accordionitem"
import { AccordionTrigger } from "@/components/ui/accordiontrigger"
import { AccordionContent } from "@/components/ui/accordioncontent"

export const metadata: Metadata = {
  title: "other — Premium Flagship Phones & Fast Delivery",
  description: "Discover curated flagship smartphones from Apple, Samsung, Google, and Sony. Transparent pricing, expert support, and 2-day shipping.",
}

export default function HomePage() {
  return (
    <>
<section className="relative px-4 py-24 sm:py-32 lg:py-40 overflow-hidden">
  <div className="absolute inset-0 bg-grid opacity-30" />
  <div className="relative mx-auto max-w-4xl flex flex-col items-center text-center gap-8">
    <div className="max-w-3xl"><p className="text-muted-foreground max-w-2xl">Shop the latest iPhone, Galaxy, Pixel, and Xperia models with transparent pricing and expert guidance.</p></div>
    <div className="flex flex-wrap gap-4"><Button variant="outline" size="lg" asChild><a href="/compare">Compare models</a></Button></div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
      <div key={i} className="text-center">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">42,800+</div>
        <div className="text-sm text-muted-foreground mt-1">Phones shipped last month</div>
      </div>
      <div key={i} className="text-center">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">4.98</div>
        <div className="text-sm text-muted-foreground mt-1">Average customer rating</div>
      </div>
      <div key={i} className="text-center">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">2days</div>
        <div className="text-sm text-muted-foreground mt-1">Day delivery guarantee</div>
      </div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><p className="text-muted-foreground max-w-2xl">Every device is inspected, photographed, and backed by our 30-day return promise.</p></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          
          
          <h3 className="text-lg font-semibold mb-2">Verified battery health</h3>
          <p className="text-sm text-muted-foreground">Every phone ships with 85%+ battery capacity and full diagnostic report.</p>
        </CardContent>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          
          
          <h3 className="text-lg font-semibold mb-2">Price-match guarantee</h3>
          <p className="text-sm text-muted-foreground">Find a lower price within 7 days and we refund the difference plus 10%.</p>
        </CardContent>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          
          
          <h3 className="text-lg font-semibold mb-2">Same-day expert support</h3>
          <p className="text-sm text-muted-foreground">Real humans answer within 4 minutes. No chatbots, no scripted replies.</p>
        </CardContent>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6 lg:p-8">
          
          
          <h3 className="text-lg font-semibold mb-2">Unlocked &amp; carrier-ready</h3>
          <p className="text-sm text-muted-foreground">All devices work on every major US carrier with free SIM kit included.</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <p className="text-sm leading-relaxed"></p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 flex items-center gap-3">
          <Avatar><AvatarFallback>U</AvatarFallback></Avatar>
          <div>
            <div className="text-sm font-medium"></div>
            
          </div>
        </CardFooter>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <p className="text-sm leading-relaxed"></p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 flex items-center gap-3">
          <Avatar><AvatarFallback>U</AvatarFallback></Avatar>
          <div>
            <div className="text-sm font-medium"></div>
            
          </div>
        </CardFooter>
      </Card>
      <Card key={i} className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <p className="text-sm leading-relaxed"></p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 flex items-center gap-3">
          <Avatar><AvatarFallback>U</AvatarFallback></Avatar>
          <div>
            <div className="text-sm font-medium"></div>
            
          </div>
        </CardFooter>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><p className="text-muted-foreground max-w-2xl">Flexible financing and protection options that grow with your device.</p></div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start max-w-5xl mx-auto">
      <Card key={i} className={''}>
        
        <CardHeader className="text-center">
          <CardTitle>Pay in full</CardTitle>
          <CardDescription></CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold">0</span>
            
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
      <Card key={i} className="relative border-primary shadow-lg scale-[1.02]">
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Popular</Badge>
        <CardHeader className="text-center">
          <CardTitle>Finance 0% APR</CardTitle>
          <CardDescription></CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold">24</span>
            
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
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"></div>

    <div className="mt-12 max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-0">
          <AccordionTrigger>Do phones come with a warranty?</AccordionTrigger>
          <AccordionContent>All devices include a 12-month limited warranty plus 30-day return window. Extended coverage available at checkout.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I trade in my current phone?</AccordionTrigger>
          <AccordionContent>Yes. Get an instant quote online and receive credit within 48 hours after we inspect the device.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Which carriers work with these phones?</AccordionTrigger>
          <AccordionContent>Every phone is carrier-unlocked and compatible with AT&amp;T, Verizon, T-Mobile, and US Cellular.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How fast is delivery really?</AccordionTrigger>
          <AccordionContent>Orders placed before 2pm ship same day. 95% of customers receive devices within 48 hours.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
      <CardContent className="p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
        
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight"></h2>
        <p className="text-lg text-muted-foreground max-w-xl">Browse our full catalog or speak with a specialist about the right device for you.</p>
        <div className="flex flex-wrap gap-4"><Button variant="outline" size="lg" asChild><a href="/support">Talk to sales</a></Button></div>
      </CardContent>
    </Card>
  </div>
</section>
    </>
  )
}
