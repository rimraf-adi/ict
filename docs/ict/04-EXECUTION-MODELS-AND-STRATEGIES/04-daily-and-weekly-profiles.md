# Level 04: Execution Models & Strategies
## Module 04: Daily Profiles, Weekly Profiles & Algorithmic Macros

---

### 1. Weekly Profiles: Mapping the Institutional Dealing Week

Algorithms execute structured distributions across the 5-day trading week. Knowing the current **Weekly Profile** prevents you from getting trapped trading counter to the weekly expansion.

```
       CLASSIC TUESDAY LOW OF THE WEEK (BULLISH PROFILE)
       
              MON        TUE        WED        THU        FRI
                                                           ▲ [Profit Taking]
                                               ▲          / \
                                              / \        /   \
                                  ▲          /   \      /     \
                                 / \        /     \    /       ▼
                     ▲          /   \      /       \  /
                    / \        /     \    /         ▼
        [Open]     /   \      /       \  /
        ──────    /     \    /         ▼
                 /       ▼  /
                /         ▼ [TUESDAY LOW OF THE WEEK]
               ▼             Sweeps Monday low into Discount PD Array.
             [Judas]         Trend drives higher through Thursday!
```

#### 1. The Classic Tuesday Low/High Profile (High Probability: ~70%)
- **Monday:** Accumulation & range-setting. Establishes the initial high and low of the week.
- **Tuesday:** The manipulation leg. Tuesday morning (London or NY Open) pushes through Monday’s low/high, sweeps liquidity, and forms the **absolute High or Low of the entire week**.
- **Wednesday & Thursday:** Aggressive distribution legs in the true weekly direction.
- **Friday:** Continuation into the morning, followed by London Close profit-taking and weekly consolidation.

#### 2. The Midweek Reversal Profile
- Occurs frequently when high-impact economic events (e.g. FOMC rate decisions or CPI) fall on Wednesday afternoon.
- The market trends in one direction from Monday through Wednesday morning, creating an extended manipulation leg.
- Post-news on Wednesday afternoon, the market stages a violent reversal that dictates Thursday and Friday.

---

### 3. The 4 Classic Intraday Daily Profiles

#### Profile A: Normal Variation (Classic Trend Day)
- Asian session consolidates tightly.
- London Open makes a moderate Judas Swing, forms the Low/High of the Day, and begins expanding.
- New York session provides a simple retracement into an FVG and expands in harmony with London until the close.

#### Profile B: London Open Reversal
- Asian session trends strongly in one direction.
- London Open violently runs that trend into an HTF PD Array, purges liquidity, and completely reverses the market for the remainder of the day.

#### Profile C: New York Open Reversal
- London trends smoothly throughout the European morning.
- At 08:30 or 09:30 AM EST, New York opens with heavy volume, sweeps the London session high/low, and reverses direction.

#### Profile D: Consolidation Day (Seek & Destroy / Low Probability)
- Usually precedes major pre-scheduled news (e.g., Day before NFP or FOMC).
- The algorithm repeatedly sweeps both the high and the low of previous sessions without follow-through. **Best practice: Stand aside.**

---

### 4. The 20-Minute Algorithmic Macros

An **Algorithmic Macro** is an automated script programmed into IPDA that triggers high-speed order execution during a precise 20-to-30 minute window. 

During these macro windows, price will actively seek to rebalance an unmitigated FVG or run a local liquidity pool:

```
  ICT 24-HOUR ALGORITHMIC MACRO WINDOWS (EST)
  
  ┌─────────────────────────┬────────────────────────────────────────────────────────┐
  │ Time Window (EST)       │ Algorithmic Directive / Typical Activity               │
  ├─────────────────────────┼────────────────────────────────────────────────────────┤
  │ 02:33 AM – 03:00 AM     │ London Open initiation; sweeps Asian high/low.         │
  │ 08:50 AM – 09:10 AM     │ Pre-market positioning into 09:00 news / open.         │
  │ 09:50 AM – 10:10 AM     │ Post-equities open macro; highest-probability reversal │
  │                         │ or trend continuation window of the day.               │
  │ 10:50 AM – 11:10 AM     │ London Close preparation macro; runs local liquidity.  │
  │ 11:50 AM – 12:10 PM     │ Transition into NY lunch doldrums.                     │
  │ 13:10 PM – 13:40 PM     │ Afternoon session ignition / Silver Bullet preparation.│
  │ 15:15 PM – 15:45 PM     │ Equities closing macro; final run on daily liquidity.  │
  └─────────────────────────┴────────────────────────────────────────────────────────┘
```

#### How to Trade Macros:
Do not sit glued to your screen all morning. Set alarms 2 minutes before these specific macro windows. When the clock enters the window, immediately look for an unmitigated FVG or clean equal highs/lows on the 1-minute chart. The algorithm will almost always deliver price directly into that level before the macro timer expires!
