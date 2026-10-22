"use client";

import React from "react";
import { ModuleSection } from "@/data/curriculum/types";
import IctDiagram from "./IctVectorDiagrams";
import {
  ShieldAlert,
  CheckCircle2,
  Lightbulb,
  Cpu,
  Bookmark,
  Check,
  Flame,
} from "lucide-react";

interface CurriculumSectionRendererProps {
  section: ModuleSection;
  index: number;
}

// Inline text formatter for bold, code, and keywords
function formatInlineText(text: string): React.ReactNode {
  // If text contains markdown bold **text** or `code`
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold: **text**
    const boldMatch = remaining.match(/^\*\*(.*?)\*\*/);
    if (boldMatch) {
      parts.push(
        <strong key={key++} className="font-bold text-zinc-900">
          {boldMatch[1]}
        </strong>
      );
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    // Code: `code`
    const codeMatch = remaining.match(/^`(.*?)`/);
    if (codeMatch) {
      parts.push(
        <code
          key={key++}
          className="rounded-md bg-zinc-100 border border-zinc-200/80 px-1.5 py-0.5 font-mono text-xs text-zinc-800 font-semibold"
        >
          {codeMatch[1]}
        </code>
      );
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }

    // Search for next special symbol
    const nextSpecial = remaining.search(/[\*`]/);
    if (nextSpecial === -1) {
      parts.push(remaining);
      break;
    } else if (nextSpecial === 0) {
      parts.push(remaining[0]);
      remaining = remaining.slice(1);
    } else {
      parts.push(remaining.slice(0, nextSpecial));
      remaining = remaining.slice(nextSpecial);
    }
  }

  return parts;
}

export default function CurriculumSectionRenderer({
  section,
  index,
}: CurriculumSectionRendererProps) {
  return (
    <section className="space-y-6 pt-4 pb-2 border-b border-zinc-100 last:border-b-0">
      {/* Section Header */}
      {section.title && section.title !== "Overview" && section.title !== "Introduction" && (
        <div className="flex items-center gap-3 pt-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-white font-mono text-xs font-bold">
            {index + 1}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
            {section.title}
          </h2>
        </div>
      )}

      {/* Paragraphs */}
      {section.paragraphs && section.paragraphs.length > 0 && (
        <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-zinc-700 font-sans">
          {section.paragraphs.map((p, pIdx) => {
            // Check if this is a math block
            if (p.startsWith("$$") && p.endsWith("$$")) {
              return (
                <div
                  key={pIdx}
                  className="my-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 font-mono text-xs sm:text-sm text-zinc-900 overflow-x-auto text-center"
                >
                  {p.replace(/\$\$/g, "")}
                </div>
              );
            }
            return <p key={pIdx}>{formatInlineText(p)}</p>;
          })}
        </div>
      )}

      {/* Callout Box */}
      {section.callout && (
        <div
          className={`rounded-xl border p-4 sm:p-5 my-4 ${
            section.callout.type === "warning"
              ? "bg-rose-50/70 border-rose-200 text-rose-900"
              : section.callout.type === "rule"
              ? "bg-amber-50/70 border-amber-200 text-amber-900"
              : section.callout.type === "tip"
              ? "bg-purple-50/70 border-purple-200 text-purple-900"
              : "bg-blue-50/70 border-blue-200 text-blue-900"
          }`}
        >
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold uppercase tracking-wider">
            {section.callout.type === "warning" && <ShieldAlert className="h-4 w-4 text-rose-600" />}
            {section.callout.type === "rule" && <Flame className="h-4 w-4 text-amber-600" />}
            {section.callout.type === "tip" && <Lightbulb className="h-4 w-4 text-purple-600" />}
            {section.callout.type === "institutional" && <Cpu className="h-4 w-4 text-blue-600" />}
            <span>{section.callout.title}</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed font-medium">
            {formatInlineText(section.callout.text)}
          </p>
        </div>
      )}

      {/* High-Precision Vector SVG Diagram */}
      {section.diagram && (
        <div className="my-6">
          <IctDiagram
            type={section.diagram.type}
            title={section.diagram.title}
            caption={section.diagram.caption}
          />
        </div>
      )}

      {/* Numbered Execution Steps */}
      {section.numberedSteps && section.numberedSteps.length > 0 && (
        <div className="my-5 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold font-mono text-zinc-700 uppercase tracking-wider pb-2 border-b border-zinc-100">
            <Bookmark className="h-3.5 w-3.5 text-amber-500" />
            <span>Execution Protocol & Sequential Steps</span>
          </div>
          <ol className="space-y-3 pt-1">
            {section.numberedSteps.map((step, sIdx) => (
              <li key={sIdx} className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-900 font-mono text-xs font-bold mt-0.5">
                  {sIdx + 1}
                </span>
                <span className="text-sm sm:text-base text-zinc-700 leading-relaxed font-sans">
                  {formatInlineText(step)}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Bullet Points */}
      {section.bulletPoints && section.bulletPoints.length > 0 && (
        <div className="my-4 space-y-2.5">
          {section.bulletPoints.map((bp, bIdx) => (
            <div key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-700">
              <span className="text-amber-500 font-bold text-base leading-none mt-1">•</span>
              <div className="leading-relaxed font-sans">{formatInlineText(bp)}</div>
            </div>
          ))}
        </div>
      )}

      {/* Data Table */}
      {section.table && section.table.rows && section.table.rows.length > 0 && (
        <div className="my-6 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-zinc-200 bg-zinc-50 font-mono text-xs uppercase tracking-wider text-zinc-700">
                <tr>
                  {section.table.headers.map((h, hIdx) => (
                    <th key={hIdx} className="px-4 py-3 font-bold">
                      {formatInlineText(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-700">
                {section.table.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-zinc-50/70 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 text-xs sm:text-sm">
                        {formatInlineText(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
