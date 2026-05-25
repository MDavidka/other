"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, CheckCircle, Users, Zap, Shield, Star } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and SOC 2 Type II compliance.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration tools with role-based access control and audit logs.",
  },

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechCorp",
    avatar: "https://placehold.co/64x64.png",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "VP Engineering at StartupXYZ",
    avatar: "https://placehold.co/64x64.png",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Product Manager at ScaleUp",
    avatar: "https://placehold.co/64x64.png",
    rating: 5,
  },

const pricingTiers = [
  {
    name: "Starter",
    price: "29",
    features: ["Up to 5 team members", "10GB storage", "Basic analytics", "Email support"],
    popular: false,
  },
  {
    name: "Professional",
    price: "79",
    features: ["Up to 25 team members", "100GB storage", "Advanced analytics", "Priority support", "API access"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "199",
    features: ["Unlimited team members", "1TB storage", "Custom integrations", "Dedicated support", "SLA guarantee"],
    popular: false,
  },

const faqs = [
  {
    question: "How quickly can I get started?",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption at rest and in transit. All data is stored in SOC 2 Type II certified data centers with 99.99% uptime SLA.",
  },
  {
    question: "Can I integrate with my existing tools?",
    answer: "Yes! We offer native integrations with Slack, GitHub, Jira, Figma, and 50+ other popular tools. Our REST API and webhooks support custom integrations.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 email support for all plans. Professional and Enterprise customers get priority support with 1-hour response times and dedicated account managers.",
  },

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [selectedPlan, setSelectedPlan] = React.useState<string | null>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success("Message sent successfully!", {
    })
    
    form.reset()
    setIsSubmitting(false)
  }

  const handleGetStarted = (planName: string) => {
    setSelectedPlan(planName)
    toast.info(`Starting ${planName} plan signup...`)
    // In production, this would redirect to signup flow
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6">
              Now with AI-powered insights
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Build faster.<br />Ship better.
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              The complete platform for modern teams. Collaborate, ship, and scale with confidence using our production-ready infrastructure.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                Get started free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="text-base px-8">
                    Watch demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Product Demo</DialogTitle>
                    <DialogDescription>
                      See how our platform helps teams ship faster
                    </DialogDescription>
                  </DialogHeader>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Zap className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Demo video would play here</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">No credit card required • 14-day free trial</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 border-b">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to succeed</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for modern teams who want to move fast without breaking things.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Loved by teams worldwide</h2>
            <p className="mt-4 text-lg text-muted-foreground">Join thousands of teams who trust us with their most important work.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6">"{testimonial.content}"</blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-muted-foreground">Choose the plan that fits your team. Upgrade or downgrade anytime.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={cn(
                "relative border-2 transition-all hover:shadow-lg",
                tier.popular ? "border-primary shadow-lg scale-[1.02]" : "border-border"
              )}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">${tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-8" 
                    variant={tier.popular ? "default" : "outline"}
                    onClick={() => handleGetStarted(tier.name)}
                  >
                    Get started with {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30 border-t">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Frequently asked questions</h2>
            <p className="mt-4 text-muted-foreground">Everything you need to know about our platform.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions? Our team is here to help you get started.
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or ask any questions..." 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to get started?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Join thousands of teams building the future with our platform.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-base px-8"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start your free trial
            <ArrowRight className="ml-2 h-4 w-4" />