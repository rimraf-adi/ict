# Level 01: Foundations
## Module 04: Imbalances, Fair Value Gaps (FVG) & Volume Imbalance

---

### 1. The Theory of Price Inefficiency

In an ideal, perfectly balanced auction, every price tick is offered equally to both buyers and sellers. 

However, when institutional algorithms deploy massive volume, price is repriced so aggressively in one direction that one side of the market is completely skipped or denied execution. This creates a **market imbalance** or **inefficiency**.

According to ICT, IPDA recognizes these inefficiencies as "unfinished business" and acts as a gravitational magnet, returning price to rebalance the imbalance before continuing.

---

### 2. The 3-Candle Anatomy of a Fair Value Gap (FVG)

A Fair Value Gap is strictly a **three-candlestick sequence**. It is defined by the physical separation between Candle 1 and Candle 3, where Candle 2 represents the energetic displacement.

#### A. Bullish Fair Value Gap (BISI: Buyside Imbalance, Sellside Inefficiency)
Formed during an explosive upward move:
- **Candle 1:** The prior candle before the expansion.
- **Candle 2:** Large bullish displacement candle.
- **Candle 3:** The follow-through candle.
- **The Gap:** The vertical space between the **High of Candle 1** and the **Low of Candle 3**. There is NO price overlap between Candle 1 and Candle 3.

```
       CANDLE 1           CANDLE 2 (Displacement)          CANDLE 3
                            ┌──────────────┐                  │
                            │              │               ┌──┴──┐
                            │              │               │     │
                            │              │               └──┬──┘
                            │              │                  │ Low of Candle 3
                            │              │   ═════════════════════════════════  [TOP OF FVG]
                            │              │   ▲
                            │              │   │   FAIR VALUE GAP (BISI)
                            │              │   │   Only buyers offered.
                            │              │   ▼
   High of Candle 1         │              │   ═════════════════════════════════  [BOTTOM OF FVG]
          │                 │              │
        ┌─┴─┐               │              │
        │   │               └──────┬───────┘
        └───┘                      │
```

#### B. Bearish Fair Value Gap (SIBI: Sellside Imbalance, Buyside Inefficiency)
Formed during an explosive downward move:
- **Candle 1:** The prior candle before the decline.
- **Candle 2:** Large bearish displacement candle.
- **Candle 3:** The follow-through candle.
- **The Gap:** The vertical space between the **Low of Candle 1** and the **High of Candle 3**.

---

### 3. Consequent Encroachment (C.E.)

The **Consequent Encroachment (C.E.)** is the exact **50% mathematical midpoint** of a Fair Value Gap or long candle wick:

$$\text{Consequent Encroachment (C.E.)} = \frac{\text{FVG High} + \text{FVG Low}}{2}$$

#### Institutional Significance of C.E.:
1. **The Respect Level:** In a high-probability trending setup, price does not need to fill 100% of an FVG. Tapping the C.E. (50%) and immediately rejecting with a wick is the gold standard of institutional sponsorship.
2. **Structural Health:** If candle *bodies* close significantly past the 50% Consequent Encroachment level, it signals structural weakness, and the FVG is likely to fail or invert.

---

### 4. Volume Imbalance (VI)

A **Volume Imbalance** is a more subtle inefficiency that occurs between two consecutive candles:
- The wicks of the candles overlap, but the **real candle bodies do not overlap**.
- There is a visible gap between the **Close of Candle 1** and the **Open of Candle 2**.

```
            CANDLE 1               CANDLE 2
               │
            ┌──┴──┐
            │     │ Close
            └─────┘ ═══════════════════════ [Body Gap]
                    ═══════════════════════
                    ┌─────┐ Open
                    │     │
                    └──┬──┘
                       │
```

Volume Imbalances carry strong institutional weight and frequently serve as pinpoint re-test zones during fast momentum moves.

---

### 5. Liquidity Void

When an instrument experiences a rapid succession of multiple back-to-back large displacement candles (such as during a central bank interest rate decision or high-impact CPI release), it leaves a **Liquidity Void**.

- A Liquidity Void represents a large vacuum of unmitigated orders.
- Price will eventually retrace through this void like water filling a dry riverbed, often delivering smooth, clean fills back to the origin of the impulse.

---

### 6. Opening Gaps: NWOG & NDOG

- **NWOG (New Week Opening Gap):** The price differential between Friday’s official market close and Sunday afternoon’s futures/forex open.
- **NDOG (New Day Opening Gap):** The price differential between yesterday’s official settlement close (e.g., 17:00 NY for US indices) and the 18:00 NY reopening.

#### How to Trade Opening Gaps:
Plot the high, low, and 50% midpoint (C.E.) of the NWOG and NDOG across your charts throughout the entire week. These levels act as dynamic algorithmic support/resistance anchors that price respects repeatedly days after their creation.
