"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { 
  Clock, 
  Zap, 
  Layers, 
  ArrowRight
} from "lucide-react";

interface MacroWindow {
  time: string;
  name: string;
  startMinutes: number;
  endMinutes: number;
  description: string;
  significance: string;
}

const MACRO_WINDOWS: MacroWindow[] = [
  {
    time: "02:33 AM – 03:00 AM EST",
    name: "London Open Initialization Macro",
    startMinutes: 153,
    endMinutes: 180,
    description: "Algorithmic orders deploy in London; frequently initiates the Judas Swing sweeping Asian high/low.",
    significance: "High Volatility Reversal / Trap",
  },
  {
    time: "08:50 AM – 09:10 AM EST",
    name: "Pre-Market / 09:00 AM News Macro",
    startMinutes: 530,
    endMinutes: 550,
    description: "Positions institutional inventory into the 09:00 AM US macro reports and sets opening range.",
    significance: "Liquidity Pool Positioning",
  },
  {
    time: "09:50 AM – 10:10 AM EST",
    name: "Post-Cash Open Macro (The Premier Macro)",
    startMinutes: 590,
    endMinutes: 610,
    description: "Highest probability window of the morning. Sweeps opening bell shakeout highs/lows and locks in trend.",
    significance: "Flagship Continuation / Reversal",
  },
  {
    time: "10:50 AM – 11:10 AM EST",
    name: "London Close Setup Macro",
    startMinutes: 650,
    endMinutes: 670,
    description: "Prepares European trading desks for book squaring; purges local extremes before lunchtime retracement.",
    significance: "European Desk Profit Taking",
  },
  {
    time: "11:50 AM – 12:10 PM EST",
    name: "Lunch Transition Macro",
    startMinutes: 710,
    endMinutes: 730,
    description: "Transitions market delivery into midday consolidation doldrums. Volume evaporates.",
    significance: "Consolidation Trigger (Stand Aside)",
  },
  {
    time: "13:10 PM – 13:40 PM EST",
    name: "Afternoon Session Ignition Macro",
    startMinutes: 790,
    endMinutes: 820,
    description: "Desk traders return from lunch. Seeds the run into the 14:00 PM PM Silver Bullet hour.",
    significance: "Afternoon Trend Ignition",
  },
  {
    time: "15:15 PM – 15:45 PM EST",
    name: "Equities Closing Ramp Macro",
    startMinutes: 915,
    endMinutes: 945,
    description: "Final algorithmic distribution before the 16:00 cash settlement. Delivers daily candle close.",
    significance: "Daily Range Completion",
  },
];

export default function KillzonesPage() {
  const [nyHours, setNyHours] = useState(0);
  const [nyMinutes, setNyMinutes] = useState(0);
  const [nySeconds, setNySeconds] = useState(0);
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      const parts = formatter.formatToParts(now);
      const h = parseInt(parts.find(p => p.type === "hour")?.value || "0", 10);
      const m = parseInt(parts.find(p => p.type === "minute")?.value || "0", 10);
      const s = parseInt(parts.find(p => p.type === "second")?.value || "0", 10);

      setNyHours(h);
      setNyMinutes(m);
      setNySeconds(s);
      setTimeString(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")} EST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const totalCurrentMinutes = nyHours * 60 + nyMinutes;

  const killzones = [
    {
      name: "Asian Range Session",
      time: "19:00 – 00:00 EST",
      start: 1140,
      end: 1440,
      role: "Accumulation & Liquidity Building",
      rules: "Do not trend-trade. Mark Asian High & Low as primary benchmarks for the London purge.",
    },
    {
      name: "London Open Killzone",
      time: "02:00 – 05:00 EST",
      start: 120,
      end: 300,
      role: "Manipulation & Judas Swing (~70% High/Low of the Day)",
      rules: "Watch for false breakout of Asian High/Low into HTF PD Array, followed by lower-timeframe MSS.",
    },
    {
      name: "New York AM Killzone",
      time: "07:00 – 10:00 EST",
      start: 420,
      end: 600,
      role: "Expansion / Trend Continuation",
      rules: "Cleanest, highest volume session. Trade 08:30 news displacement and 09:30 cash open retests.",
    },
    {
      name: "London Close Killzone",
      time: "10:00 – 12:00 EST",
      start: 600,
      end: 720,
      role: "Profit Taking & Counter-Trend Retracement",
      rules: "European traders close books. Price often stalls or stages a sharp counter-trend pullback.",
    },
    {
      name: "New York PM Killzone",
      time: "13:30 – 16:00 EST",
      start: 810,
      end: 960,
      role: "Daily Profile Completion",
      rules: "Includes 14:00–15:00 PM Silver Bullet and 15:15 closing macro. Targets final daily liquidity.",
    },
  ];

  let nextMacro: MacroWindow | null = null;
  let minutesToNextMacro = 9999;

  for (const m of MACRO_WINDOWS) {
    if (totalCurrentMinutes >= m.startMinutes && totalCurrentMinutes < m.endMinutes) {
      nextMacro = m;
      minutesToNextMacro = 0;
      break;
    } else if (m.startMinutes > totalCurrentMinutes) {
      const diff = m.startMinutes - totalCurrentMinutes;
      if (diff < minutesToNextMacro) {
        minutesToNextMacro = diff;
        nextMacro = m;
      }
    }
  }

  if (!nextMacro && MACRO_WINDOWS.length > 0) {
    nextMacro = MACRO_WINDOWS[0];
    minutesToNextMacro = (1440 - totalCurrentMinutes) + MACRO_WINDOWS[0].startMinutes;
  }

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-zinc-900 flex flex-col antialiased selection:bg-amber-500/20 selection:text-zinc-900">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-10">
        
        {/* Header & Live Clock */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 shadow-sm">
            <Clock className="h-3.5 w-3.5 text-amber-500" />
            <span>Time & Price Algorithmic Architecture</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
                Killzones & Algorithmic Macros
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl leading-relaxed">
                Time trumps price. The algorithm deploys institutional orders strictly inside predetermined New York EST windows.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-200 bg-white shadow-sm font-mono text-left sm:text-right shrink-0">
              <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">New York Time (EST)</div>
              <div className="text-2xl font-bold text-zinc-900 mt-0.5">
                {timeString || "--:--:-- EST"}
              </div>
            </div>
          </div>
        </div>

        {/* Next Macro Alert Banner */}
        {nextMacro && (
          <div className="p-5 rounded-2xl border border-amber-200/90 bg-gradient-to-r from-amber-50/70 to-orange-50/40 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3.5">
              <span className={`h-2.5 w-2.5 rounded-full ${minutesToNextMacro === 0 ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`} />
              <div>
                <span className="font-bold text-zinc-900 text-sm">{nextMacro.name} ({nextMacro.time})</span>
                <p className="text-zinc-600 mt-0.5 leading-relaxed">{nextMacro.description}</p>
              </div>
            </div>
            <div className="font-mono text-right shrink-0">
              <span className="font-bold text-zinc-900 text-sm px-2.5 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
                {minutesToNextMacro === 0 ? "Active Now" : `In ${minutesToNextMacro}m`}
              </span>
              <div className="text-[10px] text-zinc-500 mt-1 font-sans">{nextMacro.significance}</div>
            </div>
          </div>
        )}

        {/* 24-Hour Timeline Bar */}
        <div className="space-y-4">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-semibold">
            24-Hour Institutional Schedule
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 font-sans text-xs">
            {killzones.map((kz) => {
              const isActive = (kz.start <= kz.end) 
                ? (totalCurrentMinutes >= kz.start && totalCurrentMinutes < kz.end)
                : (totalCurrentMinutes >= kz.start || totalCurrentMinutes < kz.end);

              return (
                <div
                  key={kz.name}
                  className={`p-4 rounded-2xl border transition-all ${
                    isActive
                      ? "border-zinc-900 bg-zinc-900 text-white shadow-md"
                      : "border-zinc-200 bg-white text-zinc-800 shadow-sm"
                  }`}
                >
                  <div className={`text-[10px] font-mono font-bold uppercase ${
                    isActive ? "text-emerald-400" : "text-zinc-400"
                  }`}>
                    {isActive ? "● Active Now" : kz.time}
                  </div>
                  <div className="font-medium text-xs mt-1">
                    {kz.name}
                  </div>
                  <div className={`text-[11px] mt-1 line-clamp-2 ${
                    isActive ? "text-zinc-300" : "text-zinc-500"
                  }`}>
                    {kz.role}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Macros Table */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            20-Minute Algorithmic Macros
          </div>

          <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-zinc-50 text-zinc-500 border-b border-zinc-200 uppercase">
                <tr>
                  <th className="px-4 py-3 font-semibold">Window (EST)</th>
                  <th className="px-4 py-3 font-semibold">Macro Name</th>
                  <th className="px-4 py-3 font-semibold">Behavior</th>
                  <th className="px-4 py-3 font-semibold">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {MACRO_WINDOWS.map((macro) => {
                  const isCurrent = totalCurrentMinutes >= macro.startMinutes && totalCurrentMinutes < macro.endMinutes;
                  return (
                    <tr 
                      key={macro.time} 
                      className={isCurrent ? "bg-emerald-50 text-emerald-950 font-medium" : "hover:bg-zinc-50 text-zinc-800"}
                    >
                      <td className="px-4 py-3 whitespace-nowrap font-semibold">
                        {macro.time}
                      </td>
                      <td className="px-4 py-3 text-zinc-900 font-semibold">
                        {macro.name}
                      </td>
                      <td className="px-4 py-3 text-zinc-600 font-sans text-xs">
                        {macro.description}
                      </td>
                      <td className="px-4 py-3 text-zinc-600 whitespace-nowrap">
                        {macro.significance}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-8 text-xs font-mono text-zinc-500 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <span>ICT Core — Killzones & Macros</span>
          <span>Next.js · TypeScript</span>
        </div>
      </footer>
    </div>
  );
}
