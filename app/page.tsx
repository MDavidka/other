import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Phone } from '@/lib/types'
import { cn } from '@/lib/utils'
import { Star, ArrowRight, Truck, Shield, Award } from 'lucide-react'

const featuredPhones: Phone[] = [
  {
    id: '1',
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    price: 1199,
    originalPrice: 1299,
    image: 'https://placehold.co/800x600.png',
    specs: {
      processor: 'A18 Pro',
      ram: '8GB',
      storage: '128GB',
      camera: '48MP + 48MP + 12MP',
      battery: '3582mAh',
      os: 'iOS 18'
    },
    inStock: true,
    rating: 4.9,
    reviewCount: 1247,
    colors: ['Natural Titanium', 'Blue Titanium', 'Black Titanium', 'White Titanium'],
    category: 'flagship'
  },
  {
    id: '2',
    name: 'Galaxy S25 Ultra',
    brand: 'Samsung',
    price: 1299,
    originalPrice: 1399,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.8" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 4',
      ram: '12GB',
      storage: '256GB',
      camera: '200MP + 50MP + 12MP + 10MP',
      battery: '5000mAh',
      os: 'Android 15'
    },
    inStock: true,
    rating: 4.8,
    reviewCount: 892,
    colors: ['Titanium Black', 'Titanium Gray', 'Titanium Silver', 'Titanium Blue'],
    category: 'flagship'
  },
  {
    id: '3',
    name: 'Pixel 9 Pro',
    brand: 'Google',
    price: 999,
    originalPrice: 1099,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.3" LTPO OLED',
      processor: 'Google Tensor G4',
      ram: '16GB',
      storage: '128GB',
      camera: '50MP + 48MP + 48MP',
      battery: '4700mAh',
      os: 'Android 15'
    },
    inStock: true,
    rating: 4.7,
    reviewCount: 634,
    colors: ['Obsidian', 'Porcelain', 'Hazel', 'Rose Quartz'],
    category: 'flagship'
  }

const stats = [
  { label: 'Happy Customers', value: '50K+' },
  { label: 'Phones Sold', value: '125K+' },
  { label: 'Avg Rating', value: '4.8' },
  { label: 'Countries', value: '42' }

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free 2-day shipping on all orders over $500'
  },
  {
    icon: Shield,
    title: '2-Year Warranty',
  },
  {
    icon: Award,
    title: 'Price Match',
  }

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              New Arrivals 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Premium Smartphones.<br />Expertly Curated.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Discover the latest flagship, mid-range, and budget smartphones with expert reviews and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="/products">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <a href="#featured">Explore Collection</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Phones Section */}
      <section id="featured" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <Badge variant="outline" className="mb-4">Featured</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Latest Flagships</h2>
              <p className="text-muted-foreground mt-2 text-lg">Handpicked premium devices from top brands</p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0" asChild>
              <a href="/products">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPhones.map((phone) => (
              <Card key={phone.id} className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={phone.image} 
                    alt={phone.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {!phone.inStock && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                  )}
                  {phone.originalPrice && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">Save ${phone.originalPrice - phone.price}</Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{phone.brand}</p>
                      <CardTitle className="text-xl mt-1">{phone.name}</CardTitle>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${phone.price}</div>
                      {phone.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">${phone.originalPrice}</div>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "h-4 w-4", 
                            i < Math.floor(phone.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                          )} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {phone.rating} ({phone.reviewCount} reviews)
                    </span>
                  </div>

                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>{phone.specs.display}</div>
                    <div>{phone.specs.processor} • {phone.specs.ram} RAM</div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="flex gap-2 w-full">
                    <Button className="flex-1" asChild>
                      <a href={`/products/${phone.id}`}>View Details</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/products">Quick View</a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-20 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose PhoneStore?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We deliver exceptional service and premium products backed by industry-leading guarantees.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-primary text-primary-foreground rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Upgrade?</h2>
            <p className="text-lg mb-8 opacity-90">
              Browse our complete catalog of premium smartphones and find your perfect match.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <a href="/products">
                Browse All Phones <ArrowRight className="ml-2 h-5 w-5" />
              </a>