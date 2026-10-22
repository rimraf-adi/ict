# Level 02: Intermediate Core
## Module 03: Breaker Blocks vs. Mitigation Blocks

---

### 1. The Power of Failed Institutional Levels

When an Order Block fails to hold price, it does not disappear from the algorithm's memory. Instead, it converts into one of the most powerful institutional support/resistance levels in trading:
- **A Breaker Block** (If liquidity was swept prior to the break).
- **A Mitigation Block** (If no liquidity was swept; a failure swing).

Understanding the subtle difference between these two blocks is what separates amateur SMC traders from seasoned ICT practitioners.

---

### 2. The ICT Breaker Block

A **Breaker Block** is an invalidated Order Block that is directly linked to a **liquidity raid / stop run**.

```
                BEARISH BREAKER BLOCK FORMATION
                
                     [SWING HIGH 2] (Sweeps High 1 Liquidity!)
                            ▲
                           / \
                          /   \
        [SWING HIGH 1]   /     \
              ▲         /       \
             / \       /         \
            /   \     /           \
           /     \   /             ▼
          /       ▼ ▼             [Displacement breaks Low 1]
         /     [SWING LOW 1]
        /      (Order Block)
       /             ▲
      /              │
     /               └─────── Price rallies back up to retest
                             this broken Order Block.
                             IT IS NOW A BEARISH BREAKER!
```

#### Step-by-Step Bearish Breaker Sequence:
1. **Low 1 Forms:** Price pulls back, printing a swing low (the last down-candle before an upward leg).
2. **High 2 Sweeps High 1:** Price rallies strongly, breaking above Swing High 1. This raids Buy-Side Liquidity and lures retail breakout buyers.
3. **Violent Displacement Down:** Rather than continuing higher, price collapses violently, breaking below Swing Low 1 with large-bodied candles.
4. **The Transformation:** Swing Low 1 (the last down-candle before the high that swept liquidity) is now designated as a **Bearish Breaker Block**.
5. **The Retest Entry:** When price retraces back up to the Bearish Breaker Block, it acts as formidable resistance. Institutions use this level to mitigate trapped buy orders and add to short positions.

#### Step-by-Step Bullish Breaker Sequence:
1. **High 1 Forms:** Price prints a swing high (the last up-candle before a downward decline).
2. **Low 2 Sweeps Low 1:** Price collapses below Swing Low 1, raiding Sell-Side Liquidity and trapping breakout shorts.
3. **Violent Displacement Up:** Price explodes upward, taking out Swing High 1 with authority and leaving an FVG.
4. **The Transformation:** Swing High 1 is now a **Bullish Breaker Block**.
5. **The Retest Entry:** When price pulls back to test Swing High 1 from above, it serves as rock-solid institutional support.

---

### 3. The ICT Mitigation Block

A **Mitigation Block** forms under an almost identical structural break, with **one critical difference: it lacks a liquidity sweep**.

```
               BEARISH MITIGATION BLOCK FORMATION
               
        [SWING HIGH 1]
              ▲
             / \
            /   \            [SWING HIGH 2] (FAILS to reach High 1!)
           /     \                  ▲
          /       \                / \
         /         \              /   \
        /           ▼            /     ▼
       /        [SWING LOW 1]   /     [Displacement breaks Low 1]
      /         (Order Block)  /
     /                ▲       /
    /                 │      /
                      └───── Price rallies back up to retest
                            Swing Low 1.
                            IT IS NOW A MITIGATION BLOCK!
```

#### Why it's called "Mitigation":
Because Swing High 2 failed to take out Swing High 1, institutional traders who bought at Swing Low 1 are trapped offside when price collapses. When price retraces back up to the level of Swing Low 1, those institutions execute orders to **mitigate their losses** (exit at breakeven), which creates immediate selling pressure that turns price back down.

---

### 4. Direct Comparison: Breaker vs. Mitigation

| Dimension | Breaker Block | Mitigation Block |
| :--- | :--- | :--- |
| **Liquidity Sweep** | **YES.** Must sweep a prior swing high or low. | **NO.** Creates a failure swing (Lower High or Higher Low). |
| **Market Psychology** | Extreme stop-hunt trap; purges liquidity and reverses. | Exhaustion; trend is already too weak to test the extreme. |
| **Probability & Power** | **Highest Probability.** Exceptional institutional backing. | **Moderate Probability.** Great for continuation, weaker for reversals. |
| **Candle Identification** | The lowest down candle between High 1 and High 2 (Bearish), or highest up candle between Low 1 and Low 2 (Bullish). | The lowest down candle before the failed swing high (Bearish), or highest up candle before failed swing low (Bullish). |

---

### 5. Execution Rules with Breakers
- **Entry Zone:** The open or Mean Threshold (50%) of the Breaker Block.
- **Confluence Booster:** If a Fair Value Gap overlaps directly with the Breaker Block, this creates a **"Unicorn Setup"**—widely regarded as one of the highest-probability setups in the ICT library.
- **Invalidation:** If a candle body closes completely beyond the Breaker Block's extreme wick, the setup is invalidated.
