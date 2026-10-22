"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Target, 
  ShieldCheck, 
  Layers, 
  BookOpen,
  TrendingUp,
  TrendingDown,
  Activity,
  Zap,
  HelpCircle
} from "lucide-react";

interface WorkstationScenario {
  id: string;
  name: string;
  asset: string;
  session: string;
  timeframe: string;
  activeMacro: string;
  dealingRange: string;
  htfBias: string;
  keyLevel: string;
  sweepDetail: string;
  displacementDetail: string;
  entryDetail: string;
  rrMultiple: string;
  question: string;
  options: {
    label: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

const WORKSTATION_SCENARIOS: WorkstationScenario[] = [
  {
    id: "judas",
    name: "01 / London Judas Swing",
    asset: "EUR/USD",
    session: "London Open Killzone (02:00 – 05:00 EST)",
    timeframe: "M5",
    activeMacro: "02:15 AM London Purge",
    dealingRange: "1.0820 — 1.0890",
    htfBias: "Bearish into Daily FVG",
    keyLevel: "Asian High (1.08820) Swept",
    sweepDetail: "Asian High purged by 14 pips during 02:00 open, hunting buy stops into 1H Bearish FVG.",
    displacementDetail: "Immediate 5m Market Structure Shift (MSS) lower with three heavy red bodies.",
    entryDetail: "Retracement taps Consequent Encroachment (50%) of 5m BISI at 1.08740.",
    rrMultiple: "+3.2R",
    question: "Price has wicked above the Asian Range High and violently closed lower with a displacement FVG. What is the institutional execution rule?",
    options: [
      {
        label: "Wait for retracement into the 5m FVG (CE 50%), then enter short targeting Asian Low",
        isCorrect: true,
        explanation: "Correct! The Judas Swing purges liquidity to accumulate shorts. You enter at the discount/premium array (FVG 50%) targeting opposing sell-side liquidity."
      },
      {
        label: "Buy the breakout because price broke above the Asian High resistance",
        isCorrect: false,
        explanation: "Incorrect. Buying breakouts at session opens is retail trap behavior. Smart money uses breakout buy-stops as counterparty liquidity."
      },
      {
        label: "Enter short immediately with market order without waiting for retracement",
        isCorrect: false,
        explanation: "Incorrect. Entering without waiting for PD Array retracement degrades Risk:Reward and violates ICT entry discipline."
      }
    ]
  },
  {
    id: "silver-bullet",
    name: "02 / NY Silver Bullet",
    asset: "NQ 100 Futures",
    session: "NY AM Session (10:00 – 11:00 EST)",
    timeframe: "M1",
    activeMacro: "10:00 AM Economic Release Macro",
    dealingRange: "19,480 — 19,620",
    htfBias: "Bullish to Daily Buy-Side Liquidity",
    keyLevel: "Equal Lows Swept at 10:03 AM",
    sweepDetail: "Sell-side liquidity pool beneath morning equal lows purged immediately following 10:00 AM.",
    displacementDetail: "1-minute violent displacement candle expanding +28 handles with clean FVG.",
    entryDetail: "Limit buy filled at Fair Value Gap low (19,530.00), invalidation below swing low.",
    rrMultiple: "+2.5R (15 Handles)",
    question: "The 10:00 AM macro purges equal lows and leaves an energetic 1m Fair Value Gap. What is the Silver Bullet target?",
    options: [
      {
        label: "Target 10–15 handles minimum into the opposing buy-side liquidity pool",
        isCorrect: true,
        explanation: "Correct! The NY Silver Bullet is designed for a mechanical 10 to 15 index handles (or 15–20 pips in FX) during the 10:00–11:00 AM delivery window."
      },
      {
        label: "Hold indefinitely expecting a multi-day trend reversal",
        isCorrect: false,
        explanation: "Incorrect. The Silver Bullet is a session scalping model designed to capture liquidity delivery into the opposing pool, not multi-day swings."
      },
      {
        label: "Wait until 11:30 AM to enter when the London close begins",
        isCorrect: false,
        explanation: "Incorrect. The Silver Bullet delivery window closes at 11:00 AM EST. Executing outside the window introduces chop and low probability."
      }
    ]
  },
  {
    id: "smt",
    name: "03 / SMT Divergence",
    asset: "ES 500 vs NQ 100",
    session: "NY AM Killzone (09:30 – 11:00 EST)",
    timeframe: "M5",
    activeMacro: "09:50 AM Macro Window",
    dealingRange: "Correlated Asset Divergence",
    htfBias: "Smart Money Accumulation",
    keyLevel: "ES Lower Low vs NQ Higher Low",
    sweepDetail: "ES 500 makes a lower low purging sell stops, while NQ 100 refuses to confirm and makes a higher low.",
    displacementDetail: "Non-confirmation indicates institutional accumulation in the stronger asset (NQ).",
    entryDetail: "Long entry on NQ at Inversion FVG retest targeting previous day high.",
    rrMultiple: "+3.8R",
    question: "ES makes a lower low while NQ forms a higher low at the morning liquidity level. What does this SMT divergence signal?",
    options: [
      {
        label: "Smart Money is actively accumulating longs; buy the stronger asset (NQ) on FVG retest",
        isCorrect: true,
        explanation: "Correct! SMT Divergence between correlated assets reveals institutional crack in market correlation. The asset refusing to make a lower low is being accumulated."
      },
      {
        label: "The market is broken and un-tradable until both assets match",
        isCorrect: false,
        explanation: "Incorrect. Non-confirmation between correlated indices is one of the highest-probability institutional footprints in ICT trading."
      },
      {
        label: "Short the weaker asset (ES) aggressively",
        isCorrect: false,
        explanation: "Incorrect. When SMT bullish divergence forms, shorting into accumulation frequently leads to violent short-squeeze stops."
      }
    ]
  },
  {
    id: "unicorn",
    name: "04 / The Unicorn Model",
    asset: "EUR/USD",
    session: "London / NY Overlap (08:00 – 10:00 EST)",
    timeframe: "M15",
    activeMacro: "08:30 AM Economic News Macro",
    dealingRange: "1.0800 — 1.0920",
    htfBias: "Bearish Expansion into Weekly SSL",
    keyLevel: "Breaker Block + Overlapping FVG",
    sweepDetail: "High-probability confluence: Old swing high swept, breaking market structure lower.",
    displacementDetail: "The failed swing low becomes a Bearish Breaker Block directly overlapping a fresh FVG.",
    entryDetail: "Dual-confluence entry at the intersection of Breaker Block and Fair Value Gap.",
    rrMultiple: "+4.1R",
    question: "What makes the 'Unicorn' setup one of the highest-probability institutional patterns?",
    options: [
      {
        label: "Dual confluence of a Breaker Block overlapping exactly with a Fair Value Gap",
        isCorrect: true,
        explanation: "Correct! The Unicorn model marries the mitigation of trapped traders in a Breaker Block with algorithmic rebalancing of a Fair Value Gap at the exact same price zone."
      },
      {
        label: "It uses moving average crossovers combined with RSI divergence",
        isCorrect: false,
        explanation: "Incorrect. ICT concepts use zero retail indicators; the Unicorn is strictly price action, market structure, and liquidity-based."
      },
      {
        label: "It only occurs once a month during NFP",
        isCorrect: false,
        explanation: "Incorrect. The Unicorn model forms weekly across major FX pairs and Index Futures during standard Killzones."
      }
    ]
  }
];

export default function HomePage() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("judas");
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  const activeScenario = WORKSTATION_SCENARIOS.find(s => s.id === activeScenarioId) || WORKSTATION_SCENARIOS[0];

  const handleSelectScenario = (id: string) => {
    setActiveScenarioId(id);
    setSelectedOptionIndex(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col antialiased selection:bg-amber-500/25 selection:text-stone-950 overflow-x-hidden">
      <Navbar />

      {/* -------------------------------------------------------------------- */}
      {/* 1. HERO SECTION: EDITORIAL HEADLINE + ANCHORED WORKSTATION FRAME     */}
      {/* -------------------------------------------------------------------- */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        
        {/* Soft, Diffuse Warm Glow (Mitra style) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[560px] pointer-events-none opacity-80">
          <div className="absolute inset-0 bg-radial-[circle_at_50%_15%] from-orange-400/20 via-amber-300/10 to-transparent blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Micro Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-200/90 bg-white/80 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.04)] backdrop-blur-md mb-8 transition-all hover:border-amber-300">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[12px] font-mono font-medium tracking-wide text-stone-700">
              IPDA 3.0 · THE INTERBANK PRICE DELIVERY ALGORITHM
            </span>
          </div>

          {/* Master Headline: High-Status Editorial Serif + Modern Sans */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-stone-950 leading-[1.03] max-w-4xl mx-auto">
            Deconstruct the Signal Behind{" "}
            <span className="font-serif italic font-normal text-amber-600">
              Institutional
            </span>{" "}
            Order Flow.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto font-normal leading-relaxed">
            A systematic framework for trading liquidity sweeps, Fair Value Gaps, and 20-minute algorithmic delivery windows. Built for serious discretionary traders.
          </p>

          {/* Call to Actions */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/learn"
              className="px-8 py-4 rounded-full bg-[#121316] hover:bg-stone-800 text-white font-semibold text-sm shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 flex items-center gap-2.5 group"
            >
              <span>Explore Curriculum</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/practice"
              className="px-8 py-4 rounded-full bg-white hover:bg-stone-50 text-stone-900 font-semibold text-sm border border-stone-300/80 shadow-xs transition-all hover:border-stone-400 hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span className="text-amber-500 text-base">✦</span>
              <span>Launch Practice Lab</span>
            </Link>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* THE ANCHORED PRODUCT WORKSTATION (Linear + Mitra Craftsmanship) */}
          {/* ---------------------------------------------------------------- */}
          <div className="relative mt-16 w-full max-w-5xl mx-auto text-left">
            
            {/* Ambient warm backlight glow behind workstation */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/15 rounded-[36px] blur-2xl opacity-75 pointer-events-none" />

            <div className="relative rounded-[32px] border border-stone-200/90 bg-white/95 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] backdrop-blur-md overflow-hidden">
              
              {/* Window Header Chrome */}
              <div className="px-6 py-4 bg-stone-50/90 border-b border-stone-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                  </div>
                  <div className="h-4 w-[1px] bg-stone-200" />
                  <span className="font-mono text-xs font-semibold text-stone-800 flex items-center gap-2">
                    <span>{activeScenario.asset}</span>
                    <span className="text-stone-400">·</span>
                    <span className="text-stone-600">{activeScenario.session}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ALGORITHMIC DELIVERY ACTIVE</span>
                </div>
              </div>

              {/* Scenario Switcher Tabs */}
              <div className="px-6 py-3 bg-stone-100/60 border-b border-stone-200/60 flex flex-wrap items-center gap-2 overflow-x-auto">
                <span className="text-[11px] font-mono text-stone-400 font-bold uppercase mr-2 hidden sm:inline">
                  Select Drill:
                </span>
                {WORKSTATION_SCENARIOS.map((scenario) => {
                  const isActive = scenario.id === activeScenario.id;
                  return (
                    <button
                      key={scenario.id}
                      onClick={() => handleSelectScenario(scenario.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                        isActive
                          ? "bg-[#121316] text-white shadow-xs font-semibold"
                          : "bg-white text-stone-600 border border-stone-200/80 hover:text-stone-950 hover:bg-stone-50"
                      }`}
                    >
                      {scenario.name}
                    </button>
                  );
                })}
              </div>

              {/* Workstation HUD Strip */}
              <div className="px-6 py-3.5 bg-stone-50/50 border-b border-stone-200/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Active Macro</span>
                  <span className="font-bold text-amber-700">{activeScenario.activeMacro}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Dealing Range</span>
                  <span className="font-bold text-stone-800">{activeScenario.dealingRange}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">HTF Bias</span>
                  <span className="font-bold text-stone-800">{activeScenario.htfBias}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Key Benchmark</span>
                  <span className="font-bold text-emerald-700">{activeScenario.keyLevel}</span>
                </div>
              </div>

              {/* Workstation Inner Content: Two-Column Split */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left 5 Cols: Setup Anatomy Tape */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
                    Institutional Footprint
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-900 mb-1">
                        <span className="h-2 w-2 rounded-full bg-rose-500" />
                        <span>01 / LIQUIDITY PURGE</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-sans">
                        {activeScenario.sweepDetail}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-900 mb-1">
                        <span className="h-2 w-2 rounded-full bg-amber-500" />
                        <span>02 / DISPLACEMENT MSS</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-sans">
                        {activeScenario.displacementDetail}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-900 mb-1">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        <span>03 / PD ARRAY RETEST</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-sans">
                        {activeScenario.entryDetail}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between font-mono text-xs text-amber-900">
                    <span>Projected Target:</span>
                    <span className="font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">
                      {activeScenario.rrMultiple}
                    </span>
                  </div>
                </div>

                {/* Right 7 Cols: Interactive Decision Checkpoint Preview */}
                <div className="lg:col-span-7 rounded-2xl border border-stone-200 bg-[#FAF9F6] p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-200/70">
                      <span className="text-xs font-mono font-bold text-stone-700 flex items-center gap-2">
                        <HelpCircle className="h-4 w-4 text-amber-600" />
                        <span>INTERACTIVE DECISION DRILL</span>
                      </span>
                      <span className="text-[11px] font-mono text-stone-400">
                        {selectedOptionIndex !== null ? "Checked" : "1 Checkpoint Active"}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-stone-900 mb-5 leading-snug font-sans">
                      {activeScenario.question}
                    </p>

                    <div className="space-y-2.5">
                      {activeScenario.options.map((option, idx) => {
                        const isSelected = selectedOptionIndex === idx;
                        return (
                          <div
                            key={idx}
                            onClick={() => setSelectedOptionIndex(idx)}
                            className={`p-3.5 rounded-xl border text-xs font-sans cursor-pointer transition-all ${
                              isSelected
                                ? option.isCorrect
                                  ? "bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-400"
                                  : "bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-400"
                                : "bg-white border-stone-200 text-stone-700 hover:border-stone-300 hover:bg-stone-50"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 ${
                                isSelected
                                  ? option.isCorrect
                                    ? "bg-emerald-600 text-white"
                                    : "bg-rose-600 text-white"
                                  : "bg-stone-100 text-stone-600"
                              }`}>
                                {String.fromCharCode(65 + idx)}
                              </span>
                              <span className="leading-relaxed flex-1">
                                {option.label}
                              </span>
                            </div>

                            {isSelected && (
                              <div className="mt-2.5 pt-2.5 border-t border-current/20 text-[11px] font-mono leading-normal">
                                {option.explanation}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-sans">
                      Test all scenarios step-by-step:
                    </span>
                    <Link
                      href="/practice"
                      className="px-4 py-2 rounded-full bg-[#121316] hover:bg-stone-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
                    >
                      <span>Play in Practice Lab</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 2. CORE PRINCIPLES: HIGH-CRAFT CARDS IN WARM TONES                   */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-24 bg-[#FAF8F5] border-t border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3.5 py-1 rounded-full bg-stone-200/70 text-stone-700 text-xs font-mono font-medium">
              CORE PRINCIPLES
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950">
              The Architecture of Price
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Every price movement is driven by algorithmically engineered liquidity and delivery targets.
            </p>
          </div>

          {/* 6 Warm Ivory / Stone Cards with Subtle Luminous Blooms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Liquidity Purge */}
            <Link
              href="/learn/foundations/liquidity-and-order-flow"
              className="group relative rounded-[28px] bg-white border border-stone-200/90 p-8 flex flex-col justify-between overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-300"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-amber-500/12 via-orange-400/8 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-6">
                  <span className="text-amber-700 font-bold">✦ 01 / PURGE</span>
                  <span>IPDA MECHANIC</span>
                </div>

                <div className="text-xs font-mono text-amber-800 uppercase tracking-wider font-semibold mb-1">
                  Engineered Stops
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-950 mb-3">
                  The Judas Swing
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Price sweeps equal highs or lows at key session opens, hunting resting retail stop orders before the real algorithmic expansion unfolds.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono font-semibold text-stone-500 group-hover:text-amber-700 transition-colors">
                <span>Wicks Sweep · Bodies Tell</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 2: Fair Value Gaps */}
            <Link
              href="/learn/foundations/fair-value-gaps-and-imbalances"
              className="group relative rounded-[28px] bg-white border border-stone-200/90 p-8 flex flex-col justify-between overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-300"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-yellow-500/15 via-amber-400/8 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-6">
                  <span className="text-amber-700 font-bold">✦ 02 / IMBALANCE</span>
                  <span>PD ARRAYS</span>
                </div>

                <div className="text-xs font-mono text-amber-800 uppercase tracking-wider font-semibold mb-1">
                  Rebalance Magnet
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-950 mb-3">
                  Fair Value Gaps
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Displacement leaves three-candle price voids. Consequent Encroachment (50%) serves as the institutional equilibrium entry magnet.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono font-semibold text-stone-500 group-hover:text-amber-700 transition-colors">
                <span>Explore BISI & SIBI</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 3: 20-Min Macros */}
            <Link
              href="/killzones"
              className="group relative rounded-[28px] bg-white border border-stone-200/90 p-8 flex flex-col justify-between overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-purple-300"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-purple-500/12 via-fuchsia-400/8 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-6">
                  <span className="text-purple-700 font-bold">✦ 03 / MACRO</span>
                  <span>TIME & PRICE</span>
                </div>

                <div className="text-xs font-mono text-purple-800 uppercase tracking-wider font-semibold mb-1">
                  Precision Windows
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-950 mb-3">
                  Algorithmic Macros
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  High-probability setups execute strictly during 20-minute macro cycles and institutional sessions: London Open and NY Silver Bullet.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono font-semibold text-stone-500 group-hover:text-purple-700 transition-colors">
                <span>View Macro Schedule</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 4: SMT Divergence */}
            <Link
              href="/learn/advanced/smt-divergence"
              className="group relative rounded-[28px] bg-white border border-stone-200/90 p-8 flex flex-col justify-between overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-300"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-indigo-500/12 via-blue-400/8 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-6">
                  <span className="text-indigo-700 font-bold">✦ 04 / SMT</span>
                  <span>CORRELATION</span>
                </div>

                <div className="text-xs font-mono text-indigo-800 uppercase tracking-wider font-semibold mb-1">
                  Swing Failure
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-950 mb-3">
                  SMT Divergence
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Correlated assets (ES vs NQ, EUR vs GBP) reveal smart money accumulation when one creates a new swing high/low while the other fails.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono font-semibold text-stone-500 group-hover:text-indigo-700 transition-colors">
                <span>Identify Crack in Correlation</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 5: 6-Gate Rulebook */}
            <Link
              href="/checklist"
              className="group relative rounded-[28px] bg-white border border-stone-200/90 p-8 flex flex-col justify-between overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-300"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-emerald-500/12 via-teal-400/8 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-6">
                  <span className="text-emerald-700 font-bold">✦ 05 / DISCIPLINE</span>
                  <span>RISK GOVERNANCE</span>
                </div>

                <div className="text-xs font-mono text-emerald-800 uppercase tracking-wider font-semibold mb-1">
                  Zero Discretion
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-950 mb-3">
                  6-Gate Verification
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Eliminate emotional execution. Trades are verified across HTF context, purge confirmation, displacement MSS, and exact 1:2+ R:R sizing.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono font-semibold text-stone-500 group-hover:text-emerald-700 transition-colors">
                <span>View 6 Execution Gates</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 6: Execution Models */}
            <Link
              href="/learn/models/silver-bullet"
              className="group relative rounded-[28px] bg-white border border-stone-200/90 p-8 flex flex-col justify-between overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-rose-300"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-rose-500/12 via-orange-400/8 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-6">
                  <span className="text-rose-700 font-bold">✦ 06 / BLUEPRINTS</span>
                  <span>EXECUTION MODELS</span>
                </div>

                <div className="text-xs font-mono text-rose-800 uppercase tracking-wider font-semibold mb-1">
                  High Probability
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-950 mb-3">
                  Institutional Models
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Step-by-step blueprints for the 10:00 AM NY Silver Bullet, Market Maker Sell Models (MMSM), and the Unicorn Breaker + FVG setup.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono font-semibold text-stone-500 group-hover:text-rose-700 transition-colors">
                <span>Explore Model Blueprints</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 3. REAL PRODUCT FEATURE SPLIT (Stripe / Apple Style)                 */}
      {/* -------------------------------------------------------------------- */}
      
      {/* FEATURE A: CANDLESTICK PRACTICE LAB */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-semibold border border-emerald-300 inline-block">
                01 / INTERACTIVE PRACTICE LAB
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
                Master Execution Without Risking Capital
              </h2>

              <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
                Reading about Fair Value Gaps is not enough. Practice identifying displacement, setting precise entries at Consequent Encroachment (50%), and managing invalidation across authentic historical scenarios.
              </p>

              <div className="pt-2 space-y-3 font-mono text-xs text-stone-700">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>4 Authentic Historical Drills (EUR/USD, NQ, ES)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Interactive Playback & Candle-by-Candle Stepping</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Instant Scoring on Time & Price Rule Adherence</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/practice"
                  className="px-8 py-3.5 rounded-full bg-[#121316] hover:bg-stone-800 text-white font-semibold text-xs transition-all shadow-md flex items-center gap-2 group w-fit"
                >
                  <span>Launch Practice Simulator</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Mockup Card */}
            <div className="lg:col-span-7 rounded-[32px] border border-stone-200 bg-[#FAF8F5] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between text-xs font-mono text-stone-500 pb-4 mb-6 border-b border-stone-200">
                <div className="flex items-center gap-2 font-bold text-stone-900">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>SCENARIO PLAYER HUD</span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                  Accuracy: 94% · +3.2R
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 mb-5 shadow-xs">
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
                  <span>DECISION POINT 2 OF 3</span>
                  <span className="text-amber-700 font-bold">10:00 AM NY MACRO</span>
                </div>
                <div className="text-sm font-bold text-stone-900 mb-1">
                  NQ 100 · 10:03 AM News Sweep into 1m FVG
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  The morning news sweep cleared equal lows into 15m bullish order block. Price rejected with a 28-handle displacement candle leaving a fresh 1m BISI.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 font-mono text-xs text-center mb-6">
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <span className="text-stone-400 block text-[10px]">ENTRY</span>
                  <span className="font-bold text-stone-900">19,530.00</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <span className="text-stone-400 block text-[10px]">STOP LOSS</span>
                  <span className="font-bold text-rose-700">19,518.00</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <span className="text-stone-400 block text-[10px]">TARGET TP</span>
                  <span className="font-bold text-emerald-700">19,568.00</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  Optimal Trade Entry: 70.5%
                </span>
                <Link href="/practice" className="text-stone-900 font-bold hover:underline">
                  Step Through This Drill →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURE B: 24-HOUR KILLZONES & MACROS */}
      <section className="py-24 bg-[#FAF8F5] border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Timetable Card */}
            <div className="lg:col-span-7 rounded-[32px] border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-stone-500 pb-3 mb-2 border-b border-stone-100">
                <span className="font-bold text-stone-900">24-HOUR INSTITUTIONAL TIMELINE</span>
                <span className="text-amber-700 font-bold">ALL TIMES NY EST</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="font-bold text-stone-900 block">Asian Session</span>
                  <span className="text-stone-500 text-[11px]">Range accumulation & benchmark highs/lows</span>
                </div>
                <span className="font-semibold text-stone-700">20:00 – 00:00 EST</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="font-bold text-emerald-950 block">London Open Killzone</span>
                  <span className="text-emerald-700 text-[11px]">Judas Swing purge & high/low of day formation</span>
                </div>
                <span className="font-bold text-emerald-800">02:00 – 05:00 EST</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="font-bold text-stone-900 block">NY AM Killzone</span>
                  <span className="text-stone-500 text-[11px]">Equities open & high volatility displacement</span>
                </div>
                <span className="font-semibold text-stone-700">07:00 – 10:00 EST</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="font-bold text-amber-950 block">NY Silver Bullet</span>
                  <span className="text-amber-800 text-[11px]">10:00 news macro & 10–15 handle liquidity delivery</span>
                </div>
                <span className="font-bold text-amber-900">10:00 – 11:00 EST</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="font-bold text-stone-900 block">NY PM Session</span>
                  <span className="text-stone-500 text-[11px]">Daily range completion & afternoon macro</span>
                </div>
                <span className="font-semibold text-stone-700">13:30 – 16:00 EST</span>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-semibold border border-blue-300 inline-block">
                02 / TIME & PRICE ENGINE
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
                Price Follows Time, Not Lagging Indicators
              </h2>

              <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
                Algorithmic delivery is strictly time-gated. The Interbank Price Delivery Algorithm operates on fixed 20-minute macro windows and institutional session benchmarks.
              </p>

              <div className="pt-2 space-y-3 font-mono text-xs text-stone-700">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>True Midnight Open (00:00 EST) Institutional Anchor</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>20-Minute Algorithmic Delivery Windows</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Live Macro Countdown Clocks for London & NY</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/killzones"
                  className="px-8 py-3.5 rounded-full bg-[#121316] hover:bg-stone-800 text-white font-semibold text-xs transition-all shadow-md flex items-center gap-2 group w-fit"
                >
                  <span>Open Killzones Timetable</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURE C: 6-GATE EXECUTION RULEBOOK */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-semibold border border-purple-300">
              03 / RISK GOVERNANCE
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950">
              6-Gate Zero-Discretion Verification
            </h2>
            <p className="mt-3 text-stone-600 text-base sm:text-lg leading-relaxed">
              Every trade must pass 6 non-negotiable quantitative gates before execution. Eliminate emotional FOMO entries forever.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-[24px] bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="h-7 w-7 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold flex items-center justify-center">
                    01
                  </span>
                  <span className="text-[11px] font-mono text-stone-400 uppercase">Timing</span>
                </div>
                <h4 className="text-base font-bold text-stone-950 mb-2">Gate 1: Session Time</h4>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  Trade setup executes strictly inside an official Killzone (London, NY AM, NY PM) or a 20-minute algorithmic macro.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-200/60 font-mono text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
                <span>✓ Verified</span>
              </div>
            </div>

            <div className="p-6 rounded-[24px] bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="h-7 w-7 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold flex items-center justify-center">
                    02
                  </span>
                  <span className="text-[11px] font-mono text-stone-400 uppercase">Liquidity</span>
                </div>
                <h4 className="text-base font-bold text-stone-950 mb-2">Gate 2: Liquidity Purge</h4>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  Obvious resting liquidity pool (Asian High/Low, equal highs, previous day extremes) must be swept by a wick.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-200/60 font-mono text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
                <span>✓ Verified</span>
              </div>
            </div>

            <div className="p-6 rounded-[24px] bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="h-7 w-7 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold flex items-center justify-center">
                    03
                  </span>
                  <span className="text-[11px] font-mono text-stone-400 uppercase">Structure</span>
                </div>
                <h4 className="text-base font-bold text-stone-950 mb-2">Gate 3: MSS with Bodies</h4>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  Market Structure Shift must close with full candle bodies beyond the swing point. Wicks sweep; bodies tell the shift.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-200/60 font-mono text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
                <span>✓ Verified</span>
              </div>
            </div>

            <div className="p-6 rounded-[24px] bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="h-7 w-7 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold flex items-center justify-center">
                    04
                  </span>
                  <span className="text-[11px] font-mono text-stone-400 uppercase">Imbalance</span>
                </div>
                <h4 className="text-base font-bold text-stone-950 mb-2">Gate 4: Energetic FVG</h4>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  The displacement run must leave a clear 3-candle Fair Value Gap. Zero imbalance = zero institutional displacement.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-200/60 font-mono text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
                <span>✓ Verified</span>
              </div>
            </div>

            <div className="p-6 rounded-[24px] bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="h-7 w-7 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold flex items-center justify-center">
                    05
                  </span>
                  <span className="text-[11px] font-mono text-stone-400 uppercase">Pricing</span>
                </div>
                <h4 className="text-base font-bold text-stone-950 mb-2">Gate 5: Premium vs Discount</h4>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  Long entries are strictly executed below the 50% dealing range (Discount); short entries strictly above 50% (Premium).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-200/60 font-mono text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
                <span>✓ Verified</span>
              </div>
            </div>

            <div className="p-6 rounded-[24px] bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="h-7 w-7 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold flex items-center justify-center">
                    06
                  </span>
                  <span className="text-[11px] font-mono text-stone-400 uppercase">Mathematics</span>
                </div>
                <h4 className="text-base font-bold text-stone-950 mb-2">Gate 6: Minimum 1:2 R:R</h4>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  Defined stop loss placed at the displacement swing extreme, with opposing liquidity pool delivering ≥ 2.0 Risk:Reward.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-200/60 font-mono text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
                <span>✓ Verified</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/checklist"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#121316] hover:bg-stone-800 text-white font-semibold text-xs shadow-md transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Use Interactive Pre-Trade Checklist</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 4. UNIFIED WARM BANNER & HUMAN FOOTER                                */}
      {/* -------------------------------------------------------------------- */}
      <section className="relative py-24 bg-[#FAF8F5] border-t border-stone-200 overflow-hidden">
        {/* Soft amber sunrise aura */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-orange-500/20 via-amber-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-200 text-xs font-mono text-stone-700 shadow-xs">
            <span>✦</span> A–Z TECHNICAL LEXICON
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-stone-950">
            71 Standardized Algorithmic Definitions
          </h2>
          
          <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-normal">
            From BISI/SIBI to SMT Divergence, Equilibrium Dealing Ranges, and IPDA Data Cycles. Built for immediate lookup while analyzing live charts.
          </p>
          
          <div className="pt-3">
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#121316] hover:bg-stone-800 text-white font-semibold text-sm shadow-md transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Explore Complete Lexicon</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-stone-200 bg-[#FAF8F5] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-xl bg-[#121316] border border-amber-500/30 flex items-center justify-center text-amber-400 text-xs font-bold">
              ✦
            </div>
            <span className="text-sm font-bold text-stone-900">ICT CORE</span>
            <span className="text-xs text-stone-400">— Institutional Price Delivery Architecture</span>
          </div>
          <p className="text-xs text-stone-500 font-sans">
            For educational and simulation purposes only. Not financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
