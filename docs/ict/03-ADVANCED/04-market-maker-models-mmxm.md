# Level 03: Advanced Institutional Concepts
## Module 04: Market Maker Models (MMBM & MMSM)

---

### 1. The Algorithmic Roadmap: MMXM

The **Market Maker Model (MMXM)** is the overarching algorithmic roadmap that ties all individual ICT concepts together. 

It explains how institutional market makers engineer liquidity to reprice an asset from one equilibrium range to another, and then return it back to its origin.

There are two primary models:
1. **MMBM (Market Maker Buy Model):** Delivers price downward to sweep sell stops, reverses at a HTF Discount PD Array, and builds an aggressive buying curve back to the original consolidation.
2. **MMSM (Market Maker Sell Model):** Delivers price upward to sweep buy stops, reverses at a HTF Premium PD Array, and builds an aggressive selling curve back down to the original consolidation.

---

### 2. The Market Maker Buy Model (MMBM)

```
                       MARKET MAKER BUY MODEL (MMBM)
                       
              [ 1. ORIGINAL CONSOLIDATION ] ◄──────────────┐
                 ┌──────────────────────┐                  │
                 │                      │                  │  BUY SIDE OF THE CURVE
                 └──────────┬───────────┘                  │  (Smart money distributes into
                            │                              │   retail buy stops)
                            ▼                              │
                 [ 2. FIRST STAGE DISTRIBUTION ]           │
                   ┌──────────────────────┐                ▲
                   │                      │    [ 6. RE-ACCUMULATION / EXPANSION ]
                   └──────────┬───────────┘                │
                              │                            ▲
  SELL SIDE                   ▼                            │
  OF THE CURVE   [ 3. SECOND STAGE DISTRIBUTION ]          │
                   ┌──────────────────────┐                ▲
                   │                      │    [ 5. LOW-RISK BUY (First FVG retest) ]
                   └──────────┬───────────┘                │
                              │                            │
                              ▼                            │
                        [ 4. SMART MONEY REVERSAL (SMR) ] ─┘
                         • HTF Discount PD Array Reached
                         • Liquidity Purge (Turtle Soup)
                         • SMT Divergence Confirmed
                         • Aggressive MSS with Displacement
```

---

### 3. Phases of the Market Maker Model

#### Phase 1: The Original Consolidation
- A tight trading range where the market begins.
- Acts as the primary **Draw on Liquidity (DOL)** for the entire model. When the model completes, price will return to clear this original consolidation.

#### Phase 2: The Engineering Curve (Sell Curve in MMBM / Buy Curve in MMSM)
- Price steps downward (or upward) through distinct stages: **Stage 1 Consolidation, Stage 2 Consolidation**.
- Retail traders see a strong trend and pile in with the trend, placing trailing stop-loss orders above/below each micro consolidation.

#### Phase 3: The Smart Money Reversal (SMR)
- **The Inflection Point:** Price taps directly into a major Higher Timeframe PD Array (Daily/4H Order Block or FVG).
- Accompanied by:
  - An **SMT Divergence** across correlated assets.
  - A **Turtle Soup** sweep of the lowest low.
  - An aggressive **Market Structure Shift (MSS)** with clean displacement, leaving behind an energetic FVG.

#### Phase 4: The Low-Risk Buy / Sell Entry
- Following the SMR and MSS, price retraces into the very first Fair Value Gap or Breaker Block on the reversal curve.
- This is the **safest, highest risk-to-reward entry** in the entire model.

#### Phase 5: Re-accumulation / Re-distribution Stages
- Price steps upward (in MMBM) mirroring the levels of the left-hand curve.
- Institutional algorithms systematically target the stop-losses left behind by traders during the initial descent.

#### Phase 6: Run on the Original Consolidation
- Price violently expands into the Original Consolidation, liquidating all resting liquidity and completing the algorithmic dealing cycle.

---

### 4. Symmetry: Left Side vs. Right Side

One of the most remarkable discoveries in ICT methodology is **price symmetry**:
- The levels that acted as support on the **Sell Side of the Curve** (left) become prime resistance/order block targets on the **Buy Side of the Curve** (right).
- By projecting horizontal levels across from the left side's micro consolidations, you can forecast the exact price points where re-accumulations and institutional reactions will take place on the right side.

---

### 5. Tactical Execution Guide for MMXM

1. **Step 1: Identify the Original Consolidation** on your 1-Hour or 15-Minute chart.
2. **Step 2: Track the descent/ascent** and do not try to catch falling knives. Count the consolidation stages (typically 2 to 3 stages).
3. **Step 3: Wait for the Smart Money Reversal (SMR)** at a certified HTF PD Array.
4. **Step 4: Confirm with SMT and MSS**.
5. **Step 5: Execute at the Low-Risk Entry** (the first FVG formed after the MSS).
6. **Step 6: Hold through re-accumulation stages**, setting final profit target at the **Original Consolidation High/Low**.
