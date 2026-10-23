'use client';

import React, { useState, useRef, useMemo } from 'react';
import {
  Candle,
  OverlayGap,
  OverlayOrderBlock,
  BenchmarkLine,
  OTESetup,
  SMTSecondaryData
} from '@/lib/simulator-scenarios';
import { Layers, Eye, EyeOff, Target, ShieldAlert, TrendingUp, TrendingDown } from 'lucide-react';

export interface ActiveTrade {
  direction: 'buy' | 'sell';
  entryPrice: number;
  stopLoss: number;
  takeProfit: number;
  status: 'pending' | 'active' | 'win' | 'loss';
}

export interface CandlestickChartProps {
  candles: Candle[];
  overlays: {
    fvgs: OverlayGap[];
    orderBlocks: OverlayOrderBlock[];
    benchmarks: BenchmarkLine[];
    ote?: OTESetup;
  };
  showFVGs: boolean;
  showOrderBlocks: boolean;
  showOTE: boolean;
  showBenchmarks: boolean;
  onToggleOverlay?: (key: 'fvg' | 'ob' | 'ote' | 'benchmarks') => void;
  activeTrade?: ActiveTrade | null;
  secondarySeries?: SMTSecondaryData;
  showSecondarySeries?: boolean;
  onToggleSecondarySeries?: () => void;
  height?: number;
  className?: string;
}

export const CandlestickChart: React.FC<CandlestickChartProps> = ({
  candles,
  overlays,
  showFVGs,
  showOrderBlocks,
  showOTE,
  showBenchmarks,
  onToggleOverlay,
  activeTrade,
  secondarySeries,
  showSecondarySeries = false,
  onToggleSecondarySeries,
  height = 480,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  // Chart dimensions & margins
  const margin = { top: 28, right: 75, bottom: 32, left: 16 };
  const chartWidth = 900; // SVG internal viewBox width
  const chartHeight = height;
  const innerWidth = chartWidth - margin.left - margin.right;
  const innerHeight = chartHeight - margin.top - margin.bottom;

  // Compute price bounds (visible candles + active trade + benchmarks)
  const { minPrice, maxPrice, priceRange } = useMemo(() => {
    if (!candles || candles.length === 0) {
      return { minPrice: 0, maxPrice: 100, priceRange: 100 };
    }

    let min = Infinity;
    let max = -Infinity;

    for (const c of candles) {
      if (c.low < min) min = c.low;
      if (c.high > max) max = c.high;
    }

    // Include benchmarks if shown
    if (showBenchmarks && overlays.benchmarks) {
      for (const b of overlays.benchmarks) {
        if (b.price < min) min = b.price;
        if (b.price > max) max = b.price;
      }
    }

    // Include active trade bounds
    if (activeTrade) {
      if (activeTrade.stopLoss < min) min = activeTrade.stopLoss;
      if (activeTrade.stopLoss > max) max = activeTrade.stopLoss;
      if (activeTrade.takeProfit < min) min = activeTrade.takeProfit;
      if (activeTrade.takeProfit > max) max = activeTrade.takeProfit;
      if (activeTrade.entryPrice < min) min = activeTrade.entryPrice;
      if (activeTrade.entryPrice > max) max = activeTrade.entryPrice;
    }

    const padding = (max - min) * 0.12 || 1;
    return {
      minPrice: min - padding,
      maxPrice: max + padding,
      priceRange: max - min + padding * 2
    };
  }, [candles, overlays.benchmarks, showBenchmarks, activeTrade]);

  // Coordinate scales
  const priceToY = (price: number) => {
    return margin.top + innerHeight * (1 - (price - minPrice) / (priceRange || 1));
  };

  const yToPrice = (y: number) => {
    const ratio = 1 - (y - margin.top) / innerHeight;
    return minPrice + ratio * priceRange;
  };

  const count = Math.max(candles.length, 1);
  const candleSpacing = innerWidth / count;
  const candleWidth = Math.max(4, Math.min(18, candleSpacing * 0.68));

  const indexToX = (index: number) => {
    return margin.left + (index + 0.5) * candleSpacing;
  };

  // Hover detection
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    // Scale to internal viewBox coordinates
    const scaleX = chartWidth / rect.width;
    const scaleY = chartHeight / rect.height;
    const internalX = clientX * scaleX;
    const internalY = clientY * scaleY;

    setMousePos({ x: internalX, y: internalY });

    if (internalX >= margin.left && internalX <= margin.left + innerWidth) {
      const idx = Math.floor((internalX - margin.left) / candleSpacing);
      if (idx >= 0 && idx < candles.length) {
        setHoverIndex(idx);
      } else {
        setHoverIndex(null);
      }
    } else {
      setHoverIndex(null);
    }
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
    setMousePos(null);
  };

  // Active or hovered candle for readout
  const displayCandle = hoverIndex !== null && candles[hoverIndex]
    ? candles[hoverIndex]
    : candles[candles.length - 1];

  const prevCandle = hoverIndex !== null && hoverIndex > 0
    ? candles[hoverIndex - 1]
    : candles.length > 1
      ? candles[candles.length - 2]
      : null;

  const candleChange = displayCandle && prevCandle
    ? displayCandle.close - prevCandle.close
    : 0;
  const candlePercent = displayCandle && prevCandle && prevCandle.close !== 0
    ? (candleChange / prevCandle.close) * 100
    : 0;

  // Price axis grid ticks
  const priceTicks = useMemo(() => {
    const numTicks = 6;
    const ticks: number[] = [];
    const step = priceRange / (numTicks - 1);
    for (let i = 0; i < numTicks; i++) {
      ticks.push(minPrice + i * step);
    }
    return ticks;
  }, [minPrice, priceRange]);

  // Format price helper (crypto / forex / futures)
  const formatPrice = (p: number) => {
    if (Math.abs(p) < 10) return p.toFixed(5);
    return p.toFixed(2);
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col bg-[#0c0d0f] border border-white/[0.08] rounded-2xl overflow-hidden select-none font-sans shadow-sm ${className}`}
    >
      {/* Top Readout & Overlays Toolbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.08] text-xs">
        {/* OHLC Readout */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-white/70">
          {displayCandle ? (
            <>
              <span className="text-white font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                {displayCandle.time}
              </span>
              <span className="text-white/40">
                O: <span className="text-white font-semibold">{formatPrice(displayCandle.open)}</span>
              </span>
              <span className="text-white/40">
                H: <span className="text-white font-semibold">{formatPrice(displayCandle.high)}</span>
              </span>
              <span className="text-white/40">
                L: <span className="text-white font-semibold">{formatPrice(displayCandle.low)}</span>
              </span>
              <span className="text-white/40">
                C:{' '}
                <span
                  className={
                    displayCandle.close >= displayCandle.open
                      ? 'text-emerald-400 font-bold'
                      : 'text-rose-400 font-bold'
                  }
                >
                  {formatPrice(displayCandle.close)}
                </span>
              </span>
              <span
                className={`font-semibold ${
                  candleChange >= 0 ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {candleChange >= 0 ? '+' : ''}
                {formatPrice(candleChange)} ({candlePercent.toFixed(2)}%)
              </span>
              {displayCandle.volume && (
                <span className="text-white/40 hidden sm:inline">
                  Vol:{' '}
                  <span className="text-white/80 font-semibold">
                    {displayCandle.volume.toLocaleString()}
                  </span>
                </span>
              )}
            </>
          ) : (
            <span className="text-white/40">Awaiting simulation data...</span>
          )}
        </div>

        {/* Overlay Toggle Controls */}
        <div className="flex items-center gap-1.5 mt-1 sm:mt-0">
          {onToggleOverlay && (
            <>
              <button
                type="button"
                onClick={() => onToggleOverlay('fvg')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 border ${
                  showFVGs
                    ? 'bg-amber-400/20 text-amber-300 border-amber-400/40 font-semibold shadow-xs'
                    : 'bg-white/[0.03] text-white/50 border-white/[0.08] hover:text-white hover:border-white/20'
                }`}
                title="Toggle Fair Value Gaps"
              >
                <Layers className="w-3 h-3" />
                FVGs
              </button>

              <button
                type="button"
                onClick={() => onToggleOverlay('ob')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 border ${
                  showOrderBlocks
                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/40 font-semibold shadow-xs'
                    : 'bg-white/[0.03] text-white/50 border-white/[0.08] hover:text-white hover:border-white/20'
                }`}
                title="Toggle Order Blocks & Breakers"
              >
                OB / Breakers
              </button>

              <button
                type="button"
                onClick={() => onToggleOverlay('ote')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 border ${
                  showOTE
                    ? 'bg-amber-400/20 text-amber-300 border-amber-400/40 font-semibold shadow-xs'
                    : 'bg-white/[0.03] text-white/50 border-white/[0.08] hover:text-white hover:border-white/20'
                }`}
                title="Toggle OTE Fibonacci Levels (0.62 - 0.705)"
              >
                OTE Fibs
              </button>

              <button
                type="button"
                onClick={() => onToggleOverlay('benchmarks')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 border ${
                  showBenchmarks
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-semibold shadow-xs'
                    : 'bg-white/[0.03] text-white/50 border-white/[0.08] hover:text-white hover:border-white/20'
                }`}
                title="Toggle Session Benchmarks (Asian High/Low, Midnight Open)"
              >
                Sessions
              </button>
            </>
          )}

          {secondarySeries && onToggleSecondarySeries && (
            <button
              type="button"
              onClick={onToggleSecondarySeries}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 ml-1 border ${
                showSecondarySeries
                  ? 'bg-pink-500/20 text-pink-300 border-pink-500/40 font-semibold shadow-xs'
                  : 'bg-white/[0.03] text-white/50 border-white/[0.08] hover:text-white hover:border-white/20'
              }`}
              title="Toggle Correlated ES / NQ SMT Comparison Series"
            >
              {showSecondarySeries ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
              SMT Dual Chart
            </button>
          )}
        </div>
      </div>

      {/* Main Chart SVG Canvas */}
      <div className="relative w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full h-auto cursor-crosshair block"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ maxHeight: height }}
        >
          <defs>
            {/* Bullish FVG Pattern */}
            <linearGradient id="bullishFvgGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.10" />
            </linearGradient>

            {/* Bearish FVG Pattern */}
            <linearGradient id="bearishFvgGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#be123c" stopOpacity="0.08" />
            </linearGradient>

            {/* Inversion FVG Pattern */}
            <linearGradient id="inversionFvgGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.12" />
            </linearGradient>

            {/* Breaker Block Pattern */}
            <linearGradient id="breakerBlockGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.10" />
            </linearGradient>

            {/* OTE Sweet Spot Zone */}
            <linearGradient id="oteZoneGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.12" />
            </linearGradient>

            {/* Trade Profit Band */}
            <linearGradient id="profitBandGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.08" />
            </linearGradient>

            {/* Trade Loss Band */}
            <linearGradient id="lossBandGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#e11d48" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Background Grid Lines */}
          {priceTicks.map((tick, i) => {
            const y = priceToY(tick);
            return (
              <g key={`grid-y-${i}`}>
                <line
                  x1={margin.left}
                  y1={y}
                  x2={margin.left + innerWidth}
                  y2={y}
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="0.8"
                  strokeDasharray="3 3"
                />
                <text
                  x={margin.left + innerWidth + 8}
                  y={y + 3.5}
                  fill="rgba(255, 255, 255, 0.45)"
                  fontSize="9.5"
                  fontFamily="monospace"
                >
                  {formatPrice(tick)}
                </text>
              </g>
            );
          })}

          {/* Time Vertical Grid Lines */}
          {candles.map((c, i) => {
            if (i % 6 === 0 || i === candles.length - 1) {
              const x = indexToX(i);
              return (
                <g key={`grid-x-${i}`}>
                  <line
                    x1={x}
                    y1={margin.top}
                    x2={x}
                    y2={margin.top + innerHeight}
                    stroke="rgba(255, 255, 255, 0.06)"
                    strokeWidth="0.6"
                    strokeDasharray="2 4"
                  />
                  <text
                    x={x}
                    y={margin.top + innerHeight + 16}
                    fill="rgba(255, 255, 255, 0.45)"
                    fontSize="9"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    {c.time}
                  </text>
                </g>
              );
            }
            return null;
          })}

          {/* ---------------------------------------------------------------- */}
          {/* OVERLAY: Session Benchmarks (Asian High/Low, Midnight Open, etc.) */}
          {/* ---------------------------------------------------------------- */}
          {showBenchmarks &&
            overlays.benchmarks &&
            overlays.benchmarks.map((bm) => {
              const y = priceToY(bm.price);
              if (y < margin.top || y > margin.top + innerHeight) return null;
              return (
                <g key={bm.id}>
                  <line
                    x1={margin.left}
                    y1={y}
                    x2={margin.left + innerWidth}
                    y2={y}
                    stroke={bm.color}
                    strokeWidth="1.2"
                    strokeDasharray={bm.lineStyle === 'dashed' ? '5 4' : bm.lineStyle === 'dotted' ? '2 3' : ''}
                    opacity="0.85"
                  />
                  {/* Benchmark Label Tag */}
                  <rect
                    x={margin.left + 8}
                    y={y - 9}
                    width={bm.label.length * 6 + 12}
                    height="16"
                    fill="#0f172a"
                    stroke={bm.color}
                    strokeWidth="1"
                    rx="3"
                    opacity="0.95"
                  />
                  <text
                    x={margin.left + 14}
                    y={y + 3}
                    fill={bm.color}
                    fontSize="9.5"
                    fontWeight="600"
                    fontFamily="monospace"
                  >
                    {bm.label}
                  </text>
                </g>
              );
            })}

          {/* ---------------------------------------------------------------- */}
          {/* OVERLAY: Order Blocks & Breaker Blocks                            */}
          {/* ---------------------------------------------------------------- */}
          {showOrderBlocks &&
            overlays.orderBlocks &&
            overlays.orderBlocks.map((ob) => {
              if (ob.candleIndex >= candles.length) return null;
              const startX = indexToX(ob.candleIndex) - candleWidth;
              const endIdx = ob.endIndex ? Math.min(ob.endIndex, candles.length - 1) : candles.length - 1;
              const endX = indexToX(endIdx) + candleWidth * 2;
              const width = Math.max(30, endX - startX);

              const topY = priceToY(Math.max(ob.topPrice, ob.bottomPrice));
              const botY = priceToY(Math.min(ob.topPrice, ob.bottomPrice));
              const heightZone = Math.max(4, botY - topY);

              const isBreaker = ob.type === 'breaker-block';

              return (
                <g key={ob.id}>
                  <rect
                    x={startX}
                    y={topY}
                    width={width}
                    height={heightZone}
                    fill={isBreaker ? 'url(#breakerBlockGrad)' : 'rgba(245, 158, 11, 0.15)'}
                    stroke={isBreaker ? '#f59e0b' : '#fbbf24'}
                    strokeWidth="1"
                    strokeDasharray="4 2"
                    rx="3"
                  />
                  <text
                    x={startX + 6}
                    y={topY + 12}
                    fill="#fbbf24"
                    fontSize="9"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {ob.label}
                  </text>
                </g>
              );
            })}

          {/* ---------------------------------------------------------------- */}
          {/* OVERLAY: Fair Value Gaps (FVG)                                    */}
          {/* ---------------------------------------------------------------- */}
          {showFVGs &&
            overlays.fvgs &&
            overlays.fvgs.map((fvg) => {
              if (fvg.startIndex >= candles.length) return null;
              const startX = indexToX(fvg.startIndex);
              const endIdx = fvg.endIndex ? Math.min(fvg.endIndex, candles.length - 1) : candles.length - 1;
              const endX = indexToX(endIdx) + candleWidth * 2;
              const width = Math.max(28, endX - startX);

              const topY = priceToY(Math.max(fvg.startPrice, fvg.endPrice));
              const botY = priceToY(Math.min(fvg.startPrice, fvg.endPrice));
              const heightZone = Math.max(4, botY - topY);

              const isInversion = fvg.type === 'inversion-fvg';
              const isBullish = fvg.type === 'bullish-fvg';

              const fill = isInversion
                ? 'url(#inversionFvgGrad)'
                : isBullish
                ? 'url(#bullishFvgGrad)'
                : 'url(#bearishFvgGrad)';

              const strokeColor = isInversion ? '#c084fc' : isBullish ? '#10b981' : '#f43f5e';

              return (
                <g key={fvg.id}>
                  <rect
                    x={startX}
                    y={topY}
                    width={width}
                    height={heightZone}
                    fill={fill}
                    stroke={strokeColor}
                    strokeWidth="1"
                    strokeDasharray="3 2"
                    rx="2"
                  />

                  {/* Consequent Encroachment (50% Midpoint) Line */}
                  {fvg.cePrice && (
                    <line
                      x1={startX}
                      y1={priceToY(fvg.cePrice)}
                      x2={startX + width}
                      y2={priceToY(fvg.cePrice)}
                      stroke={strokeColor}
                      strokeWidth="0.8"
                      strokeDasharray="2 2"
                      opacity="0.8"
                    />
                  )}

                  {/* Badge Label */}
                  <rect
                    x={startX + 4}
                    y={topY - 11}
                    width={fvg.label.length * 5.8 + 8}
                    height="13"
                    fill="#0b0f17"
                    stroke={strokeColor}
                    strokeWidth="0.75"
                    rx="2"
                  />
                  <text
                    x={startX + 7}
                    y={topY - 2}
                    fill={strokeColor}
                    fontSize="8.5"
                    fontWeight="600"
                    fontFamily="monospace"
                  >
                    {fvg.label}
                  </text>
                </g>
              );
            })}

          {/* ---------------------------------------------------------------- */}
          {/* OVERLAY: OTE Fibonacci Retracement Levels                         */}
          {/* ---------------------------------------------------------------- */}
          {showOTE && overlays.ote && (
            <g key="ote-fib-layer">
              {/* Shaded Sweet Spot Area (0.62 to 0.79) */}
              {(() => {
                const lvl62 = overlays.ote.levels.find((l) => l.ratio === 0.62);
                const lvl79 = overlays.ote.levels.find((l) => l.ratio === 0.79);
                if (lvl62 && lvl79) {
                  const y1 = priceToY(Math.max(lvl62.price, lvl79.price));
                  const y2 = priceToY(Math.min(lvl62.price, lvl79.price));
                  return (
                    <rect
                      x={margin.left}
                      y={y1}
                      width={innerWidth}
                      height={Math.max(4, y2 - y1)}
                      fill="url(#oteZoneGrad)"
                      stroke="#fbbf24"
                      strokeWidth="0.75"
                      strokeDasharray="4 2"
                      opacity="0.6"
                    />
                  );
                }
                return null;
              })()}

              {/* Individual Fib Levels */}
              {overlays.ote.levels.map((lvl) => {
                const y = priceToY(lvl.price);
                const isSweet = lvl.isSweetSpot;
                return (
                  <g key={`fib-${lvl.ratio}`}>
                    <line
                      x1={margin.left}
                      y1={y}
                      x2={margin.left + innerWidth}
                      y2={y}
                      stroke={isSweet ? '#fbbf24' : '#a855f7'}
                      strokeWidth={isSweet ? '1.5' : '0.8'}
                      strokeDasharray={isSweet ? '4 3' : '2 2'}
                    />
                    <text
                      x={margin.left + innerWidth - 6}
                      y={y - 3}
                      fill={isSweet ? '#fbbf24' : '#d8b4fe'}
                      fontSize={isSweet ? '9.5' : '8.5'}
                      fontWeight={isSweet ? 'bold' : 'normal'}
                      fontFamily="monospace"
                      textAnchor="end"
                    >
                      {lvl.label} ({formatPrice(lvl.price)})
                    </text>
                  </g>
                );
              })}
            </g>
          )}

          {/* ---------------------------------------------------------------- */}
          {/* OVERLAY: Active Trade Order (Entry, Stop Loss, Take Profit)       */}
          {/* ---------------------------------------------------------------- */}
          {activeTrade && (
            <g key="active-trade-layer">
              {/* Profit Zone Shade */}
              {(() => {
                const entryY = priceToY(activeTrade.entryPrice);
                const tpY = priceToY(activeTrade.takeProfit);
                const top = Math.min(entryY, tpY);
                const height = Math.abs(entryY - tpY);
                return (
                  <rect
                    x={margin.left}
                    y={top}
                    width={innerWidth}
                    height={height}
                    fill="url(#profitBandGrad)"
                    stroke="#10b981"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                  />
                );
              })()}

              {/* Risk Zone Shade */}
              {(() => {
                const entryY = priceToY(activeTrade.entryPrice);
                const slY = priceToY(activeTrade.stopLoss);
                const top = Math.min(entryY, slY);
                const height = Math.abs(entryY - slY);
                return (
                  <rect
                    x={margin.left}
                    y={top}
                    width={innerWidth}
                    height={height}
                    fill="url(#lossBandGrad)"
                    stroke="#f43f5e"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                  />
                );
              })()}

              {/* Entry Line */}
              <line
                x1={margin.left}
                y1={priceToY(activeTrade.entryPrice)}
                x2={margin.left + innerWidth}
                y2={priceToY(activeTrade.entryPrice)}
                stroke="#38bdf8"
                strokeWidth="1.8"
                strokeDasharray="5 3"
              />
              <rect
                x={margin.left + innerWidth - 110}
                y={priceToY(activeTrade.entryPrice) - 10}
                width="105"
                height="18"
                fill="#0369a1"
                rx="3"
              />
              <text
                x={margin.left + innerWidth - 58}
                y={priceToY(activeTrade.entryPrice) + 3}
                fill="#ffffff"
                fontSize="9"
                fontWeight="bold"
                fontFamily="monospace"
                textAnchor="middle"
              >
                ENTRY: {formatPrice(activeTrade.entryPrice)}
              </text>

              {/* Stop Loss Line */}
              <line
                x1={margin.left}
                y1={priceToY(activeTrade.stopLoss)}
                x2={margin.left + innerWidth}
                y2={priceToY(activeTrade.stopLoss)}
                stroke="#ef4444"
                strokeWidth="1.8"
              />
              <rect
                x={margin.left + innerWidth - 105}
                y={priceToY(activeTrade.stopLoss) - 10}
                width="100"
                height="18"
                fill="#991b1b"
                rx="3"
              />
              <text
                x={margin.left + innerWidth - 55}
                y={priceToY(activeTrade.stopLoss) + 3}
                fill="#ffffff"
                fontSize="9"
                fontWeight="bold"
                fontFamily="monospace"
                textAnchor="middle"
              >
                SL: {formatPrice(activeTrade.stopLoss)}
              </text>

              {/* Take Profit Line */}
              <line
                x1={margin.left}
                y1={priceToY(activeTrade.takeProfit)}
                x2={margin.left + innerWidth}
                y2={priceToY(activeTrade.takeProfit)}
                stroke="#10b981"
                strokeWidth="1.8"
              />
              <rect
                x={margin.left + innerWidth - 105}
                y={priceToY(activeTrade.takeProfit) - 10}
                width="100"
                height="18"
                fill="#065f46"
                rx="3"
              />
              <text
                x={margin.left + innerWidth - 55}
                y={priceToY(activeTrade.takeProfit) + 3}
                fill="#ffffff"
                fontSize="9"
                fontWeight="bold"
                fontFamily="monospace"
                textAnchor="middle"
              >
                TP: {formatPrice(activeTrade.takeProfit)}
              </text>
            </g>
          )}

          {/* ---------------------------------------------------------------- */}
          {/* CANDLESTICKS LAYER                                                */}
          {/* ---------------------------------------------------------------- */}
          {candles.map((candle, idx) => {
            const x = indexToX(idx);
            const isBullish = candle.close >= candle.open;

            const openY = priceToY(candle.open);
            const closeY = priceToY(candle.close);
            const highY = priceToY(candle.high);
            const lowY = priceToY(candle.low);

            const bodyTop = Math.min(openY, closeY);
            const bodyHeight = Math.max(2, Math.abs(openY - closeY));

            const strokeColor = isBullish ? '#10b981' : '#f43f5e';
            const fillColor = isBullish ? '#10b981' : '#f43f5e';

            const isHovered = hoverIndex === idx;

            return (
              <g
                key={`candle-${idx}`}
                className="transition-opacity duration-75"
                opacity={hoverIndex !== null && !isHovered ? 0.75 : 1}
              >
                {/* Upper and Lower Wicks */}
                <line
                  x1={x}
                  y1={highY}
                  x2={x}
                  y2={lowY}
                  stroke={strokeColor}
                  strokeWidth={isHovered ? 2 : 1.3}
                />

                {/* Candle Real Body */}
                <rect
                  x={x - candleWidth / 2}
                  y={bodyTop}
                  width={candleWidth}
                  height={bodyHeight}
                  fill={fillColor}
                  stroke={strokeColor}
                  strokeWidth={isHovered ? 2 : 1}
                  rx="1"
                />

                {/* Optional highlight ring for hovered candle */}
                {isHovered && (
                  <circle
                    cx={x}
                    cy={closeY}
                    r="4"
                    fill="#38bdf8"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                )}
              </g>
            );
          })}

          {/* ---------------------------------------------------------------- */}
          {/* HOVER CROSSHAIR & DYNAMIC AXIS READOUTS                           */}
          {/* ---------------------------------------------------------------- */}
          {mousePos && hoverIndex !== null && (
            <g key="crosshair">
              {/* Vertical Crosshair Line */}
              <line
                x1={indexToX(hoverIndex)}
                y1={margin.top}
                x2={indexToX(hoverIndex)}
                y2={margin.top + innerHeight}
                stroke="#94a3b8"
                strokeWidth="1"
                strokeDasharray="2 3"
              />

              {/* Horizontal Crosshair Line */}
              <line
                x1={margin.left}
                y1={mousePos.y}
                x2={margin.left + innerWidth}
                y2={mousePos.y}
                stroke="#94a3b8"
                strokeWidth="1"
                strokeDasharray="2 3"
              />

              {/* Price Label at Crosshair on Right Axis */}
              <rect
                x={margin.left + innerWidth + 2}
                y={mousePos.y - 9}
                width="68"
                height="18"
                fill="#38bdf8"
                rx="3"
              />
              <text
                x={margin.left + innerWidth + 36}
                y={mousePos.y + 3.5}
                fill="#0f172a"
                fontSize="9.5"
                fontWeight="bold"
                fontFamily="monospace"
                textAnchor="middle"
              >
                {formatPrice(yToPrice(mousePos.y))}
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* SECONDARY SMT DIVERGENCE MINI-CHART (Split Comparison)              */}
      {/* -------------------------------------------------------------------- */}
      {showSecondarySeries && secondarySeries && (
        <div className="border-t border-zinc-200 bg-zinc-50 px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-700">
                Correlated Benchmark: {secondarySeries.symbol} ({secondarySeries.timeframe})
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono">
                SMT Key Point: Candle #{secondarySeries.divergenceIndex}
              </span>
            </div>
            <p className="text-[11px] text-amber-800 font-mono italic">
              {secondarySeries.note}
            </p>
          </div>

          {/* Mini SVG comparison chart */}
          <div className="w-full h-28 bg-white rounded-xl border border-zinc-200 p-2 overflow-hidden shadow-xs">
            {(() => {
              const secCandles = secondarySeries.candles.slice(0, candles.length);
              if (secCandles.length === 0) return null;

              let sMin = Infinity;
              let sMax = -Infinity;
              secCandles.forEach((c) => {
                if (c.low < sMin) sMin = c.low;
                if (c.high > sMax) sMax = c.high;
              });
              const sPadding = (sMax - sMin) * 0.1 || 1;
              const sMinP = sMin - sPadding;
              const sMaxP = sMax + sPadding;
              const sRange = sMaxP - sMinP;

              const sH = 80;
              const sW = 860;
              const sCount = Math.max(secCandles.length, 1);
              const sSpacing = sW / sCount;
              const sCWidth = Math.max(3, sSpacing * 0.6);

              return (
                <svg viewBox={`0 0 ${sW} ${sH}`} className="w-full h-full block">
                  {secCandles.map((c, i) => {
                    const cx = (i + 0.5) * sSpacing;
                    const isBull = c.close >= c.open;
                    const opY = sH * (1 - (c.open - sMinP) / sRange);
                    const clY = sH * (1 - (c.close - sMinP) / sRange);
                    const hY = sH * (1 - (c.high - sMinP) / sRange);
                    const lY = sH * (1 - (c.low - sMinP) / sRange);

                    const color = isBull ? '#34d399' : '#fb7185';
                    const isDivPoint = i === secondarySeries.divergenceIndex;

                    return (
                      <g key={`sec-${i}`}>
                        <line x1={cx} y1={hY} x2={cx} y2={lY} stroke={color} strokeWidth="1" />
                        <rect
                          x={cx - sCWidth / 2}
                          y={Math.min(opY, clY)}
                          width={sCWidth}
                          height={Math.max(2, Math.abs(opY - clY))}
                          fill={color}
                          rx="0.5"
                        />
                        {isDivPoint && (
                          <g>
                            <circle cx={cx} cy={lY + 6} r="3" fill="#f59e0b" />
                            <text
                              x={cx}
                              y={lY + 16}
                              fill="#f59e0b"
                              fontSize="8"
                              fontFamily="monospace"
                              textAnchor="middle"
                            >
                              LOWER LOW
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </svg>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};
