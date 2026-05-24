import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Menu, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Nexlify | Premium Smartphones",
  description: "Discover the latest premium smartphones from Apple, Samsung, Google and more. Shop with confidence at Nexlify.",
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [cartCount, setCartCount] = React.useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Load cart count from localStorage
  React.useEffect(() => {
    const updateCartCount = () => {
      try {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          const cartItems = JSON.parse(savedCart);
          const count = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
          setCartCount(count);
        } else {
          setCartCount(0);
        }
      } catch (error) {
        setCartCount(0);
      }
    };

    updateCartCount();

    // Listen for storage changes
    window.addEventListener("storage", updateCartCount);
    
    // Custom event for cart updates within the same tab
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Phones", href: "/phones" },
    { title: "Deals", href: "/deals" },
    { title: "Support", href: "/support" },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <div className="relative flex min-h-screen flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="font-bold text-xl tracking-tight">Nexlify</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex">
                <NavigationMenu>
                  <NavigationMenuList>
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.title}>
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            {item.title}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center gap-2">
                {/* Cart Button */}
                <Link href="/cart">
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {cartCount > 0 && (
                      <Badge 
                        variant="destructive" 
                        className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px]"
                      >
                        {cartCount > 9 ? "9+" : cartCount}
                      </Badge>
                    )}
                  </Button>
                </Link>

                {/* Mobile Menu */}
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                    <div className="flex flex-col gap-6 pt-6">
                      <div className="flex items-center gap-2 px-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                          <Phone className="h-5 w-5" />
                        </div>
                        <span className="font-bold text-xl">Nexlify</span>
                      </div>

                      <div className="flex flex-col gap-1">
                        {navItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center px-4 py-3 text-sm font-medium rounded-md hover:bg-accent"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>

                      <div className="border-t pt-4 px-2">
                        <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                          <Button variant="outline" className="w-full justify-start gap-2">
                            <ShoppingCart className="h-4 w-4" />
                            View Cart
                            {cartCount > 0 && (
                              <Badge variant="secondary" className="ml-auto">
                                {cartCount}
                              </Badge>
                            )}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t bg-muted/40">
            <div className="container px-4 py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="font-semibold text-lg">Nexlify</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Premium smartphones for the modern world.
                  </p>