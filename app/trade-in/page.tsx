"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Layers,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Check,
  RotateCcw,
  Zap,
  Info,
  Gift,
  HelpCircle,
} from "lucide-react";

function TradeInContent() {
  const searchParams = useSearchParams();
  const { applyTradeInPromo, tradeInPromoCode, tradeInDiscount } = useCart();

  // Multi-step state
  const [step, setStep] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [estimatedValue, setEstimatedValue] = useState(0);

  // Parse query parameters if coming from home page teaser
  useEffect(() => {
    const qBrand = searchParams.get("brand");
    const qModel = searchParams.get("model");
    const qCondition = searchParams.get("condition");

    if (qBrand && qModel && qCondition) {
      setSelectedBrand(qBrand);
      setSelectedModel(qModel);
      setSelectedCondition(qCondition);
      
      // Compute value
      let base = 250;
      if (qBrand === "Apple") base = 350;
      if (qBrand === "Samsung") base = 300;
      if (qModel.includes("15") || qModel.includes("Ultra") || qModel.includes("Fold")) {
        base += 180;
      }
      if (qCondition === "Flawless") base += 100;
      if (qCondition === "Fair") base -= 100;

      setEstimatedValue(base);
      
      // Generate promo code
      const randomId = Math.random().toString(36).substring(2, 6).toUpperCase();
      const code = `TRADE-${qBrand.substring(0, 3).toUpperCase()}-${randomId}`;
      setGeneratedCode(code);
      setStep(4);
    }
  }, [searchParams]);

  const brands = ["Apple", "Samsung", "Google", "OnePlus"];
  
  const models: Record<string, string[]> = {
    Apple: ["iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 13 Pro", "iPhone 12 Pro", "iPhone SE (3rd Gen)"],
    Samsung: ["Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S22 Ultra", "Galaxy Fold 4", "Galaxy Flip 4"],
    Google: ["Pixel 8 Pro", "Pixel 7 Pro", "Pixel 6a"],
    OnePlus: ["OnePlus 11 5G", "OnePlus 10 Pro", "OnePlus Nord N30"],
  };

  const conditions = [
    {
      name: "Flawless",
      desc: "Perfect cosmetic condition. Screen has no scratches. Battery health is above 85%. All wireless networks are fully operational.",
      modifier: 100,
    },
    {
      name: "Good",
      desc: "Normal signs of wear. Light micro-scratches on screen or body. No cracks or chips in glass. Fully functional.",
      modifier: 0,
    },
    {
      name: "Fair",
      desc: "Heavy scratches, scuffs or minor dents on frame. Screen is fully intact with no cracks. Fully functional software.",
      modifier: -100,
    },
  ];

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
    setSelectedModel("");
    setStep(2);
  };

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
    setStep(3);
  };

  const handleConditionSelect = (cond: string) => {
    setSelectedCondition(cond);
    
    // Calculate total value
    let baseValue = 250;
    if (selectedBrand === "Apple") baseValue = 350;
    if (selectedBrand === "Samsung") baseValue = 300;

    if (selectedModel.includes("Max") || selectedModel.includes("Ultra") || selectedModel.includes("Fold")) {
      baseValue += 150;
    }

    const modifier = conditions.find((c) => c.name === cond)?.modifier || 0;
    const finalVal = Math.max(80, baseValue + modifier);

    setEstimatedValue(finalVal);

    // Generate unique code
    const randomId = Math.random().toString(36).substring(2, 6).toUpperCase();
    const code = `TRADE-${selectedBrand.substring(0, 3).toUpperCase()}-${randomId}`;
    setGeneratedCode(code);
    
    setStep(4);
    toast.success("Trade-in estimate calculated!");
  };

  const handleApplyPromoToCart = () => {
    applyTradeInPromo(generatedCode, estimatedValue);
  };

  const handleReset = () => {
    setSelectedBrand("");
    setSelectedModel("");
    setSelectedCondition("");
    setGeneratedCode("");
    setEstimatedValue(0);
    setStep(1);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <Badge className="bg-cyan-500 text-slate-950 font-bold uppercase text-[10px] tracking-widest">
          AeroPhone Trade-In Program
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">
          Upgrade Effortlessly
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          Recycle your old device responsibly and get immediate credit applied to your purchase today. We make upgrading simple, sustainable, and lucrative.
        </p>
      </div>

      {/* Process Steps Indicator */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center md:text-left">
        <div className={`p-5 rounded-xl border transition-colors ${step === 1 ? "border-cyan-500/30 bg-cyan-950/10 text-white" : "border-slate-900 bg-slate-950/40 text-slate-400"}`}>
          <span className="font-mono text-xs text-cyan-400 block mb-1">STEP 1</span>
          <h3 className="font-bold text-sm text-white">Identify Old Device</h3>
          <p className="text-xs mt-1 text-slate-500">Select the manufacturer brand and specific model.</p>
        </div>
        <div className={`p-5 rounded-xl border transition-colors ${step === 2 || step === 3 ? "border-cyan-500/30 bg-cyan-950/10 text-white" : "border-slate-900 bg-slate-950/40 text-slate-400"}`}>
          <span className="font-mono text-xs text-cyan-400 block mb-1">STEP 2</span>
          <h3 className="font-bold text-sm text-white">Assess Physical State</h3>
          <p className="text-xs mt-1 text-slate-500">Evaluate screen, body condition, and battery health.</p>
        </div>
        <div className={`p-5 rounded-xl border transition-colors ${step === 4 ? "border-cyan-500/30 bg-cyan-950/10 text-white" : "border-slate-900 bg-slate-950/40 text-slate-400"}`}>
          <span className="font-mono text-xs text-cyan-400 block mb-1">STEP 3</span>
          <h3 className="font-bold text-sm text-white">Get Instant Promo Code</h3>
          <p className="text-xs mt-1 text-slate-500">Apply the discount directly on your next flagship order.</p>
        </div>
      </div>

      {/* Main Interactive Form Card */}
      <div className="max-w-3xl mx-auto">
        <Card className="border border-slate-900 bg-slate-900/10 backdrop-blur-md p-6 md:p-8">
          
          {/* Step 1: Select Brand */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center md:text-left">
                <h2 className="text-xl font-bold text-white">Select Your Brand</h2>
                <p className="text-xs text-slate-400 mt-1">What is the manufacturer of your current phone?</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => handleBrandSelect(b)}
                    className="p-5 rounded-xl border border-slate-800 bg-slate-950 text-center hover:border-cyan-500/50 hover:text-white transition-all group"
                  >
                    <span className="block font-mono text-sm font-bold text-slate-300 group-hover:text-cyan-400">
                      {b}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Model */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">Select Your Model</h2>
                  <p className="text-xs text-slate-400 mt-1">Brand selected: <strong className="text-white">{selectedBrand}</strong></p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleReset} className="text-xs text-slate-400 hover:text-white">
                  Change Brand
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {models[selectedBrand]?.map((m) => (
                  <button
                    key={m}
                    onClick={() => handleModelSelect(m)}
                    className="p-4 rounded-xl border border-slate-800 bg-slate-950 text-left hover:border-cyan-500/50 hover:text-white transition-all flex justify-between items-center"
                  >
                    <span className="font-medium text-xs text-slate-300">{m}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Select Condition */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">Assess Physical Condition</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Model: <strong className="text-white">{selectedBrand} {selectedModel}</strong>
                  </p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleReset} className="text-xs text-slate-400 hover:text-white">
                  Reset
                </Button>
              </div>

              <div className="space-y-4">
                {conditions.map((cond) => (
                  <button
                    key={cond.name}
                    onClick={() => handleConditionSelect(cond.name)}
                    className="w-full p-5 rounded-xl border border-slate-800 bg-slate-950 text-left hover:border-cyan-500/50 transition-all block space-y-1.5"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm text-white">{cond.name}</span>
                      <span className="text-xs font-mono text-cyan-400">
                        {cond.modifier > 0 ? `+$${cond.modifier}` : cond.modifier < 0 ? `-$${Math.abs(cond.modifier)}` : "Base Valuation"}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{cond.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Display Results & Generate Promo Code */}
          {step === 4 && (
            <div className="space-y-6 text-center py-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center mx-auto">
                <Gift className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">ESTIMATE LOCKED IN</span>
                <h2 className="text-3xl font-extrabold text-white">Your Trade-In Value</h2>
                <p className="text-xs text-slate-400">
                  Calculated for: <strong className="text-slate-200">{selectedBrand} {selectedModel} ({selectedCondition})</strong>
                </p>
              </div>

              <div className="max-w-md mx-auto p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div>
                  <span className="text-xs text-slate-500 font-mono block">DEDUCTION VALUE</span>
                  <span className="text-4xl font-extrabold font-mono text-emerald-400 block">${estimatedValue} USD</span>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] text-slate-500 font-mono block uppercase">UNIQUE PROMO CODE</span>
                  <div className="font-mono text-sm bg-slate-900 border border-slate-800 px-4 py-2 rounded text-white font-bold select-all">
                    {generatedCode}
                  </div>
                  <p className="text-[10px] text-slate-500">
                    This code is valid for 30 days. Save it or apply it directly to your active cart below.
                  </p>
                </div>

                {tradeInPromoCode === generatedCode ? (
                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>Applied to global cart successfully!</span>
                  </div>
                ) : (
                  <Button
                    onClick={handleApplyPromoToCart}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs"
                  >
                    Apply Credit to Active Cart Now
                  </Button>
                )}
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <Button variant="ghost" size="sm" onClick={handleReset} className="text-xs text-slate-400 hover:text-white">
                  Estimate Another Phone
                </Button>
                <Link href="/phones">
                  <Button variant="outline" size="sm" className="text-xs border-slate-800 text-white hover:bg-slate-900">
                    Browse Flagships to Buy
                  </Button>
                </Link>
              </div>
            </div>
          )}

        </Card>
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto space-y-6 pt-8">
        <div className="text-center md:text-left border-b border-slate-900 pb-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" />
            Trade-In Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-400 mt-1">Everything you need to know about preparing and shipping your old hardware.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-slate-900">
            <AccordionTrigger className="text-slate-200 hover:text-cyan-400 text-sm">
              How do I ship my old phone to AeroPhone?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-xs leading-relaxed">
              Once you place an order using your trade-in promo code, we will automatically ship you a prepaid Trade-In Box along with your new AeroPhone. Place your old phone in the protective sleeve, apply the included return label, and drop it off at any authorized shipping center within 14 days of receiving your new device.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-slate-900">
            <AccordionTrigger className="text-slate-200 hover:text-cyan-400 text-sm">
              What happens if my physical assessment is different from the warehouse inspection?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-xs leading-relaxed">
              If our certified technicians find a discrepancy (e.g., hidden screen scratches or a degraded battery cell), we will email you an updated valuation. You can either accept the modified valuation or have your old phone shipped back to you free of charge.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-slate-900">
            <AccordionTrigger className="text-slate-200 hover:text-cyan-400 text-sm">
              Should I perform a factory reset before shipping?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-xs leading-relaxed">
              Yes, absolutely. For security and privacy, you must backup your personal data, turn off Find My / Device Protection features, and perform a full factory reset. We cannot accept devices that remain locked to an iCloud or Google account.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-slate-900">
            <AccordionTrigger className="text-slate-200 hover:text-cyan-400 text-sm">
              Are blacklisted or carrier-locked phones eligible?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-xs leading-relaxed">
              We do not accept blacklisted devices or those reported lost or stolen. However, carrier-locked devices are fully eligible for our standard trade-in credit.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

    </div>
  );
}

export default function TradeInPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-slate-400 font-mono animate-pulse">Loading Trade-In program...</p>
        </div>
      }
    >
      <TradeInContent />
    </Suspense>
  );
}
