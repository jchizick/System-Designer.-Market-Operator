import React from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  Activity,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CalendarCheck2,
  CalendarDays,
  CheckCircle2,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Database,
  Download,
  Gauge,
  Headset,
  Lightbulb,
  ListChecks,
  Menu,
  Radio,
  RefreshCw,
  Route,
  Settings,
  Star,
  Target,
  TrendingUp,
  User,
  Zap,
} from 'lucide-react';
import { Footer } from './Footer';
import { CaseBriefDock } from './CaseBriefDock';
import { MarketOverviewCandlesOnlySvg, MarketOverviewSnapshotSvg } from './MarketCommandOverviewArtifact';
import { TopBar } from './TopBar';
import fearGreedArtifact from '../assets/fear-greed-artifact.svg';
import marketCommandArchitecture from '../assets/market-command-architecture-operator-flows.png';
import marketCommandBriefCover from '../assets/market-command-brief-cover.png';

const marketCommandBrief = {
  pdfUrl: 'https://ybnjfz0v2gs31z0q.public.blob.vercel-storage.com/market-command-case-brief.pdf',
  shareUrl: '/market-command-v2',
};

const readinessCards = [
  ['Data Feeds', '100%', 12],
  ['API Routes', '100%', 12],
  ['Snapshot Engine', '100%', 12],
  ['UI Modules', '100%', 12],
];

const projectDetails = [
  ['Role', 'Product Designer System Architect'],
  ['Duration', '1 week'],
  ['Team', 'Solo'],
  ['Deliverable', 'Private Dashboard'],
];

const problemImpacts = [
  'Fragmented context across multiple platforms',
  'Slow decision cycles and missed opportunities',
  'Inconsistent review and weak feedback loops',
  'Poor visibility across market conditions',
];

const insightPrinciples = [
  ['Context First', 'Unify what matters before you act.', Target],
  ['Signal Over Noise', 'Highlight the few that drive outcome.', Activity],
  ['Structured Routines', 'Repeatable reviews build consistency.', CalendarCheck2],
  ['Decision Support', 'Inform the operator, not autopilot.', Headset],
];

const architectureSteps = [
  ['Capture', 'Ingest data & events', Database],
  ['Normalize', 'Clean, align & enrich', RefreshCw],
  ['Synthesize', 'Derive context & signals', Radio],
  ['Review', 'Snapshot & performance', ClipboardList],
  ['Execute', 'Plan, trade & monitor', Target],
];

const coreCapabilities = [
  ['Market Overview', 'Price action, indices, volatility'],
  ['Gamma Context', 'Dealer flows, exposure & flip levels'],
  ['Fear & Greed', 'Sentiment and crowd psychology'],
  ['Trading Context', 'Macro events, calendar, news flow'],
  ['Performance Review', 'PnL, trends, metrics & analytics'],
  ['Daily Snapshot', 'Checklist, notes & readiness'],
];

const stackItems = ['Next.js', 'TypeScript', 'Supabase', 'Yahoo Finance', 'Local Storage', 'API Routes'];

const systemSourceCards = [
  ['Market Data', 'Price, vol, options'],
  ['Economic Data', 'Calendar, macro'],
  ['Sentiment Data', 'Fear & Greed, news'],
  ['User Inputs', 'Notes, checklist'],
];

const systemModuleIcons = [BarChart3, Gauge, ListChecks, CalendarCheck2, TrendingUp, CheckCircle2];

const motionPipeline = [
  ['01', 'Pre-Market Scan', 'Check overnight moves & key levels.'],
  ['02', 'Read Macro / Events', 'Review calendar & news catalysts.'],
  ['03', 'Assess Gamma & Sentiment', 'Gauge positioning & market tone.'],
  ['04', 'Capture Synthesis Notes', 'Record bias, levels & scenarios.'],
  ['05', 'Review Checklist', 'Validate plan & risk parameters.'],
  ['06', 'Execute / Monitor', 'Track trades & update notes.'],
];

const resultCards = [
  ['-58%', 'Context switching', 'Time lost to tool hopping', 'lineDown'],
  ['+2.9x', 'Review consistency', 'More complete daily reviews', 'lineUp'],
  ['+41%', 'Faster daily prep', 'Time saved each morning', 'bars'],
  ['1', 'Unified workspace', 'All critical context in one system', 'grid'],
  ['6', 'Core modules', 'Integrated into operational flow', 'hexes'],
  ['4.7/5', 'Clarity rating', 'Operator feedback score', 'stars'],
];

const learningNotes = [
  'Trading tools are most useful when they reduce context switching.',
  'Performance review belongs next to market context, not in a separate ritual.',
  'A dashboard should protect the operator from impulse, not just display data.',
  'Live data needs calm hierarchy or it becomes another source of noise.',
];

const impactMetrics = [
  ['Less Friction', 'Fewer tools open', Zap],
  ['Cleaner Context', 'Better decisions', Settings],
  ['Repeatable Process', 'Daily command loop', Route],
];

const operatorNotes = [
  ['Would I build it again?', 'Yes.'],
  ["What I'd do differently", 'Define data contracts earlier.'],
  ['Biggest risk', 'Too much information without hierarchy.'],
  ['Next iteration', 'More automation around morning briefs.'],
];

function CornerSquares() {
  return (
    <div className="pointer-events-none absolute right-3 top-3 flex gap-1" aria-hidden="true">
      {Array.from({ length: 4 }, (_, index) => (
        <span
          key={index}
          className="h-1.5 w-1.5 bg-emerald-400 opacity-20 shadow-[0_0_6px_rgba(52,211,153,0.35)]"
        />
      ))}
    </div>
  );
}

function CaseStudySubnav() {
  return (
    <div className="mx-auto mb-0 flex w-full max-w-[1180px] items-center justify-between gap-4 pb-3 text-mono-xs uppercase text-white/45">
      <Link to="/" className="flex min-w-0 items-center gap-2 transition-colors hover:text-emerald-400">
        <ArrowLeft className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
        <span className="truncate">Back To Case Files</span>
      </Link>

      <div className="flex shrink-0 items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-emerald-400">Case Study</span>
          <span>01 / 05</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/blockchain-brawlers-v2"
            className="flex h-7 w-7 items-center justify-center border border-border-subtle text-white/45 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
            aria-label="Previous case study"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
          <Link
            to="/ai-brand-machine-synthetic-foundry-v2"
            className="flex h-7 w-7 items-center justify-center border border-border-subtle text-white/45 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
            aria-label="Next case study"
          >
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ReadinessBar({ filledSegments }: { filledSegments: number }) {
  return (
    <div className="flex items-center gap-[2px]" aria-hidden="true">
      {Array.from({ length: 12 }, (_, index) => (
        <span
          key={index}
          className={`h-2.5 w-[3px] border border-emerald-500/10 ${
            index < filledSegments
              ? 'bg-emerald-400/80 shadow-[0_0_5px_rgba(52,211,153,0.18)]'
              : 'bg-emerald-950/45'
          }`}
        />
      ))}
    </div>
  );
}

function MarketSparkline({
  variant = 'candles',
  className = '',
}: {
  variant?: 'candles' | 'line';
  className?: string;
}) {
  const candles = [
    [24, 62, 40, 54],
    [43, 48, 32, 36],
    [62, 68, 45, 58],
    [81, 74, 52, 68],
    [100, 60, 38, 44],
    [119, 70, 46, 63],
    [138, 58, 40, 52],
    [157, 46, 30, 35],
    [176, 42, 20, 31],
    [195, 38, 22, 28],
    [214, 30, 16, 24],
    [233, 34, 20, 29],
    [252, 28, 14, 18],
    [271, 36, 22, 31],
    [290, 42, 26, 34],
    [309, 52, 35, 47],
  ];

  if (variant === 'line') {
    const points = '0,82 24,76 48,74 72,68 96,72 120,62 144,64 168,54 192,50 216,42 240,36 264,30 288,22 312,18';

    return (
      <svg className={`h-full w-full overflow-visible ${className}`} viewBox="0 0 312 100" preserveAspectRatio="none" aria-hidden="true">
        <path d={`M ${points.replaceAll(' ', ' L ')} L 312 100 L 0 100 Z`} fill="rgba(16,185,129,0.1)" />
        <polyline points={points} fill="none" stroke="rgba(52,211,153,0.86)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        {points.split(' ').map((point) => {
          const [x, y] = point.split(',');
          return <circle key={point} cx={x} cy={y} r="2" fill="rgba(52,211,153,0.9)" />;
        })}
      </svg>
    );
  }

  return (
    <svg className={`h-full w-full ${className}`} viewBox="0 0 330 118" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 18H330M0 48H330M0 78H330M0 108H330" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <polyline
        points="12,70 32,54 52,66 72,58 92,78 112,64 132,70 152,54 172,42 192,46 212,36 232,40 252,28 272,31 292,44 312,39"
        fill="none"
        stroke="rgba(52,211,153,0.28)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      {candles.map(([x, high, low, close], index) => {
        const open = index % 3 === 0 ? close + 13 : close - 10;
        const top = Math.min(open, close);
        const height = Math.max(5, Math.abs(close - open));
        const isUp = close < open;

        return (
          <g key={x}>
            <line x1={x} x2={x} y1={low} y2={high} stroke={isUp ? 'rgba(52,211,153,0.78)' : 'rgba(248,113,113,0.72)'} strokeWidth="1.5" />
            <rect x={x - 3.5} y={top} width="7" height={height} fill={isUp ? 'rgba(52,211,153,0.82)' : 'rgba(248,113,113,0.75)'} />
          </g>
        );
      })}
    </svg>
  );
}

function FearGreedGauge() {
  return (
    <div className="flex min-h-[112px] flex-col items-center justify-center pt-2">
      <img
        src={fearGreedArtifact}
        alt=""
        className="h-[58px] w-[116px] object-contain"
        aria-hidden="true"
      />
      <div className="-mt-6 text-center font-mono text-[24px] font-semibold uppercase leading-none text-white/76 tabular-nums">
        32
      </div>
      <div className="mt-0 text-center font-mono text-[10px] uppercase leading-none text-white/45">
        Fear
      </div>
    </div>
  );
}

function MarketInfoPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="min-w-0 border border-emerald-500/18 bg-black/22 p-2.5">
      <div className="mb-1.5 text-mono-2xs uppercase text-emerald-400">{title}</div>
      {children}
    </section>
  );
}

function TripControlCenter() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden border border-emerald-500/22 bg-bg-surface/70 shadow-[0_0_28px_rgba(16,185,129,0.04),inset_0_0_22px_rgba(16,185,129,0.03)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(16,185,129,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.16)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative">
        <header className="flex min-w-0 items-center justify-between gap-3 border-b border-emerald-500/15 bg-white/[0.018] px-3 py-2 sm:px-4">
          <div className="flex min-w-0 items-center gap-2 text-mono-xs uppercase text-white/62">
            <Menu size={14} strokeWidth={1.5} className="shrink-0 text-white/45" />
            <span className="min-w-0 truncate">MARKET_COMMAND // CONTROL CENTER</span>
          </div>
          <span className="flex shrink-0 items-center gap-2 text-mono-3xs uppercase text-emerald-400">
            Link: Secure
            <span className="h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.45)]" />
          </span>
        </header>

        <div className="p-2.5 sm:p-3">
          <div className="grid min-w-0 grid-cols-1 gap-2 lg:grid-cols-[1.18fr_1fr_1fr]">
            <MarketInfoPanel title="Market Overview // SPX">
              <div className="mb-1.5 flex items-start justify-between gap-3">
                <div>
                  <div className="font-mono text-[18px] leading-none text-white/76 tabular-nums">7,531.54 <span className="text-[12px] text-emerald-400">+0.78%</span></div>
                </div>
              </div>
              <div className="relative overflow-hidden border border-emerald-500/10 bg-black/24 p-0.5">
                <MarketOverviewSnapshotSvg
                  className="h-[75px] w-full"
                  style={{ height: '75px', width: '100%' }}
                />
              </div>
              <div className="mt-1.5 grid grid-cols-6 border border-emerald-500/12 text-center text-mono-3xs uppercase text-white/45">
                {['1D', '5D', '1M', '3M', 'YTD', '1Y'].map((item) => (
                  <span key={item} className="border-r border-emerald-500/10 px-2 py-1 last:border-r-0">{item}</span>
                ))}
              </div>
            </MarketInfoPanel>

            <MarketInfoPanel title="Gamma Context">
              <div className="border border-emerald-500/12 bg-black/24">
                {[
                  ['Positive Gamma', '$2.31B', 'text-emerald-400'],
                  ['Negative Gamma', '-$1.02B', 'text-red-400'],
                  ['Gamma Flip Level', '7,260', 'text-white/72'],
                ].map(([label, value, color], index) => (
                  <div key={label} className={`flex items-center justify-between gap-4 px-3 py-1.5 text-mono-3xs uppercase ${index > 0 ? 'border-t border-emerald-500/12' : ''}`}>
                    <span className="text-white/45">{label}</span>
                    <span className={`font-mono text-[15px] normal-case tabular-nums ${color}`}>{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-1 text-center text-mono-3xs uppercase text-white/40">Next update: 30m</div>
            </MarketInfoPanel>

            <MarketInfoPanel title="Fear & Greed Index">
              <FearGreedGauge />
              <div className="-mt-2 text-center text-mono-3xs uppercase text-white/40">Prev Close: 29</div>
            </MarketInfoPanel>

            <MarketInfoPanel title="Performance Review">
              <div className="mb-2 text-mono-3xs uppercase text-white/48">YTD P/L</div>
              <div className="font-mono text-[18px] leading-none text-emerald-400 tabular-nums">+18.27%</div>
              <div className="mt-2 h-[68px] border border-emerald-500/10 bg-black/24 p-2">
                <MarketSparkline variant="line" />
              </div>
              <div className="mt-1 flex justify-between text-mono-3xs uppercase text-white/42">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
              </div>
            </MarketInfoPanel>

            <MarketInfoPanel title="Trading Context">
              <div className="border border-emerald-500/12 bg-black/24 p-2.5">
                <div className="mb-2 text-mono-3xs uppercase text-white/48">Economic Calendar</div>
                {[
                  ['08:30', 'CPI MoM', 'High', 'text-red-400'],
                  ['10:00', 'FOMC Member Speak', 'Med', 'text-yellow-400'],
                  ['14:00', 'JOLTS Job Openings', 'Med', 'text-yellow-400'],
                ].map(([time, label, risk, color]) => (
                  <div key={`${time}-${label}`} className="grid grid-cols-[42px_minmax(0,1fr)_36px] gap-2 py-1 text-mono-3xs uppercase">
                    <span className="text-white/48">{time}</span>
                    <span className="truncate text-white/62">{label}</span>
                    <span className={`text-right ${color}`}>{risk}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-mono-3xs uppercase text-white/42">All times UTC</div>
            </MarketInfoPanel>

            <MarketInfoPanel title="System Health">
              <div className="mt-3 space-y-1.5">
                {readinessCards.map(([label, value, filledSegments]) => (
                  <div key={label} className="grid min-w-0 grid-cols-[minmax(72px,1fr)_48px_36px] items-center gap-2">
                    <span className="min-w-0 text-mono-3xs uppercase text-white/50">{label}</span>
                    <ReadinessBar filledSegments={Number(filledSegments)} />
                    <span className="text-right text-mono-3xs uppercase text-emerald-400">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2 text-mono-3xs uppercase text-emerald-400">
                Status: Operational
                <span className="h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.45)]" />
              </div>
            </MarketInfoPanel>
          </div>

          <div className="mt-2 grid grid-cols-1 border border-emerald-500/12 text-mono-3xs uppercase text-white/45 sm:grid-cols-3">
            <span className="border-b border-emerald-500/12 px-3 py-1.5 sm:border-b-0 sm:border-r">Last Updated: 17:25:12Z</span>
            <span className="border-b border-emerald-500/12 px-3 py-1.5 sm:border-b-0 sm:border-r">Snapshot Captured: 17:25:10Z</span>
            <span className="flex items-center justify-end gap-2 px-3 py-1.5 text-emerald-400">
              Status: Live
              <span className="h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.45)]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroPanel() {
  return (
    <section className="relative mb-5 grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1fr]">
      <div className="min-w-0">
        <div className="mb-4 inline-flex w-fit max-w-full border border-emerald-500/26 bg-emerald-500/5 px-3 py-1 text-mono-xs uppercase text-white/55">
          <span className="text-emerald-400">MKT_CMD</span>
          <span className="px-2 text-emerald-500/70">//</span>
          <span>Trading Intelligence System</span>
        </div>

        <div className="mb-3">
          <h1 className="font-space-grotesk text-[42px] font-medium uppercase leading-[0.98] tracking-[0] text-text-primary sm:text-[58px] lg:text-[58px]">
            Market<br />Command
          </h1>
          <h2 className="mt-3 text-mono-base uppercase text-emerald-400">
            Private Trading Dashboard
          </h2>
        </div>

        <p className="max-w-[420px] text-mono-base font-mono leading-relaxed text-white/62">
          A private command center that synthesizes market context, performance, macro events, sentiment, and execution readiness in one place.
        </p>

        <div className="mt-8 grid min-w-0 grid-cols-2 border-y border-dashed border-border-subtle py-2 text-mono-xs uppercase sm:grid-cols-4">
          {projectDetails.map(([label, value], index) => (
            <div
              key={label}
              className={`min-w-0 px-2 first:pl-0 ${index > 0 ? 'border-l border-border-subtle' : ''}`}
            >
              <div className="mb-1 text-white/40">{label}</div>
              <div className="max-w-[11rem] normal-case leading-snug text-white/70">{value}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button className="inline-flex max-w-full items-center gap-3 border border-emerald-700 bg-bg-surface px-4 py-2 text-mono-xs uppercase tracking-widest text-emerald-500 transition-colors hover:bg-emerald-500/10">
            <span>View System In Action</span>
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </button>
          <a
            href={marketCommandBrief.pdfUrl}
            download
            className="inline-flex max-w-full items-center gap-3 border border-border-subtle bg-transparent px-4 py-2 text-mono-xs uppercase tracking-widest text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
          >
            <span>Download Case Brief</span>
            <Download className="h-4 w-4" strokeWidth={1.6} />
          </a>
        </div>
      </div>

      <div className="flex min-w-0 items-center">
        <TripControlCenter />
      </div>
    </section>
  );
}

function StudySectionHeader({
  icon: Icon,
  number,
  title,
  children,
}: {
  icon: React.ElementType;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-w-0 items-start gap-4">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-emerald-500/28 bg-black/30 text-emerald-400">
        <Icon className="h-4 w-4" strokeWidth={1.7} />
      </div>
      <div className="min-w-0">
        <div className="mb-3 flex items-center gap-2 text-mono-label uppercase">
          <span className="text-emerald-400">{number}</span>
          <span className="text-emerald-400">//</span>
          <span className="text-emerald-400">{title}</span>
        </div>
        <div className={`text-body-sm font-mono text-white/58 ${number === '02' ? 'max-w-[60ch]' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

function ProblemInsightSection() {
  return (
    <section className="relative mb-5 border border-border-subtle bg-black/18 p-4 sm:p-5">
      <CornerSquares />
      <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-0">
        <div className="min-w-0 lg:border-r lg:border-dashed lg:border-emerald-500/20 lg:pr-8">
          <StudySectionHeader icon={AlertTriangle} number="02" title="The Problem">
            <p className="text-mono-label leading-relaxed text-white/72">
              Traders juggle fragmented tools, scattered notes, sentiment sources, macro calendars, performance records, and charting platforms. Critical signals get lost in the noise.
            </p>

            <div className="mt-6 text-mono-2xs uppercase text-emerald-400">Impact</div>
            <ul className="mt-3 space-y-0.5">
              {problemImpacts.map((impact) => (
                <li key={impact} className="flex gap-1.5 leading-snug">
                  <span className="text-emerald-500/70">•</span>
                  <span className="text-mono-label leading-relaxed text-white/72">{impact}</span>
                </li>
              ))}
            </ul>
          </StudySectionHeader>
        </div>

        <div className="min-w-0 lg:pl-8">
          <StudySectionHeader icon={Lightbulb} number="02" title="The Insight">
            <p className="text-mono-label leading-relaxed text-white/72">
              A single synthesis layer can reduce mental overhead by translating multiple signals into a durable operating system for decision-making.
            </p>
          </StudySectionHeader>

          <div className="mt-7 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {insightPrinciples.map(([title, copy, Icon], index) => (
              <div
                key={title as string}
                className={`min-w-0 text-center ${index > 0 ? 'lg:border-l lg:border-dashed lg:border-emerald-500/20' : ''} lg:px-4`}
              >
                <div className="mb-4 flex justify-center text-emerald-400">
                  {React.createElement(Icon as React.ElementType, { className: 'h-6 w-6', strokeWidth: 1.6 })}
                </div>
                <div className="mb-2 text-mono-xs uppercase text-emerald-500">{title as string}</div>
                <p className="text-mono-label leading-relaxed text-white/72">{copy as string}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VerticalConnector({ className = '' }: { className?: string }) {
  return (
    <div
      className={`mx-auto h-3 w-px bg-emerald-500/45 after:block after:h-1.5 after:w-1.5 after:translate-x-[-2.5px] after:translate-y-[9px] after:rotate-45 after:border-b after:border-r after:border-emerald-400/55 ${className}`}
      aria-hidden="true"
    />
  );
}

function SystemOverviewDiagram() {
  return (
    <div className="border border-emerald-500/18 bg-black/20 px-3 py-2.5">
      <div className="border border-emerald-500/24 bg-black/22 px-3 py-2 shadow-[inset_0_0_18px_rgba(16,185,129,0.03)]">
        <div className="mb-2 text-center text-mono-2xs uppercase text-emerald-400">External Data Sources</div>
        <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {systemSourceCards.map(([title, copy]) => (
            <div key={title} className="min-w-0 border border-emerald-500/24 bg-black/28 px-2 py-1.5 text-center">
              <div className="text-mono-2xs uppercase text-emerald-400">{title}</div>
              <div className="text-mono-3xs leading-relaxed text-white/58">{copy}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto hidden h-4 w-[78%] sm:block" aria-hidden="true">
        <div className="absolute left-0 right-0 top-0 h-px bg-emerald-500/24" />
        <div className="absolute left-0 right-0 top-0 grid grid-cols-4">
          {systemSourceCards.map(([title]) => (
            <span key={title} className="mx-auto h-4 w-px bg-emerald-500/38" />
          ))}
        </div>
        <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-emerald-500/45 after:absolute after:bottom-[-1px] after:left-1/2 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:rotate-45 after:border-b after:border-r after:border-emerald-400/60" />
      </div>
      <VerticalConnector className="sm:hidden" />

      <div className="mx-auto max-w-[72%] border border-emerald-500/30 bg-black/28 px-3 py-2 text-center shadow-[inset_0_0_18px_rgba(16,185,129,0.03)] max-sm:max-w-full">
        <div className="text-mono-2xs uppercase text-emerald-400">API Layer</div>
        <div className="text-mono-3xs leading-relaxed text-white/58">Next.js API routes</div>
      </div>

      <VerticalConnector />

      <div className="mx-auto max-w-[72%] border border-emerald-500/30 bg-black/28 px-3 py-2 text-center shadow-[inset_0_0_18px_rgba(16,185,129,0.03)] max-sm:max-w-full">
        <div className="text-mono-2xs uppercase text-emerald-400">Snapshot Engine</div>
        <div className="text-mono-3xs leading-relaxed text-white/58">Normalize → Synthesize → Score</div>
      </div>

      <VerticalConnector />

      <div className="mx-auto max-w-[90%] border border-emerald-500/34 bg-black/30 px-3 py-2.5 text-center shadow-[inset_0_0_20px_rgba(16,185,129,0.04)] max-sm:max-w-full">
        <div className="text-mono-2xs uppercase text-emerald-400">UI Modules</div>
        <div className="text-mono-3xs leading-relaxed text-white/58">Dashboard components</div>
        <div className="mt-2 grid grid-cols-6 gap-2 text-emerald-400">
          {systemModuleIcons.map((Icon, index) => (
            <div key={index} className="flex justify-center">
              <Icon className="h-6 w-6" strokeWidth={1.45} />
            </div>
          ))}
        </div>
      </div>

      <VerticalConnector />

      <div className="mx-auto max-w-[64%] border border-emerald-500/30 bg-black/28 px-3 py-2 shadow-[inset_0_0_18px_rgba(16,185,129,0.03)] max-sm:max-w-full">
        <div className="flex min-w-0 items-center justify-center gap-3 text-left">
          <User className="h-8 w-8 shrink-0 text-emerald-400" strokeWidth={1.5} />
          <div className="min-w-0">
            <div className="text-mono-2xs uppercase text-emerald-400">Operator Decisions</div>
            <div className="text-mono-3xs leading-relaxed text-white/58">Review → Plan → Execute</div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex justify-end pr-1 pb-0.5">
        <button className="border border-emerald-500/20 bg-black/24 px-2.5 py-1.5 text-mono-3xs text-white/42 transition-colors hover:border-emerald-400/38 hover:text-white/58">
          <span>SYSTEM ARTIFACT</span>
          <span className="px-1.5 text-white/30">·</span>
          <span className="uppercase text-emerald-400/72">View map →</span>
        </button>
      </div>
    </div>
  );
}

function BuildSection() {
  return (
    <section id="case-brief" className="relative mb-5 grid min-w-0 scroll-mt-24 grid-cols-1 gap-3 lg:grid-cols-[0.95fr_1fr]">
      <div className="relative min-w-0 border border-border-subtle bg-black/18 p-4 sm:p-5">
        <CornerSquares />
        <div className="mb-4 flex items-center gap-2 text-mono-label uppercase text-emerald-400">
          <span>03</span>
          <span>//</span>
          <span>The Build</span>
        </div>

        <div className="space-y-3">
          <section className="border border-emerald-500/18 bg-black/20 p-3">
            <div className="mb-2 text-mono-2xs uppercase text-emerald-400">System Architecture</div>
            <div className="grid min-w-0 grid-cols-1 items-stretch gap-0 sm:grid-cols-[1fr_1.25rem_1fr_1.25rem_1fr_1.25rem_1fr_1.25rem_1fr]">
              {architectureSteps.map(([label, copy, Icon], index) => (
                <React.Fragment key={label as string}>
                  <div className="flex h-full min-h-[64px] min-w-0 flex-col justify-center border border-emerald-500/24 bg-black/25 px-2 py-2 text-center">
                    {React.createElement(Icon as React.ElementType, {
                      className: 'mx-auto mb-1.5 h-4 w-4 text-emerald-400',
                      strokeWidth: 1.6,
                    })}
                    <div className="mb-1 text-mono-xs uppercase text-emerald-400">{label as string}</div>
                    <div className="text-mono-2xs text-white/58">{copy as string}</div>
                  </div>
                  {index < architectureSteps.length - 1 ? (
                    <div className="hidden items-center justify-center text-mono-xs text-emerald-500/60 sm:flex">&gt;</div>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </section>

          <section className="border border-emerald-500/18 bg-black/20 p-3">
            <div className="mb-2 text-mono-2xs uppercase text-emerald-400">Core Modules</div>
            <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-6">
              {coreCapabilities.map(([title, copy]) => (
                <div key={title as string} className="min-w-0 border border-emerald-500/14 bg-black/22 p-2">
                  <div className="mb-2 text-mono-2xs uppercase text-white/72">{title as string}</div>
                  <p className="text-mono-3xs text-white/55">{copy as string}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border border-emerald-500/18 bg-black/20 p-3">
            <div className="mb-2 text-mono-2xs uppercase text-emerald-400">Tech Stack</div>
            <div className="grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
              {stackItems.map((item) => (
                <span
                  key={item}
                  className="min-w-0 border border-emerald-500/20 bg-black/24 px-2 py-2 text-center text-mono-3xs uppercase text-white/62"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>

      <aside className="relative min-w-0 border border-border-subtle bg-black/18 p-4 sm:p-5">
        <CornerSquares />
        <div className="mb-4 text-mono-label uppercase text-emerald-400">System Overview</div>
        <SystemOverviewDiagram />
      </aside>
    </section>
  );
}

const liveTelemetrySnapshots = [
  {
    spxPrice: '5,231.54',
    spxChange: '+0.78%',
    signal: 'Signal updated 14s ago',
    watchlist: [
      ['ES', '5,235.25', '+0.71%', 'text-emerald-400'],
      ['NQ', '18,412.75', '+1.12%', 'text-emerald-400'],
      ['QQQ', '452.33', '+0.05%', 'text-emerald-400'],
      ['VIX', '13.64', '-1.23%', 'text-red-400'],
    ],
    performance: {
      ytd: '+18.27%',
      winRate: '62%',
      profitFactor: '1.54',
    },
  },
  {
    spxPrice: '5,232.18',
    spxChange: '+0.79%',
    signal: 'Signal updated 09s ago',
    watchlist: [
      ['ES', '5,235.75', '+0.72%', 'text-emerald-400'],
      ['NQ', '18,412.75', '+1.12%', 'text-emerald-400'],
      ['QQQ', '452.41', '+0.07%', 'text-emerald-400'],
      ['VIX', '13.64', '-1.23%', 'text-red-400'],
    ],
    performance: {
      ytd: '+18.27%',
      winRate: '62%',
      profitFactor: '1.55',
    },
  },
  {
    spxPrice: '5,231.86',
    spxChange: '+0.78%',
    signal: 'Last checked 04s ago',
    watchlist: [
      ['ES', '5,235.75', '+0.72%', 'text-emerald-400'],
      ['NQ', '18,415.25', '+1.14%', 'text-emerald-400'],
      ['QQQ', '452.41', '+0.07%', 'text-emerald-400'],
      ['VIX', '13.59', '-1.60%', 'text-red-400'],
    ],
    performance: {
      ytd: '+18.31%',
      winRate: '63%',
      profitFactor: '1.55',
    },
  },
  {
    spxPrice: '5,232.44',
    spxChange: '+0.80%',
    signal: 'Signal updated 02s ago',
    watchlist: [
      ['ES', '5,236.00', '+0.73%', 'text-emerald-400'],
      ['NQ', '18,415.25', '+1.14%', 'text-emerald-400'],
      ['QQQ', '452.36', '+0.06%', 'text-emerald-400'],
      ['VIX', '13.59', '-1.60%', 'text-red-400'],
    ],
    performance: {
      ytd: '+18.31%',
      winRate: '63%',
      profitFactor: '1.56',
    },
  },
] as const;

const livePreviewCalendar = [
  ['08:30', 'CPI MoM', 'High', 'text-red-400'],
  ['10:00', 'FOMC Member Speak', 'Med', 'text-yellow-400'],
  ['14:00', 'JOLTS Job Openings', 'Med', 'text-yellow-400'],
  ['16:00', 'Fed Balance Sheet', 'Low', 'text-emerald-400'],
];

function LivePreviewPanel({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <article className={`min-h-[306px] min-w-[188px] border border-emerald-500/22 bg-black/28 ${className}`}>
      <div className="border-b border-emerald-500/18 px-3 py-2 text-mono-2xs uppercase text-emerald-400">
        {title}
      </div>
      <div className="p-3">{children}</div>
    </article>
  );
}

function PreviewMiniChart() {
  return (
    <div className="relative h-[96px] overflow-hidden bg-black/18">
      <MarketOverviewCandlesOnlySvg
        className="h-full w-full"
        preserveAspectRatio="none"
        style={{ height: '96px', width: '100%' }}
      />
    </div>
  );
}

function GammaBars() {
  const positiveBars = [18, 28, 14, 36, 12, 20, 8, 16, 46, 24, 30, 12, 38, 18, 14, 22, 34, 52, 27, 44];
  const negativeBars = [22, 31, 18, 12, 26, 14, 18, 12, 10, 16, 22, 28, 35, 42, 54, 26, 48, 34, 62, 44];

  return (
    <div className="space-y-2">
      <div className="flex items-end gap-1 border-b border-emerald-500/12 pb-0">
        {positiveBars.map((height, index) => (
          <span
            key={index}
            className="w-1.5 bg-emerald-400/72 shadow-[0_0_7px_rgba(52,211,153,0.14)]"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
      <div className="flex items-start gap-1 pt-1">
        {negativeBars.map((height, index) => (
          <span
            key={index}
            className="w-1.5 bg-red-400/70 shadow-[0_0_7px_rgba(248,113,113,0.12)]"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
    </div>
  );
}

function EquityCurvePreview() {
  const points = '0,76 16,66 32,62 48,56 64,60 80,52 96,49 112,40 128,42 144,31 160,26 176,18';

  return (
    <svg className="h-[96px] w-full overflow-visible" viewBox="0 0 176 96" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 20H176M0 48H176M0 76H176" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <path d={`M ${points.replaceAll(' ', ' L ')} L176 96 L0 96 Z`} fill="rgba(16,185,129,0.12)" />
      <polyline points={points} fill="none" stroke="rgba(52,211,153,0.88)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      {['+20%', '0%', '-20%'].map((label, index) => (
        <text key={label} x="150" y={20 + index * 28} className="fill-white/50 text-[9px] font-mono">
          {label}
        </text>
      ))}
    </svg>
  );
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return prefersReducedMotion;
}

function LiveSystemPreview() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [telemetryIndex, setTelemetryIndex] = React.useState(0);
  const [isTelemetryFresh, setIsTelemetryFresh] = React.useState(false);
  const telemetry = liveTelemetrySnapshots[telemetryIndex];
  const previousTelemetry = liveTelemetrySnapshots[
    (telemetryIndex - 1 + liveTelemetrySnapshots.length) % liveTelemetrySnapshots.length
  ];
  const telemetryTransition = prefersReducedMotion
    ? ''
    : 'transition-[opacity,text-shadow,color] duration-500 ease-out';
  const freshTelemetryClass = !prefersReducedMotion && isTelemetryFresh
    ? 'opacity-100 [text-shadow:0_0_9px_rgba(52,211,153,0.32)]'
    : 'opacity-90 [text-shadow:0_0_0_rgba(52,211,153,0)]';
  const telemetryClass = (hasChanged: boolean) => (
    `${telemetryTransition} ${hasChanged ? freshTelemetryClass : 'opacity-90 [text-shadow:0_0_0_rgba(52,211,153,0)]'}`
  );

  React.useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setTelemetryIndex((currentIndex) => (currentIndex + 1) % liveTelemetrySnapshots.length);
      setIsTelemetryFresh(true);
      window.setTimeout(() => setIsTelemetryFresh(false), 900);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="relative min-h-[334px] flex-1 overflow-hidden border border-emerald-500/14 bg-black/30">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(16,185,129,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.16)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_34px_rgba(16,185,129,0.06)]" />

      <div className="relative overflow-x-auto p-2.5" tabIndex={0} aria-label="Live system preview panels">
        <div className="grid min-w-[940px] grid-cols-[1.03fr_1fr_1.02fr_1fr_0.95fr] gap-2">
          <LivePreviewPanel title="Market Overview">
            <div className="mb-3">
              <div className="mb-2 flex items-baseline gap-2 font-mono tabular-nums">
                <span className="text-mono-3xs uppercase text-white/48">SPX</span>
                <span className={`inline-block min-w-[4.85rem] text-[18px] leading-none text-emerald-400 ${telemetryClass(telemetry.spxPrice !== previousTelemetry.spxPrice)}`}>
                  {telemetry.spxPrice}
                </span>
                <span className={`inline-block min-w-[2.7rem] text-mono-3xs text-emerald-400 ${telemetryClass(telemetry.spxChange !== previousTelemetry.spxChange)}`}>
                  {telemetry.spxChange}
                </span>
              </div>
              <PreviewMiniChart />
              <div className={`mt-1.5 text-mono-3xs uppercase text-white/38 ${telemetryTransition} ${isTelemetryFresh && !prefersReducedMotion ? 'text-emerald-400/65' : ''}`}>
                {telemetry.signal}
              </div>
              <div className="mt-2 grid grid-cols-5 border border-emerald-500/12 text-center text-mono-3xs uppercase text-white/45">
                {['1D', '5D', '1M', '3M', '1Y'].map((range) => (
                  <span key={range} className="border-r border-emerald-500/10 px-2 py-1 last:border-r-0 first:bg-emerald-400/10 first:text-emerald-400">
                    {range}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-emerald-500/14 pt-2">
              <div className="mb-2 text-mono-2xs uppercase text-emerald-400">Watchlist</div>
              <div className="space-y-1.5">
                {telemetry.watchlist.map(([ticker, value, change, color], index) => {
                  const previousRow = previousTelemetry.watchlist[index];

                  return (
                  <div key={ticker} className="grid grid-cols-[2.5rem_1fr_3.6rem] gap-2 text-mono-3xs uppercase tabular-nums">
                    <span className="text-white/58">{ticker}</span>
                    <span className={`text-right text-emerald-400/90 ${telemetryClass(value !== previousRow[1])}`}>{value}</span>
                    <span className={`text-right ${color} ${telemetryClass(change !== previousRow[2])}`}>{change}</span>
                  </div>
                  );
                })}
              </div>
            </div>
          </LivePreviewPanel>

          <LivePreviewPanel title="Gamma Context">
            <div className="mb-3 flex items-center justify-between gap-3 text-mono-3xs uppercase">
              <span className="text-white/52">Positive Gamma</span>
              <span className="font-mono text-[14px] text-emerald-400 tabular-nums">$2.31B</span>
            </div>
            <GammaBars />
            <div className="mt-3 flex items-center justify-between gap-3 text-mono-3xs uppercase">
              <span className="text-white/52">Negative Gamma</span>
              <span className="font-mono text-[14px] text-red-400 tabular-nums">-$1.02B</span>
            </div>
            <div className="mt-4 border-t border-emerald-500/14 pt-4">
              <div className="flex items-center justify-between gap-3 text-mono-3xs uppercase">
                <span className="text-white/52">Flip Level</span>
                <span className="font-mono text-[18px] leading-none text-white/78 tabular-nums">5,160</span>
              </div>
            </div>
          </LivePreviewPanel>

          <LivePreviewPanel title="Performance Review">
            <div className="mb-1 flex items-center justify-between gap-3 text-mono-3xs uppercase">
              <span className="text-white/52">YTD P&L</span>
              <span className={`inline-block min-w-[4rem] text-right font-mono text-[18px] text-emerald-400 tabular-nums ${telemetryClass(telemetry.performance.ytd !== previousTelemetry.performance.ytd)}`}>
                {telemetry.performance.ytd}
              </span>
            </div>
            <div className="mt-3">
              <div className="mb-2 text-mono-3xs uppercase text-white/48">Equity Curve</div>
              <EquityCurvePreview />
              <div className="mt-1 flex justify-between text-mono-3xs uppercase text-white/42">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 border border-emerald-500/12 text-mono-3xs uppercase">
              {[
                ['Win Rate', telemetry.performance.winRate, 'text-emerald-400'],
                ['Profit Factor', telemetry.performance.profitFactor, 'text-emerald-400'],
                ['Max DD', '-6.8%', 'text-red-400'],
                ['Trades', '146', 'text-emerald-400'],
              ].map(([label, value, color], index) => (
                <div key={label} className={`p-2 ${index % 2 === 1 ? 'border-l border-emerald-500/12' : ''} ${index > 1 ? 'border-t border-emerald-500/12' : ''}`}>
                  <div className="text-white/44">{label}</div>
                  <div className={`mt-1 font-mono text-[13px] tabular-nums ${color} ${index === 0 ? telemetryClass(telemetry.performance.winRate !== previousTelemetry.performance.winRate) : ''} ${index === 1 ? telemetryClass(telemetry.performance.profitFactor !== previousTelemetry.performance.profitFactor) : ''}`}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </LivePreviewPanel>

          <LivePreviewPanel title="Trading Context">
            <div className="mb-2 border border-emerald-500/12 bg-black/24 p-2">
              <div className="mb-2 text-mono-3xs uppercase text-white/48">Economic Calendar</div>
              <div className="space-y-1">
                {livePreviewCalendar.map(([time, label, risk, color]) => (
                  <div key={`${time}-${label}`} className="grid grid-cols-[2.4rem_minmax(0,1fr)_2rem] gap-2 text-mono-3xs uppercase">
                    <span className="text-white/48">{time}</span>
                    <span className="truncate text-white/62">{label}</span>
                    <span className={`text-right ${color}`}>{risk}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-2 text-mono-2xs uppercase text-emerald-400">Latest News</div>
              <ul className="space-y-2 text-mono-3xs leading-relaxed text-white/58">
                <li>* Stocks open higher on CPI data</li>
                <li>* Treasury yields pull back</li>
                <li>* Dollar index slips</li>
              </ul>
            </div>
          </LivePreviewPanel>

          <LivePreviewPanel title="Synthesis Notes">
            <div className="space-y-4 text-mono-3xs uppercase leading-relaxed">
              <div>
                <div className="mb-1 text-emerald-400">Today's Bias</div>
                <p className="text-white/60">Bullish above 5,200<br />Neutral below 5,160</p>
              </div>
              <div>
                <div className="mb-1 text-emerald-400">Key Levels</div>
                <p className="font-mono text-white/62 tabular-nums">5,260&nbsp;&nbsp;5,200&nbsp;&nbsp;5,160&nbsp;&nbsp;5,080</p>
              </div>
              <div>
                <div className="mb-1 text-emerald-400">Plan</div>
                <p className="text-white/60">Look for continuation above 5,200. Risk off below 5,160.</p>
              </div>
              <div>
                <div className="mb-1 text-emerald-400">Risk</div>
                <p className="text-white/60">1R per trade + max 3R/day</p>
              </div>
            </div>
          </LivePreviewPanel>
        </div>
      </div>
    </div>
  );
}

function SystemInMotionSection() {
  return (
    <section className="relative mb-5 border border-border-subtle bg-black/18 p-4 sm:p-5">
      <CornerSquares />
      <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[0.50fr_1.4fr]">
        <aside className="min-w-0">
          <div className="mb-4 flex items-center gap-2 text-mono-label uppercase text-emerald-400">
            <span>04</span>
            <span>//</span>
            <span>System In Motion</span>
          </div>

          <div className="border border-emerald-500/18 bg-black/20 p-4">
            <div className="mb-4 text-mono-2xs uppercase text-emerald-400">Pipeline</div>
            <div className="space-y-0">
              {motionPipeline.map(([number, label, copy], index) => (
                <div key={label} className="relative grid min-w-0 grid-cols-[2.2rem_minmax(0,1fr)] gap-3 pb-3 last:pb-0">
                  {index < motionPipeline.length - 1 ? (
                    <div className="absolute bottom-0 left-[0.95rem] top-7 w-px bg-emerald-500/28" />
                  ) : null}
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center text-emerald-400">
                    <svg className="h-8 w-8" viewBox="0 0 32 32" aria-hidden="true">
                      <circle cx="16" cy="16" r="15.5" className="fill-black/45 stroke-emerald-500/45" />
                      <text
                        x="16"
                        y="17"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        className="fill-emerald-400 text-mono-3xs"
                      >
                        {number}
                      </text>
                    </svg>
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <div className="text-mono-xs uppercase text-emerald-400">{label}</div>
                    <p className="text-body-xs font-mono text-white/56">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="flex min-w-0 flex-col">
          <div className="mb-3 text-mono-label uppercase text-emerald-400">Live System Preview</div>
          <LiveSystemPreview />
        </section>
      </div>
    </section>
  );
}

function ResultSparkline({ type }: { type: string }) {
  if (type === 'bars') {
    const bars = [26, 52, 78, 68, 88, 62, 92, 100];

    return (
      <div className="mt-4 flex h-12 items-end justify-center gap-2" aria-hidden="true">
        {bars.map((height, index) => (
          <span
            key={index}
            className="w-2.5 border border-emerald-500/20 bg-emerald-500/45 shadow-[0_0_8px_rgba(16,185,129,0.12)]"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    );
  }

  if (type === 'grid') {
    return (
      <div className="mt-4 grid h-12 w-12 grid-cols-3 gap-1" aria-hidden="true">
        {Array.from({ length: 9 }, (_, index) => (
          <span
            key={index}
            className={`border border-emerald-500/35 ${index < 5 ? 'bg-emerald-500/28' : 'bg-black/30'}`}
          />
        ))}
      </div>
    );
  }

  if (type === 'hexes') {
    return (
      <div className="mt-4 flex h-12 items-center gap-1.5 text-emerald-400" aria-hidden="true">
        {Array.from({ length: 4 }, (_, index) => (
          <svg key={index} className="h-6 w-6" viewBox="0 0 24 24">
            <path d="M12 2.8 20 7.4v9.2l-8 4.6-8-4.6V7.4L12 2.8Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
          </svg>
        ))}
      </div>
    );
  }

  if (type === 'stars') {
    return (
      <div className="mt-6 flex items-center gap-2 text-emerald-400" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} className={`h-4 w-4 ${index < 4 ? 'fill-current' : 'fill-current opacity-70'}`} strokeWidth={1.4} />
        ))}
      </div>
    );
  }

  const isUp = type === 'lineUp';
  const points = isUp
    ? '0,40 22,32 44,26 66,24 88,22 110,20 132,12 154,10 176,8'
    : '0,10 22,18 44,26 66,25 88,34 110,38 132,45 154,52 176,60';

  return (
    <svg className="mt-4 h-12 w-full overflow-visible" viewBox="0 0 180 48" role="img" aria-label="">
      <polyline points={points} fill="none" stroke="rgba(16,185,129,0.88)" strokeWidth="1.5" />
      {points.split(' ').map((point) => {
        const [x, y] = point.split(',');
        return <circle key={point} cx={x} cy={y} r="1.7" fill="rgba(52,211,153,0.9)" />;
      })}
      <path d={`M ${points.replaceAll(' ', ' L ')} L 180 48 L 0 48 Z`} fill="rgba(16,185,129,0.08)" />
    </svg>
  );
}

function ResultsSection() {
  return (
    <section className="relative mb-5 border border-border-subtle bg-black/18 p-4 sm:p-5">
      <CornerSquares />
      <div className="mb-4 flex items-center gap-2 text-mono-label uppercase text-emerald-400">
        <span>05</span>
        <span>//</span>
        <span>Results</span>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {resultCards.map(([value, label, copy, visual]) => (
          <article key={label} className="flex min-h-[138px] min-w-0 flex-col border border-emerald-500/20 bg-black/22 p-4">
            <div className="mb-3 font-mono text-[27px] leading-none text-emerald-400 tabular-nums">{value}</div>
            <div className="text-mono-2xs font-normal uppercase tracking-[0] text-white/72">{label}</div>
            <p className="text-mono-3xs font-mono leading-relaxed text-white/55">{copy}</p>
            <ResultSparkline type={visual} />
          </article>
        ))}
      </div>
    </section>
  );
}

function TakeawaySection() {
  return (
    <section className="relative mb-16 border border-border-subtle bg-black/18 p-4 sm:p-5">
      <CornerSquares />
      <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.55fr_0.85fr] lg:gap-0">
        <div className="min-w-0 lg:border-r lg:border-dashed lg:border-emerald-500/20 lg:pr-7">
          <div className="mb-4 flex items-center gap-2 text-mono-label uppercase text-emerald-400">
            <span>06</span>
            <span>//</span>
            <span>Takeaway</span>
          </div>

          <div className="border border-emerald-500/18 bg-black/20 p-3">
            <div className="mb-3 text-mono-2xs uppercase text-emerald-400">What I Learned</div>
            <ul className="space-y-2">
              {learningNotes.map((note) => (
                <li key={note} className="grid min-w-0 grid-cols-[1.1rem_minmax(0,1fr)] gap-3">
                  <CheckSquare className="mt-0.5 h-3.5 w-3.5 text-white/52" strokeWidth={1.6} />
                  <span className="text-mono-2xs leading-relaxed text-white/72">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="min-w-0 lg:border-r lg:border-dashed lg:border-emerald-500/20 lg:px-8">
          <div className="mb-4 text-mono-label uppercase text-emerald-400">Strategic Impact</div>
          <p className="text-mono-label leading-relaxed text-white/72">
            Market Command turns a personal trading workflow into a reusable operating system. It brings market context, performance review, event risk, and execution readiness into one environment so the operator can act with less friction and more discipline.
          </p>

          <div className="mt-5 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-3">
            {impactMetrics.map(([title, copy, Icon]) => (
              <div key={title as string} className="min-w-0 text-center">
                <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center text-emerald-400">
                  {React.createElement(Icon as React.ElementType, { className: 'h-6 w-6', strokeWidth: 1.6 })}
                </div>
                <div className="mb-1 text-mono-2xs uppercase text-emerald-400">{title as string}</div>
                <p className="text-mono-3xs leading-relaxed text-white/58">{copy as string}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:pl-7">
          <div className="mb-4 text-mono-label uppercase text-emerald-400">Operator Notes</div>
          <div className="border border-emerald-500/18 bg-black/20">
            {operatorNotes.map(([label, value], index) => (
              <div
                key={label}
                className={`grid min-w-0 grid-cols-[0.85fr_1.35fr] ${index > 0 ? 'border-t border-emerald-500/18' : ''}`}
              >
                <div className="border-r border-emerald-500/18 p-2 text-mono-3xs uppercase leading-relaxed text-emerald-400">
                  {label}
                </div>
                <div className="p-2 text-mono-2xs leading-relaxed text-white/72">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MarketCommandV2Page() {
  return (
    <div className="relative flex min-h-screen max-w-full flex-col overflow-x-hidden p-4 sm:p-6">
      <TopBar className="max-w-[1180px]" />
      <CaseStudySubnav />
      <main className="mx-auto w-full max-w-[1180px] flex-grow">
        <HeroPanel />
        <ProblemInsightSection />
        <BuildSection />
        <SystemInMotionSection />
        <ResultsSection />
        <TakeawaySection />
      </main>
      <Footer />
      <CaseBriefDock
        storageKey="case-brief-dock:market-command"
        title="Market Command"
        description="A compact PDF dossier of the system build."
        coverImage={marketCommandBriefCover}
        coverAlt="Market Command case brief cover"
        pdfUrl={marketCommandBrief.pdfUrl}
        shareUrl={marketCommandBrief.shareUrl}
        discussHref="/contact?case=market-command"
        contactHref="/contact?case=market-command"
      />
    </div>
  );
}
