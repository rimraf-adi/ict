"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { 
  getAllGlossaryTerms, 
  getGlossaryCategories,
  GlossaryCategory
} from "@/lib/ict-content";
import { Search, Copy, Check, ArrowRight, BookA } from "lucide-react";

export default function GlossaryPage() {
  const allTerms = getAllGlossaryTerms();
  const categories = getGlossaryCategories();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLetter, setSelectedLetter] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    allTerms.forEach((t) => {
      if (t.letter) letters.add(t.letter);
    });
    return Array.from(letters).sort();
  }, [allTerms]);

  const filteredTerms = useMemo(() => {
    return allTerms.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        item.term.toLowerCase().includes(q) ||
        item.fullTerm.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q) ||
        (item.formula && item.formula.toLowerCase().includes(q));

      const matchesCat =
        selectedCategory === "All" || item.category === selectedCategory;

      const matchesLetter =
        selectedLetter === "All" || item.letter === selectedLetter;

      return matchesSearch && matchesCat && matchesLetter;
    });
  }, [allTerms, searchQuery, selectedCategory, selectedLetter]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0c0d0f] text-white flex flex-col antialiased selection:bg-amber-500/20 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono font-medium text-white/60">
            <BookA className="h-3.5 w-3.5 text-amber-400" />
            <span>Standardized Technical Lexicon</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
                Institutional Lexicon
              </h1>
              <p className="text-sm sm:text-base text-white/50 mt-2 max-w-xl leading-relaxed">
                71 standardized algorithmic terms, mechanical definitions, and mathematical formulas governing IPDA delivery.
              </p>
            </div>

            <div className="text-xs font-mono text-white/50 bg-white/[0.02] px-3 py-1.5 rounded-full border border-white/[0.08]">
              Showing <span className="font-bold text-white">{filteredTerms.length}</span> of {allTerms.length} terms
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="Search by term or acronym (e.g. FVG, OTE, BSL, Judas, AMD)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-full border border-white/10 bg-white/[0.03] text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400/40 transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === "All"
                  ? "bg-white text-zinc-950 font-semibold shadow-sm"
                  : "bg-white/[0.02] border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-white text-zinc-950 font-semibold shadow-sm"
                    : "bg-white/[0.02] border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Alphabet Bar */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs font-mono scrollbar-none">
            <button
              onClick={() => setSelectedLetter("All")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                selectedLetter === "All"
                  ? "bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30"
                  : "text-white/40 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              ALL
            </button>
            {availableLetters.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`px-2 py-1 rounded-md transition-all ${
                  selectedLetter === letter
                    ? "bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30"
                    : "text-white/40 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Lexicon Term Cards */}
        <div className="space-y-4">
          {filteredTerms.length === 0 ? (
            <div className="p-12 text-center rounded-2xl border border-white/[0.08] bg-white/[0.02]">
              <p className="text-sm text-white/40">No definitions found matching your query.</p>
            </div>
          ) : (
            filteredTerms.map((item) => {
              const isCopied = copiedId === item.id;
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/[0.04] space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg font-bold text-white font-mono">
                        {item.term}
                      </span>
                      <span className="text-sm font-semibold text-white/60">
                        {item.fullTerm}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[10px] font-mono text-white/50">
                        {item.category}
                      </span>
                      <button
                        onClick={() => handleCopy(item.id, `${item.term} (${item.fullTerm}): ${item.definition}`)}
                        className="p-1.5 rounded-md hover:bg-white/[0.08] text-white/40 hover:text-white transition-colors"
                        title="Copy definition"
                      >
                        {isCopied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                    {item.definition}
                  </p>

                  {item.formula && (
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-amber-300">
                      <span className="text-white/40 mr-2">Formula:</span>
                      {item.formula}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-8 text-xs font-mono text-white/40 bg-transparent">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <span>ICT Core — Lexicon</span>
          <span>Next.js · TypeScript</span>
        </div>
      </footer>
    </div>
  );
}
