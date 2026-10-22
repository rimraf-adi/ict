"use client";

import React from "react";
import IctCandleGraphic, { DiagramType } from "./IctCandleGraphic";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];

  let i = 0;
  let keyIndex = 0;

  while (i < lines.length) {
    const line = lines[i];

    // 1. Blueprint Diagrams / Schematics (```)
    if (line.trim().startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```

      const codeString = codeLines.join("\n");
      elements.push(
        <SchematicBlock key={`schematic-${keyIndex++}`} content={codeString} />
      );
      continue;
    }

    // 2. Horizontal divider
    if (line.trim() === "---" || line.trim() === "***") {
      elements.push(
        <hr
          key={`hr-${keyIndex++}`}
          className="my-10 border-t border-zinc-200"
        />
      );
      i++;
      continue;
    }

    // 3. Headings
    if (line.startsWith("# ")) {
      elements.push(
        <h1
          key={`h1-${keyIndex++}`}
          className="mt-12 mb-5 text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight leading-tight"
        >
          {renderInline(line.slice(2))}
        </h1>
      );
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${keyIndex++}`}
          className="mt-10 mb-4 text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-3"
        >
          {renderInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${keyIndex++}`}
          className="mt-8 mb-3 text-lg font-bold text-zinc-800 tracking-tight"
        >
          {renderInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith("#### ")) {
      elements.push(
        <h4
          key={`h4-${keyIndex++}`}
          className="mt-6 mb-2 text-sm font-bold text-zinc-700 uppercase tracking-wider font-mono"
        >
          {renderInline(line.slice(5))}
        </h4>
      );
      i++;
      continue;
    }

    // 4. Blockquotes / Key Callouts
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [line.slice(2)];
      i++;
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <div
          key={`quote-${keyIndex++}`}
          className="my-6 rounded-xl border-l-4 border-amber-500 bg-amber-50/70 p-4 text-zinc-800 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-wider font-mono">
              Key Rule / Takeaway
            </span>
          </div>
          <div className="text-sm leading-relaxed">
            {quoteLines.map((ql, qIdx) => (
              <p key={qIdx} className={qIdx > 0 ? "mt-2" : ""}>
                {renderInline(ql)}
              </p>
            ))}
          </div>
        </div>
      );
      continue;
    }

    // 5. Unordered List Items (- or *)
    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      const listItems: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))
      ) {
        listItems.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${keyIndex++}`} className="my-4 space-y-2.5 pl-2">
          {listItems.map((item, itemIdx) => (
            <li
              key={itemIdx}
              className="flex items-start text-sm leading-relaxed text-zinc-700"
            >
              <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // 6. Ordered List Items (1. )
    if (/^\s*\d+\.\s/.test(line)) {
      const listItems: { num: string; text: string }[] = [];
      while (i < lines.length && /^\s*\d+\.\s/.test(lines[i])) {
        const match = lines[i].match(/^\s*(\d+)\.\s+(.*)$/);
        if (match) {
          listItems.push({ num: match[1], text: match[2] });
        }
        i++;
      }
      elements.push(
        <ol key={`ol-${keyIndex++}`} className="my-4 space-y-3 pl-2">
          {listItems.map((item, itemIdx) => (
            <li
              key={itemIdx}
              className="flex items-start text-sm leading-relaxed text-zinc-700"
            >
              <span className="mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 font-mono text-xs font-semibold text-zinc-800">
                {item.num}
              </span>
              <span className="pt-0.5">{renderInline(item.text)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // 7. Markdown Tables
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      const tableLines: string[] = [];
      while (
        i < lines.length &&
        lines[i].trim().startsWith("|") &&
        lines[i].trim().endsWith("|")
      ) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        const headerCells = tableLines[0]
          .slice(1, -1)
          .split("|")
          .map((c) => c.trim());
        const dataRows = tableLines.slice(2).map((row) =>
          row
            .slice(1, -1)
            .split("|")
            .map((c) => c.trim())
        );

        elements.push(
          <div
            key={`table-${keyIndex++}`}
            className="my-6 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-zinc-200 bg-zinc-50 font-mono text-xs uppercase tracking-wider text-zinc-700">
                  <tr>
                    {headerCells.map((hc, hIdx) => (
                      <th key={hIdx} className="px-4 py-3 font-semibold">
                        {renderInline(hc)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-zinc-700">
                  {dataRows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-zinc-50/60 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3">
                          {renderInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
        continue;
      }
    }

    // 8. Regular Paragraphs
    if (line.trim().length > 0) {
      elements.push(
        <p
          key={`p-${keyIndex++}`}
          className="my-3 text-sm sm:text-base leading-relaxed text-zinc-700 font-sans"
        >
          {renderInline(line)}
        </p>
      );
    }

    i++;
  }

  return <div className="space-y-1">{elements}</div>;
}

// Inline renderer for bold, italic, code, and links
function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold: **text**
    const boldMatch = remaining.match(/^(\*\*|__)(.*?)\1/);
    if (boldMatch) {
      parts.push(
        <strong key={key++} className="font-semibold text-zinc-900">
          {boldMatch[2]}
        </strong>
      );
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    // Italic: *text* or _text_
    const italicMatch = remaining.match(/^(\*|_)(.*?)\1/);
    if (italicMatch && !italicMatch[2].startsWith("*")) {
      parts.push(
        <em key={key++} className="italic text-zinc-800">
          {italicMatch[2]}
        </em>
      );
      remaining = remaining.slice(italicMatch[0].length);
      continue;
    }

    // Inline Code: `code`
    const codeMatch = remaining.match(/^`([^`]+)`/);
    if (codeMatch) {
      parts.push(
        <code
          key={key++}
          className="rounded-md bg-zinc-100 border border-zinc-200 px-1.5 py-0.5 font-mono text-xs text-zinc-800 font-medium"
        >
          {codeMatch[1]}
        </code>
      );
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }

    // Links: [label](url)
    const linkMatch = remaining.match(/^\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      const isInternal = linkMatch[2].startsWith("/") || linkMatch[2].startsWith("#");
      parts.push(
        <a
          key={key++}
          href={linkMatch[2]}
          className="text-amber-600 hover:text-amber-700 underline font-medium transition-colors"
          target={isInternal ? undefined : "_blank"}
          rel={isInternal ? undefined : "noreferrer"}
        >
          {linkMatch[1]}
        </a>
      );
      remaining = remaining.slice(linkMatch[0].length);
      continue;
    }

    const nextSpecial = remaining.search(/[\*_`\[]/);
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

// Smart Diagram & Schematic Block: Renders high-precision vector SVG graphics instead of ugly ASCII
function SchematicBlock({ content }: { content: string }) {
  const lower = content.toLowerCase();

  // Detect whether this is a candlestick schematic
  const isAsciiCandle =
    content.includes("|") &&
    (content.includes("/") || content.includes("\\") || content.includes("===") || content.includes("---"));

  let diagramType: DiagramType = "bullish-fvg";
  let title = "Fair Value Gap (BISI) Anatomy";
  let caption = "Candle 2 creates violent displacement. The imbalance is the open void between Candle 1 High and Candle 3 Low.";

  if (lower.includes("inversion") || lower.includes("ifvg")) {
    diagramType = "inversion-fvg";
    title = "Inversion Fair Value Gap (IFVG) Reversal Schematic";
    caption = "A failed Fair Value Gap is aggressively blown through, converting into dynamic support/resistance when retested.";
  } else if (lower.includes("order block") || lower.includes("ob")) {
    diagramType = "bullish-order-block";
    title = "Institutional Order Block (+OB) & Mean Threshold (50%)";
    caption = "The highest down candle before impulsive upside displacement. Candle bodies must close above Mean Threshold to validate institutional sponsorship.";
  } else if (lower.includes("breaker")) {
    diagramType = "bearish-breaker";
    title = "Institutional Breaker Block Execution Schematic";
    caption = "Liquidity purge to a higher high, followed by aggressive market structure shift lower. Old swing low acts as high-probability resistance.";
  } else if (lower.includes("power of 3") || lower.includes("po3") || lower.includes("amd") || lower.includes("judas")) {
    diagramType = "power-of-3";
    title = "Power of 3 (PO3): Accumulation, Manipulation & Distribution";
    caption = "Asian consolidation, London Judas swing manipulation below Midnight Open, and NY session expansion into daily liquidity targets.";
  } else if (lower.includes("volume imbalance") || lower.includes("vi")) {
    diagramType = "volume-imbalance";
    title = "Volume Imbalance (VI) Structural Anatomy";
    caption = "A gap occurring between two consecutive candle bodies where only wicks overlap, representing sudden algorithmic repricing.";
  } else if (lower.includes("bearish fvg") || lower.includes("sibi")) {
    diagramType = "bullish-fvg";
    title = "Sell-Side Imbalance, Buy-Side Inefficiency (SIBI)";
    caption = "Downward displacement creating imbalance between Candle 1 Low and Candle 3 High.";
  }

  // If it's an ASCII diagram, render our high-precision SVG graphic!
  if (isAsciiCandle || lower.includes("fvg") || lower.includes("breaker") || lower.includes("order block") || lower.includes("schematic")) {
    return <IctCandleGraphic type={diagramType} title={title} caption={caption} />;
  }

  // For non-ASCII technical code or math formulas, render a crisp modern parameters card
  return (
    <div className="my-6 rounded-xl border border-zinc-200/90 bg-zinc-50 p-4 shadow-sm">
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-zinc-200/60">
        <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-zinc-600">
          Model Specifications
        </span>
      </div>
      <div className="p-3 bg-white rounded-lg border border-zinc-200/60 font-mono text-xs text-zinc-800 overflow-x-auto leading-relaxed">
        <pre>{content}</pre>
      </div>
    </div>
  );
}
