import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className={cn('min-h-screen flex flex-col items-center justify-center px-4 py-12')}>
      <section className={cn('max-w-3xl text-center space-y-6')}>
        <h1 className={cn('text-4xl sm:text-5xl font-bold')}>Welcome to My App</h1>
        <p className={cn('text-lg sm:text-xl text-muted-foreground')}>A production-ready Next.js application using shadcn/ui and Tailwind CSS.</p>
        <Button variant="default" size="lg" className={cn('mt-4')} asChild>
          <a href="#features">Explore Features</a>
        </Button>
      </section>

      <section id="features" className={cn('mt-16 w-full max-w-5xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3')}>
        <Card className={cn('border-0 shadow-lg')}>
          <CardHeader>
            <CardTitle>Feature One</CardTitle>
            <CardDescription>Describe the first feature with concise details.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className={cn('text-muted-foreground')}>This feature helps you achieve X, Y, and Z efficiently.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" asChild>
              <a href="/feature-one">Learn More</a>
            </Button>
          </CardFooter>
        </Card>

        <Card className={cn('border-0 shadow-lg')}>
          <CardHeader>
            <CardTitle>Feature Two</CardTitle>
            <CardDescription>Highlight the second feature's benefits.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className={cn('text-muted-foreground')}>This feature streamlines your workflow and saves time.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" asChild>
              <a href="/feature-two">Learn More</a>
            </Button>
          </CardFooter>
        </Card>

        <Card className={cn('border-0 shadow-lg')}>
          <CardHeader>
            <CardTitle>Feature Three</CardTitle>
            <CardDescription>Explain the third feature's impact.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className={cn('text-muted-foreground')}>This feature enhances collaboration across teams.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" asChild>
              <a href="/feature-three">Learn More</a>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className={cn('mt-16 text-center')}>
        <h2 className={cn('text-2xl font-semibold')}>Get Started Today</h2>
        <p className={cn('text-muted-foreground mt-2')}>Join us and experience the power of a well-structured, production-ready app.</p>
        <Button variant="primary" size="lg" className={cn('mt-6')} asChild>
          <a href="/signup">
            Sign Up <ArrowRight className={cn('ml-2 h-4 w-4')} />
          </a>