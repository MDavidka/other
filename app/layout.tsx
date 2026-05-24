import { Metadata } from 'next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Phone Store',
  description: 'Browse and purchase the latest phones with ease.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <NavBar />
          <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

function NavBar() {
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }

  return (
    <nav className="bg-muted border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Phone Store
        </Link>
        <div className="flex gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={pathname === link.href ? 'default' : 'ghost'}
                size="sm"
                className={cn(
                  pathname === link.href && 'bg-primary text-primary-foreground'
                )}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-muted border-t border-border py-4">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Phone Store. All rights reserved.
      </div>
    </footer>
  )
}

app/layout.tsx[usedfor]Root layout wrapping the application with theme, toast, navigation, and footer[/usedfor]