// Hardcoded TypeScript Curriculum Module: INTERMEDIATE
// Zero markdown reading, zero raw ASCII art, native responsive vector schematics

import { ModuleContent } from "./types";

export const INTERMEDIATE_MODULES: Record<string, ModuleContent> = {
  "order-blocks": {
    "slug": "order-blocks",
    "level": "intermediate",
    "title": "Order Blocks & Mean Threshold",
    "subtitle": "Order Blocks & Mean Threshold",
    "sections": [
      {
        "id": "sec-1",
        "title": "What is an Order Block (OB)?",
        "paragraphs": [
          "In retail trading, many educators mistakenly teach that an Order Block is simply *\"the last down candle before an up move\"* or *\"the last up candle before a down move.\"* This naive definition causes traders to mark dozens of random candles on a chart and wonder why price blows right through them.",
          "In ICT theory, an **Order Block** is a specialized footprint of institutional order execution where large commercial entities placed heavy block orders to initiate a major directional expansion."
        ],
        "bulletPoints": [],
        "numberedSteps": [],
        "diagram": {
          "type": "market-structure",
          "title": "Market Structure: BOS vs. Market Structure Shift (MSS)",
          "caption": "A true MSS requires full candle body closure beyond a significant swing point, confirming institutional order flow reversal."
        }
      },
      {
        "id": "sec-2",
        "title": "The Strict Validation Checklist for an Order Block",
        "paragraphs": [
          "For a candle to be certified as a valid, high-probability Order Block, it **MUST** satisfy three strict conditions:"
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "**Prior Liquidity Engagement:** The candidate candle (or its immediate swing) must have swept resting liquidity (e.g., cleared an old swing high or low).",
          "**Aggressive Displacement:** The subsequent move away must be swift and energetic, demonstrating institutional sponsorship.",
          "**Creation of an FVG & Structure Break:** The displacement must break market structure (MSS or BOS) and leave an unfilled Fair Value Gap immediately ahead of the candle."
        ],
        "callout": {
          "type": "institutional",
          "title": "INSTITUTIONAL SPECIFICATION",
          "text": "If a candle does not cause displacement, does not break structure, or leaves no FVG, it is NOT a valid Order Block."
        }
      },
      {
        "id": "sec-3",
        "title": "Bullish (+OB) vs. Bearish (-OB) Order Blocks",
        "paragraphs": [],
        "bulletPoints": [
          "**Visual:** The lowest consecutive down-close candle(s) (bearish) prior to an aggressive upward expansion.",
          "**Mechanism:** Institutional algorithms accumulated long contracts by buying into the sell stops of retail traders.",
          "**Execution:** When price later retraces down into the open or upper wick of the +OB, smart money defends their accumulated position, driving price higher.",
          "**Visual:** The highest consecutive up-close candle(s) (bullish) prior to an aggressive downward decline.",
          "**Mechanism:** Institutional algorithms distributed short contracts by selling into the buy stops of retail breakout buyers.",
          "**Execution:** When price rallies back up into the open or lower wick of the -OB, institutional algorithms offer supply to resume the downward trend."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-4",
        "title": "Mean Threshold (M.T.) of an Order Block",
        "paragraphs": [
          "The **Mean Threshold (M.T.)** is the exact **50% mathematical midpoint** of the Order Block candle.",
          "$$\\text{Mean Threshold (M.T.)} = \\frac{\\text{OB High} + \\text{OB Low}}{2} \\quad \\text{or} \\quad \\frac{\\text{OB Open} + \\text{OB Close}}{2} \\text{ (Body-only)}$$"
        ],
        "bulletPoints": [
          "**High-Probability Reaction:** Price can pierce the open of the Order Block and retrace into the upper half of the candle.",
          "**The Sensitive Line:** The 50% Mean Threshold should act as a hard boundary for candle **bodies**. While wicks can briefly poke below/above M.T., a candle **body closing beyond Mean Threshold** indicates the Order Block has likely failed or lost institutional defense."
        ],
        "numberedSteps": [],
        "diagram": {
          "type": "order-block",
          "title": "Bullish Order Block (+OB) & 50% Mean Threshold",
          "caption": "Last down candle prior to upward displacement; candle bodies must respect 50% MT."
        }
      },
      {
        "id": "sec-5",
        "title": "High vs. Low Probability Order Blocks",
        "paragraphs": [],
        "bulletPoints": [],
        "numberedSteps": [],
        "table": {
          "headers": [
            "Factor",
            "High Probability OB",
            "Low Probability OB"
          ],
          "rows": [
            [
              "**HTF Context**",
              "Aligned with Higher Timeframe Daily / 4H Bias.",
              "Counter-trend to Higher Timeframe Trend."
            ],
            [
              "**Liquidity Swept**",
              "Clear sweep of prominent swing highs/lows or EQH/EQL.",
              "Formed mid-range without sweeping any liquidity."
            ],
            [
              "**Displacement**",
              "Violent, large-bodied candles that broke multiple swing points.",
              "Sluggish, small candles that barely surpassed previous ranges."
            ],
            [
              "**FVG Presence**",
              "Supported by a pristine, unmitigated Fair Value Gap.",
              "No FVG present; price overlaps heavily."
            ],
            [
              "**Time of Day**",
              "Formed inside an active Killzone or Algorithmic Macro.",
              "Formed during Asian late night or dead lunch hours."
            ]
          ]
        }
      },
      {
        "id": "sec-6",
        "title": "Refining Order Blocks Across Timeframes",
        "paragraphs": [
          "To achieve high risk-to-reward ratios ($1:3$ to $1:8$), ICT traders refine Order Blocks from macro to micro timeframes:"
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "Identify a Daily or 4-Hour Order Block establishing the institutional directional bias.",
          "Mark the exact price boundaries and the 50% Mean Threshold of that HTF block.",
          "When price enters that HTF zone on the 15-minute or 5-minute chart, look for an internal Market Structure Shift (MSS) that creates a fresh lower-timeframe Order Block.",
          "Enter on the LTF Order Block with a tight stop just beyond its extreme, targeting the opposing HTF liquidity pool."
        ]
      }
    ]
  },
  "premium-discount-and-ote": {
    "slug": "premium-discount-and-ote",
    "level": "intermediate",
    "title": "Premium vs. Discount & Optimal Trade Entry (OTE)",
    "subtitle": "Premium vs. Discount & Optimal Trade Entry (OTE)",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Dealing Range Framework",
        "paragraphs": [
          "Institutions trade according to commercial wholesale principles:",
          "You should never look to buy an asset simply because it is going up, nor short an asset simply because it is falling. First, you must determine what **Dealing Range** the market is currently operating within."
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "Identify the most recent significant fractal Swing Low and fractal Swing High that initiated the current impulse leg.",
          "Measure the exact price distance from low to high (or high to low).",
          "The exact 50% midpoint is **Equilibrium**."
        ],
        "callout": {
          "type": "institutional",
          "title": "INSTITUTIONAL SPECIFICATION",
          "text": "Buy at Wholesale (Discount), Sell at Retail (Premium)."
        },
        "diagram": {
          "type": "dealing-range",
          "title": "Dealing Range Architecture & 50% Equilibrium",
          "caption": "Institutions sell expensive in Premium (>50%) and buy cheap in Discount (<50%)."
        }
      },
      {
        "id": "sec-2",
        "title": "Premium vs. Discount Rules of Engagement",
        "paragraphs": [],
        "bulletPoints": [],
        "numberedSteps": [
          "**Bullish Bias:** If your higher-timeframe bias is bullish, you **must only look for long entries inside the Discount Zone (< 50% Equilibrium)**. Buying in Premium exposes your stop loss to deep retracements.",
          "**Bearish Bias:** If your higher-timeframe bias is bearish, you **must only look for short entries inside the Premium Zone (> 50% Equilibrium)**.",
          "**Internal PD Arrays:** An Order Block or Fair Value Gap located in the Discount zone is dramatically more reliable for a long position than one located above 50% Equilibrium."
        ],
        "diagram": {
          "type": "dealing-range",
          "title": "Dealing Range Architecture & 50% Equilibrium",
          "caption": "Premium (>50%) wholesale selling vs Discount (<50%) wholesale buying."
        }
      },
      {
        "id": "sec-3",
        "title": "The ICT Optimal Trade Entry (OTE)",
        "paragraphs": [
          "The **Optimal Trade Entry (OTE)** is a calibrated Fibonacci retracement model developed by Michael Huddleston to pinpoint institutional re-accumulation and re-distribution zones."
        ],
        "bulletPoints": [
          "**0.000:** Anchor / Swing Origin",
          "**0.500:** Equilibrium",
          "**0.618:** 62% Retracement (OTE Entry Boundary)",
          "**0.705:** 70.5% Retracement (**The Institutional Sweet Spot**)",
          "**0.790:** 79% Retracement (Deep Discount / Stop-hunt threshold)",
          "**1.000:** Swing Extreme / Invalidation",
          "**-0.270:** Profit Target 1 (Partial TP)",
          "**-0.620:** Profit Target 2 (Full Expansion Run)"
        ],
        "numberedSteps": [],
        "diagram": {
          "type": "ote-fibonacci",
          "title": "Optimal Trade Entry (OTE) Fibonacci Calibration",
          "caption": "The 0.705 ratio represents the institutional sweet spot nested inside the 0.618–0.790 discount retracement zone."
        }
      },
      {
        "id": "sec-4",
        "title": "Step-by-Step OTE Execution Protocol",
        "paragraphs": [],
        "bulletPoints": [
          "TP1: The Swing High (100% liquidity sweep).",
          "TP2: -0.270 Fibonacci extension.",
          "TP3: -0.620 Fibonacci extension."
        ],
        "numberedSteps": [
          "**Identify the Impulse Leg:** Look for a clear fractal Swing Low that pushed aggressively upward with displacement, taking out a previous high (BOS/MSS).",
          "**Anchor the Fib Tool:** Draw from the **Swing Low (0.0)** up to the **Swing High (1.0)**.",
          "**Wait for Retracement:** Do not chase the green candles. Allow price to pull back below 50% Equilibrium into the **62% – 79% zone**.",
          "**Identify Confluence:** Check if there is a **Fair Value Gap (FVG)** or **Order Block (OB)** sitting right inside the **0.705 sweet spot**.",
          "**Entry:** Place limit order at 0.705 (or at the top of the nested FVG within OTE).",
          "**Stop Loss:** Set safely below the Swing Low origin (1.0 or just past the 0.79 level).",
          "**Take Profit Targets:**"
        ],
        "diagram": {
          "type": "ote-fibonacci",
          "title": "Optimal Trade Entry (OTE) Fibonacci Calibration",
          "caption": "Institutional sweet spot at 0.705 ratio within the 62%-79% retracement bracket."
        }
      }
    ]
  },
  "breaker-and-mitigation-blocks": {
    "slug": "breaker-and-mitigation-blocks",
    "level": "intermediate",
    "title": "Breaker Blocks vs. Mitigation Blocks",
    "subtitle": "Breaker Blocks vs. Mitigation Blocks",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Power of Failed Institutional Levels",
        "paragraphs": [
          "When an Order Block fails to hold price, it does not disappear from the algorithm's memory. Instead, it converts into one of the most powerful institutional support/resistance levels in trading:",
          "Understanding the subtle difference between these two blocks is what separates amateur SMC traders from seasoned ICT practitioners."
        ],
        "bulletPoints": [
          "**A Breaker Block** (If liquidity was swept prior to the break).",
          "**A Mitigation Block** (If no liquidity was swept; a failure swing)."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-2",
        "title": "The ICT Breaker Block",
        "paragraphs": [
          "A **Breaker Block** is an invalidated Order Block that is directly linked to a **liquidity raid / stop run**."
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "**Low 1 Forms:** Price pulls back, printing a swing low (the last down-candle before an upward leg).",
          "**High 2 Sweeps High 1:** Price rallies strongly, breaking above Swing High 1. This raids Buy-Side Liquidity and lures retail breakout buyers.",
          "**Violent Displacement Down:** Rather than continuing higher, price collapses violently, breaking below Swing Low 1 with large-bodied candles.",
          "**The Transformation:** Swing Low 1 (the last down-candle before the high that swept liquidity) is now designated as a **Bearish Breaker Block**.",
          "**The Retest Entry:** When price retraces back up to the Bearish Breaker Block, it acts as formidable resistance. Institutions use this level to mitigate trapped buy orders and add to short positions.",
          "**High 1 Forms:** Price prints a swing high (the last up-candle before a downward decline).",
          "**Low 2 Sweeps Low 1:** Price collapses below Swing Low 1, raiding Sell-Side Liquidity and trapping breakout shorts.",
          "**Violent Displacement Up:** Price explodes upward, taking out Swing High 1 with authority and leaving an FVG.",
          "**The Transformation:** Swing High 1 is now a **Bullish Breaker Block**.",
          "**The Retest Entry:** When price pulls back to test Swing High 1 from above, it serves as rock-solid institutional support."
        ],
        "diagram": {
          "type": "market-structure",
          "title": "Market Structure: BOS vs. Market Structure Shift (MSS)",
          "caption": "A true MSS requires full candle body closure beyond a significant swing point, confirming institutional order flow reversal."
        }
      },
      {
        "id": "sec-3",
        "title": "The ICT Mitigation Block",
        "paragraphs": [
          "A **Mitigation Block** forms under an almost identical structural break, with **one critical difference: it lacks a liquidity sweep**.",
          "Because Swing High 2 failed to take out Swing High 1, institutional traders who bought at Swing Low 1 are trapped offside when price collapses. When price retraces back up to the level of Swing Low 1, those institutions execute orders to **mitigate their losses** (exit at breakeven), which creates immediate selling pressure that turns price back down."
        ],
        "bulletPoints": [],
        "numberedSteps": [],
        "diagram": {
          "type": "market-structure",
          "title": "Market Structure: BOS vs. Market Structure Shift (MSS)",
          "caption": "A true MSS requires full candle body closure beyond a significant swing point, confirming institutional order flow reversal."
        }
      },
      {
        "id": "sec-4",
        "title": "Direct Comparison: Breaker vs. Mitigation",
        "paragraphs": [],
        "bulletPoints": [],
        "numberedSteps": [],
        "diagram": {
          "type": "breaker-block",
          "title": "Institutional Breaker Block Execution Anatomy",
          "caption": "Old swing low acting as resistance after liquidity sweep and MSS."
        },
        "table": {
          "headers": [
            "Dimension",
            "Breaker Block",
            "Mitigation Block"
          ],
          "rows": [
            [
              "**Liquidity Sweep**",
              "**YES.** Must sweep a prior swing high or low.",
              "**NO.** Creates a failure swing (Lower High or Higher Low)."
            ],
            [
              "**Market Psychology**",
              "Extreme stop-hunt trap; purges liquidity and reverses.",
              "Exhaustion; trend is already too weak to test the extreme."
            ],
            [
              "**Probability & Power**",
              "**Highest Probability.** Exceptional institutional backing.",
              "**Moderate Probability.** Great for continuation, weaker for reversals."
            ],
            [
              "**Candle Identification**",
              "The lowest down candle between High 1 and High 2 (Bearish), or highest up candle between Low 1 and Low 2 (Bullish).",
              "The lowest down candle before the failed swing high (Bearish), or highest up candle before failed swing low (Bullish)."
            ]
          ]
        }
      },
      {
        "id": "sec-5",
        "title": "Execution Rules with Breakers",
        "paragraphs": [],
        "bulletPoints": [
          "**Entry Zone:** The open or Mean Threshold (50%) of the Breaker Block.",
          "**Confluence Booster:** If a Fair Value Gap overlaps directly with the Breaker Block, this creates a **\"Unicorn Setup\"**—widely regarded as one of the highest-probability setups in the ICT library.",
          "**Invalidation:** If a candle body closes completely beyond the Breaker Block's extreme wick, the setup is invalidated."
        ],
        "numberedSteps": []
      }
    ]
  },
  "time-and-price-killzones": {
    "slug": "time-and-price-killzones",
    "level": "intermediate",
    "title": "Time & Price — The ICT Killzones",
    "subtitle": "Time & Price — The ICT Killzones",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Clock Dictates the Algorithm",
        "paragraphs": [
          "In the ICT methodology, your chart clock must **always be synchronized to New York Local Time (Eastern Time, UTC-5 or UTC-4 during Daylight Saving Time)**.",
          "Institutional algorithms do not operate around the clock with uniform volatility. They execute high-volume rebalancing and stop-clearing routines during scheduled windows synchronized with global financial capital operations."
        ],
        "bulletPoints": [],
        "numberedSteps": [],
        "diagram": {
          "type": "killzones-timeline",
          "title": "24-Hour New York Algorithmic Killzones Timeline",
          "caption": "High-probability institutional execution windows scheduled by IPDA."
        }
      },
      {
        "id": "sec-2",
        "title": "Critical Anchor Times",
        "paragraphs": [],
        "bulletPoints": [
          "In retail trading, people look at the 5:00 PM EST daily candle open. ICT rejects this.",
          "**00:00 EST is the true algorithmic benchmark for the trading day.**",
          "**The Golden Rule:**",
          "If your daily bias is **Bullish**, you look to buy **BELOW the 00:00 Midnight Open** (in discount manipulation).",
          "If your daily bias is **Bearish**, you look to sell **ABOVE the 00:00 Midnight Open** (in premium manipulation).",
          "The primary release time for major Tier-1 US economic reports (Non-Farm Payrolls, CPI, PPI, GDP, Retail Sales, Jobless Claims).",
          "Algorithms use this high-impact volatility injection to deliver instantaneous displacement, sweeping session liquidity before initiating the true NY trend.",
          "The ringing of the opening bell at the New York Stock Exchange. Massive algorithmic order books open for equity index futures (ES, NQ, YM)."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-3",
        "title": "The 5 Major ICT Killzones",
        "paragraphs": [],
        "bulletPoints": [
          "**Role:** Accumulation & Consolidation.",
          "**Characteristics:** Relatively low volatility and range-bound price action.",
          "**Application:** Do not seek large trending trades here. Instead, **mark the Asian Session High (ASH) and Asian Session Low (ASL)**. This range creates the liquidity pool that will be hunted by the London session.",
          "**Role:** Manipulation & Daily High/Low Creation.",
          "**Characteristics:** The London open introduces massive commercial banking order flow.",
          "**The Judas Swing:** In over 70% of trending days, the London Killzone creates the **actual High or Low of the entire 24-hour day**. It frequently makes a sharp false breakout (sweeping the Asian High or Low) before reversing into the true directional expansion.",
          "**Role:** Trend Expansion or Major London Reversal.",
          "**Characteristics:** The highest-volume, cleanest, most consistent trading window of the day.",
          "**Application:** If London established the Low of the Day, the New York AM session will provide an optimal retracement (OTE or FVG re-test) to continue the trend into the NY afternoon.",
          "**Role:** Profit Taking & Counter-Trend Retracements.",
          "**Characteristics:** European trading desks square off and close out intraday books.",
          "**Application:** Price often stalls or stages a sharp counter-trend pullback. Excellent window for scalpers, or to take partial profits off morning runners.",
          "**Role:** Daily Profile Completion / Late Day Expansion.",
          "**Characteristics:** Volatility resumes after the 12:00 – 13:30 NY lunch doldrums. Includes the 14:00 – 15:00 PM Silver Bullet hour and the 15:15 – 15:45 closing macro."
        ],
        "numberedSteps": [],
        "diagram": {
          "type": "killzones-timeline",
          "title": "24-Hour New York Algorithmic Killzones Timeline",
          "caption": "Scheduled institutional delivery windows across the 24-hour cycle."
        }
      },
      {
        "id": "sec-4",
        "title": "Killzone Summary Reference Matrix",
        "paragraphs": [],
        "bulletPoints": [],
        "numberedSteps": [],
        "diagram": {
          "type": "killzones-timeline",
          "title": "24-Hour New York Algorithmic Killzones Timeline",
          "caption": "Scheduled institutional delivery windows across the 24-hour cycle."
        },
        "table": {
          "headers": [
            "Killzone",
            "EST Time Window",
            "Primary Currency / Asset",
            "Typical Market Role"
          ],
          "rows": [
            [
              "**Asian Range**",
              "19:00 – 00:00",
              "JPY, AUD, NZD",
              "Builds initial range / liquidity pools (EQH/EQL)."
            ],
            [
              "**London Open**",
              "02:00 – 05:00",
              "EUR, GBP, Gold, DXY",
              "Creates High or Low of the day (~70% frequency)."
            ],
            [
              "**New York AM**",
              "07:00 – 10:00",
              "ES, NQ, DXY, All Forex",
              "Cleanest continuation or sharp London reversal."
            ],
            [
              "**London Close**",
              "10:00 – 12:00",
              "EUR, GBP",
              "Counter-trend retracement, profit taking."
            ],
            [
              "**New York PM**",
              "13:30 – 16:00",
              "ES, NQ, US Bonds",
              "Afternoon continuation; seals daily candle close."
            ]
          ]
        }
      }
    ]
  }
};
