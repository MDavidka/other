"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Smartphone,
  Mail,
  Twitter,
  Instagram,
  Youtube,
  Github,
  ShieldCheck,
  Truck,
  RotateCcw,
  Zap,
} from "lucide-react";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubscribed(true);
    toast.success("Subscribed successfully! Use promo code 'LAUNCH10' for 10% off your purchase!");
    setEmail("");
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-300">
      
      {/* Trust Badges Bar */}
      <div className="border-b border-slate-900 bg-slate-950/50">
        <div className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-900 text-cyan-400">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Same-Day Delivery</h4>
              <p className="text-xs text-slate-500">Free on orders over $500</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-900 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">2-Year Warranty</h4>
              <p className="text-xs text-slate-500">Full device protection plan</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-900 text-cyan-400">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">30-Day Returns</h4>
              <p className="text-xs text-slate-500">No questions asked return</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-900 text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Trade-In Credit</h4>
              <p className="text-xs text-slate-500">Instant value for older tech</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950">
              <Smartphone className="w-5 h-5" />
            </div>
            <span className="font-sans font-extrabold bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
              Aero<span className="text-cyan-400">Phone</span>
            </span>
          </Link>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Experience the future of mobile connectivity. AeroPhone delivers next-generation, high-performance smartphones engineered with titanium alloy structures, dynamic LTPO displays, and quantum AI-assisted camera systems.
          </p>
          <div className="flex items-center gap-3.5 pt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 rounded-lg transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 rounded-lg transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 rounded-lg transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 rounded-lg transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links: Catalog */}
        <div className="space-y-3.5">
          <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest text-cyan-400">
            Smartphones
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/phones/aero-15-pro" className="hover:text-white transition-colors">Aero 15 Pro</Link>
            </li>
            <li>
              <Link href="/phones/aero-15-air" className="hover:text-white transition-colors">Aero 15 Air</Link>
            </li>
            <li>
              <Link href="/phones/quantum-fold-x" className="hover:text-white transition-colors">Quantum Fold X</Link>
            </li>
            <li>
              <Link href="/phones" className="hover:text-white transition-colors">All Devices</Link>
            </li>
          </ul>
        </div>

        {/* Links: Programs & Support */}
        <div className="space-y-3.5">
          <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest text-cyan-400">
            Programs
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/trade-in" className="hover:text-white transition-colors">Trade-In Estimator</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">Support Center</Link>
            </li>
            <li>
              <Link href="/contact#faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link>
            </li>
            <li>
              <Link href="/phones?filter=flagship" className="hover:text-white transition-colors">Flagship Series</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-4">
          <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest text-cyan-400">
            Join the Matrix
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Subscribe for exclusive priority drops, firmware updates, and receive a <strong className="text-emerald-400">10% discount code</strong> instantly.
          </p>
          
          {subscribed ? (
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800 text-emerald-400 text-xs">
              <p className="font-bold">Subscription Confirmed!</p>
              <p className="mt-1">Use code <span className="font-mono text-white bg-emerald-500/20 px-1 py-0.5 rounded">LAUNCH10</span> at checkout for 10% off your smartphone.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500 text-xs"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs">
                Get 10% Discount Code
              </Button>
            </form>
          )}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 py-6 bg-slate-950">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} AeroPhone Technologies Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:underline">Privacy Policy</Link>
            <Link href="/contact" className="hover:underline">Terms of Service</Link>
            <Link href="/contact" className="hover:underline">Warranty Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
