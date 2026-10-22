// Hardcoded TypeScript Curriculum Module: FOUNDATIONS
// Zero markdown reading, zero raw ASCII art, native responsive vector schematics

import { ModuleContent } from "./types";

export const FOUNDATIONS_MODULES: Record<string, ModuleContent> = {
  "what-is-smart-money-and-ipda": {
    "slug": "what-is-smart-money-and-ipda",
    "level": "foundations",
    "title": "What is Smart Money & The Interbank Price Delivery Algorithm (IPDA)",
    "subtitle": "What is Smart Money & The Interbank Price Delivery Algorithm (IPDA)",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Paradigm Shift: Retail vs. Institutional Logic",
        "paragraphs": [
          "Most retail traders enter the market taught by textbooks written decades ago. They rely on lagging indicators:",
          "Smart Money (Central Banks, Sovereign Wealth Funds, Tier-1 Algorithmic Desks) do not use moving average crossovers or RSI to place multi-billion dollar positions.",
          "In fact, **retail patterns serve as bait**. When thousands of retail traders place stop-loss orders just beyond a \"double top\" or under a \"trendline,\" they create concentrated pools of liquidity. Institutional algorithms target these exact stop orders to fill their massive positions at the most favorable prices."
        ],
        "bulletPoints": [
          "**Moving Average Crossovers (e.g., 50/200 SMA)**",
          "**Relative Strength Index (RSI) Overbought/Oversold boundaries**",
          "**MACD Divergences**",
          "**Retail Chart Patterns (Head & Shoulders, Double Tops/Bottoms, Triangles)**",
          "**Dynamic Trendlines and Support/Resistance lines**"
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-2",
        "title": "What is IPDA? (Interbank Price Delivery Algorithm)",
        "paragraphs": [
          "**IPDA** stands for the **Interbank Price Delivery Algorithm**.",
          "According to ICT (Michael J. Huddleston), price in the foreign exchange, index futures, and commodities markets is **not** dictated by a free-auction bidding war between random buyers and sellers. Rather, it is delivered by a computerized algorithm operated by central banking syndicates and major market makers.",
          "IPDA is programmed with only two primary objectives:"
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "**Seek Liquidity (Stop Raids / Order Clearing):** Move price to areas where resting stop-loss orders and breakout entry orders reside (above old highs and below old lows).",
          "**Rebalance Inefficiencies (Fair Value Delivery):** Return price to previous imbalances or \"gaps\" where price moved too fast in one direction, ensuring both sides of the market (buy and sell) have been offered fair liquidity."
        ],
        "diagram": {
          "type": "fvg",
          "title": "Fair Value Gap (BISI/SIBI) 3-Candle Anatomy",
          "caption": "Open void between Candle 1 and Candle 3 with 50% Consequent Encroachment (CE)."
        }
      },
      {
        "id": "sec-3",
        "title": "Price Delivery vs. Price Movement",
        "paragraphs": [
          "Price does not drift; it **reprices**. When an institution wants to accumulate long contracts, it engineers a sudden drop into sell stops (creating liquidity for their buy orders), reprices aggressively upward leaving a Fair Value Gap, and then distributes into resting buy stops at higher price levels."
        ],
        "bulletPoints": [
          "**Random Walk Theory (Retail):** Price changes because random individuals agree to buy or sell at different prices.",
          "**Engineered Delivery (ICT):** Price is systematically maneuvered from a discount array to a premium array, or from an internal range inefficiency to an external liquidity pool, on precise schedules (Time & Price)."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-4",
        "title": "The Two Elements: Time and Price",
        "paragraphs": [
          "Traditional analysts only focus on **Price** (\"Is this support level holding?\"). ICT establishes that **Time trumps Price**.",
          "If a technical setup forms at 11:30 PM (low-liquidity doldrums), it has a high statistical failure rate. The exact same pattern forming at **09:50 AM New York Time** during an active **Algorithmic Macro** inside the **New York Open Killzone** has a dramatically higher probability of success."
        ],
        "bulletPoints": [],
        "numberedSteps": [],
        "callout": {
          "type": "institutional",
          "title": "INSTITUTIONAL SPECIFICATION",
          "text": "\"Price seeks liquidity. Time delivers the opportunity.\""
        }
      },
      {
        "id": "sec-5",
        "title": "Concept Summary & Key Takeaways",
        "paragraphs": [],
        "bulletPoints": [],
        "numberedSteps": [
          "**Stop Hunting is Not Personal:** Market makers are not hunting individual retail accounts; they are algorithmically sweeping pools where aggregate stop orders are clustered.",
          "**Discard Lagging Indicators:** We observe raw price action, market structure, displacement, time of day, and liquidity pools.",
          "**The Draw on Liquidity (DOL):** Before entering any trade, the trader must always answer one question: *Where is IPDA drawing price toward next?* (Is it an old high, an old low, or an unfilled Fair Value Gap?)."
        ]
      }
    ]
  },
  "market-structure": {
    "slug": "market-structure",
    "level": "foundations",
    "title": "Market Structure, Displacement & Structure Shifts",
    "subtitle": "Market Structure, Displacement & Structure Shifts",
    "sections": [
      {
        "id": "sec-1",
        "title": "Defining Fractal Swing Points",
        "paragraphs": [
          "In the ICT methodology, market structure is grounded in objective mathematical definitions of swing points—not subjective wave counts.",
          "A valid **Swing High** is a minimum **3-candlestick fractal formation** where:",
          "[ Candle 2: HIGHEST HIGH ] [ Candle 1 ]       [ Candle 3 ] Lower High         Lower High",
          "A valid **Swing Low** is a minimum **3-candlestick fractal formation** where:",
          "[ Candle 1 ]       [ Candle 3 ] Higher Low         Higher Low [ Candle 2: LOWEST LOW ]"
        ],
        "bulletPoints": [
          "The middle candle prints the **highest high**.",
          "The candle immediately to the left has a **lower high**.",
          "The candle immediately to the right has a **lower high**.",
          "The middle candle prints the **lowest low**.",
          "The candle immediately to the left has a **higher low**.",
          "The candle immediately to the right has a **higher low**."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-2",
        "title": "BOS (Break of Structure) vs. MSS (Market Structure Shift)",
        "paragraphs": [
          "One of the most common confusions among traders is the difference between trend continuation and trend reversal."
        ],
        "bulletPoints": [
          "**Nature:** Trend Continuation.",
          "**Criteria:** In an ongoing uptrend, price creates a new higher high by breaking and closing above the previous swing high. In a downtrend, price creates a new lower low by breaking below the previous swing low.",
          "**Trading Implication:** Confirms current directional momentum is intact.",
          "**Nature:** Trend Reversal.",
          "**Criteria:**",
          "**Body vs. Wick:** In ICT rules, **wicks do the damage (sweep liquidity), bodies tell the story (close across level to confirm MSS)**. A mere wick piercing a swing point without a candle body close is usually a sweep/raid, not an MSS."
        ],
        "numberedSteps": [
          "Price first sweeps a key liquidity pool (e.g. an old swing high or low).",
          "Price violently reverses and closes across the key structural swing low (in a bullish-to-bearish shift) or swing high (in a bearish-to-bullish shift).",
          "The move MUST be accompanied by **Displacement** (large impulsive candles leaving Fair Value Gaps)."
        ],
        "diagram": {
          "type": "market-structure",
          "title": "Market Structure: BOS vs. Market Structure Shift (MSS)",
          "caption": "A true MSS requires full candle body closure beyond a significant swing point, confirming institutional order flow reversal."
        }
      },
      {
        "id": "sec-3",
        "title": "The Anatomy of Displacement",
        "paragraphs": [
          "Displacement is the definitive institutional footprint. If price meanders slowly across a swing point with small, choppy candles, it is **not** a valid Market Structure Shift."
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "**Aggressive Range:** Large-bodied candles with small wicks relative to recent candles.",
          "**Fair Value Gaps:** Leaves at least one clear, energetic Fair Value Gap (FVG) in its wake.",
          "**Speed & Conviction:** Takes out multiple minor swing points in a single, unidirectional surge."
        ],
        "diagram": {
          "type": "market-structure",
          "title": "Market Structure: BOS vs. Market Structure Shift (MSS)",
          "caption": "A true MSS requires full candle body closure beyond a significant swing point, confirming institutional order flow reversal."
        }
      },
      {
        "id": "sec-4",
        "title": "Strong vs. Weak Highs & Lows",
        "paragraphs": [
          "Not all highs and lows are equal. Identifying which extremes are protected and which are targets is essential for setting take-profit orders:"
        ],
        "bulletPoints": [
          "Formed after sweeping a significant liquidity pool and generating strong displacement.",
          "Institutional capital defended this level; price is unlikely to violate it.",
          "**Use:** Placement of protective stop-loss.",
          "Created without momentum or formed with clean, equal highs/lows (EQH/EQL).",
          "Acts as a magnet for IPDA to attack.",
          "**Use:** Placement of take-profit (Draw on Liquidity)."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-5",
        "title": "Internal vs. External Range Structure",
        "paragraphs": [],
        "bulletPoints": [
          "**External Range Liquidity (ERL):** The major swing highs and swing lows of the current macro dealing range (Daily/4H/1H).",
          "**Internal Range Liquidity (IRL):** The Fair Value Gaps, Order Blocks, and minor swing points nested *inside* that dealing range."
        ],
        "numberedSteps": [],
        "callout": {
          "type": "institutional",
          "title": "INSTITUTIONAL SPECIFICATION",
          "text": "Once price raids an External High (ERL), it turns around to rebalance an Internal Imbalance (IRL). Once the Internal Imbalance is rebalanced, it launches toward the opposing External Low (ERL)."
        }
      }
    ]
  },
  "liquidity-concepts": {
    "slug": "liquidity-concepts",
    "level": "foundations",
    "title": "Liquidity Concepts, Order Pools & Engineering",
    "subtitle": "Liquidity Concepts, Order Pools & Engineering",
    "sections": [
      {
        "id": "sec-1",
        "title": "What is Liquidity?",
        "paragraphs": [
          "In financial markets, **liquidity** refers to the availability of orders willing to buy or sell at a given price level.",
          "To buy 50,000 contracts of E-mini S&P or $100 Million of EUR/USD, an institutional trader cannot simply hit \"market buy\" without causing immense slippage and driving the price against themselves.",
          "**Institutions need counter-parties:**",
          "Where do the largest clusters of retail stop orders sit? **Above old highs and below old lows.**"
        ],
        "bulletPoints": [
          "To execute a massive **Buy Program**, institutions must buy into **Sell Orders** (Sell Stops).",
          "To execute a massive **Sell Program**, institutions must sell into **Buy Orders** (Buy Stops)."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-2",
        "title": "Buy-Side Liquidity (BSL) & Sell-Side Liquidity (SSL)",
        "paragraphs": [],
        "bulletPoints": [
          "**Location:** Resides above recent swing highs, relative equal highs (EQH), session highs, previous day highs (PDH), and previous week highs (PWH).",
          "**Order Types Resting Here:**",
          "**Institutional Action:** Smart money pushes price above these highs to trigger those buy orders, providing the liquidity needed for smart money to sell/short.",
          "**Location:** Resides below recent swing lows, relative equal lows (EQL), session lows, previous day lows (PDL), and previous week lows (PWL).",
          "**Order Types Resting Here:**",
          "**Institutional Action:** Smart money pushes price below these lows to trigger those sell orders, absorbing the supply to execute their long positions at wholesale discount pricing."
        ],
        "numberedSteps": [
          "Stop-loss buy orders from traders who are short.",
          "Buy-stop entry orders from breakout traders anticipating trend continuation.",
          "Stop-loss sell orders from traders who are long.",
          "Sell-stop entry orders from breakdown traders anticipating downward continuation."
        ],
        "diagram": {
          "type": "liquidity-pool",
          "title": "Buy-Side & Sell-Side Liquidity Sweeps",
          "caption": "Wick sweep purging resting stops before violent displacement reversal."
        }
      },
      {
        "id": "sec-3",
        "title": "High-Value Liquidity Benchmarks",
        "paragraphs": [
          "When plotting key liquidity pools for intraday and swing trading, prioritize these objective price levels:"
        ],
        "bulletPoints": [],
        "numberedSteps": [],
        "table": {
          "headers": [
            "Abbreviation",
            "Level Name",
            "Significance"
          ],
          "rows": [
            [
              "**EQH / EQL**",
              "Relative Equal Highs / Lows",
              "Extremely clean levels where double/triple tops/bottoms invite maximum retail stops. High priority target."
            ],
            [
              "**PDH / PDL**",
              "Previous Day High / Low",
              "The primary daily liquidity boundary. Swept frequently during London and NY sessions."
            ],
            [
              "**PWH / PWL**",
              "Previous Week High / Low",
              "Major macro liquidity pools used by weekly dealing algorithms."
            ],
            [
              "**ASH / ASL**",
              "Asian Session High / Low",
              "The benchmark range (08:00 PM – 12:00 AM EST) frequently swept by the London Open Judas Swing."
            ],
            [
              "**PMH / PML**",
              "Previous Month High / Low",
              "Macro liquidity targets for institutional quarterly repositioning."
            ]
          ]
        }
      },
      {
        "id": "sec-4",
        "title": "Trendline Liquidity & Engineered Liquidity",
        "paragraphs": [
          "Retail traders are taught to draw diagonal trendlines connecting multiple touchpoints (1st touch, 2nd touch, 3rd touch).",
          "Whenever you see a remarkably smooth, beautiful trendline or multiple touching highs, recognize that it is **engineered liquidity** being cultivated for a future purge."
        ],
        "bulletPoints": [],
        "numberedSteps": [],
        "diagram": {
          "type": "trendline-liquidity",
          "title": "Engineered Retail Trendline Trap",
          "caption": "Clustered retail sell-stops engineered beneath ascending trendlines are systematically purged by displacement."
        }
      },
      {
        "id": "sec-5",
        "title": "Liquidity Purge vs. Liquidity Run",
        "paragraphs": [],
        "bulletPoints": [
          "**Liquidity Purge (Sweep & Reversal):** Price sweeps beyond an old high or low by several pips/points, exhausts the resting orders, and rapidly snaps back inside the range with displacement. (This forms the basis of Turtle Soup and ICT 2022 reversal models).",
          "**Liquidity Run (Expansion):** Price breaks through the liquidity pool and accelerates rapidly, converting old resistance into an open highway toward a higher-timeframe imbalance."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-6",
        "title": "Inducement",
        "paragraphs": [
          "**Inducement** is a micro-liquidity level engineered *just prior* to a key higher-timeframe PD Array (such as an Order Block or FVG).",
          "Retail traders enter prematurely at the minor swing point. The algorithm sweeps their stops, taps directly into the true institutional PD Array, and then accelerates in the intended direction. Always look for an inducement level sitting ahead of your target entry zone!"
        ],
        "bulletPoints": [],
        "numberedSteps": []
      }
    ]
  },
  "imbalances-and-fvg": {
    "slug": "imbalances-and-fvg",
    "level": "foundations",
    "title": "Imbalances, Fair Value Gaps (FVG) & Volume Imbalance",
    "subtitle": "Imbalances, Fair Value Gaps (FVG) & Volume Imbalance",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Theory of Price Inefficiency",
        "paragraphs": [
          "In an ideal, perfectly balanced auction, every price tick is offered equally to both buyers and sellers.",
          "However, when institutional algorithms deploy massive volume, price is repriced so aggressively in one direction that one side of the market is completely skipped or denied execution. This creates a **market imbalance** or **inefficiency**.",
          "According to ICT, IPDA recognizes these inefficiencies as \"unfinished business\" and acts as a gravitational magnet, returning price to rebalance the imbalance before continuing."
        ],
        "bulletPoints": [],
        "numberedSteps": []
      },
      {
        "id": "sec-2",
        "title": "The 3-Candle Anatomy of a Fair Value Gap (FVG)",
        "paragraphs": [
          "A Fair Value Gap is strictly a **three-candlestick sequence**. It is defined by the physical separation between Candle 1 and Candle 3, where Candle 2 represents the energetic displacement.",
          "Formed during an explosive upward move:",
          "Formed during an explosive downward move:"
        ],
        "bulletPoints": [
          "**Candle 1:** The prior candle before the expansion.",
          "**Candle 2:** Large bullish displacement candle.",
          "**Candle 3:** The follow-through candle.",
          "**The Gap:** The vertical space between the **High of Candle 1** and the **Low of Candle 3**. There is NO price overlap between Candle 1 and Candle 3.",
          "**Candle 1:** The prior candle before the decline.",
          "**Candle 2:** Large bearish displacement candle.",
          "**Candle 3:** The follow-through candle.",
          "**The Gap:** The vertical space between the **Low of Candle 1** and the **High of Candle 3**."
        ],
        "numberedSteps": [],
        "diagram": {
          "type": "market-structure",
          "title": "Market Structure: BOS vs. Market Structure Shift (MSS)",
          "caption": "A true MSS requires full candle body closure beyond a significant swing point, confirming institutional order flow reversal."
        }
      },
      {
        "id": "sec-3",
        "title": "Consequent Encroachment (C.E.)",
        "paragraphs": [
          "The **Consequent Encroachment (C.E.)** is the exact **50% mathematical midpoint** of a Fair Value Gap or long candle wick:",
          "$$\\text{Consequent Encroachment (C.E.)} = \\frac{\\text{FVG High} + \\text{FVG Low}}{2}$$"
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "**The Respect Level:** In a high-probability trending setup, price does not need to fill 100% of an FVG. Tapping the C.E. (50%) and immediately rejecting with a wick is the gold standard of institutional sponsorship.",
          "**Structural Health:** If candle *bodies* close significantly past the 50% Consequent Encroachment level, it signals structural weakness, and the FVG is likely to fail or invert."
        ]
      },
      {
        "id": "sec-4",
        "title": "Volume Imbalance (VI)",
        "paragraphs": [
          "A **Volume Imbalance** is a more subtle inefficiency that occurs between two consecutive candles:",
          "Volume Imbalances carry strong institutional weight and frequently serve as pinpoint re-test zones during fast momentum moves."
        ],
        "bulletPoints": [
          "The wicks of the candles overlap, but the **real candle bodies do not overlap**.",
          "There is a visible gap between the **Close of Candle 1** and the **Open of Candle 2**."
        ],
        "numberedSteps": [],
        "diagram": {
          "type": "fvg",
          "title": "Fair Value Gap (BISI/SIBI) 3-Candle Anatomy",
          "caption": "Open void between Candle 1 and Candle 3 with 50% Consequent Encroachment (CE)."
        }
      },
      {
        "id": "sec-5",
        "title": "Liquidity Void",
        "paragraphs": [
          "When an instrument experiences a rapid succession of multiple back-to-back large displacement candles (such as during a central bank interest rate decision or high-impact CPI release), it leaves a **Liquidity Void**."
        ],
        "bulletPoints": [
          "A Liquidity Void represents a large vacuum of unmitigated orders.",
          "Price will eventually retrace through this void like water filling a dry riverbed, often delivering smooth, clean fills back to the origin of the impulse."
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-6",
        "title": "Opening Gaps: NWOG & NDOG",
        "paragraphs": [
          "Plot the high, low, and 50% midpoint (C.E.) of the NWOG and NDOG across your charts throughout the entire week. These levels act as dynamic algorithmic support/resistance anchors that price respects repeatedly days after their creation."
        ],
        "bulletPoints": [
          "**NWOG (New Week Opening Gap):** The price differential between Friday’s official market close and Sunday afternoon’s futures/forex open.",
          "**NDOG (New Day Opening Gap):** The price differential between yesterday’s official settlement close (e.g., 17:00 NY for US indices) and the 18:00 NY reopening."
        ],
        "numberedSteps": []
      }
    ]
  }
};
