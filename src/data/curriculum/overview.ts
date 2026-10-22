// Hardcoded TypeScript Curriculum Module: OVERVIEW
// Zero markdown reading, zero raw ASCII art, native responsive vector schematics

import { ModuleContent } from "./types";

export const OVERVIEW_MODULES: Record<string, ModuleContent> = {
  "overview-and-roadmap": {
    "slug": "overview-and-roadmap",
    "level": "overview",
    "title": "Master Curriculum & Knowledge Engine",
    "subtitle": "The 5-Stage Curriculum Roadmap",
    "sections": [
      {
        "id": "sec-0",
        "title": "Introduction",
        "paragraphs": [
          "Welcome to the comprehensive guide to the **Inner Circle Trader (ICT)** price action framework.",
          "This curriculum outlines the systematic progression from core market mechanics and order delivery up to advanced intermarket institutional execution models."
        ],
        "bulletPoints": [],
        "numberedSteps": []
      },
      {
        "id": "sec-2",
        "title": "Stage 01: Foundations of Order Flow",
        "paragraphs": [],
        "bulletPoints": [
          "**The IPDA Framework:** Why retail indicators fail, institutional liquidity pools, and the two algorithmic mandates.",
          "**Market Structure & Displacement:** Fractal swing points, continuation breaks (BOS) vs. reversal shifts (MSS/CHoCH), and displacement conviction.",
          "**Liquidity Engineering:** Buy-Side Liquidity (BSL), Sell-Side Liquidity (SSL), equal highs/lows purges, and inducement traps.",
          "**Fair Value Gaps & Imbalances:** 3-candle imbalance anatomy, 50% Consequent Encroachment (C.E.), Volume Imbalances, and opening gaps."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-3",
        "title": "Stage 02: Intermediate Core Mechanics",
        "paragraphs": [],
        "bulletPoints": [
          "**Order Blocks & Mean Threshold:** High-probability institutional blocks, the 50% Mean Threshold boundary, and invalidation rules.",
          "**Dealing Ranges & Optimal Trade Entry (OTE):** Premium vs. discount boundaries, equilibrium fair value, and calibrated Fibonacci levels (62%, 70.5%, 79%).",
          "**Breaker Blocks & Mitigation Blocks:** Structural mechanics of failed order blocks, stop-run breakers vs. failure-swing mitigations.",
          "**Time & Price Killzones:** Synchronizing with New York EST, the True Midnight Open, and the 5 major institutional session windows."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-4",
        "title": "Stage 03: Advanced Institutional Concepts",
        "paragraphs": [],
        "bulletPoints": [
          "**Power of 3 (PO3 / AMD):** Accumulation, Manipulation (The Judas Swing), and Distribution across daily and weekly candlestick profiles.",
          "**SMT Intermarket Divergence:** Detecting cracks in correlation between correlated assets (ES vs. NQ, EUR vs. GBP, DXY inverse) to identify stealth accumulation.",
          "**Advanced PD Arrays:** Inversion Fair Value Gaps (IFVG), Balanced Price Ranges (BPR), Propulsion Blocks, and Reclaimed Blocks.",
          "**Market Maker Models (MMXM):** The lifecycle of Market Maker Buy & Sell Models (MMBM/MMSM) from original consolidation to distribution.",
          "**Macro Frameworks & Lookback Ranges:** 20, 40, and 60-day IPDA data ranges, Central Bank Dealers Range (CBDR), and standard deviation projections.",
          "**Macroeconomics & Order Flow:** Commitment of Traders (COT) commercial hedging extremes, open interest trends, and bond yield correlations.",
          "**Tape Reading:** Reading raw tick-by-tick quote delivery, pace of execution, and wick vs. body price settlement."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-5",
        "title": "Stage 04: High-Probability Execution Models",
        "paragraphs": [],
        "bulletPoints": [
          "**The ICT 2022 Mentorship Model:** Step-by-step bread-and-butter intraday reversal and continuation blueprint.",
          "**The Silver Bullet Strategy:** 60-minute time-window execution framework across London, NY AM, and NY PM sessions.",
          "**The Turtle Soup Strategy:** Purge-and-revert counter-momentum setups fading failed breakout traps.",
          "**Daily & Weekly Profiles:** Anticipating the Tuesday low/high of the week, midweek reversals, and the 20-minute algorithmic macro windows.",
          "**Additional Trading Models:** The London Day Open protocol, Asian range scalps, and the 20-pip daily framework."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-6",
        "title": "Stage 05: Practice & Execution Rulebook",
        "paragraphs": [],
        "bulletPoints": [
          "**Interactive Scenarios & Case Studies:** Step-by-step chart walkthroughs and execution drill evaluations.",
          "**The 6-Gate Trade Checklist:** Sequential pre-flight execution gates, 0.5%–1.0% risk parameters, and daily capital preservation rules."
        ],
        "numberedSteps": [],
        "table": {
          "headers": [
            "Section",
            "Focus Area",
            "Description"
          ],
          "rows": [
            [
              "**Market Structure**",
              "Price Delivery",
              "Objective structural benchmarks, swing points, and trend reversal footprints."
            ],
            [
              "**PD Arrays**",
              "Institutional Zones",
              "The mathematical hierarchy of Fair Value Gaps, Order Blocks, and Breakers."
            ],
            [
              "**Time & Price**",
              "Session Execution",
              "Daily Killzones, True Midnight Open, and 20-minute algorithmic macro windows."
            ],
            [
              "**Intermarket**",
              "Macro Alignment",
              "SMT divergences across correlated assets, bond yields, and commercial COT positioning."
            ],
            [
              "**Execution**",
              "Risk Governance",
              "Rule-based playbooks with asymmetric 1:2+ Risk-to-Reward and strict invalidation."
            ]
          ]
        }
      }
    ]
  },
  "glossary-of-terms": {
    "slug": "glossary-of-terms",
    "level": "overview",
    "title": "The Definitive ICT A–Z Glossary",
    "subtitle": "Exhaustive reference handbook defining 70+ institutional concepts, algorithmic formulas, acronyms, and delivery definitions.",
    "sections": [
      {
        "id": "sec-1",
        "title": "A",
        "paragraphs": [],
        "bulletPoints": [
          "**AMD (Accumulation, Manipulation, Distribution):** The core three-phase cycle of algorithmic price delivery (also known as *Power of 3*).",
          "**Array (PD Array):** Any structural reference point used by IPDA to deliver price (Order Blocks, FVGs, Breakers, Old Highs/Lows, etc.).",
          "**Asian Range:** The consolidation price action between 19:00 (or 20:00) EST and 00:00 EST.",
          "**ASH / ASL:** Asian Session High / Asian Session Low. Resting liquidity benchmarks.",
          "**ATR (Average True Range):** The average volatility range an asset covers in a given period."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-2",
        "title": "B",
        "paragraphs": [],
        "bulletPoints": [
          "**Balanced Price Range (BPR):** An ultra-clean price zone formed when two opposing Fair Value Gaps overlap the same price coordinates.",
          "**BISI (Buyside Imbalance, Sellside Inefficiency):** A Bullish Fair Value Gap formed by aggressive upward buying.",
          "**BOS (Break of Structure):** When price breaks a swing high (in uptrend) or swing low (in downtrend) signaling **trend continuation**.",
          "**Breaker Block (BB):** An invalidated Order Block that successfully swept liquidity (created a higher high or lower low) before market structure shifted. Acts as formidable support/resistance.",
          "**BSL (Buy-Side Liquidity):** A pool of resting buy stops (short stop-losses and breakout buyer orders) residing above old swing highs and equal highs."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-3",
        "title": "C",
        "paragraphs": [],
        "bulletPoints": [
          "**CBDR (Central Bank Dealers Range):** The consolidation window between 14:00 and 20:00 EST (ideally 20–30 pips) used to project intraday standard deviation targets.",
          "**CHoCH (Change of Character):** An alternative name for a Market Structure Shift (MSS), signaling a trend reversal.",
          "**Commitment of Traders (COT):** Weekly CFTC report tracking futures positions of Commercial Hedgers, Large Speculators, and Small Speculators.",
          "**Consequent Encroachment (C.E.):** The exact 50% midpoint of a Fair Value Gap or long candlestick wick.",
          "**Crack in Correlation:** An intermarket divergence between normally mirrored assets (see *SMT Divergence*)."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-4",
        "title": "D",
        "paragraphs": [],
        "bulletPoints": [
          "**Dealing Range:** The defined price range between an anchor fractal Swing High and Swing Low.",
          "**Discount:** The lower 50% (< 50% Equilibrium) of a dealing range. Smart money buys here.",
          "**Displacement:** Aggressive, large-bodied candles that break structure and leave Fair Value Gaps, demonstrating institutional sponsorship.",
          "**DOL (Draw on Liquidity):** The objective magnetic target price that IPDA is currently steering toward (e.g. an un-swept EQH or HTF FVG)."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-5",
        "title": "E",
        "paragraphs": [],
        "bulletPoints": [
          "**EQH / EQL (Equal Highs / Equal Lows):** Highly concentrated retail stop-loss pools. Prime targets for algorithmic liquidity purges.",
          "**Equilibrium (EQ):** The exact 50% mathematical midpoint of any dealing range, session, or price array.",
          "**ERL (External Range Liquidity):** The prominent swing highs and lows bounding a macro dealing range."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-6",
        "title": "F",
        "paragraphs": [],
        "bulletPoints": [
          "**Fair Value Gap (FVG):** A 3-candlestick price imbalance where the wicks of candle 1 and candle 3 do not touch, leaving an inefficient void in candle 2.",
          "**Flout:** The standard deviation projection framework derived from the Asian Range or CBDR.",
          "**FOMO (Fear Of Missing Out):** Retail psychological flaw of chasing green/red candles rather than waiting for retracements."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-7",
        "title": "I",
        "paragraphs": [],
        "bulletPoints": [
          "**IFVG (Inversion Fair Value Gap):** A Fair Value Gap that was broken with momentum, flipping its role from support to resistance (or vice versa).",
          "**Inducement:** A minor structural swing engineered by the algorithm to bait retail traders into entering prematurely before price reaches the true HTF PD Array.",
          "**Interbank Price Delivery Algorithm (IPDA):** The proprietary central banking computer algorithm that quotes and delivers prices in foreign exchange and futures markets.",
          "**IOFED (Institutional Order Flow Entry Drill):** A shallow retracement that merely touches the first tick of an Order Block or FVG before continuing.",
          "**IRL (Internal Range Liquidity):** Fair Value Gaps, Order Blocks, and minor swings nested inside a major dealing range."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-8",
        "title": "J",
        "paragraphs": [],
        "bulletPoints": [
          "**Judas Swing:** A deceptive, engineered false move (occurring at the London or NY Open) that sweeps liquidity before launching the true trend of the day."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-9",
        "title": "K",
        "paragraphs": [],
        "bulletPoints": [
          "**Killzone:** A scheduled high-volatility trading window where commercial banking algorithms deploy orders (London Open, NY AM, London Close, NY PM)."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-10",
        "title": "L",
        "paragraphs": [],
        "bulletPoints": [
          "**Liquidity Pool:** Any concentrated area of resting stop-loss and limit orders.",
          "**Liquidity Void:** An extreme imbalance formed by multiple consecutive large-bodied displacement candles.",
          "**London Close Killzone:** 10:00 AM – 12:00 PM EST. Known for profit-taking retracements.",
          "**London Open Killzone:** 02:00 AM – 05:00 AM EST. Establishes the High or Low of the day in ~70% of trending sessions."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-11",
        "title": "M",
        "paragraphs": [],
        "bulletPoints": [
          "**Macro (Algorithmic Macro):** Recurring 20-to-30 minute algorithmic execution windows (e.g., 09:50–10:10 EST, 15:15–15:45 EST).",
          "**Mean Threshold (M.T.):** The exact 50% midpoint of an Order Block candle.",
          "**Mitigation Block:** A failed Order Block formed on a *failure swing* (did NOT sweep liquidity before breaking structure).",
          "**MMBM (Market Maker Buy Model):** Algorithmic framework mapping price delivery from original consolidation down through the sell curve to an SMR and up the buy curve.",
          "**MMSM (Market Maker Sell Model):** Algorithmic framework mapping price delivery upward through the buy curve to an SMR and downward through the sell curve.",
          "**MSS (Market Structure Shift):** When price sweeps liquidity and violently breaks a structural swing low/high with candle body closes and displacement."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-12",
        "title": "N",
        "paragraphs": [],
        "bulletPoints": [
          "**NDOG (New Day Opening Gap):** The price gap between yesterday’s official market settlement and the new day open.",
          "**NWOG (New Week Opening Gap):** The price gap between Friday’s futures/forex close and Sunday’s market reopen."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-13",
        "title": "O",
        "paragraphs": [],
        "bulletPoints": [
          "**OB (Order Block):** The last opposing candle before an aggressive expansion that sweeps liquidity, breaks structure, and leaves an FVG.",
          "**OHLC / OLHC:** Open-High-Low-Close (Bearish) or Open-Low-High-Close (Bullish) daily candle structure.",
          "**Open Interest (OI):** The total number of open active futures/options contracts.",
          "**Original Consolidation:** The baseline starting range in an MMXM setup that serves as the final take-profit target.",
          "**OTE (Optimal Trade Entry):** The Fibonacci retracement sweet spot between 61.8% and 79% (with 70.5% as the ideal institutional entry level)."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-14",
        "title": "P",
        "paragraphs": [],
        "bulletPoints": [
          "**PD Array:** Premium/Discount Array. Institutional price reference points.",
          "**PDH / PDL:** Previous Day High / Previous Day Low.",
          "**PO3 (Power of 3):** See *AMD*.",
          "**Premium:** The upper 50% (> 50% Equilibrium) of a dealing range. Smart money sells here.",
          "**Propulsion Block:** An Order Block that forms directly inside an existing Order Block and triggers an explosive continuation.",
          "**PWH / PWL:** Previous Week High / Previous Week Low."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-15",
        "title": "R",
        "paragraphs": [],
        "bulletPoints": [
          "**Reclaimed Block:** An Order Block that was briefly violated but immediately recaptured by price.",
          "**Rejection Block:** A candlestick formation characterized by an unusually long wick where the entry anchor is placed at the candle **body**, not the wick tip.",
          "**Risk-to-Reward (R:R):** The mathematical ratio comparing the capital at risk to the targeted profit objective. Minimum accepted ICT ratio is $1:2$."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-16",
        "title": "S",
        "paragraphs": [],
        "bulletPoints": [
          "**Seasonal Tendency:** Historical multi-year statistical probability of an asset trending higher or lower during specific calendar months.",
          "**SIBI (Sellside Imbalance, Buyside Inefficiency):** A Bearish Fair Value Gap formed by aggressive downward selling.",
          "**Silver Bullet:** A time-restricted 60-minute execution strategy operating at 03:00–04:00, 10:00–11:00, and 14:00–15:00 EST.",
          "**SMR (Smart Money Reversal):** The inflection turning point at the bottom/top of a Market Maker Model, confirmed by SMT and Turtle Soup.",
          "**SMT Divergence (Smart Money Technique):** A non-confirmation between two correlated assets (e.g. ES vs NQ or EUR vs GBP) signaling stealth institutional activity.",
          "**SSL (Sell-Side Liquidity):** A pool of resting sell stops (long stop-losses and breakdown seller orders) residing below old swing lows and equal lows."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-17",
        "title": "T",
        "paragraphs": [],
        "bulletPoints": [
          "**Tape Reading:** Observing raw candlestick formation and speed tick-by-tick without indicators.",
          "**True Day Open:** 00:00 EST (New York Midnight). The algorithmic anchor for daily directional bias.",
          "**Turtle Soup:** A strategy that fades false breakouts, taking advantage of liquidity purges that immediately revert inside the range.",
          "**Turtle Soup Plus One (TS+1):** A Turtle Soup variation where the false breakout holds outside the range on Day 1, only to violently collapse back inside on Day 2."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-18",
        "title": "U",
        "paragraphs": [],
        "bulletPoints": [
          "**Unicorn Setup:** A premier ICT setup combining a Breaker Block with an overlapping Fair Value Gap."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-19",
        "title": "V",
        "paragraphs": [],
        "bulletPoints": [
          "**Vacuum Block:** A price gap created during sudden high-impact news releases where price skips dozens of ticks without trading.",
          "**VI (Volume Imbalance):** A price inefficiency where candle wicks overlap, but the physical candle bodies leave an un-traded gap."
        ],
        "numberedSteps": []
      }
    ]
  }
};
