// Hardcoded TypeScript Curriculum Module: EXECUTION-MODELS
// Zero markdown reading, zero raw ASCII art, native responsive vector schematics

import { ModuleContent } from "./types";

export const EXECUTION_MODELS_MODULES: Record<string, ModuleContent> = {
  "ict-2022-mentorship-model": {
    "slug": "ict-2022-mentorship-model",
    "level": "execution-models",
    "title": "The ICT 2022 Mentorship Model",
    "subtitle": "The ICT 2022 Mentorship Model",
    "sections": [
      {
        "id": "sec-1",
        "title": "Overview: The Flagship Bread-and-Butter Setup",
        "paragraphs": [
          "The **ICT 2022 Mentorship Model** is arguably the most famous, accessible, and reliably mechanical execution system ever released by Michael J. Huddleston.",
          "It was specifically designed for day trading equity index futures (E-mini S&P 500 `ES` and E-mini Nasdaq 100 `NQ`) and major Forex pairs (EUR/USD, GBP/USD), using lower timeframes (1-minute to 5-minute charts) anchored to higher-timeframe institutional bias."
        ],
        "bulletPoints": [],
        "numberedSteps": [],
        "diagram": {
          "type": "liquidity-pool",
          "title": "Buy-Side & Sell-Side Liquidity Sweeps",
          "caption": "Wick sweep purging resting stops before violent displacement reversal."
        }
      },
      {
        "id": "sec-2",
        "title": "The 5-Step Execution Rulebook",
        "paragraphs": [],
        "bulletPoints": [
          "On the **Daily, 4-Hour, or 1-Hour chart**, identify where price is heading next:",
          "Is there an obvious un-swept pool of Equal Highs (EQH) or Equal Lows (EQL)?",
          "Is there an unmitigated Daily or 4-Hour Fair Value Gap?",
          "Your trades on the lower timeframe **must align with this higher-timeframe magnet**.",
          "Only look for the setup during high-volume institutional windows:",
          "**New York Morning Session:** 08:30 AM – 11:00 AM EST (Preferred: 09:30 AM – 10:30 AM).",
          "**London Session:** 02:00 AM – 04:30 AM EST.",
          "Never trade this model outside of active Killzones.",
          "Switch to the **5-minute, 3-minute, or 1-minute chart**.",
          "Watch for price to push aggressively beyond a prominent recent high or low (e.g., Session High/Low, Previous Day High/Low, or a swing point created during the pre-market).",
          "Once liquidity is cleared, do not jump in yet. You must wait for algorithmic confirmation.",
          "After the sweep, price must aggressively reverse direction.",
          "**Criteria for Valid Shift:**",
          "**Entry Trigger:** Place a limit order at the **entry edge of the FVG** (or at the 50% Consequent Encroachment if seeking greater discount/premium).",
          "**Protective Stop Loss:** Placed just above the swing high (for shorts) or below the swing low (for longs) that performed the initial liquidity sweep.",
          "**Take Profit (TP):** Target the opposing liquidity pool (e.g., relative equal lows, previous session low, or an unmitigated discount FVG). Never aim for arbitrary dollar amounts; target objective structural liquidity!"
        ],
        "numberedSteps": [
          "Must break the most recent significant fractal Swing Low (if turning bearish) or Swing High (if turning bullish).",
          "The break must occur with **strong candle bodies closing across the level**—not just a wick.",
          "The move must leave behind a clean **Fair Value Gap (FVG)**."
        ]
      },
      {
        "id": "sec-3",
        "title": "Step-by-Step Trade Scenario: Bearish 2022 Setup on NQ Futures",
        "paragraphs": [],
        "bulletPoints": [],
        "numberedSteps": [],
        "diagram": {
          "type": "ict-2022",
          "title": "The ICT 2022 Model Execution Blueprint",
          "caption": "Complete 5-step institutional trading sequence."
        },
        "table": {
          "headers": [
            "Step",
            "Action on Chart",
            "Trader Execution"
          ],
          "rows": [
            [
              "**08:30 EST**",
              "US CPI data releases. NQ surges 80 points upward.",
              "Hands off mouse. Do not chase the green news candle."
            ],
            [
              "**09:30 EST**",
              "Cash equities open. NQ pushes higher, sweeping the Previous Day High (`18,520.00`).",
              "Notice Buy-Side Liquidity has been purged into a 4H Bearish FVG."
            ],
            [
              "**09:42 EST**",
              "NQ suddenly prints three massive 1-minute red candles, collapsing through the 09:35 swing low (`18,485.00`) with candle body closes.",
              "**MSS Confirmed with Displacement.** A 1-minute FVG is left between `18,495.00` and `18,505.00`."
            ],
            [
              "**09:47 EST**",
              "Price retraces up into the 1-minute FVG, tapping `18,498.00` (Consequent Encroachment).",
              "**Limit Sell Order Fills at 18,498.00.**"
            ],
            [
              "**Risk Plan**",
              "Stop Loss set at `18,524.00` (4 points above high). Risk: 26 points.",
              "Max risk sized strictly to 1% of trading capital."
            ],
            [
              "**10:15 EST**",
              "Price collapses smoothly down into pre-market Equal Lows (`18,420.00`).",
              "**Take Profit Hits at 18,420.00.** Total gain: 78 points ($1:3$ R:R)."
            ]
          ]
        }
      },
      {
        "id": "sec-4",
        "title": "Common Execution Errors to Avoid",
        "paragraphs": [],
        "bulletPoints": [],
        "numberedSteps": [
          "**Entering on the Sweep (Premature Entry):** Never enter while the liquidity raid candle is actively expanding green/red. You have no guarantee it won't keep running. **Always wait for the MSS and displacement**.",
          "**Ignoring Higher-Timeframe Bias:** Taking a short 2022 setup when the Daily chart is in a roaring institutional buy program heading for a weekly high is a recipe for getting stopped out.",
          "**Accepting Sub-Par FVG:** If the gap is tiny (1 or 2 ticks) and candles overlap heavily, there is no real institutional displacement. Skip the trade and wait for pristine clarity."
        ]
      }
    ]
  },
  "silver-bullet-strategy": {
    "slug": "silver-bullet-strategy",
    "level": "execution-models",
    "title": "The ICT Silver Bullet Strategy",
    "subtitle": "The ICT Silver Bullet Strategy",
    "sections": [
      {
        "id": "sec-1",
        "title": "Overview: The 60-Minute Precision Weapon",
        "paragraphs": [
          "The **ICT Silver Bullet** is a hyper-focused, time-restricted intraday execution model introduced by Michael Huddleston in early 2023.",
          "It is designed for traders who work day jobs or prefer not to sit in front of charts all day. It restricts all analysis and trade execution to **three strictly defined 60-minute windows** per day, targeting a fixed, reliable payout (10 to 15 handles on ES, 20 to 40 handles on NQ, or 15 to 25 pips on Forex).",
          "THE 3 DAILY SILVER BULLET 60-MINUTE WINDOWS (EST) [ 03:00 AM – 04:00 AM ]       [ 10:00 AM – 11:00 AM ]       [ 02:00 PM – 03:00 PM ] London Open                     New York AM                   New York PM European liquidity run        Post-open morning trend       Afternoon settlement"
        ],
        "bulletPoints": [],
        "numberedSteps": []
      },
      {
        "id": "sec-2",
        "title": "The 3 Silver Bullet Trading Windows",
        "paragraphs": [],
        "bulletPoints": [
          "Occurs right after the initial London open volatility settles.",
          "Capitalizes on the Judas Swing reversal or the continuation leg toward the London session high/low.",
          "Occurs immediately after the 09:30 AM equities open shakeout and the 10:00 AM macroeconomic data releases.",
          "Offers the cleanest, most consistent institutional trends of the trading day.",
          "Occurs during the afternoon session, often following the midday lunch consolidation.",
          "Targets daily range completion into the market close."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-3",
        "title": "Complete Step-by-Step Execution Rules",
        "paragraphs": [
          "Open your **1-minute or 5-minute chart** exactly as the clock strikes the start of the Silver Bullet hour."
        ],
        "bulletPoints": [
          "On **ES (S&P 500 Futures):** Target a fixed **10 to 15 handles**.",
          "On **NQ (Nasdaq Futures):** Target a fixed **25 to 40 points**.",
          "On **EUR/USD or GBP/USD:** Target **15 to 20 pips**."
        ],
        "numberedSteps": [
          "**Identify the Nearest Liquidity Pool:** At the start of the hour, mark the nearest un-swept session high/low, previous hour high/low, or relative equal highs/lows (EQH/EQL). This is your target objective.",
          "**Wait for the Liquidity Run:** Inside the 60-minute window, price will either sweep a structural level or trade directly into a higher-timeframe PD Array.",
          "**Spot the Displacement & FVG:** Price must generate a clear displacement move that breaks local market structure and prints a fresh **Fair Value Gap (FVG)**.",
          "**Enter on Retracement:** Place a limit order inside the FVG as soon as price retraces.",
          "**Target the Objective:**",
          "**Hard Cutoff Rule:** If the trade setup does not form within the 60-minute window, **CLOSE YOUR LAPTOP**. Do not force a trade. If you are entered in a trade and it has not hit target by the close of the hour, evaluate managing to breakeven or trailing stops."
        ]
      },
      {
        "id": "sec-4",
        "title": "Silver Bullet Setup Checklist",
        "paragraphs": [],
        "bulletPoints": [],
        "numberedSteps": [],
        "table": {
          "headers": [
            "Checkpoint",
            "Requirement",
            "Verified?"
          ],
          "rows": [
            [
              "**Clock Check**",
              "Is the current time inside 03:00–04:00, 10:00–11:00, or 14:00–15:00 EST?",
              "[ ]"
            ],
            [
              "**Clear Draw on Liquidity**",
              "Is there an obvious un-swept high/low or FVG within 15–30 points of current price?",
              "[ ]"
            ],
            [
              "**Displacement**",
              "Did a 1-minute or 5-minute candle displace with conviction and leave an FVG?",
              "[ ]"
            ],
            [
              "**FVG Retest**",
              "Is price retracing back into the body of the FVG before hitting target?",
              "[ ]"
            ],
            [
              "**Risk / Reward**",
              "Is your stop-loss placed cleanly behind the swing invalidation point?",
              "[ ]"
            ]
          ]
        }
      },
      {
        "id": "sec-5",
        "title": "Why the Silver Bullet is Ideal for Funded Account Challenges",
        "paragraphs": [
          "Proprietary trading firms (Topstep, Apex, FTMO, FundedNext) enforce strict daily drawdown limits and consistency rules.",
          "Because the Silver Bullet:",
          "it has become the #1 chosen system for traders passing institutional evaluation challenges."
        ],
        "bulletPoints": [
          "Avoids choppy midday sessions,",
          "Requires only 1 trade per day during peak algorithmic volume,",
          "Features a mathematically asymmetric stop-loss to target ratio ($1:2$ or better),"
        ],
        "numberedSteps": []
      }
    ]
  },
  "turtle-soup-model": {
    "slug": "turtle-soup-model",
    "level": "execution-models",
    "title": "The Turtle Soup Strategy (Liquidity Purge & Revert)",
    "subtitle": "The Turtle Soup Strategy (Liquidity Purge & Revert)",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Strategy That Punishes Breakout Traders",
        "paragraphs": [
          "In the 1980s, the famous \"Turtle Traders\" trend-following experiment taught traders to buy 20-day high breakouts and sell 20-day low breakouts.",
          "Recognizing that institutional algorithms frequently exploit this retail habit, legendary market technician Larry Williams formulated the **Turtle Soup** setup. Michael J. Huddleston (ICT) heavily refined and institutionalized this model, defining it as the definitive **\"Liquidity Purge and Revert\"** setup.",
          "TURTLE SOUP SHORT (BEARISH PURGE) [ FALSE BREAKOUT WICK ] ┌┴┐ Retail breakout orders triggered. └┬┘ ┌┴┐ └─┘"
        ],
        "bulletPoints": [],
        "numberedSteps": []
      },
      {
        "id": "sec-2",
        "title": "The Core Anatomy of Turtle Soup",
        "paragraphs": [
          "A **Turtle Soup** setup is an intentional stop run that lacks follow-through."
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "**The Benchmark Level:** Identify a prominent high (e.g., a 20-period high, Previous Day High, or clean Equal Highs).",
          "**The Purge:** Price rallies strongly and breaks *above* the benchmark level.",
          "**The Trap:** The expansion immediately runs out of gas. Instead of holding above the broken resistance, price prints a long wick and closes **back inside the prior range**.",
          "**The Entry:** Sell short as price crosses back below the benchmark high (or upon the close of the rejection candle).",
          "**Stop Loss:** Placed strictly above the tip of the fakeout wick.",
          "**Take Profit:** Target the internal discount array or the opposing low.",
          "**The Benchmark Level:** Identify a prominent low (e.g., 20-period low, Previous Day Low, or Equal Lows).",
          "**The Purge:** Price drops below the benchmark low, triggering sell stops.",
          "**The Trap:** The candle violently rejects with a lower wick and closes **back above the benchmark level**.",
          "**The Entry:** Buy long as price crosses back above the level.",
          "**Stop Loss:** Placed strictly below the tip of the fakeout wick.",
          "**Take Profit:** Target the opposing high."
        ]
      },
      {
        "id": "sec-3",
        "title": "Turtle Soup vs. \"Turtle Soup Plus One\" (TS+1)",
        "paragraphs": [],
        "bulletPoints": [
          "**Standard Turtle Soup:** The false breakout and the rejection/re-entry occur on the **very same day / candle**.",
          "**Turtle Soup Plus One (TS+1):**",
          "Day 1: Price breaks beyond the 20-day high/low and closes outside the range (tempting retail traders to hold overnight).",
          "Day 2 (The \"+1\"): Price immediately collapses back inside the original range, trapping all Day 1 breakout buyers.",
          "TS+1 often produces an even more catastrophic squeeze because overnight breakout positions panic-sell simultaneously."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-4",
        "title": "Golden Rules for High-Probability Turtle Soup",
        "paragraphs": [],
        "bulletPoints": [
          "A wick poking beyond the level = **High-Probability Turtle Soup**.",
          "Multiple consecutive candle bodies closing outside the level = **Breakout trend. DO NOT FADE.**"
        ],
        "numberedSteps": [
          "**Check the HTF Context:** Turtle Soup is most lethal when the sweep occurs directly into a **Higher-Timeframe PD Array** (e.g., sweeping yesterday's high directly into a Weekly Bearish Order Block).",
          "**Beware of Macro News Runs:** Never attempt a Turtle Soup against a high-impact news catalyst (e.g. FOMC rate announcement or CPI). When the algorithm is executing a true macro repricing, breakout candles will NOT re-enter the range—they will run away.",
          "**Wick vs. Body Discipline:**"
        ]
      }
    ]
  },
  "daily-and-weekly-profiles": {
    "slug": "daily-and-weekly-profiles",
    "level": "execution-models",
    "title": "Daily Profiles, Weekly Profiles & Algorithmic Macros",
    "subtitle": "Daily Profiles, Weekly Profiles & Algorithmic Macros",
    "sections": [
      {
        "id": "sec-1",
        "title": "Weekly Profiles: Mapping the Institutional Dealing Week",
        "paragraphs": [
          "Algorithms execute structured distributions across the 5-day trading week. Knowing the current **Weekly Profile** prevents you from getting trapped trading counter to the weekly expansion."
        ],
        "bulletPoints": [
          "**Monday:** Accumulation & range-setting. Establishes the initial high and low of the week.",
          "**Tuesday:** The manipulation leg. Tuesday morning (London or NY Open) pushes through Monday’s low/high, sweeps liquidity, and forms the **absolute High or Low of the entire week**.",
          "**Wednesday & Thursday:** Aggressive distribution legs in the true weekly direction.",
          "**Friday:** Continuation into the morning, followed by London Close profit-taking and weekly consolidation.",
          "Occurs frequently when high-impact economic events (e.g. FOMC rate decisions or CPI) fall on Wednesday afternoon.",
          "The market trends in one direction from Monday through Wednesday morning, creating an extended manipulation leg.",
          "Post-news on Wednesday afternoon, the market stages a violent reversal that dictates Thursday and Friday."
        ],
        "numberedSteps": [],
        "diagram": {
          "type": "power-of-3",
          "title": "Power of 3 (PO3): Accumulation, Manipulation & Distribution",
          "caption": "Asian consolidation, London Judas swing below Midnight Open, and New York expansion."
        }
      },
      {
        "id": "sec-2",
        "title": "The 4 Classic Intraday Daily Profiles",
        "paragraphs": [],
        "bulletPoints": [
          "Asian session consolidates tightly.",
          "London Open makes a moderate Judas Swing, forms the Low/High of the Day, and begins expanding.",
          "New York session provides a simple retracement into an FVG and expands in harmony with London until the close.",
          "Asian session trends strongly in one direction.",
          "London Open violently runs that trend into an HTF PD Array, purges liquidity, and completely reverses the market for the remainder of the day.",
          "London trends smoothly throughout the European morning.",
          "At 08:30 or 09:30 AM EST, New York opens with heavy volume, sweeps the London session high/low, and reverses direction.",
          "Usually precedes major pre-scheduled news (e.g., Day before NFP or FOMC).",
          "The algorithm repeatedly sweeps both the high and the low of previous sessions without follow-through. **Best practice: Stand aside.**"
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-3",
        "title": "The 20-Minute Algorithmic Macros",
        "paragraphs": [
          "An **Algorithmic Macro** is an automated script programmed into IPDA that triggers high-speed order execution during a precise 20-to-30 minute window.",
          "During these macro windows, price will actively seek to rebalance an unmitigated FVG or run a local liquidity pool:",
          "Do not sit glued to your screen all morning. Set alarms 2 minutes before these specific macro windows. When the clock enters the window, immediately look for an unmitigated FVG or clean equal highs/lows on the 1-minute chart. The algorithm will almost always deliver price directly into that level before the macro timer expires!"
        ],
        "bulletPoints": [],
        "numberedSteps": [],
        "diagram": {
          "type": "killzones-timeline",
          "title": "24-Hour New York Algorithmic Killzones Timeline",
          "caption": "High-probability institutional execution windows scheduled by IPDA."
        }
      }
    ]
  },
  "additional-ict-models": {
    "slug": "additional-ict-models",
    "level": "execution-models",
    "title": "Additional ICT High-Probability Execution Models",
    "subtitle": "Additional ICT High-Probability Execution Models",
    "sections": [
      {
        "id": "sec-1",
        "title": "The London Day Open Strategy (The Classic Judas Reversal)",
        "paragraphs": [],
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
        "title": "The Asian Range Scalp (Range-Bound Mean Reversion)",
        "paragraphs": [
          "While the Asian session is typically avoided by trend traders, it offers precision mean-reversion setups when the daytime sessions were high-volatility expansion days:"
        ],
        "bulletPoints": [
          "**Condition:** New York session experienced an enormous directional trend (exhausting daily ATR).",
          "**Setup:** During early Asian hours, price sweeps the high or low of the early consolidation.",
          "**Entry:** Enter counter-trend when a 5-minute Market Structure Shift prints, targeting the **50% Equilibrium of the Asian Range**.",
          "**Objective:** Quick 10–15 pips. Close all positions prior to 00:00 Midnight EST."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-3",
        "title": "The New York PM Session Expansion Model",
        "paragraphs": [
          "Traders often turn off their screens after the morning session, missing the powerful institutional settlement run:"
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "**The Lunch Doldrums (12:00 – 13:30 EST):** Price enters a tight consolidation, often building relative equal highs or lows.",
          "**The 13:30 Ignition Macro:** At 13:30, smart money desk traders return from lunch. Price sweeps the lunch consolidation high or low.",
          "**The 14:00 PM Silver Bullet:** An FVG prints on the 1-minute or 5-minute chart between 14:00 and 15:00 EST.",
          "**Execution:** Ride the late-day expansion into the **15:15 – 15:45 Closing Macro**, targeting the daily high or low of the day."
        ]
      },
      {
        "id": "sec-4",
        "title": "The \"Bread & Butter\" 20-Pip Daily Scalp",
        "paragraphs": [
          "Michael Huddleston famously demonstrated that a trader does not need to capture 100-pip moves to generate professional wealth:"
        ],
        "bulletPoints": [
          "**Asset:** EUR/USD or GBP/USD.",
          "**Timeframe:** 15-minute chart for context, 5-minute chart for trigger.",
          "**Trigger:** Reversal from a 15-minute FVG inside London or NY AM Killzones.",
          "**Stop Loss:** 10–12 pips.",
          "**Take Profit:** Fixed 20 pips (or the nearest session liquidity pool).",
          "**Execution Mandate:** Once 15 pips are gained, move stop to breakeven. Take full exit at 20 pips. Close terminal for the day."
        ],
        "numberedSteps": [],
        "callout": {
          "type": "institutional",
          "title": "INSTITUTIONAL SPECIFICATION",
          "text": "One 20-pip scalp per day, with proper position sizing (1-2% risk on funded or institutional accounts), provides astronomical compounding over a multi-year horizon."
        }
      }
    ]
  }
};
