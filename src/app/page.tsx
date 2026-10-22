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
  Activity,
  Zap,
  Crosshair,
  BarChart3,
  Compass,
  Play,
  RotateCcw,
  Sparkles
} from "lucide-react";

export default function HomePage() {
  const [activeScenario, setActiveScenario] = useState<number>(0);
  const [drillStep, setDrillStep] = useState<number>(2); // 0: Context, 1: Purge, 2: Entry, 3: Target Hit

  const scenarios = [
    {
      id: "judas-swing",
      title: "London Judas Swing",
      asset: "EUR/USD",
      timeframe: "1m Execution",
      session: "London Open · 02:00–05:00 EST",
      badge: "High Probability",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      description: "Asian range high engineered for retail breakout buyers. London opens with an aggressive Judas run sweeping buy-side liquidity, followed by a violent downward market structure shift (MSS) and 50% CE fill on the 1m SIBI.",
      entryRule: "50% Consequent Encroachment of 1m Fair Value Gap",
      invalidation: "Wick extreme of the Judas Swing high",
      target: "Asian Session Lows (Sell-Side Liquidity)",
      riskReward: "1 : 3.4 (+24.0 Pips)",
      gatesStatus: "6 of 6 Gates Locked",
      svgType: "judas"
    },
    {
      id: "silver-bullet",
      title: "NY Silver Bullet",
      asset: "NQ Futures",
      timeframe: "1m / 5m Execution",
      session: "NY AM Session · 10:00–11:00 EST",
      badge: "Institutional Macro",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      description: "The 10:00 AM algorithm macro executes an aggressive purge of equal lows into a higher-timeframe 15m discount Fair Value Gap. Immediate displacement creates a pristine BISI gap with a textbook 15+ handle expansion target.",
      entryRule: "First displacement FVG formed inside the 10:00–11:00 EST window",
      invalidation: "Displacement swing low boundary",
      target: "Previous Session High / Unmitigated SIBI",
      riskReward: "1 : 3.8 (+36.0 Handles)",
      gatesStatus: "6 of 6 Gates Locked",
      svgType: "silverBullet"
    },
    {
      id: "smt-divergence",
      title: "ES / NQ SMT Divergence",
      asset: "ES & NQ Correlated",
      timeframe: "5m Execution",
      session: "NY Open · 09:30–10:30 EST",
      badge: "Smart Money Tool",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      description: "ES makes a lower low sweeping sell-side liquidity, while correlated NQ holds and forms a higher low. This blatant crack in correlation exposes institutional accumulation before the explosive reversal.",
      entryRule: "Inversion FVG tap on the non-sweeping stronger asset",
      invalidation: "Swing low of the divergence creation candle",
      target: "Opposing Clean Highs / Buy-Side Pool",
      riskReward: "1 : 4.1 (+18.5 ES Pts)",
      gatesStatus: "6 of 6 Gates Locked",
      svgType: "smt"
    },
    {
      id: "unicorn-setup",
      title: "The Unicorn Setup",
      asset: "ES Futures",
      timeframe: "2m Execution",
      session: "London / NY Killzones",
      badge: "Double Confluence",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      description: "The highest win-rate ICT execution pattern. A failed order block flips into a Breaker Block simultaneously overlapping an energetic Fair Value Gap. Double institutional confluence for asymmetric execution.",
      entryRule: "Confluence tap of Breaker Block + Fair Value Gap",
      invalidation: "Breaker Block upper threshold boundary",
      target: "Dealing Range Discount 0.705 OTE Target",
      riskReward: "1 : 4.6 (+22.0 ES Pts)",
      gatesStatus: "6 of 6 Gates Locked",
      svgType: "unicorn"
    }
  ];

  const current = scenarios[activeScenario];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col antialiased selection:bg-amber-200 selection:text-stone-900 overflow-x-hidden">
      <Navbar />

      {/* -------------------------------------------------------------------- */}
      {/* 1. HERO SECTION: GITBOOK RADAR + HOBBES ATMOSPHERIC LIGHT HORIZON   */}
      {/* -------------------------------------------------------------------- */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        
        {/* Soft Warm Horizon Mist & Radar Geometry Canvas */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-[860px] pointer-events-none select-none overflow-hidden">
          
          {/* Atmospheric Warm Horizon Gradient (Hobbes morning mist inspiration: apricot, honey, soft sky) */}
          <div className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-[1100px] h-[480px] bg-gradient-to-b from-amber-200/40 via-orange-100/30 to-transparent rounded-full blur-[120px]" />
          <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[850px] h-[280px] bg-gradient-to-r from-sky-100/40 via-amber-100/30 to-orange-100/40 rounded-full blur-[90px]" />

          {/* GitBook Concentric Radar Arcs & Grid Crosshairs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] md:w-[1500px] h-[650px] flex items-center justify-center">
            <svg viewBox="0 0 1400 700" className="w-full h-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lightArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d6d3d1" stopOpacity="0" />
                  <stop offset="20%" stopColor="#d6d3d1" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
                  <stop offset="80%" stopColor="#d6d3d1" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#d6d3d1" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="radarCenterGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.6" />
                  <stop offset="60%" stopColor="#faf8f5" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Center subtle glow */}
              <circle cx="700" cy="380" r="340" fill="url(#radarCenterGlow)" />

              {/* Concentric Coordinate Radar Rings (GitBook style) */}
              <circle cx="700" cy="380" r="140" stroke="#e7e5e4" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="700" cy="380" r="240" stroke="#e7e5e4" strokeWidth="1.2" />
              <circle cx="700" cy="380" r="350" stroke="#e7e5e4" strokeWidth="1" strokeDasharray="6 6" />
              <circle cx="700" cy="380" r="480" stroke="#e7e5e4" strokeWidth="1.2" />
              <circle cx="700" cy="380" r="620" stroke="#f0eeeb" strokeWidth="1" />

              {/* Coordinate Crosshairs */}
              <line x1="700" y1="20" x2="700" y2="680" stroke="#e7e5e4" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="120" y1="380" x2="1280" y2="380" stroke="#e7e5e4" strokeWidth="1" strokeDasharray="3 3" />

              {/* Dynamic Luminous Horizon Arc */}
              <path
                d="M 100 680 Q 700 80 1300 680"
                stroke="url(#lightArcGrad)"
                strokeWidth="2"
              />
              
              {/* Radar Perimeter Tick Marks */}
              <line x1="700" y1="30" x2="700" y2="45" stroke="#f59e0b" strokeWidth="2.5" />
              <line x1="450" y1="130" x2="460" y2="142" stroke="#d6d3d1" strokeWidth="1.5" />
              <line x1="950" y1="130" x2="940" y2="142" stroke="#d6d3d1" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Floating Subtle Geometric Concept Nodes (GitBook orbital pills) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Node 1: IPDA Engine */}
            <div className="absolute top-[90px] left-[18%] -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/90 border border-stone-200/90 shadow-xs backdrop-blur-md flex items-center gap-2 text-[11px] font-mono text-stone-700">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="font-semibold text-stone-900">IPDA 4-STAGE</span>
              <span className="text-stone-400">· Algorithm</span>
            </div>

            {/* Node 2: Judas Swing */}
            <div className="absolute top-[80px] right-[18%] translate-x-1/2 px-3 py-1.5 rounded-full bg-white/90 border border-stone-200/90 shadow-xs backdrop-blur-md flex items-center gap-2 text-[11px] font-mono text-stone-700">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              <span className="font-semibold text-stone-900">JUDAS SWING</span>
              <span className="text-stone-400">· False Expansion</span>
            </div>

            {/* Node 3: 0.705 OTE Sweet Spot */}
            <div className="absolute top-[260px] left-[7%] px-3 py-1.5 rounded-full bg-white/90 border border-amber-300/80 shadow-xs backdrop-blur-md flex items-center gap-2 text-[11px] font-mono text-amber-900">
              <span className="text-amber-500 font-bold">✦</span>
              <span className="font-semibold">0.705 OTE</span>
              <span className="text-amber-700/80">Sweet Spot</span>
            </div>

            {/* Node 4: Fair Value Gap */}
            <div className="absolute top-[250px] right-[7%] px-3 py-1.5 rounded-full bg-white/90 border border-sky-300/80 shadow-xs backdrop-blur-md flex items-center gap-2 text-[11px] font-mono text-sky-900">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              <span className="font-semibold">BISI & SIBI</span>
              <span className="text-sky-700/80">Imbalance</span>
            </div>

            {/* Node 5: NY Silver Bullet */}
            <div className="absolute bottom-[220px] left-[11%] px-3 py-1.5 rounded-full bg-white/90 border border-stone-200/90 shadow-xs backdrop-blur-md flex items-center gap-2 text-[11px] font-mono text-stone-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="font-semibold text-stone-900">SILVER BULLET</span>
              <span className="text-stone-400">10:00 AM Macro</span>
            </div>

            {/* Node 6: SMT Divergence */}
            <div className="absolute bottom-[210px] right-[11%] px-3 py-1.5 rounded-full bg-white/90 border border-stone-200/90 shadow-xs backdrop-blur-md flex items-center gap-2 text-[11px] font-mono text-stone-700">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              <span className="font-semibold text-stone-900">SMT DIVERGENCE</span>
              <span className="text-stone-400">Correlation Crack</span>
            </div>
          </div>

        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Centered Pill Badge (GitBook + Hobbes style) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-200 bg-white/80 text-stone-800 text-xs font-mono font-medium backdrop-blur-md shadow-xs mb-6">
            <span className="text-amber-500 font-bold">✨</span>
            <span>24 Structured Tutorials · Interactive Practice Drills</span>
          </div>

          {/* Master Headline: Architectural Sans in High-Contrast Stone (Hobbes style) */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] lg:text-[76px] font-extrabold tracking-tight text-stone-950 leading-[1.06] max-w-4xl mx-auto">
            Master Order Flow With{" "}
            <span className="bg-gradient-to-r from-amber-600 via-stone-900 to-amber-700 bg-clip-text text-transparent">
              Interactive Practice
            </span>
          </h1>

          {/* Editorial Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto font-normal leading-relaxed">
            The complete interactive tutorial platform for Inner Circle Trader concepts. Learn liquidity sweeps, Fair Value Gaps, and execution models through structured modules and hands-on drills.
          </p>

          {/* Dual Action CTAs (Hobbes Solid Dark Pill + Stone Pill) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/learn"
              className="px-8 py-3.5 rounded-full bg-stone-950 hover:bg-stone-800 text-white font-medium text-sm shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              <span>Start Learning (24 Tutorials)</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/practice"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-stone-50 text-stone-800 font-medium text-sm border border-stone-200/90 shadow-xs transition-all hover:border-stone-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span>Try Interactive Simulator</span>
            </Link>
          </div>

          {/* Clean Trust Metrics Strip */}
          <div className="mt-12 pt-7 border-t border-stone-200/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="text-amber-600 font-bold">24</span> Step-by-Step Lessons
            </span>
            <span className="text-stone-300">·</span>
            <span className="flex items-center gap-2">
              <span className="text-amber-600 font-bold">4</span> Hands-On Drills
            </span>
            <span className="text-stone-300">·</span>
            <span className="flex items-center gap-2">
              <span className="text-amber-600 font-bold">6-Gate</span> Risk Governance
            </span>
            <span className="text-stone-300">·</span>
            <span className="flex items-center gap-2">
              <span className="text-amber-600 font-bold">71</span> Term Lexicon
            </span>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 2. EDITORIAL VALUE STATEMENTS (HOBBES STAGGERED CONTRAST SECTION)     */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-16 md:py-24 border-y border-stone-200/80 bg-white relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-6 sm:space-y-8 text-center max-w-3xl mx-auto">
            <p className="text-base sm:text-lg font-mono uppercase tracking-wider text-stone-400">
              The Reality of Interbank Price Delivery
            </p>

            <div className="space-y-4 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-stone-400">
              <p className="line-through decoration-rose-400/70 decoration-2">
                Retail traders react to lagging moving averages and subjective trendlines.
              </p>
              <p className="text-stone-900 font-bold text-2xl sm:text-3xl md:text-4xl">
                Institutions engineer liquidity above old highs and deliver price strictly to unmitigated imbalances.
              </p>
              <p className="text-amber-700 font-semibold text-lg sm:text-xl">
                ICT Core bridges the gap through zero-discretion rules and interactive scenario practice.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 3. INTERACTIVE PRODUCT WORKSTATION: HOBBES SIDE-BY-SIDE TAB DEMO     */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-20 md:py-28 bg-[#FAF8F5] relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-medium">
              ✦ INTERACTIVE WORKSTATION
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950">
              Explore High-Probability Setups
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Toggle between institutional setups to inspect the exact mechanics: liquidity raid, displacement MSS, Fair Value Gap entry, and asymmetric take-profit.
            </p>
          </div>

          {/* Master Side-by-Side Workstation Chassis (Hobbes tabbed demo frame) */}
          <div className="rounded-3xl border border-stone-200/90 bg-white shadow-xl overflow-hidden">
            
            {/* Chassis Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-stone-200/80 bg-stone-50/70">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="h-4 w-px bg-stone-300" />
                <span className="text-xs font-mono font-bold text-stone-900">
                  {current.asset} · {current.timeframe}
                </span>
                <span className="text-xs font-mono text-stone-500 hidden sm:inline">
                  {current.session}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold border bg-emerald-50 text-emerald-800 border-emerald-200 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  {current.gatesStatus}
                </span>
              </div>
            </div>

            {/* Split Content: Left Scenario Tabs + Right Interactive Vector Diagram */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
              
              {/* Left Column: Tab Selectors (Hobbes style vertical tabs) */}
              <div className="lg:col-span-5 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-stone-200/80 flex flex-col justify-between bg-stone-50/30">
                <div className="space-y-3">
                  <div className="text-xs font-mono font-semibold text-stone-400 uppercase tracking-wider mb-2">
                    SELECT SETUP BLUEPRINT
                  </div>

                  {scenarios.map((sc, idx) => (
                    <button
                      key={sc.id}
                      onClick={() => {
                        setActiveScenario(idx);
                        setDrillStep(2);
                      }}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border ${
                        activeScenario === idx
                          ? "bg-white border-stone-300 shadow-md translate-x-1"
                          : "bg-transparent border-transparent hover:bg-stone-100/70 text-stone-600"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full border ${sc.badgeColor}`}>
                          {sc.badge}
                        </span>
                        <span className="text-xs font-mono font-medium text-stone-400">
                          {sc.asset}
                        </span>
                      </div>
                      <h3 className={`text-base font-bold ${activeScenario === idx ? "text-stone-950" : "text-stone-700"}`}>
                        {sc.title}
                      </h3>
                      <p className="mt-1 text-xs text-stone-500 line-clamp-2 leading-relaxed font-sans">
                        {sc.description}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Scenario Rules Breakdown Card */}
                <div className="mt-6 pt-5 border-t border-stone-200 space-y-2.5 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">ENTRY TRIGGER:</span>
                    <span className="font-semibold text-stone-900 text-right">{current.entryRule}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">INVALIDATION:</span>
                    <span className="font-semibold text-rose-700 text-right">{current.invalidation}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">ASYMMETRIC R:R:</span>
                    <span className="font-bold text-emerald-700">{current.riskReward}</span>
                  </div>

                  <div className="pt-3">
                    <Link
                      href="/practice"
                      className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-all"
                    >
                      <span>Launch This Setup in Practice Lab</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

              </div>

              {/* Right Column: High-Precision Vector Candlestick Diagram */}
              <div className="lg:col-span-7 p-5 sm:p-8 flex flex-col justify-between bg-white">
                
                {/* Visual Step Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-200/80">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-stone-500">DRILL SEQUENCE:</span>
                    <div className="flex items-center gap-1">
                      {["01 Purge", "02 Displacement", "03 FVG Entry", "04 Target Hit"].map((stepLabel, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => setDrillStep(sIdx)}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                            drillStep >= sIdx
                              ? "bg-amber-100 text-amber-900 font-bold border border-amber-300"
                              : "bg-stone-100 text-stone-400 hover:bg-stone-200"
                          }`}
                        >
                          {stepLabel}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setDrillStep((prev) => (prev < 3 ? prev + 1 : 0))}
                    className="p-1.5 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-100 text-xs font-mono flex items-center gap-1.5"
                    title="Advance Step"
                  >
                    <Play className="h-3 w-3" />
                    <span>Next</span>
                  </button>
                </div>

                {/* Vector SVG Candlestick Canvas (Light Institutional Theme) */}
                <div className="my-auto py-6">
                  <div className="relative rounded-2xl bg-stone-50 border border-stone-200 p-4 sm:p-6 overflow-hidden">
                    <svg
                      className="w-full h-auto"
                      viewBox="0 0 760 300"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        {/* FVG Highlight Box */}
                        <linearGradient id="fvgLight" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#0284c7" stopOpacity="0.18" />
                          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.08" />
                        </linearGradient>
                        <linearGradient id="tpLight" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#059669" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>

                      {/* Gridlines */}
                      <line x1="30" y1="40" x2="720" y2="40" stroke="#e7e5e4" strokeDasharray="3 3" />
                      <line x1="30" y1="95" x2="720" y2="95" stroke="#e7e5e4" strokeDasharray="3 3" />
                      <line x1="30" y1="150" x2="720" y2="150" stroke="#e7e5e4" strokeDasharray="3 3" />
                      <line x1="30" y1="205" x2="720" y2="205" stroke="#e7e5e4" strokeDasharray="3 3" />
                      <line x1="30" y1="260" x2="720" y2="260" stroke="#e7e5e4" strokeDasharray="3 3" />

                      {/* Price Labels */}
                      <text x="725" y="44" fill="#a8a29e" fontSize="9.5" fontFamily="monospace">1.08640</text>
                      <text x="725" y="99" fill="#a8a29e" fontSize="9.5" fontFamily="monospace">1.08520</text>
                      <text x="725" y="154" fill="#0284c7" fontSize="9.5" fontFamily="monospace" fontWeight="bold">1.08420 (CE)</text>
                      <text x="725" y="209" fill="#a8a29e" fontSize="9.5" fontFamily="monospace">1.08300</text>
                      <text x="725" y="264" fill="#059669" fontSize="9.5" fontFamily="monospace" fontWeight="bold">1.08180 (TP)</text>

                      {/* STEP 1: Liquidity Purge (Wick Sweep) */}
                      {drillStep >= 0 && (
                        <>
                          <line x1="50" y1="52" x2="320" y2="52" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="4 3" />
                          <rect x="60" y="36" width="160" height="18" rx="4" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="0.8" />
                          <text x="68" y="49" fill="#9f1239" fontSize="9" fontFamily="monospace" fontWeight="bold">
                            ✦ BSL PURGED (Wick Sweep)
                          </text>
                        </>
                      )}

                      {/* STEP 2: Displacement MSS */}
                      {drillStep >= 1 && (
                        <>
                          <line x1="270" y1="125" x2="520" y2="125" stroke="#059669" strokeWidth="1.5" strokeDasharray="4 3" />
                          <rect x="290" y="112" width="150" height="18" rx="4" fill="#d1fae5" stroke="#10b981" strokeWidth="0.8" />
                          <text x="298" y="125" fill="#065f46" fontSize="9" fontFamily="monospace" fontWeight="bold">
                            ✦ MSS (Full Body Close)
                          </text>
                        </>
                      )}

                      {/* STEP 3: Fair Value Gap Box & Entry */}
                      {drillStep >= 2 && (
                        <>
                          <rect x="350" y="110" width="150" height="46" fill="url(#fvgLight)" stroke="#0284c7" strokeWidth="1" strokeDasharray="3 3" />
                          <line x1="350" y1="133" x2="500" y2="133" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3" />
                          <rect x="370" y="139" width="125" height="16" rx="3" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="0.8" />
                          <text x="376" y="151" fill="#0369a1" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
                            50% CE Fill: 1.08420
                          </text>

                          {/* Entry Circle */}
                          <circle cx="440" cy="133" r="4.5" fill="#0284c7" />
                          <circle cx="440" cy="133" r="8" stroke="#0284c7" strokeWidth="1.2" opacity="0.5" />
                        </>
                      )}

                      {/* STEP 4: Target Hit Take Profit */}
                      {drillStep >= 3 && (
                        <>
                          <line x1="500" y1="255" x2="710" y2="255" stroke="#059669" strokeWidth="1.5" strokeDasharray="4 3" />
                          <rect x="520" y="240" width="180" height="18" rx="4" fill="#d1fae5" stroke="#10b981" strokeWidth="0.8" />
                          <text x="528" y="253" fill="#065f46" fontSize="9" fontFamily="monospace" fontWeight="bold">
                            ✦ TARGET HIT: +24 Pips (1:3.4 R:R)
                          </text>
                        </>
                      )}

                      {/* Candlesticks (Clean Light Theme: Emerald Bullish, Crimson Bearish) */}
                      {/* Pre-run base */}
                      <line x1="75" y1="100" x2="75" y2="140" stroke="#059669" strokeWidth="1.5" />
                      <rect x="70" y="110" width="10" height="22" fill="#059669" rx="1.5" />

                      <line x1="110" y1="105" x2="110" y2="148" stroke="#e11d48" strokeWidth="1.5" />
                      <rect x="105" y="115" width="10" height="25" fill="#e11d48" rx="1.5" />

                      <line x1="145" y1="90" x2="145" y2="135" stroke="#059669" strokeWidth="1.5" />
                      <rect x="140" y="98" width="10" height="30" fill="#059669" rx="1.5" />

                      {/* Judas Wick Candle */}
                      <line x1="180" y1="42" x2="180" y2="115" stroke="#e11d48" strokeWidth="1.5" />
                      <rect x="175" y="70" width="10" height="38" fill="#e11d48" rx="1.5" />

                      {/* Displacement Down 1 */}
                      <line x1="220" y1="80" x2="220" y2="148" stroke="#e11d48" strokeWidth="1.5" />
                      <rect x="215" y="90" width="10" height="50" fill="#e11d48" rx="1.5" />

                      {/* Displacement Down 2 (Leaves FVG) */}
                      <line x1="260" y1="130" x2="260" y2="195" stroke="#e11d48" strokeWidth="1.5" />
                      <rect x="255" y="135" width="10" height="52" fill="#e11d48" rx="1.5" />

                      {/* Displacement Down 3 */}
                      <line x1="300" y1="175" x2="300" y2="230" stroke="#e11d48" strokeWidth="1.5" />
                      <rect x="295" y="182" width="10" height="40" fill="#e11d48" rx="1.5" />

                      {/* Retracement Up into FVG */}
                      <line x1="350" y1="170" x2="350" y2="225" stroke="#059669" strokeWidth="1.5" />
                      <rect x="345" y="178" width="10" height="38" fill="#059669" rx="1.5" />

                      <line x1="395" y1="145" x2="395" y2="200" stroke="#059669" strokeWidth="1.5" />
                      <rect x="390" y="152" width="10" height="38" fill="#059669" rx="1.5" />

                      {/* Tap 50% CE Candle */}
                      <line x1="440" y1="131" x2="440" y2="185" stroke="#0284c7" strokeWidth="2" />
                      <rect x="435" y="140" width="10" height="36" fill="#0284c7" rx="1.5" />

                      {/* Expansion Downward */}
                      {drillStep >= 3 && (
                        <>
                          <line x1="485" y1="150" x2="485" y2="215" stroke="#e11d48" strokeWidth="1.5" />
                          <rect x="480" y="160" width="10" height="48" fill="#e11d48" rx="1.5" />

                          <line x1="530" y1="195" x2="530" y2="250" stroke="#e11d48" strokeWidth="1.5" />
                          <rect x="525" y="202" width="10" height="42" fill="#e11d48" rx="1.5" />

                          <line x1="575" y1="230" x2="575" y2="275" stroke="#059669" strokeWidth="1.5" />
                          <rect x="570" y="238" width="10" height="30" fill="#059669" rx="1.5" />
                        </>
                      )}
                    </svg>
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="pt-4 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80">
                    <span className="text-stone-400 block text-[10px]">TIME WINDOW</span>
                    <span className="text-stone-900 font-bold">{current.session.split("·")[1]}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80">
                    <span className="text-stone-400 block text-[10px]">EXECUTION BIAS</span>
                    <span className="text-rose-700 font-bold">Bearish Expansion</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80">
                    <span className="text-stone-400 block text-[10px]">RISK / REWARD</span>
                    <span className="text-emerald-700 font-bold">{current.riskReward}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80">
                    <span className="text-stone-400 block text-[10px]">DISCRETION</span>
                    <span className="text-stone-900 font-bold">0% Quantitative</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 4. CORE PRINCIPLES: HIGH-CRAFT LIGHT STONE CARDS                     */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-24 bg-white border-t border-stone-200/80 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono font-medium">
              ✦ CORE PRINCIPLES
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950">
              The Architecture of Price
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Every price movement is driven by algorithmically engineered liquidity pools and institutional delivery targets.
            </p>
          </div>

          {/* 6 Sleek Light Cards with Subtle Warm Hover Blooms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Liquidity Purge */}
            <Link
              href="/learn/foundations/liquidity-concepts"
              className="group relative rounded-3xl bg-[#FAF8F5] border border-stone-200/80 p-8 flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg hover:bg-white"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-6">
                  <span className="text-amber-600 font-bold">✦ 01 / PURGE</span>
                  <span>IPDA MECHANIC</span>
                </div>

                <div className="text-xs font-mono text-amber-600 uppercase tracking-wider font-semibold mb-1">
                  Engineered Stops
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
                  The Judas Swing
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Price sweeps equal highs or lows at key session opens, hunting resting retail stop orders before the real algorithmic expansion unfolds.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-200/70 flex items-center justify-between text-xs font-mono font-semibold text-stone-500 group-hover:text-stone-900 transition-colors">
                <span>Wicks Sweep · Bodies Tell</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 2: Fair Value Gaps */}
            <Link
              href="/learn/foundations/imbalances-and-fvg"
              className="group relative rounded-3xl bg-[#FAF8F5] border border-stone-200/80 p-8 flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg hover:bg-white"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-6">
                  <span className="text-sky-600 font-bold">✦ 02 / IMBALANCE</span>
                  <span>PD ARRAYS</span>
                </div>

                <div className="text-xs font-mono text-sky-600 uppercase tracking-wider font-semibold mb-1">
                  Rebalance Magnet
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-900 mb-3 group-hover:text-sky-700 transition-colors">
                  Fair Value Gaps
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Displacement leaves three-candle price voids. Consequent Encroachment (50%) serves as the institutional equilibrium entry magnet.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-200/70 flex items-center justify-between text-xs font-mono font-semibold text-stone-500 group-hover:text-stone-900 transition-colors">
                <span>Explore BISI & SIBI</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 3: 20-Min Macros */}
            <Link
              href="/killzones"
              className="group relative rounded-3xl bg-[#FAF8F5] border border-stone-200/80 p-8 flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:shadow-lg hover:bg-white"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-6">
                  <span className="text-purple-600 font-bold">✦ 03 / MACRO</span>
                  <span>TIME & PRICE</span>
                </div>

                <div className="text-xs font-mono text-purple-600 uppercase tracking-wider font-semibold mb-1">
                  Precision Windows
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-900 mb-3 group-hover:text-purple-700 transition-colors">
                  Algorithmic Macros
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  High-probability setups execute strictly during 20-minute macro cycles and institutional sessions: London Open and NY Silver Bullet.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-200/70 flex items-center justify-between text-xs font-mono font-semibold text-stone-500 group-hover:text-stone-900 transition-colors">
                <span>View Macro Schedule</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 4: SMT Divergence */}
            <Link
              href="/learn/advanced/smt-divergence"
              className="group relative rounded-3xl bg-[#FAF8F5] border border-stone-200/80 p-8 flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg hover:bg-white"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-6">
                  <span className="text-blue-600 font-bold">✦ 04 / SMT</span>
                  <span>CORRELATION</span>
                </div>

                <div className="text-xs font-mono text-blue-600 uppercase tracking-wider font-semibold mb-1">
                  Swing Failure
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-900 mb-3 group-hover:text-blue-700 transition-colors">
                  SMT Divergence
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Correlated assets (ES vs NQ, EUR vs GBP) reveal smart money accumulation when one creates a new swing high/low while the other fails.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-200/70 flex items-center justify-between text-xs font-mono font-semibold text-stone-500 group-hover:text-stone-900 transition-colors">
                <span>Identify Crack in Correlation</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 5: 6-Gate Rulebook */}
            <Link
              href="/checklist"
              className="group relative rounded-3xl bg-[#FAF8F5] border border-stone-200/80 p-8 flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg hover:bg-white"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-6">
                  <span className="text-emerald-600 font-bold">✦ 05 / DISCIPLINE</span>
                  <span>RISK GOVERNANCE</span>
                </div>

                <div className="text-xs font-mono text-emerald-600 uppercase tracking-wider font-semibold mb-1">
                  Zero Discretion
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  6-Gate Verification
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Eliminate emotional execution. Trades are verified across HTF context, purge confirmation, displacement MSS, and exact 1:2+ R:R sizing.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-200/70 flex items-center justify-between text-xs font-mono font-semibold text-stone-500 group-hover:text-stone-900 transition-colors">
                <span>View 6 Execution Gates</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 6: Execution Models */}
            <Link
              href="/learn/execution-models/silver-bullet-strategy"
              className="group relative rounded-3xl bg-[#FAF8F5] border border-stone-200/80 p-8 flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-rose-400 hover:shadow-lg hover:bg-white"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-6">
                  <span className="text-rose-600 font-bold">✦ 06 / BLUEPRINTS</span>
                  <span>EXECUTION MODELS</span>
                </div>

                <div className="text-xs font-mono text-rose-600 uppercase tracking-wider font-semibold mb-1">
                  High Probability
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-900 mb-3 group-hover:text-rose-700 transition-colors">
                  Institutional Models
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Step-by-step blueprints for the 10:00 AM NY Silver Bullet, Market Maker Sell Models (MMSM), and the Unicorn Breaker + FVG setup.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-200/70 flex items-center justify-between text-xs font-mono font-semibold text-stone-500 group-hover:text-stone-900 transition-colors">
                <span>Explore Model Blueprints</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 5. RISK GOVERNANCE: 6-GATE PRE-FLIGHT VERIFICATION CHASSIS (LIGHT)   */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-24 bg-[#FAF8F5] border-t border-stone-200/80 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono font-medium shadow-xs mb-4">
              <span className="text-amber-500">✦</span>
              <span>RISK GOVERNANCE ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
              6-Gate Zero-Discretion Protocol
            </h2>
            <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
              Every position must pass 6 non-negotiable quantitative gates before order submission. Eliminate emotional retail impulse trades forever.
            </p>
          </div>

          {/* Master Institutional Verification Chassis (Clean Light Theme) */}
          <div className="rounded-3xl border border-stone-200/90 bg-white shadow-xl overflow-hidden">
            
            {/* Chassis Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-6 sm:px-8 border-b border-stone-200/80 bg-stone-50/70">
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <div className="font-mono text-xs">
                  <span className="font-bold text-stone-900 tracking-wider">SYSTEM STATUS: </span>
                  <span className="text-emerald-700 font-semibold">6 OF 6 GATES LOCKED · EXECUTION AUTHORIZED</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-stone-500 text-[11px] hidden sm:inline">ALGORITHMIC COMPLIANCE:</span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
                  100% DISCRETION ZERO
                </span>
              </div>
            </div>

            {/* The 6 Sequential Pipeline Gates */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              
              {/* Gate 1 */}
              <div className="group relative rounded-2xl border border-stone-200/80 bg-stone-50/40 hover:bg-white p-5 transition-all duration-200 hover:border-amber-400 hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-200/80 font-mono text-[11px] font-bold text-stone-800">
                      GATE 01 · TIMING
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
                      <span>✓ Locked</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                    Institutional Session Window
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-3">
                    Trade setup executes strictly inside an official Killzone (London Open 02:00–05:00, NY AM 07:00–10:00) or an active 20-minute macro.
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-200 text-[11px] font-mono text-stone-500">
                  <span className="text-amber-700 font-medium">Invalidation: </span>
                  <span>Dead lunch hours (12:00–13:30) or Asian consolidation.</span>
                </div>
              </div>

              {/* Gate 2 */}
              <div className="group relative rounded-2xl border border-stone-200/80 bg-stone-50/40 hover:bg-white p-5 transition-all duration-200 hover:border-amber-400 hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-200/80 font-mono text-[11px] font-bold text-stone-800">
                      GATE 02 · LIQUIDITY
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
                      <span>✓ Locked</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                    Liquidity Pool Wick Sweep
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-3">
                    A prominent resting pool (Asian High/Low, equal highs/lows, previous day extremes) must be swept by candle wick into HTF key level.
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-200 text-[11px] font-mono text-stone-500">
                  <span className="text-amber-700 font-medium">Invalidation: </span>
                  <span>Entering mid-range without an obvious liquidity raid.</span>
                </div>
              </div>

              {/* Gate 3 */}
              <div className="group relative rounded-2xl border border-stone-200/80 bg-stone-50/40 hover:bg-white p-5 transition-all duration-200 hover:border-amber-400 hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-200/80 font-mono text-[11px] font-bold text-stone-800">
                      GATE 03 · STRUCTURE
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
                      <span>✓ Locked</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                    Displacement MSS with Bodies
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-3">
                    Market Structure Shift must close with full candle bodies beyond the swing point. Wicks sweep; bodies validate the institutional shift.
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-200 text-[11px] font-mono text-stone-500">
                  <span className="text-amber-700 font-medium">Invalidation: </span>
                  <span>Wicks that fail to close beyond the opposing swing.</span>
                </div>
              </div>

              {/* Gate 4 */}
              <div className="group relative rounded-2xl border border-stone-200/80 bg-stone-50/40 hover:bg-white p-5 transition-all duration-200 hover:border-amber-400 hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-200/80 font-mono text-[11px] font-bold text-stone-800">
                      GATE 04 · IMBALANCE
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
                      <span>✓ Locked</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                    Energetic Fair Value Gap
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-3">
                    The displacement impulse must generate a clean 3-candle Fair Value Gap (BISI/SIBI). Zero imbalance equals zero institutional sponsorship.
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-200 text-[11px] font-mono text-stone-500">
                  <span className="text-amber-700 font-medium">Invalidation: </span>
                  <span>Overlap candles without single-direction price imbalance.</span>
                </div>
              </div>

              {/* Gate 5 */}
              <div className="group relative rounded-2xl border border-stone-200/80 bg-stone-50/40 hover:bg-white p-5 transition-all duration-200 hover:border-amber-400 hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-200/80 font-mono text-[11px] font-bold text-stone-800">
                      GATE 05 · PRICING
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
                      <span>✓ Locked</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                    Discount vs. Premium Array
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-3">
                    Long entries strictly executed in Discount (&lt; 50% Equilibrium), ideally at 0.705 OTE Sweet Spot. Shorts strictly executed in Premium (&gt; 50%).
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-200 text-[11px] font-mono text-stone-500">
                  <span className="text-amber-700 font-medium">Invalidation: </span>
                  <span>Buying above 50% equilibrium or selling below 50%.</span>
                </div>
              </div>

              {/* Gate 6 */}
              <div className="group relative rounded-2xl border border-stone-200/80 bg-stone-50/40 hover:bg-white p-5 transition-all duration-200 hover:border-amber-400 hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-200/80 font-mono text-[11px] font-bold text-stone-800">
                      GATE 06 · MATHEMATICS
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
                      <span>✓ Locked</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                    Minimum 1:2.0 Asymmetric R:R
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-3">
                    Stop loss strictly placed beyond displacement swing extreme. Target Draw on Liquidity (DOL) must deliver at least 2.0x the risk.
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-200 text-[11px] font-mono text-stone-500">
                  <span className="text-amber-700 font-medium">Invalidation: </span>
                  <span>Trades offering less than 1:2 risk-to-reward ratio.</span>
                </div>
              </div>

            </div>

            {/* Chassis Footer Bar & Action */}
            <div className="p-6 sm:px-8 border-t border-stone-200/80 bg-stone-50/70 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-stone-600 flex items-center gap-2">
                <span className="text-amber-500 font-bold">✦</span>
                <span>All 6 gates must pass simultaneously before order execution.</span>
              </div>

              <Link
                href="/checklist"
                className="px-6 py-2.5 rounded-full bg-stone-950 hover:bg-stone-800 text-white text-xs font-semibold shadow-xs transition-all hover:scale-102 flex items-center gap-2"
              >
                <span>Launch Interactive Pre-Trade Checklist</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 6. UNIFIED LIGHT LEXICON BANNER & HUMAN FOOTER                       */}
      {/* -------------------------------------------------------------------- */}
      <section className="relative py-24 bg-gradient-to-b from-stone-50 to-stone-100 border-t border-stone-200 overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-xs font-mono text-stone-700 shadow-xs">
            <span className="text-amber-500">✦</span> A–Z TECHNICAL LEXICON
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-950 hover:bg-stone-800 text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
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
            <div className="h-7 w-7 rounded-xl bg-stone-900 flex items-center justify-center text-white text-xs font-bold">
              ✦
            </div>
            <span className="text-sm font-bold text-stone-900">ICT CORE</span>
            <span className="text-xs text-stone-500">— Institutional Price Delivery Architecture</span>
          </div>
          <p className="text-xs text-stone-500 font-sans">
            For educational and simulation purposes only. Not financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
