"use client";

import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Send,
} from "lucide-react";

export default function ContactSupportPage() {
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [department, setDepartment] = useState("General Support");
  const [message, setMessage] = useState("");

  // Submission State
  const [loading, setLoading] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    success: boolean;
    ticketId: string;
    details: {
      name: string;
      email: string;
      subject: string;
      department: string;
      timestamp: string;
    };
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all mandatory fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          department,
          message,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmittedTicket(data);
        toast.success(`Ticket ${data.ticketId} created successfully!`);
        // clear inputs
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error(data.error || "Failed to submit support ticket.");
      }
    } catch (error) {
      toast.error("Network error submitting contact request.");
    } finally {
      setLoading(false);
    }
  };

  const storeLocations = [
    {
      city: "Neo San Francisco",
      address: "100 Cyberpunk Plaza, Level 2",
      phone: "+1 (415) 555-0199",
      hours: "Mon - Sat: 9:00 AM - 9:00 PM, Sun: 11:00 AM - 6:00 PM",
    },
    {
      city: "Aero Seattle",
      address: "808 Quantum Boulevard",
      phone: "+1 (206) 555-0144",
      hours: "Mon - Sat: 10:00 AM - 8:00 PM, Sun: Noon - 5:00 PM",
    },
    {
      city: "Lumia New York",
      address: "450 Obsidian Avenue, Times Square",
      phone: "+1 (212) 555-0188",
      hours: "Mon - Sun: 8:00 AM - Midnight",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      
      {/* Support Hero */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <Badge className="bg-cyan-500 text-slate-950 font-bold uppercase text-[10px] tracking-widest">
          AeroPhone Customer Care
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">
          How can we help?
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          Have a question about your order, warranty protection, or trade-in valuation? Our dedicated support engineers are available 24/7.
        </p>
      </section>

      {/* Quick Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        
        <Card className="bg-slate-900/30 border border-slate-900 p-6 flex flex-col items-center text-center space-y-3">
          <div className="w-10 h-10 rounded-lg bg-slate-950 text-cyan-400 border border-slate-800 flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">Direct Hotline</h3>
            <p className="font-mono text-xs text-cyan-400 mt-1">1-800-AERO-PHONE</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Toll-free, 24/7 priority support</p>
          </div>
        </Card>

        <Card className="bg-slate-900/30 border border-slate-900 p-6 flex flex-col items-center text-center space-y-3">
          <div className="w-10 h-10 rounded-lg bg-slate-950 text-cyan-400 border border-slate-800 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">Developer Email</h3>
            <p className="font-mono text-xs text-cyan-400 mt-1">support@aerophone.com</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Response within 2 hours guaranteed</p>
          </div>
        </Card>

        <Card className="bg-slate-900/30 border border-slate-900 p-6 flex flex-col items-center text-center space-y-3">
          <div className="w-10 h-10 rounded-lg bg-slate-950 text-cyan-400 border border-slate-800 flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">Live Chat Matrix</h3>
            <p className="font-mono text-xs text-emerald-400 mt-1">Status: Operational</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Instant secure chat in-browser</p>
          </div>
        </Card>

      </div>

      {/* Contact Form & Location Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
        
        {/* Contact Form Column */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="border border-slate-900 bg-slate-900/10 backdrop-blur-md p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-2">Submit a Ticket</h2>
            <p className="text-xs text-slate-400 mb-6">
              Our automated routing system will dispatch your ticket to the correct hardware department.
            </p>

            {submittedTicket ? (
              <div className="p-6 rounded-xl bg-slate-900/50 border border-emerald-800 text-center space-y-4 animate-in zoom-in-95">
                <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-white">Ticket Submitted Successfully</h3>
                  <p className="text-xs text-slate-400">
                    Your reference id is <strong className="font-mono text-cyan-400">{submittedTicket.ticketId}</strong>
                  </p>
                </div>
                <div className="text-left font-mono text-[10px] text-slate-400 p-3 bg-slate-950 rounded border border-slate-800 space-y-1">
                  <p>• Name: {submittedTicket.details.name}</p>
                  <p>• Email: {submittedTicket.details.email}</p>
                  <p>• Subject: {submittedTicket.details.subject}</p>
                  <p>• Department: {submittedTicket.details.department}</p>
                </div>
                <Button
                  onClick={() => setSubmittedTicket(null)}
                  variant="outline"
                  className="border-slate-800 text-white hover:bg-slate-900 text-xs w-full"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase">Your Name</label>
                    <Input
                      type="text"
                      required
                      placeholder="Marcus Sterling"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-slate-900 border-slate-800 text-xs text-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase">Your Email</label>
                    <Input
                      type="email"
                      required
                      placeholder="marcus@aerophone.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-slate-900 border-slate-800 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase">Subject</label>
                    <Input
                      type="text"
                      placeholder="Order tracking, replacement..."
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="bg-slate-900 border-slate-800 text-xs text-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase">Department</label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg h-9 px-3 text-xs focus:ring-1 focus:ring-cyan-500 outline-none"
                    >
                      <option value="General Support">General Support</option>
                      <option value="Billing & Orders">Billing & Orders</option>
                      <option value="Warranty & Replacements">Warranty & Replacements</option>
                      <option value="Trade-In Evaluation">Trade-In Evaluation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">Message</label>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Provide as much technical detail as possible..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-slate-900 border-slate-800 text-xs text-white"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs py-5 gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  {loading ? "Routing Ticket..." : "Submit Support Ticket"}
                </Button>
              </form>
            )}
          </Card>
        </div>

        {/* Store Locations Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              Store Locations
            </h2>
            <p className="text-xs text-slate-400">
              Stop by our flagship interactive experience lounges to test our titanium models in person.
            </p>
          </div>

          <div className="space-y-4">
            {storeLocations.map((loc) => (
              <Card key={loc.city} className="bg-slate-900/30 border border-slate-900 p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-white">{loc.city}</span>
                  <Badge variant="outline" className="text-[9px] border-emerald-500/20 text-emerald-400">
                    Open Today
                  </Badge>
                </div>
                <div className="text-xs text-slate-400 space-y-1 font-mono">
                  <p>📍 {loc.address}</p>
                  <p>📞 {loc.phone}</p>
                  <p className="text-[10px] text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-500 shrink-0" />
                    <span>{loc.hours}</span>
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>

      {/* Extensive FAQ Accordion */}
      <section id="faq" className="max-w-4xl mx-auto space-y-6 pt-8">
        <div className="text-center md:text-left border-b border-slate-900 pb-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" />
            General Support & FAQ
          </h2>
          <p className="text-xs text-slate-400 mt-1">Quick answers to standard inquiries about shipping, warranty terms, and financing.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-slate-900">
            <AccordionTrigger className="text-slate-200 hover:text-cyan-400 text-sm">
              Do you offer financing or installment options?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-xs leading-relaxed">
              Yes, absolutely. During checkout, you can select AeroPay Financing to split your purchase into 12, 18, or 24 interest-free monthly payments. Subject to immediate soft credit check approval in under 60 seconds.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-slate-900">
            <AccordionTrigger className="text-slate-200 hover:text-cyan-400 text-sm">
              How does the 2-Year Manufacturer Warranty work?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-xs leading-relaxed">
              Every AeroPhone device is covered for 24 months from purchase date. This includes free screen-burn replacement, dynamic LTPO display calibration, battery replacement if health drops below 80%, and full motherboard failures. It does not cover direct structural water damage or shattered back glass from drops unless you upgrade to AeroCare+ insurance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-slate-900">
            <AccordionTrigger className="text-slate-200 hover:text-cyan-400 text-sm">
              What is your standard return and replacement policy?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-xs leading-relaxed">
              We offer a 30-day trial period. If you are not fully satisfied with your smartphone, simply pack it in the original box with all included accessories and return it for a full refund. We will generate a prepaid return shipping label for you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-slate-900">
            <AccordionTrigger className="text-slate-200 hover:text-cyan-400 text-sm">
              Are these phones unlocked for global carrier networks?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-xs leading-relaxed">
              Yes! All AeroPhone, Apex, and Lumia models sold through our official web store are 100% factory unlocked. They support multi-band 5G and LTE networks globally, and offer dual-SIM support (one physical nano-SIM slot and one digital eSIM).
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

    </div>
  );
}
