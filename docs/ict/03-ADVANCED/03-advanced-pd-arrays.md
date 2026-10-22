# Level 03: Advanced Institutional Concepts
## Module 03: Advanced PD Arrays & Institutional Footprints

---

### 1. The Complete PD Array Matrix Hierarchy

A **PD Array** (Premium & Discount Array) is any structural reference point utilized by IPDA to deliver price. 

When mapping a dealing range, ICT organizes PD Arrays into a strict hierarchy. If a level fails to hold price, IPDA automatically seeks the next array in the hierarchy.

```
       PREMIUM PD ARRAYS (Looking to Sell / Short)
       ▲  1. Old High / EQH (Buy-Side Liquidity Pool)
       │  2. Rejection Block
       │  3. Bearish Order Block (OB)
       │  4. Bearish Fair Value Gap (FVG) / Volume Imbalance
       │  5. Bearish Liquidity Void
       │  6. Bearish Breaker Block
       │  7. Bearish Mitigation Block
 ──────┼───────────────────────────────────────────── 50% EQUILIBRIUM
       │  7. Bullish Mitigation Block
       │  6. Bullish Breaker Block
       │  5. Bullish Liquidity Void
       │  4. Bullish Fair Value Gap (FVG) / Volume Imbalance
       │  3. Bullish Order Block (OB)
       │  2. Rejection Block
       ▼  1. Old Low / EQL (Sell-Side Liquidity Pool)
       DISCOUNT PD ARRAYS (Looking to Buy / Long)
```

---

### 2. Inversion Fair Value Gap (IFVG)

An **Inversion Fair Value Gap** occurs when an existing FVG fails to hold price and is decisively violated by strong momentum, **inverting its institutional role**.

```
                INVERSION FAIR VALUE GAP (IFVG)
                
                   ▲
                  / \
                 /   \
        Bearish /     \
        FVG     \═════/ ◄─────── 1. Price violently punches UP
                 \   /             through this Bearish FVG,
                  \ /              invalidating it.
                   ▼
                   │
                   ▼            2. Price pulls back from ABOVE.
                ═══════════════ ◄── The old Bearish FVG now acts as
                ═══════════════     BULLISH SUPPORT! (Inversion FVG)
                   ▲
                  / \
                 /   \          3. Price bounces aggressively higher.
```

#### How to Trade the IFVG:
- If price blows through a Bearish FVG to the upside with strong candle body closes, mark that zone.
- When price retraces back down to test that broken gap, it converts into a **Bullish Inversion FVG**, providing high-probability support.
- Vice versa: a Bullish FVG broken downward converts into a **Bearish Inversion FVG** providing overhead resistance.

---

### 3. Balanced Price Range (BPR)

A **Balanced Price Range (BPR)** is created when **two opposing Fair Value Gaps overlap the same price coordinates**.

```
 1. Price drops violently down:     Leaves a BEARISH FVG (SIBI).
 2. Price immediately surges up:    Leaves a BULLISH FVG (BISI) overlapping the exact same area!
 
          ┌──────────────────────────────────────────────┐
          │     BALANCED PRICE RANGE (BPR OVERLAP)       │
          │ Both buyers and sellers have been aggressively│
          │ delivered. Market considers this balanced!   │
          └──────────────────────────────────────────────┘
```

#### Why BPR is Formidable:
Because the market has already executed aggressive volume in *both* directions across this price zone, there is no unfinished inventory. 

When price retraces back to a BPR:
- It respects the upper or lower boundary with extreme precision.
- Candle bodies rarely penetrate deep into a clean BPR.
- It acts as an instant springboard for the next expansion leg.

---

### 4. Propulsion Block

A **Propulsion Block** is a specialized, high-momentum Order Block that forms **inside** an existing Order Block.

#### Formation Logic:
1. Price retraces into a macro Bullish Order Block (Candle A) and reacts upward.
2. During that upward reaction, a new down-close candle (Candle B) prints, which then produces an explosive continuation impulse that breaks structure.
3. **Candle B is the Propulsion Block.**
4. Because institutional orders have already validated the macro Order Block, price will rarely dip below the high/open of this Propulsion Block. It provides an ultra-tight stop-loss entry point.

---

### 5. Reclaimed Order Block

A **Reclaimed Order Block** occurs when an Order Block appears to fail momentarily, but the breach was merely a stop-sweep before price immediately re-establishes direction.

- Price breaches the Mean Threshold of an Order Block briefly.
- The next candle vigorously snaps back inside the block's body with strong volume.
- The block is now **"Reclaimed"**—retail traders who assumed the level failed are trapped, and the resumption of the original trend is typically violent and rapid.

---

### 6. Rejection Block

A **Rejection Block** forms when a candlestick prints an extraordinarily long wick above a swing high (or below a swing low), but the **candle body closes far back inside the range**.

- **The Institutional Meaning:** The algorithm pushed price past the level to purge liquidity, but strong commercial rejection occurred within the same candle period.
- **Trading Application:** When price subsequently retraces back to that swing point, do **not** wait for price to reach the tip of the wick. Instead, anchor your entry level to the **High/Low of the Candle BODY (the base of the wick)**. The bodies represent the real volume threshold!
