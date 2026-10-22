# Level 02: Intermediate Core
## Module 01: Order Blocks & Mean Threshold

---

### 1. What is an Order Block (OB)?

In retail trading, many educators mistakenly teach that an Order Block is simply *"the last down candle before an up move"* or *"the last up candle before a down move."* This naive definition causes traders to mark dozens of random candles on a chart and wonder why price blows right through them.

In ICT theory, an **Order Block** is a specialized footprint of institutional order execution where large commercial entities placed heavy block orders to initiate a major directional expansion.

```
       [SWEEP OF LIQUIDITY]
               │
        ┌──────┴──────┐
        │             │
        ▼             ▼
   [ ORDER BLOCK ] ────────► [ RAPID DISPLACEMENT ] ────────► [ BREAK OF STRUCTURE & FVG ]
  (Last opposing candle)       (Violent impulse away)           (Validates the Order Block)
```

---

### 2. The Strict Validation Checklist for an Order Block

For a candle to be certified as a valid, high-probability Order Block, it **MUST** satisfy three strict conditions:

1. **Prior Liquidity Engagement:** The candidate candle (or its immediate swing) must have swept resting liquidity (e.g., cleared an old swing high or low).
2. **Aggressive Displacement:** The subsequent move away must be swift and energetic, demonstrating institutional sponsorship.
3. **Creation of an FVG & Structure Break:** The displacement must break market structure (MSS or BOS) and leave an unfilled Fair Value Gap immediately ahead of the candle.

> If a candle does not cause displacement, does not break structure, or leaves no FVG, **it is NOT a valid Order Block**.

---

### 3. Bullish (+OB) vs. Bearish (-OB) Order Blocks

#### A. Bullish Order Block (+OB)
- **Visual:** The lowest consecutive down-close candle(s) (bearish) prior to an aggressive upward expansion.
- **Mechanism:** Institutional algorithms accumulated long contracts by buying into the sell stops of retail traders.
- **Execution:** When price later retraces down into the open or upper wick of the +OB, smart money defends their accumulated position, driving price higher.

#### B. Bearish Order Block (-OB)
- **Visual:** The highest consecutive up-close candle(s) (bullish) prior to an aggressive downward decline.
- **Mechanism:** Institutional algorithms distributed short contracts by selling into the buy stops of retail breakout buyers.
- **Execution:** When price rallies back up into the open or lower wick of the -OB, institutional algorithms offer supply to resume the downward trend.

---

### 4. Mean Threshold (M.T.) of an Order Block

The **Mean Threshold (M.T.)** is the exact **50% mathematical midpoint** of the Order Block candle.

$$\text{Mean Threshold (M.T.)} = \frac{\text{OB High} + \text{OB Low}}{2} \quad \text{or} \quad \frac{\text{OB Open} + \text{OB Close}}{2} \text{ (Body-only)}$$

```
                   ┌──────────┐  <-- High of Bearish OB
                   │          │
                   │  CANDLE  │
 ══════════════════╡  BODY    ╞══════════════════  <-- MEAN THRESHOLD (50%)
                   │          │
                   │          │
                   └──────────┘  <-- Low / Open of Bearish OB
```

#### The Rules of Mean Threshold:
- **High-Probability Reaction:** Price can pierce the open of the Order Block and retrace into the upper half of the candle.
- **The Sensitive Line:** The 50% Mean Threshold should act as a hard boundary for candle **bodies**. While wicks can briefly poke below/above M.T., a candle **body closing beyond Mean Threshold** indicates the Order Block has likely failed or lost institutional defense.

---

### 5. High vs. Low Probability Order Blocks

| Factor | High Probability OB | Low Probability OB |
| :--- | :--- | :--- |
| **HTF Context** | Aligned with Higher Timeframe Daily / 4H Bias. | Counter-trend to Higher Timeframe Trend. |
| **Liquidity Swept** | Clear sweep of prominent swing highs/lows or EQH/EQL. | Formed mid-range without sweeping any liquidity. |
| **Displacement** | Violent, large-bodied candles that broke multiple swing points. | Sluggish, small candles that barely surpassed previous ranges. |
| **FVG Presence** | Supported by a pristine, unmitigated Fair Value Gap. | No FVG present; price overlaps heavily. |
| **Time of Day** | Formed inside an active Killzone or Algorithmic Macro. | Formed during Asian late night or dead lunch hours. |

---

### 6. Refining Order Blocks Across Timeframes

To achieve high risk-to-reward ratios ($1:3$ to $1:8$), ICT traders refine Order Blocks from macro to micro timeframes:
1. Identify a Daily or 4-Hour Order Block establishing the institutional directional bias.
2. Mark the exact price boundaries and the 50% Mean Threshold of that HTF block.
3. When price enters that HTF zone on the 15-minute or 5-minute chart, look for an internal Market Structure Shift (MSS) that creates a fresh lower-timeframe Order Block.
4. Enter on the LTF Order Block with a tight stop just beyond its extreme, targeting the opposing HTF liquidity pool.
