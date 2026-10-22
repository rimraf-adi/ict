"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { 
  CheckSquare, 
  ShieldCheck, 
  RotateCcw,
  Info
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
      name: "Gate 3: Market Structure Shift (MSS)",
      question: "Did price violently shift market structure with candle body closes?",
      description: "Must break the opposite fractal swing point with candle body closing across the level (wicks do the damage, bodies tell the story).",
      rule: "Rule: A wick piercing a swing point without a candle body close is merely a sweep, NOT an MSS.",
      checked: false,
    },
    {
      id: "displacement",
      name: "Gate 4: Energetic Displacement & Pristine FVG",
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
    <div className="min-h-screen bg-[#FBFBFC] text-zinc-900 flex flex-col antialiased selection:bg-amber-500/20 selection:text-zinc-900">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-10">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 shadow-sm">
            <CheckSquare className="h-3.5 w-3.5 text-amber-500" />
            <span>Institutional Execution Rulebook</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
                The 6-Gate Trade Checklist
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl leading-relaxed">
                A non-negotiable quantitative filter. Clear all 6 sequential gates before deploying risk on any trade.
              </p>
            </div>

            <div className={`p-4 rounded-2xl border font-mono text-left sm:text-right shrink-0 shadow-sm ${
              allPassed 
                ? "bg-emerald-50 border-emerald-300 text-emerald-950" 
                : "bg-white border-zinc-200 text-zinc-700"
            }`}>
              <div className="text-[11px] font-semibold uppercase">
                {allPassed ? "Status: Authorized ✓" : `Status: Locked (${passedCount}/6)`}
              </div>
              <div className="text-xs text-zinc-500 mt-0.5">
                {allPassed ? "All criteria aligned" : "Clear all gates before entry"}
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column: Checklist & Position Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Gates (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                Sequential Verification
              </span>
              <button 
                onClick={resetAllGates}
                className="flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-zinc-900 transition-colors"
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
                      ? "bg-emerald-50/70 border-emerald-300 shadow-xs"
                      : "bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md border ${
                      gate.checked 
                        ? "bg-emerald-600 border-emerald-600 text-white" 
                        : "border-zinc-300 bg-white"
                    }`}>
                      {gate.checked && <ShieldCheck className="h-3.5 w-3.5 stroke-[2.5]" />}
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-semibold text-zinc-900">
                          {gate.name}
                        </span>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          gate.checked ? "bg-emerald-100 text-emerald-800" : "bg-zinc-100 text-zinc-500"
                        }`}>
                          {gate.checked ? "PASSED" : "PENDING"}
                        </span>
                      </div>
                      
                      <p className="text-xs font-medium text-zinc-900">
                        {gate.question}
                      </p>
                      
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {gate.description}
                      </p>

                      <div className="pt-1 text-[11px] font-mono text-zinc-500 border-t border-zinc-100 mt-2">
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
            <div className="pb-1 border-b border-zinc-200">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Position Sizing & Risk
              </span>
            </div>

            <div className="p-5 rounded-lg border border-zinc-200 bg-zinc-50 space-y-4">
              
              {/* Asset Class */}
              <div>
                <label className="text-xs font-mono text-zinc-500 uppercase block mb-1.5">
                  Asset Class
                </label>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-medium">
                  {[
                    { id: "index_nq", label: "Nasdaq (NQ)" },
                    { id: "index_es", label: "S&P (ES)" },
                    { id: "forex", label: "Forex (EUR/GBP)" },
                    { id: "crypto", label: "Crypto / Equities" },
                  ].map((asset) => (
                    <button
                      key={asset.id}
                      onClick={() => setAssetType(asset.id as any)}
                      className={`px-3 py-1.5 rounded border text-left transition-colors ${
                        assetType === asset.id
                          ? "bg-zinc-900 border-zinc-900 text-white"
                          : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                      }`}
                    >
                      {asset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Account Balance */}
              <div>
                <label className="text-xs font-mono text-zinc-500 uppercase block mb-1">
                  Account Capital ($ USD)
                </label>
                <input
                  type="number"
                  value={accountBalance}
                  onChange={(e) => setAccountBalance(Number(e.target.value))}
                  className="w-full px-3 py-1.5 rounded border border-zinc-200 bg-white font-mono text-sm text-zinc-900 focus:outline-none focus:border-zinc-400"
                />
              </div>

              {/* Risk % */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 uppercase mb-1">
                  <span>Risk Per Trade</span>
                  <span className="text-zinc-900 font-bold">{riskPercent}% (${dollarRisk.toFixed(2)})</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 text-xs font-mono">
                  {[0.25, 0.5, 0.75, 1.0].map((pct) => (
                    <button
                      key={pct}
                      onClick={() => setRiskPercent(pct)}
                      className={`py-1 rounded border transition-colors ${
                        riskPercent === pct
                          ? "bg-zinc-900 border-zinc-900 text-white font-bold"
                          : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
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
                  <label className="text-xs font-mono text-zinc-500 uppercase block mb-1">
                    Entry Price
                  </label>
                  <input
                    type="number"
                    step="any"
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(Number(e.target.value))}
                    className="w-full px-3 py-1.5 rounded border border-zinc-200 bg-white font-mono text-sm text-zinc-900 focus:outline-none focus:border-zinc-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-zinc-500 uppercase block mb-1">
                    Stop Loss Price
                  </label>
                  <input
                    type="number"
                    step="any"
                    value={stopLossPrice}
                    onChange={(e) => setStopLossPrice(Number(e.target.value))}
                    className="w-full px-3 py-1.5 rounded border border-zinc-200 bg-white font-mono text-sm text-rose-700 focus:outline-none focus:border-rose-400"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="p-3.5 rounded border border-zinc-200 bg-white space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Stop Distance:</span>
                  <span className="text-zinc-900 font-semibold">{priceDistance.toFixed(2)} pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Capital at Risk:</span>
                  <span className="text-rose-600 font-semibold">${dollarRisk.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-100 pt-2">
                  <span className="text-zinc-500">Position Size:</span>
                  <span className="text-zinc-950 font-bold">
                    {positionUnits.toFixed(2)} {unitLabel}
                  </span>
                </div>
                <div className="border-t border-zinc-100 pt-2 text-[11px] text-zinc-500 space-y-1">
                  <div className="flex justify-between">
                    <span>1:2 R:R Target:</span>
                    <span className="text-zinc-900 font-medium">{target1To2.toFixed(2)} (+${(dollarRisk * 2).toFixed(2)})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1:3 R:R Target:</span>
                    <span className="text-zinc-900 font-medium">{target1To3.toFixed(2)} (+${(dollarRisk * 3).toFixed(2)})</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-8 text-xs font-mono text-zinc-500 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <span>ICT Core — 6-Gate Execution</span>
          <span>Next.js · TypeScript</span>
        </div>
      </footer>
    </div>
  );
}
