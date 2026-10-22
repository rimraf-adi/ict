# Level 04: Execution Models & Strategies
## Module 01: The ICT 2022 Mentorship Model

---

### 1. Overview: The Flagship Bread-and-Butter Setup

The **ICT 2022 Mentorship Model** is arguably the most famous, accessible, and reliably mechanical execution system ever released by Michael J. Huddleston. 

It was specifically designed for day trading equity index futures (E-mini S&P 500 `ES` and E-mini Nasdaq 100 `NQ`) and major Forex pairs (EUR/USD, GBP/USD), using lower timeframes (1-minute to 5-minute charts) anchored to higher-timeframe institutional bias.

```
                  THE ICT 2022 MODEL EXECUTION BLUEPRINT
                  
               [ LIQUIDITY SWEEP ]
                Old High Swept / Buy Stops Raided
                      ▲
                     / \
                    /   \
                   /     \  [ DISPLACEMENT LEGS DOWN ]
                  /       \  Large-bodied red candles
                 /         ▼
                /         [ MSS ] ◄── Breaks Swing Low with Candle Close
               /           │
              /            │
                           ▼
                        [ FVG ] ◄── Leaves pristine Fair Value Gap
                           ▲
                          / \
                         /   \   ◄── RETRACEMENT ENTRY!
                        /     \      Limit order placed at FVG top or C.E.
                       /       \     Stop Loss placed at High.
                      /         ▼
                     /        [ TAKE PROFIT ]
                              Target Opposing Sell-Side Liquidity (SSL / EQL)
```

---

### 2. The 5-Step Execution Rulebook

#### Step 1: Establish Higher-Timeframe Draw on Liquidity (DOL)
- On the **Daily, 4-Hour, or 1-Hour chart**, identify where price is heading next:
  - Is there an obvious un-swept pool of Equal Highs (EQH) or Equal Lows (EQL)?
  - Is there an unmitigated Daily or 4-Hour Fair Value Gap?
- Your trades on the lower timeframe **must align with this higher-timeframe magnet**.

#### Step 2: Time Alignment (Killzone Requirement)
- Only look for the setup during high-volume institutional windows:
  - **New York Morning Session:** 08:30 AM – 11:00 AM EST (Preferred: 09:30 AM – 10:30 AM).
  - **London Session:** 02:00 AM – 04:30 AM EST.
- Never trade this model outside of active Killzones.

#### Step 3: The Liquidity Sweep (The Purge)
- Switch to the **5-minute, 3-minute, or 1-minute chart**.
- Watch for price to push aggressively beyond a prominent recent high or low (e.g., Session High/Low, Previous Day High/Low, or a swing point created during the pre-market).
- Once liquidity is cleared, do not jump in yet. You must wait for algorithmic confirmation.

#### Step 4: The Market Structure Shift (MSS) with Displacement
- After the sweep, price must aggressively reverse direction.
- **Criteria for Valid Shift:**
  1. Must break the most recent significant fractal Swing Low (if turning bearish) or Swing High (if turning bullish).
  2. The break must occur with **strong candle bodies closing across the level**—not just a wick.
  3. The move must leave behind a clean **Fair Value Gap (FVG)**.

#### Step 5: Entry, Invalidation & Take Profit
- **Entry Trigger:** Place a limit order at the **entry edge of the FVG** (or at the 50% Consequent Encroachment if seeking greater discount/premium).
- **Protective Stop Loss:** Placed just above the swing high (for shorts) or below the swing low (for longs) that performed the initial liquidity sweep.
- **Take Profit (TP):** Target the opposing liquidity pool (e.g., relative equal lows, previous session low, or an unmitigated discount FVG). Never aim for arbitrary dollar amounts; target objective structural liquidity!

---

### 3. Step-by-Step Trade Scenario: Bearish 2022 Setup on NQ Futures

| Step | Action on Chart | Trader Execution |
| :--- | :--- | :--- |
| **08:30 EST** | US CPI data releases. NQ surges 80 points upward. | Hands off mouse. Do not chase the green news candle. |
| **09:30 EST** | Cash equities open. NQ pushes higher, sweeping the Previous Day High (`18,520.00`). | Notice Buy-Side Liquidity has been purged into a 4H Bearish FVG. |
| **09:42 EST** | NQ suddenly prints three massive 1-minute red candles, collapsing through the 09:35 swing low (`18,485.00`) with candle body closes. | **MSS Confirmed with Displacement.** A 1-minute FVG is left between `18,495.00` and `18,505.00`. |
| **09:47 EST** | Price retraces up into the 1-minute FVG, tapping `18,498.00` (Consequent Encroachment). | **Limit Sell Order Fills at 18,498.00.** |
| **Risk Plan** | Stop Loss set at `18,524.00` (4 points above high). Risk: 26 points. | Max risk sized strictly to 1% of trading capital. |
| **10:15 EST** | Price collapses smoothly down into pre-market Equal Lows (`18,420.00`). | **Take Profit Hits at 18,420.00.** Total gain: 78 points ($1:3$ R:R). |

---

### 4. Common Execution Errors to Avoid

1. **Entering on the Sweep (Premature Entry):** Never enter while the liquidity raid candle is actively expanding green/red. You have no guarantee it won't keep running. **Always wait for the MSS and displacement**.
2. **Ignoring Higher-Timeframe Bias:** Taking a short 2022 setup when the Daily chart is in a roaring institutional buy program heading for a weekly high is a recipe for getting stopped out.
3. **Accepting Sub-Par FVG:** If the gap is tiny (1 or 2 ticks) and candles overlap heavily, there is no real institutional displacement. Skip the trade and wait for pristine clarity.
