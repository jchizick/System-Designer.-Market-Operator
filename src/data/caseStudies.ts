export interface BuildBlock {
  label: string;
  title: string;
  description: string;
  tags?: string[];
}

export interface ResultStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  type: string;
  title: string;
  state: string;
  visualType: string;
  outcome: string;
  // Case study detail fields
  subtitle: string;
  heroDescription: string;
  problem: string;
  insight: string;
  buildDescription: string;
  build: BuildBlock[];
  outcomes: string[];
  resultStats: ResultStat[];
  videoCaption?: string;
  hasVideo?: boolean;
  takeaway: string;
  year: string;
  duration: string;
  role: string;
  // Media placeholders (paths will be added later when images are ready)
  heroImage?: string;
  buildDiagramImage?: string;
  videoClip?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "BRAWL_01",
    slug: "brawl-indicator",
    type: "VOLATILITY ENGINE",
    title: "Brawl Indicator",
    outcome: "Structured decision model for high-volatility environments.",
    visualType: "bars",
    state: "ACTIVE",
    subtitle: "Volatility Scoring Engine",
    heroDescription: "A real-time volatility classification system that scores market conditions on a proprietary scale, enabling operators to calibrate position sizing and execution strategy to the current regime.",
    year: "2024",
    duration: "8 WEEKS",
    role: "SYSTEM ARCHITECT",
    problem: "Traditional volatility indicators like VIX and ATR are lagging by design — they measure what already happened. In fast-moving crypto and derivatives markets, by the time a volatility spike registers on conventional metrics, the opportunity window has already closed or the risk has already materialized. Operators need a forward-looking volatility score that adapts in sub-second intervals.",
    insight: "Volatility isn't a single number — it's a composite state. By decomposing market microstructure into three layers (order flow imbalance, spread dynamics, and tick velocity), we can construct a real-time \"brawl score\" that predicts regime transitions 200-400ms before they appear in price. The key was treating volatility as a classification problem, not a regression problem.",
    buildDescription: "A three-layer signal processing system trained on real-time market microstructure data.",
    hasVideo: true,
    videoCaption: "Watch the brawl score classify a flash crash in real-time — from CALM to CHAOS in under 400ms.",
    build: [
      {
        label: "SYSTEM",
        title: "Microstructure Decomposition Engine",
        description: "Three-layer signal processing pipeline that ingests raw L2 order book data, computes flow toxicity metrics (VPIN), spread z-scores, and tick-by-tick velocity vectors. Each layer produces an independent regime classification that feeds into a weighted ensemble scorer.",
        tags: ["Python", "NumPy", "WebSocket", "Redis"]
      },
      {
        label: "DESIGN",
        title: "Operator Dashboard Interface",
        description: "Minimal HUD overlay designed for split-second decision making. The brawl score renders as a single pulsing bar with color-coded regime zones (CALM → TENSION → BRAWL → CHAOS). Secondary panels expose the three decomposed layers for operators who want to understand why the score is where it is.",
        tags: ["React", "Canvas API", "WebGL"]
      },
      {
        label: "TOOLS",
        title: "Backtesting & Calibration Suite",
        description: "Historical replay engine that processes 18 months of tick data across 12 venues to calibrate regime thresholds. Includes a Monte Carlo simulator for stress-testing score stability during black swan events and flash crashes.",
        tags: ["Rust", "ClickHouse", "Grafana"]
      }
    ],
    outcomes: [
      "Regime detection accuracy: 94.2% on out-of-sample data",
      "Average detection lead time: 340ms before price impact",
      "Position sizing efficiency improved by 28% during high-vol regimes",
      "Deployed across 3 trading desks with zero false-positive halts in 6 months",
      "Processing latency: sub-5ms end-to-end on commodity hardware"
    ],
    resultStats: [
      { value: "94.2%", label: "Regime detection accuracy on out-of-sample data" },
      { value: "340ms", label: "Average detection lead time before price impact" },
      { value: "28%", label: "Position sizing efficiency improvement" },
      { value: "<5ms", label: "End-to-end processing latency" }
    ],
    takeaway: "The best volatility systems don't predict the future — they classify the present faster than anyone else can react. Speed of classification beats accuracy of prediction every time in live markets."
  },
  {
    id: "LIQ_MAP",
    slug: "liquidity-mapper",
    type: "HEATMAP OVERLAY",
    title: "Liquidity Mapper",
    outcome: "Identified hidden support zones across fragmented order books.",
    visualType: "grid",
    state: "STABLE",
    subtitle: "Order Book Topology Visualizer",
    heroDescription: "A real-time heatmap system that aggregates liquidity across fragmented venues, revealing hidden support and resistance zones invisible to single-exchange analysis.",
    year: "2024",
    duration: "12 WEEKS",
    role: "LEAD ENGINEER",
    problem: "Modern markets are fragmented across dozens of venues. A trader looking at a single exchange's order book sees maybe 15-20% of actual available liquidity. Critical support and resistance levels — the zones where large orders cluster — are invisible when viewed through a single lens. This fragmentation creates a systematic blind spot that leads to poor execution and unexpected slippage.",
    insight: "Liquidity isn't randomly distributed — it follows gravitational patterns. Institutional orders cluster at psychologically significant levels, options strike prices, and historical volume nodes. By aggregating order book snapshots across 8+ venues and applying density estimation algorithms, we can reconstruct the true liquidity topology of any asset in real-time.",
    buildDescription: "A multi-venue aggregation system that reconstructs true market topology in real-time.",
    hasVideo: false,
    videoCaption: "Thermal heatmap rendering across 8 venues during a high-volatility session.",
    build: [
      {
        label: "SYSTEM",
        title: "Multi-Venue Aggregation Pipeline",
        description: "Concurrent WebSocket connections to 8 major exchanges with unified order book reconstruction. Custom conflict resolution for crossed markets and stale quote detection. Normalized depth representation regardless of venue-specific formatting.",
        tags: ["Go", "WebSocket", "Protocol Buffers", "NATS"]
      },
      {
        label: "DESIGN",
        title: "Thermal Density Visualization",
        description: "GPU-accelerated heatmap rendering that maps aggregated liquidity density to a thermal color gradient. Time-decayed historical overlay shows how liquidity zones shift over 1h, 4h, and 24h windows. Interactive zoom from macro (full book depth) to micro (individual price level) views.",
        tags: ["WebGL", "Three.js", "D3.js"]
      },
      {
        label: "TOOLS",
        title: "Alert & Anomaly Detection",
        description: "Statistical engine that detects unusual liquidity formations: iceberg order detection, spoofing pattern recognition, and sudden liquidity withdrawal alerts. Notifications delivered via WebSocket push to operator terminals.",
        tags: ["Python", "scikit-learn", "PostgreSQL"]
      }
    ],
    outcomes: [
      "Aggregates liquidity across 8 venues in under 10ms refresh cycles",
      "Identified 73% of significant support/resistance levels before price tested them",
      "Reduced average execution slippage by 18% on routed orders",
      "Detected 12 spoofing events in first month of production deployment",
      "Adopted by 2 proprietary trading firms for pre-trade analysis"
    ],
    resultStats: [
      { value: "<10ms", label: "Refresh cycle across 8 venues" },
      { value: "73%", label: "Support/resistance levels identified pre-test" },
      { value: "18%", label: "Average execution slippage reduction" },
      { value: "12", label: "Spoofing events detected in first month" }
    ],
    takeaway: "The map is not the territory, but a better map changes how you navigate. Seeing aggregated liquidity doesn't guarantee better trades — but it eliminates the worst ones."
  },
  {
    id: "SN_DASH",
    slug: "signal-nexus",
    type: "OPERATOR TERMINAL",
    title: "Signal Nexus",
    outcome: "Unified 14 disparate data feeds into a single execution context.",
    visualType: "wave",
    state: "ACTIVE",
    subtitle: "Unified Intelligence Terminal",
    heroDescription: "A command-center dashboard that consolidates 14 disparate market data feeds, social signals, and on-chain metrics into a single coherent execution context for market operators.",
    year: "2023",
    duration: "16 WEEKS",
    role: "SYSTEM DESIGNER",
    problem: "Professional traders and analysts operate across an absurd number of tools — exchange terminals, charting platforms, news feeds, social sentiment trackers, on-chain analytics, economic calendars. Context-switching between 8-12 browser tabs and 3-4 applications creates cognitive overhead that directly costs money. The information exists, but it's scattered across incompatible interfaces with no unified view.",
    insight: "The problem isn't information scarcity — it's information fragmentation. A trader doesn't need more data; they need the right data, in the right context, at the right moment. By building a priority-weighted attention system that surfaces only the most actionable signals and suppresses noise, we can reduce cognitive load by 60% while improving decision quality.",
    buildDescription: "A priority-weighted intelligence layer that unifies 14 feeds into a single execution context.",
    hasVideo: true,
    videoCaption: "Signal Nexus in FOCUS mode — watch 14 feeds collapse into a single actionable view.",
    build: [
      {
        label: "SYSTEM",
        title: "Feed Normalization & Priority Engine",
        description: "Ingestion layer that normalizes 14 data sources into a unified event schema. Each event is scored by a priority engine that considers recency, relevance to active positions, historical impact correlation, and cross-signal confirmation. Low-priority events are suppressed; high-priority events trigger visual and audio alerts.",
        tags: ["Node.js", "Kafka", "Redis Streams", "TypeScript"]
      },
      {
        label: "DESIGN",
        title: "Adaptive Command Interface",
        description: "Terminal-inspired interface with configurable panel layout. Three operator modes: SCAN (broad market overview), FOCUS (single-asset deep dive), and EXECUTE (order entry with pre-populated context). The UI adapts information density based on current volatility regime — showing more detail when markets are calm, stripping to essentials during high-stress periods.",
        tags: ["React", "Zustand", "Framer Motion", "Canvas"]
      },
      {
        label: "TOOLS",
        title: "Plugin Architecture & SDK",
        description: "Extensible plugin system allowing operators to write custom signal processors in TypeScript. SDK includes pre-built connectors for major exchanges, sentiment APIs, and on-chain data providers. Hot-reloadable plugins with sandboxed execution for security.",
        tags: ["TypeScript SDK", "WASM Sandbox", "REST/WS API"]
      }
    ],
    outcomes: [
      "Consolidated 14 data feeds into a single sub-200ms latency view",
      "Average operator context-switching reduced by 62%",
      "Decision-to-execution time decreased from 4.2s to 1.8s average",
      "Plugin ecosystem grew to 23 community-contributed signal processors",
      "Active daily users across 2 proprietary desks and 15 independent operators"
    ],
    resultStats: [
      { value: "14", label: "Data feeds consolidated into one view" },
      { value: "62%", label: "Reduction in operator context-switching" },
      { value: "1.8s", label: "Average decision-to-execution time" },
      { value: "23", label: "Community-contributed plugins" }
    ],
    takeaway: "Unification is not aggregation. Throwing everything on one screen creates a different kind of noise. The real design challenge is deciding what not to show — and when."
  },
  {
    id: "VRTX_99",
    slug: "vertex-router",
    type: "EXECUTION ALGO",
    title: "Vertex Router",
    outcome: "Reduced slippage by 12% during peak market stress events.",
    visualType: "nodes",
    state: "STABLE",
    subtitle: "Adaptive Execution Algorithm",
    heroDescription: "An intelligent order routing system that dynamically splits and sequences trades across venues and time to minimize market impact and execution cost during high-stress market conditions.",
    year: "2024",
    duration: "10 WEEKS",
    role: "ALGO ENGINEER",
    problem: "Large orders move markets. A naive market order on a single venue creates predictable price impact that erodes returns. Existing smart order routers optimize for fill rate and speed but largely ignore the temporal dimension — they don't model how their own execution affects subsequent fill quality. During market stress events, this blind spot amplifies, turning a 2% slippage into 5-8%.",
    insight: "Execution is a game against yourself. Every partial fill changes the state of the market for your remaining order. The key insight was modeling execution as a sequential decision process where each fill updates the expected cost of the remaining quantity. By combining venue-specific microstructure models with a lightweight reinforcement learning agent, the router learns to adapt its splitting strategy in real-time based on observed fill quality.",
    buildDescription: "An adaptive order routing engine that learns from its own execution in real-time.",
    hasVideo: true,
    videoCaption: "Vertex Router splitting a $2M order across 6 venues during a volatility spike.",
    build: [
      {
        label: "SYSTEM",
        title: "Multi-Venue Order Management System",
        description: "FIX protocol connectivity to 6 venues with sub-millisecond order routing. Parent-child order hierarchy with real-time fill tracking, partial fill reconciliation, and automatic residual handling. Risk limits enforced at every layer with hard circuit breakers.",
        tags: ["C++", "FIX 4.4", "ZeroMQ", "RocksDB"]
      },
      {
        label: "DESIGN",
        title: "Execution Analytics Console",
        description: "Post-trade analysis dashboard showing fill distribution across venues and time, realized vs. expected slippage decomposition, and market impact visualization. Real-time monitoring view during active execution shows order progress, venue allocation, and cost accumulation.",
        tags: ["React", "Recharts", "WebSocket"]
      },
      {
        label: "TOOLS",
        title: "Strategy Backtester & Simulator",
        description: "Historical order replay engine with realistic fill simulation including queue position modeling, partial fill probability, and market impact feedback. Supports strategy parameter optimization via grid search and Bayesian optimization.",
        tags: ["Python", "Ray", "DuckDB", "Optuna"]
      }
    ],
    outcomes: [
      "Average slippage reduction: 12.4% across all market conditions",
      "Peak stress slippage reduction: 23% vs. baseline TWAP",
      "Fill rate maintained at 99.7% despite aggressive impact minimization",
      "Processed $2.4B in notional volume during first quarter of production",
      "Zero risk limit breaches across 180 days of continuous operation"
    ],
    resultStats: [
      { value: "12.4%", label: "Average slippage reduction across all conditions" },
      { value: "$2.4B", label: "Notional volume processed in Q1" },
      { value: "99.7%", label: "Fill rate maintained under stress" },
      { value: "0", label: "Risk limit breaches in 180 days" }
    ],
    takeaway: "The best execution algorithm is one that treats every fill as new information. Static strategies break under stress — adaptive ones thrive on it."
  },
  {
    id: "OBS_NET",
    slug: "obsidian-network",
    type: "MONITORING SYSTEM",
    title: "Obsidian Network",
    outcome: "Real-time anomaly detection with sub-millisecond latency.",
    visualType: "radar",
    state: "TESTING",
    subtitle: "Infrastructure Anomaly Detection Grid",
    heroDescription: "A distributed monitoring mesh that detects infrastructure anomalies, performance degradation, and systemic risks across trading systems with sub-millisecond precision.",
    year: "2025",
    duration: "14 WEEKS",
    role: "INFRASTRUCTURE LEAD",
    problem: "Trading infrastructure failures don't announce themselves — they cascade. A memory leak in one service becomes a latency spike in another, which triggers a timeout in a third, which causes a missed fill that costs real money. Traditional monitoring tools (Datadog, Grafana) operate on 10-60 second polling intervals — an eternity in systems where microseconds matter. By the time an alert fires, the damage is done.",
    insight: "Monitoring at the speed of trading requires rethinking what \"monitoring\" means. Instead of polling metrics at intervals, we instrument every system boundary with inline telemetry that emits structured events on every state change. The anomaly detection model runs at the edge — on the same machines as the trading systems — eliminating network roundtrip latency entirely. The model doesn't look for threshold breaches; it learns normal behavioral patterns and flags deviations.",
    buildDescription: "Edge-deployed anomaly detection that operates at the speed of the systems it monitors.",
    hasVideo: false,
    videoCaption: "Cascade failure propagation visualized in real-time across the network topology.",
    build: [
      {
        label: "SYSTEM",
        title: "Edge-Deployed Anomaly Detection",
        description: "Lightweight anomaly detection agents deployed as sidecar processes alongside every critical trading service. Each agent maintains a local model of normal behavior (latency distributions, throughput patterns, error rates) and emits anomaly scores in real-time. Central coordinator aggregates edge signals to detect correlated failures across services.",
        tags: ["Rust", "eBPF", "DPDK", "gRPC"]
      },
      {
        label: "DESIGN",
        title: "Network Topology Visualization",
        description: "Real-time 3D network graph showing all monitored services as nodes with health-colored edges representing inter-service communication. Anomaly propagation is visualized as a spreading wavefront across the topology, making cascade failures immediately visible. Drill-down views expose individual service telemetry with microsecond-precision timelines.",
        tags: ["Three.js", "WebGL", "React", "D3-force"]
      },
      {
        label: "TOOLS",
        title: "Chaos Engineering & Replay",
        description: "Controlled fault injection framework for testing anomaly detection sensitivity. Includes network partition simulation, latency injection, memory pressure testing, and CPU throttling. Full telemetry replay capability for post-incident forensic analysis with frame-by-frame timeline scrubbing.",
        tags: ["Go", "Toxiproxy", "InfluxDB", "Temporal"]
      }
    ],
    outcomes: [
      "Anomaly detection latency: 0.3ms median (99th percentile: 0.8ms)",
      "Detected 94% of cascade-risk anomalies before user-visible impact",
      "Reduced mean time to detection (MTTD) from 45 seconds to 0.5ms",
      "Agent CPU overhead: < 0.1% of host resources",
      "Currently monitoring 47 services across 3 data centers in testing"
    ],
    resultStats: [
      { value: "0.3ms", label: "Median anomaly detection latency" },
      { value: "94%", label: "Cascade-risk anomalies caught pre-impact" },
      { value: "90,000x", label: "Faster than traditional MTTD" },
      { value: "47", label: "Services monitored across 3 data centers" }
    ],
    takeaway: "You can't monitor a microsecond system with a millisecond tool. The monitoring layer must operate at least one order of magnitude faster than the system it watches."
  },
  {
    id: "PRISM_X",
    slug: "prism-analytics",
    type: "DATA REFRACTION",
    title: "Prism Analytics",
    outcome: "Separated institutional flow from retail noise automatically.",
    visualType: "scatter",
    state: "ARCHIVED",
    subtitle: "Flow Classification Intelligence",
    heroDescription: "A machine learning pipeline that classifies order flow into institutional and retail categories in real-time, enabling operators to align their execution with smart money movement.",
    year: "2023",
    duration: "20 WEEKS",
    role: "ML ENGINEER",
    problem: "Not all order flow is created equal. Institutional orders — from hedge funds, prop desks, and market makers — carry predictive information about future price direction. Retail orders are largely noise. But on modern exchanges, the two are interleaved and indistinguishable at the surface level. Existing flow analysis tools rely on crude heuristics (order size, time-of-day) that produce high false-positive rates and miss sophisticated institutional execution strategies like iceberg orders and algorithmic slicing.",
    insight: "Institutional flow has a fingerprint — not in any single order, but in the statistical signature of order sequences. Institutions can disguise individual orders, but they can't disguise the temporal autocorrelation, venue selection patterns, and order-to-trade ratios that emerge over sequences of 50-200 events. By training a transformer model on labeled flow sequences from venues with known institutional participation, we can classify flow with high confidence in real-time.",
    buildDescription: "A transformer-based ML pipeline that classifies order flow by institutional signature.",
    hasVideo: false,
    videoCaption: "Flow decomposition dashboard separating institutional signal from retail noise.",
    build: [
      {
        label: "SYSTEM",
        title: "Real-Time Flow Classification Pipeline",
        description: "Streaming ML inference pipeline that processes raw order flow events, constructs rolling sequence windows, and runs classification through an optimized transformer model. Features include order size normalization, venue-adjusted timing, and inter-order interval analysis. Model outputs flow class probabilities with confidence scores at sub-100ms latency.",
        tags: ["Python", "PyTorch", "ONNX Runtime", "Kafka"]
      },
      {
        label: "DESIGN",
        title: "Flow Decomposition Dashboard",
        description: "Split-view interface showing raw order flow on the left and classified/decomposed flow on the right. Institutional flow is highlighted with intensity proportional to confidence score. Time-series view shows institutional flow accumulation over configurable windows. Integrated with execution tools to enable flow-aligned order placement.",
        tags: ["React", "Visx", "WebSocket", "TanStack"]
      },
      {
        label: "TOOLS",
        title: "Model Training & Evaluation Pipeline",
        description: "End-to-end MLOps pipeline for model retraining on new labeled data. Includes automated feature engineering, hyperparameter optimization, A/B testing framework for model versions, and drift detection to trigger retraining when market microstructure changes.",
        tags: ["MLflow", "Weights & Biases", "Airflow", "DVC"]
      }
    ],
    outcomes: [
      "Flow classification accuracy: 87.3% on out-of-sample data",
      "Institutional flow detection preceded 68% of significant price moves by 2-8 minutes",
      "False positive rate: 4.2% (vs. 18% for heuristic-based approaches)",
      "Model retraining cadence: weekly with automatic drift detection",
      "Archived after core IP was integrated into Signal Nexus terminal"
    ],
    resultStats: [
      { value: "87.3%", label: "Flow classification accuracy" },
      { value: "68%", label: "Price moves preceded by flow detection" },
      { value: "4.2%", label: "False positive rate" },
      { value: "4.3x", label: "Better than heuristic approaches" }
    ],
    takeaway: "The signal was always there — buried in the sequence, not the individual event. Pattern recognition at scale reveals what no single observation can."
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getAdjacentCases(slug: string): { prev: CaseStudy | null; next: CaseStudy | null } {
  const idx = caseStudies.findIndex(cs => cs.slug === slug);
  return {
    prev: idx > 0 ? caseStudies[idx - 1] : null,
    next: idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null
  };
}
