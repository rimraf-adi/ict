# Level 03: Advanced Institutional Concepts
## Module 05: IPDA Data Ranges, CBDR & Standard Deviation Projections

---

### 1. IPDA Lookback Data Ranges (20, 40, and 60 Days)

The Interbank Price Delivery Algorithm operates on fixed historical rolling calendar windows. Institutional order delivery programs reference these lookback periods to establish whether the market is at a historical Premium or Discount.

```
 Today's Date
      │
      ├────────────────── 20 TRADING DAYS (~1 Month): Short-term institutional range
      │
      ├──────────────────────────────────── 40 TRADING DAYS (~2 Months): Intermediate-term range
      │
      └────────────────────────────────────────────────────────── 60 TRADING DAYS (~1 Quarter): Macro dealing range
```

#### How to Apply the 20/40/60 Lookback:
1. From the current date, count back **20 trading days** on the Daily chart.
2. Mark the **highest high** and **lowest low** of that 20-day period.
3. Calculate the 50% Equilibrium of this range:
   - If current price is in the upper 50% of the 20-day range, you are in a **20-Day Premium**. IPDA is looking to deliver price down toward discount liquidity or inefficiencies.
   - If current price is in the lower 50% of the 20-day range, you are in a **20-Day Discount**.
4. Repeat this exercise for the **40-day** and **60-day** windows to establish the macro **Draw on Liquidity (DOL)**.

---

### 2. Central Bank Dealers Range (CBDR)

The **Central Bank Dealers Range (CBDR)** is an intraday tracking tool used primarily in Forex and Index futures to measure the volume baseline established prior to the global trading day.

- **Time Window:** **14:00 PM – 20:00 PM EST** (New York afternoon through evening).
- **The Ideal Range Size:**
  - In major currency pairs (like EUR/USD or GBP/USD), the CBDR should ideally be a tight consolidation between **20 and 30 pips** (and strictly under 40 pips).
  - A tight CBDR indicates that commercial banks have kept price quiet, priming the algorithm for an explosive, high-probability directional expansion the next day.
  - A bloated CBDR (> 40–50 pips) suggests erratic volatility or pre-scheduled news; trading the next day's Asian/London session carries lower statistical reliability.

---

### 3. The Asian Range & "Flout" Concept

- **Asian Range Window:** **20:00 PM – 00:00 EST** (Midnight).
- When combined with the CBDR, this creates the ultimate institutional benchmark box.
- The high and low of the Asian Range define the resting **Buy-Side Liquidity (ASH)** and **Sell-Side Liquidity (ASL)** for the impending London session.

---

### 4. Standard Deviation Projections ($\pm 1SD$ to $\pm 4SD$)

Once the CBDR or Asian Range is identified, ICT uses mathematical standard deviation projections to calculate **exact algorithmic profit targets and reversal zones**.

$$\text{Range Size} = \text{Range High} - \text{Range Low}$$

```
                STANDARD DEVIATION EXPANSION TARGETS
 ═══════════════════════════════════════════════════════════════  +4.0 SD (Macro Exhaustion / Climax)
 ---------------------------------------------------------------  +3.0 SD (Extended Volatility Run)
 ═══════════════════════════════════════════════════════════════  +2.0 SD (High-Probability Take Profit)
 ---------------------------------------------------------------  +1.0 SD (Initial Expansion / Judas Target)
 ═══════════════════════════════════════════════════════════════  RANGE HIGH
 │                                                             │
 │                 CBDR / ASIAN CONSOLIDATION                  │
 │                                                             │
 ═══════════════════════════════════════════════════════════════  RANGE LOW
 ---------------------------------------------------------------  -1.0 SD (Initial Judas Manipulation Sweep)
 ═══════════════════════════════════════════════════════════════  -2.0 SD (Institutional Reversal / Entry Target)
 ---------------------------------------------------------------  -3.0 SD
 ═══════════════════════════════════════════════════════════════  -4.0 SD
```

#### Application Rules:
1. **The Judas Manipulation Range:** The London Judas Swing will frequently project **1 to 2 Standard Deviations** *opposite* to the daily bias to sweep liquidity and tap a HTF PD Array.
2. **The Intraday Target:** The true distribution leg will commonly reach **2 to 2.5 Standard Deviations** in the true direction of the day.
3. **Daily Climax:** Days with extreme economic catalysts (FOMC, CPI) can extend to **4 Standard Deviations**, at which point the algorithm typically halts delivery and enters deep consolidation.
