import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { SiteConfig, NavigationLink } from "@/lib/types";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Import global styles
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Phone Brand - Cutting-Edge Mobile Technology",
  description: "Discover the latest smartphones with innovative features and sleek designs from Phone Brand.",
};

const siteConfig: SiteConfig = {
  name: "Phone Brand",
  description: "Your destination for the latest in mobile technology.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Support",
      href: "/support",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          "dark" // Apply dark mode class globally
        )}
      >
        <div className={cn("relative flex min-h-screen flex-col")}>
          {/* Header */}
          <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60")}>
            <div className={cn("container flex h-16 items-center justify-between px-4 md:px-8")}>
              <Link href="/" className={cn("flex items-center space-x-2")}>
                <span className={cn("inline-block font-bold text-xl")}>{siteConfig.name}</span>
              </Link>

              {/* Desktop Navigation */}
              <NavigationMenu className={cn("hidden md:flex")}>
                <NavigationMenuList>
                  {siteConfig.mainNav.map((item: NavigationLink) => (
                    <NavigationMenuItem key={item.href}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Mobile Navigation (Sheet) */}
              <Sheet>
                <SheetTrigger asChild className={cn("md:hidden")}>
                  <Button variant="ghost" size="icon">
                    <Menu className={cn("h-6 w-6")} />
                    <span className={cn("sr-only")}>Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className={cn("w-[250px] sm:w-[300px]")}>
                  <SheetHeader>
                    <SheetTitle>{siteConfig.name}</SheetTitle>
                  </SheetHeader>
                  <nav className={cn("flex flex-col gap-4 mt-6")}>
                    {siteConfig.mainNav.map((item: NavigationLink) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn("text-lg font-medium hover:text-primary transition-colors")}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </header>

          {/* Main Content */}
          <main className={cn("flex-1")}>{children}</main>

          {/* Footer */}
          <footer className={cn("border-t bg-background py-6 text-center text-sm text-muted-foreground")}>
            <div className={cn("container")}>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </div>