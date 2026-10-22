export interface Candle {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

export interface OverlayGap {
  id: string;
  type: 'bullish-fvg' | 'bearish-fvg' | 'inversion-fvg' | 'breaker';
  startPrice: number;
  endPrice: number;
  startIndex: number;
  endIndex?: number;
  label: string;
  cePrice?: number; // Consequent Encroachment (50% midpoint)
  status: 'active' | 'mitigated' | 'invalidated';
}

export interface OverlayOrderBlock {
  id: string;
  type: 'bullish-ob' | 'bearish-ob' | 'breaker-block';
  candleIndex: number;
  topPrice: number;
  bottomPrice: number;
  label: string;
  endIndex?: number;
}

export interface BenchmarkLine {
  id: string;
  label: string;
  price: number;
  color: string;
  lineStyle: 'dashed' | 'solid' | 'dotted';
}

export interface FibLevel {
  ratio: number;
  label: string;
  price: number;
  isSweetSpot?: boolean;
}

export interface OTESetup {
  anchorHigh: number;
  anchorLow: number;
  direction: 'bullish' | 'bearish';
  levels: FibLevel[];
}

export interface SMTSecondaryData {
  symbol: string;
  timeframe: string;
  description: string;
  candles: Candle[];
  divergenceIndex: number;
  note: string;
}

export interface DecisionOption {
  id: string;
  label: string;
  description?: string;
  isCorrect: boolean;
  feedback: string;
  action?: 'buy' | 'sell' | 'wait' | 'identify_fvg';
}

export interface OrderCriteria {
  direction: 'buy' | 'sell';
  recommendedEntry: number;
  recommendedStopLoss: number;
  recommendedTakeProfit: number;
  entryTolerance: number;
  minRR: number;
  explanation: string;
}

export interface DecisionPoint {
  id: string;
  triggerIndex: number;
  phaseTitle: string;
  conceptBadge: string;
  prompt: string;
  options: DecisionOption[];
  requiresOrderPlacement?: boolean;
  orderCriteria?: OrderCriteria;
}

export interface ScenarioPostMortem {
  setupSummary: string;
  ruleChecklist: {
    rule: string;
    explanation: string;
    passed: boolean;
  }[];
  ictTakeaway: string;
}

export interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  category: 'Judas Swing' | 'Silver Bullet' | 'SMT Divergence' | 'The Unicorn';
  difficulty: 'Beginner' | 'Intermediate' | 'Master';
  asset: string;
  timeframe: string;
  session: string;
  killZoneWindow: string;
  description: string;
  keyRules: string[];
  candles: Candle[];
  secondarySeries?: SMTSecondaryData;
  overlays: {
    fvgs: OverlayGap[];
    orderBlocks: OverlayOrderBlock[];
    benchmarks: BenchmarkLine[];
    ote?: OTESetup;
  };
  decisionPoints: DecisionPoint[];
  postMortem: ScenarioPostMortem;
}

export const SCENARIOS: Scenario[] = [
  // --------------------------------------------------------------------------
  // SCENARIO 1: London Judas Swing (EUR/USD, 5m)
  // --------------------------------------------------------------------------
  {
    id: 'london-judas-swing-eurusd',
    title: 'London Judas Swing Liquidity Purge',
    subtitle: 'Asian Range High sweep into 1H Bearish FVG followed by 5m MSS & OTE entry',
    category: 'Judas Swing',
    difficulty: 'Beginner',
    asset: 'EUR/USD',
    timeframe: '5m',
    session: 'London Open Killzone',
    killZoneWindow: '02:00 - 05:00 NY Time (07:00 - 10:00 GMT)',
    description:
      'During the Asian session, EUR/USD established a consolidated range between 1.08420 and 1.08820. At London Open (02:30 NY), institutional smart money engineers a rapid deceptive fakeout (Judas Swing) above the Asian High to purge buy-stop liquidity directly into a higher-timeframe 1H Bearish FVG, setting up an explosive reversal down to the Asian Range Low.',
    keyRules: [
      'Asian range must be defined between 20:00 and 00:00 NY time.',
      'Judas swing occurs between 02:00 and 03:00 NY time, sweeping Asian extremes.',
      'Wait for 5m Market Structure Shift (MSS) with energetic displacement candle.',
      'Enter short on retest of the resulting 5m Bearish FVG (0.62 - 0.705 OTE).',
      'Target opposing session liquidity (Asian Low).'
    ],
    candles: [
      // Asian Session Consolidation (Candles 0-11: 01:00 - 01:55)
      { time: '01:00', open: 1.08600, high: 1.08640, low: 1.08580, close: 1.08610, volume: 1420 },
      { time: '01:05', open: 1.08610, high: 1.08670, low: 1.08590, close: 1.08650, volume: 1530 },
      { time: '01:10', open: 1.08650, high: 1.08720, low: 1.08630, close: 1.08700, volume: 1610 },
      { time: '01:15', open: 1.08700, high: 1.08750, low: 1.08680, close: 1.08740, volume: 1740 },
      { time: '01:20', open: 1.08740, high: 1.08820, low: 1.08710, close: 1.08810, volume: 1980 }, // Asian High established
      { time: '01:25', open: 1.08810, high: 1.08820, low: 1.08730, close: 1.08750, volume: 1450 },
      { time: '01:30', open: 1.08750, high: 1.08770, low: 1.08660, close: 1.08680, volume: 1390 },
      { time: '01:35', open: 1.08680, high: 1.08710, low: 1.08590, close: 1.08620, volume: 1410 },
      { time: '01:40', open: 1.08620, high: 1.08640, low: 1.08500, close: 1.08520, volume: 1520 },
      { time: '01:45', open: 1.08520, high: 1.08540, low: 1.08420, close: 1.08440, volume: 1650 }, // Asian Low established
      { time: '01:50', open: 1.08440, high: 1.08520, low: 1.08430, close: 1.08490, volume: 1380 },
      { time: '01:55', open: 1.08490, high: 1.08560, low: 1.08470, close: 1.08530, volume: 1400 },

      // Pre-London / London Open Build-up (Candles 12-16: 02:00 - 02:20)
      { time: '02:00', open: 1.08530, high: 1.08630, low: 1.08510, close: 1.08620, volume: 2210 }, // Midnight Open mark
      { time: '02:05', open: 1.08620, high: 1.08690, low: 1.08600, close: 1.08670, volume: 2340 },
      { time: '02:10', open: 1.08670, high: 1.08740, low: 1.08650, close: 1.08720, volume: 2510 },
      { time: '02:15', open: 1.08720, high: 1.08780, low: 1.08700, close: 1.08760, volume: 2890 },
      { time: '02:20', open: 1.08760, high: 1.08800, low: 1.08730, close: 1.08790, volume: 3100 },

      // Judas Swing: Sweeps Asian High (1.08820) into 1H FVG (Candles 17-19: 02:25 - 02:35)
      { time: '02:25', open: 1.08790, high: 1.08845, low: 1.08770, close: 1.08840, volume: 4600 }, // Pierces Asian High
      { time: '02:30', open: 1.08840, high: 1.08892, low: 1.08820, close: 1.08885, volume: 5400 }, // Peak Judas inside 1H FVG
      { time: '02:35', open: 1.08885, high: 1.08890, low: 1.08810, close: 1.08820, volume: 4950 }, // Rejection wick!

      // Displacement Downward & Market Structure Shift (Candles 20-23: 02:40 - 02:55)
      { time: '02:40', open: 1.08820, high: 1.08830, low: 1.08745, close: 1.08750, volume: 4700 }, // Candle 1 of FVG
      { time: '02:45', open: 1.08750, high: 1.08760, low: 1.08650, close: 1.08660, volume: 6200 }, // Massive displacement candle (MSS below 1.08720)
      { time: '02:50', open: 1.08660, high: 1.08685, low: 1.08600, close: 1.08615, volume: 5100 }, // Candle 3 creates FVG (1.08745 to 1.08685)
      { time: '02:55', open: 1.08615, high: 1.08640, low: 1.08570, close: 1.08580, volume: 4300 }, // Push lower

      // Retracement into Bearish FVG & OTE (Candles 24-27: 03:00 - 03:15)
      { time: '03:00', open: 1.08580, high: 1.08660, low: 1.08575, close: 1.08650, volume: 3200 },
      { time: '03:05', open: 1.08650, high: 1.08710, low: 1.08640, close: 1.08705, volume: 3450 }, // Entering FVG
      { time: '03:10', open: 1.08705, high: 1.08735, low: 1.08695, close: 1.08720, volume: 3800 }, // Sweet spot 0.705 OTE tap & FVG CE
      { time: '03:15', open: 1.08720, high: 1.08725, low: 1.08650, close: 1.08660, volume: 4100 }, // Rejection confirms institutional sell

      // Expansion to Target (Candles 28-36: 03:20 - 04:00)
      { time: '03:20', open: 1.08660, high: 1.08670, low: 1.08590, close: 1.08600, volume: 4600 },
      { time: '03:25', open: 1.08600, high: 1.08610, low: 1.08520, close: 1.08530, volume: 4800 },
      { time: '03:30', open: 1.08530, high: 1.08540, low: 1.08470, close: 1.08480, volume: 5100 },
      { time: '03:35', open: 1.08480, high: 1.08495, low: 1.08430, close: 1.08435, volume: 5300 },
      { time: '03:40', open: 1.08435, high: 1.08445, low: 1.08405, close: 1.08410, volume: 6400 }, // Hits & sweeps Asian Low!
      { time: '03:45', open: 1.08410, high: 1.08420, low: 1.08375, close: 1.08380, volume: 5900 },
      { time: '03:50', open: 1.08380, high: 1.08410, low: 1.08360, close: 1.08390, volume: 4100 },
      { time: '03:55', open: 1.08390, high: 1.08430, low: 1.08380, close: 1.08420, volume: 3800 },
      { time: '04:00', open: 1.08420, high: 1.08440, low: 1.08390, close: 1.08405, volume: 3500 },
    ],
    overlays: {
      fvgs: [
        {
          id: '1h-htf-fvg',
          type: 'bearish-fvg',
          startPrice: 1.08860,
          endPrice: 1.08940,
          startIndex: 0,
          endIndex: 25,
          label: '1H Bearish HTF FVG',
          cePrice: 1.08900,
          status: 'mitigated'
        },
        {
          id: '5m-displacement-fvg',
          type: 'bearish-fvg',
          startPrice: 1.08685,
          endPrice: 1.08745,
          startIndex: 21,
          endIndex: 28,
          label: '5m Bearish FVG (Entry Zone)',
          cePrice: 1.08715,
          status: 'mitigated'
        }
      ],
      orderBlocks: [
        {
          id: 'asian-sweep-ob',
          type: 'bearish-ob',
          candleIndex: 18,
          topPrice: 1.08892,
          bottomPrice: 1.08820,
          label: 'Bearish Order Block (Judas Wick)',
          endIndex: 28
        }
      ],
      benchmarks: [
        {
          id: 'asian-high',
          label: 'Asian Range High (1.08820) - BSL',
          price: 1.08820,
          color: '#f59e0b',
          lineStyle: 'dashed'
        },
        {
          id: 'midnight-open',
          label: 'Midnight NY Open (1.08620)',
          price: 1.08620,
          color: '#60a5fa',
          lineStyle: 'dotted'
        },
        {
          id: 'asian-low',
          label: 'Asian Range Low (1.08420) - SSL / Target',
          price: 1.08420,
          color: '#10b981',
          lineStyle: 'dashed'
        }
      ],
      ote: {
        anchorHigh: 1.08892,
        anchorLow: 1.08570,
        direction: 'bearish',
        levels: [
          { ratio: 0.50, label: '0.50 Equilibrium', price: 1.08731 },
          { ratio: 0.62, label: '0.62 OTE Discount', price: 1.08769 },
          { ratio: 0.705, label: '0.705 Institutional Sweet Spot', price: 1.08797, isSweetSpot: true },
          { ratio: 0.79, label: '0.79 Deep Retracement', price: 1.08824 }
        ]
      }
    },
    decisionPoints: [
      {
        id: 'dp-1-liquidity-sweep',
        triggerIndex: 19,
        phaseTitle: 'Phase 1: Liquidity Purge Detected',
        conceptBadge: 'LIQUIDITY SWEEP',
        prompt:
          'Candle 02:35 NY just swept through the Asian Range High (1.08820) into a 1H Bearish FVG and printed an aggressive upper rejection wick. What should you do right now?',
        options: [
          {
            id: 'opt-1-buy-breakout',
            label: 'Buy the bullish breakout above Asian High',
            description: 'Enter Long assuming strong momentum upward continuation.',
            isCorrect: false,
            feedback:
              'Incorrect! Buying the breakout above Asian session highs is textbook retail stop-hunt entrapment. Smart money uses breakout liquidity to fill massive institutional sell orders.'
          },
          {
            id: 'opt-2-wait-mss',
            label: 'Wait for 5m Market Structure Shift (MSS) with energetic displacement',
            description: 'Wait for internal swing low break to confirm the institutional reversal.',
            isCorrect: true,
            feedback:
              'Spot on! Never short blindly into a purge without confirmation. You must wait for an energetic displacement candle closing below the recent 5m swing low (MSS) to confirm smart money sponsorship.'
          },
          {
            id: 'opt-3-market-short',
            label: 'Immediately market short at the high',
            description: 'Short right now to get the absolute top.',
            isCorrect: false,
            feedback:
              'Too reckless. Without confirmation of displacement and structure break, the algorithm could easily reach deeper into the higher-timeframe FVG.'
          }
        ]
      },
      {
        id: 'dp-2-fvg-entry',
        triggerIndex: 25,
        phaseTitle: 'Phase 2: Execution at Fair Value Gap',
        conceptBadge: 'DISPLACEMENT & FVG ENTRY',
        prompt:
          'A violent 3-candle displacement broke the 1.08720 swing low (confirming MSS) and printed a pristine 5m Bearish FVG between 1.08685 and 1.08745. Price is now pulling back toward Consequent Encroachment (50%). Set your trade plan.',
        requiresOrderPlacement: true,
        orderCriteria: {
          direction: 'sell',
          recommendedEntry: 1.08720,
          recommendedStopLoss: 1.08900,
          recommendedTakeProfit: 1.08420,
          entryTolerance: 0.00025,
          minRR: 2.0,
          explanation:
            'Ideal entry is inside the 5m FVG (1.08685 - 1.08745) around 1.08720. Stop loss sits safely above the Judas Swing high at 1.08900 (~18 pips). Take profit is the unmitigated Asian Range Low at 1.08420 (~30 pips), yielding a clean 1:2.3+ R:R.'
        },
        options: [
          {
            id: 'opt-execute-short',
            label: 'Place Limit Short order inside the 5m FVG (1.08710 - 1.08730)',
            description: 'Align entry with Consequent Encroachment & OTE 0.705 level.',
            isCorrect: true,
            feedback:
              'Excellent execution plan! Entering on the premium retracement into the displacement FVG provides asymmetric risk-to-reward.'
          },
          {
            id: 'opt-wait-further',
            label: 'Wait for price to reach back to Asian High',
            description: 'Demand a 100% retrace before entering.',
            isCorrect: false,
            feedback:
              'Incorrect. A high-quality displacement setup rarely retraces 100%. Reaching the high again would invalidate the bearish displacement premise.'
          }
        ]
      }
    ],
    postMortem: {
      setupSummary:
        'The London Judas Swing executed with algorithmic precision: retail buy-stops resting above Asian High were liquidated into the 1H HTF Bearish FVG, followed by rapid displacement breaking internal structure (MSS) and delivering price directly to the opposing liquidity pool (Asian Low).',
      ruleChecklist: [
        {
          rule: 'Time & Killzone Alignment',
          explanation: 'Purge occurred at 02:30 NY time, right in the heart of the London Open Killzone.',
          passed: true
        },
        {
          rule: 'Liquidity Purge (BSL Sweep)',
          explanation: 'Asian Range High (1.08820) cleared by 7 pips into higher-timeframe resistance.',
          passed: true
        },
        {
          rule: 'Market Structure Shift (MSS)',
          explanation: 'Candle at 02:45 violently displaced and closed below 1.08720 key swing low.',
          passed: true
        },
        {
          rule: 'Fair Value Gap Confluence',
          explanation: '5m Bearish FVG left between 1.08685 and 1.08745 offered optimal retest entry.',
          passed: true
        },
        {
          rule: 'Target Selection (External SSL)',
          explanation: 'Asian Range Low (1.08420) successfully swept at 03:40 NY time for 30 pips profit.',
          passed: true
        }
      ],
      ictTakeaway:
        'Remember ICT Core Principle: "Asian session creates the range, London creates the fakeout (Judas), New York provides the continuation or reversal."'
    }
  },

  // --------------------------------------------------------------------------
  // SCENARIO 2: 10:00 AM NY Silver Bullet (NQ Futures, 1m)
  // --------------------------------------------------------------------------
  {
    id: 'ny-silver-bullet-nq',
    title: '10:00 AM NY Silver Bullet Algorithm',
    subtitle: 'High-impact 10:00 AM sweep of Equal Lows into 1m displacement MSS & FVG retest',
    category: 'Silver Bullet',
    difficulty: 'Intermediate',
    asset: 'NQ (Nasdaq 100 Futures)',
    timeframe: '1m',
    session: 'New York Morning Killzone (Silver Bullet)',
    killZoneWindow: '10:00 AM - 11:00 AM NY Time',
    description:
      'The ICT Silver Bullet is a time-specific setup occurring between 10:00 AM and 11:00 AM New York time. In this session, clear Equal Lows (EQL) were engineered at 18,220.00. At precisely 10:00 AM, high-volatility liquidity engineering purges below the lows down to 18,202.00, instantly followed by violent 1m displacement upward, generating a textbook Silver Bullet FVG.',
    keyRules: [
      'Only valid between 10:00 AM and 11:00 AM NY Time.',
      'Must target minimum 15 to 30 handles (60 - 120 ticks) on NQ.',
      'Must identify a pre-existing liquidity pool (Equal Highs/Lows or previous session high/low).',
      'Look for the first clean 1m FVG that forms immediately after the displacement MSS.',
      'Enter at FVG threshold with stop placed at displacement swing low.'
    ],
    candles: [
      // Pre-10:00 AM Build-up & EQL Formation (Candles 0-8: 09:51 - 09:59)
      { time: '09:51', open: 18238.0, high: 18244.5, low: 18232.0, close: 18234.0, volume: 1840 },
      { time: '09:52', open: 18234.0, high: 18236.0, low: 18220.0, close: 18222.5, volume: 2210 }, // First EQL touch (18220.0)
      { time: '09:53', open: 18222.5, high: 18231.0, low: 18221.0, close: 18229.0, volume: 1950 },
      { time: '09:54', open: 18229.0, high: 18235.0, low: 18225.0, close: 18233.0, volume: 1720 },
      { time: '09:55', open: 18233.0, high: 18238.0, low: 18228.0, close: 18230.0, volume: 1680 },
      { time: '09:56', open: 18230.0, high: 18232.0, low: 18220.0, close: 18221.0, volume: 2430 }, // Second EQL touch (18220.0)
      { time: '09:57', open: 18221.0, high: 18228.0, low: 18220.5, close: 18226.0, volume: 1540 },
      { time: '09:58', open: 18226.0, high: 18230.0, low: 18223.0, close: 18224.5, volume: 1610 },
      { time: '09:59', open: 18224.5, high: 18227.0, low: 18221.0, close: 18222.0, volume: 1900 },

      // 10:00 AM Silver Bullet Window Opens: News / Macro Sweep (Candles 9-11: 10:00 - 10:02)
      { time: '10:00', open: 18222.0, high: 18224.0, low: 18202.0, close: 18206.5, volume: 8900 }, // Stop hunt flush sweeps 18220 EQL!
      { time: '10:01', open: 18206.5, high: 18218.0, low: 18204.0, close: 18216.5, volume: 7200 }, // Pin bar rejection wick
      { time: '10:02', open: 18216.5, high: 18224.0, low: 18215.0, close: 18223.0, volume: 6800 }, // Candle 1 of FVG

      // Violent 1m Displacement & MSS (Candles 12-14: 10:03 - 10:05)
      { time: '10:03', open: 18223.0, high: 18239.5, low: 18222.5, close: 18238.0, volume: 9400 }, // Displacement explodes through swing high (18235)
      { time: '10:04', open: 18238.0, high: 18247.0, low: 18232.0, close: 18245.5, volume: 8100 }, // Candle 3 creates FVG (18224.0 to 18232.0)
      { time: '10:05', open: 18245.5, high: 18252.0, low: 18242.0, close: 18249.0, volume: 6500 }, // Extension up

      // Retracement into 1m Silver Bullet FVG (Candles 15-18: 10:06 - 10:09)
      { time: '10:06', open: 18249.0, high: 18250.0, low: 18238.0, close: 18239.0, volume: 4200 },
      { time: '10:07', open: 18239.0, high: 18241.0, low: 18230.0, close: 18231.0, volume: 4900 }, // Enters FVG
      { time: '10:08', open: 18231.0, high: 18232.0, low: 18226.0, close: 18228.0, volume: 5300 }, // CE tap at 18228.0 (50% midpoint)
      { time: '10:09', open: 18228.0, high: 18235.0, low: 18227.0, close: 18234.5, volume: 4800 }, // Bullish response confirms buyers

      // Expansion to Target (Candles 19-27: 10:10 - 10:18)
      { time: '10:10', open: 18234.5, high: 18244.0, low: 18233.0, close: 18242.0, volume: 5600 },
      { time: '10:11', open: 18242.0, high: 18251.0, low: 18240.0, close: 18249.5, volume: 5900 },
      { time: '10:12', open: 18249.5, high: 18258.0, low: 18247.0, close: 18256.0, volume: 6200 },
      { time: '10:13', open: 18256.0, high: 18264.0, low: 18253.0, close: 18262.5, volume: 6700 },
      { time: '10:14', open: 18262.5, high: 18270.0, low: 18260.0, close: 18268.0, volume: 7100 }, // Reaches +40 handles target!
      { time: '10:15', open: 18268.0, high: 18274.5, low: 18265.0, close: 18272.0, volume: 6400 },
      { time: '10:16', open: 18272.0, high: 18276.0, low: 18268.0, close: 18271.0, volume: 4900 },
      { time: '10:17', open: 18271.0, high: 18273.0, low: 18266.0, close: 18269.0, volume: 4300 },
      { time: '10:18', open: 18269.0, high: 18272.0, low: 18265.0, close: 18267.5, volume: 3800 },
    ],
    overlays: {
      fvgs: [
        {
          id: '1m-silver-bullet-fvg',
          type: 'bullish-fvg',
          startPrice: 18224.0,
          endPrice: 18232.0,
          startIndex: 12,
          endIndex: 19,
          label: '1m Silver Bullet FVG (18,224 - 18,232)',
          cePrice: 18228.0,
          status: 'mitigated'
        }
      ],
      orderBlocks: [
        {
          id: 'ob-10am-flush',
          type: 'bullish-ob',
          candleIndex: 9,
          topPrice: 18222.0,
          bottomPrice: 18202.0,
          label: 'Bullish Order Block (10:00 AM Flush)',
          endIndex: 20
        }
      ],
      benchmarks: [
        {
          id: 'equal-lows',
          label: 'Equal Lows (EQL 18,220.00) - Sell-Side Liquidity',
          price: 18220.0,
          color: '#ef4444',
          lineStyle: 'dashed'
        },
        {
          id: 'target-high',
          label: 'Silver Bullet Target (18,268.00) +40 Handles',
          price: 18268.0,
          color: '#10b981',
          lineStyle: 'dashed'
        }
      ],
      ote: {
        anchorHigh: 18252.0,
        anchorLow: 18202.0,
        direction: 'bullish',
        levels: [
          { ratio: 0.50, label: '0.50 Equilibrium', price: 18227.0 },
          { ratio: 0.62, label: '0.62 OTE Discount', price: 18221.0 },
          { ratio: 0.705, label: '0.705 Institutional Sweet Spot', price: 18216.7, isSweetSpot: true },
          { ratio: 0.79, label: '0.79 Deep Discount', price: 18212.5 }
        ]
      }
    },
    decisionPoints: [
      {
        id: 'dp-sb-1',
        triggerIndex: 11,
        phaseTitle: 'Phase 1: 10:00 AM Liquidity Sweep Assessment',
        conceptBadge: 'KILLZONE LIQUIDITY PURGE',
        prompt:
          'At 10:00 AM, a fast flush dipped below the double-bottom Equal Lows (18,220.00) reaching 18,202.00, but immediately snapped back closing as a wick hammer at 18,216.50. What is your reading?',
        options: [
          {
            id: 'opt-sb-bearish',
            label: 'The market broke support, sell short for continuation lower',
            description: 'Treat 18,220 as broken support turned resistance.',
            isCorrect: false,
            feedback:
              'Fatal error! In ICT concepts, clean equal lows are engineered liquidity bait. Smart money intentionally engineered a stop-run into Sell-Side Liquidity (SSL) to accumulate long contracts.'
          },
          {
            id: 'opt-sb-bullish-prep',
            label: 'Anticipate a Bullish Silver Bullet; watch for 1m displacement MSS',
            description: 'Look for an impulse candle breaking structure with an FVG.',
            isCorrect: true,
            feedback:
              'Exactly right. The 10:00 AM macro engineered an SSL sweep. Now we await displacement above the 09:55 high (18,235.00) leaving behind a 1m FVG.'
          }
        ]
      },
      {
        id: 'dp-sb-2',
        triggerIndex: 16,
        phaseTitle: 'Phase 2: Silver Bullet FVG Entry Execution',
        conceptBadge: 'SILVER BULLET RETEST',
        prompt:
          'Price broke 18,235.00 with huge green displacement candles up to 18,252.00. The 1m Fair Value Gap between 18,224.00 and 18,232.00 is being tested right now. Formulate your execution order.',
        requiresOrderPlacement: true,
        orderCriteria: {
          direction: 'buy',
          recommendedEntry: 18228.0,
          recommendedStopLoss: 18214.0,
          recommendedTakeProfit: 18268.0,
          entryTolerance: 4.0,
          minRR: 2.5,
          explanation:
            'Enter long around 18,228.00 (Consequent Encroachment / 50% of the 1m FVG). Stop loss placed below the swing low / displacement origin at 18,214.00 (14 handles risk). Target the morning buy-side liquidity at 18,268.00 (+40 handles profit, 1:2.85 R:R).'
        },
        options: [
          {
            id: 'opt-sb-buy-ce',
            label: 'Enter Long limit at FVG Consequent Encroachment (18,228.00)',
            description: 'SL: 18,214.00, TP: 18,268.00 (40 handles profit).',
            isCorrect: true,
            feedback:
              'Spot on! The 10:00 AM Silver Bullet requires targeting 20-40 handles cleanly without overholding past the 11:00 AM killzone close.'
          },
          {
            id: 'opt-sb-chase',
            label: 'Market buy right at the high (18,252.00)',
            description: 'FOMO buy because of momentum.',
            isCorrect: false,
            feedback:
              'Poor discipline. Buying the top of displacement gives terrible risk:reward and exposes you to drawdown during the inevitable FVG retest.'
          }
        ]
      }
    ],
    postMortem: {
      setupSummary:
        'The 10:00 AM Silver Bullet model executed to perfection: The morning Equal Lows (18,220.00) provided the liquidity fuel. The 10:00 AM macro delivered the purge to 18,202.00, followed by a 45-handle displacement. Retest of the 1m FVG at 18,228.00 offered a low-stress entry delivering +40 handles within 6 minutes.',
      ruleChecklist: [
        {
          rule: 'Time Window Integrity',
          explanation: 'Displacement and FVG entry occurred strictly between 10:00 AM and 10:10 AM NY time.',
          passed: true
        },
        {
          rule: 'Equal Lows Liquidity Purge',
          explanation: 'Clear EQL resting at 18,220.00 swept by 18 handles into deep discount.',
          passed: true
        },
        {
          rule: 'Energetic 1m MSS Displacement',
          explanation: 'Four consecutive wide-range bullish candles with heavy volume.',
          passed: true
        },
        {
          rule: 'Prone Retest of Consequent Encroachment',
          explanation: '1m FVG 50% level at 18,228.00 was tapped precisely before explosive liftoff.',
          passed: true
        },
        {
          rule: 'Risk-to-Reward Execution',
          explanation: '14 handles risk for 40 handles profit yielded 1:2.85 R:R.',
          passed: true
        }
      ],
      ictTakeaway:
        'The Silver Bullet algorithm looks for one clean FVG retest inside the 60-minute window (10:00 - 11:00 AM NY). Take your 20-40 handles and close the terminal.'
    }
  },

  // --------------------------------------------------------------------------
  // SCENARIO 3: Bullish SMT Divergence (Correlated ES vs NQ, 5m)
  // --------------------------------------------------------------------------
  {
    id: 'smt-divergence-es-nq',
    title: 'Bullish SMT Divergence & Inversion FVG',
    subtitle: 'Intermarket cracks: ES sweeps lower low while NQ forms higher low + Inversion FVG entry',
    category: 'SMT Divergence',
    difficulty: 'Intermediate',
    asset: 'NQ (Nasdaq) vs ES (S&P 500)',
    timeframe: '5m',
    session: 'New York Morning Killzone',
    killZoneWindow: '09:30 - 11:00 NY Time',
    description:
      'Smart Money Technique (SMT) reveals cracks in the institutional matrix when closely correlated assets diverge at key swing points. While ES (S&P 500) breaks down to make a new lower low, NQ (Nasdaq) holds stubbornly and prints a higher low. This non-confirmation signals intense institutional accumulation in tech, primed for an Inversion FVG long entry.',
    keyRules: [
      'Correlated pairs (ES vs NQ or EUR vs GBP) should move in symmetry.',
      'When one instrument makes a Lower Low while the other makes a Higher Low, SMT Divergence exists.',
      'Trade the STRONGER asset (NQ) on the Long side.',
      'Look for an Inversion FVG (a prior bearish FVG that price aggressively slices through and flips into support).',
      'Target previous buy-side liquidity pools.'
    ],
    candles: [
      // Morning Opening Action on NQ (Candles 0-8: 09:30 - 10:10)
      { time: '09:30', open: 17950.0, high: 17975.0, low: 17920.0, close: 17935.0, volume: 5400 }, // Initial swing low (17,920.0)
      { time: '09:35', open: 17935.0, high: 17980.0, low: 17930.0, close: 17970.0, volume: 4800 },
      { time: '09:40', open: 17970.0, high: 17990.0, low: 17955.0, close: 17965.0, volume: 4200 },
      { time: '09:45', open: 17965.0, high: 17970.0, low: 17945.0, close: 17950.0, volume: 3900 },
      { time: '09:50', open: 17950.0, high: 17955.0, low: 17938.0, close: 17942.0, volume: 3600 },
      { time: '09:55', open: 17942.0, high: 17948.0, low: 17935.0, close: 17940.0, volume: 3800 },
      { time: '10:00', open: 17940.0, high: 17952.0, low: 17938.0, close: 17946.0, volume: 4500 },
      { time: '10:05', open: 17946.0, high: 17950.0, low: 17939.0, close: 17944.0, volume: 4100 }, // SMT Key Point: NQ holds 17,939 (Higher Low!)

      // Displacement & Inversion FVG Creation on NQ (Candles 8-12: 10:10 - 10:30)
      { time: '10:10', open: 17944.0, high: 17972.0, low: 17942.0, close: 17970.0, volume: 6800 }, // Impulse up
      { time: '10:15', open: 17970.0, high: 17995.0, low: 17968.0, close: 17992.0, volume: 8200 }, // Slices straight through 17960-17975 bearish FVG!
      { time: '10:20', open: 17992.0, high: 18015.0, low: 17988.0, close: 18010.0, volume: 7600 }, // Confirmation MSS
      { time: '10:25', open: 18010.0, high: 18012.0, low: 17985.0, close: 17988.0, volume: 5100 },

      // Retest of Inversion FVG (Candles 12-15: 10:30 - 10:45)
      { time: '10:30', open: 17988.0, high: 17990.0, low: 17972.0, close: 17975.0, volume: 4600 }, // Taps into 17970 Inversion FVG
      { time: '10:35', open: 17975.0, high: 17985.0, low: 17970.0, close: 17982.0, volume: 5200 }, // Rejection wick confirms support
      { time: '10:40', open: 17982.0, high: 18005.0, low: 17980.0, close: 18000.0, volume: 6100 },
      { time: '10:45', open: 18000.0, high: 18025.0, low: 17998.0, close: 18022.0, volume: 6900 },

      // Rally to BSL Target (Candles 16-22: 10:50 - 11:20)
      { time: '10:50', open: 18022.0, high: 18038.0, low: 18018.0, close: 18035.0, volume: 7200 },
      { time: '10:55', open: 18035.0, high: 18048.0, low: 18030.0, close: 18044.0, volume: 7400 },
      { time: '11:00', open: 18044.0, high: 18062.0, low: 18040.0, close: 18060.0, volume: 8500 }, // Sweeps Buy-Side Liquidity!
      { time: '11:05', open: 18060.0, high: 18068.0, low: 18055.0, close: 18064.0, volume: 6100 },
      { time: '11:10', open: 18064.0, high: 18065.0, low: 18050.0, close: 18052.0, volume: 4500 },
    ],
    secondarySeries: {
      symbol: 'ES (S&P 500 E-mini)',
      timeframe: '5m',
      description: 'Notice ES makes a distinct LOWER LOW while NQ makes a HIGHER LOW at 10:05 AM.',
      divergenceIndex: 7,
      note: 'ES broke prior low 5,088.0 down to 5,082.0 (Lower Low). NQ held 17,939.0 vs 17,920.0 (Higher Low).',
      candles: [
        { time: '09:30', open: 5100.0, high: 5108.0, low: 5088.0, close: 5092.0 }, // Prior low 5088.0
        { time: '09:35', open: 5092.0, high: 5098.0, low: 5090.0, close: 5095.0 },
        { time: '09:40', open: 5095.0, high: 5099.0, low: 5091.0, close: 5093.0 },
        { time: '09:45', open: 5093.0, high: 5094.0, low: 5087.0, close: 5089.0 },
        { time: '09:50', open: 5089.0, high: 5091.0, low: 5085.0, close: 5086.0 },
        { time: '09:55', open: 5086.0, high: 5088.0, low: 5084.0, close: 5085.0 },
        { time: '10:00', open: 5085.0, high: 5087.0, low: 5083.0, close: 5084.0 },
        { time: '10:05', open: 5084.0, high: 5085.0, low: 5082.0, close: 5082.5 }, // LOWER LOW on ES!
        { time: '10:10', open: 5082.5, high: 5090.0, low: 5082.0, close: 5089.0 },
        { time: '10:15', open: 5089.0, high: 5096.0, low: 5088.0, close: 5095.0 },
        { time: '10:20', open: 5095.0, high: 5102.0, low: 5094.0, close: 5100.0 },
        { time: '10:25', open: 5100.0, high: 5101.0, low: 5096.0, close: 5097.0 },
        { time: '10:30', open: 5097.0, high: 5098.0, low: 5094.0, close: 5095.0 },
        { time: '10:35', open: 5095.0, high: 5099.0, low: 5094.5, close: 5098.0 },
        { time: '10:40', open: 5098.0, high: 5105.0, low: 5097.0, close: 5104.0 },
        { time: '10:45', open: 5104.0, high: 5110.0, low: 5103.0, close: 5108.0 },
        { time: '10:50', open: 5108.0, high: 5114.0, low: 5106.0, close: 5112.0 },
        { time: '10:55', open: 5112.0, high: 5118.0, low: 5110.0, close: 5116.0 },
        { time: '11:00', open: 5116.0, high: 5122.0, low: 5115.0, close: 5120.0 }
      ]
    },
    overlays: {
      fvgs: [
        {
          id: 'inversion-fvg-nq',
          type: 'inversion-fvg',
          startPrice: 17960.0,
          endPrice: 17975.0,
          startIndex: 9,
          endIndex: 16,
          label: 'Inversion FVG (Bearish Gap flipped to Bullish Support)',
          cePrice: 17967.5,
          status: 'mitigated'
        }
      ],
      orderBlocks: [
        {
          id: 'ob-higher-low',
          type: 'bullish-ob',
          candleIndex: 7,
          topPrice: 17950.0,
          bottomPrice: 17939.0,
          label: 'Bullish Order Block (SMT Higher Low)',
          endIndex: 16
        }
      ],
      benchmarks: [
        {
          id: 'bsl-target',
          label: 'Target Buy-Side Liquidity (BSL 18,060.00)',
          price: 18060.0,
          color: '#10b981',
          lineStyle: 'dashed'
        },
        {
          id: 'prior-low',
          label: 'NQ Prior Low (17,920.00)',
          price: 17920.0,
          color: '#64748b',
          lineStyle: 'dotted'
        }
      ],
      ote: {
        anchorHigh: 18015.0,
        anchorLow: 17939.0,
        direction: 'bullish',
        levels: [
          { ratio: 0.50, label: '0.50 Equilibrium', price: 17977.0 },
          { ratio: 0.62, label: '0.62 OTE Discount', price: 17967.9 },
          { ratio: 0.705, label: '0.705 Institutional Sweet Spot', price: 17961.4, isSweetSpot: true },
          { ratio: 0.79, label: '0.79 Deep Discount', price: 17955.0 }
        ]
      }
    },
    decisionPoints: [
      {
        id: 'dp-smt-1',
        triggerIndex: 8,
        phaseTitle: 'Phase 1: SMT Divergence Recognition',
        conceptBadge: 'SMT DIVERGENCE',
        prompt:
          'Compare the correlated ES chart below. At 10:05 AM, ES punched through to make a clean Lower Low at 5,082.00. However, NQ refused to break lower, making a Higher Low at 17,939.00. What does this intermarket relationship prove?',
        options: [
          {
            id: 'opt-smt-short-nq',
            label: 'NQ is lagging behind and will soon crash to catch down with ES',
            description: 'Short NQ assuming correlation will pull it lower.',
            isCorrect: false,
            feedback:
              'Fatal retail misconception! When correlated assets fail to confirm each other, the non-confirming asset (NQ) reveals underlying institutional strength and accumulation. You NEVER short the stronger asset.'
          },
          {
            id: 'opt-smt-long-bias',
            label: 'Smart Money is aggressively accumulating NQ; prepare for Bullish expansion',
            description: 'Look for upside displacement and trade the stronger asset long.',
            isCorrect: true,
            feedback:
              'Master-level insight! ICT SMT Divergence signals that large algorithmic institutions are absorbing all sell liquidity on NQ. We align with the stronger asset to ride the upside.'
          }
        ]
      },
      {
        id: 'dp-smt-2',
        triggerIndex: 13,
        phaseTitle: 'Phase 2: Inversion FVG Retest Execution',
        conceptBadge: 'INVERSION FVG ENTRY',
        prompt:
          'NQ blew through the prior 17,960 - 17,975 bearish FVG with high-volume displacement. As price retraces back down into 17,970, this prior resistance zone has inverted into support (Inversion FVG). Set your long order.',
        requiresOrderPlacement: true,
        orderCriteria: {
          direction: 'buy',
          recommendedEntry: 17972.0,
          recommendedStopLoss: 17935.0,
          recommendedTakeProfit: 18060.0,
          entryTolerance: 5.0,
          minRR: 2.3,
          explanation:
            'Enter long inside the Inversion FVG at 17,972.00. Stop loss sits safely below the SMT higher low at 17,935.00 (37 handles). Target the morning BSL pool at 18,060.00 (+88 handles profit, 1:2.38 R:R).'
        },
        options: [
          {
            id: 'opt-exec-inversion',
            label: 'Buy Long at Inversion FVG retest (17,970 - 17,975)',
            description: 'Stop at 17,935, Target BSL at 18,060.',
            isCorrect: true,
            feedback:
              'Flawless execution! Inversion FVGs are among the most powerful ICT continuation tools because failed resistance becomes algorithmic launchpads.'
          },
          {
            id: 'opt-short-resistance',
            label: 'Sell short because it was a resistance gap earlier',
            description: 'Expect the gap to hold as resistance again.',
            isCorrect: false,
            feedback:
              'Major error. Once a gap is sliced through with body displacement, it inverts its polarity. Fighting an Inversion FVG results in severe drawdowns.'
          }
        ]
      }
    ],
    postMortem: {
      setupSummary:
        'SMT Divergence provided the ultimate early warning system: ES printed lower lows while NQ held higher lows. The subsequent displacement inverted the prior bearish gap, allowing a pristine 17,972 long entry delivering 88 handles of upside to the session Buy-Side Liquidity pool.',
      ruleChecklist: [
        {
          rule: 'Intermarket Divergence Identification',
          explanation: 'ES made Lower Low (5,082.0) while NQ made Higher Low (17,939.0).',
          passed: true
        },
        {
          rule: 'Asset Strength Selection',
          explanation: 'Longed NQ (the strong asset) rather than shorting the weak asset (ES).',
          passed: true
        },
        {
          rule: 'Inversion FVG Validation',
          explanation: 'Displacement closed above 17,975, flipping the FVG into dynamic support.',
          passed: true
        },
        {
          rule: 'Risk-to-Reward Ratio',
          explanation: '37 points risk targeting 88 points reward produced 1:2.38 R:R.',
          passed: true
        }
      ],
      ictTakeaway:
        'When ES and NQ disagree, trust the non-confirmation. The asset refusing to make a new low is where smart money is loading the boat.'
    }
  },

  // --------------------------------------------------------------------------
  // SCENARIO 4: The Unicorn Setup (GBP/USD, 5m)
  // --------------------------------------------------------------------------
  {
    id: 'unicorn-setup-gbpusd',
    title: 'The ICT Unicorn Setup',
    subtitle: 'High-probability confluence: Stop Hunt + Breaker Block + Overlapping Fair Value Gap',
    category: 'The Unicorn',
    difficulty: 'Master',
    asset: 'GBP/USD',
    timeframe: '5m',
    session: 'London / NY Overlap Killzone',
    killZoneWindow: '07:00 - 10:00 NY Time',
    description:
      'The Unicorn Model is considered one of Michael Huddleston’s highest probability setups. It merges two institutional footprints into one exact price point: A Breaker Block (the last up-close candle before a liquidity sweep that failed to hold) overlapping seamlessly with a displacement Fair Value Gap. When price pulls back into this dual confluence, rejection is violent and swift.',
    keyRules: [
      'Step 1: A key liquidity pool (Previous High / BSL) is swept by a stop run.',
      'Step 2: Price reverses violently with displacement, breaking below the swing low that created the high.',
      'Step 3: The last up-close candle prior to the sweep becomes the Bearish Breaker Block.',
      'Step 4: A displacement Fair Value Gap forms DIRECTLY overlapping the Breaker Block.',
      'Step 5: Enter at the Unicorn zone (Breaker + FVG overlap) with stops above the sweep high.'
    ],
    candles: [
      // Pre-Sweep Swing Setup (Candles 0-7: 07:00 - 07:35)
      { time: '07:00', open: 1.27300, high: 1.27360, low: 1.27280, close: 1.27340, volume: 2200 },
      { time: '07:05', open: 1.27340, high: 1.27410, low: 1.27320, close: 1.27400, volume: 2400 },
      { time: '07:10', open: 1.27400, high: 1.27450, low: 1.27380, close: 1.27430, volume: 2600 }, // Swing High 1 (1.27450)
      { time: '07:15', open: 1.27430, high: 1.27440, low: 1.27290, close: 1.27305, volume: 2800 }, // Pullback Low (1.27290)
      { time: '07:20', open: 1.27305, high: 1.27380, low: 1.27300, close: 1.27370, volume: 3100 }, // Up-candle before sweep (BREAKER CANDLE)
      { time: '07:25', open: 1.27370, high: 1.27440, low: 1.27360, close: 1.27420, volume: 3400 }, // Up-candle 2 of breaker (1.27360 - 1.27420)
      { time: '07:30', open: 1.27420, high: 1.27540, low: 1.27410, close: 1.27520, volume: 5600 }, // SWEEP HIGH (1.27540 sweeps 1.27450 BSL!)
      { time: '07:35', open: 1.27520, high: 1.27535, low: 1.27430, close: 1.27440, volume: 4900 }, // Exhaustion wick

      // Violent Displacement Downward & Breaker Activation (Candles 8-11: 07:40 - 07:55)
      { time: '07:40', open: 1.27440, high: 1.27450, low: 1.27340, close: 1.27350, volume: 5800 }, // Candle 1 of FVG
      { time: '07:45', open: 1.27350, high: 1.27360, low: 1.27210, close: 1.27220, volume: 8400 }, // Displacement crushes through 1.27290 swing low!
      { time: '07:50', open: 1.27220, high: 1.27230, low: 1.27110, close: 1.27125, volume: 7300 }, // Candle 3 creates FVG (1.27230 to 1.27340)
      { time: '07:55', open: 1.27125, high: 1.27150, low: 1.27080, close: 1.27100, volume: 5900 },

      // Retracement into the Unicorn Zone (Breaker + FVG Overlap) (Candles 12-16: 08:00 - 08:20)
      { time: '08:00', open: 1.27100, high: 1.27190, low: 1.27090, close: 1.27180, volume: 3800 },
      { time: '08:05', open: 1.27180, high: 1.27280, low: 1.27170, close: 1.27270, volume: 4200 },
      { time: '08:10', open: 1.27270, high: 1.27370, low: 1.27260, close: 1.27350, volume: 5100 }, // Retests the UNICORN CONFLUENCE (1.27350 - 1.27380)
      { time: '08:15', open: 1.27350, high: 1.27385, low: 1.27310, close: 1.27320, volume: 5400 }, // Rejection wick!
      { time: '08:20', open: 1.27320, high: 1.27330, low: 1.27240, close: 1.27250, volume: 5700 }, // Sellers take full command

      // Expansion to Target Sell-Side Liquidity (Candles 17-25: 08:25 - 09:05)
      { time: '08:25', open: 1.27250, high: 1.27260, low: 1.27160, close: 1.27170, volume: 6100 },
      { time: '08:30', open: 1.27170, high: 1.27180, low: 1.27060, close: 1.27070, volume: 6800 },
      { time: '08:35', open: 1.27070, high: 1.27080, low: 1.26990, close: 1.27000, volume: 7200 },
      { time: '08:40', open: 1.27000, high: 1.27020, low: 1.26940, close: 1.26950, volume: 8900 }, // Reaches Sell-Side Liquidity Target!
      { time: '08:45', open: 1.26950, high: 1.26960, low: 1.26910, close: 1.26920, volume: 6900 },
      { time: '08:50', open: 1.26920, high: 1.26970, low: 1.26900, close: 1.26940, volume: 5100 },
      { time: '08:55', open: 1.26940, high: 1.26990, low: 1.26930, close: 1.26980, volume: 4200 },
      { time: '09:00', open: 1.26980, high: 1.27010, low: 1.26950, close: 1.26960, volume: 3800 },
    ],
    overlays: {
      fvgs: [
        {
          id: 'unicorn-fvg',
          type: 'bearish-fvg',
          startPrice: 1.27230,
          endPrice: 1.27340,
          startIndex: 9,
          endIndex: 16,
          label: 'Displacement FVG (1.27230 - 1.27340)',
          cePrice: 1.27285,
          status: 'mitigated'
        }
      ],
      orderBlocks: [
        {
          id: 'unicorn-breaker-block',
          type: 'breaker-block',
          candleIndex: 5,
          topPrice: 1.27420,
          bottomPrice: 1.27305,
          label: 'Bearish Breaker Block (1.27305 - 1.27420)',
          endIndex: 17
        }
      ],
      benchmarks: [
        {
          id: 'sweep-high',
          label: 'Buy-Side Liquidity Swept (1.27540)',
          price: 1.27540,
          color: '#f59e0b',
          lineStyle: 'dashed'
        },
        {
          id: 'ssl-target',
          label: 'Sell-Side Liquidity Target (1.26950)',
          price: 1.26950,
          color: '#10b981',
          lineStyle: 'dashed'
        }
      ],
      ote: {
        anchorHigh: 1.27540,
        anchorLow: 1.27080,
        direction: 'bearish',
        levels: [
          { ratio: 0.50, label: '0.50 Equilibrium', price: 1.27310 },
          { ratio: 0.62, label: '0.62 OTE Discount', price: 1.27365 },
          { ratio: 0.705, label: '0.705 Institutional Sweet Spot', price: 1.27404, isSweetSpot: true },
          { ratio: 0.79, label: '0.79 Deep Retracement', price: 1.27443 }
        ]
      }
    },
    decisionPoints: [
      {
        id: 'dp-uni-1',
        triggerIndex: 10,
        phaseTitle: 'Phase 1: Breaker Block Formation',
        conceptBadge: 'BREAKER BLOCK VALIDATION',
        prompt:
          'Price swept the 1.27450 high up to 1.27540, and then violently collapsed through the previous swing low at 1.27290. What happened to the up-close candles (1.27305 - 1.27420) that led into the sweep?',
        options: [
          {
            id: 'opt-uni-breaker',
            label: 'They converted into a high-probability Bearish Breaker Block',
            description: 'Failed support becomes institutional resistance after MSS.',
            isCorrect: true,
            feedback:
              'Bullseye! When a swing low is violated following a stop-hunt sweep, the bullish up-candles that formed the failed higher high invert into a Bearish Breaker Block.'
          },
          {
            id: 'opt-uni-ob',
            label: 'They are still bullish order blocks where we should buy',
            description: 'Expect buyers to defend that level.',
            isCorrect: false,
            feedback:
              'Completely incorrect. Those buyers were liquidated and trapped when the 1.27290 swing low broke. They will now panic sell at breakeven.'
          }
        ]
      },
      {
        id: 'dp-uni-2',
        triggerIndex: 14,
        phaseTitle: 'Phase 2: The Unicorn Confluence Entry',
        conceptBadge: 'THE UNICORN EXECUTION',
        prompt:
          'Notice the confluence: The Bearish Breaker Block (1.27305 - 1.27420) directly overlaps the displacement Fair Value Gap (1.27230 - 1.27340). Price is currently retracing to 1.27360. Execute the Unicorn short trade.',
        requiresOrderPlacement: true,
        orderCriteria: {
          direction: 'sell',
          recommendedEntry: 1.27360,
          recommendedStopLoss: 1.27490,
          recommendedTakeProfit: 1.26950,
          entryTolerance: 0.00030,
          minRR: 2.8,
          explanation:
            'Enter short at the Unicorn confluence around 1.27360. Stop loss placed above the breaker high / sweet spot at 1.27490 (13 pips). Take profit at Sell-Side Liquidity at 1.26950 (41 pips, 1:3.15 R:R).'
        },
        options: [
          {
            id: 'opt-uni-short',
            label: 'Enter Short at Breaker + FVG Overlap (1.27360)',
            description: 'SL: 1.27490, TP: 1.26950 (1:3.15 R:R).',
            isCorrect: true,
            feedback:
              'Exceptional! You have identified the Unicorn setup. Two distinct institutional PD Arrays occupying the exact same price zone create immense rejection probability.'
          },
          {
            id: 'opt-uni-wait-sweep',
            label: 'Wait for price to test 1.27540 again',
            description: 'Refuse entry until double-top test.',
            isCorrect: false,
            feedback:
              'A genuine Unicorn setup will not revisit the stop-hunt high. Demanding a full retest leaves you watching the trade leave without you.'
          }
        ]
      }
    ],
    postMortem: {
      setupSummary:
        'The ICT Unicorn model demonstrated why it is heralded as the highest probability setup in smart money trading: The liquidity purge above 1.27450 established the trap; violent displacement below 1.27290 activated the Breaker Block; and the overlapping FVG created an inescapable magnetic barrier rejecting price down 41 pips directly to target.',
      ruleChecklist: [
        {
          rule: 'Liquidity Sweep (Stop Hunt)',
          explanation: 'Buy-side liquidity swept to 1.27540 before reversal.',
          passed: true
        },
        {
          rule: 'Breaker Block Conversion',
          explanation: 'Last up-candles (1.27305 - 1.27420) inverted upon swing low break.',
          passed: true
        },
        {
          rule: 'Displacement FVG Overlap',
          explanation: '5m Bearish FVG overlapped the lower half of the Breaker Block.',
          passed: true
        },
        {
          rule: 'Optimal Entry Fill',
          explanation: 'Retest touched 1.27385 before collapsing.',
          passed: true
        },
        {
          rule: 'Target Delivery',
          explanation: 'SSL at 1.26950 cleanly reached for 41 pips at 1:3.15 R:R.',
          passed: true
        }
      ],
      ictTakeaway:
        'When Breaker Block and Fair Value Gap coincide, you have the Unicorn. Treat it as high conviction, size properly, and manage risk objectively.'
    }
  }
];
