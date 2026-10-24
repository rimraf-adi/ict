'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Candle,
  OverlayGap,
  OverlayOrderBlock,
  BenchmarkLine,
  OTESetup,
  SMTSecondaryData,
} from '@/lib/simulator-scenarios';
import {
  createChart,
  CandlestickSeries,
  LineSeries,
  ColorType,
  LineStyle,
  CrosshairMode,
  IChartApi,
  ISeriesApi,
  IPriceLine,
  UTCTimestamp,
} from 'lightweight-charts';
import { Layers, Eye, EyeOff } from 'lucide-react';

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
  className = '',
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);
  const secondarySeriesRef = useRef<ISeriesApi<'Line'> | null>(null);
  const priceLinesRef = useRef<IPriceLine[]>([]);

  // State for live OHLC readout in top toolbar
  const [hoveredCandle, setHoveredCandle] = useState<Candle | null>(null);

  // Active or latest candle when not hovering
  const latestCandle = candles && candles.length > 0 ? candles[candles.length - 1] : null;
  const displayCandle = hoveredCandle || latestCandle;

  const prevCandle = useMemo(() => {
    if (!displayCandle || candles.length < 2) return null;
    const idx = candles.findIndex((c) => c === displayCandle);
    if (idx > 0) return candles[idx - 1];
    return candles[candles.length - 2];
  }, [displayCandle, candles]);

  const candleChange = displayCandle && prevCandle ? displayCandle.close - prevCandle.close : 0;
  const candlePercent =
    displayCandle && prevCandle && prevCandle.close !== 0
      ? (candleChange / prevCandle.close) * 100
      : 0;

  // Format price helper
  const formatPrice = (p: number) => {
    if (Math.abs(p) < 10) return p.toFixed(5);
    return p.toFixed(2);
  };

  const baseTimestamp = 1718064000; // Reference base UTC timestamp

  // 1. Initialize Chart
  useEffect(() => {
    if (!chartContainerRef.current) return;

    const container = chartContainerRef.current;
    const initialWidth = container.clientWidth || 900;

    if (chartRef.current) {
      chartRef.current.remove();
      chartRef.current = null;
    }

    const chart = createChart(container, {
      width: initialWidth,
      height: height,
      layout: {
        background: { type: ColorType.Solid, color: '#0c0d0f' },
        textColor: '#94a3b8',
        fontFamily: 'monospace, -apple-system, BlinkMacSystemFont',
        fontSize: 11,
      },
      grid: {
        vertLines: { color: 'rgba(255, 255, 255, 0.035)' },
        horzLines: { color: 'rgba(255, 255, 255, 0.035)' },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: {
          color: 'rgba(56, 189, 248, 0.45)',
          width: 1,
          style: LineStyle.Dashed,
          labelBackgroundColor: '#0284c7',
        },
        horzLine: {
          color: 'rgba(56, 189, 248, 0.45)',
          width: 1,
          style: LineStyle.Dashed,
          labelBackgroundColor: '#0284c7',
        },
      },
      // FULLY INTERACTIVE: Dragging, panning, mouse wheel, pinch-to-zoom
      handleScroll: {
        mouseWheel: true,
        pressedMouseMove: true,
        horzTouchDrag: true,
        vertTouchDrag: true,
      },
      handleScale: {
        axisPressedMouseMove: true,
        mouseWheel: true,
        pinch: true,
      },
      timeScale: {
        borderColor: 'rgba(255, 255, 255, 0.08)',
        timeVisible: true,
        secondsVisible: false,
        // Generous bar spacing prevents squishing and ensures long elegant candlesticks
        barSpacing: 22,
        minBarSpacing: 10,
        rightOffset: 4,
        tickMarkFormatter: (timestamp: number) => {
          const idx = Math.round((timestamp - baseTimestamp) / 300);
          if (idx >= 0 && idx < candles.length) {
            return candles[idx].time;
          }
          return '';
        },
      },
      rightPriceScale: {
        borderColor: 'rgba(255, 255, 255, 0.08)',
        autoScale: true,
        // Generous scale margins ensure sticks stretch vertically ("little long sticks")
        scaleMargins: {
          top: 0.10,
          bottom: 0.10,
        },
      },
      localization: {
        priceFormatter: formatPrice,
        timeFormatter: (timestamp: number) => {
          const idx = Math.round((timestamp - baseTimestamp) / 300);
          if (idx >= 0 && idx < candles.length) {
            return candles[idx].time;
          }
          return '';
        },
      },
    });

    chartRef.current = chart;

    // Primary Candlestick Series
    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#10b981',
      downColor: '#f43f5e',
      borderVisible: false,
      wickUpColor: '#10b981',
      wickDownColor: '#f43f5e',
    });

    seriesRef.current = candleSeries;

    // Crosshair move subscription for live OHLC toolbar
    chart.subscribeCrosshairMove((param) => {
      if (!param.point || !param.time || !param.seriesData.get(candleSeries)) {
        setHoveredCandle(null);
        return;
      }

      const bar = param.seriesData.get(candleSeries) as {
        open: number;
        high: number;
        low: number;
        close: number;
      };

      if (bar) {
        const timeNum = typeof param.time === 'number' ? param.time : 0;
        const idx = Math.round((timeNum - baseTimestamp) / 300);
        const originalCandle = idx >= 0 && idx < candles.length ? candles[idx] : null;

        setHoveredCandle({
          time: originalCandle ? originalCandle.time : '',
          open: bar.open,
          high: bar.high,
          low: bar.low,
          close: bar.close,
          volume: originalCandle?.volume,
        });
      }
    });

    // ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0 && chartRef.current) {
          chartRef.current.applyOptions({
            width: entry.contentRect.width,
          });
          chartRef.current.timeScale().fitContent();
        }
      }
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, [height]);

  // 2. Update Candlestick Data when visible candles change
  useEffect(() => {
    if (!seriesRef.current || !candles || candles.length === 0) return;

    const mapped = candles.map((c, i) => ({
      time: (baseTimestamp + i * 300) as UTCTimestamp,
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
    }));

    seriesRef.current.setData(mapped);

    if (chartRef.current) {
      chartRef.current.timeScale().fitContent();
    }
  }, [candles]);

  // 3. Update Price Lines & Overlays (Trade, Benchmarks, OTE, FVGs, OBs)
  useEffect(() => {
    if (!seriesRef.current) return;
    const series = seriesRef.current;

    // Clear previous price lines
    priceLinesRef.current.forEach((line) => {
      try {
        series.removePriceLine(line);
      } catch (e) {
        // Line might already be cleared
      }
    });
    priceLinesRef.current = [];

    // Active Trade Lines (SL, TP, Entry)
    if (activeTrade) {
      const entryLine = series.createPriceLine({
        price: activeTrade.entryPrice,
        color: '#38bdf8',
        lineWidth: 1,
        lineStyle: LineStyle.Dashed,
        axisLabelVisible: true,
        title: `ENTRY: ${formatPrice(activeTrade.entryPrice)}`,
      });
      priceLinesRef.current.push(entryLine);

      const slLine = series.createPriceLine({
        price: activeTrade.stopLoss,
        color: '#ef4444',
        lineWidth: 2,
        lineStyle: LineStyle.Solid,
        axisLabelVisible: true,
        title: `SL: ${formatPrice(activeTrade.stopLoss)}`,
      });
      priceLinesRef.current.push(slLine);

      const tpLine = series.createPriceLine({
        price: activeTrade.takeProfit,
        color: '#10b981',
        lineWidth: 2,
        lineStyle: LineStyle.Solid,
        axisLabelVisible: true,
        title: `TP: ${formatPrice(activeTrade.takeProfit)}`,
      });
      priceLinesRef.current.push(tpLine);
    }

    // Session Benchmarks
    if (showBenchmarks && overlays.benchmarks) {
      overlays.benchmarks.forEach((b) => {
        const line = series.createPriceLine({
          price: b.price,
          color: b.color || '#6366f1',
          lineWidth: 1,
          lineStyle: b.lineStyle === 'dashed' ? LineStyle.Dashed : LineStyle.Solid,
          axisLabelVisible: true,
          title: b.label,
        });
        priceLinesRef.current.push(line);
      });
    }

    // OTE Fibonacci Levels
    if (showOTE && overlays.ote?.levels) {
      overlays.ote.levels.forEach((lvl) => {
        const isSweet = lvl.isSweetSpot || lvl.ratio === 0.705;
        const line = series.createPriceLine({
          price: lvl.price,
          color: isSweet ? '#fbbf24' : '#f59e0b',
          lineWidth: isSweet ? 2 : 1,
          lineStyle: isSweet ? LineStyle.Solid : LineStyle.Dashed,
          axisLabelVisible: true,
          title: isSweet ? `★ 0.705 SWEET SPOT (${formatPrice(lvl.price)})` : lvl.label,
        });
        priceLinesRef.current.push(line);
      });
    }

    // Fair Value Gaps (FVGs)
    if (showFVGs && overlays.fvgs) {
      overlays.fvgs.forEach((gap) => {
        if (gap.cePrice) {
          const ceLine = series.createPriceLine({
            price: gap.cePrice,
            color: '#06b6d4',
            lineWidth: 1,
            lineStyle: LineStyle.Dashed,
            axisLabelVisible: true,
            title: `50% CE: ${formatPrice(gap.cePrice)}`,
          });
          priceLinesRef.current.push(ceLine);
        }
      });
    }

    // Order Blocks
    if (showOrderBlocks && overlays.orderBlocks) {
      overlays.orderBlocks.forEach((ob) => {
        const obLine = series.createPriceLine({
          price: ob.topPrice,
          color: '#a855f7',
          lineWidth: 1,
          lineStyle: LineStyle.Dashed,
          axisLabelVisible: true,
          title: ob.label,
        });
        priceLinesRef.current.push(obLine);
      });
    }
  }, [
    activeTrade,
    showBenchmarks,
    showOTE,
    showFVGs,
    showOrderBlocks,
    overlays,
  ]);

  // 4. Secondary Series (SMT Dual Chart)
  useEffect(() => {
    if (!chartRef.current) return;
    const chart = chartRef.current;

    if (showSecondarySeries && secondarySeries && secondarySeries.candles) {
      if (!secondarySeriesRef.current) {
        const lineSeries = chart.addSeries(LineSeries, {
          color: '#ec4899',
          lineWidth: 2,
          priceScaleId: 'left',
          title: secondarySeries.symbol,
        });
        chart.priceScale('left').applyOptions({
          visible: true,
          borderColor: 'rgba(255, 255, 255, 0.08)',
        });
        secondarySeriesRef.current = lineSeries;
      }

      const secondaryData = secondarySeries.candles
        .slice(0, candles.length)
        .map((c, i) => ({
          time: (baseTimestamp + i * 300) as UTCTimestamp,
          value: c.close,
        }));

      secondarySeriesRef.current.setData(secondaryData);
    } else {
      if (secondarySeriesRef.current) {
        chart.removeSeries(secondarySeriesRef.current);
        secondarySeriesRef.current = null;
        chart.priceScale('left').applyOptions({ visible: false });
      }
    }
  }, [showSecondarySeries, secondarySeries, candles]);

  return (
    <div
      className={`relative flex flex-col bg-[#0c0d0f] border border-white/[0.08] rounded-2xl overflow-hidden select-none font-sans shadow-sm ${className}`}
    >
      {/* Top Readout & Overlays Toolbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.08] text-xs">
        {/* Live OHLC Readout */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-white/70">
          {displayCandle ? (
            <>
              <span className="text-white font-semibold flex items-center gap-1.5">
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

      {/* Lightweight-charts Interactive Canvas Container */}
      <div className="relative w-full overflow-hidden" style={{ height: height }}>
        <div ref={chartContainerRef} className="w-full h-full cursor-crosshair" />
      </div>
    </div>
  );
};
