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
        setCurrentSession({ name: "London Open (02:00-05:00)", active: true, color: "text-emerald-700 bg-emerald-50 border-emerald-200" });
      } else if (timeInMins >= 420 && timeInMins < 600) {
        setCurrentSession({ name: "NY AM Killzone (07:00-10:00)", active: true, color: "text-amber-700 bg-amber-50 border-amber-200" });
      } else if (timeInMins >= 600 && timeInMins < 660) {
        setCurrentSession({ name: "NY Silver Bullet (10:00-11:00)", active: true, color: "text-amber-800 bg-amber-100 border-amber-300 font-bold" });
      } else if (timeInMins >= 810 && timeInMins < 960) {
        setCurrentSession({ name: "NY PM Session (13:30-16:00)", active: true, color: "text-purple-700 bg-purple-50 border-purple-200" });
      } else if (timeInMins >= 1200 || timeInMins < 120) {
        setCurrentSession({ name: "Asian Session (20:00-00:00)", active: true, color: "text-indigo-700 bg-indigo-50 border-indigo-200" });
      } else {
        setCurrentSession({ name: "Interbank Inactive", active: false, color: "text-stone-500 bg-stone-100 border-stone-200" });
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
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-[#FAF8F5]/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand: Icon only with high-craft architectural emblem */}
        <Link href="/" className="flex items-center group" aria-label="ICT Core Home">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#121316] border border-amber-500/20 shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-200 group-hover:scale-105 group-hover:border-amber-500/40 group-hover:shadow-[0_4px_16px_rgba(245,158,11,0.15)]">
            {/* Subtle inner radial warmth */}
            <div className="absolute inset-0 rounded-[14px] bg-gradient-to-tr from-amber-500/10 via-transparent to-orange-500/15 pointer-events-none" />
            
            {/* Architectural 8-point geometric aperture */}
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" className="relative z-10 transition-transform duration-300 group-hover:rotate-12">
              <defs>
                <linearGradient id="navGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDE68A" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
              </defs>
              {/* Primary 4-point astroid */}
              <path
                d="M16 3 C16 10 10 16 3 16 C10 16 16 22 16 29 C16 22 22 16 29 16 C22 16 16 10 16 3 Z"
                fill="url(#navGold)"
              />
              {/* Secondary diagonal diamond overlay */}
              <path
                d="M16 8 C16 12.5 12.5 16 8 16 C12.5 16 16 19.5 16 24 C16 19.5 19.5 16 24 16 C19.5 16 16 12.5 16 8 Z"
                fill="#121316"
              />
              {/* Inner core diamond */}
              <path
                d="M16 13 L19 16 L16 19 L13 16 Z"
                fill="url(#navGold)"
              />
            </svg>
          </div>
        </Link>

        {/* Center: Frosted Glass Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md p-1 rounded-full border border-stone-200/80 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)]">
          {navLinks.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#121316] text-white shadow-sm font-semibold"
                    : "text-stone-600 hover:text-stone-950 hover:bg-stone-100/60"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Live NY Clock + Start Practice Button */}
        <div className="flex items-center gap-3">
          {/* NY EST Clock */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 bg-white/80 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-semibold text-stone-800">
              {nyTime || "10:00:00"}{" "}
              <span className="text-[10px] text-stone-400 font-normal">NY EST</span>
            </span>
          </div>

          {/* Catalist style pill button */}
          <Link
            href="/practice"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#121316] hover:bg-stone-800 text-white text-xs font-semibold shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
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
