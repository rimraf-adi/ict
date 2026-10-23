"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { 
  CheckSquare, 
  ShieldCheck, 
  RotateCcw,
  Info,
  Check
} from "lucide-react";

interface Gate {
  id: string;
  name: string;
  question: string;
  description: string;
  rule: string;
  checked: boolean;
}

export default function ChecklistPage() {
  const [gates, setGates] = useState<Gate[]>([
    {
      id: "time",
      name: "Gate 1: Time & Session Synchronization",
      question: "Is the trade forming inside an active ICT Killzone or Macro Window?",
      description: "London Open (02:00-05:00 EST), NY AM (08:30-11:00 EST), London Close (10:00-12:00 EST), or NY PM (13:30-15:30 EST).",
      rule: "Rule: Time trumps price. Setups outside killzones suffer high statistical failure rates.",
      checked: false,
    },
    {
      id: "liquidity",
      name: "Gate 2: Liquidity Engagement (The Purge)",
      question: "Has price swept a distinct, prominent liquidity pool prior to reversing?",
      description: "Must raid Previous Day High/Low, Asian High/Low, clean Equal Highs/Lows (EQH/EQL), or tap a Higher Timeframe PD Array.",
      rule: "Rule: Never enter in the middle of a range without a prior liquidity sweep.",
      checked: false,
    },
    {
      id: "structure",
      name: "Gate 3: Market Structure Shift (MSS) with Displacement",
      question: "Has price violently broken opposing market structure with full-bodied candles?",
      description: "Wicks only sweep liquidity; candle bodies must close clearly beyond the fractal swing point to validate institutional intent.",
      rule: "Rule: A wick beyond a swing high/low is NOT an MSS — it is another liquidity purge.",
      checked: false,
    },
    {
      id: "imbalance",
      name: "Gate 4: Energetic Fair Value Gap (FVG / Imbalance)",
      question: "Did the impulse move leave a clear, unmitigated Fair Value Gap (FVG)?",
      description: "Large-bodied candles with minimal wicks, demonstrating unambiguous institutional order sponsorship.",
      rule: "Rule: If the candles are choppy, overlapping, and small-bodied, smart money is absent.",
      checked: false,
    },
    {
      id: "value",
      name: "Gate 5: Premium vs. Discount Value Alignment",
      question: "Is your entry strictly in Discount (for Longs) or Premium (for Shorts)?",
      description: "Using the impulse dealing range, Longs must be executed below 50% Equilibrium; Shorts must be executed above 50% Equilibrium.",
      rule: "Rule: Never buy in Premium (>50%) or sell in Discount (<50%).",
      checked: false,
    },
    {
      id: "risk",
      name: "Gate 6: Mathematical Asymmetry (1:2 R:R Minimum)",
      question: "Does the trade offer a minimum 1:2 Risk-to-Reward to an objective Draw on Liquidity?",
      description: "Stop-loss placed strictly behind the invalidation swing extreme; target placed at opposing liquidity or unmitigated imbalance.",
      rule: "Rule: Never risk more than 0.5%–1.0% of your account capital on any individual trade.",
      checked: false,
    },
  ]);

  const [accountBalance, setAccountBalance] = useState<number>(50000);
  const [riskPercent, setRiskPercent] = useState<number>(1.0);
  const [entryPrice, setEntryPrice] = useState<number>(19500);
  const [stopLossPrice, setStopLossPrice] = useState<number>(19475);
  const [assetType, setAssetType] = useState<"index_nq" | "index_es" | "forex" | "crypto">("index_nq");

  const toggleGate = (id: string) => {
    setGates(gates.map(g => g.id === id ? { ...g, checked: !g.checked } : g));
  };

  const resetAllGates = () => {
    setGates(gates.map(g => ({ ...g, checked: false })));
  };

  const allPassed = gates.every(g => g.checked);
  const passedCount = gates.filter(g => g.checked).length;

  const dollarRisk = (accountBalance * (riskPercent / 100));
  const priceDistance = Math.abs(entryPrice - stopLossPrice);
  const isLong = entryPrice > stopLossPrice;
  const target1To2 = isLong ? entryPrice + (priceDistance * 2) : entryPrice - (priceDistance * 2);
  const target1To3 = isLong ? entryPrice + (priceDistance * 3) : entryPrice - (priceDistance * 3);

  let positionUnits = 0;
  let unitLabel = "Contracts";
  if (assetType === "index_nq") {
    const pointValue = 20;
    positionUnits = priceDistance > 0 ? (dollarRisk / (priceDistance * pointValue)) : 0;
    unitLabel = "NQ Contracts ($20/pt)";
  } else if (assetType === "index_es") {
    const pointValue = 50;
    positionUnits = priceDistance > 0 ? (dollarRisk / (priceDistance * pointValue)) : 0;
    unitLabel = "ES Contracts ($50/pt)";
  } else if (assetType === "forex") {
    const pipSize = 0.0001;
    const pips = priceDistance / pipSize;
    positionUnits = pips > 0 ? (dollarRisk / (pips * 10)) : 0;
    unitLabel = "Standard Lots";
  } else {
    positionUnits = priceDistance > 0 ? (dollarRisk / priceDistance) : 0;
    unitLabel = "Units / Shares";
  }

  return (
    <div className="min-h-screen bg-[#0c0d0f] text-white flex flex-col antialiased selection:bg-amber-400/20 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-10">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono font-medium text-white/60">
            <CheckSquare className="h-3.5 w-3.5 text-amber-400" />
            <span>Institutional Execution Rulebook</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
                The 6-Gate Trade Checklist
              </h1>
              <p className="text-sm sm:text-base text-white/50 mt-2 max-w-xl leading-relaxed">
                A non-negotiable quantitative filter. Clear all 6 sequential gates before deploying risk on any trade.
              </p>
            </div>

            <div className={`p-4 rounded-2xl border font-mono text-left sm:text-right shrink-0 ${
              allPassed 
                ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-300" 
                : "bg-white/[0.02] border-white/[0.08] text-white/70"
            }`}>
              <div className="text-[11px] font-semibold uppercase flex items-center gap-2 justify-end">
                {allPassed && <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />}
                <span>{allPassed ? "Status: Authorized ✓" : `Status: Locked (${passedCount}/6)`}</span>
              </div>
              <div className="text-xs text-white/40 mt-0.5">
                {allPassed ? "All criteria aligned" : "Clear all gates before entry"}
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column: Checklist & Position Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Gates (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest font-semibold">
                Sequential Verification
              </span>
              <button 
                onClick={resetAllGates}
                className="flex items-center gap-1 text-xs font-mono text-white/50 hover:text-white transition-colors"
              >
                <RotateCcw className="h-3 w-3" />
                Reset
              </button>
            </div>

            <div className="space-y-3">
              {gates.map((gate) => (
                <div 
                  key={gate.id}
                  onClick={() => toggleGate(gate.id)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                    gate.checked
                      ? "bg-emerald-950/30 border-emerald-500/30"
                      : "bg-white/[0.02] border-white/[0.07] hover:border-white/15 hover:bg-white/[0.035]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md border ${
                      gate.checked 
                        ? "bg-emerald-500 border-emerald-500 text-stone-950" 
                        : "border-white/20 bg-white/5"
                    }`}>
                      {gate.checked && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-semibold text-white/90">
                          {gate.name}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          gate.checked 
                            ? "bg-emerald-950/60 border-emerald-500/30 text-emerald-300 font-bold" 
                            : "bg-white/5 border-white/10 text-white/40"
                        }`}>
                          {gate.checked ? "PASSED" : "PENDING"}
                        </span>
                      </div>
                      
                      <p className="text-xs font-medium text-white/80">
                        {gate.question}
                      </p>
                      
                      <p className="text-xs text-white/45 leading-relaxed">
                        {gate.description}
                      </p>

                      <div className="pt-2 text-[11px] font-mono text-white/40 border-t border-white/[0.06] mt-2">
                        {gate.rule}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Calculator (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="pb-1 border-b border-white/[0.08]">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest font-semibold">
                Position Sizing & Risk
              </span>
            </div>

            <div className="p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] space-y-4">
              
              {/* Asset Class */}
              <div>
                <label className="text-xs font-mono text-white/40 uppercase block mb-1.5">
                  Asset Class
                </label>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-medium font-mono">
                  {[
                    { id: "index_nq", label: "Nasdaq (NQ)" },
                    { id: "index_es", label: "S&P (ES)" },
                    { id: "forex", label: "Forex (EUR/GBP)" },
                    { id: "crypto", label: "Crypto / Equities" },
                  ].map((asset) => (
                    <button
                      key={asset.id}
                      onClick={() => setAssetType(asset.id as any)}
                      className={`px-3 py-1.5 rounded-lg border text-left transition-colors ${
                        assetType === asset.id
                          ? "bg-white text-stone-950 font-bold border-white"
                          : "border-white/[0.08] bg-white/[0.03] text-white/70 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {asset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Account Balance */}
              <div>
                <label className="text-xs font-mono text-white/40 uppercase block mb-1">
                  Account Capital ($ USD)
                </label>
                <input
                  type="number"
                  value={accountBalance}
                  onChange={(e) => setAccountBalance(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03] font-mono text-sm text-white focus:outline-none focus:border-amber-400/50"
                />
              </div>

              {/* Risk % */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-white/40 uppercase mb-1">
                  <span>Risk Per Trade</span>
                  <span className="text-white font-bold">{riskPercent}% (${dollarRisk.toFixed(2)})</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 text-xs font-mono">
                  {[0.25, 0.5, 0.75, 1.0].map((pct) => (
                    <button
                      key={pct}
                      onClick={() => setRiskPercent(pct)}
                      className={`py-1.5 rounded-lg border transition-colors ${
                        riskPercent === pct
                          ? "bg-white text-stone-950 font-bold border-white"
                          : "border-white/[0.08] bg-white/[0.03] text-white/70 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Entry & Stop Loss */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-mono text-white/40 uppercase block mb-1">
                    Entry Price
                  </label>
                  <input
                    type="number"
                    step="any"
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03] font-mono text-sm text-white focus:outline-none focus:border-amber-400/50"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-white/40 uppercase block mb-1">
                    Stop Loss Price
                  </label>
                  <input
                    type="number"
                    step="any"
                    value={stopLossPrice}
                    onChange={(e) => setStopLossPrice(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03] font-mono text-sm text-rose-400 focus:outline-none focus:border-rose-400/50"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-white/40">Stop Distance:</span>
                  <span className="text-white font-semibold">{priceDistance.toFixed(2)} pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/40">Capital at Risk:</span>
                  <span className="text-rose-400 font-semibold">${dollarRisk.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between border-t border-white/[0.06] pt-2">
                  <span className="text-white/40">Position Size:</span>
                  <span className="text-white font-bold text-sm">
                    {positionUnits.toFixed(2)} {unitLabel}
                  </span>
                </div>
                <div className="border-t border-white/[0.06] pt-2 text-[11px] text-white/40 space-y-1">
                  <div className="flex justify-between">
                    <span>1:2 R:R Target:</span>
                    <span className="text-emerald-400 font-medium">{target1To2.toFixed(2)} (+${(dollarRisk * 2).toFixed(2)})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1:3 R:R Target:</span>
                    <span className="text-emerald-400 font-medium">{target1To3.toFixed(2)} (+${(dollarRisk * 3).toFixed(2)})</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-8 text-xs font-mono text-white/30 bg-[#08090b]">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <span>ICT Core — 6-Gate Execution</span>
          <span>Next.js · TypeScript</span>
        </div>
      </footer>
    </div>
  );
}
