"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-zinc-900 flex flex-col antialiased selection:bg-amber-500/20 selection:text-zinc-900">
      <Navbar />

      {/* HERO SECTION — INFERAAI ARCHITECTURAL LIGHT THEME */}
      <section className="relative pt-16 pb-28 md:pt-24 md:pb-36 overflow-hidden">
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none opacity-60">
          <div className="absolute inset-0 glow-amber-diffusion" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Micro Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200/90 bg-white/80 shadow-sm backdrop-blur-sm mb-8 transition-all hover:border-amber-400">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[12px] font-medium tracking-wide text-zinc-700">
              Institutional Price Delivery Algorithm (IPDA)
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.08] max-w-4xl mx-auto">
            Transform Your Edge with{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
              Institutional Order Flow
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Deconstruct liquidity sweeps, Fair Value Gaps, and 20-minute algorithmic macros with institutional precision. Zero retail indicators.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/learn"
              className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm shadow-md transition-all hover:shadow-lg flex items-center gap-2 group"
            >
              <span>Explore Curriculum</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/practice"
              className="px-6 py-3 rounded-full bg-white hover:bg-zinc-50 text-zinc-800 font-medium text-sm border border-zinc-200/90 shadow-sm transition-all hover:border-zinc-300 flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>Interactive Practice Lab</span>
            </Link>
          </div>

          {/* THE SIGNATURE INFERAAI HALFTONE GLOWING DOME & FLOATING PILLS */}
          <div className="relative mt-12 sm:mt-16 w-full max-w-4xl mx-auto h-[320px] sm:h-[420px] select-none flex items-end justify-center">
            
            {/* Ambient Backlight Radiance */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[280px] bg-gradient-to-t from-amber-500/30 via-orange-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* HALTONE DOT MATRIX DOME (SVG) */}
            <svg
              viewBox="0 0 800 400"
              className="w-full h-full overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="domeGlow" cx="50%" cy="100%" r="70%">
                  <stop offset="0%" stopColor="#EA580C" stopOpacity="0.9" />
                  <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.7" />
                  <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Glowing Dome Arch Base */}
              <ellipse cx="400" cy="400" rx="360" ry="240" fill="url(#domeGlow)" opacity="0.35" />

              {/* Concentric Dot Halftone Rings */}
              {Array.from({ length: 18 }).map((_, ringIdx) => {
                const rx = 80 + ringIdx * 18;
                const ry = 50 + ringIdx * 12;
                const dotCount = 16 + ringIdx * 4;
                const opacity = Math.max(0.12, 0.95 - ringIdx * 0.045);
                const dotSize = Math.max(1.2, 3.8 - ringIdx * 0.12);

                return (
                  <g key={ringIdx} opacity={opacity}>
                    {Array.from({ length: dotCount }).map((_, dotIdx) => {
                      const angle = Math.PI + (dotIdx / (dotCount - 1)) * Math.PI;
                      const cx = 400 + rx * Math.cos(angle);
                      const cy = 400 + ry * Math.sin(angle);
                      // Skip dots below baseline
                      if (cy > 398) return null;

                      // Peak center intensity color
                      const isCenter = Math.abs(cx - 400) < 90;
                      const fill = isCenter ? "#EA580C" : "#F59E0B";

                      return (
                        <circle
                          key={dotIdx}
                          cx={cx}
                          cy={cy}
                          r={isCenter ? dotSize * 1.3 : dotSize}
                          fill={fill}
                        />
                      );
                    })}
                  </g>
                );
              })}

              {/* Vertical algorithmic pulse lines */}
              <g opacity="0.4" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3">
                <line x1="400" y1="400" x2="400" y2="140" />
                <line x1="320" y1="400" x2="320" y2="200" />
                <line x1="480" y1="400" x2="480" y2="200" />
              </g>

              {/* Apex Pulse Indicator */}
              <circle cx="400" cy="140" r="5" fill="#EA580C" />
              <circle cx="400" cy="140" r="12" stroke="#EA580C" strokeWidth="1.5" opacity="0.5" className="animate-ping" />
            </svg>

            {/* FLOATING INTERACTIVE BADGES (Positioned around dome like in InferaAI) */}
            
            {/* 1. Left Pill: NY Silver Bullet */}
            <div className="absolute top-[18%] left-[2%] sm:left-[8%] z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-zinc-200/90 shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold tracking-tight text-zinc-800">
                NY SILVER BULLET
              </span>
              <span className="text-[10px] font-mono text-zinc-400">10:00 AM</span>
            </div>

            {/* 2. Right Pill: Fair Value Gap */}
            <div className="absolute top-[14%] right-[2%] sm:right-[8%] z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-zinc-200/90 shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-[11px] font-bold tracking-tight text-zinc-800">
                FAIR VALUE GAP (BISI)
              </span>
              <span className="text-[10px] font-mono text-zinc-400">CE 50.0%</span>
            </div>

            {/* 3. Center-Right Pill: SMT Divergence */}
            <div className="absolute top-[48%] right-[8%] sm:right-[16%] z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-zinc-200/90 shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-[11px] font-bold tracking-tight text-zinc-800">
                SMT DIVERGENCE
              </span>
              <span className="text-[10px] font-mono text-indigo-600">ES vs NQ</span>
            </div>

            {/* 4. Bottom-Left Pill: Buyside Sweeps */}
            <div className="absolute top-[52%] left-[6%] sm:left-[14%] z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-zinc-200/90 shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              <span className="text-[11px] font-bold tracking-tight text-zinc-800">
                BUYSIDE PURGED
              </span>
              <span className="text-[10px] font-mono text-rose-600">Old Highs</span>
            </div>

          </div>

        </div>
      </section>

      {/* CORE CAPABILITIES BENTO GRID */}
      <section className="py-20 border-t border-zinc-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 text-[11px] font-mono font-medium text-zinc-600 mb-3">
                <span>INSTITUTIONAL SUITE</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                Engineered for Algorithmic Precision
              </h2>
            </div>
            <p className="mt-3 md:mt-0 text-sm text-zinc-500 max-w-md">
              Every concept codified into practical rules, interactive drills, and verified institutional delivery mechanics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Interactive Candlestick Simulator */}
            <Link
              href="/practice"
              className="md:col-span-2 group rounded-2xl border border-zinc-200/90 bg-[#FBFBFC] p-8 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                    Candlestick Simulator
                  </span>
                  <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-900 transition-colors">
                    01 / PRACTICE LAB →
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 mb-3">
                  Interactive Step-by-Step Scenario Drills
                </h3>
                <p className="text-sm text-zinc-600 max-w-xl leading-relaxed">
                  Practice identifying Fair Value Gaps, Order Blocks, and Breakers under real market conditions. Step candle-by-candle through historical EUR/USD, NQ, and ES setups with execution feedback.
                </p>
              </div>

              {/* Graphic Preview */}
              <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between text-xs text-zinc-500 font-mono pb-2 mb-3 border-b border-zinc-100">
                  <span className="flex items-center gap-1.5 font-semibold text-zinc-800">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" /> EUR/USD Judas Swing
                  </span>
                  <span className="text-emerald-600 font-bold">+2.8R Target Hit</span>
                </div>
                <div className="h-16 flex items-end gap-2 px-2">
                  <div className="w-1/6 h-8 bg-zinc-200 rounded-sm" />
                  <div className="w-1/6 h-12 bg-zinc-300 rounded-sm" />
                  <div className="w-1/6 h-16 bg-rose-400 rounded-sm" />
                  <div className="w-1/6 h-6 bg-emerald-500 rounded-sm" />
                  <div className="w-1/6 h-11 bg-emerald-500 rounded-sm" />
                  <div className="w-1/6 h-14 bg-emerald-600 rounded-sm" />
                </div>
              </div>
            </Link>

            {/* Card 2: 24-Module Curriculum */}
            <Link
              href="/learn"
              className="group rounded-2xl border border-zinc-200/90 bg-[#FBFBFC] p-8 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">
                    Master Curriculum
                  </span>
                  <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-900 transition-colors">
                    02 / 24 MODULES →
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-3">
                  5 Tier Progression
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  From Core Foundations and Market Structure to Advanced SMT Divergence, Market Maker Models, and High-Probability Execution Blueprints.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-mono text-zinc-600">Level 01: Foundations</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-mono text-zinc-600">Level 02: PD Arrays</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-mono text-zinc-600">Level 03: Models</span>
              </div>
            </Link>

            {/* Card 3: Killzones & 20-Min Macros */}
            <Link
              href="/killzones"
              className="group rounded-2xl border border-zinc-200/90 bg-[#FBFBFC] p-8 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
                    Time & Price Engine
                  </span>
                  <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-900 transition-colors">
                    03 / SESSIONS →
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-3">
                  Algorithmic Macro Countdowns
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Live NY EST time tracking for London Open, NY AM, NY Silver Bullet (10:00–11:00 AM), and 20-minute algorithmic macro windows.
                </p>
              </div>

              <div className="mt-6 p-3 rounded-lg bg-white border border-zinc-200 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-700">True Midnight Open</span>
                <span className="text-xs font-mono font-bold text-blue-600">00:00 EST</span>
              </div>
            </Link>

            {/* Card 4: 6-Gate Execution Checklist */}
            <Link
              href="/checklist"
              className="md:col-span-2 group rounded-2xl border border-zinc-200/90 bg-[#FBFBFC] p-8 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-200">
                    Risk Management
                  </span>
                  <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-900 transition-colors">
                    04 / RULEBOOK →
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 mb-3">
                  6-Gate Pre-Execution Verification
                </h3>
                <p className="text-sm text-zinc-600 max-w-xl leading-relaxed">
                  Eliminate discretionary errors. Every trade must pass 6 quantitative gates: HTF Context, Time/Killzone, Liquidity Sweep, MSS with Displacement, PD Array Retracement, and Exact Risk Calculation.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="p-2.5 rounded-lg bg-white border border-zinc-200 text-xs font-medium text-zinc-700 flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> Gate 1: HTF Trend
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-zinc-200 text-xs font-medium text-zinc-700 flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> Gate 2: Time Window
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-zinc-200 text-xs font-medium text-zinc-700 flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> Gate 3: Sweep Event
                </div>
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-zinc-900">ICT CORE</span>
            <span className="text-xs text-zinc-400">— Institutional Price Delivery Architecture</span>
          </div>
          <p className="text-xs text-zinc-500">
            For educational and practice purposes only. Not financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
