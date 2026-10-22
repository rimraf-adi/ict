// Hardcoded TypeScript Curriculum Module: PRACTICE
// Zero markdown reading, zero raw ASCII art, native responsive vector schematics

import { ModuleContent } from "./types";

export const PRACTICE_MODULES: Record<string, ModuleContent> = {
  "case-studies-and-chart-scenarios": {
    "slug": "case-studies-and-chart-scenarios",
    "level": "practice",
    "title": "Interactive Case Studies & Chart Practice Scenarios",
    "subtitle": "Interactive Case Studies & Chart Practice Scenarios",
    "sections": [
      {
        "id": "sec-1",
        "title": "Scenario 1: The London Judas Swing on EUR/USD",
        "paragraphs": [],
        "bulletPoints": [
          "**Daily Bias:** Bearish (Daily chart in a discount delivery seeking Previous Week Low).",
          "**Asian Session (19:00 – 00:00 EST):** Consolidated between `1.0820` (Low) and `1.0845` (High).",
          "**Higher Timeframe Reference:** A pristine 1-Hour Bearish Fair Value Gap sits between `1.0850` and `1.0862`.",
          "**Q1:** Was the rally above `1.0845` a genuine breakout or a Judas Swing? Why?",
          "*Answer:* Judas Swing. It occurred right at the London Open (02:00–03:00 EST), purged resting Asian High buy stops, and tapped directly into a Higher-Timeframe (1H) Bearish FVG in alignment with the bearish daily bias.",
          "**Q2:** What is the precise entry trigger, stop-loss, and take-profit?",
          "*Answer:*",
          "**Entry:** Limit sell at `1.0846` (inside the 5-minute FVG).",
          "**Stop Loss:** `1.0856` (2 pips above the high that swept liquidity).",
          "**Take Profit:** `1.0820` (The unmitigated Asian Session Low).",
          "**Risk/Reward:** Risk 10 pips to make 26 pips ($1:2.6$ R:R)."
        ],
        "numberedSteps": [
          "**02:15 AM EST:** London opens. Price suddenly surges upward with high momentum, breaking above the Asian High (`1.0845`) and rallying straight into the 1-Hour Bearish FVG at `1.0854`.",
          "**02:35 AM EST (Macro Window):** On the 5-minute chart, EUR/USD prints an aggressive bearish engulfing candle that plunges 18 pips downward, closing decisively below the prior 5-minute swing low (`1.0840`).",
          "**Imbalance Created:** A 5-minute Fair Value Gap is left between `1.0843` and `1.0850`."
        ],
        "diagram": {
          "type": "liquidity-pool",
          "title": "Buy-Side & Sell-Side Liquidity Sweeps",
          "caption": "Wick sweep purging resting stops before violent displacement reversal."
        }
      },
      {
        "id": "sec-2",
        "title": "Scenario 2: The 10:00 AM New York Silver Bullet on NQ Futures",
        "paragraphs": [],
        "bulletPoints": [
          "**Daily Bias:** Bullish (Seeking Previous Day High at `19,450.00`).",
          "**Current Time:** 09:58 AM EST. Current NQ Price: `19,380.00`.",
          "**Pre-market low:** Clean Equal Lows (EQL) resting at `19,360.00`.",
          "**Q1:** Does this setup meet all strict Silver Bullet criteria?",
          "*Answer:* Yes. It formed within the 10:00–11:00 AM EST window, swept liquidity (EQL purged), created a clean MSS with displacement, and printed a clear 1-minute FVG.",
          "**Q2:** How would you execute this trade?",
          "*Answer:*",
          "**Entry:** Limit Buy at `19,374.00` (within FVG) or `19,372.00` (at C.E.).",
          "**Stop Loss:** `19,350.00` (2 points below the sweep low). Risk: 22 points.",
          "**Take Profit:** `19,420.00` (Targeting 46 points / $1:2.1$ R:R) or full run to `19,450.00` Previous Day High."
        ],
        "numberedSteps": [
          "**10:00 AM EST:** High-impact US ISM Manufacturing PMI report releases. NQ whipsaws downward, slicing through `19,360.00` to `19,352.00`.",
          "**10:04 AM EST:** NQ instantly rejects the lows with a sharp 1-minute green candle, followed by two massive consecutive displacement candles that explode up to `19,395.00`.",
          "**Structure Broken:** The 09:55 swing high at `19,378.00` is completely shattered with candle body closes.",
          "**FVG Identified:** A 1-minute Bullish FVG sits between `19,368.00` and `19,376.00`. Consequent Encroachment (C.E.) is at `19,372.00`."
        ]
      },
      {
        "id": "sec-3",
        "title": "Scenario 3: The Unicorn Model (Breaker + FVG Confluence)",
        "paragraphs": [
          "The **Unicorn Model** is the highest-probability setup in the entire ICT playbook. It combines:",
          "When an order block fails after sweeping liquidity, commercial algorithms must mitigate their offside orders. When that same zone also contains an unmitigated FVG, you have **double institutional confluence**. Price rarely penetrates past the Mean Threshold of a Unicorn zone."
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "A **Breaker Block** (a failed Order Block that swept liquidity).",
          "A **Fair Value Gap (FVG)** that overlaps the exact same price levels as the Breaker Block."
        ],
        "diagram": {
          "type": "market-structure",
          "title": "Market Structure: BOS vs. Market Structure Shift (MSS)",
          "caption": "A true MSS requires full candle body closure beyond a significant swing point, confirming institutional order flow reversal."
        }
      }
    ]
  },
  "trader-checklist-and-rules": {
    "slug": "trader-checklist-and-rules",
    "level": "practice",
    "title": "Professional Trader Rulebook & Daily Execution Checklist",
    "subtitle": "Professional Trader Rulebook & Daily Execution Checklist",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Pre-Session Routine (30 Minutes Before Open)",
        "paragraphs": [
          "Every institutional and successful retail trader follows a strict pre-flight routine. Never sit down and immediately execute market orders."
        ],
        "bulletPoints": [],
        "numberedSteps": [],
        "diagram": {
          "type": "fvg",
          "title": "Fair Value Gap (BISI/SIBI) 3-Candle Anatomy",
          "caption": "Open void between Candle 1 and Candle 3 with 50% Consequent Encroachment (CE)."
        }
      },
      {
        "id": "sec-2",
        "title": "Live Session Execution Protocol (The 6-Gate System)",
        "paragraphs": [
          "Before clicking \"Buy\" or \"Sell\", your trade must pass all 6 consecutive gates:"
        ],
        "bulletPoints": [
          "[ ] Is the clock inside an official ICT Killzone (London: 02:00–05:00, NY AM: 08:30–11:00, NY PM: 13:30–15:30 EST)?",
          "*If NO: Stop. Do not trade.*",
          "[ ] Has price swept a clear structural liquidity pool (PDH, PDL, Asian high/low, or intraday EQH/EQL)?",
          "*If NO: You are trading in the middle of a range. Wait for the sweep.*",
          "[ ] Did price aggressively shift market structure with **candle bodies closing across the swing point**?",
          "*If NO (only wicks pierced the level): It is a raid/continuation, not an MSS. Do not enter.*",
          "[ ] Did the shift leave a crisp, energetic Fair Value Gap with large candle bodies and minimal wicks?",
          "*If NO: Lack of displacement means no institutional sponsorship.*",
          "[ ] If Buying: Is the entry price in the Discount zone (<50% of the impulse leg)?",
          "[ ] If Selling: Is the entry price in the Premium zone (>50% of the impulse leg)?",
          "*If NO: Do not buy in premium or short in discount.*",
          "[ ] Is the protective stop loss placed strictly behind the invalidation extreme?",
          "[ ] Does the trade provide a minimum mathematical Risk-to-Reward of **1:2 or better** to the objective target?",
          "*If all 6 Gates are YES: Execute the order without hesitation.*"
        ],
        "numberedSteps": []
      },
      {
        "id": "sec-3",
        "title": "Risk Management Non-Negotiables",
        "paragraphs": [
          "No trading strategy will survive without ironclad capital preservation:"
        ],
        "bulletPoints": [],
        "numberedSteps": [
          "**Max Risk Per Trade (0.5% to 1.0% Rule):** Never risk more than 1% of your total account balance on a single trade. If your account is \\$50,000, your maximum loss on a trade must not exceed \\$500.",
          "**The \"Two Strikes and You're Out\" Rule:** If you take two consecutive losses in a single day, shut down your charting platform immediately. Market conditions are likely in a consolidation/whipsaw profile.",
          "**Daily Loss Circuit Breaker (-2% Max):** If your daily drawdown reaches 2%, you are banned from trading until the next calendar day.",
          "**Moving to Breakeven:** Once price reaches **$1:1$ or takes out the first intermediate liquidity pool**, move your stop-loss to Breakeven (entry price) and take off a partial position (e.g. 50%). Let the remainder run risk-free to the final draw on liquidity."
        ]
      },
      {
        "id": "sec-4",
        "title": "Daily Post-Market Journaling Rubric",
        "paragraphs": [
          "At the end of every trading session, log the following in your trade journal:"
        ],
        "bulletPoints": [
          "**Screenshot 1:** Higher-timeframe context (Daily / 4-Hour).",
          "**Screenshot 2:** Lower-timeframe execution (1-minute / 5-minute) with entry, stop loss, and exit marked.",
          "**Answer the 4 Post-Trade Questions:**"
        ],
        "numberedSteps": [
          "*Did I follow my plan and wait for the Killzone/Macro?*",
          "*Was my Draw on Liquidity accurate?*",
          "*Did I experience FOMO or emotional impulse?*",
          "*What did IPDA teach me today?*"
        ]
      }
    ]
  }
};
