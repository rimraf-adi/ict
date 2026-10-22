"use client";

import React, { useState } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  Layers, 
  Target, 
  Zap, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Activity,
  BarChart2,
  Info
} from "lucide-react";

// ============================================================================
// DIAGRAM CONTAINER WRAPPER
// ============================================================================
export interface DiagramWrapperProps {
  title: string;
  badge?: string;
  caption?: string;
  children: React.ReactNode;
}

export function DiagramWrapper({
  title,
  badge = "INSTITUTIONAL VECTOR SPECIFICATION",
  caption,
  children,
}: DiagramWrapperProps) {
  return (
    <div className="my-8 rounded-2xl border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-200">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-zinc-100">
        <div className="flex items-center gap-2.5">
          <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
          <h3 className="text-xs sm:text-sm font-bold tracking-tight text-zinc-900 font-mono uppercase">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-100/80 border border-zinc-200/60 text-[10px] font-mono font-medium text-zinc-600">
          <Sparkles className="h-3 w-3 text-amber-500" />
          <span>{badge}</span>
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="pt-4 pb-2 w-full overflow-x-auto flex justify-center">
        <div className="w-full max-w-[760px] min-w-[320px]">
          {children}
        </div>
      </div>

      {/* Caption & Institutional Note */}
      {caption && (
        <div className="mt-3 pt-3 border-t border-zinc-100 flex items-start gap-2.5 text-xs text-zinc-600 font-sans leading-relaxed">
          <Info className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
          <p>{caption}</p>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// 1. OPTIMAL TRADE ENTRY (OTE) FIBONACCI DIAGRAM
// ============================================================================
export function OteFibonacciDiagram() {
  const [hoveredLevel, setHoveredLevel] = useState<string | null>(null);

  return (
    <DiagramWrapper
      title="Optimal Trade Entry (OTE) Fibonacci Calibration"
      badge="0.618 – 0.705 – 0.790 RATIOS"
      caption="The ICT OTE model calibrates the retracement depth of an impulse leg. The 0.705 ratio represents the institutional sweet spot where banks re-accumulate before algorithmic expansion toward negative extension targets."
    >
      <svg
        viewBox="0 0 760 420"
        className="w-full h-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sweet Spot Glow Gradient */}
          <linearGradient id="sweetSpotGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.15" />
          </linearGradient>

          {/* Retracement Zone Gradient */}
          <linearGradient id="oteZoneGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.02" />
          </linearGradient>

          {/* Impulse Line Gradient */}
          <linearGradient id="impulseStroke" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="60%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>

          {/* Target Gradient */}
          <linearGradient id="targetGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* Subtle Grid Lines */}
        <g opacity="0.35" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3">
          <line x1="60" y1="40" x2="700" y2="40" />
          <line x1="60" y1="90" x2="700" y2="90" />
          <line x1="60" y1="140" x2="700" y2="140" />
          <line x1="60" y1="200" x2="700" y2="200" />
          <line x1="60" y1="240" x2="700" y2="240" />
          <line x1="60" y1="270" x2="700" y2="270" />
          <line x1="60" y1="300" x2="700" y2="300" />
          <line x1="60" y1="360" x2="700" y2="360" />
        </g>

        {/* TARGET 2: -0.620 */}
        <g className="cursor-pointer" onMouseEnter={() => setHoveredLevel("-0.620")} onMouseLeave={() => setHoveredLevel(null)}>
          <line x1="60" y1="40" x2="700" y2="40" stroke="#059669" strokeWidth="2" strokeDasharray="5 3" />
          <rect x="580" y="28" width="115" height="24" rx="4" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
          <text x="637" y="44" textAnchor="middle" className="text-[11px] font-mono font-bold fill-emerald-800">-0.620 EXPANSION</text>
          <text x="70" y="34" className="text-[11px] font-mono font-semibold fill-emerald-700">TARGET 2 (Full Expansion Run)</text>
        </g>

        {/* TARGET 1: -0.270 */}
        <g className="cursor-pointer" onMouseEnter={() => setHoveredLevel("-0.270")} onMouseLeave={() => setHoveredLevel(null)}>
          <line x1="60" y1="90" x2="700" y2="90" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 3" />
          <rect x="580" y="78" width="115" height="24" rx="4" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
          <text x="637" y="94" textAnchor="middle" className="text-[11px] font-mono font-bold fill-emerald-700">-0.270 PARTIAL</text>
          <text x="70" y="84" className="text-[11px] font-mono font-semibold fill-emerald-600">TARGET 1 (Take Profit / Scale)</text>
        </g>

        {/* SWING HIGH / 1.000 (Anchor High) */}
        <g className="cursor-pointer" onMouseEnter={() => setHoveredLevel("1.000")} onMouseLeave={() => setHoveredLevel(null)}>
          <line x1="60" y1="140" x2="700" y2="140" stroke="#DC2626" strokeWidth="2" />
          <rect x="580" y="128" width="115" height="24" rx="4" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1" />
          <text x="637" y="144" textAnchor="middle" className="text-[11px] font-mono font-bold fill-rose-800">1.000 SWING HIGH</text>
          <text x="70" y="134" className="text-[11px] font-mono font-bold fill-rose-700">SWING HIGH (Liquidity Purged)</text>
        </g>

        {/* OTE ZONE HIGHLIGHT: Between 0.790 (y=240) and 0.618 (y=300) */}
        <rect x="80" y="240" width="600" height="60" fill="url(#oteZoneGradient)" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 2" />

        {/* 0.790 DEEP OTE BOUNDARY */}
        <line x1="60" y1="240" x2="700" y2="240" stroke="#0891B2" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="590" y="235" className="text-[10px] font-mono font-medium fill-cyan-700">0.790 Deep OTE Limit</text>

        {/* 0.705 INSTITUTIONAL SWEET SPOT BEAM (Glowing Amber) */}
        <g className="cursor-pointer" onMouseEnter={() => setHoveredLevel("0.705")} onMouseLeave={() => setHoveredLevel(null)}>
          <rect x="75" y="260" width="610" height="20" rx="3" fill="url(#sweetSpotGlow)" stroke="#F59E0B" strokeWidth="1.5" />
          <line x1="60" y1="270" x2="700" y2="270" stroke="#D97706" strokeWidth="2.5" />
          <rect x="250" y="258" width="260" height="24" rx="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="380" y="274" textAnchor="middle" className="text-[11px] font-mono font-extrabold fill-amber-900 tracking-wide">
            ★ 0.705 THE INSTITUTIONAL SWEET SPOT ★
          </text>
          <text x="590" y="265" className="text-[10px] font-mono font-bold fill-amber-700">0.705 Primary Limit</text>
        </g>

        {/* 0.618 STANDARD FIB BOUNDARY */}
        <line x1="60" y1="300" x2="700" y2="300" stroke="#0891B2" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="590" y="295" className="text-[10px] font-mono font-medium fill-cyan-700">0.618 Standard OTE Entry</text>

        {/* 0.500 EQUILIBRIUM */}
        <g className="cursor-pointer" onMouseEnter={() => setHoveredLevel("0.500")} onMouseLeave={() => setHoveredLevel(null)}>
          <line x1="60" y1="330" x2="700" y2="330" stroke="#3B82F6" strokeWidth="1.8" strokeDasharray="6 3" />
          <rect x="580" y="318" width="115" height="24" rx="4" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
          <text x="637" y="334" textAnchor="middle" className="text-[11px] font-mono font-bold fill-blue-700">0.500 EQUILIBRIUM</text>
          <text x="70" y="325" className="text-[11px] font-mono font-semibold fill-blue-600">50% FAIR VALUE THRESHOLD</text>
        </g>

        {/* SWING LOW / 0.000 (Anchor Low) */}
        <g className="cursor-pointer" onMouseEnter={() => setHoveredLevel("0.000")} onMouseLeave={() => setHoveredLevel(null)}>
          <line x1="60" y1="380" x2="700" y2="380" stroke="#10B981" strokeWidth="2" />
          <rect x="580" y="368" width="115" height="24" rx="4" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
          <text x="637" y="384" textAnchor="middle" className="text-[11px] font-mono font-bold fill-emerald-800">0.000 SWING LOW</text>
          <text x="70" y="374" className="text-[11px] font-mono font-bold fill-emerald-700">SWING LOW (Impulse Origin)</text>
        </g>

        {/* PRICE ACTION TRAJECTORY: Impulse -> Retrace to 0.705 -> Rocket to Targets */}
        {/* Step 1: Impulse Leg */}
        <path
          d="M 120,380 L 160,330 L 190,350 L 260,140"
          stroke="url(#impulseStroke)"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="120" cy="380" r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="260" cy="140" r="5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
        <text x="190" y="240" textAnchor="middle" className="text-[11px] font-mono font-bold fill-emerald-700 rotate-[-45]">
          IMPULSE LEG
        </text>

        {/* Step 2: Retracement Leg into 0.705 Sweet Spot */}
        <path
          d="M 260,140 L 300,210 L 320,190 L 370,270"
          stroke="#F59E0B"
          strokeWidth="3"
          strokeDasharray="4 2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="370" cy="270" r="6" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2.5" />
        <text x="325" y="175" className="text-[10px] font-mono font-bold fill-amber-700">
          RETRACEMENT
        </text>

        {/* Sweet spot entry callout badge */}
        <g transform="translate(320, 280)">
          <rect x="0" y="0" width="120" height="22" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
          <text x="60" y="15" textAnchor="middle" className="text-[10px] font-mono font-bold fill-amber-900">
            ENTRY @ 0.705
          </text>
        </g>

        {/* Step 3: Explosive Expansion toward -0.270 and -0.620 */}
        <path
          d="M 370,270 L 430,170 L 460,200 L 520,90 L 550,110 L 630,40"
          stroke="#10B981"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="520" cy="90" r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="630" cy="40" r="6" fill="#047857" stroke="#FFFFFF" strokeWidth="2" />

        {/* Arrowhead at target */}
        <polygon points="638,36 622,38 628,48" fill="#047857" />
        <text x="490" y="75" className="text-[11px] font-mono font-bold fill-emerald-700">
          ALGORITHMIC EXPANSION
        </text>
      </svg>
    </DiagramWrapper>
  );
}

// ============================================================================
// 2. DEALING RANGE & EQUILIBRIUM DIAGRAM
// ============================================================================
export function DealingRangeDiagram() {
  return (
    <DiagramWrapper
      title="Dealing Range Architecture & 50% Equilibrium"
      badge="PREMIUM VS. DISCOUNT ZONES"
      caption="Institutions buy cheap in Discount and sell expensive in Premium. Never initiate long positions above 50% Equilibrium or short positions below it."
    >
      <svg
        viewBox="0 0 760 380"
        className="w-full h-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="premiumGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="discountGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.16" />
          </linearGradient>
        </defs>

        {/* 100% SWING HIGH */}
        <line x1="60" y1="50" x2="700" y2="50" stroke="#DC2626" strokeWidth="2" />
        <rect x="560" y="38" width="135" height="24" rx="4" fill="#FEF2F2" stroke="#FCA5A5" />
        <text x="627" y="54" textAnchor="middle" className="text-[11px] font-mono font-bold fill-rose-800">100% SWING HIGH</text>

        {/* PREMIUM ZONE (50% - 100%) */}
        <rect x="60" y="50" width="640" height="140" fill="url(#premiumGrad)" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 2" />
        
        {/* Premium Badge & Description */}
        <g transform="translate(80, 70)">
          <rect x="0" y="0" width="190" height="28" rx="6" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1" />
          <text x="95" y="18" textAnchor="middle" className="text-[12px] font-mono font-bold fill-rose-900">
            PREMIUM ZONE (50% – 100%)
          </text>
        </g>
        <text x="80" y="120" className="text-[12px] font-sans font-medium fill-rose-800">
          • Smart Money Sells / Distributes Longs
        </text>
        <text x="80" y="140" className="text-[12px] font-sans font-medium fill-rose-800">
          • Look for Bearish Order Blocks (-OB), SIBI Fair Value Gaps
        </text>
        <text x="80" y="160" className="text-[12px] font-sans font-semibold fill-rose-900">
          ⚠️ DO NOT BUY HERE (Retail Chasing Danger Zone)
        </text>

        {/* 50% EQUILIBRIUM LINE */}
        <line x1="60" y1="190" x2="700" y2="190" stroke="#2563EB" strokeWidth="2.5" strokeDasharray="6 3" />
        <rect x="290" y="178" width="180" height="24" rx="12" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="380" y="194" textAnchor="middle" className="text-[11px] font-mono font-extrabold fill-blue-900">
          50% EQUILIBRIUM (FAIR VALUE)
        </text>
        <rect x="560" y="178" width="135" height="24" rx="4" fill="#EFF6FF" stroke="#BFDBFE" />
        <text x="627" y="194" textAnchor="middle" className="text-[11px] font-mono font-bold fill-blue-800">50% MIDPOINT</text>

        {/* DISCOUNT ZONE (0% - 50%) */}
        <rect x="60" y="190" width="640" height="140" fill="url(#discountGrad)" stroke="#10B981" strokeWidth="1" strokeDasharray="4 2" />

        {/* Discount Badge & Description */}
        <g transform="translate(80, 215)">
          <rect x="0" y="0" width="190" height="28" rx="6" fill="#DCFCE7" stroke="#10B981" strokeWidth="1" />
          <text x="95" y="18" textAnchor="middle" className="text-[12px] font-mono font-bold fill-emerald-900">
            DISCOUNT ZONE (0% – 50%)
          </text>
        </g>
        <text x="80" y="265" className="text-[12px] font-sans font-medium fill-emerald-800">
          • Smart Money Buys / Accumulates Positions
        </text>
        <text x="80" y="285" className="text-[12px] font-sans font-medium fill-emerald-800">
          • Look for Bullish Order Blocks (+OB), BISI Fair Value Gaps, OTE (62%-79%)
        </text>
        <text x="80" y="305" className="text-[12px] font-sans font-semibold fill-emerald-900">
          ✓ INSTITUTIONAL BUY ONLY ZONE
        </text>

        {/* 0% SWING LOW */}
        <line x1="60" y1="330" x2="700" y2="330" stroke="#059669" strokeWidth="2" />
        <rect x="560" y="318" width="135" height="24" rx="4" fill="#ECFDF5" stroke="#A7F3D0" />
        <text x="627" y="334" textAnchor="middle" className="text-[11px] font-mono font-bold fill-emerald-800">0% SWING LOW</text>
      </svg>
    </DiagramWrapper>
  );
}

// ============================================================================
// 3. LIQUIDITY POOL & SWEEP SCHEMATIC
// ============================================================================
export function LiquidityPoolDiagram() {
  return (
    <DiagramWrapper
      title="Buy-Side & Sell-Side Liquidity Sweeps"
      badge="BSL & SSL ORDER HARVESTING"
      caption="Retail traders cluster stop-loss orders above old equal highs (Buy-Side Liquidity) and below old equal lows (Sell-Side Liquidity). IPDA engineers a sharp wick run to harvest this liquidity before reversing violently."
    >
      <svg
        viewBox="0 0 760 380"
        className="w-full h-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sweepHighGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* BUY-SIDE LIQUIDITY ZONE (Top) */}
        <g transform="translate(100, 60)">
          <line x1="0" y1="40" x2="560" y2="40" stroke="#EF4444" strokeWidth="2" strokeDasharray="5 3" />
          <rect x="180" y="10" width="200" height="26" rx="4" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1" />
          <text x="280" y="27" textAnchor="middle" className="text-[11px] font-mono font-bold fill-rose-900">
            $$$ BUY-SIDE LIQUIDITY (BSL) $$$
          </text>
          <text x="280" y="55" textAnchor="middle" className="text-[10px] font-mono fill-rose-700">
            Retail Buy Stops / Breakout Buyers / Short Stop Losses
          </text>
        </g>

        {/* PRICE TRAJECTORY: Equal Highs formed, then swept by wick */}
        <path
          d="M 120,240 L 170,110 L 210,180 L 260,110 L 310,200 L 370,70 L 420,280"
          stroke="#475569"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Equal High 1 */}
        <circle cx="170" cy="110" r="5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
        <text x="170" y="95" textAnchor="middle" className="text-[10px] font-mono font-semibold fill-zinc-600">High 1</text>

        {/* Equal High 2 */}
        <circle cx="260" cy="110" r="5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
        <text x="260" y="95" textAnchor="middle" className="text-[10px] font-mono font-semibold fill-zinc-600">High 2 (Double High)</text>

        {/* PURGE CANDLE WICK (Takes out High 1 & 2) */}
        <g transform="translate(370, 40)">
          {/* Wick shooting into BSL */}
          <line x1="0" y1="20" x2="0" y2="120" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
          <rect x="-8" y="70" width="16" height="40" rx="2" fill="#DC2626" />
          {/* Target circle at apex */}
          <circle cx="0" cy="20" r="6" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />
          {/* Callout */}
          <rect x="15" y="10" width="160" height="32" rx="6" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="95" y="25" textAnchor="middle" className="text-[10px] font-mono font-bold fill-amber-900">
            ★ WICK SWEEP / PURGE
          </text>
          <text x="95" y="37" textAnchor="middle" className="text-[9px] font-mono fill-amber-800">
            Orders Filled / Smart Distribution
          </text>
        </g>

        {/* Violent Downward Displacement Leg */}
        <path
          d="M 370,110 L 420,290 L 460,250 L 520,330 L 620,340"
          stroke="#DC2626"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="440" y="210" className="text-[11px] font-mono font-bold fill-rose-700 rotate-[45]">
          DISPLACEMENT REVERSAL ➔
        </text>

        {/* SELL-SIDE LIQUIDITY ZONE (Bottom) */}
        <g transform="translate(100, 310)">
          <line x1="0" y1="40" x2="560" y2="40" stroke="#10B981" strokeWidth="2" strokeDasharray="5 3" />
          <rect x="180" y="27" width="200" height="26" rx="4" fill="#DCFCE7" stroke="#10B981" strokeWidth="1" />
          <text x="280" y="44" textAnchor="middle" className="text-[11px] font-mono font-bold fill-emerald-900">
            $$$ SELL-SIDE LIQUIDITY (SSL) $$$
          </text>
        </g>
      </svg>
    </DiagramWrapper>
  );
}

// ============================================================================
// 4. TRENDLINE LIQUIDITY (ENGINEERED RETAIL TRAP)
// ============================================================================
export function TrendlineLiquidityDiagram() {
  return (
    <DiagramWrapper
      title="Engineered Trendline Liquidity Trap"
      badge="RETAIL PHANTOM SUPPORT INDUCEMENT"
      caption="Retail chartists buy touchpoints 1, 2, and 3, placing their stop-losses directly underneath the diagonal trendline. Smart money engineers this liquidity pool, then smashes through it with aggressive displacement."
    >
      <svg
        viewBox="0 0 760 380"
        className="w-full h-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="stopLossGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Retail Trendline Line (Ascending) */}
        <line x1="100" y1="300" x2="500" y2="120" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="6 3" />
        <text x="260" y="245" className="text-[11px] font-mono font-bold fill-blue-600 rotate-[-24]">
          Retail View: "Strong Support Trendline"
        </text>

        {/* Touchpoint 1 */}
        <circle cx="140" cy="280" r="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
        <rect x="110" y="295" width="60" height="20" rx="3" fill="#DBEAFE" stroke="#93C5FD" />
        <text x="140" y="309" textAnchor="middle" className="text-[10px] font-mono font-bold fill-blue-800">Touch 1</text>

        {/* Touchpoint 2 */}
        <circle cx="280" cy="220" r="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
        <rect x="250" y="235" width="60" height="20" rx="3" fill="#DBEAFE" stroke="#93C5FD" />
        <text x="280" y="249" textAnchor="middle" className="text-[10px] font-mono font-bold fill-blue-800">Touch 2</text>

        {/* Touchpoint 3 (Maximum Retail Buying) */}
        <circle cx="420" cy="160" r="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
        <rect x="390" y="175" width="60" height="20" rx="3" fill="#DBEAFE" stroke="#93C5FD" />
        <text x="420" y="189" textAnchor="middle" className="text-[10px] font-mono font-bold fill-blue-800">Touch 3</text>

        {/* CLUSTER OF RETAIL STOP LOSSES (Engineered Liquidity Pool) */}
        <path
          d="M 120,310 L 480,150 L 470,220 L 120,350 Z"
          fill="url(#stopLossGlow)"
          stroke="#EF4444"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <text x="280" y="280" textAnchor="middle" className="text-[11px] font-mono font-bold fill-rose-700">
          ☠ CLUSTERED RETAIL SELL STOPS (LIQUIDITY POOL) ☠
        </text>

        {/* PRICE CURVE BOUNCING THEN SLICING THROUGH */}
        <path
          d="M 100,320 L 140,280 L 190,170 L 240,240 L 280,220 L 340,110 L 390,180 L 420,160 L 460,90 L 490,260 L 530,340"
          stroke="#0F172A"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Violent Institutional Displacement Run Through Trendline */}
        <g transform="translate(460, 90)">
          <path d="M 0,0 L 70,250" stroke="#DC2626" strokeWidth="4.5" strokeLinecap="round" />
          <polygon points="76,260 62,246 75,242" fill="#DC2626" />
          <rect x="20" y="100" width="220" height="34" rx="6" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
          <text x="130" y="117" textAnchor="middle" className="text-[11px] font-mono font-extrabold fill-rose-900">
            INSTITUTIONAL LIQUIDATION RUN
          </text>
          <text x="130" y="129" textAnchor="middle" className="text-[9px] font-mono fill-rose-700">
            Flushing all stops into Discount FVG
          </text>
        </g>
      </svg>
    </DiagramWrapper>
  );
}

// ============================================================================
// 5. MARKET STRUCTURE: BOS VS. MSS (FRACTAL SHIFT)
// ============================================================================
export function MarketStructureDiagram() {
  return (
    <DiagramWrapper
      title="Market Structure: Break of Structure (BOS) vs. Structure Shift (MSS)"
      badge="TREND CONTINUATION VS. REVERSAL"
      caption="A Break of Structure (BOS) indicates trend continuation. A Market Structure Shift (MSS) occurs when price aggressively breaks a previous major swing low/high with full candle body closure, signaling a complete change in institutional order flow."
    >
      <svg
        viewBox="0 0 760 380"
        className="w-full h-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Side: BOS (Continuation) */}
        <g transform="translate(40, 20)">
          <rect x="0" y="0" width="320" height="340" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
          <rect x="15" y="15" width="160" height="26" rx="4" fill="#ECFDF5" stroke="#10B981" />
          <text x="95" y="32" textAnchor="middle" className="text-[11px] font-mono font-bold fill-emerald-800">
            BOS (CONTINUATION)
          </text>

          {/* BOS Wave: Low -> High -> Higher Low -> Higher High */}
          <path
            d="M 30,280 L 100,160 L 150,220 L 260,80"
            stroke="#10B981"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Previous Swing High level */}
          <line x1="100" y1="160" x2="280" y2="160" stroke="#059669" strokeWidth="1.5" strokeDasharray="4 2" />
          <rect x="190" y="148" width="80" height="22" rx="4" fill="#DCFCE7" stroke="#10B981" />
          <text x="230" y="163" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-900">
            BOS LEVEL
          </text>

          <circle cx="100" cy="160" r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="150" cy="220" r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="260" cy="80" r="6" fill="#047857" stroke="#FFFFFF" strokeWidth="2" />

          <text x="100" y="145" textAnchor="middle" className="text-[10px] font-mono fill-zinc-600">Old High</text>
          <text x="150" y="240" textAnchor="middle" className="text-[10px] font-mono fill-zinc-600">Higher Low</text>
          <text x="260" y="65" textAnchor="middle" className="text-[11px] font-mono font-bold fill-emerald-800">New Higher High</text>

          <text x="20" y="315" className="text-[11px] font-sans text-zinc-600">
            • Trend continues in original direction
          </text>
        </g>

        {/* Right Side: MSS (Market Structure Shift) */}
        <g transform="translate(390, 20)">
          <rect x="0" y="0" width="330" height="340" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
          <rect x="15" y="15" width="220" height="26" rx="4" fill="#FEF2F2" stroke="#EF4444" />
          <text x="125" y="32" textAnchor="middle" className="text-[11px] font-mono font-bold fill-rose-900">
            MSS (INSTITUTIONAL SHIFT)
          </text>

          {/* MSS Wave: Low -> High -> Higher Low -> Liquidity Sweep High -> Aggressive Breakdown Lower Low */}
          <path
            d="M 30,220 L 80,120 L 140,180 L 190,80 L 280,290"
            stroke="#DC2626"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Significant Swing Low Line */}
          <line x1="140" y1="180" x2="310" y2="180" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 2" />
          <rect x="200" y="168" width="105" height="24" rx="4" fill="#FEE2E2" stroke="#EF4444" />
          <text x="252" y="184" textAnchor="middle" className="text-[10px] font-mono font-bold fill-rose-900">
            MSS SWING LOW
          </text>

          <circle cx="80" cy="120" r="5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="140" cy="180" r="5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="190" cy="80" r="6" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="280" cy="290" r="6" fill="#991B1B" stroke="#FFFFFF" strokeWidth="2" />

          <text x="190" y="65" textAnchor="middle" className="text-[10px] font-mono font-bold fill-amber-700">BSL Purge High</text>
          <text x="140" y="200" textAnchor="middle" className="text-[10px] font-mono fill-zinc-600">Key Low</text>
          <text x="280" y="315" textAnchor="middle" className="text-[11px] font-mono font-bold fill-rose-900">Displacement Low</text>

          <text x="20" y="325" className="text-[10px] font-mono font-bold fill-rose-700">
            ⚠️ Body closure below key low = Shift Confirmed
          </text>
        </g>
      </svg>
    </DiagramWrapper>
  );
}

// ============================================================================
// 6. SMT DIVERGENCE (SMART MONEY TECHNIQUE)
// ============================================================================
export function SmtDivergenceDiagram() {
  return (
    <DiagramWrapper
      title="SMT Divergence: Intermarket Crack in Correlation"
      badge="CORRELATED ASSET DISCLOSURE"
      caption="When two closely correlated assets (such as Nasdaq NQ and S&P 500 ES) diverge at a key swing high or low, it reveals institutional sponsorship. Asset A purges liquidity while Asset B refuses, confirming imminent market reversal."
    >
      <svg
        viewBox="0 0 760 380"
        className="w-full h-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ASSET A: e.g. NASDAQ 100 (NQ) */}
        <g transform="translate(40, 20)">
          <rect x="0" y="0" width="320" height="340" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          <rect x="15" y="15" width="180" height="26" rx="4" fill="#EFF6FF" stroke="#3B82F6" />
          <text x="105" y="32" textAnchor="middle" className="text-[11px] font-mono font-bold fill-blue-900">
            ASSET A: NQ (NASDAQ 100)
          </text>

          {/* Makes Higher High (Sweeps Liquidity) */}
          <path
            d="M 30,260 L 90,140 L 150,210 L 240,90 L 290,280"
            stroke="#2563EB"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="90" cy="140" r="5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="240" cy="90" r="6" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />

          {/* Ascending High line */}
          <line x1="90" y1="140" x2="240" y2="90" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 2" />
          <rect x="110" y="95" width="120" height="22" rx="4" fill="#FEF2F2" stroke="#FCA5A5" />
          <text x="170" y="110" textAnchor="middle" className="text-[10px] font-mono font-bold fill-rose-800">
            HIGHER HIGH (PURGE)
          </text>
          <text x="240" y="75" textAnchor="middle" className="text-[10px] font-mono fill-zinc-600">High 2 &gt; High 1</text>
        </g>

        {/* ASSET B: e.g. S&P 500 (ES) */}
        <g transform="translate(390, 20)">
          <rect x="0" y="0" width="330" height="340" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          <rect x="15" y="15" width="180" height="26" rx="4" fill="#ECFDF5" stroke="#10B981" />
          <text x="105" y="32" textAnchor="middle" className="text-[11px] font-mono font-bold fill-emerald-900">
            ASSET B: ES (S&P 500)
          </text>

          {/* Fails to make Higher High -> Prints LOWER HIGH */}
          <path
            d="M 30,260 L 90,100 L 150,190 L 240,140 L 290,290"
            stroke="#059669"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="90" cy="100" r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="240" cy="140" r="6" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" />

          {/* Descending High line */}
          <line x1="90" y1="100" x2="240" y2="140" stroke="#D97706" strokeWidth="2" strokeDasharray="4 2" />
          <rect x="110" y="105" width="120" height="22" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
          <text x="170" y="120" textAnchor="middle" className="text-[10px] font-mono font-bold fill-amber-900">
            LOWER HIGH (SMT)
          </text>
          <text x="240" y="160" textAnchor="middle" className="text-[10px] font-mono fill-zinc-600">High 2 &lt; High 1</text>
        </g>

        {/* Center Divergence Badge */}
        <g transform="translate(260, 310)">
          <rect x="0" y="0" width="240" height="34" rx="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
          <text x="120" y="21" textAnchor="middle" className="text-[11px] font-mono font-extrabold fill-amber-900">
            ★ SMT CRACK CONFIRMED ★
          </text>
        </g>
      </svg>
    </DiagramWrapper>
  );
}

// ============================================================================
// 7. KILLZONES & TIME WINDOWS TIMELINE DIAGRAM
// ============================================================================
export function KillzonesTimelineDiagram() {
  return (
    <DiagramWrapper
      title="24-Hour New York Algorithmic Killzones Timeline"
      badge="EST / NEW YORK LOCAL TIME"
      caption="Price moves because of scheduled algorithmic programs, not random chaos. Never enter trades outside these high-probability institutional killzone windows."
    >
      <div className="space-y-4">
        {/* Timeline Bar Visual */}
        <div className="relative w-full h-14 bg-zinc-100 rounded-xl border border-zinc-200/80 p-1 flex overflow-hidden">
          {/* Asian: 20:00 - 00:00 (16.6%) */}
          <div className="h-full rounded-lg bg-indigo-50 border border-indigo-200 flex flex-col items-center justify-center text-[10px] font-mono font-bold text-indigo-700" style={{ width: "17%" }}>
            <span>ASIAN</span>
            <span className="text-[9px] opacity-75">20:00-00:00</span>
          </div>

          {/* Off hours dead zone */}
          <div className="h-full flex items-center justify-center text-[9px] font-mono text-zinc-400" style={{ width: "8%" }}>
            <span>Dormant</span>
          </div>

          {/* London Open: 02:00 - 05:00 (12.5%) */}
          <div className="h-full rounded-lg bg-amber-50 border border-amber-300 flex flex-col items-center justify-center text-[10px] font-mono font-bold text-amber-800" style={{ width: "18%" }}>
            <span>LONDON OPEN</span>
            <span className="text-[9px] opacity-75">02:00-05:00</span>
          </div>

          {/* Gap */}
          <div className="h-full flex items-center justify-center text-[9px] font-mono text-zinc-400" style={{ width: "8%" }}>
            <span>Pre-NY</span>
          </div>

          {/* New York AM: 07:00 - 10:00 (12.5%) */}
          <div className="h-full rounded-lg bg-emerald-50 border border-emerald-300 flex flex-col items-center justify-center text-[10px] font-mono font-bold text-emerald-800" style={{ width: "20%" }}>
            <span>NY AM SESSION</span>
            <span className="text-[9px] opacity-75">07:00-10:00</span>
          </div>

          {/* Silver Bullet: 10:00 - 11:00 (4.1%) */}
          <div className="h-full rounded-lg bg-purple-100 border border-purple-400 flex flex-col items-center justify-center text-[9px] font-mono font-extrabold text-purple-900" style={{ width: "12%" }}>
            <span>SILVER BULLET</span>
            <span className="text-[8px] opacity-80">10:00-11:00</span>
          </div>

          {/* Lunch */}
          <div className="h-full flex items-center justify-center text-[9px] font-mono text-zinc-400" style={{ width: "5%" }}>
            <span>Lunch</span>
          </div>

          {/* New York PM: 13:30 - 16:00 (10.4%) */}
          <div className="h-full rounded-lg bg-cyan-50 border border-cyan-300 flex flex-col items-center justify-center text-[10px] font-mono font-bold text-cyan-800" style={{ width: "12%" }}>
            <span>NY PM</span>
            <span className="text-[9px] opacity-75">13:30-16:00</span>
          </div>
        </div>

        {/* Detailed Grid Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          <div className="p-3 rounded-xl border border-indigo-100 bg-indigo-50/40 space-y-1">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-indigo-900">
              <span>Asian Range</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-700">Accumulation</span>
            </div>
            <p className="text-[11px] font-mono text-zinc-600">20:00 – 00:00 EST</p>
            <p className="text-xs text-zinc-600">Consolidates the initial 20–40 pip baseline range to be manipulated later.</p>
          </div>

          <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/50 space-y-1">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-900">
              <span>London Open</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">Judas Swing</span>
            </div>
            <p className="text-[11px] font-mono text-zinc-600">02:00 – 05:00 EST</p>
            <p className="text-xs text-zinc-600">Creates the definitive High or Low of the day (70%+ probability).</p>
          </div>

          <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-1">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-900">
              <span>New York AM</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">Expansion</span>
            </div>
            <p className="text-[11px] font-mono text-zinc-600">07:00 – 10:00 EST</p>
            <p className="text-xs text-zinc-600">Highest volume window; sweeps London extreme or drives full daily expansion.</p>
          </div>

          <div className="p-3 rounded-xl border border-purple-200 bg-purple-50/50 space-y-1">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-purple-900">
              <span>Silver Bullet</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-100 text-purple-800">Macro Model</span>
            </div>
            <p className="text-[11px] font-mono text-zinc-600">10:00 – 11:00 EST</p>
            <p className="text-xs text-zinc-600">Guaranteed delivery into liquidity pool via FVG on 1-minute chart.</p>
          </div>
        </div>
      </div>
    </DiagramWrapper>
  );
}

// ============================================================================
// 8. ICT 2022 MENTORSHIP BLUEPRINT DIAGRAM
// ============================================================================
export function Ict2022BlueprintDiagram() {
  return (
    <DiagramWrapper
      title="The ICT 2022 Mentorship Model Execution Blueprint"
      badge="MECHANICAL 5-STEP PROTOCOL"
      caption="The signature 2022 mechanical setup: High Timeframe Liquidity Sweep ➔ Aggressive Displacement ➔ Market Structure Shift with Body Close ➔ Fair Value Gap Formation ➔ Limit Retracement Entry ➔ Expansion to Target."
    >
      <svg
        viewBox="0 0 760 380"
        className="w-full h-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fvgHighlight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* STEP 1: Liquidity Level (BSL) */}
        <line x1="60" y1="90" x2="680" y2="90" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 3" />
        <rect x="70" y="70" width="160" height="22" rx="4" fill="#FEE2E2" stroke="#EF4444" />
        <text x="150" y="85" textAnchor="middle" className="text-[10px] font-mono font-bold fill-rose-900">
          1. OLD SWING HIGH (BSL)
        </text>

        {/* PRICE TRAJECTORY */}
        {/* Step 1: Run to sweep BSL */}
        <path
          d="M 100,240 L 160,140 L 210,180 L 270,70"
          stroke="#0F172A"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="270" cy="70" r="6" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2.5" />
        <rect x="290" y="60" width="130" height="22" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
        <text x="355" y="75" textAnchor="middle" className="text-[10px] font-mono font-bold fill-amber-900">
          ★ LIQUIDITY PURGED
        </text>

        {/* Key Swing Low before the sweep */}
        <circle cx="210" cy="180" r="5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="210" y1="180" x2="520" y2="180" stroke="#DC2626" strokeWidth="1.8" strokeDasharray="4 2" />
        <rect x="360" y="168" width="150" height="24" rx="4" fill="#FEE2E2" stroke="#EF4444" />
        <text x="435" y="184" textAnchor="middle" className="text-[10px] font-mono font-bold fill-rose-900">
          3. MSS (KEY SWING LOW)
        </text>

        {/* Step 2: Displacement leg downward breaking the low */}
        <path
          d="M 270,70 L 330,260"
          stroke="#DC2626"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
        />
        <text x="325" y="140" className="text-[11px] font-mono font-bold fill-rose-700 rotate-[70]">
          2. DISPLACEMENT
        </text>

        {/* Step 4: FVG Void created between y=140 and y=170 */}
        <rect x="300" y="140" width="180" height="30" fill="url(#fvgHighlight)" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="390" y="158" textAnchor="middle" className="text-[10px] font-mono font-bold fill-amber-900">
          4. FAIR VALUE GAP (FVG)
        </text>

        {/* Step 5: Retracement leg into the FVG */}
        <path
          d="M 330,260 L 380,210 L 410,155"
          stroke="#F59E0B"
          strokeWidth="3"
          strokeDasharray="4 2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="410" cy="155" r="6" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2.5" />
        <rect x="425" y="145" width="115" height="22" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
        <text x="482" y="160" textAnchor="middle" className="text-[10px] font-mono font-bold fill-amber-900">
          5. ENTRY IN FVG
        </text>

        {/* Step 6: Full expansion downward toward target */}
        <path
          d="M 410,155 L 480,270 L 530,240 L 620,340"
          stroke="#10B981"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon points="625,348 610,338 624,330" fill="#047857" />

        {/* Target SSL */}
        <line x1="60" y1="340" x2="680" y2="340" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2" />
        <rect x="70" y="328" width="160" height="22" rx="4" fill="#DCFCE7" stroke="#10B981" />
        <text x="150" y="343" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-900">
          6. TARGET (SELL-SIDE SSL)
        </text>
      </svg>
    </DiagramWrapper>
  );
}

// ============================================================================
// 9. POWER OF 3 (PO3 / AMD) DIAGRAM
// ============================================================================
export function PowerOf3Diagram() {
  return (
    <DiagramWrapper
      title="Power of 3 (PO3): Accumulation, Manipulation & Distribution"
      badge="DAILY CANDLE ANATOMY"
      caption="IPDA engineers daily candlesticks through three distinct phases: Asian accumulation near Midnight Open (00:00 EST), London Judas Swing manipulation hunting stops below the open, and sustained New York distribution into daily targets."
    >
      <svg
        viewBox="0 0 760 380"
        className="w-full h-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* MIDNIGHT 00:00 EST OPEN BENCHMARK LINE */}
        <line x1="60" y1="180" x2="580" y2="180" stroke="#0284C7" strokeWidth="2" strokeDasharray="5 3" />
        <rect x="70" y="168" width="180" height="24" rx="4" fill="#E0F2FE" stroke="#38BDF8" />
        <text x="160" y="184" textAnchor="middle" className="text-[11px] font-mono font-bold fill-sky-900">
          00:00 NY MIDNIGHT OPEN
        </text>

        {/* 1. ACCUMULATION PHASE (Asian Session) */}
        <g transform="translate(60, 150)">
          <path
            d="M 50,30 L 80,10 L 110,40 L 140,20 L 170,35"
            stroke="#6366F1"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <rect x="40" y="-30" width="150" height="24" rx="4" fill="#EEF2FF" stroke="#A5B4FC" />
          <text x="115" y="-14" textAnchor="middle" className="text-[10px] font-mono font-bold fill-indigo-900">
            1. ACCUMULATION
          </text>
          <text x="115" y="70" textAnchor="middle" className="text-[9px] font-mono fill-indigo-600">
            Asian Range Consolidation
          </text>
        </g>

        {/* 2. MANIPULATION / JUDAS SWING (London Open) */}
        <g transform="translate(240, 180)">
          {/* Violent dip below Midnight open */}
          <path
            d="M 0,0 L 40,120 L 70,80"
            stroke="#EF4444"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="40" cy="120" r="6" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2.5" />
          <rect x="-10" y="130" width="160" height="26" rx="4" fill="#FEE2E2" stroke="#EF4444" />
          <text x="70" y="147" textAnchor="middle" className="text-[10px] font-mono font-bold fill-rose-900">
            2. JUDAS SWING (TRAP)
          </text>
          <text x="70" y="70" textAnchor="middle" className="text-[9px] font-mono fill-rose-700">
            Engineers false sell breakout
          </text>
        </g>

        {/* 3. DISTRIBUTION / EXPANSION (NY Session) */}
        <g transform="translate(320, 180)">
          <path
            d="M 0,60 L 50,-50 L 80,-20 L 160,-130"
            stroke="#10B981"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="160" cy="-130" r="6" fill="#047857" stroke="#FFFFFF" strokeWidth="2.5" />
          <polygon points="166,-135 152,-124 162,-118" fill="#047857" />
          <rect x="80" y="-160" width="160" height="26" rx="4" fill="#DCFCE7" stroke="#10B981" />
          <text x="160" y="-143" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-900">
            3. DISTRIBUTION
          </text>
          <text x="160" y="-70" textAnchor="middle" className="text-[9px] font-mono fill-emerald-700">
            True Daily Trend to High of Day
          </text>
        </g>

        {/* RIGHT SIDE: DAILY CANDLESTICK EQUIVALENT */}
        <g transform="translate(640, 50)">
          <rect x="-30" y="-10" width="100" height="300" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="20" y="15" textAnchor="middle" className="text-[11px] font-mono font-bold fill-zinc-700">
            DAILY CANDLE
          </text>

          {/* Upper Wick: High to Close */}
          <line x1="20" y1="30" x2="20" y2="70" stroke="#059669" strokeWidth="2.5" />
          {/* Green Candle Body: Open (180 - 50 = 130) to Close (70) */}
          <rect x="5" y="70" width="30" height="110" rx="3" fill="#10B981" stroke="#047857" strokeWidth="1.5" />
          {/* Lower Wick: Open to Low (Judas Swing) */}
          <line x1="20" y1="180" x2="20" y2="250" stroke="#EF4444" strokeWidth="2.5" />

          {/* Annotations on Daily Candle */}
          <text x="45" y="35" className="text-[9px] font-mono fill-zinc-500">High</text>
          <text x="45" y="75" className="text-[9px] font-mono fill-emerald-700 font-bold">Close</text>
          <text x="45" y="180" className="text-[9px] font-mono fill-sky-700 font-bold">Open (00:00)</text>
          <text x="45" y="250" className="text-[9px] font-mono fill-rose-700 font-bold">Low (Judas)</text>
        </g>
      </svg>
    </DiagramWrapper>
  );
}

// ============================================================================
// 10. BREAKER BLOCK DIAGRAM
// ============================================================================
export function BreakerBlockDiagram() {
  return (
    <DiagramWrapper
      title="Institutional Breaker Block Execution Anatomy"
      badge="FAILED ORDER BLOCK CONVERSION"
      caption="A Breaker Block is an Order Block that failed because it purged liquidity first, then aggressively broke market structure. The old swing low in a bearish breaker acts as impenetrable overhead resistance upon retest."
    >
      <svg
        viewBox="0 0 760 380"
        className="w-full h-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="breakerGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Level 1: Prior Swing High */}
        <line x1="80" y1="140" x2="400" y2="140" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
        <text x="80" y="130" className="text-[10px] font-mono fill-zinc-500">Old Swing High</text>

        {/* Level 2: Breaker Block Zone (Old Swing Low) */}
        <rect x="180" y="190" width="480" height="35" fill="url(#breakerGlow)" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 2" />
        <rect x="420" y="195" width="220" height="24" rx="4" fill="#FEE2E2" stroke="#EF4444" />
        <text x="530" y="211" textAnchor="middle" className="text-[11px] font-mono font-bold fill-rose-900">
          BEARISH BREAKER BLOCK LEVEL
        </text>

        {/* PRICE TRAJECTORY */}
        {/* 1. Low -> High */}
        <path
          d="M 100,240 L 160,140"
          stroke="#475569"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="160" cy="140" r="5" fill="#475569" stroke="#FFFFFF" strokeWidth="2" />

        {/* 2. High -> Swing Low (The Breaker candle) */}
        <path
          d="M 160,140 L 220,210"
          stroke="#475569"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="220" cy="210" r="6" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
        <text x="220" y="240" textAnchor="middle" className="text-[10px] font-mono font-bold fill-rose-700">
          Key Low (Breaker)
        </text>

        {/* 3. Swing Low -> Higher High (BSL Purge) */}
        <path
          d="M 220,210 L 300,70"
          stroke="#F59E0B"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="300" cy="70" r="6" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2.5" />
        <rect x="250" y="40" width="130" height="22" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
        <text x="315" y="55" textAnchor="middle" className="text-[10px] font-mono font-bold fill-amber-900">
          ★ HIGHER HIGH PURGE
        </text>

        {/* 4. Violent Breakdown below Swing Low (MSS) */}
        <path
          d="M 300,70 L 390,300"
          stroke="#DC2626"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <text x="375" y="160" className="text-[11px] font-mono font-bold fill-rose-700 rotate-[70]">
          DISPLACEMENT (MSS)
        </text>

        {/* 5. Retracement into the Breaker level */}
        <path
          d="M 390,300 L 440,240 L 480,205"
          stroke="#F59E0B"
          strokeWidth="3"
          strokeDasharray="4 2"
          strokeLinecap="round"
        />
        <circle cx="480" cy="205" r="6" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2.5" />
        <rect x="495" y="160" width="130" height="24" rx="4" fill="#FEF2F2" stroke="#DC2626" />
        <text x="560" y="176" textAnchor="middle" className="text-[10px] font-mono font-bold fill-rose-900">
          RETEST / SHORT ENTRY
        </text>

        {/* 6. Downward Expansion */}
        <path
          d="M 480,205 L 540,290 L 580,270 L 660,350"
          stroke="#DC2626"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon points="665,355 650,345 662,338" fill="#DC2626" />
      </svg>
    </DiagramWrapper>
  );
}

// ============================================================================
// 11. ORDER BLOCK & 50% MEAN THRESHOLD DIAGRAM
// ============================================================================
export function OrderBlockDiagram() {
  return (
    <DiagramWrapper
      title="Bullish Order Block (+OB) & 50% Mean Threshold"
      badge="INSTITUTIONAL FOOTPRINT"
      caption="A Bullish Order Block is the last down-close candle before impulsive upward displacement that breaks structure. The 50% midpoint of its body is the Mean Threshold. Candle bodies must close above MT to confirm institutional sponsorship."
    >
      <svg
        viewBox="0 0 760 380"
        className="w-full h-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="obFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* CANDLESTICK 1: Bullish Order Block (- Candle before huge rally) */}
        <g transform="translate(160, 160)">
          {/* Upper Wick */}
          <line x1="20" y1="0" x2="20" y2="40" stroke="#DC2626" strokeWidth="2.5" />
          {/* Bearish Down-Close Body */}
          <rect x="5" y="40" width="30" height="90" rx="3" fill="#EF4444" stroke="#DC2626" strokeWidth="1.5" />
          {/* Lower Wick */}
          <line x1="20" y1="130" x2="20" y2="160" stroke="#DC2626" strokeWidth="2.5" />

          {/* Candle Label */}
          <text x="20" y="185" textAnchor="middle" className="text-[11px] font-mono font-bold fill-zinc-800">
            [ +OB CANDLE ]
          </text>
          <text x="20" y="200" textAnchor="middle" className="text-[10px] font-mono fill-zinc-500">
            Last Down Candle
          </text>
        </g>

        {/* ORDER BLOCK BODY EXTENSION BOX */}
        <rect x="195" y="200" width="480" height="90" fill="url(#obFill)" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 2" />
        <rect x="520" y="205" width="140" height="22" rx="4" fill="#DCFCE7" stroke="#10B981" />
        <text x="590" y="220" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-900">
          +OB OPENING PRICE
        </text>

        {/* 50% MEAN THRESHOLD LINE */}
        <line x1="160" y1="245" x2="680" y2="245" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="5 3" />
        <rect x="360" y="233" width="220" height="24" rx="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
        <text x="470" y="249" textAnchor="middle" className="text-[10px] font-mono font-extrabold fill-amber-900">
          ★ 50% MEAN THRESHOLD (MT) ★
        </text>

        {/* CANDLESTICK 2 & 3: Huge Upward Displacement */}
        <g transform="translate(230, 80)">
          <line x1="20" y1="10" x2="20" y2="220" stroke="#10B981" strokeWidth="2.5" />
          <rect x="5" y="30" width="30" height="150" rx="3" fill="#10B981" stroke="#059669" strokeWidth="1.5" />
          <text x="20" y="245" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-700">Displacement</text>
        </g>

        {/* Retracement Candle testing Mean Threshold and rejecting */}
        <g transform="translate(420, 160)">
          {/* Wick piercing into MT but body closes above! */}
          <line x1="20" y1="10" x2="20" y2="85" stroke="#10B981" strokeWidth="2.5" />
          <rect x="5" y="20" width="30" height="40" rx="3" fill="#10B981" stroke="#059669" strokeWidth="1.5" />
          {/* Callout */}
          <rect x="35" y="20" width="160" height="32" rx="4" fill="#DCFCE7" stroke="#10B981" />
          <text x="115" y="35" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-900">
            ✓ WICK TAPS MT
          </text>
          <text x="115" y="47" textAnchor="middle" className="text-[9px] font-mono fill-emerald-700">
            Body closes above 50% MT
          </text>
        </g>
      </svg>
    </DiagramWrapper>
  );
}

// ============================================================================
// 12. FAIR VALUE GAP (FVG / BISI / SIBI) 3-CANDLE ANATOMY
// ============================================================================
export function FairValueGapDiagram() {
  return (
    <DiagramWrapper
      title="Fair Value Gap (BISI) 3-Candle Imbalance Anatomy"
      badge="CONSEQUENT ENCROACHMENT (50%)"
      caption="A Fair Value Gap occurs when Candle 2 delivers aggressive one-sided displacement. The open void between Candle 1's High and Candle 3's Low represents price that was only offered to buyers. The 50% midpoint is Consequent Encroachment (CE)."
    >
      <svg
        viewBox="0 0 760 380"
        className="w-full h-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bisiFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* CANDLE 1 */}
        <g transform="translate(140, 180)">
          <line x1="20" y1="0" x2="20" y2="120" stroke="#059669" strokeWidth="2.5" />
          <rect x="5" y="20" width="30" height="70" rx="3" fill="#10B981" stroke="#047857" strokeWidth="1.5" />
          <circle cx="20" cy="0" r="4" fill="#047857" />
          <text x="20" y="145" textAnchor="middle" className="text-[11px] font-mono font-bold fill-zinc-700">Candle 1</text>
          <text x="20" y="160" textAnchor="middle" className="text-[10px] font-mono fill-zinc-500">Baseline High</text>
        </g>

        {/* CANDLE 2 (Explosive Displacement) */}
        <g transform="translate(280, 50)">
          <line x1="20" y1="0" x2="20" y2="230" stroke="#059669" strokeWidth="3" />
          <rect x="5" y="30" width="30" height="170" rx="3" fill="#10B981" stroke="#047857" strokeWidth="1.5" />
          <text x="20" y="275" textAnchor="middle" className="text-[11px] font-mono font-bold fill-emerald-800">Candle 2</text>
          <text x="20" y="290" textAnchor="middle" className="text-[10px] font-mono fill-emerald-600 font-semibold">Displacement Leg</text>
        </g>

        {/* CANDLE 3 (Validation) */}
        <g transform="translate(420, 60)">
          <line x1="20" y1="0" x2="20" y2="90" stroke="#059669" strokeWidth="2.5" />
          <rect x="5" y="10" width="30" height="40" rx="3" fill="#10B981" stroke="#047857" strokeWidth="1.5" />
          <circle cx="20" cy="90" r="4" fill="#047857" />
          <text x="20" y="145" textAnchor="middle" className="text-[11px] font-mono font-bold fill-zinc-700">Candle 3</text>
          <text x="20" y="160" textAnchor="middle" className="text-[10px] font-mono fill-zinc-500">Low of Wick</text>
        </g>

        {/* FVG ZONE BOX (Between Candle 3 Low y=150 and Candle 1 High y=180) */}
        <rect x="160" y="150" width="520" height="30" fill="url(#bisiFill)" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 2" />
        
        {/* Candle 3 Low Line */}
        <line x1="440" y1="150" x2="680" y2="150" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="590" y="144" className="text-[10px] font-mono font-bold fill-amber-700">Candle 3 Low (Top of FVG)</text>

        {/* Consequent Encroachment (50% midpoint: y=165) */}
        <line x1="160" y1="165" x2="680" y2="165" stroke="#B45309" strokeWidth="1.5" strokeDasharray="5 3" />
        <rect x="490" y="157" width="180" height="18" rx="3" fill="#FEF3C7" stroke="#F59E0B" />
        <text x="580" y="170" textAnchor="middle" className="text-[9px] font-mono font-extrabold fill-amber-900">
          50% CONSEQUENT ENCROACHMENT (CE)
        </text>

        {/* Candle 1 High Line */}
        <line x1="160" y1="180" x2="680" y2="180" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="590" y="195" className="text-[10px] font-mono font-bold fill-amber-700">Candle 1 High (Bottom of FVG)</text>
      </svg>
    </DiagramWrapper>
  );
}

// ============================================================================
// MASTER ICT DIAGRAM DISPATCHER COMPONENT
// ============================================================================
export interface IctDiagramProps {
  type: string;
  title?: string;
  caption?: string;
}

export function IctDiagram({ type, title, caption }: IctDiagramProps) {
  const normalized = type.toLowerCase().trim();

  switch (normalized) {
    case "ote-fibonacci":
    case "ote":
    case "fibonacci":
      return <OteFibonacciDiagram />;

    case "dealing-range":
    case "premium-discount":
    case "equilibrium":
      return <DealingRangeDiagram />;

    case "liquidity-pool":
    case "bsl-ssl":
    case "liquidity":
      return <LiquidityPoolDiagram />;

    case "trendline-liquidity":
    case "retail-trendline":
      return <TrendlineLiquidityDiagram />;

    case "market-structure":
    case "bos-mss":
    case "mss":
    case "bos":
      return <MarketStructureDiagram />;

    case "smt-divergence":
    case "smt":
      return <SmtDivergenceDiagram />;

    case "killzones-timeline":
    case "killzones":
    case "killzone":
      return <KillzonesTimelineDiagram />;

    case "ict-2022":
    case "ict-2022-model":
    case "blueprint":
      return <Ict2022BlueprintDiagram />;

    case "power-of-3":
    case "po3":
    case "amd":
      return <PowerOf3Diagram />;

    case "breaker-block":
    case "breaker":
      return <BreakerBlockDiagram />;

    case "order-block":
    case "ob":
    case "mean-threshold":
      return <OrderBlockDiagram />;

    case "fvg":
    case "fair-value-gap":
    case "bisi":
    case "sibi":
      return <FairValueGapDiagram />;

    default:
      // Fallback clean vector diagram
      return (
        <DiagramWrapper
          title={title || "Algorithmic Delivery Schematic"}
          caption={caption || "Institutional order flow execution structure."}
        >
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-2">
            <Activity className="h-8 w-8 text-amber-500 animate-pulse" />
            <span className="text-xs font-mono font-bold text-zinc-700">SPECIFICATION: {type.toUpperCase()}</span>
          </div>
        </DiagramWrapper>
      );
  }
}

export default IctDiagram;
