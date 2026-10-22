# ICT Core — Interactive Tutorial Platform for Inner Circle Trader

> An institutional-grade, interactive learning platform designed for traders to master Inner Circle Trader (ICT) price action concepts through structured tutorials, high-precision vector schematics, interactive market drills, and pre-trade execution governance.

---

## ✦ Overview

**ICT Core** bridges the gap between theoretical price action literature and real-world algorithmic execution. Instead of static text or raw ASCII diagrams, traders learn price delivery mechanics through:

- **24 Step-by-Step Curriculum Tutorials**: Structured across Foundations, Intermediate, Advanced, Execution Models, and Practice.
- **High-Precision Vector SVG Schematics**: Type-safe vector diagrams detailing Fair Value Gaps, the 0.705 OTE Sweet Spot, SMT Divergence, and Market Structure Shifts.
- **Interactive Candlestick Practice Lab**: Hands-on playback simulator stepping through authentic historical setups (EUR/USD London Judas Swing, NQ 10:00 AM Silver Bullet, ES/NQ SMT Divergence, Unicorn Setup).
- **Live 24-Hour Session Engine**: Real-time New York EST tracking of London Open (02:00–05:00), NY AM (07:00–10:00), NY Silver Bullet (10:00–11:00), and NY PM (13:30–16:00).
- **6-Gate Pre-Flight Verification**: Zero-discretion quantitative checklist eliminating emotional FOMO execution.
- **71-Term Technical Lexicon**: Filterable and searchable dictionary of institutional order flow terminology.

---

## ✦ Key Features

### 1. Hardcoded TypeScript Curriculum
All 24 learning modules are strongly typed in TypeScript (`src/data/curriculum/`) with structured sections, execution steps, institutional callouts, and interactive vector diagrams—eliminating runtime markdown parsing quirks and raw ASCII art.

- **Stage 01: Foundations** — Smart Money & IPDA, Fractal Market Structure (BOS vs. MSS), Liquidity Pools (BSL/SSL), and Fair Value Gaps (BISI/SIBI).
- **Stage 02: Intermediate** — Institutional Order Blocks & 50% Mean Threshold, Dealing Ranges & Optimal Trade Entry (OTE), Breaker & Mitigation Blocks, Time & Price Killzones.
- **Stage 03: Advanced** — Power of 3 (PO3 / AMD), Cross-Asset SMT Divergence, Advanced PD Arrays, Market Maker Models (MMXM), IPDA 20/40/60 Lookback Ranges, COT & Intermarket Macro, Tape Reading.
- **Stage 04: Execution Models** — ICT 2022 Mentorship Model, NY Silver Bullet Strategy, Turtle Soup Purge Model, Daily & Weekly Profiles.
- **Stage 05: Practice & Governance** — Chart Scenarios, Case Studies, and Pre-Trade Rules.

### 2. High-Precision Vector SVG Schematics
Every key concept includes a bespoke, responsive vector diagram (`src/components/learn/IctVectorDiagrams.tsx`):
- **Optimal Trade Entry (OTE)**: Complete Fibonacci ladder highlighting the **0.705 Institutional Sweet Spot**, 0.618/0.790 boundaries, 50% Equilibrium, and expansion targets (-0.270, -0.620) with dynamic retracement trajectory.
- **Dealing Range Architecture**: Visual split of Premium (>50%, short supply) vs. Discount (<50%, wholesale accumulation) anchored to the 50% Equilibrium midpoint.
- **Liquidity Sweeps & Purges**: Buy-Side Liquidity (BSL) and Sell-Side Liquidity (SSL) resting pools with wick raid markers.
- **Market Structure Shift (MSS)**: Fractal 3-candle turning points, BOS trend continuation, and displacement MSS with candle body closes.
- **SMT Divergence**: Side-by-side comparison of correlated assets (e.g. NQ higher high vs. ES lower high crack in correlation).
- **Session Timelines**: 24-hour New York institutional timeline mapping Asian accumulation, London Judas swing, and NY expansion macros.

### 3. Interactive Candlestick Practice Lab
Practice execution without risking capital (`/practice`):
- Real OHLCV candlestick data playback with step-by-step stepping.
- Interactive decision point prompts: identify displacement, locate Consequent Encroachment (50%), and calculate risk:reward.
- Instant scoring on rule adherence, execution timing, and invalidation management.

### 4. 6-Gate Zero-Discretion Risk Governance
An institutional pre-trade execution chassis (`/checklist`) enforcing 6 quantitative gates:
1. `01 / TIMING` — Active Killzone or 20-minute macro window.
2. `02 / LIQUIDITY` — Wick sweep of external resting stops.
3. `03 / STRUCTURE` — Market Structure Shift with candle bodies closing beyond the swing.
4. `04 / IMBALANCE` — Energetic 3-candle Fair Value Gap (BISI/SIBI).
5. `05 / PRICING` — Long in Discount (<50%) or Short in Premium (>50%).
6. `06 / MATHEMATICS` — Defined stop loss with minimum 1:2.0 Risk-to-Reward.

---

## ✦ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing across all models, data files, and components)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Design Aesthetic**: Dark celestial horizon theme with luminous planetary arch, glassmorphism, and responsive layouts.

---

## ✦ Project Structure

```
├── docs/ict/                  # Original ICT reference documentation & markdown
├── scripts/
│   └── generate-curriculum-ts.js  # Generator script for typed curriculum data
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with font and metadata
│   │   ├── page.tsx           # Dark celestial landing page (Hero, Core Principles, 6-Gate Chassis)
│   │   ├── learn/             # Curriculum dashboard & module reader (/learn/[level]/[slug])
│   │   ├── practice/          # Interactive Candlestick Practice Lab
│   │   ├── killzones/         # 24-Hour Session Timetable & Countdown Clocks
│   │   ├── checklist/         # Interactive 6-Gate Pre-Flight Execution Simulator
│   │   └── glossary/          # 71-Term Searchable & Filterable Lexicon
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx     # Obsidian frosted navbar with live NY EST clock & icon brand
│   │   ├── learn/
│   │   │   ├── CurriculumSectionRenderer.tsx  # Typed section, callout, and table renderer
│   │   │   ├── IctVectorDiagrams.tsx          # 13+ High-precision vector SVG schematics
│   │   │   ├── IctCandleGraphic.tsx           # Interactive candle graphics
│   │   │   └── KnowledgeQuiz.tsx              # Interactive 3-question module quiz
│   │   └── simulator/
│   │       ├── CandlestickChart.tsx           # SVG/Canvas candlestick charting engine
│   │       └── ScenarioPlayer.tsx             # Interactive trade decision HUD
│   ├── data/
│   │   └── curriculum/        # Hardcoded, strongly-typed curriculum data modules
│   │       ├── types.ts
│   │       ├── overview.ts
│   │       ├── foundations.ts
│   │       ├── intermediate.ts
│   │       ├── advanced.ts
│   │       ├── executionModels.ts
│   │       ├── practice.ts
│   │       └── index.ts
│   └── lib/
│       ├── ict-content.ts     # Module metadata, progress tracker, and glossary items
│       └── simulator-scenarios.ts  # Historical drill scenarios & OHLCV data
```

---

## ✦ Getting Started

### Prerequisites
- Node.js 18.18+ (tested on Node v20 / v22 / v26)
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rimraf-adi/ict.git
cd ict

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type Check & Build

```bash
# Run TypeScript verification
npx tsc --noEmit

# Production build
npm run build
```

---

## ✦ License

Educational and research project dedicated to systematic price delivery mechanics. Distributed under the MIT License.
