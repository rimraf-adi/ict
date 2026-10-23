"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import {
  ArrowRight,
  ChevronRight,
  BookOpen,
  Target,
  Zap,
  ShieldCheck,
  TrendingUp,
  Activity,
  Check,
  Play,
  Clock,
  BarChart3,
  Crosshair,
  Layers,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Inline micro-chart: candlestick strip SVG
───────────────────────────────────────────── */
function MiniChart() {
  const candles = [
    { x: 12,  o: 68, c: 52, h: 72, l: 48, bull: false },
    { x: 30,  o: 55, c: 62, h: 66, l: 50, bull: true  },
    { x: 48,  o: 60, c: 48, h: 64, l: 44, bull: false },
    { x: 66,  o: 50, c: 38, h: 55, l: 34, bull: false },  // sweep candle
    { x: 84,  o: 40, c: 52, h: 56, l: 36, bull: true  },  // reversal
    { x: 102, o: 50, c: 62, h: 66, l: 48, bull: true  },
    { x: 120, o: 60, c: 72, h: 76, l: 58, bull: true  },
    { x: 138, o: 70, c: 80, h: 84, l: 68, bull: true  },
  ];
  return (
    <svg viewBox="0 0 160 100" className="w-full h-full" fill="none">
      {/* FVG box */}
      <rect x="72" y="38" width="32" height="16" fill="#3b82f6" fillOpacity="0.12" />
      <line x1="72" y1="46" x2="104" y2="46" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="2 2" />
      {/* TP line */}
      <line x1="102" y1="20" x2="155" y2="20" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2 2" />
      <text x="108" y="18" fontSize="6" fill="#10b981" fontFamily="monospace">+TP</text>
      {/* SSL sweep level */}
      <line x1="10" y1="80" x2="80" y2="80" stroke="#f43f5e" strokeWidth="0.8" strokeDasharray="2 2" />
      <text x="12" y="78" fontSize="6" fill="#f43f5e" fontFamily="monospace">SSL</text>
      {candles.map((c) => (
        <g key={c.x}>
          <line x1={c.x + 7} y1={c.h} x2={c.x + 7} y2={c.l} stroke={c.bull ? "#10b981" : "#f43f5e"} strokeWidth="1" />
          <rect
            x={c.x}
            y={Math.min(c.o, c.c)}
            width="14"
            height={Math.abs(c.o - c.c) || 2}
            rx="1.5"
            fill={c.bull ? "#10b981" : "#f43f5e"}
          />
        </g>
      ))}
      {/* Entry marker */}
      <circle cx="89" cy="46" r="3" fill="#3b82f6" />
      <circle cx="89" cy="46" r="5.5" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   OTE Fibonacci mini-strip
───────────────────────────────────────────── */
function OteStrip() {
  const levels = [
    { pct: 0,   label: "0.000", note: "Swing Low",   color: "#94a3b8" },
    { pct: 30,  label: "0.500", note: "Equilibrium", color: "#64748b" },
    { pct: 44,  label: "0.618", note: "Fib limit",   color: "#f59e0b" },
    { pct: 51,  label: "0.705", note: "OTE Sweet",   color: "#f97316", highlight: true },
    { pct: 58,  label: "0.790", note: "Deep OTE",    color: "#fb923c" },
    { pct: 100, label: "1.000", note: "Invalidation",color: "#94a3b8" },
  ];
  return (
    <div className="relative flex flex-col gap-0 w-full font-mono text-[10px]">
      {levels.slice().reverse().map((l) => (
        <div
          key={l.label}
          className={`flex items-center gap-2 py-1 px-2 rounded ${l.highlight ? "bg-orange-50 border border-orange-200" : ""}`}
        >
          <span className="w-10 text-right font-bold" style={{ color: l.color }}>{l.label}</span>
          <div className="flex-1 h-px bg-stone-200 relative">
            {l.highlight && <div className="absolute inset-y-0 left-0 w-full h-full bg-orange-300 opacity-30 rounded" />}
          </div>
          <span className={`text-[9px] ${l.highlight ? "text-orange-700 font-bold" : "text-stone-500"}`}>{l.note}</span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Session timeline strip
───────────────────────────────────────────── */
function SessionTimeline() {
  const sessions = [
    { name: "Asian", start: 0, end: 22, color: "#818cf8" },
    { name: "London", start: 28, end: 46, color: "#34d399" },
    { name: "NY AM", start: 51, end: 70, color: "#fbbf24" },
    { name: "Silver Bullet", start: 70, end: 76, color: "#fb923c" },
    { name: "NY PM", start: 82, end: 93, color: "#a78bfa" },
  ];
  return (
    <div className="w-full space-y-2">
      <div className="relative h-6 rounded-full bg-stone-100 overflow-hidden">
        {sessions.map((s) => (
          <div
            key={s.name}
            className="absolute top-0 h-full rounded-sm opacity-80"
            style={{ left: `${s.start}%`, width: `${s.end - s.start}%`, background: s.color }}
          />
        ))}
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        {sessions.map((s) => (
          <div key={s.name} className="flex items-center gap-1 text-[10px] font-mono text-stone-600">
            <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
            {s.name}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Homepage
───────────────────────────────────────────── */
export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  const concepts = [
    {
      icon: <Crosshair className="h-4 w-4" />,
      label: "Liquidity Sweep",
      desc: "Engineered raids on retail stop clusters before the real institutional expansion.",
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-200",
      href: "/learn/foundations/liquidity-concepts",
    },
    {
      icon: <BarChart3 className="h-4 w-4" />,
      label: "Fair Value Gaps",
      desc: "3-candle displacement voids that price revisits to fill institutional imbalances.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      href: "/learn/foundations/imbalances-and-fvg",
    },
    {
      icon: <Clock className="h-4 w-4" />,
      label: "20-Min Macros",
      desc: "Precise algorithmic windows: London Open, NY AM, NY Silver Bullet 10:00–11:00.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
      href: "/killzones",
    },
    {
      icon: <TrendingUp className="h-4 w-4" />,
      label: "SMT Divergence",
      desc: "Correlated pairs crack — one sets new extreme, the other fails. Smart money tells.",
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
      href: "/learn/advanced/smt-divergence",
    },
    {
      icon: <Layers className="h-4 w-4" />,
      label: "OTE Fibonacci",
      desc: "0.705 institutional sweet spot for optimal retracement entries with asymmetric R:R.",
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
      href: "/learn/intermediate/premium-discount-and-ote",
    },
    {
      icon: <ShieldCheck className="h-4 w-4" />,
      label: "6-Gate Protocol",
      desc: "Zero-discretion pre-trade checklist. All 6 gates must lock before execution.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      href: "/checklist",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Study the Framework",
      body: "Work through 24 structured modules — from Dealing Range fundamentals to execution model blueprints. Each lesson builds on the last with vector diagrams and key takeaways.",
      cta: "Browse Curriculum →",
      href: "/learn",
    },
    {
      step: "02",
      title: "Drill Each Concept",
      body: "Use the interactive Practice Lab to replay institutional setups: London Judas Swing, NY Silver Bullet, SMT Divergence, and The Unicorn. Make trade decisions under realistic conditions.",
      cta: "Open Practice Lab →",
      href: "/practice",
    },
    {
      step: "03",
      title: "Execute with Discipline",
      body: "Run every trade candidate through the 6-Gate pre-flight protocol. Timing, liquidity raid, MSS, FVG, discount pricing, and 1:2 minimum R:R — no gate skipped, ever.",
      cta: "Launch Checklist →",
      href: "/checklist",
    },
  ];

  const gates = [
    { gate: "01", label: "Institutional Timing", sub: "Active Killzone or 20-min Macro", ok: true },
    { gate: "02", label: "Liquidity Pool Swept", sub: "Wick through Asian H/L, EQL, PDH", ok: true },
    { gate: "03", label: "Displacement MSS", sub: "Full body close beyond swing point", ok: true },
    { gate: "04", label: "Fair Value Gap Present", sub: "Clean 3-candle BISI or SIBI", ok: true },
    { gate: "05", label: "Discount / Premium", sub: "Long < 50% EQ · Short > 50% EQ", ok: true },
    { gate: "06", label: "Minimum 1:2 R:R", sub: "SL at swing extreme, TP at DOL", ok: true },
  ];

  const modules = [
    { level: "Foundations", count: 8, color: "bg-sky-100 text-sky-800 border-sky-200", href: "/learn" },
    { level: "Intermediate", count: 6, color: "bg-amber-100 text-amber-800 border-amber-200", href: "/learn" },
    { level: "Advanced", count: 5, color: "bg-purple-100 text-purple-800 border-purple-200", href: "/learn" },
    { level: "Execution Models", count: 3, color: "bg-emerald-100 text-emerald-800 border-emerald-200", href: "/learn" },
    { level: "Practice Drills", count: 4, color: "bg-rose-100 text-rose-800 border-rose-200", href: "/practice" },
  ];

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col antialiased">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 py-4">

            {/* Left: Copy */}
            <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16 border-r-0 lg:border-r border-stone-200">
              <div className="mb-6 inline-flex">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-stone-500 border border-stone-200 rounded-full px-3 py-1 bg-stone-50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  24 Structured Modules · ICT Core
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-black tracking-tighter text-stone-950 leading-[0.95] mb-6">
                Learn to trade<br />
                <span className="text-stone-400">like institutions.</span>
              </h1>

              <p className="text-lg text-stone-500 leading-relaxed max-w-lg mb-10">
                An interactive curriculum for Inner Circle Trader methodology.
                Master liquidity, Fair Value Gaps, and execution models through
                structured lessons and hands-on drills — not theory alone.
              </p>

              <div className="flex flex-wrap gap-3 mb-14">
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-950 text-white text-sm font-semibold hover:bg-stone-800 transition-colors shadow-sm"
                >
                  Start Learning
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/practice"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-stone-700 text-sm font-medium border border-stone-200 hover:bg-stone-50 hover:border-stone-300 transition-colors"
                >
                  <Play className="h-4 w-4" />
                  Try Practice Lab
                </Link>
              </div>

              {/* Proof strip */}
              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-stone-100">
                {[
                  { n: "24", label: "Lessons" },
                  { n: "4", label: "Live Drills" },
                  { n: "71", label: "Term Lexicon" },
                  { n: "1:3+", label: "Avg R:R Target" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-stone-950 tracking-tight leading-none">{s.n}</div>
                    <div className="text-xs text-stone-400 font-mono mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live chart preview card */}
            <div className="hidden lg:flex flex-col justify-center pl-10 py-16">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden shadow-sm">
                {/* Card header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-200 bg-white">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs font-mono text-stone-600 ml-1">EUR/USD · 1m · London Open</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    ACTIVE · 02:47 EST
                  </span>
                </div>

                {/* Chart area */}
                <div className="relative p-5 h-[220px]">
                  <MiniChart />
                </div>

                {/* Telemetry strip */}
                <div className="grid grid-cols-3 divide-x divide-stone-200 border-t border-stone-200 bg-white">
                  {[
                    { label: "SETUP", value: "Judas + 1m SIBI" },
                    { label: "ENTRY", value: "50% CE @ 1.0842" },
                    { label: "R:R", value: "1 : 3.4" },
                  ].map((t) => (
                    <div key={t.label} className="px-4 py-3">
                      <div className="text-[10px] font-mono text-stone-400 uppercase">{t.label}</div>
                      <div className="text-xs font-mono font-bold text-stone-900 mt-0.5">{t.value}</div>
                    </div>
                  ))}
                </div>

                {/* Gates strip */}
                <div className="px-5 py-3 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {[1,2,3,4,5,6].map((g) => (
                      <span key={g} className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700">6/6 GATES · EXECUTE</span>
                </div>
              </div>

              {/* Annotation cards */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3">
                  <div className="text-[10px] font-mono text-rose-500 uppercase mb-1">Liquidity Raid</div>
                  <div className="text-sm font-bold text-rose-800">BSL Purged · Wick Sweep</div>
                  <div className="text-xs text-rose-600 mt-0.5">Bodies close back inside range</div>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3">
                  <div className="text-[10px] font-mono text-blue-500 uppercase mb-1">Entry Model</div>
                  <div className="text-sm font-bold text-blue-800">1m SIBI · 50% CE</div>
                  <div className="text-xs text-blue-600 mt-0.5">Limit order at 1.08420</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CURRICULUM OVERVIEW STRIP ────────────────────────── */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-stone-400 mr-2">CURRICULUM:</span>
            {modules.map((m) => (
              <Link
                key={m.level}
                href={m.href}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-semibold transition-opacity hover:opacity-70 ${m.color}`}
              >
                {m.level}
                <span className="font-normal opacity-70">{m.count}</span>
              </Link>
            ))}
            <Link
              href="/glossary"
              className="ml-auto text-xs font-mono text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1"
            >
              71-Term Lexicon <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BENTO GRID: CORE CONCEPTS ──────────────────────────── */}
      <section className="border-b border-stone-200 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-14 max-w-xl">
            <p className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-3">Core Framework</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-stone-950 leading-tight">
              Six pillars.<br />Zero discretion.
            </h2>
            <p className="mt-4 text-stone-500 leading-relaxed">
              Every profitable setup reduces to these six recurring mechanics. Learn each one in isolation, then combine them for full model execution.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
            {concepts.map((c, i) => (
              <Link
                key={c.label}
                href={c.href}
                className="group bg-white p-8 flex flex-col gap-4 hover:bg-stone-50 transition-colors"
              >
                <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border ${c.bg} ${c.border} ${c.color}`}>
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base mb-1 group-hover:text-stone-700 transition-colors">
                    {c.label}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{c.desc}</p>
                </div>
                <div className={`mt-auto flex items-center gap-1 text-xs font-mono font-semibold ${c.color} opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-0.5 transition-all`}>
                  Explore <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS: 3 STEPS ─────────────────────────────── */}
      <section className="border-b border-stone-200 py-20 md:py-28 bg-stone-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">
              Study. Drill. Execute.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-800">
            {howItWorks.map((step) => (
              <div key={step.step} className="bg-stone-950 p-10 flex flex-col gap-6">
                <div className="font-mono text-5xl font-black text-stone-800 leading-none">{step.step}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{step.body}</p>
                </div>
                <Link
                  href={step.href}
                  className="mt-auto text-xs font-mono font-semibold text-stone-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  {step.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE SPLIT: OTE + SESSIONS ─────────────────────── */}
      <section className="border-b border-stone-200 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: OTE Fibonacci */}
            <div>
              <p className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-3">Pricing Model</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-stone-950 mb-4">
                The 0.705 Sweet Spot
              </h2>
              <p className="text-stone-500 leading-relaxed mb-8 text-sm">
                Institutions don't buy at random. They target specific Fibonacci retracement
                levels inside a defined dealing range. The 0.705 level — the Optimal Trade
                Entry — is where asymmetric risk:reward setups concentrate.
              </p>

              {/* OTE visual */}
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <div className="text-[10px] font-mono text-stone-400 uppercase mb-4">OTE FIBONACCI LADDER</div>
                <OteStrip />
                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-orange-700">
                    ✦ 0.705 = Institutional Entry Zone
                  </span>
                  <span className="text-xs text-stone-400 font-mono">Standard R:R ≥ 1:3</span>
                </div>
              </div>

              <Link href="/learn/intermediate/premium-discount-and-ote" className="mt-6 inline-flex items-center gap-2 text-sm font-mono font-semibold text-stone-700 hover:text-stone-950 transition-colors">
                Study the OTE Model <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right: Killzones */}
            <div>
              <p className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-3">Time & Price</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-stone-950 mb-4">
                Sessions & Macros
              </h2>
              <p className="text-stone-500 leading-relaxed mb-8 text-sm">
                The algorithm delivers price during predictable 20-minute macro cycles.
                Outside these windows, setups carry a fraction of the probability.
                Timing is a non-negotiable gate, not a suggestion.
              </p>

              {/* Sessions visual */}
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <div className="text-[10px] font-mono text-stone-400 uppercase mb-4">24-HOUR INSTITUTIONAL SCHEDULE (NY EST)</div>
                <SessionTimeline />

                {/* Session cards */}
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {[
                    { name: "London Open", time: "02:00–05:00", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
                    { name: "NY AM", time: "07:00–10:00", color: "bg-amber-50 border-amber-200 text-amber-800" },
                    { name: "Silver Bullet", time: "10:00–11:00", color: "bg-orange-50 border-orange-200 text-orange-800" },
                    { name: "NY PM", time: "13:30–16:00", color: "bg-purple-50 border-purple-200 text-purple-800" },
                  ].map((s) => (
                    <div key={s.name} className={`px-3 py-2 rounded-lg border text-xs font-mono ${s.color}`}>
                      <div className="font-bold">{s.name}</div>
                      <div className="opacity-70">{s.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/killzones" className="mt-6 inline-flex items-center gap-2 text-sm font-mono font-semibold text-stone-700 hover:text-stone-950 transition-colors">
                View Full Schedule <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6-GATE PROTOCOL ───────────────────────────────────── */}
      <section className="border-b border-stone-200 py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: copy */}
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-3">Risk Governance</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-stone-950 leading-tight mb-6">
                6 gates.<br />All must lock.
              </h2>
              <p className="text-stone-500 leading-relaxed text-sm mb-8">
                No trade executes without passing all six gates simultaneously.
                This protocol converts impulsive emotional entries into a
                disciplined, repeatable process governed entirely by price
                mechanics — not opinion.
              </p>
              <Link
                href="/checklist"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-950 text-white text-sm font-semibold hover:bg-stone-800 transition-colors"
              >
                Launch Pre-Trade Checklist
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50">
                  <div className="text-3xl font-black text-stone-950 tracking-tight">0%</div>
                  <div className="text-xs font-mono text-stone-400 mt-1">Discretionary entries allowed</div>
                </div>
                <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50">
                  <div className="text-3xl font-black text-emerald-700 tracking-tight">1:2+</div>
                  <div className="text-xs font-mono text-emerald-600 mt-1">Minimum R:R before entry</div>
                </div>
              </div>
            </div>

            {/* Right: gate list */}
            <div className="space-y-3">
              {gates.map((g) => (
                <div
                  key={g.gate}
                  className="flex items-start gap-5 p-5 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm transition-all"
                >
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100 font-mono text-xs font-black text-stone-600">
                    {g.gate}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-stone-900 text-sm">{g.label}</div>
                    <div className="text-xs text-stone-500 font-mono mt-0.5">{g.sub}</div>
                  </div>
                  <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 border border-emerald-200">
                    <Check className="h-3 w-3 text-emerald-700" strokeWidth={3} />
                  </span>
                </div>
              ))}

              {/* Final locked state */}
              <div className="flex items-center justify-between mt-2 p-4 rounded-2xl bg-emerald-950 text-emerald-300">
                <div className="flex items-center gap-3">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="text-sm font-mono font-bold">6 / 6 GATES LOCKED</span>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                  Execution Authorized
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── LEXICON CTA ──────────────────────────────────────── */}
      <section className="border-b border-stone-200 py-20 md:py-28 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-3">A–Z Lexicon</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-stone-950 leading-tight mb-4">
                71 standardised definitions.
              </h2>
              <p className="text-stone-500 leading-relaxed text-sm mb-8 max-w-md">
                BISI, SIBI, SMT, NWOG, CBDR, IPDA, OTE, Breaker Block, Inversion FVG — every
                term defined precisely with context and usage notes.
              </p>
              <Link
                href="/glossary"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-950 text-white text-sm font-semibold hover:bg-stone-800 transition-colors"
              >
                Open Lexicon
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Sample terms grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                "BISI", "SIBI", "FVG", "OTE", "MSS", "BOS",
                "IPDA", "SMT", "DOL", "CBDR", "NWOG", "CE",
                "BSL", "SSL", "MMSM", "Power of 3", "Unicorn", "Breaker",
              ].map((term) => (
                <div
                  key={term}
                  className="px-3 py-2 rounded-lg border border-stone-200 bg-white text-xs font-mono font-semibold text-stone-700 text-center hover:border-stone-400 hover:bg-stone-50 transition-colors cursor-default"
                >
                  {term}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-24 bg-stone-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-white leading-tight mb-6">
            Stop reacting.<br />
            <span className="text-stone-400">Start engineering.</span>
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            The curriculum is free. The drills are live. The protocol is non-negotiable.
            Everything you need to trade with institutional precision is here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-stone-950 font-bold text-sm hover:bg-stone-100 transition-colors shadow-lg"
            >
              Start the Curriculum
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-stone-700 text-stone-300 text-sm font-medium hover:bg-stone-900 hover:border-stone-600 transition-colors"
            >
              Browse Lexicon
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-800 bg-stone-950 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-xl bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-300 text-xs font-bold">
              ✦
            </div>
            <span className="text-sm font-bold text-stone-300">ICT Core</span>
            <span className="text-xs text-stone-600">— Institutional Price Delivery Architecture</span>
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: "Curriculum", href: "/learn" },
              { label: "Practice", href: "/practice" },
              { label: "Checklist", href: "/checklist" },
              { label: "Lexicon", href: "/glossary" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-stone-600">
            Educational purposes only. Not financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
