"use client";

import React, { useState } from "react";

export type DiagramType = 
  | "bullish-fvg"
  | "bearish-fvg"
  | "inversion-fvg"
  | "bullish-order-block"
  | "bearish-breaker"
  | "smt-divergence"
  | "power-of-3"
  | "volume-imbalance"
  | "ote-fibonacci"
  | "liquidity-pool";

interface IctCandleGraphicProps {
  type: DiagramType | string;
  title?: string;
  caption?: string;
}

export default function IctCandleGraphic({
  type,
  title,
  caption,
}: IctCandleGraphicProps) {
  const [activeElement, setActiveElement] = useState<string | null>(null);

  // Render specific SVG diagrams based on type
  const renderDiagram = () => {
    switch (type) {
      case "bullish-fvg":
      case "fvg":
        return (
          <svg viewBox="0 0 760 380" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bullGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="fvgFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.06" />
              </linearGradient>
              <filter id="glowFvg" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#F59E0B" floodOpacity="0.15" />
              </filter>
            </defs>

            {/* Grid Background */}
            <g opacity="0.4" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4">
              <line x1="40" y1="60" x2="720" y2="60" />
              <line x1="40" y1="120" x2="720" y2="120" />
              <line x1="40" y1="180" x2="720" y2="180" />
              <line x1="40" y1="240" x2="720" y2="240" />
              <line x1="40" y1="300" x2="720" y2="300" />
            </g>

            {/* CANDLE 1 (Setup) */}
            <g className="cursor-pointer" onMouseEnter={() => setActiveElement("candle1")} onMouseLeave={() => setActiveElement(null)}>
              {/* Wick */}
              <line x1="160" y1="180" x2="160" y2="290" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
              {/* Body */}
              <rect x="140" y="200" width="40" height="70" rx="3" fill="url(#bullGreen)" stroke="#047857" strokeWidth="1.5" />
              {/* High marker */}
              <circle cx="160" cy="180" r="4" fill="#047857" />
              {/* Label */}
              <text x="160" y="325" textAnchor="middle" className="text-[12px] font-semibold fill-zinc-600">Candle 1</text>
              <text x="160" y="342" textAnchor="middle" className="text-[11px] font-mono fill-zinc-400">Baseline High</text>
            </g>

            {/* CANDLE 2 (Large Impulsive Displacement) */}
            <g className="cursor-pointer" onMouseEnter={() => setActiveElement("candle2")} onMouseLeave={() => setActiveElement(null)}>
              {/* Wick */}
              <line x1="290" y1="50" x2="290" y2="260" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
              {/* Body */}
              <rect x="270" y="80" width="40" height="150" rx="3" fill="url(#bullGreen)" stroke="#047857" strokeWidth="1.5" />
              {/* Label */}
              <text x="290" y="325" textAnchor="middle" className="text-[12px] font-semibold fill-zinc-900">Candle 2</text>
              <text x="290" y="342" textAnchor="middle" className="text-[11px] font-mono font-medium fill-emerald-600">Displacement</text>
            </g>

            {/* CANDLE 3 (Validation) */}
            <g className="cursor-pointer" onMouseEnter={() => setActiveElement("candle3")} onMouseLeave={() => setActiveElement(null)}>
              {/* Wick */}
              <line x1="420" y1="60" x2="420" y2="150" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
              {/* Body */}
              <rect x="400" y="70" width="40" height="40" rx="3" fill="url(#bullGreen)" stroke="#047857" strokeWidth="1.5" />
              {/* Low marker */}
              <circle cx="420" cy="150" r="4" fill="#047857" />
              {/* Label */}
              <text x="420" y="325" textAnchor="middle" className="text-[12px] font-semibold fill-zinc-600">Candle 3</text>
              <text x="420" y="342" textAnchor="middle" className="text-[11px] font-mono fill-zinc-400">Low of Wick</text>
            </g>

            {/* FVG ZONE BOX (Between Candle 1 High: 180 and Candle 3 Low: 150) */}
            <g filter="url(#glowFvg)">
              <rect x="160" y="150" width="520" height="30" fill="url(#fvgFill)" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />
            </g>

            {/* Candle 3 Low Horizontal Guide */}
            <line x1="420" y1="150" x2="680" y2="150" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="690" y="154" className="text-[11px] font-mono font-semibold fill-amber-700">Top of FVG (Candle 3 Low)</text>

            {/* Consequent Encroachment (50% midpoint) */}
            <line x1="160" y1="165" x2="680" y2="165" stroke="#D97706" strokeWidth="1.2" strokeDasharray="4 3" />
            <text x="690" y="169" className="text-[11px] font-mono fill-amber-600">CE 50.0% (Equilibrium)</text>

            {/* Candle 1 High Horizontal Guide */}
            <line x1="160" y1="180" x2="680" y2="180" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="690" y="184" className="text-[11px] font-mono font-semibold fill-amber-700">Bottom of FVG (Candle 1 High)</text>

            {/* Dimension Bracket */}
            <path d="M 520,150 L 530,150 L 530,180 L 520,180" stroke="#B45309" strokeWidth="1.5" fill="none" />
            <path d="M 530,165 L 540,165" stroke="#B45309" strokeWidth="1.5" />
            <rect x="545" y="153" width="125" height="24" rx="4" fill="#FEF3C7" stroke="#FDE68A" />
            <text x="607" y="169" textAnchor="middle" className="text-[11px] font-mono font-bold fill-amber-900">FVG / BISI IMBALANCE</text>

            {/* Retracement Candle Demonstration */}
            <g opacity="0.85">
              <line x1="500" y1="90" x2="500" y2="165" stroke="#EF4444" strokeWidth="2" strokeDasharray="2 2" />
              <rect x="490" y="110" width="20" height="45" rx="2" fill="#EF4444" opacity="0.6" />
              <path d="M 500,165 L 515,145" stroke="#059669" strokeWidth="2.5" markerEnd="url(#arrow)" />
              <text x="500" y="80" textAnchor="middle" className="text-[10px] font-mono fill-zinc-500">Retracement Test</text>
            </g>
          </svg>
        );

      case "inversion-fvg":
      case "ifvg":
        return (
          <svg viewBox="0 0 760 380" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="invFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Grid Background */}
            <g opacity="0.4" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4">
              <line x1="40" y1="80" x2="720" y2="80" />
              <line x1="40" y1="160" x2="720" y2="160" />
              <line x1="40" y1="240" x2="720" y2="240" />
              <line x1="40" y1="320" x2="720" y2="320" />
            </g>

            {/* Initial Bearish FVG Band across the chart */}
            <rect x="80" y="170" width="600" height="40" fill="url(#invFill)" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" rx="4" />

            {/* Phase 1: Bearish FVG Creation */}
            <g>
              <line x1="120" y1="130" x2="120" y2="220" stroke="#EF4444" strokeWidth="2" />
              <rect x="108" y="145" width="24" height="60" rx="2" fill="#EF4444" />
              <text x="120" y="250" textAnchor="middle" className="text-[11px] font-semibold fill-zinc-500">1. Old Bearish FVG</text>
              <text x="120" y="266" textAnchor="middle" className="text-[10px] font-mono fill-zinc-400">Past Resistance</text>
            </g>

            {/* Phase 2: Violent Bullish Displacement Blowout */}
            <g>
              <line x1="280" y1="70" x2="280" y2="280" stroke="#10B981" strokeWidth="3" />
              <rect x="265" y="90" width="30" height="170" rx="3" fill="#10B981" stroke="#059669" strokeWidth="1.5" />
              {/* Punch-through banner */}
              <rect x="240" y="40" width="160" height="22" rx="4" fill="#DCFCE7" stroke="#86EFAC" />
              <text x="320" y="55" textAnchor="middle" className="text-[10px] font-bold fill-emerald-800">2. VIOLENT DISPLACEMENT</text>
              <text x="280" y="305" textAnchor="middle" className="text-[11px] font-semibold fill-emerald-700">Invalidation Close</text>
            </g>

            {/* Phase 3: Pullback & Inversion Retest */}
            <g>
              {/* Down pullback candles */}
              <line x1="420" y1="80" x2="420" y2="160" stroke="#EF4444" strokeWidth="2" />
              <rect x="410" y="95" width="20" height="50" rx="2" fill="#EF4444" />

              <line x1="470" y1="130" x2="470" y2="172" stroke="#EF4444" strokeWidth="2" />
              <rect x="460" y="140" width="20" height="30" rx="2" fill="#EF4444" />
              {/* Touch point */}
              <circle cx="470" cy="172" r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
              <text x="470" y="235" textAnchor="middle" className="text-[11px] font-semibold fill-blue-700">3. Inversion Retest</text>
              <text x="470" y="250" textAnchor="middle" className="text-[10px] font-mono fill-zinc-500">Old Resistance → Support</text>
            </g>

            {/* Phase 4: Expansion Higher */}
            <g>
              <line x1="560" y1="60" x2="560" y2="200" stroke="#10B981" strokeWidth="3" />
              <rect x="545" y="75" width="30" height="100" rx="3" fill="#10B981" stroke="#059669" strokeWidth="1.5" />

              {/* Trajectory Arrow */}
              <path d="M 470,172 Q 510,172 550,110" stroke="#10B981" strokeWidth="3" fill="none" strokeDasharray="4 4" />
              <polygon points="553,105 542,112 550,118" fill="#10B981" />
              <text x="560" y="45" textAnchor="middle" className="text-[11px] font-bold fill-emerald-800">4. High-Probability Long Entry</text>
            </g>

            {/* Legend Tag */}
            <rect x="80" y="174" width="130" height="32" rx="4" fill="#FFFFFF" stroke="#CBD5E1" />
            <text x="145" y="194" textAnchor="middle" className="text-[11px] font-mono font-bold fill-zinc-800">INVERSION FVG</text>
          </svg>
        );

      case "bullish-order-block":
      case "order-block":
        return (
          <svg viewBox="0 0 760 380" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="obZone" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.06" />
              </linearGradient>
            </defs>

            {/* Grid Background */}
            <g opacity="0.4" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4">
              <line x1="40" y1="80" x2="720" y2="80" />
              <line x1="40" y1="160" x2="720" y2="160" />
              <line x1="40" y1="240" x2="720" y2="240" />
              <line x1="40" y1="320" x2="720" y2="320" />
            </g>

            {/* ORDER BLOCK CANDLE (Last down-close candle before expansion) */}
            <g>
              <line x1="180" y1="170" x2="180" y2="280" stroke="#EF4444" strokeWidth="2.5" />
              <rect x="160" y="190" width="40" height="70" rx="3" fill="#EF4444" stroke="#DC2626" strokeWidth="1.5" />
              <text x="180" y="325" textAnchor="middle" className="text-[12px] font-bold fill-rose-700">Bullish Order Block (+OB)</text>
              <text x="180" y="342" textAnchor="middle" className="text-[10px] font-mono fill-zinc-400">Last Down Candle</text>
            </g>

            {/* OB Zone Extended */}
            <rect x="160" y="190" width="520" height="70" fill="url(#obZone)" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" rx="4" />

            {/* Mean Threshold (50% of body) */}
            <line x1="160" y1="225" x2="680" y2="225" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="5 3" />
            <text x="690" y="229" className="text-[11px] font-mono font-bold fill-blue-700">Mean Threshold (MT 50%)</text>
            <text x="690" y="194" className="text-[10px] font-mono fill-zinc-500">OB Open (Entry Point)</text>
            <text x="690" y="264" className="text-[10px] font-mono fill-zinc-500">OB Low (Invalidation Stop)</text>

            {/* Impulsive Displacement Candles leaving the OB */}
            <g>
              <line x1="280" y1="90" x2="280" y2="230" stroke="#10B981" strokeWidth="2.5" />
              <rect x="260" y="120" width="40" height="100" rx="3" fill="#10B981" />

              <line x1="360" y1="40" x2="360" y2="150" stroke="#10B981" strokeWidth="2.5" />
              <rect x="340" y="60" width="40" height="80" rx="3" fill="#10B981" />
              <text x="360" y="30" textAnchor="middle" className="text-[10px] font-mono font-semibold fill-emerald-600">Displacement creating MSS</text>
            </g>

            {/* Retracement Tap into Mean Threshold */}
            <g>
              <line x1="480" y1="80" x2="480" y2="210" stroke="#EF4444" strokeWidth="2" />
              <rect x="470" y="100" width="20" height="80" rx="2" fill="#EF4444" />

              <line x1="530" y1="160" x2="530" y2="220" stroke="#EF4444" strokeWidth="2" />
              <rect x="520" y="170" width="20" height="40" rx="2" fill="#EF4444" />
              <circle cx="530" cy="220" r="5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />

              <text x="530" y="260" textAnchor="middle" className="text-[11px] font-bold fill-blue-800">Precision Tap into MT</text>
              <text x="530" y="275" textAnchor="middle" className="text-[10px] font-mono fill-zinc-500">Candle bodies must respect MT</text>
            </g>

            {/* Bullish Rejection Rally */}
            <g>
              <line x1="610" y1="50" x2="610" y2="220" stroke="#10B981" strokeWidth="3" />
              <rect x="595" y="70" width="30" height="140" rx="3" fill="#10B981" stroke="#059669" strokeWidth="1.5" />
              <text x="610" y="35" textAnchor="middle" className="text-[11px] font-bold fill-emerald-700">Target: Buy-Side Liquidity</text>
            </g>
          </svg>
        );

      case "bearish-breaker":
      case "breaker-block":
        return (
          <svg viewBox="0 0 760 380" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="breakerZone" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#EF4444" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Grid Background */}
            <g opacity="0.4" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4">
              <line x1="40" y1="80" x2="720" y2="80" />
              <line x1="40" y1="160" x2="720" y2="160" />
              <line x1="40" y1="240" x2="720" y2="240" />
              <line x1="40" y1="320" x2="720" y2="320" />
            </g>

            {/* Swing Low (Old Support that will become Breaker) */}
            <g>
              <circle cx="160" cy="220" r="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
              <text x="160" y="245" textAnchor="middle" className="text-[11px] font-bold fill-blue-700">Swing Low [A]</text>
              <text x="160" y="260" textAnchor="middle" className="text-[10px] font-mono fill-zinc-500">Last Down Candle before High</text>
            </g>

            {/* Breaker Zone Horizontal Band */}
            <rect x="140" y="200" width="540" height="40" fill="url(#breakerZone)" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 3" rx="4" />

            {/* Swing High (Liquidity Sweep) */}
            <g>
              <circle cx="300" cy="70" r="6" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />
              <text x="300" y="50" textAnchor="middle" className="text-[11px] font-bold fill-amber-700">Higher High [B]</text>
              <text x="300" y="65" textAnchor="middle" className="text-[10px] font-mono fill-amber-600">Buy-side Liquidity Purged</text>
            </g>

            {/* Violent Displacement Breaking Swing Low to Lower Low */}
            <g>
              <path d="M 300,70 L 440,310" stroke="#EF4444" strokeWidth="3" />
              <circle cx="440" cy="310" r="6" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
              <text x="440" y="335" textAnchor="middle" className="text-[11px] font-bold fill-rose-700">Lower Low [C]</text>
              <text x="440" y="350" textAnchor="middle" className="text-[10px] font-mono fill-rose-600">MSS Confirmed</text>
            </g>

            {/* Retracement back up into Breaker Zone */}
            <g>
              <path d="M 440,310 L 560,220" stroke="#10B981" strokeWidth="2.5" strokeDasharray="3 3" />
              <circle cx="560" cy="220" r="7" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2.5" />
              <rect x="500" y="160" width="130" height="34" rx="4" fill="#FEE2E2" stroke="#FCA5A5" />
              <text x="565" y="177" textAnchor="middle" className="text-[10px] font-mono font-bold fill-rose-800">BREAKER SHORT ENTRY</text>
              <text x="565" y="190" textAnchor="middle" className="text-[9px] font-mono fill-rose-600">Old Swing Low acts as Wall</text>
            </g>

            {/* Subsequent Selloff */}
            <g>
              <path d="M 560,220 L 660,330" stroke="#EF4444" strokeWidth="3" />
              <polygon points="665,335 652,328 662,320" fill="#EF4444" />
              <text x="660" y="355" textAnchor="middle" className="text-[11px] font-bold fill-zinc-800">Target: SSL</text>
            </g>
          </svg>
        );

      case "volume-imbalance":
      case "vi":
        return (
          <svg viewBox="0 0 760 380" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4">
              <line x1="40" y1="80" x2="720" y2="80" />
              <line x1="40" y1="160" x2="720" y2="160" />
              <line x1="40" y1="240" x2="720" y2="240" />
              <line x1="40" y1="320" x2="720" y2="320" />
            </g>

            {/* Candle 1 */}
            <g>
              <line x1="260" y1="80" x2="260" y2="280" stroke="#10B981" strokeWidth="2.5" />
              <rect x="235" y="160" width="50" height="90" rx="3" fill="#10B981" stroke="#059669" strokeWidth="1.5" />
              <text x="260" y="325" textAnchor="middle" className="text-[12px] font-bold fill-zinc-700">Candle 1</text>
              <text x="260" y="342" textAnchor="middle" className="text-[10px] font-mono fill-zinc-400">Close: 160</text>
            </g>

            {/* Volume Imbalance Void */}
            <rect x="235" y="110" width="290" height="50" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" rx="4" />
            <text x="380" y="138" textAnchor="middle" className="text-[11px] font-mono font-bold fill-amber-900">
              VOLUME IMBALANCE (VI)
            </text>
            <text x="380" y="152" textAnchor="middle" className="text-[9px] font-mono fill-amber-700">
              Wicks Overlap · Real Bodies Void
            </text>

            {/* Candle 2 (Gaps Up at Open) */}
            <g>
              <line x1="460" y1="50" x2="460" y2="220" stroke="#10B981" strokeWidth="2.5" />
              <rect x="435" y="60" width="50" height="50" rx="3" fill="#10B981" stroke="#059669" strokeWidth="1.5" />
              <text x="460" y="325" textAnchor="middle" className="text-[12px] font-bold fill-zinc-700">Candle 2</text>
              <text x="460" y="342" textAnchor="middle" className="text-[10px] font-mono fill-zinc-400">Open: 110 (Gap Up)</text>
            </g>

            {/* Wick Overlap Indicator */}
            <line x1="260" y1="80" x2="460" y2="80" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="260" y1="220" x2="460" y2="220" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
            <text x="610" y="140" className="text-[11px] font-mono font-semibold fill-zinc-600">
              Wick Overlap Range
            </text>
          </svg>
        );

      case "power-of-3":
      case "amd":
        return (
          <svg viewBox="0 0 760 380" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Grid */}
            <g opacity="0.4" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4">
              <line x1="40" y1="80" x2="720" y2="80" />
              <line x1="40" y1="180" x2="720" y2="180" />
              <line x1="40" y1="280" x2="720" y2="280" />
            </g>

            {/* Day Open Baseline */}
            <line x1="60" y1="180" x2="700" y2="180" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="70" y="172" className="text-[11px] font-mono font-bold fill-slate-700">NY Midnight Open (00:00 EST)</text>

            {/* 1. Accumulation Box */}
            <rect x="80" y="150" width="180" height="60" rx="6" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
            <path d="M 90,175 Q 120,160 150,185 T 210,170 T 250,180" stroke="#475569" strokeWidth="2" fill="none" />
            <rect x="110" y="115" width="120" height="24" rx="4" fill="#E2E8F0" />
            <text x="170" y="131" textAnchor="middle" className="text-[11px] font-bold fill-slate-800">1. ACCUMULATION</text>
            <text x="170" y="235" textAnchor="middle" className="text-[10px] font-mono fill-slate-500">Asian / Pre-London Range</text>

            {/* 2. Manipulation (Judas Swing) */}
            <g>
              <path d="M 260,180 L 320,310" stroke="#EF4444" strokeWidth="3" />
              <polygon points="325,315 312,308 322,300" fill="#EF4444" />
              <rect x="250" y="325" width="140" height="24" rx="4" fill="#FEE2E2" stroke="#FCA5A5" />
              <text x="320" y="341" textAnchor="middle" className="text-[10px] font-mono font-bold fill-rose-800">2. MANIPULATION (JUDAS)</text>
              <text x="320" y="270" textAnchor="middle" className="text-[10px] font-mono fill-rose-600">Engineering Sell Stops Below Open</text>
            </g>

            {/* 3. Distribution (Rally to High of Day) */}
            <g>
              <path d="M 330,305 Q 380,240 450,160 T 600,60" stroke="#10B981" strokeWidth="3.5" fill="none" />
              <polygon points="605,55 592,62 600,70" fill="#10B981" />
              <rect x="470" y="30" width="140" height="24" rx="4" fill="#DCFCE7" stroke="#86EFAC" />
              <text x="540" y="46" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-800">3. DISTRIBUTION (EXPANSION)</text>
              <text x="540" y="90" textAnchor="middle" className="text-[10px] font-mono fill-emerald-600">True Daily Trend / Institutional Delivery</text>
            </g>

            {/* Daily Candlestick Equivalent on the Right */}
            <g transform="translate(660, 40)">
              <line x1="20" y1="20" x2="20" y2="280" stroke="#059669" strokeWidth="2.5" />
              <rect x="10" y="140" width="20" height="110" rx="2" fill="#10B981" stroke="#047857" strokeWidth="1.5" />
              <text x="20" y="10" textAnchor="middle" className="text-[10px] font-mono font-bold fill-zinc-600">DAILY</text>
              <text x="20" y="295" textAnchor="middle" className="text-[9px] font-mono fill-zinc-400">CANDLE</text>
            </g>
          </svg>
        );

      default:
        // Default clean interactive candlestick representation
        return (
          <svg viewBox="0 0 760 340" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3">
              <line x1="40" y1="60" x2="720" y2="60" />
              <line x1="40" y1="140" x2="720" y2="140" />
              <line x1="40" y1="220" x2="720" y2="220" />
              <line x1="40" y1="300" x2="720" y2="300" />
            </g>

            {/* Candle Sequence */}
            {/* Candle 1: Bullish */}
            <line x1="120" y1="160" x2="120" y2="270" stroke="#10B981" strokeWidth="2" />
            <rect x="105" y="180" width="30" height="60" rx="2" fill="#10B981" />

            {/* Candle 2: Bullish Large */}
            <line x1="220" y1="90" x2="220" y2="240" stroke="#10B981" strokeWidth="2.5" />
            <rect x="200" y="110" width="40" height="100" rx="3" fill="#10B981" />

            {/* Candle 3: Retracement Bearish */}
            <line x1="320" y1="100" x2="320" y2="210" stroke="#EF4444" strokeWidth="2" />
            <rect x="305" y="120" width="30" height="50" rx="2" fill="#EF4444" />

            {/* Candle 4: Rejection Wick */}
            <line x1="420" y1="130" x2="420" y2="250" stroke="#10B981" strokeWidth="2" />
            <rect x="405" y="140" width="30" height="30" rx="2" fill="#10B981" />

            {/* Candle 5: Expansion */}
            <line x1="520" y1="60" x2="520" y2="180" stroke="#10B981" strokeWidth="3" />
            <rect x="500" y="80" width="40" height="80" rx="3" fill="#10B981" stroke="#059669" strokeWidth="1.5" />

            {/* Key Level Overlay */}
            <line x1="80" y1="160" x2="680" y2="160" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="685" y="164" className="text-[11px] font-mono font-semibold fill-blue-600">Institutional Reference Line</text>
          </svg>
        );
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] overflow-hidden transition-all">
      {/* Schematic Header */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
        <div className="flex items-center gap-2.5">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-zinc-700">
            {title || "Algorithmic Price Delivery Schematic"}
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 text-[10px] font-mono text-zinc-600">
          <span>HIGH-PRECISION VECTOR</span>
        </div>
      </div>

      {/* Visual Canvas */}
      <div className="pt-6 pb-3">
        {renderDiagram()}
      </div>

      {/* Caption Footer */}
      {caption && (
        <div className="mt-4 pt-3 border-t border-zinc-100 flex items-start gap-2">
          <span className="text-[12px] font-mono text-zinc-400 mt-0.5">ℹ</span>
          <p className="text-[12px] leading-relaxed text-zinc-500 font-sans">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
