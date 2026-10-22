"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [nyTime, setNyTime] = useState<string>("");
  const [currentSession, setCurrentSession] = useState<{
    name: string;
    active: boolean;
    color: string;
  }>({ name: "Off Hours", active: false, color: "text-stone-400" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const nyString = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setNyTime(nyString);

      const nyHours = parseInt(nyString.split(":")[0], 10);
      const nyMinutes = parseInt(nyString.split(":")[1], 10);
      const timeInMins = nyHours * 60 + nyMinutes;

      if (timeInMins >= 120 && timeInMins < 300) {
        setCurrentSession({ name: "London Open (02:00-05:00)", active: true, color: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30" });
      } else if (timeInMins >= 420 && timeInMins < 600) {
        setCurrentSession({ name: "NY AM Killzone (07:00-10:00)", active: true, color: "text-amber-400 bg-amber-950/60 border-amber-500/30" });
      } else if (timeInMins >= 600 && timeInMins < 660) {
        setCurrentSession({ name: "NY Silver Bullet (10:00-11:00)", active: true, color: "text-cyan-300 bg-cyan-950/80 border-cyan-400/40 font-bold" });
      } else if (timeInMins >= 810 && timeInMins < 960) {
        setCurrentSession({ name: "NY PM Session (13:30-16:00)", active: true, color: "text-purple-400 bg-purple-950/60 border-purple-500/30" });
      } else if (timeInMins >= 1200 || timeInMins < 120) {
        setCurrentSession({ name: "Asian Session (20:00-00:00)", active: true, color: "text-blue-400 bg-blue-950/60 border-blue-500/30" });
      } else {
        setCurrentSession({ name: "Interbank Inactive", active: false, color: "text-slate-400 bg-slate-900/60 border-slate-700/40" });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "Curriculum", href: "/learn" },
    { label: "Practice Lab", href: "/practice" },
    { label: "Killzones & Macros", href: "/killzones" },
    { label: "Execution Checklist", href: "/checklist" },
    { label: "Lexicon", href: "/glossary" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#030712]/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand: Icon ONLY - strictly no text */}
        <Link href="/" className="flex items-center group" aria-label="ICT Core Home">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#0b1120] border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_22px_rgba(56,189,248,0.35)]">
            <div className="absolute inset-0 rounded-[14px] bg-gradient-to-tr from-cyan-500/20 via-transparent to-blue-500/20 pointer-events-none" />
            
            {/* 4-point star aperture */}
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" className="relative z-10 transition-transform duration-300 group-hover:rotate-12">
              <defs>
                <linearGradient id="navStarGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E0F2FE" />
                  <stop offset="50%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
              <path
                d="M16 3 C16 10 10 16 3 16 C10 16 16 22 16 29 C16 22 22 16 29 16 C22 16 16 10 16 3 Z"
                fill="url(#navStarGlow)"
              />
              <path
                d="M16 9 C16 13 13 16 9 16 C13 16 16 19 16 23 C16 19 19 16 23 16 C19 16 16 13 16 9 Z"
                fill="#030712"
              />
              <circle cx="16" cy="16" r="2.5" fill="#BAE6FD" />
            </svg>
          </div>
        </Link>

        {/* Center: Sleek frosted glass nav pill */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] backdrop-blur-md px-1.5 py-1 rounded-full border border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
          {navLinks.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-white/15 text-white font-semibold shadow-[0_0_12px_rgba(255,255,255,0.1)] border border-white/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Live NY Clock + Start Practice White Pill */}
        <div className="flex items-center gap-3">
          {/* NY EST Clock */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03]">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
            <span className="font-mono text-xs font-medium text-slate-300">
              {nyTime || "10:00:00"}{" "}
              <span className="text-[10px] text-slate-500 font-normal">NY EST</span>
            </span>
          </div>

          {/* Solid White Pill Button (NEONE style) */}
          <Link
            href="/practice"
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-xs font-semibold shadow-[0_0_20px_rgba(255,255,255,0.22)] transition-all hover:scale-102 hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]"
          >
            <span>Start Practice</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </header>
  );
}
