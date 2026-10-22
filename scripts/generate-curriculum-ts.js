// Generator script: Converts raw docs/ict markdown into clean TypeScript data modules
const fs = require("fs");
const path = require("path");

const { CURRICULUM_MODULES } = require("../src/lib/ict-content.ts");

// Function to map diagram type based on section title and codeblock content
function detectDiagram(sectionTitle, codeContent) {
  const text = (sectionTitle + " " + codeContent).toLowerCase();

  if (text.includes("optimal trade entry") || text.includes("ote") || text.includes("sweet spot") || text.includes("0.705")) {
    return {
      type: "ote-fibonacci",
      title: "Optimal Trade Entry (OTE) Fibonacci Calibration",
      caption: "The 0.705 ratio represents the institutional sweet spot nested inside the 0.618–0.790 discount retracement zone."
    };
  }

  if (text.includes("dealing range") || text.includes("premium vs. discount") || text.includes("equilibrium")) {
    return {
      type: "dealing-range",
      title: "Dealing Range Architecture & 50% Equilibrium",
      caption: "Institutions sell expensive in Premium (>50%) and buy cheap in Discount (<50%)."
    };
  }

  if (text.includes("trendline") || text.includes("retail view")) {
    return {
      type: "trendline-liquidity",
      title: "Engineered Retail Trendline Trap",
      caption: "Clustered retail sell-stops engineered beneath ascending trendlines are systematically purged by displacement."
    };
  }

  if (text.includes("liquidity pool") || text.includes("bsl") || text.includes("ssl") || text.includes("buy-side liquidity") || text.includes("sell-side liquidity")) {
    return {
      type: "liquidity-pool",
      title: "Buy-Side & Sell-Side Liquidity Sweeps",
      caption: "Wick sweep purging resting stops before violent displacement reversal."
    };
  }

  if (text.includes("market structure") || text.includes("bos") || text.includes("mss") || text.includes("swing high") || text.includes("swing low") || text.includes("displacement")) {
    return {
      type: "market-structure",
      title: "Market Structure: BOS vs. Market Structure Shift (MSS)",
      caption: "A true MSS requires full candle body closure beyond a significant swing point, confirming institutional order flow reversal."
    };
  }

  if (text.includes("smt divergence") || text.includes("crack in correlation") || text.includes("smt")) {
    return {
      type: "smt-divergence",
      title: "SMT Divergence: Intermarket Crack in Correlation",
      caption: "When correlated assets diverge at key swing extremes, smart money sponsorship is confirmed."
    };
  }

  if (text.includes("killzone") || text.includes("time map") || text.includes("time & price") || text.includes("24-hour")) {
    return {
      type: "killzones-timeline",
      title: "24-Hour New York Algorithmic Killzones Timeline",
      caption: "High-probability institutional execution windows scheduled by IPDA."
    };
  }

  if (text.includes("2022") || text.includes("mentorship model") || text.includes("execution blueprint")) {
    return {
      type: "ict-2022",
      title: "The ICT 2022 Model Execution Blueprint",
      caption: "The standard 5-step sequence: Liquidity Sweep ➔ Displacement ➔ MSS ➔ FVG Retracement ➔ Expansion."
    };
  }

  if (text.includes("power of 3") || text.includes("po3") || text.includes("amd") || text.includes("judas")) {
    return {
      type: "power-of-3",
      title: "Power of 3 (PO3): Accumulation, Manipulation & Distribution",
      caption: "Asian consolidation, London Judas swing below Midnight Open, and New York expansion."
    };
  }

  if (text.includes("breaker block") || text.includes("breaker") || text.includes("mitigation")) {
    return {
      type: "breaker-block",
      title: "Institutional Breaker Block Execution Anatomy",
      caption: "Failed order block that purged liquidity retested as high-conviction resistance."
    };
  }

  if (text.includes("order block") || text.includes("mean threshold") || text.includes("+ob") || text.includes("-ob")) {
    return {
      type: "order-block",
      title: "Bullish Order Block (+OB) & 50% Mean Threshold",
      caption: "Last down candle prior to upward displacement; candle bodies must respect 50% MT."
    };
  }

  if (text.includes("fair value gap") || text.includes("fvg") || text.includes("imbalance") || text.includes("bisi") || text.includes("sibi")) {
    return {
      type: "fvg",
      title: "Fair Value Gap (BISI/SIBI) 3-Candle Anatomy",
      caption: "Open void between Candle 1 and Candle 3 with 50% Consequent Encroachment (CE)."
    };
  }

  return null;
}

// Function to clean markdown inline formatting if needed
function cleanText(text) {
  return text.trim();
}

// Function to parse a markdown file into structured sections
function parseMarkdownToModule(m) {
  const fullPath = path.join(process.cwd(), "docs/ict", m.filePath);
  if (!fs.existsSync(fullPath)) {
    console.error("Missing file:", fullPath);
    return null;
  }

  const raw = fs.readFileSync(fullPath, "utf8");
  const lines = raw.split("\n");

  let subtitle = m.description || "";
  const rawSections = [];
  let currentSection = {
    id: "sec-0",
    title: "Introduction",
    paragraphs: [],
    bulletPoints: [],
    numberedSteps: [],
    callout: undefined,
    diagram: undefined,
    table: undefined,
  };

  let inCodeBlock = false;
  let codeBuffer = [];
  let inTable = false;
  let tableBuffer = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Code block boundaries
    if (trimmed.startsWith("```")) {
      if (inCodeBlock) {
        // Closing code block
        inCodeBlock = false;
        const codeText = codeBuffer.join("\n");
        codeBuffer = [];
        
        // Detect if this is a diagram
        const diagram = detectDiagram(currentSection.title, codeText);
        if (diagram) {
          currentSection.diagram = diagram;
        } else {
          // Clean text parameters
          const cleanLines = codeText
            .split("\n")
            .map(l => l.trim())
            .filter(l => l.length > 0 && !l.includes("===") && !l.includes("───") && !l.includes("┌──") && !l.includes("│") && !l.includes("▼") && !l.includes("▲"));
          if (cleanLines.length > 0) {
            currentSection.paragraphs.push(cleanLines.join(" "));
          }
        }
      } else {
        inCodeBlock = true;
        codeBuffer = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // Markdown Table boundaries
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      inTable = true;
      tableBuffer.push(trimmed);
      continue;
    } else if (inTable) {
      inTable = false;
      if (tableBuffer.length >= 2) {
        const headers = tableBuffer[0].slice(1, -1).split("|").map(s => s.trim());
        const rows = tableBuffer.slice(2).map(r => r.slice(1, -1).split("|").map(s => s.trim()));
        currentSection.table = { headers, rows };
      }
      tableBuffer = [];
    }

    // Skip top titles
    if (trimmed.startsWith("# ")) {
      continue;
    }
    if (trimmed.startsWith("## ")) {
      const sub = trimmed.replace(/^##\s+/, "").replace(/^Module \d+:\s*/, "");
      if (!subtitle || subtitle === m.description) {
        subtitle = sub;
      }
      continue;
    }

    // Section Header (###)
    if (trimmed.startsWith("### ")) {
      // Save previous section if it has meaningful content
      const hasContent =
        currentSection.paragraphs.length > 0 ||
        currentSection.bulletPoints.length > 0 ||
        currentSection.numberedSteps.length > 0 ||
        currentSection.diagram ||
        currentSection.table;

      // Filter out empty preamble sections
      const isUselessPreamble =
        currentSection.id === "sec-0" &&
        currentSection.paragraphs.length <= 1 &&
        currentSection.bulletPoints.length === 0 &&
        currentSection.numberedSteps.length === 0 &&
        !currentSection.diagram &&
        !currentSection.table;

      if (hasContent && !isUselessPreamble) {
        rawSections.push(currentSection);
      }

      const secTitle = trimmed.replace(/^###\s+/, "").replace(/^\d+\.\s*/, "");
      currentSection = {
        id: `sec-${rawSections.length + 1}`,
        title: secTitle,
        paragraphs: [],
        bulletPoints: [],
        numberedSteps: [],
        callout: undefined,
        diagram: undefined,
        table: undefined,
      };
      continue;
    }

    // Callout quote: > ...
    if (trimmed.startsWith(">")) {
      const calloutText = trimmed.replace(/^>\s*/, "").replace(/\*\*/g, "");
      let type = "institutional";
      if (calloutText.toLowerCase().includes("rule") || calloutText.toLowerCase().includes("must")) {
        type = "rule";
      } else if (calloutText.toLowerCase().includes("warn") || calloutText.toLowerCase().includes("danger") || calloutText.toLowerCase().includes("never")) {
        type = "warning";
      } else if (calloutText.toLowerCase().includes("tip") || calloutText.toLowerCase().includes("note")) {
        type = "tip";
      }
      currentSection.callout = {
        type,
        title: type.toUpperCase() + " SPECIFICATION",
        text: calloutText,
      };
      continue;
    }

    // Bullet points: - or *
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const bp = trimmed.replace(/^[-*]\s+/, "");
      currentSection.bulletPoints.push(bp);
      continue;
    }

    // Numbered steps: 1. , 2. , etc.
    if (/^\d+\.\s+/.test(trimmed)) {
      const step = trimmed.replace(/^\d+\.\s+/, "");
      currentSection.numberedSteps.push(step);
      continue;
    }

    // Divider: ---
    if (trimmed === "---" || trimmed === "***") {
      continue;
    }

    // Regular paragraph text
    if (trimmed.length > 0 && !trimmed.startsWith("####")) {
      currentSection.paragraphs.push(cleanText(trimmed));
    }
  }

  // Final section push
  const hasContent =
    currentSection.paragraphs.length > 0 ||
    currentSection.bulletPoints.length > 0 ||
    currentSection.numberedSteps.length > 0 ||
    currentSection.diagram ||
    currentSection.table;

  const isUselessPreamble =
    currentSection.id === "sec-0" &&
    currentSection.paragraphs.length <= 1 &&
    currentSection.bulletPoints.length === 0 &&
    currentSection.numberedSteps.length === 0 &&
    !currentSection.diagram &&
    !currentSection.table;

  if (hasContent && !isUselessPreamble) {
    rawSections.push(currentSection);
  }

  // Ensure primary diagrams for key topics if not attached yet
  rawSections.forEach(sec => {
    if (!sec.diagram) {
      const t = sec.title.toLowerCase();
      if (t.includes("optimal trade entry") || t.includes("ote")) {
        sec.diagram = {
          type: "ote-fibonacci",
          title: "Optimal Trade Entry (OTE) Fibonacci Calibration",
          caption: "Institutional sweet spot at 0.705 ratio within the 62%-79% retracement bracket."
        };
      } else if (t.includes("dealing range") || t.includes("premium vs. discount")) {
        sec.diagram = {
          type: "dealing-range",
          title: "Dealing Range Architecture & 50% Equilibrium",
          caption: "Premium (>50%) wholesale selling vs Discount (<50%) wholesale buying."
        };
      } else if (t.includes("trendline")) {
        sec.diagram = {
          type: "trendline-liquidity",
          title: "Engineered Retail Trendline Trap",
          caption: "Purging clustered retail stop losses beneath artificial support."
        };
      } else if (t.includes("liquidity pool") || t.includes("buy-side liquidity") || t.includes("sell-side liquidity")) {
        sec.diagram = {
          type: "liquidity-pool",
          title: "Buy-Side & Sell-Side Liquidity Sweeps",
          caption: "Liquidity harvesting above and below range extremes."
        };
      } else if (t.includes("market structure shift") || t.includes("bos vs")) {
        sec.diagram = {
          type: "market-structure",
          title: "Market Structure: BOS vs. Market Structure Shift (MSS)",
          caption: "Full candle body close validation of institutional order flow change."
        };
      } else if (t.includes("smt divergence")) {
        sec.diagram = {
          type: "smt-divergence",
          title: "SMT Divergence: Intermarket Crack in Correlation",
          caption: "Correlated asset divergence at key highs/lows confirming institutional intent."
        };
      } else if (t.includes("killzone") || t.includes("time & price")) {
        sec.diagram = {
          type: "killzones-timeline",
          title: "24-Hour New York Algorithmic Killzones Timeline",
          caption: "Scheduled institutional delivery windows across the 24-hour cycle."
        };
      } else if (t.includes("2022") || t.includes("mentorship model")) {
        sec.diagram = {
          type: "ict-2022",
          title: "The ICT 2022 Model Execution Blueprint",
          caption: "Complete 5-step institutional trading sequence."
        };
      } else if (t.includes("power of 3") || t.includes("po3") || t.includes("amd")) {
        sec.diagram = {
          type: "power-of-3",
          title: "Power of 3 (PO3): Accumulation, Manipulation & Distribution",
          caption: "Daily candle anatomy engineered via the Asian, London, and NY sessions."
        };
      } else if (t.includes("breaker block") || t.includes("breaker vs")) {
        sec.diagram = {
          type: "breaker-block",
          title: "Institutional Breaker Block Execution Anatomy",
          caption: "Old swing low acting as resistance after liquidity sweep and MSS."
        };
      } else if (t.includes("order block") && (t.includes("mean threshold") || t.includes("anatomy"))) {
        sec.diagram = {
          type: "order-block",
          title: "Bullish Order Block (+OB) & 50% Mean Threshold",
          caption: "50% Mean Threshold must be respected by candle body closes."
        };
      } else if (t.includes("fair value gap") && (t.includes("anatomy") || t.includes("bisi"))) {
        sec.diagram = {
          type: "fvg",
          title: "Fair Value Gap (BISI/SIBI) 3-Candle Anatomy",
          caption: "3-candle displacement void and 50% Consequent Encroachment."
        };
      }
    }
  });

  return {
    slug: m.slug,
    level: m.level,
    title: m.title,
    subtitle: subtitle || m.description,
    sections: rawSections,
  };
}

// Group modules by level and write clean TS files
const levels = ["overview", "foundations", "intermediate", "advanced", "execution-models", "practice"];

const modulesByLevel = {};
levels.forEach(lvl => {
  modulesByLevel[lvl] = [];
});

CURRICULUM_MODULES.forEach(m => {
  const parsed = parseMarkdownToModule(m);
  if (parsed) {
    modulesByLevel[m.level].push(parsed);
  }
});

// Output files
const levelFilenames = {
  "overview": "overview.ts",
  "foundations": "foundations.ts",
  "intermediate": "intermediate.ts",
  "advanced": "advanced.ts",
  "execution-models": "executionModels.ts",
  "practice": "practice.ts",
};

Object.entries(modulesByLevel).forEach(([level, mods]) => {
  const fileName = levelFilenames[level];
  const filePath = path.join(process.cwd(), "src/data/curriculum", fileName);
  
  const content = `// Hardcoded TypeScript Curriculum Module: ${level.toUpperCase()}
// Zero markdown reading, zero raw ASCII art, native responsive vector schematics

import { ModuleContent } from "./types";

export const ${level.replace(/-/g, "_").toUpperCase()}_MODULES: Record<string, ModuleContent> = ${JSON.stringify(
    mods.reduce((acc, cur) => {
      acc[cur.slug] = cur;
      return acc;
    }, {}),
    null,
    2
  )};
`;

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Generated: ${fileName} with ${mods.length} modules.`);
});

// Generate index.ts
const indexContent = `// Master Curriculum Registry - Hardcoded TypeScript Content Layer
// Completely eliminates fs.readFileSync and raw markdown rendering across all 24 modules

import { ModuleContent } from "./types";
import { OVERVIEW_MODULES } from "./overview";
import { FOUNDATIONS_MODULES } from "./foundations";
import { INTERMEDIATE_MODULES } from "./intermediate";
import { ADVANCED_MODULES } from "./advanced";
import { EXECUTION_MODELS_MODULES } from "./executionModels";
import { PRACTICE_MODULES } from "./practice";

export * from "./types";

export const ALL_CURRICULUM_CONTENT: Record<string, ModuleContent> = {
  ...OVERVIEW_MODULES,
  ...FOUNDATIONS_MODULES,
  ...INTERMEDIATE_MODULES,
  ...ADVANCED_MODULES,
  ...EXECUTION_MODELS_MODULES,
  ...PRACTICE_MODULES,
};

export function getCurriculumContent(level: string, slug: string): ModuleContent | null {
  const module = ALL_CURRICULUM_CONTENT[slug];
  if (!module) return null;
  return module;
}
`;

fs.writeFileSync(path.join(process.cwd(), "src/data/curriculum/index.ts"), indexContent, "utf8");
console.log("Generated: index.ts");
