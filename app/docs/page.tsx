import Link from "next/link"
import { ArrowUpRight, Settings, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation — other",
  description: "How to deploy, connect domains, and manage projects on other.",
}

export default function DocsPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#">Get started</Link></Button>
          
        </div>
        
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams who care about the details</h2>
          
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Quickstart</h3>
            <p className="text-sm text-muted-foreground">Deploy the first site in 2 minutes.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Domains</h3>
            <p className="text-sm text-muted-foreground">Set up custom domains and SSL.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Settings className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Build settings</h3>
            <p className="text-sm text-muted-foreground">Configure builds, headers, and redirects.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Analytics</h3>
            <p className="text-sm text-muted-foreground">Track traffic, performance, and errors.</p>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">From the blog</h2>
        
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden border-border/60">
            <div className="aspect-[16/10] w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-primary">CLI · </p>
              <p className="text-lg font-semibold leading-snug">CLI commands explained</p>
              <p className="text-sm text-muted-foreground">Every command you need to know.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-border/60">
            <div className="aspect-[16/10] w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-primary">Domains · </p>
              <p className="text-lg font-semibold leading-snug">How to add a custom domain</p>
              <p className="text-sm text-muted-foreground">SSL, DNS, and root domains explained.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-border/60">
            <div className="aspect-[16/10] w-full bg-gradient-to-br from-accent/30 via-primary/10 to-background"></div>
            <CardContent className="space-y-2 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-primary">Deployments · </p>
              <p className="text-lg font-semibold leading-snug">Rollback a deployment</p>
              <p className="text-sm text-muted-foreground">Restore previous versions instantly.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    </>
  )
}
