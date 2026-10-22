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
  }>({ name: "Off Hours", active: false, color: "text-zinc-400" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // NY Time formatter
      const nyString = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setNyTime(nyString);

      // Current hour/min in NY
      const nyHours = parseInt(nyString.split(":")[0], 10);
      const nyMinutes = parseInt(nyString.split(":")[1], 10);
      const timeInMins = nyHours * 60 + nyMinutes;

      // Killzones in NY EST
      if (timeInMins >= 120 && timeInMins < 300) {
        setCurrentSession({ name: "London Open (02:00-05:00)", active: true, color: "text-emerald-600 bg-emerald-50 border-emerald-200" });
      } else if (timeInMins >= 420 && timeInMins < 600) {
        setCurrentSession({ name: "NY AM Killzone (07:00-10:00)", active: true, color: "text-amber-600 bg-amber-50 border-amber-200" });
      } else if (timeInMins >= 600 && timeInMins < 660) {
        setCurrentSession({ name: "NY Silver Bullet (10:00-11:00)", active: true, color: "text-blue-600 bg-blue-50 border-blue-200" });
      } else if (timeInMins >= 810 && timeInMins < 960) {
        setCurrentSession({ name: "NY PM Session (13:30-16:00)", active: true, color: "text-purple-600 bg-purple-50 border-purple-200" });
      } else if (timeInMins >= 1200 || timeInMins < 120) {
        setCurrentSession({ name: "Asian Session (20:00-00:00)", active: true, color: "text-indigo-600 bg-indigo-50 border-indigo-200" });
      } else {
        setCurrentSession({ name: "Interbank Inactive", active: false, color: "text-zinc-500 bg-zinc-100 border-zinc-200" });
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
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm transition-transform group-hover:scale-105">
            {/* Geometric aperture icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="#F59E0B" strokeWidth="1.75" strokeDasharray="3 3" />
              <line x1="12" y1="4" x2="12" y2="20" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
              <rect x="9" y="8" width="6" height="8" rx="1.5" fill="#10B981" />
              <circle cx="12" cy="12" r="2.5" fill="#F59E0B" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-bold tracking-tight text-zinc-900">
              ICT CORE
            </span>
            <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase -mt-0.5">
              IPDA System
            </span>
          </div>
        </Link>

        {/* Center: Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/70 p-1 rounded-full border border-zinc-200/60">
          {navLinks.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-white text-zinc-900 shadow-sm font-semibold"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-white/50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Live NY Clock + CTA */}
        <div className="flex items-center gap-3">
          {/* NY EST Clock */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-zinc-50/80">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-semibold text-zinc-800">
              {nyTime || "10:00:00"} <span className="text-[10px] text-zinc-400 font-normal">NY EST</span>
            </span>
          </div>

          {/* Quick Start Button */}
          <Link
            href="/practice"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold shadow-sm transition-all hover:shadow"
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
