"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { ArrowRight, Check, ChevronDown, BookOpen, Clock } from "lucide-react";

/* ─── Inline MiniChart ──────────────────────────────────── */
function MiniChart({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const bg = theme === "dark" ? "#111214" : "#f8f7f5";
  const grid = theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)";
  const textCol = theme === "dark" ? "#4b5563" : "#9ca3af";
  const candles = [
    { x: 26,  o: 160, c: 140, h: 165, l: 135 },
    { x: 58,  o: 142, c: 155, h: 160, l: 138 },
    { x: 90,  o: 153, c: 138, h: 158, l: 132 },
    { x: 122, o: 140, c: 122, h: 145, l: 118 }, // judas wick
    { x: 154, o: 124, c: 138, h: 142, l: 120 }, // reversal
    { x: 186, o: 136, c: 152, h: 156, l: 134 },
    { x: 218, o: 150, c: 165, h: 169, l: 148 },
    { x: 250, o: 163, c: 178, h: 182, l: 161 },
    { x: 282, o: 176, c: 190, h: 194, l: 174 },
  ];
  return (
    <svg viewBox="0 0 340 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="220" fill={bg} rx="12" />
      {/* Grid */}
      {[60,100,140,180].map(y => (
        <line key={y} x1="16" y1={y} x2="324" y2={y} stroke={grid} strokeWidth="1" />
      ))}
      {/* BSL sweep level */}
      <line x1="20" y1="130" x2="160" y2="130" stroke="#f43f5e" strokeWidth="0.8" strokeDasharray="3 3" />
      <text x="22" y="127" fontSize="8" fill="#f43f5e" fontFamily="monospace" opacity="0.8">BSL</text>
      {/* FVG box */}
      <rect x="144" y="130" width="50" height="22" fill="#3b82f6" fillOpacity="0.15" />
      <line x1="144" y1="141" x2="194" y2="141" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="2 2" />
      <text x="148" y="128" fontSize="7.5" fill="#60a5fa" fontFamily="monospace">FVG</text>
      {/* TP */}
      <line x1="194" y1="82" x2="324" y2="82" stroke="#10b981" strokeWidth="0.8" strokeDasharray="3 3" />
      <text x="198" y="79" fontSize="7.5" fill="#10b981" fontFamily="monospace">TP +24p</text>
      {/* Candles */}
      {candles.map((c, i) => {
        const bull = c.c > c.o;
        const col = i === 3 ? "#f43f5e" : (bull ? "#10b981" : "#f43f5e");
        return (
          <g key={i}>
            <line x1={c.x + 14} y1={c.h} x2={c.x + 14} y2={c.l} stroke={col} strokeWidth="1.2" />
            <rect x={c.x} y={Math.min(c.o, c.c)} width="28" height={Math.max(Math.abs(c.o - c.c), 3)} rx="2" fill={col} />
          </g>
        );
      })}
      {/* Entry dot */}
      <circle cx="168" cy="141" r="4" fill="#60a5fa" />
      <circle cx="168" cy="141" r="8" stroke="#60a5fa" strokeWidth="1" opacity="0.4" />
      {/* Price labels */}
      <text x="296" y="135" fontSize="8" fill={textCol} fontFamily="monospace">1.0842</text>
      <text x="296" y="85" fontSize="8" fill="#10b981" fontFamily="monospace">1.0866</text>
    </svg>
  );
}

/* ─── Main ───────────────────────────────────────────────── */
export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0);
  const [openTier, setOpenTier] = useState<string>("foundations");

  const curriculumTiers = [
    {
      id: "foundations",
      tier: "01",
      title: "Foundations",
      subtitle: "Interbank Price Delivery & Liquidity Basics",
      tag: "8 Lessons · 65 min",
      color: "text-sky-400",
      accentBg: "bg-sky-500/10 border-sky-500/20",
      modules: [
        { title: "Liquidity & Stop Hunts", slug: "liquidity-concepts", level: "foundations", time: "8 min", desc: "Buy-side & sell-side liquidity pools, engineered stops, and turtle soups." },
        { title: "Fair Value Gaps (BISI & SIBI)", slug: "imbalances-and-fvg", level: "foundations", time: "8 min", desc: "3-candle algorithmic displacement voids and Consequent Encroachment (50%)." },
        { title: "Market Structure (BOS & MSS)", slug: "market-structure", level: "foundations", time: "9 min", desc: "Fractal swing points, trend continuation vs market structure shift." },
        { title: "Dealing Ranges & Equilibrium", slug: "dealing-ranges", level: "foundations", time: "7 min", desc: "50% equilibrium, discount zones for longs, and premium zones for shorts." },
        { title: "Session Theory & Killzones", slug: "session-theory-and-killzones", level: "foundations", time: "8 min", desc: "Asian, London, and New York institutional timing and liquidity cycles." },
        { title: "IPDA & 4-Stage Algorithm", slug: "ipda-and-pdra", level: "foundations", time: "9 min", desc: "Consolidation, Expansion, Retracement, Reversal 20/40/60 day lookback." },
        { title: "Order Blocks & Breakers", slug: "order-blocks-and-breakers", level: "foundations", time: "8 min", desc: "High-probability institutional footprints and failed order block flips." },
        { title: "Power of Three (AMD)", slug: "power-of-3", level: "foundations", time: "7 min", desc: "Accumulation, Judas Swing manipulation, and real algorithmic distribution." },
      ]
    },
    {
      id: "intermediate",
      tier: "02",
      title: "Intermediate",
      subtitle: "Optimal Trade Entry & Timing Precision",
      tag: "6 Lessons · 48 min",
      color: "text-amber-400",
      accentBg: "bg-amber-500/10 border-amber-500/20",
      modules: [
        { title: "Premium & Discount · OTE", slug: "premium-discount-and-ote", level: "intermediate", time: "9 min", desc: "The 0.705 Fibonacci sweet spot inside institutional dealing ranges." },
        { title: "20-Min Algorithmic Macros", slug: "macro-windows", level: "intermediate", time: "8 min", desc: "Algorithmic execution windows throughout London and New York." },
        { title: "Consequent Encroachment", slug: "consequent-encroachment", level: "intermediate", time: "7 min", desc: "50% midpoint of shadows, gaps, and institutional candles." },
        { title: "Daily Profiles & Narrative", slug: "daily-profiles", level: "intermediate", time: "8 min", desc: "Classic Tuesday low/high of the week, London reversals, and continuation." },
        { title: "Weekly Range Delivery", slug: "weekly-profiles", level: "intermediate", time: "8 min", desc: "Weekly expansion targets, Sunday gaps, and Friday settlement." },
        { title: "Monthly IPDA Data Range", slug: "monthly-ipda", level: "intermediate", time: "8 min", desc: "20, 40, and 60 day institutional algorithmic reference ranges." },
      ]
    },
    {
      id: "advanced",
      tier: "03",
      title: "Advanced",
      subtitle: "Multi-Asset Correlation & Institutional Blueprints",
      tag: "5 Lessons · 42 min",
      color: "text-purple-400",
      accentBg: "bg-purple-500/10 border-purple-500/20",
      modules: [
        { title: "SMT Divergence", slug: "smt-divergence", level: "advanced", time: "9 min", desc: "Correlated cracks in ES/NQ, EUR/GBP exposing smart money accumulation." },
        { title: "Inversion Fair Value Gap", slug: "inversion-fvg", level: "advanced", time: "8 min", desc: "Failed FVG zones flipping into supportive institutional order flow." },
        { title: "The Unicorn Setup", slug: "the-unicorn-model", level: "advanced", time: "9 min", desc: "Double confluence: Breaker Block overlapping an active Fair Value Gap." },
        { title: "Market Maker Models (MMSM / MMBM)", slug: "market-maker-models", level: "advanced", time: "8 min", desc: "Original consolidation, smart money reversal, and curve distribution." },
        { title: "2022 ICT Blueprint", slug: "2022-mentorship-model", level: "advanced", time: "8 min", desc: "The complete step-by-step institutional intraday trade model." },
      ]
    },
    {
      id: "execution",
      tier: "04",
      title: "Execution Models",
      subtitle: "Zero-Discretion Intraday Trade Blueprints",
      tag: "3 Lessons · 28 min",
      color: "text-emerald-400",
      accentBg: "bg-emerald-500/10 border-emerald-500/20",
      modules: [
        { title: "NY Silver Bullet (10:00–11:00 AM)", slug: "silver-bullet-strategy", level: "execution-models", time: "9 min", desc: "The premier daily 15-handle algorithmic displacement setup." },
        { title: "London Judas Swing Model", slug: "london-judas-swing", level: "execution-models", time: "9 min", desc: "Asian range high/low sweep followed by 5m displacement MSS." },
        { title: "6-Gate Pre-Trade Protocol", slug: "six-gate-execution-protocol", level: "execution-models", time: "10 min", desc: "The mandatory institutional risk verification checklist." },
      ]
    },
    {
      id: "practice",
      tier: "05",
      title: "Practice Drills",
      subtitle: "Hands-On Candlestick Replay Scenarios",
      tag: "4 Live Drills",
      color: "text-rose-400",
      accentBg: "bg-rose-500/10 border-rose-500/20",
      modules: [
        { title: "EUR/USD London Judas Drill", slug: "judas-drill", level: "practice", time: "15 min", desc: "Live Asian high sweep into 1m FVG entry with real-time feedback." },
        { title: "NQ 10:00 AM Silver Bullet Drill", slug: "silver-bullet-drill", level: "practice", time: "15 min", desc: "Execute the 10:00 AM macro liquidity raid with strict 1:3 R:R." },
      ]
    }
  ];

  const steps = [
    {
      label: "Understand Liquidity",
      body: "Before price moves, the algorithm needs fuel. It finds that fuel in the stop orders of retail traders sitting above equal highs and below equal lows.",
    },
    {
      label: "Identify the Setup",
      body: "A valid setup requires a liquidity sweep, a market structure shift with displacement bodies, and a Fair Value Gap for precise entry — all inside an institutional session window.",
    },
    {
      label: "Time the Entry",
      body: "The 10:00 AM Silver Bullet, London Open macro, and NY AM killzone deliver 90% of high-probability setups. Outside these windows, probability collapses.",
    },
    {
      label: "Execute & Hold",
      body: "Entry at the 50% Consequent Encroachment of the FVG. Stop behind the displacement swing. Target the opposing liquidity pool. Minimum 1:2 R:R enforced before order submission.",
    },
  ];

  const concepts = [
    { abbr: "FVG", full: "Fair Value Gap", href: "/learn/foundations/imbalances-and-fvg" },
    { abbr: "OTE", full: "0.705 Sweet Spot", href: "/learn/intermediate/premium-discount-and-ote" },
    { abbr: "MSS", full: "Market Structure Shift", href: "/learn/foundations/market-structure" },
    { abbr: "BSL/SSL", full: "Liquidity Pools", href: "/learn/foundations/liquidity-concepts" },
    { abbr: "SMT", full: "Smart Money Tool", href: "/learn/advanced/smt-divergence" },
    { abbr: "BOS", full: "Break of Structure", href: "/learn/foundations/market-structure" },
    { abbr: "IPDA", full: "Algo Data Range", href: "/learn/foundations/ipda-and-pdra" },
    { abbr: "Power of 3", full: "AMD Model", href: "/learn/advanced/power-of-3" },
  ];

  return (
    <div className="bg-[#0c0d0f] text-white min-h-screen antialiased overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════
          HERO — Cinematic full-bleed atmospheric backdrop
      ═══════════════════════════════════════════════════ */}
      <section className="relative h-[780px] flex flex-col justify-between overflow-hidden">
        <Navbar />

        {/* Photorealistic Horizon Landscape */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none select-none"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          {/* Subtle top vignette and bottom fade into #0c0d0f */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0d0f]/50 via-transparent to-[#0c0d0f]" />
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#0c0d0f] to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 pt-28 pb-20 px-4 text-center">
          {/* Pill */}
          <div className="mb-7 inline-flex items-center gap-2 text-[11px] font-medium text-white/60 border border-white/15 rounded-full px-3.5 py-1 backdrop-blur-sm bg-white/5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            The ICT Framework
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[64px] font-semibold tracking-tight text-white leading-[1.1] max-w-3xl mx-auto mb-5">
            Learn to read price<br />the way it's written.
          </h1>

          <p className="text-white/50 text-base sm:text-lg max-w-md mx-auto mb-9 leading-relaxed">
            An interactive curriculum for the Inner Circle Trader methodology.
            24 structured modules. No fluff.
          </p>

          <div className="flex items-center gap-3">
            <Link href="/learn"
              className="px-5 py-2.5 rounded-full bg-white text-stone-950 text-sm font-semibold hover:bg-white/90 transition-colors shadow-lg">
              Start Learning
            </Link>
            <Link href="/practice"
              className="px-5 py-2.5 rounded-full border border-white/20 text-white/80 text-sm hover:bg-white/8 hover:text-white transition-colors backdrop-blur-sm bg-white/5">
              Try Practice Lab
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INSTITUTIONAL MARKETS STRIP (HOBBES PARTNER ROW)
      ═══════════════════════════════════════════════════ */}
      <section className="py-8 border-y border-white/[0.06] bg-white/[0.01]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 text-white/30 text-xs font-mono tracking-wider">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/20" /> CME GROUP</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/20" /> E-MINI S&P 500 (ES)</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/20" /> NASDAQ 100 (NQ)</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/20" /> EUR / USD (FX)</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/20" /> NYMEX CRUDE (CL)</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/20" /> 10-YR T-NOTE (ZN)</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          EDITORIAL STATEMENTS — Hobbes Typography
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-12">
          
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-white/40 border border-white/10 px-3.5 py-1 rounded-full bg-white/[0.02]">
            The Algorithmic Reality
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-5xl font-semibold tracking-tight text-white leading-[1.18]">
              Retail traders study candles and indicators.
            </h2>
            <h2 className="text-3xl sm:text-5xl md:text-5xl font-semibold tracking-tight text-white leading-[1.18]">
              Institutions engineer the candles retail traders study.
            </h2>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto pt-6 border-t border-white/[0.08]">
            <p className="text-2xl sm:text-3xl font-normal tracking-tight text-white/35 leading-relaxed">
              Traditional chart patterns lag price delivery.
            </p>
            <p className="text-2xl sm:text-3xl font-medium tracking-tight bg-gradient-to-r from-amber-200 via-orange-300 to-amber-400 bg-clip-text text-transparent leading-relaxed">
              Understanding institutional liquidity changes everything.
            </p>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW IT WORKS — Left tabs, right chart
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-t border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-6">

          {/* Section label */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 text-[11px] font-mono text-amber-400/80">
              <span className="h-1 w-4 bg-amber-400/50 rounded" />
              How ICT Core teaches price delivery
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: step list */}
            <div className="space-y-1">
              {steps.map((s, i) => (
                <button key={i} onClick={() => setActiveStep(i)}
                  className={`w-full text-left group transition-all duration-200`}>
                  <div className={`py-4 border-b transition-colors ${activeStep === i ? "border-white/20" : "border-white/[0.06] hover:border-white/12"}`}>
                    <div className={`text-[15px] font-medium transition-colors ${activeStep === i ? "text-white" : "text-white/40 group-hover:text-white/60"}`}>
                      {s.label}
                    </div>
                    {activeStep === i && (
                      <p className="mt-3 text-sm text-white/50 leading-relaxed">
                        {s.body}
                      </p>
                    )}
                  </div>
                </button>
              ))}

              <div className="pt-6">
                <p className="text-xs text-white/25 leading-relaxed">
                  ICT Core maps each concept to the precise module where it's taught — with diagrams, key takeaways, and a 3-question knowledge check.
                </p>
                <Link href="/learn" className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors font-mono">
                  Browse curriculum <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: chart preview */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
                {/* Window chrome */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#141618] border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    </div>
                    <span className="text-[11px] font-mono text-white/30 ml-2">EUR/USD · 1m · London Open</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    02:47 EST
                  </span>
                </div>

                {/* Chart */}
                <div className="h-[200px] sm:h-[240px]">
                  <MiniChart theme="dark" />
                </div>

                {/* Telemetry */}
                <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-t border-white/[0.06]">
                  {[
                    { label: "PATTERN", value: "Judas + 1m SIBI" },
                    { label: "ENTRY", value: "50% CE · 1.0842" },
                    { label: "R:R", value: "1 : 3.4" },
                  ].map(t => (
                    <div key={t.label} className="px-4 py-3 bg-[#111214]">
                      <div className="text-[10px] font-mono text-white/25 uppercase">{t.label}</div>
                      <div className="text-xs font-mono font-semibold text-white/80 mt-1">{t.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Annotation chips */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-red-500/20 bg-red-950/20 px-4 py-3">
                  <div className="text-[10px] font-mono text-red-400/60 uppercase mb-1">Liquidity Sweep</div>
                  <div className="text-sm font-semibold text-white/80">BSL Purged</div>
                  <div className="text-xs text-white/30 mt-0.5">Bodies close back inside range</div>
                </div>
                <div className="rounded-xl border border-blue-500/20 bg-blue-950/20 px-4 py-3">
                  <div className="text-[10px] font-mono text-blue-400/60 uppercase mb-1">Entry Model</div>
                  <div className="text-sm font-semibold text-white/80">1m SIBI · 50% CE</div>
                  <div className="text-xs text-white/30 mt-0.5">Limit order · gate 4 confirmed</div>
                </div>
              </div>

              {/* 6-gate row */}
              <div className="rounded-xl border border-white/[0.08] bg-[#111214] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {[1,2,3,4,5,6].map(g => (
                    <span key={g} className="h-5 w-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                      <Check className="h-2.5 w-2.5 text-emerald-400" strokeWidth={3} />
                    </span>
                  ))}
                </div>
                <span className="text-[11px] font-mono text-emerald-400/70 font-semibold">6/6 GATES · AUTHORIZED</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CURRICULUM ACCORDIONS — Interactive Dropdown Drawers
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-t border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left: heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 self-start space-y-5">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono text-amber-400/90 uppercase tracking-wider bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                <span>✦</span>
                <span>24 Structured Modules</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
                Everything<br />covered.
              </h2>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                From the first principles of interbank liquidity all the way through live execution models. Expand any section to explore lessons and drills.
              </p>
              <div className="pt-2">
                <Link href="/learn" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-stone-950 text-sm font-semibold hover:bg-white/90 transition-colors">
                  <span>Open Full Curriculum</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right: Accordion Drawer Group */}
            <div className="lg:col-span-7 space-y-3.5">
              {curriculumTiers.map((tier) => {
                const isOpen = openTier === tier.id;
                return (
                  <div
                    key={tier.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-white/[0.03] border-white/20 shadow-xl"
                        : "bg-white/[0.015] border-white/[0.07] hover:border-white/12 hover:bg-white/[0.025]"
                    }`}
                  >
                    {/* Accordion Trigger Header */}
                    <button
                      onClick={() => setOpenTier(isOpen ? "" : tier.id)}
                      className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${tier.accentBg} ${tier.color}`}>
                          {tier.tier}
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
                            <span>{tier.title}</span>
                          </h3>
                          <p className="text-xs text-white/40 truncate mt-0.5">
                            {tier.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 ml-4">
                        <span className="hidden sm:inline-block text-[11px] font-mono text-white/35">
                          {tier.tag}
                        </span>
                        <div
                          className={`h-7 w-7 rounded-lg border flex items-center justify-center transition-transform duration-300 ${
                            isOpen
                              ? "bg-white/10 border-white/20 text-white rotate-180"
                              : "bg-white/[0.04] border-white/[0.08] text-white/50"
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </button>

                    {/* Accordion Expandable Content (CSS Grid Row Animation) */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-4 sm:p-5 pt-0 border-t border-white/[0.06] mt-1 space-y-2">
                          {tier.modules.map((mod, i) => (
                            <Link
                              key={mod.slug}
                              href={tier.id === "practice" ? `/practice` : `/learn/${mod.level}/${mod.slug}`}
                              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all group/mod"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <span className="font-mono text-xs text-white/30 shrink-0 w-5">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <div className="min-w-0">
                                  <div className="text-sm font-medium text-white/80 group-hover/mod:text-white transition-colors truncate">
                                    {mod.title}
                                  </div>
                                  <div className="text-xs text-white/40 truncate">
                                    {mod.desc}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-3 shrink-0 ml-4">
                                <span className="text-[11px] font-mono text-white/40 hidden sm:inline">
                                  {mod.time}
                                </span>
                                <span className="text-xs text-white/40 group-hover/mod:text-white group-hover/mod:translate-x-0.5 transition-all">
                                  →
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6-GATE PROTOCOL
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-t border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-[11px] font-mono text-white/25 uppercase tracking-wider">Risk Governance</span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight mb-5">
                All six gates.<br />No exceptions.
              </h2>
              <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-sm">
                The protocol converts impulsive entries into a repeatable process.
                A trade that fails one gate is not taken. Period.
              </p>
              <Link href="/checklist"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-stone-950 text-sm font-semibold hover:bg-white/90 transition-colors">
                Open checklist <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-2">
              {[
                { n: "01", label: "Active killzone or algorithmic macro window" },
                { n: "02", label: "Prominent liquidity pool swept by wick" },
                { n: "03", label: "Displacement candles shift market structure (bodies)" },
                { n: "04", label: "Fair Value Gap created by displacement impulse" },
                { n: "05", label: "Entry in discount (longs) or premium (shorts)" },
                { n: "06", label: "Minimum 1:2 risk-to-reward before order placement" },
              ].map((g) => (
                <div key={g.n} className="flex items-start gap-4 py-3.5 px-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-white/12 hover:bg-white/[0.035] transition-all group">
                  <span className="text-[11px] font-mono text-white/20 w-5 shrink-0 mt-0.5">{g.n}</span>
                  <span className="text-sm text-white/55 group-hover:text-white/70 transition-colors leading-relaxed">{g.label}</span>
                  <Check className="h-4 w-4 text-emerald-500/60 shrink-0 mt-0.5 ml-auto" strokeWidth={2.5} />
                </div>
              ))}

              <div className="flex items-center justify-between mt-1 px-4 py-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-mono font-semibold text-emerald-400">6 / 6 Locked</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400/50 uppercase tracking-wider">Execution Authorized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CLOSING CTA
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-32 border-t border-white/[0.07] overflow-hidden">
        {/* Subtle horizon reprise */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-gradient-to-t from-amber-900/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-[60px] font-semibold tracking-tight text-white leading-[1.1] mb-6">
            Stop being<br />the liquidity.
          </h2>
          <p className="text-white/35 text-base sm:text-lg leading-relaxed mb-10 max-w-md mx-auto">
            24 free modules. Interactive practice drills. The 6-gate checklist.
            Everything to understand what's actually happening on your chart.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/learn"
              className="px-7 py-3.5 rounded-full bg-white text-stone-950 font-semibold text-sm hover:bg-white/90 transition-colors shadow-xl">
              Start the Curriculum
            </Link>
            <Link href="/glossary"
              className="px-7 py-3.5 rounded-full border border-white/15 text-white/60 text-sm hover:text-white hover:border-white/30 transition-colors">
              Browse the Lexicon
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
      <footer className="border-t border-white/[0.07] py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white/50 text-xs">✦</div>
            <span className="text-sm font-medium text-white/40">ICT Core</span>
          </div>
          <div className="flex items-center gap-6">
            {[["Curriculum","/learn"],["Practice","/practice"],["Checklist","/checklist"],["Lexicon","/glossary"]].map(([l,h]) => (
              <Link key={l} href={h} className="text-xs text-white/25 hover:text-white/50 transition-colors">{l}</Link>
            ))}
          </div>
          <p className="text-xs text-white/20">Educational only. Not financial advice.</p>
        </div>
      </footer>
    </div>
  );
}
