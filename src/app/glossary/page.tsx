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
    <div className="min-h-screen bg-[#FBFBFC] text-zinc-900 flex flex-col antialiased selection:bg-amber-500/20 selection:text-zinc-900">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 shadow-sm">
            <BookA className="h-3.5 w-3.5 text-amber-500" />
            <span>Standardized Technical Lexicon</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
                Institutional Lexicon
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl leading-relaxed">
                71 standardized algorithmic terms, mechanical definitions, and mathematical formulas governing IPDA delivery.
              </p>
            </div>

            <div className="text-xs font-mono text-zinc-500 bg-white px-3 py-1.5 rounded-full border border-zinc-200 shadow-xs">
              Showing <span className="font-bold text-zinc-900">{filteredTerms.length}</span> of {allTerms.length} terms
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search by term or acronym (e.g. FVG, OTE, BSL, Judas, AMD)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-full border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 shadow-sm transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === "All"
                  ? "bg-zinc-900 text-white shadow-sm"
                  : "bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300"
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
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300"
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
                  ? "bg-amber-100 text-amber-900 font-bold"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
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
                    ? "bg-amber-100 text-amber-900 font-bold"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
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
            <div className="p-12 text-center rounded-2xl border border-zinc-200 bg-white">
              <p className="text-sm text-zinc-500">No definitions found matching your query.</p>
            </div>
          ) : (
            filteredTerms.map((item) => {
              const isCopied = copiedId === item.id;
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:border-zinc-300 hover:shadow-md space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg font-bold text-zinc-900 font-mono">
                        {item.term}
                      </span>
                      <span className="text-sm font-semibold text-zinc-600">
                        {item.fullTerm}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-[10px] font-mono text-zinc-600">
                        {item.category}
                      </span>
                      <button
                        onClick={() => handleCopy(item.id, `${item.term} (${item.fullTerm}): ${item.definition}`)}
                        className="p-1.5 rounded-md hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 transition-colors"
                        title="Copy definition"
                      >
                        {isCopied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
                    {item.definition}
                  </p>

                  {item.formula && (
                    <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/80 font-mono text-xs text-amber-900">
                      <span className="text-zinc-400 mr-2">Formula:</span>
                      {item.formula}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </main>
    </div>
  );
}
