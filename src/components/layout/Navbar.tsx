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
  }>({ name: "Off Hours", active: false });

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
        setCurrentSession({ name: "London Open", active: true });
      } else if (timeInMins >= 420 && timeInMins < 600) {
        setCurrentSession({ name: "NY AM Killzone", active: true });
      } else if (timeInMins >= 600 && timeInMins < 660) {
        setCurrentSession({ name: "NY Silver Bullet", active: true });
      } else if (timeInMins >= 810 && timeInMins < 960) {
        setCurrentSession({ name: "NY PM Session", active: true });
      } else if (timeInMins >= 1200 || timeInMins < 120) {
        setCurrentSession({ name: "Asian Session", active: true });
      } else {
        setCurrentSession({ name: "Interbank Inactive", active: false });
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
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0c0d0f]/85 backdrop-blur-md text-white transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand: Icon ONLY - strictly no text */}
        <Link href="/" className="flex items-center group" aria-label="ICT Core Home">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.12] shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:border-amber-400/40 group-hover:bg-white/[0.1]">
            <span className="text-white text-xs font-bold transition-transform duration-300 group-hover:rotate-12">✦</span>
          </div>
        </Link>

        {/* Center: Clean Minimal Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md p-1 rounded-full border border-white/[0.08]">
          {navLinks.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-white/[0.12] text-white font-semibold"
                    : "text-white/60 hover:text-white hover:bg-white/[0.06]"
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
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs font-medium text-white/80">
              {nyTime || "10:00:00"}{" "}
              <span className="text-[10px] text-white/40 font-normal">NY EST</span>
            </span>
          </div>

          {/* Practice CTA */}
          <Link
            href="/practice"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-white/90 text-stone-950 text-xs font-semibold shadow-sm transition-all hover:scale-102"
          >
            <span>Start Practice</span>
          </Link>
        </div>

      </div>
    </header>
  );
}
