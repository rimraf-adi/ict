'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  createChart,
  CandlestickSeries,
  ColorType,
  LineStyle,
  CrosshairMode,
  IChartApi,
  ISeriesApi,
  UTCTimestamp,
} from 'lightweight-charts';

export interface LightweightMiniChartProps {
  theme?: 'dark' | 'light';
  height?: number;
}

interface HoverData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  change: number;
  changePercent: number;
}

export function LightweightMiniChart({
  theme = 'dark',
  height = 300,
}: LightweightMiniChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);

  const [hoverData, setHoverData] = useState<HoverData | null>({
    time: '02:48 EST',
    open: 1.08380,
    high: 1.08422,
    low: 1.08370,
    close: 1.08415,
    change: 0.00035,
    changePercent: 0.032,
  });

  const chartCanvasHeight = Math.max(200, height - 34);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const container = chartContainerRef.current;
    const initialWidth = container.clientWidth || 520;

    if (chartRef.current) {
      chartRef.current.remove();
      chartRef.current = null;
    }

    const isDark = theme === 'dark';
    const bg = isDark ? '#111214' : '#f8f7f5';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.035)' : 'rgba(0, 0, 0, 0.04)';
    const textColor = isDark ? '#64748b' : '#94a3b8';
    const borderColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';

    const chart = createChart(container, {
      width: initialWidth,
      height: chartCanvasHeight,
      layout: {
        background: { type: ColorType.Solid, color: bg },
        textColor: textColor,
        fontFamily: 'monospace, -apple-system, BlinkMacSystemFont',
        fontSize: 10,
      },
      grid: {
        vertLines: { color: gridColor },
        horzLines: { color: gridColor },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: {
          color: isDark ? 'rgba(56, 189, 248, 0.45)' : 'rgba(2, 132, 199, 0.45)',
          width: 1,
          style: LineStyle.Dashed,
          labelBackgroundColor: '#0284c7',
        },
        horzLine: {
          color: isDark ? 'rgba(56, 189, 248, 0.45)' : 'rgba(2, 132, 199, 0.45)',
          width: 1,
          style: LineStyle.Dashed,
          labelBackgroundColor: '#0284c7',
        },
      },
      // Keep interactive: allow panning, zooming, dragging
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
        borderColor: borderColor,
        timeVisible: true,
        secondsVisible: false,
        // Generous bar spacing ensures candlesticks have ample width and breathing room
        barSpacing: 28,
        minBarSpacing: 14,
        rightOffset: 3,
        fixLeftEdge: false,
        fixRightEdge: false,
      },
      rightPriceScale: {
        borderColor: borderColor,
        autoScale: true,
        // scaleMargins allow candlesticks to stretch vertically ("little long sticks")
        scaleMargins: {
          top: 0.12,
          bottom: 0.12,
        },
      },
    });

    chartRef.current = chart;

    // Candlestick series with authentic ICT colors
    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#10b981',
      downColor: '#f43f5e',
      borderVisible: false,
      wickUpColor: '#10b981',
      wickDownColor: '#f43f5e',
    });

    seriesRef.current = candleSeries;

    // Realistic EUR/USD 1m London Open Judas Swing Candlestick Data
    // Designed with long sticks (extended price amplitude) and high visibility wicks
    const baseTime = 1718073600 as UTCTimestamp; // 02:40 EST
    const candles = [
      // 02:40 - Asian Range Consolidation baseline
      { time: (baseTime + 0) as UTCTimestamp, open: 1.08375, high: 1.08410, low: 1.08360, close: 1.08395 },
      // 02:41 - Small pullback
      { time: (baseTime + 60) as UTCTimestamp, open: 1.08395, high: 1.08425, low: 1.08380, close: 1.08415 },
      // 02:42 - Build up toward old swing high
      { time: (baseTime + 120) as UTCTimestamp, open: 1.08415, high: 1.08445, low: 1.08400, close: 1.08435 },
      // 02:43 - Aggressive Judas impulse upward (TALL green stick)
      { time: (baseTime + 180) as UTCTimestamp, open: 1.08435, high: 1.08480, low: 1.08420, close: 1.08470 },
      // 02:44 - Wick purge piercing BSL above 1.0847, then rejecting sharply (TALL stick with upper wick)
      { time: (baseTime + 240) as UTCTimestamp, open: 1.08470, high: 1.08510, low: 1.08425, close: 1.08430 },
      // 02:45 - Displacement Candle 1 down (TALL red stick)
      { time: (baseTime + 300) as UTCTimestamp, open: 1.08430, high: 1.08440, low: 1.08355, close: 1.08365 },
      // 02:46 - Displacement Candle 2 confirms MSS & creates 1m SIBI/FVG (TALL red stick)
      { time: (baseTime + 360) as UTCTimestamp, open: 1.08365, high: 1.08375, low: 1.08295, close: 1.08305 },
      // 02:47 - Retracement bounce into FVG
      { time: (baseTime + 420) as UTCTimestamp, open: 1.08305, high: 1.08385, low: 1.08300, close: 1.08380 },
      // 02:48 - Pinpoint tap of 50% Consequent Encroachment at 1.08420 (ENTRY point)
      { time: (baseTime + 480) as UTCTimestamp, open: 1.08380, high: 1.08422, low: 1.08370, close: 1.08415 },
      // 02:49 - Immediate rejection from 50% CE (TALL red reversal stick)
      { time: (baseTime + 540) as UTCTimestamp, open: 1.08415, high: 1.08420, low: 1.08325, close: 1.08335 },
      // 02:50 - Expansion toward Sell-Side Liquidity
      { time: (baseTime + 600) as UTCTimestamp, open: 1.08335, high: 1.08345, low: 1.08260, close: 1.08270 },
      // 02:51 - Final thrust to Target Profit +24 pips
      { time: (baseTime + 660) as UTCTimestamp, open: 1.08270, high: 1.08280, low: 1.08210, close: 1.08220 },
    ];

    candleSeries.setData(candles);

    // 1. Buy-Side Liquidity (BSL) Swept line
    candleSeries.createPriceLine({
      price: 1.08475,
      color: '#f43f5e',
      lineWidth: 1,
      lineStyle: LineStyle.Dashed,
      axisLabelVisible: true,
      title: 'BSL 1.0847',
    });

    // 2. 50% Consequent Encroachment Entry line
    candleSeries.createPriceLine({
      price: 1.08420,
      color: '#38bdf8',
      lineWidth: 1,
      lineStyle: LineStyle.Dashed,
      axisLabelVisible: true,
      title: '50% CE 1.0842',
    });

    // 3. Take Profit Target (Sell-Side Liquidity) line
    candleSeries.createPriceLine({
      price: 1.08220,
      color: '#10b981',
      lineWidth: 1,
      lineStyle: LineStyle.Dashed,
      axisLabelVisible: true,
      title: 'TP (SSL) +24p',
    });

    chart.timeScale().fitContent();

    // Interactive Crosshair Subscription: updates OHLC live on mouse move
    chart.subscribeCrosshairMove((param) => {
      if (
        !param.point ||
        !param.time ||
        !param.seriesData.get(candleSeries)
      ) {
        setHoverData({
          time: '02:48 EST',
          open: 1.08380,
          high: 1.08422,
          low: 1.08370,
          close: 1.08415,
          change: 0.00035,
          changePercent: 0.032,
        });
        return;
      }

      const bar = param.seriesData.get(candleSeries) as {
        open: number;
        high: number;
        low: number;
        close: number;
      };

      if (bar) {
        const change = bar.close - bar.open;
        const changePercent = (change / bar.open) * 100;
        const timeVal = typeof param.time === 'number'
          ? new Date(param.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' EST'
          : String(param.time);

        setHoverData({
          time: timeVal,
          open: bar.open,
          high: bar.high,
          low: bar.low,
          close: bar.close,
          change,
          changePercent,
        });
      }
    });

    // Responsive Auto-resize using ResizeObserver
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
  }, [theme, chartCanvasHeight]);

  return (
    <div className="relative w-full flex flex-col select-none" style={{ height }}>
      {/* Interactive OHLC Live Readout Strip */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#141618] border-b border-white/[0.06] text-[11px] font-mono h-[34px]">
        <div className="flex items-center gap-3 text-white/70">
          {hoverData && (
            <>
              <span className="text-white/40">{hoverData.time}</span>
              <span>O: <span className="text-white font-medium">{hoverData.open.toFixed(5)}</span></span>
              <span>H: <span className="text-white font-medium">{hoverData.high.toFixed(5)}</span></span>
              <span>L: <span className="text-white font-medium">{hoverData.low.toFixed(5)}</span></span>
              <span>C: <span className={hoverData.close >= hoverData.open ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>{hoverData.close.toFixed(5)}</span></span>
              <span className={hoverData.change >= 0 ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
                {hoverData.change >= 0 ? '+' : ''}{(hoverData.change * 10000).toFixed(1)}p ({hoverData.changePercent.toFixed(2)}%)
              </span>
            </>
          )}
        </div>
        <div className="text-[10px] text-white/30 hidden sm:inline">
          ✦ Drag / Scroll to pan & zoom
        </div>
      </div>

      {/* Lightweight-charts Canvas Container */}
      <div
        ref={chartContainerRef}
        className="w-full cursor-crosshair overflow-hidden"
        style={{ height: chartCanvasHeight }}
      />
    </div>
  );
}
