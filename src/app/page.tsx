"use client";

import React from "react";
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
  Zap
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col antialiased selection:bg-cyan-500/25 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* -------------------------------------------------------------------- */}
      {/* 1. HERO SECTION: CELESTIAL HORIZON AESTHETIC (NEONE STYLE)           */}
      {/* -------------------------------------------------------------------- */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        
        {/* Celestial Horizon Planetary Arc & Stardust Atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1500px] h-[720px] pointer-events-none select-none overflow-hidden">
          
          {/* Deep Space Radial Halos Underneath */}
          <div className="absolute -top-[140px] left-1/2 -translate-x-1/2 w-[1100px] h-[480px] bg-gradient-to-b from-cyan-500/20 via-blue-600/12 to-transparent rounded-full blur-[130px]" />
          <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-sky-400/15 rounded-full blur-[75px]" />

          {/* Vertical Atmospheric Light Shafts Ascending into Deep Space (NEONE style) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] opacity-25 pointer-events-none flex justify-center gap-14">
            <div className="w-14 h-[320px] bg-gradient-to-t from-sky-400/35 via-cyan-300/15 to-transparent blur-xl" />
            <div className="w-24 h-[360px] bg-gradient-to-t from-cyan-300/40 via-sky-200/20 to-transparent blur-2xl" />
            <div className="w-16 h-[320px] bg-gradient-to-t from-blue-400/35 via-cyan-400/15 to-transparent blur-xl" />
          </div>

          {/* Celestial Horizon Planetary Arch (Exact circular arc curvature framing the text, NEONE style) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] md:w-[1500px] h-[520px]">
            <svg viewBox="0 0 1200 520" className="w-full h-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="neoneArcGrad" x1="0%" y1="100%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0" />
                  <stop offset="15%" stopColor="#38bdf8" stopOpacity="0.45" />
                  <stop offset="32%" stopColor="#7dd3fc" stopOpacity="0.85" />
                  <stop offset="47%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="53%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="68%" stopColor="#7dd3fc" stopOpacity="0.85" />
                  <stop offset="85%" stopColor="#38bdf8" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="apexFlare" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="25%" stopColor="#7dd3fc" stopOpacity="0.7" />
                  <stop offset="55%" stopColor="#0284c7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#030712" stopOpacity="0" />
                </radialGradient>
                <filter id="neoneGlow" x="-20%" y="-40%" width="140%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="blur1" />
                  <feGaussianBlur stdDeviation="22" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <radialGradient id="neoneAura" cx="50%" cy="10%" r="65%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.28" />
                  <stop offset="40%" stopColor="#2563eb" stopOpacity="0.10" />
                  <stop offset="100%" stopColor="#030712" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Radiant Atmosphere Aura behind the crest */}
              <ellipse cx="600" cy="190" rx="560" ry="240" fill="url(#neoneAura)" />

              {/* Outer Deep Glow Arch */}
              <path
                d="M -150 640 Q 600 -560 1350 640"
                stroke="#38bdf8"
                strokeWidth="20"
                strokeOpacity="0.20"
                filter="url(#neoneGlow)"
              />

              {/* Mid Electric Blue Arch */}
              <path
                d="M -150 640 Q 600 -560 1350 640"
                stroke="#60a5fa"
                strokeWidth="6"
                strokeOpacity="0.55"
                filter="url(#neoneGlow)"
              />

              {/* Core Razor-Sharp Luminous Rim */}
              <path
                d="M -150 640 Q 600 -560 1350 640"
                stroke="url(#neoneArcGrad)"
                strokeWidth="2.5"
              />

              {/* Natural Apex Flare Burst (Seamless radial glow, no hard pill edge) */}
              <circle cx="600" cy="24" r="60" fill="url(#apexFlare)" filter="url(#neoneGlow)" />
            </svg>
          </div>

          {/* Subtle Cosmic Stardust / Motes */}
          <svg className="absolute inset-0 w-full h-full opacity-65" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12%" cy="18%" r="1" fill="#fff" opacity="0.7" />
            <circle cx="22%" cy="28%" r="1.5" fill="#38bdf8" opacity="0.8" />
            <circle cx="35%" cy="14%" r="1" fill="#fff" opacity="0.5" />
            <circle cx="48%" cy="22%" r="1.2" fill="#bae6fd" opacity="0.9" />
            <circle cx="62%" cy="16%" r="1" fill="#fff" opacity="0.6" />
            <circle cx="78%" cy="24%" r="1.6" fill="#38bdf8" opacity="0.8" />
            <circle cx="88%" cy="15%" r="1" fill="#fff" opacity="0.4" />
            <circle cx="94%" cy="32%" r="1.4" fill="#93c5fd" opacity="0.7" />
            <circle cx="18%" cy="42%" r="0.8" fill="#fff" opacity="0.3" />
            <circle cx="30%" cy="48%" r="1.2" fill="#38bdf8" opacity="0.6" />
            <circle cx="70%" cy="44%" r="1.4" fill="#67e8f9" opacity="0.7" />
            <circle cx="84%" cy="50%" r="0.8" fill="#fff" opacity="0.4" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Centered Pill Badge (NEONE style) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-200 text-xs font-mono font-medium backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.18)] mb-6">
            <span className="text-cyan-400">✨</span>
            <span>24 Structured Tutorials · Live Market Drills</span>
          </div>

          {/* Master Headline: Crisp Sans with Ice-Blue Glow (NEONE style) */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] lg:text-[74px] font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto">
            Master Order Flow With{" "}
            <span className="bg-gradient-to-r from-sky-200 via-cyan-100 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.35)]">
              Interactive Practice
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-auto font-normal leading-relaxed">
            The complete interactive tutorial platform for Inner Circle Trader concepts. Master liquidity sweeps, Fair Value Gaps, and execution models through structured lessons and hands-on drills.
          </p>

          {/* Call to Actions (NEONE Solid White + Dark Glass with rounded-xl squircle borders) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/learn"
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all hover:scale-102 flex items-center gap-2 group"
            >
              <span>Start Learning</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/practice"
              className="px-7 py-3.5 rounded-xl bg-slate-900/70 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/60 shadow-xs transition-all hover:border-slate-500 backdrop-blur-md flex items-center gap-2"
            >
              <span>Try Simulator</span>
            </Link>
          </div>

          {/* Clean Trust Metrics Strip */}
          <div className="mt-12 pt-7 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">24</span> Step-by-Step Lessons
            </span>
            <span className="text-slate-700">·</span>
            <span className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">4</span> Hands-On Drills
            </span>
            <span className="text-slate-700">·</span>
            <span className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">6-Gate</span> Trade Checklist
            </span>
            <span className="text-slate-700">·</span>
            <span className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">71</span> Term Lexicon
            </span>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* ANCHORED WORKSTATION PREVIEW (NEONE DASHBOARD EMERGING FROM HERO) */}
          {/* ---------------------------------------------------------------- */}
          <div className="mt-12 max-w-5xl mx-auto w-full text-left">
            <div className="relative rounded-2xl border border-white/10 bg-[#080d1a]/90 backdrop-blur-xl p-4 sm:p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(56,189,248,0.12)] overflow-hidden">
              {/* Subtle top rim glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
              
              {/* Workstation Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.08] text-xs font-mono">
                {/* Traffic lights & asset identifier */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="h-3.5 w-px bg-white/10" />
                  <span className="text-white font-semibold">EUR/USD · 1m</span>
                  <span className="text-slate-500 hidden sm:inline">IPDA Algorithmic Feed</span>
                </div>

                {/* Live Session Status Indicator */}
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-semibold text-[11px] shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    NY AM Killzone · ACTIVE
                  </span>
                  <span className="text-slate-400 hidden md:inline text-[11px]">
                    10:14:02 EST
                  </span>
                </div>
              </div>

              {/* Candlestick Setup Preview with Labeled FVG & Liquidity Sweep */}
              <div className="relative rounded-xl bg-[#040814] border border-white/[0.06] p-3 sm:p-5 overflow-hidden">
                <svg
                  className="w-full h-auto"
                  viewBox="0 0 900 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* FVG Highlight Shading */}
                    <linearGradient id="fvgArea" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.10" />
                    </linearGradient>
                    <linearGradient id="takeProfitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.04" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Gridlines */}
                  <line x1="40" y1="50" x2="850" y2="50" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
                  <line x1="40" y1="110" x2="850" y2="110" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
                  <line x1="40" y1="170" x2="850" y2="170" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
                  <line x1="40" y1="230" x2="850" y2="230" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
                  <line x1="40" y1="290" x2="850" y2="290" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />

                  {/* Vertical Gridlines */}
                  <line x1="160" y1="30" x2="160" y2="295" stroke="rgba(255,255,255,0.04)" />
                  <line x1="320" y1="30" x2="320" y2="295" stroke="rgba(255,255,255,0.04)" />
                  <line x1="480" y1="30" x2="480" y2="295" stroke="rgba(255,255,255,0.04)" />
                  <line x1="640" y1="30" x2="640" y2="295" stroke="rgba(255,255,255,0.04)" />
                  <line x1="800" y1="30" x2="800" y2="295" stroke="rgba(255,255,255,0.04)" />

                  {/* Y-Axis Price Labels */}
                  <text x="855" y="54" fill="#64748b" fontSize="10" fontFamily="monospace">1.08640</text>
                  <text x="855" y="114" fill="#64748b" fontSize="10" fontFamily="monospace">1.08520</text>
                  <text x="855" y="174" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">1.08420 (CE)</text>
                  <text x="855" y="234" fill="#64748b" fontSize="10" fontFamily="monospace">1.08300</text>
                  <text x="855" y="294" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">1.08180 (TP)</text>

                  {/* X-Axis Time Labels */}
                  <text x="135" y="312" fill="#64748b" fontSize="10" fontFamily="monospace">09:50 EST</text>
                  <text x="290" y="312" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">10:00 EST (MACRO)</text>
                  <text x="455" y="312" fill="#64748b" fontSize="10" fontFamily="monospace">10:08 EST</text>
                  <text x="615" y="312" fill="#64748b" fontSize="10" fontFamily="monospace">10:14 EST</text>
                  <text x="775" y="312" fill="#64748b" fontSize="10" fontFamily="monospace">10:20 EST</text>

                  {/* BSL PURGED (Liquidity Sweep) Level */}
                  <line x1="60" y1="62" x2="380" y2="62" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="5 4" />
                  <rect x="70" y="44" width="180" height="20" rx="4" fill="#881337" fillOpacity="0.8" stroke="#f43f5e" strokeWidth="0.8" />
                  <text x="80" y="58" fill="#fecdd3" fontSize="10" fontFamily="monospace" fontWeight="bold">✦ BSL PURGED (Judas Swing)</text>

                  {/* 1m MSS (Market Structure Shift) Level */}
                  <line x1="330" y1="140" x2="620" y2="140" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
                  <rect x="350" y="124" width="160" height="18" rx="4" fill="#064e3b" fillOpacity="0.8" stroke="#10b981" strokeWidth="0.8" />
                  <text x="358" y="137" fill="#a7f3d0" fontSize="9.5" fontFamily="monospace" fontWeight="bold">✦ 1m MSS (Bodies Displace)</text>

                  {/* FAIR VALUE GAP (FVG / SIBI) HIGHLIGHT BOX */}
                  <rect x="420" y="120" width="180" height="52" fill="url(#fvgArea)" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Consequent Encroachment (50% CE) Line */}
                  <line x1="420" y1="146" x2="600" y2="146" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <rect x="450" y="152" width="145" height="18" rx="4" fill="#082f49" fillOpacity="0.85" stroke="#38bdf8" strokeWidth="0.8" />
                  <text x="456" y="165" fill="#bae6fd" fontSize="9.5" fontFamily="monospace" fontWeight="bold">50% CE Limit Fill: 1.08420</text>

                  {/* TARGET TAKE PROFIT LEVEL (SSL Target) */}
                  <line x1="580" y1="285" x2="840" y2="285" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
                  <rect x="610" y="267" width="210" height="20" rx="4" fill="#064e3b" fillOpacity="0.8" stroke="#10b981" strokeWidth="0.8" />
                  <text x="618" y="281" fill="#6ee7b7" fontSize="10" fontFamily="monospace" fontWeight="bold">✦ TARGET TP: 1.08180 (+24 Pips · 1:3.4 R:R)</text>

                  {/* ----------------- CANDLESTICKS ----------------- */}
                  {/* Pre-macro consolidation */}
                  {/* Candle 1 (Green) */}
                  <line x1="90" y1="120" x2="90" y2="160" stroke="#10b981" strokeWidth="1.5" />
                  <rect x="85" y="130" width="10" height="22" fill="#10b981" rx="1.5" />

                  {/* Candle 2 (Red) */}
                  <line x1="130" y1="128" x2="130" y2="168" stroke="#f43f5e" strokeWidth="1.5" />
                  <rect x="125" y="135" width="10" height="25" fill="#f43f5e" rx="1.5" />

                  {/* Candle 3 (Green) */}
                  <line x1="170" y1="110" x2="170" y2="155" stroke="#10b981" strokeWidth="1.5" />
                  <rect x="165" y="118" width="10" height="30" fill="#10b981" rx="1.5" />

                  {/* Candle 4 (Green) */}
                  <line x1="210" y1="90" x2="210" y2="140" stroke="#10b981" strokeWidth="1.5" />
                  <rect x="205" y="98" width="10" height="32" fill="#10b981" rx="1.5" />

                  {/* Candle 5: The Judas Swing Wick (Pierces BSL high, body rejects down) */}
                  <line x1="250" y1="52" x2="250" y2="125" stroke="#f43f5e" strokeWidth="1.5" />
                  <rect x="245" y="80" width="10" height="38" fill="#f43f5e" rx="1.5" />

                  {/* Candle 6: Displacement Plunge 1 */}
                  <line x1="290" y1="95" x2="290" y2="165" stroke="#f43f5e" strokeWidth="1.5" />
                  <rect x="285" y="105" width="10" height="52" fill="#f43f5e" rx="1.5" />

                  {/* Candle 7: Displacement Plunge 2 (Leaves FVG) */}
                  <line x1="330" y1="150" x2="330" y2="215" stroke="#f43f5e" strokeWidth="1.5" />
                  <rect x="325" y="155" width="10" height="52" fill="#f43f5e" rx="1.5" />

                  {/* Candle 8: Displacement Plunge 3 */}
                  <line x1="370" y1="195" x2="370" y2="250" stroke="#f43f5e" strokeWidth="1.5" />
                  <rect x="365" y="202" width="10" height="38" fill="#f43f5e" rx="1.5" />

                  {/* Candle 9: Retrace Green 1 */}
                  <line x1="420" y1="190" x2="420" y2="242" stroke="#10b981" strokeWidth="1.5" />
                  <rect x="415" y="196" width="10" height="36" fill="#10b981" rx="1.5" />

                  {/* Candle 10: Retrace Green 2 into FVG */}
                  <line x1="470" y1="160" x2="470" y2="215" stroke="#10b981" strokeWidth="1.5" />
                  <rect x="465" y="168" width="10" height="36" fill="#10b981" rx="1.5" />

                  {/* Candle 11: Tap Consequent Encroachment (50% CE Entry) */}
                  <line x1="520" y1="144" x2="520" y2="198" stroke="#38bdf8" strokeWidth="1.8" />
                  <rect x="515" y="152" width="10" height="36" fill="#0284c7" rx="1.5" />
                  
                  {/* Order Entry Indicator */}
                  <circle cx="520" cy="146" r="4.5" fill="#38bdf8" />
                  <circle cx="520" cy="146" r="8" stroke="#38bdf8" strokeWidth="1.2" opacity="0.6" />

                  {/* Candle 12: Bearish Continuation 1 */}
                  <line x1="570" y1="165" x2="570" y2="235" stroke="#f43f5e" strokeWidth="1.5" />
                  <rect x="565" y="174" width="10" height="50" fill="#f43f5e" rx="1.5" />

                  {/* Candle 13: Bearish Expansion 2 */}
                  <line x1="620" y1="215" x2="620" y2="270" stroke="#f43f5e" strokeWidth="1.5" />
                  <rect x="615" y="222" width="10" height="42" fill="#f43f5e" rx="1.5" />

                  {/* Candle 14: Target Hit at SSL (Take Profit) */}
                  <line x1="670" y1="250" x2="670" y2="295" stroke="#10b981" strokeWidth="1.5" />
                  <rect x="665" y="258" width="10" height="30" fill="#10b981" rx="1.5" />
                </svg>
              </div>

              {/* Workstation Live Telemetry Strip */}
              <div className="mt-4 pt-4 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <span className="text-slate-500 block text-[10px]">SETUP ARCHITECTURE</span>
                  <span className="text-white font-semibold">Judas Swing + 1m SIBI</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <span className="text-slate-500 block text-[10px]">ENTRY TRIGGER</span>
                  <span className="text-cyan-300 font-semibold">50% CE @ 1.08420</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <span className="text-slate-500 block text-[10px]">RISK / REWARD</span>
                  <span className="text-emerald-400 font-semibold">1 : 3.4 (+24.0 Pips)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <span className="text-slate-500 block text-[10px]">RULE VERIFICATION</span>
                  <span className="text-cyan-300 font-semibold">6 of 6 Gates Passed</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 2. CORE PRINCIPLES: HIGH-CRAFT DARK GLASS CARDS                      */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-24 bg-[#030712] border-t border-white/[0.08] relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
              ✦ CORE PRINCIPLES
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              The Architecture of Price
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Every price movement is driven by algorithmically engineered liquidity and delivery targets.
            </p>
          </div>

          {/* 6 Sleek Dark Glass Cards with Subtle Luminous Blooms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Liquidity Purge */}
            <Link
              href="/learn/foundations/liquidity-concepts"
              className="group relative rounded-[28px] bg-[#080d1a]/60 border border-white/[0.08] p-8 flex flex-col justify-between overflow-hidden shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_10px_35px_rgba(6,182,212,0.12)]"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-amber-500/15 via-cyan-400/10 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6">
                  <span className="text-amber-400 font-bold">✦ 01 / PURGE</span>
                  <span>IPDA MECHANIC</span>
                </div>

                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold mb-1">
                  Engineered Stops
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                  The Judas Swing
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  Price sweeps equal highs or lows at key session opens, hunting resting retail stop orders before the real algorithmic expansion unfolds.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono font-semibold text-slate-400 group-hover:text-cyan-300 transition-colors">
                <span>Wicks Sweep · Bodies Tell</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 2: Fair Value Gaps */}
            <Link
              href="/learn/foundations/imbalances-and-fvg"
              className="group relative rounded-[28px] bg-[#080d1a]/60 border border-white/[0.08] p-8 flex flex-col justify-between overflow-hidden shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_10px_35px_rgba(6,182,212,0.12)]"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-cyan-500/20 via-sky-400/10 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6">
                  <span className="text-cyan-400 font-bold">✦ 02 / IMBALANCE</span>
                  <span>PD ARRAYS</span>
                </div>

                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold mb-1">
                  Rebalance Magnet
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                  Fair Value Gaps
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  Displacement leaves three-candle price voids. Consequent Encroachment (50%) serves as the institutional equilibrium entry magnet.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono font-semibold text-slate-400 group-hover:text-cyan-300 transition-colors">
                <span>Explore BISI & SIBI</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 3: 20-Min Macros */}
            <Link
              href="/killzones"
              className="group relative rounded-[28px] bg-[#080d1a]/60 border border-white/[0.08] p-8 flex flex-col justify-between overflow-hidden shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_10px_35px_rgba(168,85,247,0.12)]"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-purple-500/20 via-indigo-400/10 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6">
                  <span className="text-purple-400 font-bold">✦ 03 / MACRO</span>
                  <span>TIME & PRICE</span>
                </div>

                <div className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold mb-1">
                  Precision Windows
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                  Algorithmic Macros
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  High-probability setups execute strictly during 20-minute macro cycles and institutional sessions: London Open and NY Silver Bullet.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono font-semibold text-slate-400 group-hover:text-purple-300 transition-colors">
                <span>View Macro Schedule</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 4: SMT Divergence */}
            <Link
              href="/learn/advanced/smt-divergence"
              className="group relative rounded-[28px] bg-[#080d1a]/60 border border-white/[0.08] p-8 flex flex-col justify-between overflow-hidden shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_10px_35px_rgba(59,130,246,0.12)]"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-blue-500/20 via-cyan-400/10 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6">
                  <span className="text-blue-400 font-bold">✦ 04 / SMT</span>
                  <span>CORRELATION</span>
                </div>

                <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold mb-1">
                  Swing Failure
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                  SMT Divergence
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  Correlated assets (ES vs NQ, EUR vs GBP) reveal smart money accumulation when one creates a new swing high/low while the other fails.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono font-semibold text-slate-400 group-hover:text-blue-300 transition-colors">
                <span>Identify Crack in Correlation</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 5: 6-Gate Rulebook */}
            <Link
              href="/checklist"
              className="group relative rounded-[28px] bg-[#080d1a]/60 border border-white/[0.08] p-8 flex flex-col justify-between overflow-hidden shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_10px_35px_rgba(16,185,129,0.12)]"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-emerald-500/20 via-teal-400/10 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6">
                  <span className="text-emerald-400 font-bold">✦ 05 / DISCIPLINE</span>
                  <span>RISK GOVERNANCE</span>
                </div>

                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold mb-1">
                  Zero Discretion
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                  6-Gate Verification
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  Eliminate emotional execution. Trades are verified across HTF context, purge confirmation, displacement MSS, and exact 1:2+ R:R sizing.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono font-semibold text-slate-400 group-hover:text-emerald-300 transition-colors">
                <span>View 6 Execution Gates</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 6: Execution Models */}
            <Link
              href="/learn/execution-models/silver-bullet-strategy"
              className="group relative rounded-[28px] bg-[#080d1a]/60 border border-white/[0.08] p-8 flex flex-col justify-between overflow-hidden shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/40 hover:shadow-[0_10px_35px_rgba(244,63,94,0.12)]"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-rose-500/20 via-orange-400/10 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6">
                  <span className="text-rose-400 font-bold">✦ 06 / BLUEPRINTS</span>
                  <span>EXECUTION MODELS</span>
                </div>

                <div className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold mb-1">
                  High Probability
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                  Institutional Models
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  Step-by-step blueprints for the 10:00 AM NY Silver Bullet, Market Maker Sell Models (MMSM), and the Unicorn Breaker + FVG setup.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono font-semibold text-slate-400 group-hover:text-rose-300 transition-colors">
                <span>Explore Model Blueprints</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

          </div>

        </div>
      </section>





      {/* -------------------------------------------------------------------- */}
      {/* 3. EXECUTION GOVERNANCE: 6-GATE PRE-FLIGHT VERIFICATION CHASSIS      */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-24 bg-[#030712] border-t border-white/[0.08] relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/5 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-4">
              <span>✦</span>
              <span>RISK GOVERNANCE ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              6-Gate Zero-Discretion Protocol
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
              Every position must pass 6 non-negotiable quantitative gates before order submission. Eliminate emotional retail impulse trades forever.
            </p>
          </div>

          {/* Master Institutional Verification Chassis */}
          <div className="rounded-[32px] border border-white/10 bg-[#080d1a]/85 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.6)] overflow-hidden">
            
            {/* Chassis Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-6 sm:px-8 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <div className="font-mono text-xs">
                  <span className="font-bold text-white tracking-wider">SYSTEM STATUS: </span>
                  <span className="text-emerald-400 font-semibold">6 OF 6 GATES LOCKED · EXECUTION AUTHORIZED</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-400 text-[11px] hidden sm:inline">ALGORITHMIC COMPLIANCE:</span>
                <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-bold">
                  100% DISCRETION ZERO
                </span>
              </div>
            </div>

            {/* The 6 Sequential Pipeline Gates */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              
              {/* Gate 1 */}
              <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] p-5 transition-all duration-200 hover:border-cyan-500/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 font-mono text-[11px] font-bold text-cyan-300">
                      GATE 01 · TIMING
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                      <span>✓ Locked</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    Institutional Session Window
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-3">
                    Trade setup executes strictly inside an official Killzone (London Open 02:00–05:00, NY AM 07:00–10:00) or an active 20-minute macro.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
                  <span className="text-amber-400/90 font-medium">Invalidation: </span>
                  <span>Dead lunch hours (12:00–13:30) or Asian consolidation.</span>
                </div>
              </div>

              {/* Gate 2 */}
              <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] p-5 transition-all duration-200 hover:border-cyan-500/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 font-mono text-[11px] font-bold text-cyan-300">
                      GATE 02 · LIQUIDITY
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                      <span>✓ Locked</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    Liquidity Pool Wick Sweep
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-3">
                    A prominent resting pool (Asian High/Low, equal highs/lows, previous day extremes) must be swept by candle wick into HTF key level.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
                  <span className="text-amber-400/90 font-medium">Invalidation: </span>
                  <span>Entering mid-range without an obvious liquidity raid.</span>
                </div>
              </div>

              {/* Gate 3 */}
              <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] p-5 transition-all duration-200 hover:border-cyan-500/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 font-mono text-[11px] font-bold text-cyan-300">
                      GATE 03 · STRUCTURE
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                      <span>✓ Locked</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    Displacement MSS with Bodies
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-3">
                    Market Structure Shift must close with full candle bodies beyond the swing point. Wicks sweep; bodies validate the institutional shift.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
                  <span className="text-amber-400/90 font-medium">Invalidation: </span>
                  <span>Wicks that fail to close beyond the opposing swing.</span>
                </div>
              </div>

              {/* Gate 4 */}
              <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] p-5 transition-all duration-200 hover:border-cyan-500/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 font-mono text-[11px] font-bold text-cyan-300">
                      GATE 04 · IMBALANCE
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                      <span>✓ Locked</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    Energetic Fair Value Gap
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-3">
                    The displacement impulse must generate a clean 3-candle Fair Value Gap (BISI/SIBI). Zero imbalance equals zero institutional sponsorship.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
                  <span className="text-amber-400/90 font-medium">Invalidation: </span>
                  <span>Overlap candles without single-direction price imbalance.</span>
                </div>
              </div>

              {/* Gate 5 */}
              <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] p-5 transition-all duration-200 hover:border-cyan-500/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 font-mono text-[11px] font-bold text-cyan-300">
                      GATE 05 · PRICING
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                      <span>✓ Locked</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    Discount vs. Premium Array
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-3">
                    Long entries strictly executed in Discount (&lt; 50% Equilibrium), ideally at 0.705 OTE Sweet Spot. Shorts strictly executed in Premium (&gt; 50%).
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
                  <span className="text-amber-400/90 font-medium">Invalidation: </span>
                  <span>Buying above 50% equilibrium or selling below 50%.</span>
                </div>
              </div>

              {/* Gate 6 */}
              <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] p-5 transition-all duration-200 hover:border-cyan-500/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 font-mono text-[11px] font-bold text-cyan-300">
                      GATE 06 · MATHEMATICS
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                      <span>✓ Locked</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    Minimum 1:2.0 Asymmetric R:R
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-3">
                    Stop loss strictly placed beyond displacement swing extreme. Target Draw on Liquidity (DOL) must deliver at least 2.0x the risk.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
                  <span className="text-amber-400/90 font-medium">Invalidation: </span>
                  <span>Trades offering less than 1:2 risk-to-reward ratio.</span>
                </div>
              </div>

            </div>

            {/* Chassis Footer Bar & Action */}
            <div className="p-6 sm:px-8 border-t border-white/[0.08] bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="text-cyan-400">✦</span>
                <span>All 6 gates must pass simultaneously before order execution.</span>
              </div>

              <Link
                href="/checklist"
                className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-xs font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:scale-102 flex items-center gap-2"
              >
                <span>Launch Interactive Pre-Trade Checklist</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 4. UNIFIED DARK BANNER & HUMAN FOOTER                                */}
      {/* -------------------------------------------------------------------- */}
      <section className="relative py-24 bg-[#030712] border-t border-white/[0.08] overflow-hidden">
        {/* Soft cyan celestial aura underneath */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-t from-cyan-500/25 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-xs">
            <span>✦</span> A–Z TECHNICAL LEXICON
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            71 Standardized Algorithmic Definitions
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-normal">
            From BISI/SIBI to SMT Divergence, Equilibrium Dealing Ranges, and IPDA Data Cycles. Built for immediate lookup while analyzing live charts.
          </p>
          
          <div className="pt-3">
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all hover:scale-102"
            >
              <span>Explore Complete Lexicon</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-white/[0.08] bg-[#02050e] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-xl bg-[#0b1120] border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-bold">
              ✦
            </div>
            <span className="text-sm font-bold text-white">ICT CORE</span>
            <span className="text-xs text-slate-400">— Institutional Price Delivery Architecture</span>
          </div>
          <p className="text-xs text-slate-500 font-sans">
            For educational and simulation purposes only. Not financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
