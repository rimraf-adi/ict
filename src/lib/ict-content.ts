// ICT Learning Platform Content Utility & Master Data Provider
// Generated automatically from docs/ict/ master documentation


export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface CurriculumModule {
  id: string;
  title: string;
  slug: string;
  level: "overview" | "foundations" | "intermediate" | "advanced" | "execution-models" | "practice";
  levelNumber: number;
  levelTitle: string;
  order: number;
  estimatedReadTime: string;
  description: string;
  prerequisites: string[];
  keyTakeaways: string[];
  filePath: string;
  badgeColor: string;
  quiz: QuizQuestion[];
}

export interface CurriculumLevel {
  id: string;
  slug: string;
  levelNumber: number;
  title: string;
  description: string;
  color: string;
  moduleCount: number;
  estimatedTime: string;
}

export type GlossaryCategory =
  | "Market Structure"
  | "PD Arrays"
  | "Timing/Macros"
  | "Macroeconomics"
  | "Models";

export interface GlossaryTerm {
  id: string;
  letter: string;
  term: string;
  fullTerm: string;
  category: GlossaryCategory;
  definition: string;
  formula?: string;
  sentiment: "bullish" | "bearish" | "neutral" | "timing" | "structural";
  relatedModule?: {
    level: string;
    slug: string;
    title: string;
  };
}

export const CURRICULUM_LEVELS: CurriculumLevel[] = [
  {
    "id": "lvl-0",
    "slug": "overview",
    "levelNumber": 0,
    "title": "Master Reference & Roadmap",
    "description": "Curriculum architecture, institutional mechanics overview, and the master A-Z lexicon of 70+ terms.",
    "color": "zinc",
    "moduleCount": 2,
    "estimatedTime": "30 min"
  },
  {
    "id": "lvl-1",
    "slug": "foundations",
    "levelNumber": 1,
    "title": "Foundations of IPDA",
    "description": "Smart Money principles, the algorithm's dual mandate, 3-candle fractal structure, and liquidity pools.",
    "color": "emerald",
    "moduleCount": 4,
    "estimatedTime": "45 min"
  },
  {
    "id": "lvl-2",
    "slug": "intermediate",
    "levelNumber": 2,
    "title": "Intermediate Core Mechanics",
    "description": "Order Blocks, 50% Mean Threshold, Dealing Ranges, and Optimal Trade Entry (OTE 62%-79% Fibs).",
    "color": "cyan",
    "moduleCount": 4,
    "estimatedTime": "45 min"
  },
  {
    "id": "lvl-3",
    "slug": "advanced",
    "levelNumber": 3,
    "title": "Advanced Institutional Concepts",
    "description": "Power of 3 (AMD), SMT Intermarket Divergences, Inversion FVGs, BPR, and Market Maker Models.",
    "color": "indigo",
    "moduleCount": 7,
    "estimatedTime": "80 min"
  },
  {
    "id": "lvl-4",
    "slug": "execution-models",
    "levelNumber": 4,
    "title": "High-Probability Execution Models",
    "description": "Step-by-step mechanical playbooks: 2022 Mentorship Model, Silver Bullet, and Turtle Soup.",
    "color": "amber",
    "moduleCount": 5,
    "estimatedTime": "55 min"
  },
  {
    "id": "lvl-5",
    "slug": "practice",
    "levelNumber": 5,
    "title": "Practice Scenarios & Checklists",
    "description": "Candlestick drill walkthroughs, interactive decision trees, and the non-negotiable 6-Gate execution rulebook.",
    "color": "rose",
    "moduleCount": 2,
    "estimatedTime": "25 min"
  }
];

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    "id": "mod-00-1",
    "title": "Master Curriculum & Knowledge Engine",
    "slug": "overview-and-roadmap",
    "level": "overview",
    "levelNumber": 0,
    "levelTitle": "Master Overview",
    "order": 1,
    "estimatedReadTime": "12 min",
    "description": "Architectural roadmap of the complete 5-tier ICT curriculum, IPDA foundational philosophy, and path to algorithmic mastery.",
    "prerequisites": [
      "Curiosity for institutional mechanics"
    ],
    "badgeColor": "zinc",
    "filePath": "00-OVERVIEW-AND-ROADMAP.md",
    "keyTakeaways": [
      "Retail technical analysis relies on lagging indicators that Smart Money algorithms deliberately exploit.",
      "Price delivery is not random; it is governed by the Interbank Price Delivery Algorithm (IPDA).",
      "Mastery requires progressive progression across Structure, PD Arrays, Timing/Killzones, and Risk Protocols."
    ],
    "quiz": [
      {
        "id": "q-00-1",
        "question": "What governs foreign exchange and futures price quotation in the ICT paradigm?",
        "options": [
          "Pure retail supply and demand buying pressure",
          "The Interbank Price Delivery Algorithm (IPDA)",
          "Random Brownian motion and news sentiment",
          "Moving average crossovers executed by high-frequency market makers"
        ],
        "correctAnswer": 1,
        "explanation": "In ICT doctrine, price is mechanically delivered by a central banking algorithm (IPDA) designed to engineer and sweep liquidity pools."
      },
      {
        "id": "q-00-2",
        "question": "Why does the curriculum emphasize 'Time before Price'?",
        "options": [
          "Because indicators calculate faster on 1-minute charts",
          "Institutional algorithms only deploy liquidity within precise scheduled time windows (Killzones)",
          "Trading during off-hours yields higher leverage",
          "Brokers charge less commission during active sessions"
        ],
        "correctAnswer": 1,
        "explanation": "Without institutional sponsorship during scheduled Killzones and Macros, price patterns lack directional velocity and have high failure rates."
      },
      {
        "id": "q-00-3",
        "question": "What is the recommended risk limit per trade across all ICT models?",
        "options": [
          "5% to 10% of total equity",
          "0.5% to 1.0% maximum risk",
          "2% to 3% on high-conviction days",
          "Leveraged risk based on account size"
        ],
        "correctAnswer": 1,
        "explanation": "Institutional risk management strictly dictates 0.5% to 1% maximum capital risk per trade to withstand normal drawdown cycles."
      }
    ]
  },
  {
    "id": "mod-00-2",
    "title": "The Definitive ICT A–Z Glossary",
    "slug": "glossary-of-terms",
    "level": "overview",
    "levelNumber": 0,
    "levelTitle": "Master Overview",
    "order": 2,
    "estimatedReadTime": "15 min",
    "description": "Exhaustive reference handbook defining 70+ institutional concepts, algorithmic formulas, acronyms, and delivery definitions.",
    "prerequisites": [
      "Curriculum Overview"
    ],
    "badgeColor": "zinc",
    "filePath": "00-GLOSSARY-OF-TERMS.md",
    "keyTakeaways": [
      "Standardized vocabulary is vital for rapid pattern recognition and institutional discipline.",
      "Concepts categorize into Market Structure, PD Arrays, Timing/Macros, Macroeconomics, and Execution Models.",
      "Every term connects to a mathematically quantifiable institutional mechanic."
    ],
    "quiz": [
      {
        "id": "q-00-4",
        "question": "What does 'Consequent Encroachment' (C.E.) refer to?",
        "options": [
          "The exact 50% midpoint of a Fair Value Gap or long wick",
          "A failure swing breaking past an old high",
          "The opening price of the London Killzone",
          "The 61.8% Fibonacci retracement level"
        ],
        "correctAnswer": 0,
        "explanation": "Consequent Encroachment (C.E.) is precisely the 50% equilibrium midpoint of an imbalance or long candlestick shadow."
      },
      {
        "id": "q-00-5",
        "question": "What is a 'BISI' in institutional PD Array terminology?",
        "options": [
          "Bearish Imbalance, Sellside Inefficiency",
          "Buyside Imbalance, Sellside Inefficiency (Bullish FVG)",
          "Breakout In Swing Indicator",
          "Bank Institutional Settlement Index"
        ],
        "correctAnswer": 1,
        "explanation": "BISI stands for Buyside Imbalance, Sellside Inefficiency, which represents a Bullish Fair Value Gap created by aggressive upward quoting."
      },
      {
        "id": "q-00-6",
        "question": "What distinguishes a Breaker Block from an Order Block?",
        "options": [
          "A Breaker Block must sweep a previous swing high/low before shifting market structure",
          "A Breaker Block only occurs on daily timeframes",
          "An Order Block always has a larger body than a Breaker",
          "Breaker blocks never offer support or resistance"
        ],
        "correctAnswer": 0,
        "explanation": "A Breaker Block is an invalidated Order Block that successfully purged liquidity (creating a higher high or lower low) before market structure shifted."
      }
    ]
  },
  {
    "id": "mod-01-1",
    "title": "What is Smart Money & The Interbank Price Delivery Algorithm (IPDA)",
    "slug": "what-is-smart-money-and-ipda",
    "level": "foundations",
    "levelNumber": 1,
    "levelTitle": "Foundations",
    "order": 1,
    "estimatedReadTime": "10 min",
    "description": "The algorithmic delivery paradigm, central banks vs retail myths, and the dual mandate of IPDA.",
    "prerequisites": [
      "Curriculum Overview"
    ],
    "badgeColor": "emerald",
    "filePath": "01-FOUNDATIONS/01-what-is-smart-money-and-ipda.md",
    "keyTakeaways": [
      "Stop hunting is not personal: IPDA mechanically targets clustered retail stop pools to execute large institutional volume.",
      "The Dual Mandate: Price is quoted to either purge liquidity pools (BSL/SSL) or rebalance inefficiencies (FVGs).",
      "Always identify the Draw on Liquidity (DOL) before entering any trade."
    ],
    "quiz": [
      {
        "id": "q-01-1",
        "question": "What are the two primary algorithmic mandates of IPDA?",
        "options": [
          "Generating retail trendline patterns and computing indicator oscillators",
          "Purging liquidity pools (stops) and rebalancing price inefficiencies (FVGs)",
          "Minimizing broker spread and ensuring equal trade volumes",
          "Matching random retail buy orders with retail sell orders"
        ],
        "correctAnswer": 1,
        "explanation": "IPDA operates with a dual mandate: seeking resting liquidity pools to fill institutional orders and returning to rebalance inefficient price voids."
      },
      {
        "id": "q-01-2",
        "question": "Why do institutional algorithms target areas just beyond retail double tops?",
        "options": [
          "To test support lines drawn by technical analysts",
          "Because retail buy stops resting there provide the counterparty volume needed to fill large short orders",
          "Because double tops create high spread on exchange servers",
          "To trigger technical moving average crossovers"
        ],
        "correctAnswer": 1,
        "explanation": "Above equal highs or double tops lies dense Buy-Side Liquidity (buy stops). Institutional algorithms engineer purges there to sell into aggressive retail buyers."
      },
      {
        "id": "q-01-3",
        "question": "What must a trader identify first before entering any trade in ICT methodology?",
        "options": [
          "The 200-period Exponential Moving Average direction",
          "The Draw on Liquidity (DOL) — where price is being magnetically pulled",
          "The MACD histogram divergence signal",
          "The current RSI oversold percentage"
        ],
        "correctAnswer": 1,
        "explanation": "The Draw on Liquidity (DOL) provides the directional compass for institutional order flow delivery."
      }
    ]
  },
  {
    "id": "mod-01-2",
    "title": "Market Structure, Displacement & Structure Shifts",
    "slug": "market-structure",
    "level": "foundations",
    "levelNumber": 1,
    "levelTitle": "Foundations",
    "order": 2,
    "estimatedReadTime": "12 min",
    "description": "3-candle fractal swing points, Break of Structure (BOS) vs Market Structure Shift (MSS), and displacement validation.",
    "prerequisites": [
      "What is Smart Money & IPDA"
    ],
    "badgeColor": "emerald",
    "filePath": "01-FOUNDATIONS/02-market-structure.md",
    "keyTakeaways": [
      "A valid fractal swing high consists of 3 candles: a middle candle with higher high flanked by two lower highs.",
      "BOS signals trend continuation; MSS signals an institutional trend reversal.",
      "Valid MSS requires displacement: aggressive large-bodied candles closing beyond the swing level and leaving an FVG."
    ],
    "quiz": [
      {
        "id": "q-01-4",
        "question": "How is an ICT 3-candle fractal swing high strictly defined?",
        "options": [
          "Any candle that turns green after two red candles",
          "A center candle with a higher high flanked by a lower high on the left and right",
          "A 50-pip expansion on the 15-minute timeframe",
          "A candle whose upper wick touches the upper Bollinger Band"
        ],
        "correctAnswer": 1,
        "explanation": "An ICT swing high requires a 3-candle fractal structure where the middle candle achieves a higher high than the candles immediately preceding and following it."
      },
      {
        "id": "q-01-5",
        "question": "What distinguishes a Market Structure Shift (MSS) from a Break of Structure (BOS)?",
        "options": [
          "BOS continues the existing trend; MSS signals a high-conviction trend reversal",
          "BOS occurs on lower timeframes; MSS only occurs on weekly charts",
          "MSS requires no displacement candles",
          "BOS always leaves a Fair Value Gap while MSS does not"
        ],
        "correctAnswer": 0,
        "explanation": "A Break of Structure (BOS) confirms continuation in the prevailing trend direction, whereas an MSS signals an institutional regime change and reversal."
      },
      {
        "id": "q-01-6",
        "question": "What proves that a market structure break has institutional displacement?",
        "options": [
          "A long wick that briefly pierces the level and immediately closes back inside",
          "Energetic, large-bodied candles closing decisively beyond the swing point leaving an FVG",
          "High RSI momentum reading above 80",
          "A narrow range consolidation candle"
        ],
        "correctAnswer": 1,
        "explanation": "Displacement is characterized by energetic, large-bodied candles closing through structure and leaving an energetic Fair Value Gap."
      }
    ]
  },
  {
    "id": "mod-01-3",
    "title": "Liquidity Concepts, Order Pools & Engineering",
    "slug": "liquidity-concepts",
    "level": "foundations",
    "levelNumber": 1,
    "levelTitle": "Foundations",
    "order": 3,
    "estimatedReadTime": "11 min",
    "description": "Buyside (BSL) and Sellside (SSL) liquidity, retail inducement patterns, equal highs/lows, and internal vs external liquidity.",
    "prerequisites": [
      "Market Structure & Displacement"
    ],
    "badgeColor": "emerald",
    "filePath": "01-FOUNDATIONS/03-liquidity-concepts.md",
    "keyTakeaways": [
      "Buy-Side Liquidity (BSL) rests above swing highs; Sell-Side Liquidity (SSL) rests below swing lows.",
      "Equal Highs (EQH) and Equal Lows (EQL) are retail stop magnets engineered by algorithms.",
      "The dealing cycle oscillates continuously between External Range Liquidity (ERL) and Internal Range Liquidity (IRL)."
    ],
    "quiz": [
      {
        "id": "q-01-7",
        "question": "What types of orders constitute Buy-Side Liquidity (BSL)?",
        "options": [
          "Retail trailing stop-losses for long positions",
          "Short seller stop-losses (buy stops) and breakout trader market buy orders",
          "Limit sell orders placed by commercial hedgers",
          "Broker margin call automated liquidations"
        ],
        "correctAnswer": 1,
        "explanation": "BSL resting above swing highs consists of buy stops from short traders protecting capital and breakout buyers entering long."
      },
      {
        "id": "q-01-8",
        "question": "What does 'Inducement' represent in ICT chart analysis?",
        "options": [
          "A minor swing point engineered to lure retail traders into entering early before the true institutional level",
          "The commission rebate paid by wholesale liquidity providers",
          "A government interest rate change",
          "A moving average crossing above zero"
        ],
        "correctAnswer": 0,
        "explanation": "Inducement is an engineered decoy level designed to trap impatient retail traders into taking positions prematurely."
      },
      {
        "id": "q-01-9",
        "question": "When price completes a run on External Range Liquidity (ERL), where is it algorithmically drawn next?",
        "options": [
          "To expand infinitely in the direction of the trend",
          "Toward Internal Range Liquidity (IRL) such as Fair Value Gaps or Order Blocks inside the range",
          "Directly to the zero price level",
          "Into permanent multi-month consolidation"
        ],
        "correctAnswer": 1,
        "explanation": "After sweeping External Range Liquidity (ERL), IPDA routinely retraces back toward Internal Range Liquidity (IRL) to rebalance imbalances."
      }
    ]
  },
  {
    "id": "mod-01-4",
    "title": "Imbalances, Fair Value Gaps (FVG) & Volume Imbalance",
    "slug": "imbalances-and-fvg",
    "level": "foundations",
    "levelNumber": 1,
    "levelTitle": "Foundations",
    "order": 4,
    "estimatedReadTime": "11 min",
    "description": "3-candle FVG anatomy, Consequent Encroachment (50% midpoint), BISI vs SIBI, and Volume Imbalances.",
    "prerequisites": [
      "Liquidity Concepts"
    ],
    "badgeColor": "emerald",
    "filePath": "01-FOUNDATIONS/04-imbalances-and-fvg.md",
    "keyTakeaways": [
      "A Fair Value Gap is a 3-candle sequence where Candle 1's wick and Candle 3's wick do not overlap.",
      "BISI is bullish; SIBI is bearish.",
      "Consequent Encroachment (C.E.) is the exact 50% midpoint of the gap and acts as prime institutional support/resistance."
    ],
    "quiz": [
      {
        "id": "q-01-10",
        "question": "How is a Bullish Fair Value Gap (BISI) formed across 3 consecutive candles?",
        "options": [
          "Candle 1 is red, Candle 2 is green, and Candle 3 closes at a new weekly high",
          "Candle 1 high and Candle 3 low do not touch, leaving an open space in Candle 2 body",
          "Candle 2 has a wick that is twice as long as its body",
          "The 20 SMA crosses the 50 SMA during Candle 2"
        ],
        "correctAnswer": 1,
        "explanation": "A Bullish FVG occurs when Candle 2 rallies aggressively, leaving an open untraded price gap between Candle 1's high and Candle 3's low."
      },
      {
        "id": "q-01-11",
        "question": "What is Consequent Encroachment (C.E.) of a Fair Value Gap?",
        "options": [
          "The upper edge of the gap",
          "The lower edge of the gap",
          "The exact 50% mathematical midpoint of the imbalance range",
          "The low of Candle 1"
        ],
        "correctAnswer": 2,
        "explanation": "Consequent Encroachment is the 50% equilibrium level of the FVG. Institutional order flow typically defends this level on retests."
      },
      {
        "id": "q-01-12",
        "question": "What defines a Volume Imbalance (VI)?",
        "options": [
          "A price gap where the wicks overlap, but the real bodies do not touch",
          "A drop in tick volume reported on the futures exchange",
          "An empty weekend gap between Friday close and Sunday open",
          "A candle with zero wick on both sides"
        ],
        "correctAnswer": 0,
        "explanation": "In a Volume Imbalance, candlestick wicks overlap but an open gap remains between the candle bodies."
      }
    ]
  },
  {
    "id": "mod-02-1",
    "title": "Order Blocks & Mean Threshold",
    "slug": "order-blocks",
    "level": "intermediate",
    "levelNumber": 2,
    "levelTitle": "Intermediate Core",
    "order": 1,
    "estimatedReadTime": "11 min",
    "description": "High-probability Order Blocks (+OB / -OB), Mean Threshold (50%), displacement confirmation, and mitigation lifecycle.",
    "prerequisites": [
      "Imbalances & FVGs"
    ],
    "badgeColor": "cyan",
    "filePath": "02-INTERMEDIATE/01-order-blocks.md",
    "keyTakeaways": [
      "A valid Order Block is the last opposing candle prior to displacement that sweeps liquidity and leaves an FVG.",
      "Mean Threshold (M.T.) is the 50% midpoint of the OB candle body: candle bodies should not close beyond M.T.",
      "Order Blocks that fail to break structure or lack displacement are low-probability retail traps."
    ],
    "quiz": [
      {
        "id": "q-02-1",
        "question": "What defines a high-probability Bullish Order Block (+OB)?",
        "options": [
          "The highest green candle at the top of a strong rally",
          "The lowest down-close candle prior to an aggressive upward displacement that breaks structure",
          "Any candle that touches the 200 EMA",
          "A candle with unusually heavy retail volume"
        ],
        "correctAnswer": 1,
        "explanation": "A Bullish Order Block represents institutional accumulation: the down-close candle preceding strong upward displacement and structural break."
      },
      {
        "id": "q-02-2",
        "question": "What is the Mean Threshold (M.T.) of an Order Block?",
        "options": [
          "The opening price of the candle",
          "The exact 50% midpoint of the candle body",
          "The highest wick tip of the candle",
          "The volume-weighted average price (VWAP)"
        ],
        "correctAnswer": 1,
        "explanation": "Mean Threshold is the 50% midpoint of the Order Block. In healthy institutional delivery, candle bodies should respect and close above/below M.T."
      },
      {
        "id": "q-02-3",
        "question": "What invalidates an active Order Block?",
        "options": [
          "A candle wick piercing through the opening price",
          "A candle body closing decisively beyond the 50% Mean Threshold",
          "The passage of 3 trading days",
          "Price returning to retest it during the New York Killzone"
        ],
        "correctAnswer": 1,
        "explanation": "When candle bodies close beyond the Mean Threshold, the Order Block is invalidated and often flips into a breaker or mitigation block."
      }
    ]
  },
  {
    "id": "mod-02-2",
    "title": "Premium vs. Discount & Optimal Trade Entry (OTE)",
    "slug": "premium-discount-and-ote",
    "level": "intermediate",
    "levelNumber": 2,
    "levelTitle": "Intermediate Core",
    "order": 2,
    "estimatedReadTime": "10 min",
    "description": "Dealing range identification, 50% Equilibrium, and the 62%-70.5%-79% Fibonacci institutional sweet spot.",
    "prerequisites": [
      "Order Blocks & Mean Threshold"
    ],
    "badgeColor": "cyan",
    "filePath": "02-INTERMEDIATE/02-premium-discount-and-ote.md",
    "keyTakeaways": [
      "Always anchor Fibonacci tools from Swing Low to Swing High across the active dealing range.",
      "Equilibrium (50%) divides Premium (>50%, institutional selling zone) and Discount (<50%, institutional buying zone).",
      "Optimal Trade Entry (OTE) spans the 62% to 79% retracement levels, with 70.5% as the ideal algorithmic trigger."
    ],
    "quiz": [
      {
        "id": "q-02-4",
        "question": "Where should long positions be initiated according to institutional dealing range theory?",
        "options": [
          "In Premium (> 50% Equilibrium)",
          "In Discount (< 50% Equilibrium)",
          "At the exact high of the week",
          "Whenever RSI crosses above 50"
        ],
        "correctAnswer": 1,
        "explanation": "Smart money buys in Discount (< 50% Equilibrium) at wholesale prices and sells in Premium (> 50%) at retail markup."
      },
      {
        "id": "q-02-5",
        "question": "What are the exact Fibonacci levels defining the ICT Optimal Trade Entry (OTE)?",
        "options": [
          "23.6% and 38.2%",
          "50.0% and 100.0%",
          "62.0%, 70.5%, and 79.0%",
          "88.6% and 127.2%"
        ],
        "correctAnswer": 2,
        "explanation": "The ICT OTE sweet spot is bounded by 62% and 79% retracements, with 70.5% being the institutional center strike."
      },
      {
        "id": "q-02-6",
        "question": "What Fibonacci extension levels provide institutional take-profit targets in an OTE model?",
        "options": [
          "-0.27 and -0.62 extension targets",
          "50% and 100% extensions",
          "0.382 and 0.500 extensions",
          "3.00 and 5.00 extensions"
        ],
        "correctAnswer": 0,
        "explanation": "The -0.27 and -0.62 standard Fibonacci projections represent algorithmic symmetry targets for scaling out profits."
      }
    ]
  },
  {
    "id": "mod-02-3",
    "title": "Breaker Blocks vs. Mitigation Blocks",
    "slug": "breaker-and-mitigation-blocks",
    "level": "intermediate",
    "levelNumber": 2,
    "levelTitle": "Intermediate Core",
    "order": 3,
    "estimatedReadTime": "12 min",
    "description": "The mechanics of failed institutional levels, liquidity sweep breakers vs failed swing mitigations, and the Unicorn setup.",
    "prerequisites": [
      "Order Blocks & Mean Threshold"
    ],
    "badgeColor": "cyan",
    "filePath": "02-INTERMEDIATE/03-breaker-and-mitigation-blocks.md",
    "keyTakeaways": [
      "A Breaker Block requires a liquidity purge (higher high or lower low) before market structure shifts.",
      "A Mitigation Block forms on a failure swing (did not take out the prior swing high/low).",
      "The 'Unicorn Setup' pairs an overlapping Breaker Block with a Fair Value Gap for exceptional trade confluence."
    ],
    "quiz": [
      {
        "id": "q-02-7",
        "question": "What mandatory condition must occur for a block to be classified as a Breaker Block rather than a Mitigation Block?",
        "options": [
          "It must form on a 1-minute chart",
          "It must have purged liquidity (created a higher high or lower low) prior to the structure shift",
          "It must not leave a Fair Value Gap",
          "It must touch the 200 EMA"
        ],
        "correctAnswer": 1,
        "explanation": "Breaker Blocks are defined by an intentional liquidity run (taking out old highs/lows) before reversing aggressively through structure."
      },
      {
        "id": "q-02-8",
        "question": "What is the ICT 'Unicorn Setup'?",
        "options": [
          "A moving average golden cross combined with MACD",
          "A Breaker Block that aligns directly with an overlapping Fair Value Gap",
          "Trading three consecutive green candles during Asian session",
          "A trade with 10:1 risk-to-reward ratio and no stop-loss"
        ],
        "correctAnswer": 1,
        "explanation": "The Unicorn setup combines the institutional power of a Breaker Block with a coincident Fair Value Gap at the exact same price levels."
      },
      {
        "id": "q-02-9",
        "question": "Why do Breakers provide strong support or resistance on retests?",
        "options": [
          "Because retail trendline indicators align with them",
          "Institutional participants trapped in the liquidity run defend their breakeven mitigation orders",
          "Brokers automatically adjust spread at breaker levels",
          "They represent round psychological numbers"
        ],
        "correctAnswer": 1,
        "explanation": "Institutions that bought the high (or sold the low) during the stop run must mitigate their trapped underwater positions upon retracement."
      }
    ]
  },
  {
    "id": "mod-02-4",
    "title": "Time & Price — The ICT Killzones",
    "slug": "time-and-price-killzones",
    "level": "intermediate",
    "levelNumber": 2,
    "levelTitle": "Intermediate Core",
    "order": 4,
    "estimatedReadTime": "11 min",
    "description": "NY Midnight True Day Open, London Open (02:00-05:00), NY AM (07:00-10:00), London Close, and NY PM Killzone windows.",
    "prerequisites": [
      "Time trumps Price philosophy"
    ],
    "badgeColor": "cyan",
    "filePath": "02-INTERMEDIATE/04-time-and-price-killzones.md",
    "keyTakeaways": [
      "True Day Open is 00:00 EST (New York Midnight): price below Midnight Open is discount for bullish days.",
      "London Open Killzone (02:00-05:00 EST) sets the High or Low of the day in approximately 70% of trending sessions.",
      "New York AM Killzone (07:00-10:00 EST) delivers the highest intraday volume and clearest displacement."
    ],
    "quiz": [
      {
        "id": "q-02-10",
        "question": "What is the True Day Open anchor time in ICT algorithmic methodology?",
        "options": [
          "00:00 GMT (London Midnight)",
          "00:00 EST / EDT (New York Midnight)",
          "09:30 EST (NYSE Opening Bell)",
          "17:00 EST (Forex Roll Close)"
        ],
        "correctAnswer": 1,
        "explanation": "00:00 EST (New York Midnight) is the institutional algorithmic anchor for determining daily discount (< Midnight) or premium (> Midnight)."
      },
      {
        "id": "q-02-11",
        "question": "In approximately what percentage of trending days does the London Open Killzone establish the High or Low of the day?",
        "options": [
          "Around 20%",
          "Around 50%",
          "Approximately 70%",
          "Exactly 100%"
        ],
        "correctAnswer": 2,
        "explanation": "Statistical institutional studies establish that the London Open Killzone (02:00-05:00 EST) prints the extreme high or low of the daily range ~70% of the time."
      },
      {
        "id": "q-02-12",
        "question": "What is the primary characteristic of the London Close Killzone (10:00 AM - 12:00 PM EST)?",
        "options": [
          "Explosive trend continuation of 200 pips",
          "Institutional profit-taking and counter-trend retracements",
          "Zero trading volume and market closure",
          "Asian range high breakout"
        ],
        "correctAnswer": 1,
        "explanation": "As European trading desks close their books for the day, institutional profit-taking frequently sparks a counter-trend retracement."
      }
    ]
  },
  {
    "id": "mod-03-1",
    "title": "Power of 3 (PO3 / AMD) & The Judas Swing",
    "slug": "power-of-3-po3-amd",
    "level": "advanced",
    "levelNumber": 3,
    "levelTitle": "Advanced Institutional Concepts",
    "order": 1,
    "estimatedReadTime": "11 min",
    "description": "Accumulation, Manipulation (Judas Swing), and Distribution candle anatomy for daily and intraday execution.",
    "prerequisites": [
      "Time & Price Killzones"
    ],
    "badgeColor": "indigo",
    "filePath": "03-ADVANCED/01-power-of-3-po3-amd.md",
    "keyTakeaways": [
      "Every institutional expansion candle follows PO3: Open -> Manipulation (wick) -> Distribution (expansion body) -> Close.",
      "In a bullish day: Accumulation near midnight, Judas Swing down to discount below Midnight Open, Distribution rally upward.",
      "Never chase the Judas Swing; wait for the liquidity sweep and shift to trade the Distribution phase."
    ],
    "quiz": [
      {
        "id": "q-03-1",
        "question": "What does the 'AMD' acronym stand for in the ICT Power of 3 model?",
        "options": [
          "Asset Management Desk",
          "Accumulation, Manipulation, Distribution",
          "Algorithmic Market Divergence",
          "Average Mean Displacement"
        ],
        "correctAnswer": 1,
        "explanation": "Power of 3 deconstructs every candlestick cycle into Accumulation (range), Manipulation (Judas false break), and Distribution (true expansion)."
      },
      {
        "id": "q-03-2",
        "question": "In a bullish daily candle (OLHC), where does the Judas Swing occur relative to the 00:00 Midnight Open?",
        "options": [
          "It drives price upward into premium first",
          "It drives price downward below the 00:00 Open into discount to engineer sell stops",
          "It stays pinned exactly at the open until 16:00 EST",
          "It only trades during Asian session"
        ],
        "correctAnswer": 1,
        "explanation": "On a bullish day, the algorithm manipulates price below the Midnight Open to sweep Sell-Side Liquidity before driving the true upward trend."
      },
      {
        "id": "q-03-3",
        "question": "How should an institutional trader respond during the Judas Swing phase?",
        "options": [
          "Aggressively short the breakdown momentum",
          "Wait patiently for the liquidity sweep and subsequent Market Structure Shift before entering the true trend",
          "Place market orders in both directions with tight trailing stops",
          "Close all charting software until market close"
        ],
        "correctAnswer": 1,
        "explanation": "Retail traders get baited into the Judas breakdown; institutional traders wait for the liquidity grab and MSS to enter the real distribution move."
      }
    ]
  },
  {
    "id": "mod-03-2",
    "title": "SMT Divergence (Smart Money Technique)",
    "slug": "smt-divergence",
    "level": "advanced",
    "levelNumber": 3,
    "levelTitle": "Advanced Institutional Concepts",
    "order": 2,
    "estimatedReadTime": "11 min",
    "description": "Cracks in correlation across correlated instruments (EUR vs GBP vs DXY, ES vs NQ) revealing stealth institutional accumulation.",
    "prerequisites": [
      "Power of 3 & Judas Swing"
    ],
    "badgeColor": "indigo",
    "filePath": "03-ADVANCED/02-smt-divergence.md",
    "keyTakeaways": [
      "SMT is a non-confirmation between two historically correlated assets.",
      "Bullish SMT: Asset A makes a lower low while Asset B makes a higher low (Asset B shows institutional strength).",
      "Bearish SMT: Asset A makes a higher high while Asset B fails with a lower high.",
      "The asset showing relative strength/weakness is the optimal instrument to execute."
    ],
    "quiz": [
      {
        "id": "q-03-4",
        "question": "What constitutes a Bullish SMT Divergence between ES (S&P 500) and NQ (Nasdaq 100)?",
        "options": [
          "Both ES and NQ make simultaneous new lower lows",
          "ES sweeps a key low to make a lower low, while NQ holds and forms a higher low",
          "NQ volume exceeds ES volume by 50%",
          "DXY trades higher while ES trades higher"
        ],
        "correctAnswer": 1,
        "explanation": "When ES makes a lower low but NQ fails to confirm and forms a higher low, institutional smart money is secretly absorbing and supporting NQ."
      },
      {
        "id": "q-03-5",
        "question": "When Bullish SMT divergence appears, which instrument is typically the preferred vehicle for long entry?",
        "options": [
          "The weaker asset making lower lows",
          "The stronger asset refusing to make new lows (holding higher lows)",
          "An uncorrelated commodity like crude oil",
          "The asset with the highest retail popularity"
        ],
        "correctAnswer": 1,
        "explanation": "The asset displaying relative institutional sponsorship (the one holding the higher low) generally explodes higher with greater velocity."
      },
      {
        "id": "q-03-6",
        "question": "Between EUR/USD, GBP/USD, and the US Dollar Index (DXY), what relationship indicates healthy institutional correlation?",
        "options": [
          "All three assets moving in identical directions",
          "EUR and GBP moving in tandem, inversely mirrored against DXY",
          "DXY lagging EUR by 24 hours",
          "GBP trading at exactly twice the volatility of DXY"
        ],
        "correctAnswer": 1,
        "explanation": "EUR/USD and GBP/USD should move synchronously, while DXY should mirror them inversely. Any disruption is a 'crack in correlation' (SMT)."
      }
    ]
  },
  {
    "id": "mod-03-3",
    "title": "Advanced PD Arrays & Institutional Footprints",
    "slug": "advanced-pd-arrays",
    "level": "advanced",
    "levelNumber": 3,
    "levelTitle": "Advanced Institutional Concepts",
    "order": 3,
    "estimatedReadTime": "12 min",
    "description": "The complete PD Array matrix hierarchy, Inversion FVGs (IFVG), Balanced Price Ranges (BPR), and Propulsion Blocks.",
    "prerequisites": [
      "Breaker Blocks & Mitigation Blocks"
    ],
    "badgeColor": "indigo",
    "filePath": "03-ADVANCED/03-advanced-pd-arrays.md",
    "keyTakeaways": [
      "The PD Array Matrix hierarchy ranks arrays from Mitigation/Breaker, Order Block, FVG, to Old High/Low.",
      "Inversion FVG (IFVG): an invalidated FVG that flips support/resistance polarity upon a displacement break.",
      "Balanced Price Range (BPR): overlapping bullish and bearish FVGs providing ultra-high-probability rejection zones."
    ],
    "quiz": [
      {
        "id": "q-03-7",
        "question": "What is an Inversion Fair Value Gap (IFVG)?",
        "options": [
          "A Fair Value Gap that is twice as large as the previous candle",
          "An FVG that price aggressively breached, flipping its role from support to resistance (or vice versa)",
          "An FVG that only forms on Sunday opening gaps",
          "A gap that is completely filled within 60 seconds"
        ],
        "correctAnswer": 1,
        "explanation": "An Inversion FVG occurs when price forcefully violates an existing FVG. The level flips polarity and is retested as support or resistance."
      },
      {
        "id": "q-03-8",
        "question": "What defines a Balanced Price Range (BPR)?",
        "options": [
          "A trading range between the 200 EMA and 50 EMA",
          "The overlapping price region where an aggressive upward FVG is met by an aggressive downward FVG",
          "A session where volume is equally balanced between buyers and sellers",
          "The midpoint of the Asian range"
        ],
        "correctAnswer": 1,
        "explanation": "A Balanced Price Range is formed by opposing overlapping Fair Value Gaps, creating a two-way delivery zone that price respects with high precision."
      },
      {
        "id": "q-03-9",
        "question": "What is a Propulsion Block in ICT methodology?",
        "options": [
          "An Order Block that forms directly nested inside a previously mitigated Order Block, launching explosive continuation",
          "A candle with a zero body that causes a trend reversal",
          "The opening candle of the New York trading session",
          "A breakout candle through an old weekly high"
        ],
        "correctAnswer": 0,
        "explanation": "A Propulsion Block forms within an already active Order Block, demonstrating urgent institutional accumulation and driving immediate price expansion."
      }
    ]
  },
  {
    "id": "mod-03-4",
    "title": "Market Maker Models (MMBM & MMSM)",
    "slug": "market-maker-models-mmxm",
    "level": "advanced",
    "levelNumber": 3,
    "levelTitle": "Advanced Institutional Concepts",
    "order": 4,
    "estimatedReadTime": "12 min",
    "description": "Original Consolidation, Sell Curve engineering, Smart Money Reversal (SMR), and Buy Curve execution delivery.",
    "prerequisites": [
      "Advanced PD Arrays"
    ],
    "badgeColor": "indigo",
    "filePath": "03-ADVANCED/04-market-maker-models-mmxm.md",
    "keyTakeaways": [
      "Every complete institutional campaign begins and ends at an Original Consolidation.",
      "The Sell Curve engineers retail liquidity; the Smart Money Reversal (SMR) marks the structural shift.",
      "The Buy Curve re-prices back to Original Consolidation, offering low-risk re-accumulation entry stages."
    ],
    "quiz": [
      {
        "id": "q-03-10",
        "question": "Where is the terminal take-profit objective located in a complete Market Maker Buy Model (MMBM)?",
        "options": [
          "At the 50-period moving average",
          "At the Original Consolidation from which the Sell Curve originally originated",
          "At an arbitrary 100-pip fixed profit target",
          "At the previous month's lowest candle"
        ],
        "correctAnswer": 1,
        "explanation": "The entire MMXM framework completes its cycle when price re-prices back into the resting liquidity of the Original Consolidation."
      },
      {
        "id": "q-03-11",
        "question": "What marks the inflection point between the Sell Curve and the Buy Curve in an MMBM?",
        "options": [
          "An RSI reading falling below 20",
          "The Smart Money Reversal (SMR), typically validated by Turtle Soup and SMT Divergence",
          "A sudden news tweet from a central banker",
          "The start of the weekend close"
        ],
        "correctAnswer": 1,
        "explanation": "The SMR is the turning apex of the model where institutional accumulation purges remaining stops, shifts structure, and initiates the buy curve."
      },
      {
        "id": "q-03-12",
        "question": "Why are Buy Curve entries considered higher probability than bottom picking the SMR?",
        "options": [
          "Because spread is lower on the buy curve",
          "Because institutional direction has already been confirmed by the displacement shift and SMR",
          "Because all retail traders are buying the buy curve",
          "Because buy curves only form during Asian session"
        ],
        "correctAnswer": 1,
        "explanation": "Entering on the Buy Curve after confirmed SMR provides clear structural invalids, defined FVGs, and established institutional sponsorship."
      }
    ]
  },
  {
    "id": "mod-03-5",
    "title": "IPDA Data Ranges, CBDR & Standard Deviation Projections",
    "slug": "ipda-lookback-ranges",
    "level": "advanced",
    "levelNumber": 3,
    "levelTitle": "Advanced Institutional Concepts",
    "order": 5,
    "estimatedReadTime": "11 min",
    "description": "20, 40, and 60-day IPDA institutional lookback cycles, Central Bank Dealers Range (CBDR), and Flout projections.",
    "prerequisites": [
      "Time & Price Killzones"
    ],
    "badgeColor": "indigo",
    "filePath": "03-ADVANCED/05-ipda-lookback-ranges.md",
    "keyTakeaways": [
      "IPDA algorithm references institutional dealing history over 20-day, 40-day, and 60-day trailing windows.",
      "Central Bank Dealers Range (CBDR) spans 14:00 to 20:00 EST: ideal range size is 20 to 30 pips.",
      "Standard deviations of the CBDR or Asian Range project precise institutional targets (2 to 4 SDs)."
    ],
    "quiz": [
      {
        "id": "q-03-13",
        "question": "What are the three core IPDA trailing lookback institutional data cycles?",
        "options": [
          "5, 10, and 15 days",
          "20, 40, and 60 trading days",
          "50, 100, and 200 trading days",
          "30, 60, and 90 calendar days"
        ],
        "correctAnswer": 1,
        "explanation": "IPDA operates with 20-day, 40-day, and 60-day institutional trailing lookback windows to benchmark liquidity highs and lows."
      },
      {
        "id": "q-03-14",
        "question": "What time window defines the Central Bank Dealers Range (CBDR)?",
        "options": [
          "02:00 to 05:00 EST",
          "08:30 to 11:00 EST",
          "14:00 to 20:00 EST",
          "20:00 to 00:00 EST"
        ],
        "correctAnswer": 2,
        "explanation": "CBDR is established between 14:00 and 20:00 EST, representing the institutional consolidation benchmark for daily standard deviation projections."
      },
      {
        "id": "q-03-15",
        "question": "What standard deviation projection multiplier commonly marks the daily terminal expansion target?",
        "options": [
          "0.5 to 1.0 standard deviations",
          "2.0 to 4.0 standard deviations of the CBDR / Asian Range",
          "10.0 standard deviations",
          "50.0 standard deviations"
        ],
        "correctAnswer": 1,
        "explanation": "When daily volatility expands, institutional delivery frequently terminates between 2.0 to 4.0 standard deviations of the base consolidation range."
      }
    ]
  },
  {
    "id": "mod-03-6",
    "title": "The Commitment of Traders (COT), Bond Yields & Intermarket Macro",
    "slug": "cot-and-intermarket-macro",
    "level": "advanced",
    "levelNumber": 3,
    "levelTitle": "Advanced Institutional Concepts",
    "order": 6,
    "estimatedReadTime": "14 min",
    "description": "Deconstructing commercial hedgers vs large speculators, US 10Y/30Y Treasury yields, DXY correlation, and seasonal tendencies.",
    "prerequisites": [
      "IPDA Lookback Ranges"
    ],
    "badgeColor": "indigo",
    "filePath": "03-ADVANCED/06-cot-and-intermarket-macro.md",
    "keyTakeaways": [
      "Commercial Hedgers are the true Smart Money: track their extreme net long or net short positions in the weekly COT report.",
      "Bond Yields lead currency moves: rising US Treasury yields generate bullish tailwinds for the US Dollar.",
      "Seasonal tendencies provide statistical probability filters across multi-year cycles."
    ],
    "quiz": [
      {
        "id": "q-03-16",
        "question": "Which participant group in the CFTC Commitment of Traders (COT) report represents the true 'Smart Money'?",
        "options": [
          "Non-Reportable Retail Traders",
          "Commercial Hedgers (producers, merchants, and central banking desks)",
          "Large Speculators (commodity trading advisors and hedge funds)",
          "Financial media commentators"
        ],
        "correctAnswer": 1,
        "explanation": "Commercial Hedgers participate directly in the underlying physical asset and represent the informed institutional smart money."
      },
      {
        "id": "q-03-17",
        "question": "How do US Treasury Bond Yields typically correlate with the US Dollar Index (DXY)?",
        "options": [
          "They have zero historical correlation",
          "They generally exhibit a positive correlation (rising yields bolster dollar demand)",
          "They are strictly inversely correlated 100% of the time",
          "Yields only correlate with European equity markets"
        ],
        "correctAnswer": 1,
        "explanation": "Capital flows toward higher real returns. Rising US bond yields attract foreign capital into dollar-denominated assets, driving DXY higher."
      },
      {
        "id": "q-03-18",
        "question": "What is the primary utility of historical seasonal tendencies in ICT macro analysis?",
        "options": [
          "They serve as automated mechanical buy/sell triggers without price confirmation",
          "They provide statistical directional probability filters over multi-year calendar cycles",
          "They predict the exact minute a trend will reverse",
          "They replace the need to identify Fair Value Gaps"
        ],
        "correctAnswer": 1,
        "explanation": "Seasonal tendencies indicate recurring institutional capital flow patterns across months, serving as high-level probabilistic filters."
      }
    ]
  },
  {
    "id": "mod-03-7",
    "title": "Tape Reading & Algorithmic Price Delivery Mechanics",
    "slug": "tape-reading-and-algorithmic-delivery",
    "level": "advanced",
    "levelNumber": 3,
    "levelTitle": "Advanced Institutional Concepts",
    "order": 7,
    "estimatedReadTime": "10 min",
    "description": "Reading raw quote delivery without indicators, the 4 algorithmic modes, speed of execution, and wick vs body laws.",
    "prerequisites": [
      "All Level 01-03 Modules"
    ],
    "badgeColor": "indigo",
    "filePath": "03-ADVANCED/07-tape-reading-and-algorithmic-delivery.md",
    "keyTakeaways": [
      "The Law of Candlesticks: Candle bodies tell the true story of institutional volume; wicks demonstrate liquidity sweeps.",
      "The 4 Algorithmic Modes: Consolidation -> Expansion -> Retracement -> Reversal.",
      "Tape reading assesses quote delivery speed, bid/ask absorption, and instantaneous FVG respect without lagging indicators."
    ],
    "quiz": [
      {
        "id": "q-03-19",
        "question": "What is the core ICT law regarding candlestick bodies versus wicks?",
        "options": [
          "Wicks represent true volume and bodies represent noise",
          "Bodies represent institutional volume and conviction; wicks represent liquidity purges and price rejection",
          "Bodies and wicks have identical significance in algorithmic quoting",
          "Only wicks matter for calculating stop placement"
        ],
        "correctAnswer": 1,
        "explanation": "In ICT tape reading doctrine, candlestick bodies reveal where institutional volume closed, while wicks reveal liquidity raids."
      },
      {
        "id": "q-03-20",
        "question": "What are the four discrete states through which the IPDA algorithm cycles?",
        "options": [
          "Bullish, Bearish, Sideways, Random",
          "Consolidation, Expansion, Retracement, Reversal",
          "Overbought, Oversold, Neutral, Divergent",
          "Morning, Afternoon, Evening, Midnight"
        ],
        "correctAnswer": 1,
        "explanation": "IPDA delivers price through four repeating cyclical modes: Consolidation -> Expansion -> Retracement -> Reversal."
      },
      {
        "id": "q-03-21",
        "question": "During an aggressive Expansion phase, how should institutional price delivery react to newly formed Fair Value Gaps?",
        "options": [
          "Price should deeply penetrate and close beyond the entire FVG",
          "Price should respect the opening tick or Consequent Encroachment without closing bodies inside",
          "Price must stall for at least 3 hours before moving",
          "Price should trade completely sideways"
        ],
        "correctAnswer": 1,
        "explanation": "In energetic expansion, IPDA barely taps the FVG (often only the top tick or C.E.) before accelerating immediately in the trend direction."
      }
    ]
  },
  {
    "id": "mod-04-1",
    "title": "The ICT 2022 Mentorship Model",
    "slug": "ict-2022-mentorship-model",
    "level": "execution-models",
    "levelNumber": 4,
    "levelTitle": "Execution Models & Strategies",
    "order": 1,
    "estimatedReadTime": "13 min",
    "description": "The complete mechanical bread-and-butter model: liquidity run, MSS with displacement, FVG retest, stop placement, and DOL target.",
    "prerequisites": [
      "Market Structure",
      "Imbalances & FVG",
      "Killzones"
    ],
    "badgeColor": "amber",
    "filePath": "04-EXECUTION-MODELS-AND-STRATEGIES/01-ict-2022-mentorship-model.md",
    "keyTakeaways": [
      "Step 1: Liquidity Purge: Price must first sweep a key HTF swing high/low during an active Killzone.",
      "Step 2: Displacement Shift: Violent MSS leaving an unmistakable Fair Value Gap.",
      "Step 3: Execution Trigger: Limit order at FVG entry; stop loss above/below displacement swing; target opposite liquidity pool."
    ],
    "quiz": [
      {
        "id": "q-04-1",
        "question": "What is Step 1 in the mechanical ICT 2022 Mentorship Model?",
        "options": [
          "Wait for an RSI divergence signal",
          "A deliberate liquidity run purging a key prior high (BSL) or low (SSL) during a Killzone",
          "Place a market order immediately at the 09:30 AM equity open",
          "Wait for the 200 EMA to cross over the 50 EMA"
        ],
        "correctAnswer": 1,
        "explanation": "The setup requires an initial liquidity purge to engineer order volume before institutional reversal occurs."
      },
      {
        "id": "q-04-2",
        "question": "Where is the entry order placed in a standard ICT 2022 model execution?",
        "options": [
          "At the market price as soon as the old high is broken",
          "At the first tick or Consequent Encroachment of the Fair Value Gap created during displacement",
          "At the 50% midpoint of the daily candle",
          "Under the previous day low"
        ],
        "correctAnswer": 1,
        "explanation": "Entries are executed passively or with limit orders inside the newly created Fair Value Gap on retracement."
      },
      {
        "id": "q-04-3",
        "question": "Where is the protective stop-loss anchored in a Bearish 2022 Model trade?",
        "options": [
          "10 pips below the entry level",
          "Safely above the swing high that swept the liquidity prior to displacement",
          "At the New York Midnight open price",
          "At the breakeven level immediately upon entry"
        ],
        "correctAnswer": 1,
        "explanation": "The stop-loss must rest safely above the swing high that engineered the liquidity purge, as institutional order flow will not exceed it if valid."
      }
    ]
  },
  {
    "id": "mod-04-2",
    "title": "The ICT Silver Bullet Strategy",
    "slug": "silver-bullet-strategy",
    "level": "execution-models",
    "levelNumber": 4,
    "levelTitle": "Execution Models & Strategies",
    "order": 2,
    "estimatedReadTime": "10 min",
    "description": "The 60-minute precision weapon operating at 03:00-04:00, 10:00-11:00, and 14:00-15:00 NY Time targeting 10-15 handles.",
    "prerequisites": [
      "ICT 2022 Mentorship Model"
    ],
    "badgeColor": "amber",
    "filePath": "04-EXECUTION-MODELS-AND-STRATEGIES/02-silver-bullet-strategy.md",
    "keyTakeaways": [
      "The Three Silver Bullet Windows: 03:00-04:00 EST (London), 10:00-11:00 EST (NY AM), 14:00-15:00 EST (NY PM).",
      "Objective Target: 10 to 15 index handles (or 15-20 forex pips) targeting the nearest un-swept liquidity pool or FVG.",
      "Strict Execution Rule: If no clean FVG forms within the 60-minute window, no trade is taken."
    ],
    "quiz": [
      {
        "id": "q-04-4",
        "question": "What are the three strict 60-minute execution windows for the ICT Silver Bullet?",
        "options": [
          "01:00-02:00, 08:00-09:00, 12:00-13:00 EST",
          "03:00-04:00, 10:00-11:00, 14:00-15:00 EST / EDT",
          "09:30-10:30, 11:30-12:30, 15:00-16:00 EST",
          "20:00-21:00, 23:00-00:00, 04:00-05:00 EST"
        ],
        "correctAnswer": 1,
        "explanation": "The Silver Bullet operates strictly in three 1-hour algorithmic windows: 03-04 (London), 10-11 (NY AM), and 14-15 (NY PM) New York time."
      },
      {
        "id": "q-04-5",
        "question": "What is the primary profit target objective when trading the Silver Bullet on index futures (ES/NQ)?",
        "options": [
          "50 to 100 handles",
          "10 to 15 index handles (NQ: 15-25 handles)",
          "1 to 2 handles scalping spread",
          "Holding through the weekend close"
        ],
        "correctAnswer": 1,
        "explanation": "The Silver Bullet is engineered as a high-frequency bread-and-butter model capturing a clean, consistent 10-15 handles."
      },
      {
        "id": "q-04-6",
        "question": "What rule applies if the 60-minute Silver Bullet window elapses without a valid FVG forming?",
        "options": [
          "Market order in the direction of the daily bias anyway",
          "Close the chart and take no trade; the setup did not qualify",
          "Double the risk in the next session",
          "Switch to a 10-second chart and chase price"
        ],
        "correctAnswer": 1,
        "explanation": "Silver Bullet discipline dictates standing down completely if no clean FVG forms during the designated 60-minute hour."
      }
    ]
  },
  {
    "id": "mod-04-3",
    "title": "The Turtle Soup Strategy (Liquidity Purge & Revert)",
    "slug": "turtle-soup-model",
    "level": "execution-models",
    "levelNumber": 4,
    "levelTitle": "Execution Models & Strategies",
    "order": 3,
    "estimatedReadTime": "10 min",
    "description": "Punishing false breakout traders by entering when price sweeps an established range high/low and immediately rejects back inside.",
    "prerequisites": [
      "Liquidity Concepts",
      "Market Structure"
    ],
    "badgeColor": "amber",
    "filePath": "04-EXECUTION-MODELS-AND-STRATEGIES/03-turtle-soup-model.md",
    "keyTakeaways": [
      "Turtle Soup exploits retail 20-day breakout traders by anticipating failed breakouts beyond old highs/lows.",
      "Setup: Price sweeps an established swing level, but candle bodies fail to close beyond it.",
      "Turtle Soup Plus One (TS+1): Breakout holds for one day, but violently fails and collapses on Day 2."
    ],
    "quiz": [
      {
        "id": "q-04-7",
        "question": "What historical trading group does the 'Turtle Soup' strategy directly exploit?",
        "options": [
          "High-frequency algorithmic market making firms",
          "Richard Dennis's classic trend-following retail 'Turtle' breakout rules",
          "Cryptocurrency swing traders",
          "Floor brokers on the Chicago Mercantile Exchange"
        ],
        "correctAnswer": 1,
        "explanation": "Turtle Soup fades the retail 20-day high/low breakout rules popularized by Richard Dennis, capitalizing on failed breakout stop purges."
      },
      {
        "id": "q-04-8",
        "question": "What candlestick signal confirms a genuine Turtle Soup reversal?",
        "options": [
          "Multiple consecutive wide-bodied candles closing far above the level",
          "A price wick that sweeps the old high/low, followed by candle bodies closing back inside the range",
          "A gap that remains open for 5 days",
          "RSI crossing above 70"
        ],
        "correctAnswer": 1,
        "explanation": "When price wicks through a major level to sweep stops but the candle body immediately closes back inside, Turtle Soup is confirmed."
      },
      {
        "id": "q-04-9",
        "question": "What is 'Turtle Soup Plus One' (TS+1)?",
        "options": [
          "Adding one extra contract to every losing trade",
          "A variation where price closes outside the range on Day 1, only to fail violently and re-enter on Day 2",
          "A trade that takes exactly one week to play out",
          "Trading only on Mondays"
        ],
        "correctAnswer": 1,
        "explanation": "In TS+1, breakout traders are given false confidence on Day 1, creating maximum trapped volume when price reverses on Day 2."
      }
    ]
  },
  {
    "id": "mod-04-4",
    "title": "Daily Profiles, Weekly Profiles & Algorithmic Macros",
    "slug": "daily-and-weekly-profiles",
    "level": "execution-models",
    "levelNumber": 4,
    "levelTitle": "Execution Models & Strategies",
    "order": 4,
    "estimatedReadTime": "12 min",
    "description": "Classic Tuesday Low of the Week, Midweek Reversals, London Expansion, and recurring 20-minute intraday macro windows.",
    "prerequisites": [
      "Time & Price Killzones",
      "Power of 3"
    ],
    "badgeColor": "amber",
    "filePath": "04-EXECUTION-MODELS-AND-STRATEGIES/04-daily-and-weekly-profiles.md",
    "keyTakeaways": [
      "In a bullish week, Tuesday London Open frequently establishes the Low of the Week (Classic Tuesday Low profile).",
      "Midweek Reversals routinely develop on Wednesday during NY AM after London sweeps weekly high liquidity.",
      "Algorithmic Macros are recurring 20-minute execution sprints (e.g., 09:50-10:10, 10:50-11:10, 15:15-15:45 EST)."
    ],
    "quiz": [
      {
        "id": "q-04-10",
        "question": "In a bullish institutional week, which session and day statistically creates the Low of the Week (LOW)?",
        "options": [
          "Monday Asian session",
          "Tuesday London Open (or NY Open)",
          "Thursday afternoon close",
          "Friday 15:30 EST"
        ],
        "correctAnswer": 1,
        "explanation": "Statistically, Tuesday London/NY open creates the Low of the Week in ~70% of bullish weekly profiles (Classic Tuesday Low)."
      },
      {
        "id": "q-04-11",
        "question": "What is an 'Algorithmic Macro' in ICT intraday delivery?",
        "options": [
          "A high-level macroeconomic news speech by the Federal Reserve",
          "A scheduled 20-to-30 minute algorithmic repricing window where orders are pushed to specific targets",
          "A spreadsheet macro used for accounting",
          "The daily range calculated over 200 bars"
        ],
        "correctAnswer": 1,
        "explanation": "ICT Macros are 20-minute algorithmic execution programs running at precise intraday times (e.g. 09:50-10:10 EST) to inject volatility."
      },
      {
        "id": "q-04-12",
        "question": "Which macro window is renowned for resolving the NY AM trend and triggering institutional acceleration?",
        "options": [
          "09:50 AM to 10:10 AM EST",
          "12:00 PM to 12:20 PM EST",
          "16:00 PM to 16:30 PM EST",
          "06:00 AM to 06:20 AM EST"
        ],
        "correctAnswer": 0,
        "explanation": "The 09:50-10:10 AM EST macro directly follows the initial equity open churn and initiates the true primary directional leg of the NY morning."
      }
    ]
  },
  {
    "id": "mod-04-5",
    "title": "Additional ICT High-Probability Execution Models",
    "slug": "additional-ict-models",
    "level": "execution-models",
    "levelNumber": 4,
    "levelTitle": "Execution Models & Strategies",
    "order": 5,
    "estimatedReadTime": "9 min",
    "description": "London Day Open, Asian Range Scalp, NY PM Expansion, and the 20-Pip Daily Bread forex scalping model.",
    "prerequisites": [
      "ICT 2022 Mentorship Model",
      "Silver Bullet"
    ],
    "badgeColor": "amber",
    "filePath": "04-EXECUTION-MODELS-AND-STRATEGIES/05-additional-ict-models.md",
    "keyTakeaways": [
      "London Day Open: Exploits the 02:00-03:00 EST Judas swing against the Asian range to catch the primary day trend.",
      "NY PM Expansion: Capitalizes on institutional positioning between 13:30 and 15:45 EST ahead of the bond close.",
      "The 20-Pip Daily Bread model focuses on taking 20 pips out of the daily range with high mathematical expectancy."
    ],
    "quiz": [
      {
        "id": "q-04-13",
        "question": "What is the primary target for the London Day Open Judas reversal?",
        "options": [
          "The 200 EMA on the 4-hour chart",
          "The opposing Asian Session liquidity level (ASH or ASL) and the HTF Draw on Liquidity",
          "The low of last month",
          "A fixed 5-pip scalp target"
        ],
        "correctAnswer": 1,
        "explanation": "The London Open sweeps one side of the Asian range (manipulation) to target the opposing Asian session high/low with rapid expansion."
      },
      {
        "id": "q-04-14",
        "question": "Why does the NY PM session (13:30 - 15:45 EST) produce reliable expansions?",
        "options": [
          "Because European traders are just opening their desks",
          "Institutional desks deploy closing benchmark orders and reposition ahead of the bond market settlement",
          "Retail volume reaches its absolute peak",
          "Economic news is released every 15 minutes"
        ],
        "correctAnswer": 1,
        "explanation": "NY PM trading is driven by institutional fixing, treasury benchmark alignments, and closing balance sheet reallocations."
      },
      {
        "id": "q-04-15",
        "question": "What mindset defines the '20-Pip Daily Bread' scalping framework?",
        "options": [
          "Trying to capture every tick of a 200-pip run",
          "Consistency and discipline: extracting a high-probability 20 pips during prime killzones and banking profits",
          "Risking 100 pips to make 20 pips",
          "Trading 50 times per day across multiple pairs"
        ],
        "correctAnswer": 1,
        "explanation": "The 20-pip model instills consistency by focusing on clean, disciplined execution rather than greedily chasing full range expansions."
      }
    ]
  },
  {
    "id": "mod-05-1",
    "title": "Interactive Case Studies & Chart Practice Scenarios",
    "slug": "case-studies-and-chart-scenarios",
    "level": "practice",
    "levelNumber": 5,
    "levelTitle": "Practice, Drills & Quizzes",
    "order": 1,
    "estimatedReadTime": "13 min",
    "description": "Three real-world multi-timeframe scenarios: EUR/USD London Judas Swing, NQ Silver Bullet, and ES Market Maker Buy Model.",
    "prerequisites": [
      "All Execution Models"
    ],
    "badgeColor": "rose",
    "filePath": "05-PRACTICE-AND-DRILLS/01-case-studies-and-chart-scenarios.md",
    "keyTakeaways": [
      "Always align timeframe delivery: Daily bias determines DOL -> 15m determines structure -> 1m/5m provides entry trigger.",
      "Execution checklist: Swept liquidity? Valid displacement? Clean FVG? In discount/premium? Inside Killzone?",
      "Case studies build subconscious pattern recognition through deliberate chart dissection."
    ],
    "quiz": [
      {
        "id": "q-05-1",
        "question": "In Scenario 1 (EUR/USD London Judas Swing), what was the required catalyst before considering a long entry?",
        "options": [
          "EUR/USD making a new all-time high",
          "A London Open sweep of the Asian Session Low into a 4H Bullish FVG followed by 5m MSS with displacement",
          "An interest rate cut by the ECB",
          "A MACD bullish crossover on the daily chart"
        ],
        "correctAnswer": 1,
        "explanation": "The setup required sweeping Asian sell stops into a higher timeframe discount array before shifting lower timeframe structure."
      },
      {
        "id": "q-05-2",
        "question": "In Scenario 2 (NQ 10:00 AM Silver Bullet), what served as the primary confirmation of institutional displacement?",
        "options": [
          "A single 1-minute doji candle",
          "Three consecutive wide-range bullish candles surging 40 handles leaving an energetic 5-minute FVG",
          "A high volume tweet from financial news outlets",
          "A break of the Asian session high during pre-market"
        ],
        "correctAnswer": 1,
        "explanation": "Displacement was evidenced by clean wide-bodied green candles surging through structure and leaving an unfilled 5m FVG."
      },
      {
        "id": "q-05-3",
        "question": "Why must a trader refrain from moving stop-losses to breakeven prematurely during an MMXM run?",
        "options": [
          "Because broker commissions increase when stops are moved",
          "Price frequently retraces to test internal Order Blocks and IFVGs before resuming the primary curve",
          "The exchange will reject the stop alteration",
          "Stops should never be moved under any circumstances"
        ],
        "correctAnswer": 1,
        "explanation": "Premature breakeven adjustments result in getting stopped out on routine, healthy internal retests prior to target delivery."
      }
    ]
  },
  {
    "id": "mod-05-2",
    "title": "Professional Trader Rulebook & Daily Execution Checklist",
    "slug": "trader-checklist-and-rules",
    "level": "practice",
    "levelNumber": 5,
    "levelTitle": "Practice, Drills & Quizzes",
    "order": 2,
    "estimatedReadTime": "10 min",
    "description": "The non-negotiable 6-Gate execution protocol, 0.5%-1% capital preservation risk parameters, and emotional drawdown rules.",
    "prerequisites": [
      "Interactive Case Studies"
    ],
    "badgeColor": "rose",
    "filePath": "05-PRACTICE-AND-DRILLS/02-trader-checklist-and-rules.md",
    "keyTakeaways": [
      "The 6-Gate Execution Protocol: Time Gate -> DOL Gate -> Liquidity Sweep Gate -> Displacement Gate -> Array Gate -> Risk Gate.",
      "Strict Risk Model: Risk 0.5% to 1.0% maximum per setup; cease trading for the day after 2 consecutive losses.",
      "Journaling is non-negotiable: Log HTF narrative, killzone time, entry trigger, emotions, and exit screenshot."
    ],
    "quiz": [
      {
        "id": "q-05-4",
        "question": "What happens if a setup meets 5 of the 6 Execution Gates, but fails Gate 1 (Time Gate — active Killzone)?",
        "options": [
          "Execute the trade with half position size",
          "ABORT: The trade is strictly disqualified; no trade is taken outside institutional time windows",
          "Execute the trade immediately using a market order",
          "Wait 5 minutes and enter anyway"
        ],
        "correctAnswer": 1,
        "explanation": "The 6-Gate Protocol is non-negotiable. If any gate fails—especially the Time Gate—the setup is disqualified."
      },
      {
        "id": "q-05-5",
        "question": "What is the mandatory trading rule following two consecutive losing trades in a single session?",
        "options": [
          "Double position size on the next trade to recover losses (martingale)",
          "Hard stop for the day: close the charting software and review trade journal tomorrow",
          "Switch to a different asset class and trade until breakeven",
          "Trade using 10-second charts"
        ],
        "correctAnswer": 1,
        "explanation": "A 2-loss circuit breaker protects the trader against emotional revenge trading and capital erosion."
      },
      {
        "id": "q-05-6",
        "question": "What is the minimum acceptable Risk-to-Reward ratio allowed by the ICT Professional Rulebook?",
        "options": [
          "1:0.5 (scalping)",
          "1:1 (equal risk and reward)",
          "1:2 minimum mathematical risk-to-reward",
          "1:10 on every single setup"
        ],
        "correctAnswer": 2,
        "explanation": "A minimum of 1:2 R:R ensures positive mathematical expectancy even with a modest 40-50% win rate."
      }
    ]
  }
];

export const ICT_GLOSSARY: GlossaryTerm[] = [
  {
    "id": "glossary-1",
    "letter": "A",
    "term": "AMD",
    "fullTerm": "AMD (Accumulation, Manipulation, Distribution)",
    "category": "Timing/Macros",
    "definition": "The core three-phase cycle of algorithmic price delivery (also known as *Power of 3*).",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "power-of-3-po3-amd",
      "title": "Power of 3 & Judas Swing"
    }
  },
  {
    "id": "glossary-2",
    "letter": "A",
    "term": "Array",
    "fullTerm": "Array (PD Array)",
    "category": "PD Arrays",
    "definition": "Any structural reference point used by IPDA to deliver price (Order Blocks, FVGs, Breakers, Old Highs/Lows, etc.).",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "advanced-pd-arrays",
      "title": "Advanced PD Arrays"
    }
  },
  {
    "id": "glossary-3",
    "letter": "A",
    "term": "Asian Range",
    "fullTerm": "Asian Range",
    "category": "Timing/Macros",
    "definition": "The consolidation price action between 19:00 (or 20:00) EST and 00:00 EST.",
    "sentiment": "timing",
    "relatedModule": {
      "level": "intermediate",
      "slug": "time-and-price-killzones",
      "title": "Time & Price Killzones"
    }
  },
  {
    "id": "glossary-4",
    "letter": "A",
    "term": "ASH / ASL",
    "fullTerm": "ASH / ASL",
    "category": "Timing/Macros",
    "definition": "Asian Session High / Asian Session Low. Resting liquidity benchmarks.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "intermediate",
      "slug": "time-and-price-killzones",
      "title": "Time & Price Killzones"
    }
  },
  {
    "id": "glossary-5",
    "letter": "A",
    "term": "ATR",
    "fullTerm": "ATR (Average True Range)",
    "category": "Macroeconomics",
    "definition": "The average volatility range an asset covers in a given period.",
    "sentiment": "neutral"
  },
  {
    "id": "glossary-6",
    "letter": "B",
    "term": "Balanced Price Range",
    "fullTerm": "Balanced Price Range (BPR)",
    "category": "PD Arrays",
    "definition": "An ultra-clean price zone formed when two opposing Fair Value Gaps overlap the same price coordinates.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "advanced-pd-arrays",
      "title": "Advanced PD Arrays"
    }
  },
  {
    "id": "glossary-7",
    "letter": "B",
    "term": "BISI",
    "fullTerm": "BISI (Buyside Imbalance, Sellside Inefficiency)",
    "category": "PD Arrays",
    "definition": "A Bullish Fair Value Gap formed by aggressive upward buying.",
    "sentiment": "bullish",
    "relatedModule": {
      "level": "foundations",
      "slug": "imbalances-and-fvg",
      "title": "Imbalances & FVGs"
    }
  },
  {
    "id": "glossary-8",
    "letter": "B",
    "term": "BOS",
    "fullTerm": "BOS (Break of Structure)",
    "category": "Market Structure",
    "definition": "When price breaks a swing high (in uptrend) or swing low (in downtrend) signaling **trend continuation**.",
    "formula": "BOS = Trend Continuation beyond Fractal Swing with candle close",
    "sentiment": "structural",
    "relatedModule": {
      "level": "foundations",
      "slug": "market-structure",
      "title": "Market Structure & Displacement"
    }
  },
  {
    "id": "glossary-9",
    "letter": "B",
    "term": "Breaker Block",
    "fullTerm": "Breaker Block (BB)",
    "category": "PD Arrays",
    "definition": "An invalidated Order Block that successfully swept liquidity (created a higher high or lower low) before market structure shifted. Acts as formidable support/resistance.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "intermediate",
      "slug": "breaker-and-mitigation-blocks",
      "title": "Breaker & Mitigation Blocks"
    }
  },
  {
    "id": "glossary-10",
    "letter": "B",
    "term": "BSL",
    "fullTerm": "BSL (Buy-Side Liquidity)",
    "category": "Market Structure",
    "definition": "A pool of resting buy stops (short stop-losses and breakout buyer orders) residing above old swing highs and equal highs.",
    "sentiment": "bullish",
    "relatedModule": {
      "level": "foundations",
      "slug": "liquidity-concepts",
      "title": "Liquidity Concepts"
    }
  },
  {
    "id": "glossary-11",
    "letter": "C",
    "term": "CBDR",
    "fullTerm": "CBDR (Central Bank Dealers Range)",
    "category": "Timing/Macros",
    "definition": "The consolidation window between 14:00 and 20:00 EST (ideally 20–30 pips) used to project intraday standard deviation targets.",
    "formula": "CBDR = High - Low (14:00 - 20:00 EST), Target 20–30 Pips",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "ipda-lookback-ranges",
      "title": "IPDA Data Ranges & CBDR"
    }
  },
  {
    "id": "glossary-12",
    "letter": "C",
    "term": "CHoCH",
    "fullTerm": "CHoCH (Change of Character)",
    "category": "Market Structure",
    "definition": "An alternative name for a Market Structure Shift (MSS), signaling a trend reversal.",
    "sentiment": "neutral"
  },
  {
    "id": "glossary-13",
    "letter": "C",
    "term": "Commitment of Traders",
    "fullTerm": "Commitment of Traders (COT)",
    "category": "Macroeconomics",
    "definition": "Weekly CFTC report tracking futures positions of Commercial Hedgers, Large Speculators, and Small Speculators.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "cot-and-intermarket-macro",
      "title": "COT & Intermarket Macro"
    }
  },
  {
    "id": "glossary-14",
    "letter": "C",
    "term": "Consequent Encroachment",
    "fullTerm": "Consequent Encroachment (C.E.)",
    "category": "PD Arrays",
    "definition": "The exact 50% midpoint of a Fair Value Gap or long candlestick wick.",
    "formula": "C.E. = Gap Low + (Gap High - Gap Low) × 0.50",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "imbalances-and-fvg",
      "title": "Imbalances & FVGs"
    }
  },
  {
    "id": "glossary-15",
    "letter": "C",
    "term": "Crack in Correlation",
    "fullTerm": "Crack in Correlation",
    "category": "Macroeconomics",
    "definition": "An intermarket divergence between normally mirrored assets (see *SMT Divergence*).",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "smt-divergence",
      "title": "SMT Divergence"
    }
  },
  {
    "id": "glossary-16",
    "letter": "D",
    "term": "Dealing Range",
    "fullTerm": "Dealing Range",
    "category": "Market Structure",
    "definition": "The defined price range between an anchor fractal Swing High and Swing Low.",
    "sentiment": "structural",
    "relatedModule": {
      "level": "intermediate",
      "slug": "premium-discount-and-ote",
      "title": "Premium vs Discount & OTE"
    }
  },
  {
    "id": "glossary-17",
    "letter": "D",
    "term": "Discount",
    "fullTerm": "Discount",
    "category": "Market Structure",
    "definition": "The lower 50% (< 50% Equilibrium) of a dealing range. Smart money buys here.",
    "formula": "Discount = Price < 50% Dealing Range Equilibrium",
    "sentiment": "bullish",
    "relatedModule": {
      "level": "intermediate",
      "slug": "premium-discount-and-ote",
      "title": "Premium vs Discount & OTE"
    }
  },
  {
    "id": "glossary-18",
    "letter": "D",
    "term": "Displacement",
    "fullTerm": "Displacement",
    "category": "Market Structure",
    "definition": "Aggressive, large-bodied candles that break structure and leave Fair Value Gaps, demonstrating institutional sponsorship.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "market-structure",
      "title": "Market Structure & Displacement"
    }
  },
  {
    "id": "glossary-19",
    "letter": "D",
    "term": "DOL",
    "fullTerm": "DOL (Draw on Liquidity)",
    "category": "Models",
    "definition": "The objective magnetic target price that IPDA is currently steering toward (e.g. an un-swept EQH or HTF FVG).",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "liquidity-concepts",
      "title": "Liquidity Concepts"
    }
  },
  {
    "id": "glossary-20",
    "letter": "E",
    "term": "EQH / EQL",
    "fullTerm": "EQH / EQL (Equal Highs / Equal Lows)",
    "category": "Market Structure",
    "definition": "Highly concentrated retail stop-loss pools. Prime targets for algorithmic liquidity purges.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "liquidity-concepts",
      "title": "Liquidity Concepts"
    }
  },
  {
    "id": "glossary-21",
    "letter": "E",
    "term": "Equilibrium",
    "fullTerm": "Equilibrium (EQ)",
    "category": "Market Structure",
    "definition": "The exact 50% mathematical midpoint of any dealing range, session, or price array.",
    "formula": "EQ = Dealing Range Low + (Range High - Range Low) × 0.50",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "intermediate",
      "slug": "premium-discount-and-ote",
      "title": "Premium vs Discount & OTE"
    }
  },
  {
    "id": "glossary-22",
    "letter": "E",
    "term": "ERL",
    "fullTerm": "ERL (External Range Liquidity)",
    "category": "Market Structure",
    "definition": "The prominent swing highs and lows bounding a macro dealing range.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "liquidity-concepts",
      "title": "Liquidity Concepts"
    }
  },
  {
    "id": "glossary-23",
    "letter": "F",
    "term": "Fair Value Gap",
    "fullTerm": "Fair Value Gap (FVG)",
    "category": "PD Arrays",
    "definition": "A 3-candlestick price imbalance where the wicks of candle 1 and candle 3 do not touch, leaving an inefficient void in candle 2.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "imbalances-and-fvg",
      "title": "Imbalances & FVGs"
    }
  },
  {
    "id": "glossary-24",
    "letter": "F",
    "term": "Flout",
    "fullTerm": "Flout",
    "category": "Models",
    "definition": "The standard deviation projection framework derived from the Asian Range or CBDR.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "ipda-lookback-ranges",
      "title": "IPDA Data Ranges & CBDR"
    }
  },
  {
    "id": "glossary-25",
    "letter": "F",
    "term": "FOMO",
    "fullTerm": "FOMO (Fear Of Missing Out)",
    "category": "Macroeconomics",
    "definition": "Retail psychological flaw of chasing green/red candles rather than waiting for retracements.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "practice",
      "slug": "trader-checklist-and-rules",
      "title": "Trader Checklist & Rules"
    }
  },
  {
    "id": "glossary-26",
    "letter": "I",
    "term": "IFVG",
    "fullTerm": "IFVG (Inversion Fair Value Gap)",
    "category": "PD Arrays",
    "definition": "A Fair Value Gap that was broken with momentum, flipping its role from support to resistance (or vice versa).",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "imbalances-and-fvg",
      "title": "Imbalances & FVGs"
    }
  },
  {
    "id": "glossary-27",
    "letter": "I",
    "term": "Inducement",
    "fullTerm": "Inducement",
    "category": "Market Structure",
    "definition": "A minor structural swing engineered by the algorithm to bait retail traders into entering prematurely before price reaches the true HTF PD Array.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "liquidity-concepts",
      "title": "Liquidity Concepts"
    }
  },
  {
    "id": "glossary-28",
    "letter": "I",
    "term": "Interbank Price Delivery Algorithm",
    "fullTerm": "Interbank Price Delivery Algorithm (IPDA)",
    "category": "Macroeconomics",
    "definition": "The proprietary central banking computer algorithm that quotes and delivers prices in foreign exchange and futures markets.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "what-is-smart-money-and-ipda",
      "title": "What is Smart Money & IPDA"
    }
  },
  {
    "id": "glossary-29",
    "letter": "I",
    "term": "IOFED",
    "fullTerm": "IOFED (Institutional Order Flow Entry Drill)",
    "category": "PD Arrays",
    "definition": "A shallow retracement that merely touches the first tick of an Order Block or FVG before continuing.",
    "sentiment": "neutral"
  },
  {
    "id": "glossary-30",
    "letter": "I",
    "term": "IRL",
    "fullTerm": "IRL (Internal Range Liquidity)",
    "category": "Market Structure",
    "definition": "Fair Value Gaps, Order Blocks, and minor swings nested inside a major dealing range.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "liquidity-concepts",
      "title": "Liquidity Concepts"
    }
  },
  {
    "id": "glossary-31",
    "letter": "J",
    "term": "Judas Swing",
    "fullTerm": "Judas Swing",
    "category": "Timing/Macros",
    "definition": "A deceptive, engineered false move (occurring at the London or NY Open) that sweeps liquidity before launching the true trend of the day.",
    "sentiment": "structural",
    "relatedModule": {
      "level": "advanced",
      "slug": "power-of-3-po3-amd",
      "title": "Power of 3 & Judas Swing"
    }
  },
  {
    "id": "glossary-32",
    "letter": "K",
    "term": "Killzone",
    "fullTerm": "Killzone",
    "category": "Timing/Macros",
    "definition": "A scheduled high-volatility trading window where commercial banking algorithms deploy orders (London Open, NY AM, London Close, NY PM).",
    "sentiment": "timing",
    "relatedModule": {
      "level": "intermediate",
      "slug": "time-and-price-killzones",
      "title": "Time & Price Killzones"
    }
  },
  {
    "id": "glossary-33",
    "letter": "L",
    "term": "Liquidity Pool",
    "fullTerm": "Liquidity Pool",
    "category": "Market Structure",
    "definition": "Any concentrated area of resting stop-loss and limit orders.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "liquidity-concepts",
      "title": "Liquidity Concepts"
    }
  },
  {
    "id": "glossary-34",
    "letter": "L",
    "term": "Liquidity Void",
    "fullTerm": "Liquidity Void",
    "category": "Market Structure",
    "definition": "An extreme imbalance formed by multiple consecutive large-bodied displacement candles.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "liquidity-concepts",
      "title": "Liquidity Concepts"
    }
  },
  {
    "id": "glossary-35",
    "letter": "L",
    "term": "London Close Killzone",
    "fullTerm": "London Close Killzone",
    "category": "Timing/Macros",
    "definition": "10:00 AM – 12:00 PM EST. Known for profit-taking retracements.",
    "formula": "Window: 10:00 AM - 12:00 PM EST (Profit-taking counter-trend)",
    "sentiment": "timing",
    "relatedModule": {
      "level": "intermediate",
      "slug": "time-and-price-killzones",
      "title": "Time & Price Killzones"
    }
  },
  {
    "id": "glossary-36",
    "letter": "L",
    "term": "London Open Killzone",
    "fullTerm": "London Open Killzone",
    "category": "Timing/Macros",
    "definition": "02:00 AM – 05:00 AM EST. Establishes the High or Low of the day in ~70% of trending sessions.",
    "formula": "Window: 02:00 - 05:00 AM EST (Creates High/Low in ~70% of days)",
    "sentiment": "timing",
    "relatedModule": {
      "level": "intermediate",
      "slug": "time-and-price-killzones",
      "title": "Time & Price Killzones"
    }
  },
  {
    "id": "glossary-37",
    "letter": "M",
    "term": "Macro",
    "fullTerm": "Macro (Algorithmic Macro)",
    "category": "Timing/Macros",
    "definition": "Recurring 20-to-30 minute algorithmic execution windows (e.g., 09:50–10:10 EST, 15:15–15:45 EST).",
    "formula": "Key Macros: 08:50-09:10, 09:50-10:10, 10:50-11:10, 13:10-13:30, 15:15-15:45 EST",
    "sentiment": "timing",
    "relatedModule": {
      "level": "execution-models",
      "slug": "daily-and-weekly-profiles",
      "title": "Daily & Weekly Profiles"
    }
  },
  {
    "id": "glossary-38",
    "letter": "M",
    "term": "Mean Threshold",
    "fullTerm": "Mean Threshold (M.T.)",
    "category": "PD Arrays",
    "definition": "The exact 50% midpoint of an Order Block candle.",
    "formula": "M.T. = Candle Low + (Candle High - Candle Low) × 0.50",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "intermediate",
      "slug": "order-blocks",
      "title": "Order Blocks & Mean Threshold"
    }
  },
  {
    "id": "glossary-39",
    "letter": "M",
    "term": "Mitigation Block",
    "fullTerm": "Mitigation Block",
    "category": "PD Arrays",
    "definition": "A failed Order Block formed on a *failure swing* (did NOT sweep liquidity before breaking structure).",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "intermediate",
      "slug": "breaker-and-mitigation-blocks",
      "title": "Breaker & Mitigation Blocks"
    }
  },
  {
    "id": "glossary-40",
    "letter": "M",
    "term": "MMBM",
    "fullTerm": "MMBM (Market Maker Buy Model)",
    "category": "Models",
    "definition": "Algorithmic framework mapping price delivery from original consolidation down through the sell curve to an SMR and up the buy curve.",
    "sentiment": "bullish",
    "relatedModule": {
      "level": "advanced",
      "slug": "market-maker-models-mmxm",
      "title": "Market Maker Models (MMXM)"
    }
  },
  {
    "id": "glossary-41",
    "letter": "M",
    "term": "MMSM",
    "fullTerm": "MMSM (Market Maker Sell Model)",
    "category": "Models",
    "definition": "Algorithmic framework mapping price delivery upward through the buy curve to an SMR and downward through the sell curve.",
    "sentiment": "bearish",
    "relatedModule": {
      "level": "advanced",
      "slug": "market-maker-models-mmxm",
      "title": "Market Maker Models (MMXM)"
    }
  },
  {
    "id": "glossary-42",
    "letter": "M",
    "term": "MSS",
    "fullTerm": "MSS (Market Structure Shift)",
    "category": "Market Structure",
    "definition": "When price sweeps liquidity and violently breaks a structural swing low/high with candle body closes and displacement.",
    "formula": "MSS = Trend Reversal beyond Fractal Swing with displacement & FVG",
    "sentiment": "structural",
    "relatedModule": {
      "level": "foundations",
      "slug": "market-structure",
      "title": "Market Structure & Displacement"
    }
  },
  {
    "id": "glossary-43",
    "letter": "N",
    "term": "NDOG",
    "fullTerm": "NDOG (New Day Opening Gap)",
    "category": "PD Arrays",
    "definition": "The price gap between yesterday’s official market settlement and the new day open.",
    "sentiment": "timing"
  },
  {
    "id": "glossary-44",
    "letter": "N",
    "term": "NWOG",
    "fullTerm": "NWOG (New Week Opening Gap)",
    "category": "PD Arrays",
    "definition": "The price gap between Friday’s futures/forex close and Sunday’s market reopen.",
    "sentiment": "timing"
  },
  {
    "id": "glossary-45",
    "letter": "O",
    "term": "OB",
    "fullTerm": "OB (Order Block)",
    "category": "PD Arrays",
    "definition": "The last opposing candle before an aggressive expansion that sweeps liquidity, breaks structure, and leaves an FVG.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "intermediate",
      "slug": "order-blocks",
      "title": "Order Blocks & Mean Threshold"
    }
  },
  {
    "id": "glossary-46",
    "letter": "O",
    "term": "OHLC / OLHC",
    "fullTerm": "OHLC / OLHC",
    "category": "Market Structure",
    "definition": "Open-High-Low-Close (Bearish) or Open-Low-High-Close (Bullish) daily candle structure.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "tape-reading-and-algorithmic-delivery",
      "title": "Tape Reading & Algorithmic Delivery"
    }
  },
  {
    "id": "glossary-47",
    "letter": "O",
    "term": "Open Interest",
    "fullTerm": "Open Interest (OI)",
    "category": "Macroeconomics",
    "definition": "The total number of open active futures/options contracts.",
    "sentiment": "timing",
    "relatedModule": {
      "level": "advanced",
      "slug": "cot-and-intermarket-macro",
      "title": "COT & Intermarket Macro"
    }
  },
  {
    "id": "glossary-48",
    "letter": "O",
    "term": "Original Consolidation",
    "fullTerm": "Original Consolidation",
    "category": "Models",
    "definition": "The baseline starting range in an MMXM setup that serves as the final take-profit target.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "market-maker-models-mmxm",
      "title": "Market Maker Models (MMXM)"
    }
  },
  {
    "id": "glossary-49",
    "letter": "O",
    "term": "OTE",
    "fullTerm": "OTE (Optimal Trade Entry)",
    "category": "Models",
    "definition": "The Fibonacci retracement sweet spot between 61.8% and 79% (with 70.5% as the ideal institutional entry level).",
    "formula": "OTE = 0.62 to 0.79 Fib Retracement (Ideal: 0.705 Sweet Spot)",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "intermediate",
      "slug": "premium-discount-and-ote",
      "title": "Premium vs Discount & OTE"
    }
  },
  {
    "id": "glossary-50",
    "letter": "P",
    "term": "PD Array",
    "fullTerm": "PD Array",
    "category": "PD Arrays",
    "definition": "Premium/Discount Array. Institutional price reference points.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "advanced-pd-arrays",
      "title": "Advanced PD Arrays"
    }
  },
  {
    "id": "glossary-51",
    "letter": "P",
    "term": "PDH / PDL",
    "fullTerm": "PDH / PDL",
    "category": "Market Structure",
    "definition": "Previous Day High / Previous Day Low.",
    "sentiment": "neutral"
  },
  {
    "id": "glossary-52",
    "letter": "P",
    "term": "PO3",
    "fullTerm": "PO3 (Power of 3)",
    "category": "Timing/Macros",
    "definition": "See *AMD*.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "power-of-3-po3-amd",
      "title": "Power of 3 & Judas Swing"
    }
  },
  {
    "id": "glossary-53",
    "letter": "P",
    "term": "Premium",
    "fullTerm": "Premium",
    "category": "Market Structure",
    "definition": "The upper 50% (> 50% Equilibrium) of a dealing range. Smart money sells here.",
    "formula": "Premium = Price > 50% Dealing Range Equilibrium",
    "sentiment": "bearish",
    "relatedModule": {
      "level": "intermediate",
      "slug": "premium-discount-and-ote",
      "title": "Premium vs Discount & OTE"
    }
  },
  {
    "id": "glossary-54",
    "letter": "P",
    "term": "Propulsion Block",
    "fullTerm": "Propulsion Block",
    "category": "PD Arrays",
    "definition": "An Order Block that forms directly inside an existing Order Block and triggers an explosive continuation.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "advanced-pd-arrays",
      "title": "Advanced PD Arrays"
    }
  },
  {
    "id": "glossary-55",
    "letter": "P",
    "term": "PWH / PWL",
    "fullTerm": "PWH / PWL",
    "category": "Market Structure",
    "definition": "Previous Week High / Previous Week Low.",
    "sentiment": "neutral"
  },
  {
    "id": "glossary-56",
    "letter": "R",
    "term": "Reclaimed Block",
    "fullTerm": "Reclaimed Block",
    "category": "PD Arrays",
    "definition": "An Order Block that was briefly violated but immediately recaptured by price.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "advanced-pd-arrays",
      "title": "Advanced PD Arrays"
    }
  },
  {
    "id": "glossary-57",
    "letter": "R",
    "term": "Rejection Block",
    "fullTerm": "Rejection Block",
    "category": "PD Arrays",
    "definition": "A candlestick formation characterized by an unusually long wick where the entry anchor is placed at the candle **body**, not the wick tip.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "advanced-pd-arrays",
      "title": "Advanced PD Arrays"
    }
  },
  {
    "id": "glossary-58",
    "letter": "R",
    "term": "Risk-to-Reward",
    "fullTerm": "Risk-to-Reward (R:R)",
    "category": "Macroeconomics",
    "definition": "The mathematical ratio comparing the capital at risk to the targeted profit objective. Minimum accepted ICT ratio is $1:2$.",
    "formula": "R:R ≥ 1:2 Minimum Risk Parameter",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "practice",
      "slug": "trader-checklist-and-rules",
      "title": "Trader Checklist & Rules"
    }
  },
  {
    "id": "glossary-59",
    "letter": "S",
    "term": "Seasonal Tendency",
    "fullTerm": "Seasonal Tendency",
    "category": "Macroeconomics",
    "definition": "Historical multi-year statistical probability of an asset trending higher or lower during specific calendar months.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "cot-and-intermarket-macro",
      "title": "COT & Intermarket Macro"
    }
  },
  {
    "id": "glossary-60",
    "letter": "S",
    "term": "SIBI",
    "fullTerm": "SIBI (Sellside Imbalance, Buyside Inefficiency)",
    "category": "PD Arrays",
    "definition": "A Bearish Fair Value Gap formed by aggressive downward selling.",
    "sentiment": "bearish",
    "relatedModule": {
      "level": "foundations",
      "slug": "imbalances-and-fvg",
      "title": "Imbalances & FVGs"
    }
  },
  {
    "id": "glossary-61",
    "letter": "S",
    "term": "Silver Bullet",
    "fullTerm": "Silver Bullet",
    "category": "Timing/Macros",
    "definition": "A time-restricted 60-minute execution strategy operating at 03:00–04:00, 10:00–11:00, and 14:00–15:00 EST.",
    "formula": "Windows: 03:00-04:00, 10:00-11:00, 14:00-15:00 EST | 10-15 Target Handles",
    "sentiment": "timing",
    "relatedModule": {
      "level": "execution-models",
      "slug": "silver-bullet-strategy",
      "title": "Silver Bullet Strategy"
    }
  },
  {
    "id": "glossary-62",
    "letter": "S",
    "term": "SMR",
    "fullTerm": "SMR (Smart Money Reversal)",
    "category": "Models",
    "definition": "The inflection turning point at the bottom/top of a Market Maker Model, confirmed by SMT and Turtle Soup.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "what-is-smart-money-and-ipda",
      "title": "What is Smart Money & IPDA"
    }
  },
  {
    "id": "glossary-63",
    "letter": "S",
    "term": "SMT Divergence",
    "fullTerm": "SMT Divergence (Smart Money Technique)",
    "category": "Models",
    "definition": "A non-confirmation between two correlated assets (e.g. ES vs NQ or EUR vs GBP) signaling stealth institutional activity.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "what-is-smart-money-and-ipda",
      "title": "What is Smart Money & IPDA"
    }
  },
  {
    "id": "glossary-64",
    "letter": "S",
    "term": "SSL",
    "fullTerm": "SSL (Sell-Side Liquidity)",
    "category": "Market Structure",
    "definition": "A pool of resting sell stops (long stop-losses and breakdown seller orders) residing below old swing lows and equal lows.",
    "sentiment": "bearish",
    "relatedModule": {
      "level": "foundations",
      "slug": "liquidity-concepts",
      "title": "Liquidity Concepts"
    }
  },
  {
    "id": "glossary-65",
    "letter": "T",
    "term": "Tape Reading",
    "fullTerm": "Tape Reading",
    "category": "Market Structure",
    "definition": "Observing raw candlestick formation and speed tick-by-tick without indicators.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "advanced",
      "slug": "tape-reading-and-algorithmic-delivery",
      "title": "Tape Reading & Algorithmic Delivery"
    }
  },
  {
    "id": "glossary-66",
    "letter": "T",
    "term": "True Day Open",
    "fullTerm": "True Day Open",
    "category": "Timing/Macros",
    "definition": "00:00 EST (New York Midnight). The algorithmic anchor for daily directional bias.",
    "formula": "NY Midnight = 00:00 EST / EDT Algorithm Reference Anchor",
    "sentiment": "timing",
    "relatedModule": {
      "level": "intermediate",
      "slug": "time-and-price-killzones",
      "title": "Time & Price Killzones"
    }
  },
  {
    "id": "glossary-67",
    "letter": "T",
    "term": "Turtle Soup",
    "fullTerm": "Turtle Soup",
    "category": "Models",
    "definition": "A strategy that fades false breakouts, taking advantage of liquidity purges that immediately revert inside the range.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "execution-models",
      "slug": "turtle-soup-model",
      "title": "Turtle Soup Strategy"
    }
  },
  {
    "id": "glossary-68",
    "letter": "T",
    "term": "Turtle Soup Plus One",
    "fullTerm": "Turtle Soup Plus One (TS+1)",
    "category": "Models",
    "definition": "A Turtle Soup variation where the false breakout holds outside the range on Day 1, only to violently collapse back inside on Day 2.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "execution-models",
      "slug": "turtle-soup-model",
      "title": "Turtle Soup Strategy"
    }
  },
  {
    "id": "glossary-69",
    "letter": "U",
    "term": "Unicorn Setup",
    "fullTerm": "Unicorn Setup",
    "category": "PD Arrays",
    "definition": "A premier ICT setup combining a Breaker Block with an overlapping Fair Value Gap.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "intermediate",
      "slug": "breaker-and-mitigation-blocks",
      "title": "Breaker & Mitigation Blocks"
    }
  },
  {
    "id": "glossary-70",
    "letter": "V",
    "term": "Vacuum Block",
    "fullTerm": "Vacuum Block",
    "category": "PD Arrays",
    "definition": "A price gap created during sudden high-impact news releases where price skips dozens of ticks without trading.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "imbalances-and-fvg",
      "title": "Imbalances & FVGs"
    }
  },
  {
    "id": "glossary-71",
    "letter": "V",
    "term": "VI",
    "fullTerm": "VI (Volume Imbalance)",
    "category": "PD Arrays",
    "definition": "A price inefficiency where candle wicks overlap, but the physical candle bodies leave an un-traded gap.",
    "sentiment": "neutral",
    "relatedModule": {
      "level": "foundations",
      "slug": "imbalances-and-fvg",
      "title": "Imbalances & FVGs"
    }
  }
];

// Utility Functions

export function getAllModules(): CurriculumModule[] {
  return CURRICULUM_MODULES;
}

export function getLevels(): CurriculumLevel[] {
  return CURRICULUM_LEVELS;
}

export function normalizeLevelSlug(rawLevel: string): string {
  const l = rawLevel.toLowerCase().trim();
  if (l.includes("01") || l.includes("found")) return "foundations";
  if (l.includes("02") || l.includes("inter")) return "intermediate";
  if (l.includes("03") || l.includes("adv")) return "advanced";
  if (l.includes("04") || l.includes("exec")) return "execution-models";
  if (l.includes("05") || l.includes("prac") || l.includes("drill")) return "practice";
  if (l.includes("00") || l.includes("over") || l.includes("ref")) return "overview";
  return l;
}

export function getModulesByLevel(levelSlug: string): CurriculumModule[] {
  const normalized = normalizeLevelSlug(levelSlug);
  return CURRICULUM_MODULES.filter((m) => m.level === normalized);
}

export function getModuleBySlug(levelSlug: string, moduleSlug: string): CurriculumModule | undefined {
  const normalizedLevel = normalizeLevelSlug(levelSlug);
  const cleanModSlug = moduleSlug.toLowerCase().replace(/\.md$/, "").trim();

  // Try direct match
  const direct = CURRICULUM_MODULES.find(
    (m) =>
      m.level === normalizedLevel &&
      (m.slug === cleanModSlug || cleanModSlug.endsWith(m.slug) || m.slug.endsWith(cleanModSlug))
  );
  if (direct) return direct;

  // Fallback search across all modules
  return CURRICULUM_MODULES.find(
    (m) => m.slug === cleanModSlug || cleanModSlug.includes(m.slug) || m.slug.includes(cleanModSlug)
  );
}

export function getAdjacentModules(
  moduleSlug: string
): { prev?: CurriculumModule; next?: CurriculumModule } {
  const all = CURRICULUM_MODULES;
  const idx = all.findIndex((m) => m.slug === moduleSlug);
  return {
    prev: idx > 0 ? all[idx - 1] : undefined,
    next: idx >= 0 && idx < all.length - 1 ? all[idx + 1] : undefined,
  };
}

export function getNextAndPrevModule(
  levelSlug: string,
  moduleSlug: string
): { prev?: CurriculumModule; next?: CurriculumModule } {
  const current = getModuleBySlug(levelSlug, moduleSlug);
  if (!current) return {};

  const all = CURRICULUM_MODULES;
  const idx = all.findIndex((m) => m.id === current.id);
  return {
    prev: idx > 0 ? all[idx - 1] : undefined,
    next: idx < all.length - 1 ? all[idx + 1] : undefined,
  };
}



export function getAllGlossaryTerms(): GlossaryTerm[] {
  return ICT_GLOSSARY;
}

export function getGlossaryCategories(): GlossaryCategory[] {
  return [
    "Market Structure",
    "PD Arrays",
    "Timing/Macros",
    "Macroeconomics",
    "Models",
  ];
}

export function searchGlossary(query?: string, category?: string): GlossaryTerm[] {
  let list = ICT_GLOSSARY;
  if (category && category !== "All") {
    list = list.filter((t) => t.category === category);
  }
  if (query && query.trim() !== "") {
    const q = query.toLowerCase().trim();
    list = list.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.fullTerm.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        (t.formula && t.formula.toLowerCase().includes(q))
    );
  }
  return list;
}
