"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { 
  getAllModules, 
  getLevels 
} from "@/lib/ict-content";
import { 
  CheckCircle2, 
  Search, 
  ArrowRight,
  BookOpen,
  Clock,
  Sparkles
} from "lucide-react";

export default function LearnCurriculumPage() {
  const allModules = getAllModules();
  const allLevels = getLevels();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [completedModules, setCompletedModules] = useState<Record<string, { completedAt: string; score: number; total: number }>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ict_completed_modules");
      if (saved) {
        setCompletedModules(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
  }, []);

  const completedCount = Object.keys(completedModules).length;
  const progressPercent = Math.round((completedCount / allModules.length) * 100);

  const filteredModules = allModules.filter((mod) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.keyTakeaways.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesLevel =
      selectedLevel === "all" || mod.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-zinc-900 flex flex-col antialiased selection:bg-amber-500/20 selection:text-zinc-900">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Header Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>24 Institutional Modules Cataloged</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
              Curriculum Roadmap
            </h1>

            <div className="text-xs font-mono text-zinc-500 bg-white px-3 py-1.5 rounded-full border border-zinc-200">
              Mastery: <span className="font-bold text-zinc-900">{completedCount} of {allModules.length}</span> ({progressPercent}%)
            </div>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 max-w-3xl leading-relaxed">
            A comprehensive, step-by-step masterclass in institutional price delivery. From liquidity mechanics and Fair Value Gaps to multi-market SMT divergence and the 10:00 AM Silver Bullet model.
          </p>

          {/* Progress Bar */}
          <div className="p-4 rounded-xl border border-zinc-200 bg-white shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-zinc-700">
              <span>Overall Completion</span>
              <span className="font-mono font-bold text-amber-600">{progressPercent}%</span>
            </div>
            <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between pb-2">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search concepts (e.g. Fair Value Gap, SMT, Judas)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-full border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 shadow-sm transition-all"
            />
          </div>

          {/* Level Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedLevel("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedLevel === "all"
                  ? "bg-zinc-900 text-white shadow-sm"
                  : "bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300"
              }`}
            >
              All Tiers
            </button>
            {allLevels.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedLevel === lvl.id
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300"
                }`}
              >
                {lvl.title.split(":")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredModules.map((mod) => {
            const isCompleted = !!completedModules[mod.slug];
            const result = completedModules[mod.slug];

            return (
              <Link
                key={mod.slug}
                href={`/learn/${mod.level}/${mod.slug}`}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-[11px] font-mono font-medium text-zinc-600">
                      {mod.level.toUpperCase()}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                        <Clock className="h-3 w-3" />
                        {mod.estimatedReadTime} min
                      </span>
                      {isCompleted && (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle2 className="h-3 w-3" />
                          Passed ({result.score}/{result.total})
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-amber-600 transition-colors mb-2">
                    {mod.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed mb-4">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                    <BookOpen className="h-3.5 w-3.5 text-zinc-400" />
                    <span>3 Verification Questions</span>
                  </div>

                  <span className="flex items-center gap-1 text-xs font-semibold text-zinc-900 group-hover:text-amber-600 transition-colors">
                    <span>Study Module</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </main>
    </div>
  );
}
