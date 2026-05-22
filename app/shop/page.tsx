import { type Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Shop Phones | Latest Smartphones, Smartwatches & Accessories",
  description: "Browse our complete catalog of mobile phones, smartwatches, headphones, and accessories. Filter by brand, price, and features.",
}

export default function ShopPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Extensive Collection</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Explore Our Full Mobile Catalog</h2>
        <p className="text-muted-foreground max-w-2xl">Dive into our comprehensive selection of the latest smartphones, wearables, and accessories. Your ideal device awaits.</p></div>
        <div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="#products">Filter &amp; Compare</a></Button></div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Browse &amp; Discover</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Find Your Perfect Match</h2>
    <p className="text-muted-foreground max-w-2xl">Filter by brand, features, and price to quickly locate the device that fits your lifestyle and budget.</p></div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/iphone-15-pro.webp" alt="iPhone 15 Pro" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">iPhone 15 Pro</h3>
          <p className="text-sm text-muted-foreground mt-1">$999</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/galaxy-z-fold5.webp" alt="Samsung Galaxy Z Fold5" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Samsung Galaxy Z Fold5</h3>
          <p className="text-sm text-muted-foreground mt-1">$1799</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/pixel-fold.webp" alt="Google Pixel Fold" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Google Pixel Fold</h3>
          <p className="text-sm text-muted-foreground mt-1">$1699</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/oneplus-12.webp" alt="OnePlus 12" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">OnePlus 12</h3>
          <p className="text-sm text-muted-foreground mt-1">$799</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/apple-watch-s9.webp" alt="Apple Watch Series 9" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Apple Watch Series 9</h3>
          <p className="text-sm text-muted-foreground mt-1">$399</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/sony-xm5.webp" alt="Sony WH-1000XM5" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Sony WH-1000XM5</h3>
          <p className="text-sm text-muted-foreground mt-1">$349</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/belkin-charger.webp" alt="Belkin BoostCharge Pro" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Belkin BoostCharge Pro</h3>
          <p className="text-sm text-muted-foreground mt-1">$129</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
      <Card key={i} className="group overflow-hidden">
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="/images/logitech-mx-mini.webp" alt="Logitech MX Keys Mini" className="object-cover w-full h-full group-hover:scale-105 transition-transform" loading="lazy" />
        </div>
        <CardContent className="p-4">
          
          <h3 className="font-medium truncate">Logitech MX Keys Mini</h3>
          <p className="text-sm text-muted-foreground mt-1">$99</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button variant="outline" size="sm" className="w-full">View</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Simple Steps</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Your Seamless Buying Journey</h2>
    <p className="text-muted-foreground max-w-2xl">We've streamlined the process to make finding and purchasing your new phone effortless and enjoyable.</p></div>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">1</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 01</Badge>
          <h3 className="font-semibold text-lg">Explore &amp; Compare</h3>
          <p className="text-sm text-muted-foreground mt-1">Browse our extensive catalog, use filters, and compare specifications to narrow down your choices.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">2</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 02</Badge>
          <h3 className="font-semibold text-lg">Personalized Advice</h3>
          <p className="text-sm text-muted-foreground mt-1">Connect with our experts via chat or phone for tailored recommendations and answers to all your questions.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">3</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 03</Badge>
          <h3 className="font-semibold text-lg">Secure Checkout</h3>
          <p className="text-sm text-muted-foreground mt-1">Complete your purchase with confidence using our encrypted payment system and flexible financing options.</p>
        </div>
      </div>
      <div key={i} className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary">4</div>
        <div>
          <Badge variant="secondary" className="mb-2">Step 04</Badge>
          <h3 className="font-semibold text-lg">Fast Delivery</h3>
          <p className="text-sm text-muted-foreground mt-1">Receive your new device at your doorstep, often within 2-3 business days, with real-time tracking.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><Badge variant="secondary" className="mb-4">Common Questions</Badge>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Answers to Your Shopping Queries</h2>
    <p className="text-muted-foreground max-w-2xl">Find quick answers to the most frequently asked questions about our products, orders, and services.</p></div>

    <div className="mt-12 max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-0">
          <AccordionTrigger>What is your return policy for mobile devices?</AccordionTrigger>
          <AccordionContent>We offer a 30-day hassle-free return policy for all devices from the date of purchase. Devices must be in original condition with all packaging and accessories. A 15% restocking fee may apply for opened items.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer financing options for phone purchases?</AccordionTrigger>
          <AccordionContent>Yes, we partner with reputable financing providers to offer flexible payment plans. You can check your eligibility and apply during the checkout process.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How long does shipping typically take?</AccordionTrigger>
          <AccordionContent>Standard shipping usually takes 3-5 business days. Expedited options are available for 1-2 business day delivery. You'll receive a tracking number once your order ships.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Are your phones unlocked and compatible with all carriers?</AccordionTrigger>
          <AccordionContent>Most of our phones are factory unlocked and compatible with major GSM and CDMA carriers. Please check the product description for specific carrier compatibility details.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Can I trade in my old phone for credit?</AccordionTrigger>
          <AccordionContent>Currently, we do not offer a direct trade-in program. However, we can recommend trusted partners who provide competitive trade-in values for used devices.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</section>
    </>
  )
}
