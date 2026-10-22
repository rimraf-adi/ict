'use client';

import React, { useState, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import { SCENARIOS } from '@/lib/simulator-scenarios';
import { ScenarioPlayer } from '@/components/simulator/ScenarioPlayer';
import { 
  Sparkles, 
  Target, 
  Layers, 
  ArrowRight, 
  CheckCircle2,
  Award,
  Zap,
  TrendingUp
} from 'lucide-react';

export default function PracticeLabPage() {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(SCENARIOS[0].id);
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Master'>('All');
  const [stats, setStats] = useState<{
    completedCount: number;
    totalXp: number;
    accuracy: number;
    streak: number;
  }>({
    completedCount: 1,
    totalXp: 450,
    accuracy: 92,
    streak: 3
  });

  const simulatorRef = useRef<HTMLDivElement>(null);

  const activeScenario = SCENARIOS.find((s) => s.id === selectedScenarioId) || SCENARIOS[0];

  const filteredScenarios = SCENARIOS.filter((s) => {
    if (difficultyFilter === 'All') return true;
    return s.difficulty === difficultyFilter;
  });

  const handleSelectScenario = (id: string) => {
    setSelectedScenarioId(id);
    if (simulatorRef.current) {
      simulatorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCompleteScenario = (result: {
    scenarioId: string;
    score: number;
    accuracy: number;
    tradeWon: boolean;
  }) => {
    setStats((prev) => ({
      completedCount: prev.completedCount + 1,
      totalXp: prev.totalXp + result.score,
      accuracy: Math.round((prev.accuracy + result.accuracy) / 2),
      streak: result.tradeWon ? prev.streak + 1 : 1
    }));
  };

  const handleSelectNextScenario = () => {
    const currentIndex = SCENARIOS.findIndex((s) => s.id === selectedScenarioId);
    const nextIndex = (currentIndex + 1) % SCENARIOS.length;
    setSelectedScenarioId(SCENARIOS[nextIndex].id);
    if (simulatorRef.current) {
      simulatorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-zinc-900 flex flex-col antialiased selection:bg-amber-500/20 selection:text-zinc-900">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 shadow-sm">
            <Zap className="h-3.5 w-3.5 text-amber-500" />
            <span>Interactive Execution Engine</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
                Candlestick Practice Lab
              </h1>
              <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
                Step through authentic historical price delivery candle-by-candle. Identify liquidity sweeps, Fair Value Gaps, and Breakers with real-time feedback and execution scoring.
              </p>
            </div>

            {/* Performance Metrics Cards */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white shadow-sm text-center min-w-[90px]">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Total XP</div>
                <div className="text-lg font-bold text-amber-600 font-mono">{stats.totalXp}</div>
              </div>
              <div className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white shadow-sm text-center min-w-[90px]">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Accuracy</div>
                <div className="text-lg font-bold text-emerald-600 font-mono">{stats.accuracy}%</div>
              </div>
              <div className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white shadow-sm text-center min-w-[90px]">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Win Streak</div>
                <div className="text-lg font-bold text-zinc-900 font-mono">{stats.streak}🔥</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Simulator Viewport */}
        <div ref={simulatorRef} className="scroll-mt-24">
          <ScenarioPlayer
            scenario={activeScenario}
            onCompleteScenario={handleCompleteScenario}
            onSelectAnotherScenario={handleSelectNextScenario}
          />
        </div>

        {/* Scenario Selection Grid */}
        <div className="space-y-6 pt-6 border-t border-zinc-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900">
                Institutional Drill Scenarios
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500">
                Select a model to practice its entry mechanics and decision checkpoints.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {(['All', 'Beginner', 'Intermediate', 'Master'] as const).map((diff) => (
                <button
                  key={diff}
                  onClick={() => setDifficultyFilter(diff)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    difficultyFilter === diff
                      ? 'bg-zinc-900 text-white shadow-sm'
                      : 'bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredScenarios.map((sc) => {
              const isCurrent = sc.id === selectedScenarioId;
              return (
                <div
                  key={sc.id}
                  onClick={() => handleSelectScenario(sc.id)}
                  className={`cursor-pointer rounded-2xl border p-5 transition-all flex flex-col justify-between ${
                    isCurrent
                      ? 'border-amber-500 bg-amber-50/40 shadow-sm ring-1 ring-amber-500'
                      : 'border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-[10px] font-mono font-medium text-zinc-600">
                        {sc.asset} · {sc.timeframe}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                          sc.difficulty === 'Beginner'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : sc.difficulty === 'Intermediate'
                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                            : 'bg-purple-50 text-purple-700 border-purple-200'
                        }`}
                      >
                        {sc.difficulty}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-zinc-900 mb-1.5">
                      {sc.title}
                    </h3>
                    <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed mb-4">
                      {sc.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-zinc-500">
                      {sc.decisionPoints.length} Decision Points
                    </span>
                    <span className="font-semibold text-amber-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Launch</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </main>
    </div>
  );
}
