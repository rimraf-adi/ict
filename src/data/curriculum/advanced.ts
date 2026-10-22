// Hardcoded TypeScript Curriculum Module: ADVANCED
// Zero markdown reading, zero raw ASCII art, native responsive vector schematics

import { ModuleContent } from "./types";

export const ADVANCED_MODULES: Record<string, ModuleContent> = {
  "power-of-3-po3-amd": {
    "slug": "power-of-3-po3-amd",
    "level": "advanced",
    "title": "Power of 3 (PO3 / AMD) & The Judas Swing",
    "subtitle": "Power of 3 (PO3 / AMD) & The Judas Swing",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Anatomy of Market Delivery: Accumulation, Manipulation, Distribution",
        "paragraphs": [
          "Every financial instrument delivers price across three consecutive algorithmic phases, known as **Power of 3 (PO3)** or **AMD**:"
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "**Accumulation (A):** The market consolidates in a defined range near the opening price. Smart money discreetly loads orders while retail traders attempt breakout strategies.",
          "**Manipulation (M):** The algorithm creates a violent, deceptive move in the **opposite direction** of the true trend. This move raids stops and traps breakout traders offside. This is the **Judas Swing**.",
          "**Distribution (D):** The genuine institutional expansion begins, driving price with conviction toward higher-timeframe liquidity pools or inefficiencies."
        ],
        "diagram": {
          "type": "liquidity-pool",
          "title": "Buy-Side & Sell-Side Liquidity Sweeps",
          "caption": "Wick sweep purging resting stops before violent displacement reversal."
        }
      },
      {
        "id": "sec-2",
        "title": "Deconstructing the Daily Candle (OHLC / OLHC)",
        "paragraphs": [
          "Traditional technical analysis looks at a daily candle in hindsight. ICT allows you to forecast the candle **as it is forming**:"
        ],
        "bulletPoints": [
          "**Open:** The day opens at 00:00 EST.",
          "**Low (Manipulation):** During early London (02:00 – 04:00 EST), price dips **below the 00:00 Open**. This forms the lower wick (Low of the Day).",
          "**High (Distribution):** Price rallies strongly through New York, reaching toward premium targets.",
          "**Close:** Price pulls back slightly before 16:00 EST, closing near the daily high.",
          "**Open:** The day opens at 00:00 EST.",
          "**High (Manipulation):** Price rallies **above the 00:00 Open** during London or NY Open. This creates the upper wick (High of the Day).",
          "**Low (Distribution):** Price plunges throughout the session, targeting discount SSL pools.",
          "**Close:** Price consolidates into the settlement, closing near the daily low."
        ],
        "numberedSteps": [],
        "callout": {
          "type": "institutional",
          "title": "INSTITUTIONAL SPECIFICATION",
          "text": "- If you are bearish, you want to enter when price is ABOVE the 00:00 Open."
        }
      },
      {
        "id": "sec-3",
        "title": "The Judas Swing: Detecting Institutional Deception",
        "paragraphs": [
          "The **Judas Swing** is named after the biblical betrayal—it appears to offer a clean breakout in one direction, only to violently betray the participants who chased it."
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "Note the Asian Session High and Low prior to 02:00 AM EST.",
          "At the London Open, watch for a swift spike that punches through the Asian high/low.",
          "Observe the speed and price action. If the sweep reaches an HTF PD Array (like a 4H Bearish FVG) and fails to hold with candle bodies, watch for the immediate lower-timeframe Market Structure Shift.",
          "Enter the reversal as soon as the displacement candle confirms the trap."
        ],
        "diagram": {
          "type": "market-structure",
          "title": "Market Structure: BOS vs. Market Structure Shift (MSS)",
          "caption": "A true MSS requires full candle body closure beyond a significant swing point, confirming institutional order flow reversal."
        }
      },
      {
        "id": "sec-4",
        "title": "Fractal Nature of PO3",
        "paragraphs": [
          "Power of 3 is not restricted to daily candles; it occurs fractally across all time horizons:"
        ],
        "bulletPoints": [],
        "numberedSteps": [],
        "diagram": {
          "type": "power-of-3",
          "title": "Power of 3 (PO3): Accumulation, Manipulation & Distribution",
          "caption": "Daily candle anatomy engineered via the Asian, London, and NY sessions."
        },
        "table": {
          "headers": [
            "Time Horizon",
            "Accumulation Phase",
            "Manipulation Phase",
            "Distribution Phase"
          ],
          "rows": [
            [
              "**Weekly Candle**",
              "Monday Asian / London",
              "Tuesday / Wednesday Judas",
              "Thursday / Friday expansion"
            ],
            [
              "**Daily Candle**",
              "Asian session (19:00–00:00)",
              "London Open (02:00–04:00)",
              "New York session (08:30–15:00)"
            ],
            [
              "**Intraday 15m**",
              "Pre-market range",
              "09:30 cash open sweep",
              "09:50–11:00 AM trend run"
            ]
          ]
        }
      }
    ]
  },
  "smt-divergence": {
    "slug": "smt-divergence",
    "level": "advanced",
    "title": "SMT Divergence (Smart Money Technique)",
    "subtitle": "SMT Divergence (Smart Money Technique)",
    "sections": [
      {
        "id": "sec-1",
        "title": "What is SMT Divergence?",
        "paragraphs": [
          "**SMT Divergence** (Smart Money Technique or Smart Money Tool) is an inter-market analysis concept designed to spot institutional accumulation or distribution before it appears on standard charts.",
          "Unlike retail indicators that compare price to historical mathematical averages (such as RSI divergence), **SMT compares two strongly correlated assets against each other at the exact same point in time**."
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
        "title": "The Mechanics Behind the \"Crack in Correlation\"",
        "paragraphs": [
          "Highly correlated assets (like ES and NQ, or EUR/USD and GBP/USD) should theoretically move in tandem. When their paths diverge at key inflection points, it is known as a **Crack in Correlation**.",
          "Smart money cannot hide its orders across all markets simultaneously. If institutions are heavily buying US equities, but the technology sector is fundamentally weaker, they may aggressively purchase the S&P 500 (ES) while avoiding or shorting the Nasdaq (NQ).",
          "When price reaches a key structural level, one asset will successfully sweep liquidity, while the other asset will be so heavily accumulated/distributed that it **fails to reach the level**."
        ],
        "bulletPoints": [],
        "numberedSteps": []
      },
      {
        "id": "sec-3",
        "title": "The Two Core SMT Configurations",
        "paragraphs": [],
        "bulletPoints": [
          "**Asset A:** Prints a **Lower Low** (sweeping Sell-Side Liquidity).",
          "**Asset B:** Refuses to sweep the low, printing a **Higher Low**.",
          "**Interpretation:** Asset B exhibits hidden institutional strength. Smart money is actively defending Asset B.",
          "**Action:** Look for high-probability long entries, favoring Asset B for strength or using the confirmation to trade Asset A's liquidity purge.",
          "**Asset A:** Prints a **Higher High** (sweeping Buy-Side Liquidity).",
          "**Asset B:** Refuses to sweep the high, printing a **Lower High**.",
          "**Interpretation:** Asset B exhibits hidden institutional weakness. Smart money is unwilling to bid price higher.",
          "**Action:** Look for high-probability short setups."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-4",
        "title": "Primary Correlated Asset Baskets",
        "paragraphs": [],
        "bulletPoints": [
          "**EUR/USD vs. GBP/USD:** These sister currencies should mirror each other. If EUR sweeps the previous day's high but GBP fails to do so during the London Open, a sharp bearish reversal is brewing.",
          "**EUR/USD (or GBP/USD) vs. DXY (US Dollar Index):**",
          "When DXY makes a Lower Low, EUR/USD should make a Higher High.",
          "If DXY fails to make a Lower Low (makes a Higher Low) while EUR/USD makes a Higher High, this inverse SMT signals Dollar strength and imminent Euro collapse.",
          "**ES (S&P 500) vs. NQ (Nasdaq 100) vs. YM (Dow Jones Industrial Average):**",
          "The gold standard for futures day traders. An SMT divergence at 09:30 or 10:00 AM EST between ES and NQ frequently marks the exact High or Low of the New York session.",
          "**BTC/USD vs. ETH/USD:**",
          "When Bitcoin sweeps a swing high to print a new peak, but Ethereum fails to confirm and forms a lower high, distribution is underway."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-5",
        "title": "Execution Rules with SMT Divergence",
        "paragraphs": [],
        "bulletPoints": [],
        "numberedSteps": [
          "**Never Trade SMT in a Vacuum:** SMT is not an entry trigger by itself. It is a **confirmation filter**.",
          "**Context First:** SMT must occur at a key Higher Timeframe PD Array (e.g., at an H4 Order Block, Daily FVG, or major Session High/Low).",
          "**Trigger:** Once the SMT divergence is recognized between the correlated pair, wait for a lower-timeframe Market Structure Shift (MSS) with displacement on your trading chart.",
          "**Execution:** Enter inside the resulting Fair Value Gap, placing your stop loss beyond the verified SMT high/low extreme."
        ],
        "diagram": {
          "type": "smt-divergence",
          "title": "SMT Divergence: Intermarket Crack in Correlation",
          "caption": "Correlated asset divergence at key highs/lows confirming institutional intent."
        }
      }
    ]
  },
  "advanced-pd-arrays": {
    "slug": "advanced-pd-arrays",
    "level": "advanced",
    "title": "Advanced PD Arrays & Institutional Footprints",
    "subtitle": "Advanced PD Arrays & Institutional Footprints",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Complete PD Array Matrix Hierarchy",
        "paragraphs": [
          "A **PD Array** (Premium & Discount Array) is any structural reference point utilized by IPDA to deliver price.",
          "When mapping a dealing range, ICT organizes PD Arrays into a strict hierarchy. If a level fails to hold price, IPDA automatically seeks the next array in the hierarchy."
        ],
        "bulletPoints": [],
        "numberedSteps": [],
        "diagram": {
          "type": "dealing-range",
          "title": "Dealing Range Architecture & 50% Equilibrium",
          "caption": "Institutions sell expensive in Premium (>50%) and buy cheap in Discount (<50%)."
        }
      },
      {
        "id": "sec-2",
        "title": "Inversion Fair Value Gap (IFVG)",
        "paragraphs": [
          "An **Inversion Fair Value Gap** occurs when an existing FVG fails to hold price and is decisively violated by strong momentum, **inverting its institutional role**."
        ],
        "bulletPoints": [
          "If price blows through a Bearish FVG to the upside with strong candle body closes, mark that zone.",
          "When price retraces back down to test that broken gap, it converts into a **Bullish Inversion FVG**, providing high-probability support.",
          "Vice versa: a Bullish FVG broken downward converts into a **Bearish Inversion FVG** providing overhead resistance."
        ],
        "numberedSteps": [],
        "diagram": {
          "type": "fvg",
          "title": "Fair Value Gap (BISI/SIBI) 3-Candle Anatomy",
          "caption": "Open void between Candle 1 and Candle 3 with 50% Consequent Encroachment (CE)."
        }
      },
      {
        "id": "sec-3",
        "title": "Balanced Price Range (BPR)",
        "paragraphs": [
          "A **Balanced Price Range (BPR)** is created when **two opposing Fair Value Gaps overlap the same price coordinates**.",
          "Because the market has already executed aggressive volume in *both* directions across this price zone, there is no unfinished inventory.",
          "When price retraces back to a BPR:"
        ],
        "bulletPoints": [
          "It respects the upper or lower boundary with extreme precision.",
          "Candle bodies rarely penetrate deep into a clean BPR.",
          "It acts as an instant springboard for the next expansion leg."
        ],
        "numberedSteps": [],
        "diagram": {
          "type": "fvg",
          "title": "Fair Value Gap (BISI/SIBI) 3-Candle Anatomy",
          "caption": "Open void between Candle 1 and Candle 3 with 50% Consequent Encroachment (CE)."
        }
      },
      {
        "id": "sec-4",
        "title": "Propulsion Block",
        "paragraphs": [
          "A **Propulsion Block** is a specialized, high-momentum Order Block that forms **inside** an existing Order Block."
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "Price retraces into a macro Bullish Order Block (Candle A) and reacts upward.",
          "During that upward reaction, a new down-close candle (Candle B) prints, which then produces an explosive continuation impulse that breaks structure.",
          "**Candle B is the Propulsion Block.**",
          "Because institutional orders have already validated the macro Order Block, price will rarely dip below the high/open of this Propulsion Block. It provides an ultra-tight stop-loss entry point."
        ]
      },
      {
        "id": "sec-5",
        "title": "Reclaimed Order Block",
        "paragraphs": [
          "A **Reclaimed Order Block** occurs when an Order Block appears to fail momentarily, but the breach was merely a stop-sweep before price immediately re-establishes direction."
        ],
        "bulletPoints": [
          "Price breaches the Mean Threshold of an Order Block briefly.",
          "The next candle vigorously snaps back inside the block's body with strong volume.",
          "The block is now **\"Reclaimed\"**—retail traders who assumed the level failed are trapped, and the resumption of the original trend is typically violent and rapid."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-6",
        "title": "Rejection Block",
        "paragraphs": [
          "A **Rejection Block** forms when a candlestick prints an extraordinarily long wick above a swing high (or below a swing low), but the **candle body closes far back inside the range**."
        ],
        "bulletPoints": [
          "**The Institutional Meaning:** The algorithm pushed price past the level to purge liquidity, but strong commercial rejection occurred within the same candle period.",
          "**Trading Application:** When price subsequently retraces back to that swing point, do **not** wait for price to reach the tip of the wick. Instead, anchor your entry level to the **High/Low of the Candle BODY (the base of the wick)**. The bodies represent the real volume threshold!"
        ],
        "numberedSteps": []
      }
    ]
  },
  "market-maker-models-mmxm": {
    "slug": "market-maker-models-mmxm",
    "level": "advanced",
    "title": "Market Maker Models (MMBM & MMSM)",
    "subtitle": "Market Maker Models (MMBM & MMSM)",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Algorithmic Roadmap: MMXM",
        "paragraphs": [
          "The **Market Maker Model (MMXM)** is the overarching algorithmic roadmap that ties all individual ICT concepts together.",
          "It explains how institutional market makers engineer liquidity to reprice an asset from one equilibrium range to another, and then return it back to its origin.",
          "There are two primary models:"
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "**MMBM (Market Maker Buy Model):** Delivers price downward to sweep sell stops, reverses at a HTF Discount PD Array, and builds an aggressive buying curve back to the original consolidation.",
          "**MMSM (Market Maker Sell Model):** Delivers price upward to sweep buy stops, reverses at a HTF Premium PD Array, and builds an aggressive selling curve back down to the original consolidation."
        ]
      },
      {
        "id": "sec-2",
        "title": "The Market Maker Buy Model (MMBM)",
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
        "id": "sec-3",
        "title": "Phases of the Market Maker Model",
        "paragraphs": [],
        "bulletPoints": [
          "A tight trading range where the market begins.",
          "Acts as the primary **Draw on Liquidity (DOL)** for the entire model. When the model completes, price will return to clear this original consolidation.",
          "Price steps downward (or upward) through distinct stages: **Stage 1 Consolidation, Stage 2 Consolidation**.",
          "Retail traders see a strong trend and pile in with the trend, placing trailing stop-loss orders above/below each micro consolidation.",
          "**The Inflection Point:** Price taps directly into a major Higher Timeframe PD Array (Daily/4H Order Block or FVG).",
          "Accompanied by:",
          "An **SMT Divergence** across correlated assets.",
          "A **Turtle Soup** sweep of the lowest low.",
          "An aggressive **Market Structure Shift (MSS)** with clean displacement, leaving behind an energetic FVG.",
          "Following the SMR and MSS, price retraces into the very first Fair Value Gap or Breaker Block on the reversal curve.",
          "This is the **safest, highest risk-to-reward entry** in the entire model.",
          "Price steps upward (in MMBM) mirroring the levels of the left-hand curve.",
          "Institutional algorithms systematically target the stop-losses left behind by traders during the initial descent.",
          "Price violently expands into the Original Consolidation, liquidating all resting liquidity and completing the algorithmic dealing cycle."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-4",
        "title": "Symmetry: Left Side vs. Right Side",
        "paragraphs": [
          "One of the most remarkable discoveries in ICT methodology is **price symmetry**:"
        ],
        "bulletPoints": [
          "The levels that acted as support on the **Sell Side of the Curve** (left) become prime resistance/order block targets on the **Buy Side of the Curve** (right).",
          "By projecting horizontal levels across from the left side's micro consolidations, you can forecast the exact price points where re-accumulations and institutional reactions will take place on the right side."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-5",
        "title": "Tactical Execution Guide for MMXM",
        "paragraphs": [],
        "bulletPoints": [],
        "numberedSteps": [
          "**Step 1: Identify the Original Consolidation** on your 1-Hour or 15-Minute chart.",
          "**Step 2: Track the descent/ascent** and do not try to catch falling knives. Count the consolidation stages (typically 2 to 3 stages).",
          "**Step 3: Wait for the Smart Money Reversal (SMR)** at a certified HTF PD Array.",
          "**Step 4: Confirm with SMT and MSS**.",
          "**Step 5: Execute at the Low-Risk Entry** (the first FVG formed after the MSS).",
          "**Step 6: Hold through re-accumulation stages**, setting final profit target at the **Original Consolidation High/Low**."
        ]
      }
    ]
  },
  "ipda-lookback-ranges": {
    "slug": "ipda-lookback-ranges",
    "level": "advanced",
    "title": "IPDA Data Ranges, CBDR & Standard Deviation Projections",
    "subtitle": "IPDA Data Ranges, CBDR & Standard Deviation Projections",
    "sections": [
      {
        "id": "sec-1",
        "title": "IPDA Lookback Data Ranges (20, 40, and 60 Days)",
        "paragraphs": [
          "The Interbank Price Delivery Algorithm operates on fixed historical rolling calendar windows. Institutional order delivery programs reference these lookback periods to establish whether the market is at a historical Premium or Discount."
        ],
        "bulletPoints": [
          "If current price is in the upper 50% of the 20-day range, you are in a **20-Day Premium**. IPDA is looking to deliver price down toward discount liquidity or inefficiencies.",
          "If current price is in the lower 50% of the 20-day range, you are in a **20-Day Discount**."
        ],
        "numberedSteps": [
          "From the current date, count back **20 trading days** on the Daily chart.",
          "Mark the **highest high** and **lowest low** of that 20-day period.",
          "Calculate the 50% Equilibrium of this range:",
          "Repeat this exercise for the **40-day** and **60-day** windows to establish the macro **Draw on Liquidity (DOL)**."
        ],
        "diagram": {
          "type": "dealing-range",
          "title": "Dealing Range Architecture & 50% Equilibrium",
          "caption": "Institutions sell expensive in Premium (>50%) and buy cheap in Discount (<50%)."
        }
      },
      {
        "id": "sec-2",
        "title": "Central Bank Dealers Range (CBDR)",
        "paragraphs": [
          "The **Central Bank Dealers Range (CBDR)** is an intraday tracking tool used primarily in Forex and Index futures to measure the volume baseline established prior to the global trading day."
        ],
        "bulletPoints": [
          "**Time Window:** **14:00 PM – 20:00 PM EST** (New York afternoon through evening).",
          "**The Ideal Range Size:**",
          "In major currency pairs (like EUR/USD or GBP/USD), the CBDR should ideally be a tight consolidation between **20 and 30 pips** (and strictly under 40 pips).",
          "A tight CBDR indicates that commercial banks have kept price quiet, priming the algorithm for an explosive, high-probability directional expansion the next day.",
          "A bloated CBDR (> 40–50 pips) suggests erratic volatility or pre-scheduled news; trading the next day's Asian/London session carries lower statistical reliability."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-3",
        "title": "The Asian Range & \"Flout\" Concept",
        "paragraphs": [],
        "bulletPoints": [
          "**Asian Range Window:** **20:00 PM – 00:00 EST** (Midnight).",
          "When combined with the CBDR, this creates the ultimate institutional benchmark box.",
          "The high and low of the Asian Range define the resting **Buy-Side Liquidity (ASH)** and **Sell-Side Liquidity (ASL)** for the impending London session."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-4",
        "title": "Standard Deviation Projections ($\\pm 1SD$ to $\\pm 4SD$)",
        "paragraphs": [
          "Once the CBDR or Asian Range is identified, ICT uses mathematical standard deviation projections to calculate **exact algorithmic profit targets and reversal zones**.",
          "$$\\text{Range Size} = \\text{Range High} - \\text{Range Low}$$"
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "**The Judas Manipulation Range:** The London Judas Swing will frequently project **1 to 2 Standard Deviations** *opposite* to the daily bias to sweep liquidity and tap a HTF PD Array.",
          "**The Intraday Target:** The true distribution leg will commonly reach **2 to 2.5 Standard Deviations** in the true direction of the day.",
          "**Daily Climax:** Days with extreme economic catalysts (FOMC, CPI) can extend to **4 Standard Deviations**, at which point the algorithm typically halts delivery and enters deep consolidation."
        ],
        "diagram": {
          "type": "power-of-3",
          "title": "Power of 3 (PO3): Accumulation, Manipulation & Distribution",
          "caption": "Asian consolidation, London Judas swing below Midnight Open, and New York expansion."
        }
      }
    ]
  },
  "cot-and-intermarket-macro": {
    "slug": "cot-and-intermarket-macro",
    "level": "advanced",
    "title": "The Commitment of Traders (COT), Bond Yields & Intermarket Macro",
    "subtitle": "The Commitment of Traders (COT), Bond Yields & Intermarket Macro",
    "sections": [
      {
        "id": "sec-1",
        "title": "Macro Context: Trading with the \"Smart Money\" Titans",
        "paragraphs": [
          "Before price forms a 1-minute Fair Value Gap or sweeps a 15-minute low, multi-billion dollar capital allocations are decided at the macroeconomic level.",
          "Michael J. Huddleston (ICT) incorporates top-down intermarket analysis to ensure that intraday technical setups align with **global commercial banking order flow**."
        ],
        "bulletPoints": [],
        "numberedSteps": [],
        "diagram": {
          "type": "ote-fibonacci",
          "title": "Optimal Trade Entry (OTE) Fibonacci Calibration",
          "caption": "The 0.705 ratio represents the institutional sweet spot nested inside the 0.618–0.790 discount retracement zone."
        }
      },
      {
        "id": "sec-2",
        "title": "The Commitment of Traders (COT) Report",
        "paragraphs": [
          "The **Commitment of Traders (COT)** report is released every Friday at 15:30 EST by the Commodity Futures Trading Commission (CFTC), reflecting institutional futures positions held as of the prior Tuesday's close.",
          "$$\\text{Commercial Net Index} = \\frac{\\text{Current Commercial Net} - \\text{Min Commercial Net (Past 3 Years)}}{\\text{Max Commercial Net (Past 3 Years)} - \\text{Min Commercial Net (Past 3 Years)}} \\times 100$$"
        ],
        "bulletPoints": [
          "Major multinational corporations, commercial banks, and primary dealers who produce or consume the physical commodity/currency.",
          "**Their Behavior:** They are **hedgers**, not speculators. They buy when prices are historically cheap (Discount) and sell when prices are historically expensive (Premium).",
          "**ICT Rule:** Commercials are almost always heavily **net-long at major market bottoms** and heavily **net-short at major market tops**. We ALWAYS seek to trade in the direction of Commercial accumulation!",
          "Commodity Trading Advisors (CTAs), hedge funds, and institutional momentum traders.",
          "**Their Behavior:** Trend followers. They are usually heavily long at the absolute peak of a bull market and heavily short at the very bottom.",
          "Retail margin traders. Consistently wrong at key inflection points.",
          "**Reading > 80%:** Commercials are aggressively accumulating long contracts. Strong macro bullish bias.",
          "**Reading < 20%:** Commercials are aggressively distributing/shorting. Strong macro bearish bias."
        ],
        "numberedSteps": [
          "**Commercials (The Smart Money / Hedgers):**",
          "**Large Speculators (Funds / Trend-Followers):**",
          "**Small Speculators (Retail Public):**"
        ]
      },
      {
        "id": "sec-3",
        "title": "Open Interest (OI) Analysis",
        "paragraphs": [
          "Open Interest measures the total number of outstanding, unsettled derivative contracts in existence."
        ],
        "bulletPoints": [],
        "numberedSteps": [],
        "table": {
          "headers": [
            "Price Action",
            "Open Interest",
            "Institutional Interpretation"
          ],
          "rows": [
            [
              "**Rising**",
              "**Increasing**",
              "**Aggressive New Money Entering:** Strong institutional sponsorship of the uptrend."
            ],
            [
              "**Rising**",
              "**Decreasing**",
              "**Short-Covering Squeeze:** Weak buyers; rally driven merely by trapped shorts liquidating. Likely to fail."
            ],
            [
              "**Falling**",
              "**Increasing**",
              "**Aggressive New Short Positions:** Commercials dumping contracts; strong downtrend."
            ],
            [
              "**Falling**",
              "**Decreasing**",
              "**Long Liquidation:** Exhaustion of buyers; smart money reversal approaching."
            ]
          ]
        }
      },
      {
        "id": "sec-4",
        "title": "Bond Yields & Intermarket Relationships",
        "paragraphs": [
          "In institutional finance, **the Bond Market is the dog that wags the tail of equities and currencies**."
        ],
        "bulletPoints": [
          "When US sovereign yields rise relative to global yields, capital flows into US Dollars to capture higher interest yield (Carry Trade). This drives DXY higher.",
          "Rapidly spiking bond yields increase borrowing costs for corporations and compress equity valuation multiples (especially tech-heavy Nasdaq `NQ`).",
          "Central banks set benchmark interest rates. If the Federal Reserve is raising rates while the European Central Bank (ECB) is pausing or cutting, the **Interest Rate Differential** favors the Dollar over the Euro (`EUR/USD` drops)."
        ],
        "numberedSteps": [
          "**US 10-Year Treasury Yields (TN / ZN inverse) vs. US Dollar (DXY):**",
          "**Bond Yields vs. Equities (ES / NQ):**",
          "**Interest Rate Differentials:**"
        ]
      },
      {
        "id": "sec-5",
        "title": "Seasonal Tendencies",
        "paragraphs": [
          "Institutions operate on annual budgetary, taxation, and harvest cycles. These create repeatable **Seasonal Tendencies** across calendar months:"
        ],
        "bulletPoints": [
          "**US Dollar (DXY):** Historically experiences seasonal strength from January through March, weakens during the summer months, and rallies into year-end.",
          "**Gold (`XAU/USD`):** Historically rallies strongly in late December through February (driven by Lunar New Year physical jewelry demand) and during August/September.",
          "**US Equities (`ES` / `NQ`):**",
          "*September Effect:* Historically the weakest, most volatile month of the year for equities.",
          "*Q4 Year-End Rally:* November and December historically showcase powerful institutional portfolio window dressing."
        ],
        "numberedSteps": [],
        "callout": {
          "type": "rule",
          "title": "RULE SPECIFICATION",
          "text": "Trading Rule: Never trade a seasonal tendency by itself. Only use it as a macro tailwind to confirm that your technical FVG or Order Block is aligned with the calendar's historical institutional bias."
        }
      }
    ]
  },
  "tape-reading-and-algorithmic-delivery": {
    "slug": "tape-reading-and-algorithmic-delivery",
    "level": "advanced",
    "title": "Tape Reading & Algorithmic Price Delivery Mechanics",
    "subtitle": "Tape Reading & Algorithmic Price Delivery Mechanics",
    "sections": [
      {
        "id": "sec-1",
        "title": "What is \"Tape Reading\" in the ICT Methodology?",
        "paragraphs": [
          "In vintage trading, \"reading the tape\" referred to scanning the physical ticker tape for print volume and transaction speed.",
          "In the modern ICT methodology, **Tape Reading** is the discipline of observing raw candlestick delivery tick-by-tick—without drawing a single diagonal line, Fibonacci level, or retail indicator—to deduce what algorithmic program is currently active."
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
        "title": "The Core Law: \"Wicks Do the Damage, Bodies Tell the Story\"",
        "paragraphs": [
          "One of Michael Huddleston's most cited axioms:"
        ],
        "bulletPoints": [
          "Represents price testing an area outside the fair auction range to purge stop-loss orders.",
          "Wicks poke through old highs and lows to trigger resting liquidity.",
          "A long wick signifies institutional rejection: smart money absorbed the orders and refused to allow market settlement at that extreme.",
          "The open and close of the candle body represent where the algorithm chose to settle the auction for that interval.",
          "**Critical Structural Rule:** If price pierces a swing point with a wick, but the **candle body closes back inside the range**, it is a **Liquidity Sweep (Turtle Soup)**, NOT a Break of Structure.",
          "A true Market Structure Shift (MSS) **requires candle body closes** through the structural level."
        ],
        "numberedSteps": [],
        "callout": {
          "type": "institutional",
          "title": "INSTITUTIONAL SPECIFICATION",
          "text": "\"Wicks do the damage; bodies tell the story.\""
        }
      },
      {
        "id": "sec-3",
        "title": "Reading the Speed and Delivery of the Tape",
        "paragraphs": [
          "When you watch a 1-minute or 5-minute chart live, the speed of candlestick formation reveals algorithmic intent:"
        ],
        "bulletPoints": [
          "**Visual:** Candle expands rapidly in seconds, printing consecutive ticks in one direction with almost zero counter-ticks.",
          "**Spreads:** The bid-ask spread may momentarily widen.",
          "**Meaning:** IPDA is executing an urgent repricing program to target a distant liquidity pool. Retail traders are denied entry at fair prices.",
          "**Action:** Do not chase the candle. Identify the resulting Fair Value Gap and wait for the retracement.",
          "**Visual:** Candle wicks up and down repeatedly, overlapping previous candles, taking minutes to move 2–3 ticks.",
          "**Meaning:** The algorithm is either accumulating orders before a Killzone or entering the midday lunch doldrums (12:00–13:30 EST).",
          "**Action:** Stand aside. Hands off the mouse."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-4",
        "title": "Runaway Market vs. Rebalancing Market",
        "paragraphs": [
          "Not all moves will pull back to fill 100% of their Fair Value Gaps. Tape reading teaches you to distinguish between two market types:"
        ],
        "bulletPoints": [
          "Price expands, leaves an FVG, then immediately retraces to test Consequent Encroachment (50%) before continuing.",
          "Highly orderly, classic ICT execution environment.",
          "Driven by massive macro surprises or multi-month liquidity vacuums.",
          "Price blows through multiple FVGs, leaving them wide open without retracing.",
          "**Tape Clue:** The candle closes repeatedly at the absolute extreme tick with virtually no wick on the close.",
          "In a runaway market, price will only tap the **shallowest boundary (high of bullish FVG)** or will respect **Propulsion Blocks**, never offering deep discount OTE retracements."
        ],
        "numberedSteps": []
      }
    ]
  }
};
