import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Phone Brand - Innovative Mobile Devices",
  description: "Discover the latest in mobile technology with our cutting-edge smartphones and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {/* Placeholder for Header component */}
        <header className="sticky top-0 z-40 w-full border-b bg-background">
          <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <nav className="flex items-center space-x-4">
              <a href="/" className="text-lg font-bold">Phone Brand</a>
              {/* Navigation menu items will go here */}
            </nav>
            <div className="flex flex-1 items-center justify-end space-x-4">
              {/* User actions, theme toggle, etc. */}
            </div>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        {/* Placeholder for Footer component */}
        <footer className="border-t bg-background py-6 md:px-8 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by Acme Inc. &copy; {new Date().getFullYear()}
            </p>