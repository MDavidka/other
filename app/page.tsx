import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default async function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center bg-gradient-to-r from-primary to-blue-600 overflow-hidden">
        <img
          src="https://placehold.co/1920x1080.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 p-4 md:p-8 max-w-3xl mx-auto text-white">
          <h1 className={cn("text-4xl md:text-6xl font-bold mb-4 leading-tight")}>
            Experience the Future in Your Hand
          </h1>
          <p className={cn("text-lg md:text-xl mb-8")}>
            Discover our innovative smartphones designed for unparalleled performance and stunning aesthetics.
          </p>
          <Button size="lg" className={cn("bg-white text-primary hover:bg-gray-100")}>
            Explore Devices
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container py-16">
        <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-12")}>Our Latest Innovations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className={cn("flex flex-col")}>
            <CardHeader>
              <img src="https://placehold.co/600x400.png" alt="Product 1" className={cn("rounded-md mb-4")} />
              <CardTitle>The Apex Pro</CardTitle>
              <CardDescription>Unleash ultimate power and creativity.</CardDescription>
            </CardHeader>
            <CardContent className={cn("flex-grow")}>
              <p className={cn("text-muted-foreground")}>
                Featuring a revolutionary camera system and a blazing-fast processor.
              </p>
            </CardContent>
            <CardFooter>
              <CardAction>
                <Button variant="default">Learn More</Button>
              </CardAction>
            </CardFooter>
          </Card>

          <Card className={cn("flex flex-col")}>
            <CardHeader>
              <img src="https://placehold.co/600x400.png" alt="Product 2" className={cn("rounded-md mb-4")} />
              <CardTitle>The Nova Lite</CardTitle>
              <CardDescription>Sleek design, essential features.</CardDescription>
            </CardHeader>
            <CardContent className={cn("flex-grow")}>
              <p className={cn("text-muted-foreground")}>
                Lightweight and powerful, perfect for everyday use.
              </p>
            </CardContent>
            <CardFooter>
              <CardAction>
                <Button variant="default">Learn More</Button>
              </CardAction>
            </CardFooter>
          </Card>

          <Card className={cn("flex flex-col")}>
            <CardHeader>
              <img src="https://placehold.co/600x400.png" alt="Product 3" className={cn("rounded-md mb-4")} />
              <CardTitle>The Quantum X</CardTitle>
              <CardDescription>Redefining mobile gaming.</CardDescription>
            </CardHeader>
            <CardContent className={cn("flex-grow")}>
              <p className={cn("text-muted-foreground")}>
                Immersive display and advanced cooling for peak gaming performance.
              </p>
            </CardContent>
            <CardFooter>
              <CardAction>
                <Button variant="default">Learn More</Button>
              </CardAction>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-12")}>What Our Customers Say</h2>
          <Carousel className={cn("w-full max-w-3xl mx-auto")}>
            <CarouselContent>
              <CarouselItem>
                <Card className={cn("p-6 text-center")}>
                  <CardContent>
                    <p className={cn("text-lg italic mb-4")}>
                      &quot;Absolutely love my new Phone Brand device! The camera is incredible and the battery life is outstanding.&quot;
                    </p>
                    <p className={cn("font-semibold")}>— Jane Doe</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className={cn("p-6 text-center")}>
                  <CardContent>
                    <p className={cn("text-lg italic mb-4")}>
                      &quot;The performance is unmatched. Switching from my old phone was the best decision I made.&quot;
                    </p>
                    <p className={cn("font-semibold")}>— John Smith</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className={cn("p-6 text-center")}>
                  <CardContent>
                    <p className={cn("text-lg italic mb-4")}>
                      &quot;Sleek design and intuitive software. Phone Brand truly delivers a premium experience.&quot;
                    </p>
                    <p className={cn("font-semibold")}>— Emily White</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container py-16 text-center">
        <Card className={cn("p-8 md:p-12 bg-primary text-primary-foreground")}>
          <CardHeader>
            <CardTitle className={cn("text-3xl md:text-4xl font-bold mb-4")}>Join the Future of Mobile</CardTitle>
            <CardDescription className={cn("text-lg text-primary-foreground/90")}>
              Sign up for our newsletter to get the latest updates, exclusive offers, and more.
            </CardDescription>
          </CardHeader>
          <CardFooter className={cn("justify-center pt-6")}>
            <Button size="lg" variant="secondary" className={cn("hover:bg-secondary/80")}>
              Sign Up Now
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
app/page.tsx[usedfor]Home page[usedfor]