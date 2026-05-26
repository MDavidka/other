"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { NavItem } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Placeholder for site configuration. In a real app, this would come from a separate config file.
const siteConfig = {
  name: "Phone Store",
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
      title: "About",
      href: "/about", // Placeholder link
    },
    {
      title: "Contact",
      href: "/contact", // Placeholder link
    },
  ] as NavItem[],
};

export function MainNav() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Site Title/Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {siteConfig.mainNav.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-base",
                      pathname === item.href
                        ? "font-semibold text-primary"
                        : "text-foreground/60 hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mr-2 h-8 w-8"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold text-lg">
                      {siteConfig.name}
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10">
                <div className="flex flex-col space-y-3">
                  {siteConfig.mainNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === item.href
                          ? "text-primary"
                          : "text-foreground/60"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="ml-auto h-8 w-8"
        >
          {theme === "dark" ? (