import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default async function Page(): Promise<JSX.Element> {
  return (
    <section className={cn('flex flex-col items-center justify-center gap-12 py-16')}>
      {/* Hero */}
      <div className={cn('w-full max-w-4xl text-center space-y-6')}>
        <h1 className={cn('text-4xl font-bold tracking-tight sm:text-5xl')}>Build Your Next App with Shadcn UI</h1>
        <p className={cn('mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300')}>
          A production-ready starter kit powered by Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.
        </p>
        <Button variant="default" size="lg" className={cn('mt-4')}>
          Get Started <ArrowRight className={cn('ml-2 h-4 w-4')} />
        </Button>
      </div>

      {/* Features */}
      <div className={cn('grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3')}>
        {[
          {
            title: 'Component Library',
            description:
              'Ready-to-use UI components built with Radix UI and Tailwind CSS, fully accessible and themeable.',
          },
          {
            title: 'TypeScript First',
            description:
              'Strict typing across the entire codebase ensures safety and developer confidence.',
          },
          {
            title: 'Dark Mode',
            description:
              'Automatic dark mode support with a simple class strategy and custom tokens.',
          },
        ].map((feature, idx) => (
          <Card key={idx} className={cn('h-full')}>
            <CardHeader>
              <CardTitle className={cn('text-xl')}>{feature.title}</CardTitle>
              <CardDescription className={cn('text-gray-600 dark:text-gray-300')}>
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className={cn('text-center space-y-4')}>
        <h2 className={cn('text-2xl font-semibold')}>Ready to dive in?</h2>
        <Button variant="outline" size="lg" className={cn('mx-auto')}>
          View Documentation
        </Button>
      </div>
    </section>
  );
}

app/page.tsx[usedfor]homepage[/usedfor]