'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Scenario,
  DecisionPoint,
  DecisionOption
} from '@/lib/simulator-scenarios';
import { CandlestickChart, ActiveTrade } from './CandlestickChart';
import {
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Award,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Clock,
  ShieldAlert,
  Zap,
  Crosshair,
  Sliders
} from 'lucide-react';

export interface ScenarioPlayerProps {
  scenario: Scenario;
  onCompleteScenario?: (stats: {
    scenarioId: string;
    score: number;
    accuracy: number;
    tradeWon: boolean;
  }) => void;
  onSelectAnotherScenario?: () => void;
}

export const ScenarioPlayer: React.FC<ScenarioPlayerProps> = ({
  scenario,
  onCompleteScenario,
  onSelectAnotherScenario
}) => {
  // Playback state
  const [currentCandleIndex, setCurrentCandleIndex] = useState<number>(() => {
    // Start with pre-setup candles revealed (e.g. up to 12 or first decision point - 3)
    const firstTrigger = scenario.decisionPoints[0]?.triggerIndex ?? 12;
    return Math.min(Math.max(8, firstTrigger - 3), scenario.candles.length);
  });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playSpeed, setPlaySpeed] = useState<number>(1000); // ms per candle

  // Overlay visibility toggles
  const [showFVGs, setShowFVGs] = useState<boolean>(true);
  const [showOrderBlocks, setShowOrderBlocks] = useState<boolean>(true);
  const [showOTE, setShowOTE] = useState<boolean>(true);
  const [showBenchmarks, setShowBenchmarks] = useState<boolean>(true);
  const [showSecondarySeries, setShowSecondarySeries] = useState<boolean>(
    Boolean(scenario.secondarySeries)
  );

  // Decision point states
  const [activeDecision, setActiveDecision] = useState<DecisionPoint | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [answeredDecisions, setAnsweredDecisions] = useState<
    Record<string, { optionId: string; isCorrect: boolean }>
  >({});

  // Trade order execution state
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [activeTrade, setActiveTrade] = useState<ActiveTrade | null>(null);
  const [tradeForm, setTradeForm] = useState<{
    direction: 'buy' | 'sell';
    entryPrice: number;
    stopLoss: number;
    takeProfit: number;
  }>({
    direction: 'sell',
    entryPrice: 0,
    stopLoss: 0,
    takeProfit: 0
  });

  // Score & Performance
  const [score, setScore] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [isScenarioFinished, setIsScenarioFinished] = useState<boolean>(false);

  // Initialize or reset when scenario changes
  const resetScenario = useCallback(() => {
    const firstTrigger = scenario.decisionPoints[0]?.triggerIndex ?? 12;
    const initialIndex = Math.min(Math.max(8, firstTrigger - 3), scenario.candles.length);
    setCurrentCandleIndex(initialIndex);
    setIsPlaying(false);
    setActiveDecision(null);
    setSelectedOptionId(null);
    setAnsweredDecisions({});
    setActiveTrade(null);
    setIsOrderModalOpen(false);
    setIsScenarioFinished(false);
    setScore(0);
    setTotalQuestions(0);
    setCorrectCount(0);

    // Pre-fill trade form from first order criteria if available
    const orderDP = scenario.decisionPoints.find((dp) => dp.requiresOrderPlacement);
    if (orderDP && orderDP.orderCriteria) {
      setTradeForm({
        direction: orderDP.orderCriteria.direction,
        entryPrice: orderDP.orderCriteria.recommendedEntry,
        stopLoss: orderDP.orderCriteria.recommendedStopLoss,
        takeProfit: orderDP.orderCriteria.recommendedTakeProfit
      });
    }
  }, [scenario]);

  useEffect(() => {
    resetScenario();
  }, [scenario.id, resetScenario]);

  // Check for decision trigger at current index
  useEffect(() => {
    const trigger = scenario.decisionPoints.find(
      (dp) => dp.triggerIndex === currentCandleIndex
    );
    if (trigger && !answeredDecisions[trigger.id]) {
      setIsPlaying(false);
      setActiveDecision(trigger);
      setSelectedOptionId(null);

      // Prepopulate trade modal if this decision requires ordering
      if (trigger.requiresOrderPlacement && trigger.orderCriteria) {
        setTradeForm({
          direction: trigger.orderCriteria.direction,
          entryPrice: trigger.orderCriteria.recommendedEntry,
          stopLoss: trigger.orderCriteria.recommendedStopLoss,
          takeProfit: trigger.orderCriteria.recommendedTakeProfit
        });
      }
    }
  }, [currentCandleIndex, scenario.decisionPoints, answeredDecisions]);

  // Check trade execution & outcome on new candles
  useEffect(() => {
    if (!activeTrade || currentCandleIndex >= scenario.candles.length) return;

    const currentCandle = scenario.candles[currentCandleIndex];
    if (!currentCandle) return;

    // 1. If pending, check if touched entry
    if (activeTrade.status === 'pending') {
      const isHit =
        activeTrade.direction === 'buy'
          ? currentCandle.low <= activeTrade.entryPrice &&
            currentCandle.high >= activeTrade.entryPrice
          : currentCandle.high >= activeTrade.entryPrice &&
            currentCandle.low <= activeTrade.entryPrice;

      if (isHit) {
        setActiveTrade((prev) => (prev ? { ...prev, status: 'active' } : null));
      }
    }

    // 2. If active, check Stop Loss or Take Profit
    if (activeTrade.status === 'active') {
      if (activeTrade.direction === 'buy') {
        if (currentCandle.low <= activeTrade.stopLoss) {
          setActiveTrade((prev) => (prev ? { ...prev, status: 'loss' } : null));
        } else if (currentCandle.high >= activeTrade.takeProfit) {
          setActiveTrade((prev) => (prev ? { ...prev, status: 'win' } : null));
        }
      } else {
        if (currentCandle.high >= activeTrade.stopLoss) {
          setActiveTrade((prev) => (prev ? { ...prev, status: 'loss' } : null));
        } else if (currentCandle.low <= activeTrade.takeProfit) {
          setActiveTrade((prev) => (prev ? { ...prev, status: 'win' } : null));
        }
      }
    }
  }, [currentCandleIndex, activeTrade, scenario.candles]);

  // Auto-step timer when playing
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && !activeDecision && !isOrderModalOpen) {
      timer = setInterval(() => {
        setCurrentCandleIndex((prev) => {
          if (prev >= scenario.candles.length - 1) {
            setIsPlaying(false);
            setIsScenarioFinished(true);
            return prev;
          }
          return prev + 1;
        });
      }, playSpeed);
    }
    return () => clearInterval(timer);
  }, [isPlaying, activeDecision, isOrderModalOpen, scenario.candles.length, playSpeed]);

  // Check if scenario reaches end
  useEffect(() => {
    if (currentCandleIndex >= scenario.candles.length - 1 && !isScenarioFinished) {
      setIsScenarioFinished(true);
    }
  }, [currentCandleIndex, scenario.candles.length, isScenarioFinished]);

  // Step Forward
  const stepForward = () => {
    if (currentCandleIndex < scenario.candles.length - 1) {
      setCurrentCandleIndex((prev) => prev + 1);
    }
  };

  // Toggle Overlays
  const toggleOverlay = (key: 'fvg' | 'ob' | 'ote' | 'benchmarks') => {
    if (key === 'fvg') setShowFVGs((prev) => !prev);
    if (key === 'ob') setShowOrderBlocks((prev) => !prev);
    if (key === 'ote') setShowOTE((prev) => !prev);
    if (key === 'benchmarks') setShowBenchmarks((prev) => !prev);
  };

  // Handle user selecting an option in Decision Point
  const handleSelectOption = (option: DecisionOption) => {
    if (!activeDecision) return;
    setSelectedOptionId(option.id);

    const isCorrect = option.isCorrect;
    setAnsweredDecisions((prev) => ({
      ...prev,
      [activeDecision.id]: { optionId: option.id, isCorrect }
    }));

    setTotalQuestions((prev) => prev + 1);
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      setScore((prev) => prev + 100);
    }

    // If this decision requires placing an order, open the execution modal
    if (activeDecision.requiresOrderPlacement && isCorrect) {
      setIsOrderModalOpen(true);
    }
  };

  // Submit Order Modal
  const handleConfirmOrder = () => {
    setActiveTrade({
      direction: tradeForm.direction,
      entryPrice: tradeForm.entryPrice,
      stopLoss: tradeForm.stopLoss,
      takeProfit: tradeForm.takeProfit,
      status: 'pending'
    });
    setIsOrderModalOpen(false);
    setActiveDecision(null);
    setIsPlaying(true);
  };

  // Visible slice of candles for chart
  const visibleCandles = scenario.candles.slice(0, currentCandleIndex + 1);

  // Calculations for Order modal risk:reward
  const riskDistance = Math.abs(tradeForm.entryPrice - tradeForm.stopLoss);
  const rewardDistance = Math.abs(tradeForm.takeProfit - tradeForm.entryPrice);
  const riskRewardRatio = riskDistance > 0 ? (rewardDistance / riskDistance).toFixed(2) : '0';

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
      {/* ------------------------------------------------------------------ */}
      {/* HEADER: Scenario Meta & Killzone Status Bar                         */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-[#0c0d0f] border border-white/[0.08] rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-500/10 text-amber-300 border border-amber-500/20">
                {scenario.category}
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                  scenario.difficulty === 'Beginner'
                    ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                    : scenario.difficulty === 'Intermediate'
                    ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                    : 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                }`}
              >
                {scenario.difficulty} Level
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-white/[0.05] text-white/70 border border-white/[0.08]">
                {scenario.asset} · {scenario.timeframe}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              {scenario.title}
            </h1>
            <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
              {scenario.subtitle}
            </p>
          </div>

          {/* Quick HUD Metrics */}
          <div className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.08] rounded-xl px-5 py-3 font-mono text-xs shrink-0">
            <div>
              <div className="text-[10px] text-white/40 uppercase tracking-wider font-semibold">Score</div>
              <div className="text-base font-bold text-amber-400">{score} XP</div>
            </div>
            <div className="w-[1px] h-7 bg-white/[0.08]" />
            <div>
              <div className="text-[10px] text-white/40 uppercase tracking-wider font-semibold">Accuracy</div>
              <div className="text-base font-bold text-emerald-400">
                {totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 100}%
              </div>
            </div>
            <div className="w-[1px] h-7 bg-white/[0.08]" />
            <div>
              <div className="text-[10px] text-white/40 uppercase tracking-wider font-semibold">Killzone</div>
              <div className="text-[11px] font-semibold text-white/80 truncate max-w-[140px]">
                {scenario.killZoneWindow}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* CANDLESTICK CHART CONTAINER                                        */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative">
        <CandlestickChart
          candles={visibleCandles}
          overlays={scenario.overlays}
          showFVGs={showFVGs}
          showOrderBlocks={showOrderBlocks}
          showOTE={showOTE}
          showBenchmarks={showBenchmarks}
          onToggleOverlay={toggleOverlay}
          activeTrade={activeTrade}
          secondarySeries={scenario.secondarySeries}
          showSecondarySeries={showSecondarySeries}
          onToggleSecondarySeries={() => setShowSecondarySeries((prev) => !prev)}
          height={480}
        />

        {/* Trade Status Pill on Chart */}
        {activeTrade && (
          <div
            className={`absolute top-14 left-4 z-20 px-3.5 py-1.5 rounded-full border backdrop-blur-md text-xs font-mono font-bold flex items-center gap-2 shadow-sm ${
              activeTrade.status === 'win'
                ? 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40'
                : activeTrade.status === 'loss'
                ? 'bg-rose-950/70 text-rose-300 border-rose-500/40'
                : activeTrade.status === 'active'
                ? 'bg-amber-950/70 text-amber-300 border-amber-500/40 animate-pulse'
                : 'bg-white/[0.08] text-white/90 border-white/10'
            }`}
          >
            {activeTrade.status === 'win' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            {activeTrade.status === 'loss' && <XCircle className="w-4 h-4 text-rose-400" />}
            {activeTrade.status === 'active' && <Zap className="w-4 h-4 text-amber-400" />}
            {activeTrade.status === 'pending' && <Crosshair className="w-4 h-4 text-white/50" />}
            <span>
              TRADE {activeTrade.direction.toUpperCase()}: {activeTrade.status.toUpperCase()}
              {activeTrade.status === 'win' && ' (+Target Hit)'}
              {activeTrade.status === 'loss' && ' (Stop Loss Hit)'}
              {activeTrade.status === 'active' && ' (Position Open)'}
              {activeTrade.status === 'pending' && ' (Awaiting Entry Fill)'}
            </span>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* PLAYBACK CONTROLS & TIMELINE BAR                                   */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-[#0c0d0f] border border-white/[0.08] rounded-2xl px-5 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm font-mono text-xs">
        {/* Play / Pause / Step / Reset */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            disabled={isScenarioFinished}
            className={`px-4 py-2 rounded-full font-bold flex items-center gap-2 transition-all ${
              isPlaying
                ? 'bg-amber-400 hover:bg-amber-500 text-zinc-950 shadow-sm'
                : 'bg-white hover:bg-zinc-200 text-zinc-950 shadow-sm disabled:opacity-40'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" /> Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4" /> Play Drill
              </>
            )}
          </button>

          <button
            type="button"
            onClick={stepForward}
            disabled={isPlaying || currentCandleIndex >= scenario.candles.length - 1}
            className="px-3.5 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white/80 border border-white/[0.08] font-semibold flex items-center gap-1.5 disabled:opacity-30 transition-colors"
            title="Step to next candle"
          >
            <SkipForward className="w-4 h-4" /> Next Candle
          </button>

          <button
            type="button"
            onClick={resetScenario}
            className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white/60 border border-white/[0.08] transition-colors"
            title="Reset Scenario to beginning"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Speed selector */}
          <div className="flex items-center bg-white/[0.03] border border-white/[0.08] rounded-full p-0.5 ml-2">
            {[
              { label: '0.5x', speed: 1500 },
              { label: '1x', speed: 900 },
              { label: '2x', speed: 450 }
            ].map((spd) => (
              <button
                key={spd.label}
                type="button"
                onClick={() => setPlaySpeed(spd.speed)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-semibold transition-all ${
                  playSpeed === spd.speed
                    ? 'bg-white text-zinc-950 shadow-xs font-bold'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {spd.label}
              </button>
            ))}
          </div>
        </div>

        {/* Progress Timeline Slider */}
        <div className="flex items-center gap-3 w-full sm:w-80">
          <span className="text-white/40 font-mono text-[11px] whitespace-nowrap">
            Candle {currentCandleIndex + 1} / {scenario.candles.length}
          </span>
          <div className="relative flex-1 h-2 bg-white/[0.06] rounded-full border border-white/[0.08] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-150"
              style={{
                width: `${((currentCandleIndex + 1) / scenario.candles.length) * 100}%`
              }}
            />
          </div>
          {visibleCandles[visibleCandles.length - 1] && (
            <span className="text-white font-mono text-[11px] font-semibold">
              {visibleCandles[visibleCandles.length - 1].time}
            </span>
          )}
        </div>

        {/* Manual Order Trigger Button */}
        {!activeTrade && (
          <button
            type="button"
            onClick={() => setIsOrderModalOpen(true)}
            className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Crosshair className="w-4 h-4" /> Place ICT Order
          </button>
        )}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* INTERACTIVE DECISION POINT CARD                                    */}
      {/* ------------------------------------------------------------------ */}
      {activeDecision && (
        <div className="bg-[#12141a] border-2 border-amber-400/60 rounded-2xl p-6 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-white/[0.08] pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping inline-block" />
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase">
                {activeDecision.conceptBadge}
              </span>
              <h2 className="text-base sm:text-lg font-semibold text-white">
                {activeDecision.phaseTitle}
              </h2>
            </div>
            <span className="text-xs text-amber-300/80 font-mono font-medium flex items-center gap-1 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> Simulation Paused for Drill
            </span>
          </div>

          <p className="text-sm text-white/80 mb-5 leading-relaxed font-sans font-medium">
            {activeDecision.prompt}
          </p>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {activeDecision.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              const hasAnswered = selectedOptionId !== null;

              let buttonStyle = 'bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.04] hover:border-white/20 text-white/80';
              if (hasAnswered) {
                if (opt.isCorrect) {
                  buttonStyle = 'bg-emerald-950/40 border-emerald-500/80 text-emerald-200 font-semibold ring-1 ring-emerald-500/50 shadow-xs';
                } else if (isSelected && !opt.isCorrect) {
                  buttonStyle = 'bg-rose-950/40 border-rose-500/80 text-rose-200 font-semibold ring-1 ring-rose-500/50 shadow-xs';
                } else {
                  buttonStyle = 'bg-white/[0.01] border-white/[0.05] text-white/30 opacity-50';
                }
              }

              return (
                <div key={opt.id} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => !hasAnswered && handleSelectOption(opt)}
                    disabled={hasAnswered}
                    className={`w-full text-left p-4 rounded-xl border text-sm font-sans font-medium transition-all flex items-start justify-between gap-3 ${buttonStyle}`}
                  >
                    <div>
                      <div className="font-semibold text-white">{opt.label}</div>
                      {opt.description && (
                        <div className="text-xs text-white/50 mt-1 leading-relaxed">{opt.description}</div>
                      )}
                    </div>
                    {hasAnswered && opt.isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    {hasAnswered && isSelected && !opt.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    )}
                  </button>

                  {/* Feedback Explanation */}
                  {hasAnswered && (isSelected || opt.isCorrect) && (
                    <div
                      className={`mt-2 p-4 rounded-xl text-xs leading-relaxed font-sans ${
                        opt.isCorrect
                          ? 'bg-emerald-950/30 border border-emerald-500/30 text-emerald-300'
                          : 'bg-rose-950/30 border border-rose-500/30 text-rose-300'
                      }`}
                    >
                      <strong className="block mb-1 font-mono text-[11px] uppercase tracking-wide">
                        {opt.isCorrect ? '✓ Institutional ICT Rationale:' : '✕ Retail Misconception:'}
                      </strong>
                      {opt.feedback}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action to proceed after answering */}
          {selectedOptionId && !activeDecision.requiresOrderPlacement && (
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setActiveDecision(null);
                  setIsPlaying(true);
                }}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Resume Simulation</span> <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* TRADE EXECUTION MODAL                                              */}
      {/* ------------------------------------------------------------------ */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-[#12141a] border border-white/10 rounded-3xl w-full max-w-lg p-6 shadow-2xl relative font-sans text-white">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-5">
              <div className="flex items-center gap-2">
                <Crosshair className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-semibold text-white">ICT Execution Terminal</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOrderModalOpen(false)}
                className="text-white/40 hover:text-white text-sm font-mono p-1 rounded-md transition-colors"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-4">
              {/* Direction Selector */}
              <div>
                <label className="block text-xs font-mono text-white/50 mb-1.5 uppercase font-semibold">
                  Order Direction
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTradeForm((prev) => ({ ...prev, direction: 'buy' }))}
                    className={`py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                      tradeForm.direction === 'buy'
                        ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                        : 'bg-white/[0.02] text-white/60 border border-white/[0.08] hover:bg-white/[0.05]'
                    }`}
                  >
                    <TrendingUp className="w-4 h-4" /> BUY LONG
                  </button>
                  <button
                    type="button"
                    onClick={() => setTradeForm((prev) => ({ ...prev, direction: 'sell' }))}
                    className={`py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                      tradeForm.direction === 'sell'
                        ? 'bg-rose-500 text-white shadow-sm'
                        : 'bg-white/[0.02] text-white/60 border border-white/[0.08] hover:bg-white/[0.05]'
                    }`}
                  >
                    <TrendingDown className="w-4 h-4" /> SELL SHORT
                  </button>
                </div>
              </div>

              {/* Input Price Fields */}
              <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                <div>
                  <label className="block text-white/50 mb-1">ENTRY LIMIT</label>
                  <input
                    type="number"
                    step="any"
                    value={tradeForm.entryPrice}
                    onChange={(e) =>
                      setTradeForm((prev) => ({
                        ...prev,
                        entryPrice: parseFloat(e.target.value) || 0
                      }))
                    }
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2 text-white font-bold focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-rose-400 mb-1">STOP LOSS (SL)</label>
                  <input
                    type="number"
                    step="any"
                    value={tradeForm.stopLoss}
                    onChange={(e) =>
                      setTradeForm((prev) => ({
                        ...prev,
                        stopLoss: parseFloat(e.target.value) || 0
                      }))
                    }
                    className="w-full bg-white/[0.03] border border-rose-500/30 rounded-xl px-3 py-2 text-rose-400 font-bold focus:border-rose-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-emerald-400 mb-1">TAKE PROFIT (TP)</label>
                  <input
                    type="number"
                    step="any"
                    value={tradeForm.takeProfit}
                    onChange={(e) =>
                      setTradeForm((prev) => ({
                        ...prev,
                        takeProfit: parseFloat(e.target.value) || 0
                      }))
                    }
                    className="w-full bg-white/[0.03] border border-emerald-500/30 rounded-xl px-3 py-2 text-emerald-400 font-bold focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Dynamic R:R Calculator HUD */}
              <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-3.5 flex items-center justify-around font-mono text-xs">
                <div>
                  <span className="text-white/40 block text-[10px]">RISK</span>
                  <span className="text-rose-400 font-bold">
                    {riskDistance < 1 ? (riskDistance * 10000).toFixed(1) + ' pips' : riskDistance.toFixed(2) + ' pts'}
                  </span>
                </div>
                <div className="w-[1px] h-6 bg-white/[0.08]" />
                <div>
                  <span className="text-white/40 block text-[10px]">REWARD</span>
                  <span className="text-emerald-400 font-bold">
                    {rewardDistance < 1 ? (rewardDistance * 10000).toFixed(1) + ' pips' : rewardDistance.toFixed(2) + ' pts'}
                  </span>
                </div>
                <div className="w-[1px] h-6 bg-white/[0.08]" />
                <div>
                  <span className="text-white/40 block text-[10px]">RISK : REWARD</span>
                  <span className={`font-bold ${parseFloat(riskRewardRatio) >= 2 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    1 : {riskRewardRatio}
                  </span>
                </div>
              </div>

              {/* Order Criteria Guidance Note */}
              {scenario.decisionPoints.find((dp) => dp.requiresOrderPlacement)?.orderCriteria && (
                <div className="p-3.5 bg-amber-400/10 border border-amber-400/20 rounded-xl text-xs font-mono text-amber-300 leading-relaxed">
                  <span className="font-bold block mb-1">🎯 Institutional Setup Note:</span>
                  {
                    scenario.decisionPoints.find((dp) => dp.requiresOrderPlacement)?.orderCriteria
                      ?.explanation
                  }
                </div>
              )}
            </div>

            {/* Confirm & Submit */}
            <div className="mt-6 flex items-center justify-end gap-3 border-t border-white/[0.08] pt-4">
              <button
                type="button"
                onClick={() => setIsOrderModalOpen(false)}
                className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white/70 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmOrder}
                className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all"
              >
                <Zap className="w-4 h-4" /> Submit Algorithmic Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* POST-MORTEM & SCENARIO COMPLETION DRAWER                           */}
      {/* ------------------------------------------------------------------ */}
      {isScenarioFinished && (
        <div className="bg-[#12141a] border-2 border-emerald-500/60 rounded-3xl p-6 sm:p-8 shadow-2xl animate-in fade-in duration-200 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Scenario Completed: Algorithmic Post-Mortem
                </h3>
                <p className="text-xs text-white/40 font-mono mt-0.5">
                  {scenario.title} · Institutional Verification
                </p>
              </div>
            </div>

            {/* Score Pill */}
            <div className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.08] rounded-full px-4 py-2">
              <span className="text-xs text-white/40 font-mono">Final:</span>
              <span className="text-sm font-bold text-amber-400 font-mono">{score} XP</span>
              <span className="text-xs text-white/20 font-mono">·</span>
              <span className="text-sm font-bold text-emerald-400 font-mono">
                {totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 100}% Accuracy
              </span>
            </div>
          </div>

          {/* Setup Summary */}
          <div className="mb-5 bg-white/[0.02] border border-white/[0.08] rounded-2xl p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1.5 font-mono">
              Setup Analysis & Delivery
            </h4>
            <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
              {scenario.postMortem.setupSummary}
            </p>
          </div>

          {/* Rule Checklist */}
          <div className="mb-5 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2 font-mono">
              ICT 5-Point Rule Checklist
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {scenario.postMortem.ruleChecklist.map((rule, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-3.5 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-white block">{rule.rule}</span>
                    <span className="text-white/50 font-mono text-[11px] mt-0.5 block leading-normal">
                      {rule.explanation}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ICT Core Takeaway */}
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl mb-6 text-xs font-mono text-emerald-200 leading-relaxed">
            <span className="font-bold text-emerald-400 block mb-1">💡 ICT Algorithm Golden Rule:</span>
            {scenario.postMortem.ictTakeaway}
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
            <button
              type="button"
              onClick={resetScenario}
              className="px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white/80 text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Repeat Drill
            </button>
            {onSelectAnotherScenario && (
              <button
                type="button"
                onClick={onSelectAnotherScenario}
                className="px-6 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
              >
                <span>Next Scenario</span> <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
