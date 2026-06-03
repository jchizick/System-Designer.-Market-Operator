import React from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  CheckCircle2,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  CloudUpload,
  Cpu,
  Crosshair,
  Database,
  Download,
  FileText,
  FolderInput,
  Lightbulb,
  MemoryStick,
  Menu,
  Network,
  Puzzle,
  ScanSearch,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
} from 'lucide-react';
import { TopBar } from './TopBar';
import { Footer } from './Footer';
import { CaseBriefDock } from './CaseBriefDock';
import orbitalLabs from '../assets/orbital-labs.png';
import syntheticFoundryBriefCover from '../assets/synthetic-foundry-brief-cover.png';

const syntheticFoundryBrief = {
  pdfUrl: 'https://ybnjfz0v2gs31z0q.public.blob.vercel-storage.com/synthetic-foundry-case-brief.pdf',
  shareUrl: '/ai-brand-machine-synthetic-foundry-v2',
};

const foundrySteps = [
  { label: 'Intake', icon: ArrowUpRight, active: true },
  { label: 'Analyze', icon: ScanSearch },
  { label: 'Structure', icon: CircleHelp },
  { label: 'Generate', icon: Braces },
  { label: 'Validate', icon: CheckCircle2 },
  { label: 'Publish', icon: FileText },
];

const healthMetrics = [
  ['Clarity Score', '92%', 13],
  ['Automation Rate', '86%', 12],
  ['Token Usage', '42%', 7],
];

const problemImpacts = [
  'Disconnected tools and file sprawl',
  'Inconsistent naming and components',
  'Manual documentation and repetition',
  'Long handoff cycles to developers',
];

const insightPrinciples = [
  ['Structure First', 'Organize before you generate', Crosshair],
  ['Model Guided', 'AI augments, not replaces', Bot],
  ['Modular Outputs', 'Components, tokens, docs', Puzzle],
  ['Human First', 'Decisions stay with experts', ShieldCheck],
];

const architectureSteps = [
  ['Ingest', 'Raw inputs', FolderInput],
  ['Analyze', 'Structure semantics', Network],
  ['Generate', 'Components & tokens', Sparkles],
  ['Validate', 'Rules & QA', SlidersHorizontal],
  ['Publish', 'Docs & handoff', FileText],
];

const coreCapabilities = [
  ['Intelligent Ingest', 'Parse files, links, and messy specifications.'],
  ['Semantic Analysis', 'Detect patterns, roles, and relationships.'],
  ['Component Generation', 'Produce tokens, styles, and UI components.'],
  ['Documentation Engine', 'Auto-generate specs, guides, and usage.'],
  ['QA & Governance', 'Validate lint, ally, and enforce rules.'],
];

const stackItems = ['Python', 'FastAPI', 'Pandas', 'Postgres', 'Pinecone', 'OpenAI', 'Next.js'];

const overviewCards = [
  ['Knowledge', 'Brand heuristics, patterns, and rules', Database],
  ['Models', 'LLMs, embeddings + RAG', Cpu],
  ['Memory', 'Project context and lineage', MemoryStick],
  ['Data Layer', 'Structured data, assets, and project graph', Braces],
  ['Outputs', 'Design system, docs, dev handoff', Puzzle],
];

const signalInputs = [
  ['RAW FOUNDER IDEA', 'Vision, purpose, ambition.', 'ID-001', Lightbulb],
  ['PROMPT FRAGMENTS', 'Angles, questions, triggers.', '12 ITEMS', Braces],
  ['AUDIENCE NOTES', 'Needs, behaviors, tensions.', '07 FILES', Network],
  ['CONSTRAINTS', 'Market, technical, brand guardrails.', '08 RULES', ShieldCheck],
  ['MOODBOARD SEEDS', 'Textures, tone, atmosphere.', '23 ASSETS', Puzzle],
];

const processingNodes = [
  ['01', 'UNIVERSE GENERATION', 'Expand conceptual space.', CircleHelp],
  ['02', 'SIGNAL CALIBRATION', 'Score clarity, resonance, fit.', SlidersHorizontal],
  ['03', 'SELECTION', 'Choose highest-potential route.', Crosshair],
  ['04', 'BRAND DNA', 'Codify core identity.', Braces],
  ['05', 'SIGNAL TRANSLATION', 'Convert DNA into signals.', Database],
  ['06', 'BRAND SYSTEMS MAP', 'Map structure and hierarchy.', Network],
  ['07', 'BRAND OPERATING SYSTEM', 'Assemble for activation and scale.', Puzzle],
];

const processingMetrics = [
  ['UNIVERSES', '48'],
  ['SIGNAL SCORE', '96%'],
  ['COHERENCE', '94%'],
  ['DISTINCT', '93%'],
  ['INTEGRITY', '98%'],
  ['EST.', '02:17'],
];

const outputCards = [
  ['01', 'BRAND UNIVERSE', 'orbit'],
  ['02', 'MOODBOARD', 'mood'],
  ['03', 'BRAND DNA', 'dna'],
  ['04', 'OPERATING SYSTEM', 'radar'],
  ['05', 'APP MATRIX', 'matrix'],
  ['06', 'ROADMAP', 'roadmap'],
];

const systemLogRows = [
  ['14:32:18', 'PIPELINE INITIATED'],
  ['14:32:19', 'SIGNALS INGESTED'],
  ['14:32:48', 'SELECTION COMPLETE'],
  ['14:33:07', 'TRANSLATION COMPLETE'],
  ['14:33:39', 'SYSTEM ASSEMBLED'],
];

const resultCards = [
  ['-62%', 'Time to system', 'From 6 weeks -> 2.3 weeks', 'lineDown'],
  ['91%', 'Adoption rate', 'Active usage after launch', 'lineUp'],
  ['+3.4x', 'Design velocity', 'More output, less rework', 'bars'],
  ['-71%', 'Rework reduction', 'Fewer QA and handoff loops', 'lineDown'],
  ['78%', 'Automation', 'Tasks automated end-to-end', 'donut'],
  ['4/5', 'Stakeholder satisfaction', 'Average feedback score', 'stars'],
];

const learningNotes = [
  'AI output improves when the operating structure is designed first.',
  'Reusable system rules matter more than one-off generation quality.',
  'Human review loops keep automation useful, trusted, and on-brand.',
  'Developer handoff gets faster when design decisions are packaged as system logic.',
];

const impactMetrics = [
  ['Faster Systems', 'Shorter path from messy inputs to usable assets', Sparkles],
  ['Cleaner Handoff', 'Specs, tokens, and logic travel together', Braces],
  ['Reusable Engine', 'Each project improves the next one', Network],
];

const operatorNotes = [
  ['Would I build it again?', 'Yes.'],
  ["What I'd do differently", 'Add governance checks earlier in the flow.'],
  ['Biggest risk', 'Over-automation without enough human judgment.'],
  ['Next iteration', 'Deeper component intelligence and version control.'],
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

function FoundryMetricBar({ filledSegments }: { filledSegments: number }) {
  return (
    <div className="mt-2 flex items-center gap-[2px]" aria-hidden="true">
      {Array.from({ length: 16 }, (_, index) => (
        <span
          key={index}
          className={`h-3 w-[3px] border border-emerald-500/10 ${
            index < filledSegments
              ? 'bg-emerald-400/80 shadow-[0_0_5px_rgba(52,211,153,0.18)]'
              : 'bg-emerald-950/45'
          }`}
        />
      ))}
    </div>
  );
}

function FoundryMatrix() {
  return (
    <div className="relative h-[128px] min-w-0 overflow-hidden border border-emerald-500/12 bg-black/25">
      <svg
        className="h-full w-full text-emerald-400"
        viewBox="0 0 320 118"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Compact AI brand pipeline network visualization"
      >
        <defs>
          <radialGradient id="foundryNodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(52,211,153,0.78)" />
            <stop offset="100%" stopColor="rgba(52,211,153,0.02)" />
          </radialGradient>
          <radialGradient id="foundryCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(110,231,183,0.94)" />
            <stop offset="56%" stopColor="rgba(52,211,153,0.22)" />
            <stop offset="100%" stopColor="rgba(52,211,153,0)" />
          </radialGradient>
          <filter id="foundryActiveGlow" colorInterpolationFilters="sRGB" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.35" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="320" height="118" fill="rgba(0,0,0,0.18)" />
        <path d="M0 29.5H320M0 59H320M0 88.5H320M40 0V118M80 0V118M120 0V118M160 0V118M200 0V118M240 0V118M280 0V118" stroke="rgba(16,185,129,0.03)" strokeWidth="1" />

        <g fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" fontSize="7.5" letterSpacing="0">
          <text x="38" y="17" fill="rgba(52,211,153,0.62)" textAnchor="middle">INPUTS</text>
          <text x="160" y="17" fill="rgba(52,211,153,0.7)" textAnchor="middle">SYNTHESIS</text>
          <text x="286" y="17" fill="rgba(52,211,153,0.62)" textAnchor="middle">OUTPUTS</text>
        </g>

        <g fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7">
          <path d="M38 36L112 26M38 36L112 59M38 36L112 92M38 59L112 26M38 59L112 59M38 59L112 92M38 82L112 26M38 82L112 59M38 82L112 92" />
          <path d="M112 26L160 36M112 26L160 59M112 26L160 82M112 59L160 36M112 59L160 59M112 59L160 82M112 92L160 36M112 92L160 59M112 92L160 82" />
          <path d="M160 36L208 30M160 36L208 70M160 59L208 30M160 59L208 70M160 82L208 30M160 82L208 70" />
          <path d="M208 30L284 38M208 30L284 59M208 30L284 80M208 70L284 38M208 70L284 59M208 70L284 80" />
        </g>

        <path
          d="M38 59L112 59L160 59L208 30L284 38"
          fill="none"
          stroke="rgba(110,231,183,0.96)"
          strokeLinecap="round"
          strokeWidth="2.55"
          filter="url(#foundryActiveGlow)"
        />

        <g>
          {[
            [38, 36], [38, 59], [38, 82],
            [112, 26], [112, 59], [112, 92],
            [160, 36], [160, 59], [160, 82],
            [208, 30], [208, 70],
            [284, 38], [284, 59], [284, 80],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.25" fill="rgba(3,7,8,0.96)" stroke="rgba(52,211,153,0.4)" strokeWidth="0.95" />
          ))}
        </g>

        <g fill="none" stroke="rgba(52,211,153,0.38)" strokeWidth="0.72">
          <path d="M292 32h8v8h-8zM292 53h8v8h-8zM292 74h8v8h-8z" />
          <path d="M284 38H292M284 59H292M284 80H292" />
        </g>

        <g filter="url(#foundryActiveGlow)">
          {[
            [38, 59, 6.1], [112, 59, 6.3], [208, 30, 6.3], [284, 38, 6.1],
          ].map(([cx, cy, r]) => (
            <g key={`active-${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="10.5" fill="url(#foundryNodeGlow)" />
              <circle cx={cx} cy={cy} r={r} fill="rgba(52,211,153,0.95)" />
              <circle cx={cx} cy={cy} r="2.2" fill="rgba(232,255,246,0.92)" />
            </g>
          ))}
          <g>
            <circle cx="160" cy="59" r="20" fill="url(#foundryCoreGlow)" />
            <circle cx="160" cy="59" r="9.4" fill="rgba(52,211,153,0.98)" />
            <circle cx="160" cy="59" r="3.5" fill="rgba(232,255,246,0.96)" />
            <circle cx="160" cy="59" r="15" fill="none" stroke="rgba(110,231,183,0.58)" strokeWidth="0.9" strokeDasharray="2.5 4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ProblemInsightSection() {
  return (
    <section className="relative mb-5 border border-border-subtle bg-black/18 p-4 sm:p-5">
      <CornerSquares />
      <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-0">
        <div className="min-w-0 lg:border-r lg:border-dashed lg:border-emerald-500/20 lg:pr-8">
          <StudySectionHeader icon={AlertTriangle} number="01" title="The Problem">
            <p className="text-mono-label leading-relaxed text-white/72">
              Brand systems are complex, inconsistent, and slow to produce. Teams waste cycles aligning assets, writing guidelines, and hand-off work that could be automated.
            </p>

            <div className="mt-5">
              <div className="mb-2 text-mono-2xs uppercase text-emerald-400">Impact</div>
              <ul className="space-y-0.5">
                {problemImpacts.map((impact) => (
                  <li key={impact} className="flex gap-1.5 leading-snug">
                    <span className="text-emerald-500/70">·</span>
                    <span className="text-mono-label leading-relaxed text-white/72">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StudySectionHeader>
        </div>

        <div className="min-w-0 lg:pl-8">
          <StudySectionHeader icon={Lightbulb} number="02" title="The Insight">
            <p className="text-mono-label leading-relaxed text-white/72">
              If we combine structured inputs, a domain-aware model, and modular automation, we can turn brand chaos into a scalable system that teams can ship with confidence.
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

function BuildSection() {
  return (
    <section id="case-brief" className="relative mb-5 scroll-mt-24 border border-border-subtle bg-black/18 p-4 sm:p-5">
      <CornerSquares />
      <div className="mb-4 flex items-center gap-2 text-mono-label uppercase text-emerald-400">
        <span>03</span>
        <span>//</span>
        <span>The Build</span>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[1.6fr_0.95fr] lg:gap-0">
        <div className="min-w-0 space-y-3 lg:border-border-subtle lg:pr-5">
          <section className="border border-emerald-500/18 bg-black/20 p-3">
            <div className="mb-2 text-mono-2xs uppercase text-emerald-400">System Architecture</div>
            <div className="grid min-w-0 grid-cols-1 items-stretch gap-0 sm:grid-cols-[1fr_1.25rem_1fr_1.25rem_1fr_1.25rem_1fr_1.25rem_1fr]">
              {architectureSteps.map(([label, copy, Icon], index) => (
                <React.Fragment key={label as string}>
                  <div className="flex h-full min-w-0 flex-col justify-center border border-emerald-500/18 bg-black/25 px-2 py-2 text-center">
                    {React.createElement(Icon as React.ElementType, {
                      className: 'mx-auto mb-2 h-5 w-5 text-emerald-400',
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
            <div className="mb-2 text-mono-2xs uppercase text-emerald-400">Core Capabilities</div>
            <div className="grid min-w-0 grid-cols-1 gap-2 md:grid-cols-5">
              {coreCapabilities.map(([title, copy]) => (
                <div key={title} className="min-w-0 border border-emerald-500/14 bg-black/22 p-2">
                  <div className="mb-2 text-mono-2xs uppercase text-white/72">{title}</div>
                  <p className="text-mono-3xs text-white/55">{copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border border-emerald-500/18 bg-black/20 p-3">
            <div className="mb-2 text-mono-2xs uppercase text-emerald-400">Stack</div>
            <div className="flex flex-wrap gap-2">
              {stackItems.map((item) => (
                <span
                  key={item}
                  className="border border-emerald-500/18 bg-black/24 px-4 py-2 text-mono-3xs uppercase text-white/62"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>

        <aside className="flex min-w-0 lg:pl-0">
          <div className="flex min-w-0 flex-1 flex-col border border-emerald-500/18 bg-black/20 p-3">
            <div className="mb-2 text-center">
              <div className="mt-0 text-mono-xs uppercase text-emerald-400">AI Orchestration Layer</div>
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-3">
              {overviewCards.slice(0, 3).map(([title, copy, Icon]) => (
                <div key={title as string} className="min-w-0 border border-emerald-500/18 bg-black/22 p-2 text-center">
                  {React.createElement(Icon as React.ElementType, {
                    className: 'mx-auto mb-2 h-5 w-5 text-emerald-400',
                    strokeWidth: 1.6,
                  })}
                  <div className="mb-1 text-mono-xs uppercase text-emerald-400">{title as string}</div>
                  <p className="text-mono-2xs text-white/55">{copy as string}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto my-3 grid h-9 w-full max-w-[70%] grid-cols-2 gap-10 text-emerald-500/70" aria-hidden="true">
              <span className="relative mx-auto block h-full w-px bg-emerald-500/45 after:absolute after:-bottom-0.5 after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:rotate-45 after:border-b after:border-r after:border-emerald-500/70" />
              <span className="relative mx-auto block h-full w-px bg-emerald-500/45 after:absolute after:-bottom-0.5 after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:rotate-45 after:border-b after:border-r after:border-emerald-500/70" />
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
              {overviewCards.slice(3).map(([title, copy, Icon]) => (
                <div key={title as string} className="min-w-0 border border-emerald-500/18 bg-black/22 p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <div className="text-mono-xs uppercase text-emerald-400">{title as string}</div>
                    {React.createElement(Icon as React.ElementType, {
                      className: 'h-5 w-5 shrink-0 text-emerald-400',
                      strokeWidth: 1.6,
                    })}
                  </div>
                  <p className="text-mono-2xs text-white/55">{copy as string}</p>
                </div>
              ))}
            </div>

            <button className="mt-auto w-full max-w-full px-3 py-2 bg-bg-surface border border-emerald-700 text-emerald-500 hover:bg-emerald-500/10 transition-colors text-mono-xs tracking-widest uppercase sm:px-4">
              [ View System Map ]
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}

function SegmentedMeter({ label, value, filled }: { label: string; value: string; filled: number }) {
  return (
    <div className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 border border-emerald-500/14 bg-black/24 px-2.5 py-2">
      <span className="whitespace-nowrap text-[8px] uppercase leading-none text-white/48">{label}</span>
      <div className="flex min-w-0 gap-[2px]" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => (
          <span
            key={index}
            className={`h-2 min-w-0 flex-1 border border-emerald-500/10 ${
              index < filled ? 'bg-emerald-400/75 shadow-[0_0_5px_rgba(52,211,153,0.16)]' : 'bg-white/[0.055]'
            }`}
          />
        ))}
      </div>
      <span className="font-mono text-[15px] leading-none text-emerald-400 tabular-nums">{value}</span>
    </div>
  );
}

function SignalInputCard({
  title,
  copy,
  meta,
  icon: Icon,
}: {
  title: string;
  copy: string;
  meta: string;
  icon: React.ElementType;
}) {
  return (
    <article className="group relative grid min-h-[52px] min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] gap-2 border border-emerald-500/16 bg-black/24 px-2 py-2">
      <div className="flex h-9 w-9 items-center justify-center border border-emerald-500/28 bg-black/28 text-emerald-400">
        <Icon className="h-4 w-4" strokeWidth={1.45} />
      </div>
      <div className="min-w-0">
        <div className="mb-1 grid min-w-0 grid-cols-[minmax(0,1fr)_auto] gap-2">
          <h4 className="min-w-0 text-[10px] uppercase leading-tight text-white/82">{title}</h4>
          <span className="shrink-0 text-[8px] uppercase leading-tight text-white/55">{meta}</span>
        </div>
        <p className="truncate text-[10px] leading-tight text-white/56">{copy}</p>
      </div>
    </article>
  );
}

function ProcessingNode({
  number,
  title,
  copy,
  icon: Icon,
  wide = false,
  active = false,
}: {
  number: string;
  title: string;
  copy: string;
  icon: React.ElementType;
  wide?: boolean;
  active?: boolean;
}) {
  return (
    <article
      className={`synthetic-processing-node relative min-h-[76px] min-w-0 border bg-black/34 p-2 ${
        active ? 'synthetic-processing-pulse border-emerald-400/45' : 'border-emerald-500/18'
      }`}
    >
      <div className="mb-1.5 flex items-start justify-between gap-2">
        <span className="font-mono text-[14px] leading-none text-white/82 tabular-nums">{number}</span>
        <Icon className="h-4 w-4 shrink-0 text-emerald-400/82" strokeWidth={1.45} />
      </div>
      <h4 className="mb-1 text-[10px] uppercase leading-snug text-white/82">{title}</h4>
      <p className="text-[9px] leading-tight text-white/56">{copy}</p>
    </article>
  );
}

function ProcessingFlowConnectors() {
  const dots = [
    [16.5, 22], [50, 22], [83.5, 22],
    [32, 51], [68, 51],
    [32, 80], [68, 80],
  ];

  return (
    <svg
      className="pointer-events-none absolute inset-2 hidden h-[calc(100%-1rem)] w-[calc(100%-1rem)] text-emerald-400 sm:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M16.5 22H50H83.5" strokeOpacity="0.32" strokeWidth="0.55" />
        <path d="M16.5 22V36H32V51" strokeOpacity="0.24" strokeWidth="0.5" />
        <path d="M50 22V36H50V51H68" strokeOpacity="0.24" strokeWidth="0.5" />
        <path d="M83.5 22V36H68V51" strokeOpacity="0.24" strokeWidth="0.5" />
        <path d="M32 51H68" strokeOpacity="0.34" strokeWidth="0.55" />
        <path d="M32 51V66H32V80" strokeOpacity="0.24" strokeWidth="0.5" />
        <path d="M68 51V66H68V80" strokeOpacity="0.24" strokeWidth="0.5" />
        <path d="M32 80H68" strokeOpacity="0.34" strokeWidth="0.55" />
      </g>
      {dots.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.9" fill="currentColor" opacity="0.55" />
      ))}
    </svg>
  );
}

function OutputPreviewVisual({ type }: { type: string }) {
  if (type === 'orbit') {
    return (
      <svg className="h-14 w-full text-emerald-400" viewBox="0 0 170 70" aria-hidden="true">
        <circle cx="84" cy="45" r="8" fill="none" stroke="currentColor" strokeOpacity="0.75" />
        <path d="M28 48c18-28 74-36 112-6M26 58c36 17 83 13 124-19M42 26c44-8 86 9 100 42" fill="none" stroke="currentColor" strokeOpacity="0.35" />
        {[42, 76, 108, 128, 146].map((x, index) => (
          <circle key={x} cx={x} cy={[62, 34, 28, 56, 41][index]} r={index === 2 ? 4 : 3} fill="currentColor" opacity="0.82" />
        ))}
      </svg>
    );
  }

  if (type === 'mood') {
    return (
      <div className="grid h-14 grid-cols-3 gap-1" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => (
          <span
            key={index}
            className="border border-emerald-500/10 bg-[radial-gradient(circle_at_35%_35%,rgba(52,211,153,0.28),rgba(255,255,255,0.08)_38%,rgba(0,0,0,0.58)_70%)]"
          />
        ))}
      </div>
    );
  }

  if (type === 'dna') {
    return (
      <div className="space-y-1" aria-hidden="true">
        {['ESSENCE', 'BELIEF', 'PROMISE', 'TONE'].map((label, index) => (
          <div key={label} className="grid grid-cols-[3.7rem_minmax(0,1fr)] border border-emerald-500/10 text-[7px] leading-tight">
            <span className="border-r border-emerald-500/10 px-1 py-0.5 text-white/48">{label}</span>
            <span className="px-1 py-0.5 text-white/62">{['Why we exist', 'What we believe', 'What we deliver', 'How we sound'][index]}</span>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'radar') {
    return (
      <svg className="h-14 w-full text-emerald-400" viewBox="0 0 170 70" aria-hidden="true">
        <circle cx="66" cy="45" r="32" fill="none" stroke="currentColor" strokeOpacity="0.16" />
        <circle cx="66" cy="45" r="21" fill="none" stroke="currentColor" strokeOpacity="0.2" />
        <circle cx="66" cy="45" r="9" fill="none" stroke="currentColor" strokeOpacity="0.32" />
        <path d="M66 45 89 22A32 32 0 0 1 96 52Z" fill="currentColor" opacity="0.52" />
        {['STRATEGY', 'POSITIONING', 'IDENTITY', 'EXPRESSION', 'GOVERNANCE'].map((item, index) => (
          <text key={item} x="112" y={18 + index * 13} fill="rgba(255,255,255,0.58)" fontSize="6" fontFamily="monospace">{item}</text>
        ))}
      </svg>
    );
  }

  if (type === 'roadmap') {
    return (
      <div className="space-y-1" aria-hidden="true">
        {['DISCOVER', 'DEFINE', 'DESIGN', 'BUILD', 'LAUNCH'].map((label, index) => (
          <div key={label} className="grid grid-cols-[3.7rem_minmax(0,1fr)] items-center gap-1">
            <span className="text-[7px] leading-tight text-white/48">{label}</span>
            <span className="grid h-1.5 grid-cols-6 gap-0.5">
              {Array.from({ length: 6 }, (_, barIndex) => (
                <span key={barIndex} className={`${barIndex === index ? 'bg-emerald-400/75' : 'bg-white/[0.06]'}`} />
              ))}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid h-14 grid-cols-5 gap-1" aria-hidden="true">
      {Array.from({ length: 25 }, (_, index) => (
        <span key={index} className={`${index % 5 === 0 || index % 7 === 0 ? 'bg-emerald-400/72' : 'bg-white/[0.07]'}`} />
      ))}
    </div>
  );
}

function OutputPreviewCard({ number, title, type }: { number: string; title: string; type: string }) {
  return (
    <article className="min-h-[88px] min-w-0 border border-emerald-500/16 bg-black/24 p-2">
      <h4 className="mb-1.5 flex min-w-0 items-start gap-1.5 text-[8px] uppercase leading-tight text-white/82">
        <span className="text-emerald-400">{number}</span>
        <span className="min-w-0">{title}</span>
      </h4>
      <OutputPreviewVisual type={type} />
    </article>
  );
}

function SystemConsoleSparkline() {
  const points = '0,42 12,39 24,41 36,35 48,38 60,30 72,33 84,26 96,28 108,18 120,20 132,12 144,17 156,9 168,13 180,7';

  return (
    <svg className="h-9 w-full text-emerald-400" viewBox="0 0 180 54" aria-hidden="true">
      <path d="M0 45H180" stroke="rgba(255,255,255,0.09)" />
      <polyline points={points} fill="none" stroke="currentColor" strokeOpacity="0.72" strokeWidth="1.5" />
      <path d={`M ${points.replaceAll(' ', ' L ')} L 180 54 L 0 54 Z`} fill="currentColor" opacity="0.08" />
    </svg>
  );
}

function SystemInMotionSection() {
  return (
    <section className="relative mb-5 border border-border-subtle bg-black/18 p-4">
      <CornerSquares />
      <div className="mb-3 flex items-center gap-2 text-mono-label uppercase text-emerald-400">
        <span>04</span>
        <span>//</span>
        <span>System In Motion</span>
      </div>

      <div className="relative overflow-hidden border border-emerald-500/18 bg-black/18 p-4 shadow-[inset_0_0_24px_rgba(16,185,129,0.025)] md:p-5">
        <div className="pointer-events-none absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(16,185,129,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.18)_1px,transparent_1px)] [background-size:18px_18px]" aria-hidden="true" />
        <div className="relative grid min-w-0 grid-cols-1 items-stretch gap-3 lg:grid-cols-[0.74fr_1.45fr_0.95fr]">
          <aside className="relative min-w-0 border border-emerald-500/16 bg-black/24 p-2.5">
            <div className="mb-2">
              <div className="text-[10px] uppercase leading-none text-emerald-400">INPUT</div>
              <div className="mt-1 text-mono-3xs uppercase text-white/48">RAW SIGNALS</div>
            </div>
            <div className="space-y-2">
              {signalInputs.map(([title, copy, meta, Icon]) => (
                <React.Fragment key={title as string}>
                  <SignalInputCard
                    title={title as string}
                    copy={copy as string}
                    meta={meta as string}
                    icon={Icon as React.ElementType}
                  />
                </React.Fragment>
              ))}
            </div>
            <div className="mt-2">
              <SegmentedMeter label="INPUT QUALITY" value="92%" filled={17} />
            </div>
          </aside>

          <section className="relative flex min-w-0 flex-col overflow-hidden border border-emerald-500/16 bg-black/24 p-2.5">
            <div className="pointer-events-none absolute -left-4 top-1/2 hidden h-px w-4 bg-emerald-500/25 lg:block" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-4 top-1/2 hidden h-px w-4 bg-emerald-500/25 lg:block" aria-hidden="true" />
            <span className="synthetic-packet pointer-events-none absolute left-0 top-1/2 hidden h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.75)] lg:block" aria-hidden="true" />
            <div className="mb-2">
              <div className="text-[10px] uppercase leading-none text-emerald-400">PROCESSING</div>
              <div className="mt-1 text-mono-3xs uppercase text-white/48">MACHINE LOGIC</div>
            </div>

            <div className="relative border border-emerald-500/10 bg-black/18 p-2">
              <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(16,185,129,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.18)_1px,transparent_1px)] [background-size:14px_14px]" aria-hidden="true" />
              <ProcessingFlowConnectors />
              <div className="relative space-y-2">
                <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-3">
                  {processingNodes.slice(0, 3).map(([number, title, copy, Icon], index) => (
                    <React.Fragment key={title as string}>
                      <ProcessingNode
                        number={number as string}
                        title={title as string}
                        copy={copy as string}
                        icon={Icon as React.ElementType}
                        active={index === 2}
                      />
                    </React.Fragment>
                  ))}
                </div>
                <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
                  {processingNodes.slice(3, 5).map(([number, title, copy, Icon]) => (
                    <React.Fragment key={title as string}>
                      <ProcessingNode
                        number={number as string}
                        title={title as string}
                        copy={copy as string}
                        icon={Icon as React.ElementType}
                      />
                    </React.Fragment>
                  ))}
                </div>
                <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
                  {processingNodes.slice(5).map(([number, title, copy, Icon]) => (
                    <React.Fragment key={title as string}>
                      <ProcessingNode
                        number={number as string}
                        title={title as string}
                        copy={copy as string}
                        icon={Icon as React.ElementType}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto grid min-w-0 grid-cols-2 border border-emerald-500/12 bg-black/22 sm:grid-cols-3 xl:grid-cols-6">
              {processingMetrics.map(([label, value], index) => (
                <div key={label} className={`min-w-0 px-2 py-1.5 ${index > 0 ? 'border-l border-emerald-500/12' : ''}`}>
                  <div className="text-[7px] uppercase leading-none text-white/42">{label}</div>
                  <div className="mt-1 font-mono text-[14px] leading-none text-emerald-400 tabular-nums">{value}</div>
                </div>
              ))}
            </div>
          </section>

          <aside className="relative min-w-0 border border-emerald-500/16 bg-black/24 p-2.5">
            <div className="pointer-events-none absolute -left-4 top-1/2 hidden h-px w-4 bg-emerald-500/25 lg:block" aria-hidden="true" />
            <div className="mb-2">
              <div className="text-[10px] uppercase leading-none text-emerald-400">OUTPUT</div>
              <div className="mt-1 text-mono-3xs uppercase text-white/48">REFINED DELIVERABLES</div>
            </div>
            <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {outputCards.map(([number, title, type]) => (
                <React.Fragment key={title}>
                  <OutputPreviewCard number={number as string} title={title as string} type={type as string} />
                </React.Fragment>
              ))}
            </div>
            <div className="mt-2">
              <SegmentedMeter label="OUTPUT READINESS" value="97%" filled={17} />
            </div>
          </aside>
        </div>

        <footer className="relative mt-3 grid min-w-0 grid-cols-1 border border-emerald-500/16 bg-black/24 lg:grid-cols-[0.65fr_1.7fr_0.5fr]">
          <div className="min-w-0 border-b border-emerald-500/12 px-2.5 py-2 lg:border-b-0 lg:border-r">
            <div className="mb-0.5 text-[8px] uppercase leading-none text-white/48">SYSTEM CONSOLE</div>
            <SystemConsoleSparkline />
          </div>
          <div className="min-w-0 border-b border-emerald-500/12 px-2.5 py-2 lg:border-b-0 lg:border-r">
            <div className="mb-1 text-[8px] uppercase leading-none text-white/48">LOG</div>
            <div className="grid min-w-0 grid-cols-1 gap-x-4 gap-y-1 md:grid-cols-2">
              {systemLogRows.map(([time, label]) => (
                <div key={`${time}-${label}`} className="grid min-w-0 grid-cols-[4.4rem_minmax(0,1fr)_1.4rem] gap-1.5 text-[8px] uppercase leading-tight">
                  <span className="text-emerald-400/78 tabular-nums">{time}</span>
                  <span className="truncate text-white/68">{label} ........</span>
                  <span className="text-emerald-400">OK</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex min-w-0 items-center justify-start gap-2 px-2.5 py-2 lg:justify-end">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-400" strokeWidth={1.35} />
            <div className="min-w-0 text-left lg:text-right">
              <div className="text-[8px] uppercase leading-none text-white/48">SYSTEM HEALTH</div>
              <div className="font-mono text-[20px] leading-none text-emerald-400 tabular-nums">100%</div>
              <div className="text-[8px] uppercase leading-none text-emerald-400/82">ALL SYSTEMS GO</div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

function ResultSparkline({ type }: { type: string }) {
  if (type === 'bars') {
    const bars = [26, 45, 60, 48, 70, 42, 86, 55, 92];

    return (
      <div className="mt-4 flex h-12 items-end gap-1.5" aria-hidden="true">
        {bars.map((height, index) => (
          <span
            key={index}
            className="w-3 border border-emerald-500/20 bg-emerald-500/35 shadow-[0_0_8px_rgba(16,185,129,0.12)]"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    );
  }

  if (type === 'donut') {
    return (
      <div className="mt-4 flex h-12 items-center justify-center" aria-hidden="true">
        <svg className="h-14 w-14 -rotate-90" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="17"
            fill="none"
            stroke="rgba(6,78,59,0.72)"
            strokeWidth="7"
          />
          <circle
            cx="24"
            cy="24"
            r="17"
            fill="none"
            stroke="rgba(52,211,153,0.86)"
            strokeDasharray="83 107"
            strokeLinecap="butt"
            strokeWidth="7"
          />
        </svg>
      </div>
    );
  }

  if (type === 'stars') {
    return (
      <div className="mt-6 flex items-center gap-2 text-emerald-400" aria-hidden="true">
        {Array.from({ length: 4 }, (_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.4} />
        ))}
        <Star className="h-4 w-4" strokeWidth={1.4} />
      </div>
    );
  }

  const isUp = type === 'lineUp';
  const points = isUp
    ? '0,46 24,27 48,27 72,23 96,15 120,15 144,4'
    : '0,6 24,22 48,18 72,20 96,21 120,29 144,36';

  return (
    <svg className="mt-4 h-12 w-full overflow-visible" viewBox="0 0 144 48" role="img" aria-label="">
      <polyline
        points={points}
        fill="none"
        stroke="rgba(16,185,129,0.88)"
        strokeWidth="1.5"
      />
      {points.split(' ').map((point) => {
        const [x, y] = point.split(',');
        return <circle key={point} cx={x} cy={y} r="1.7" fill="rgba(52,211,153,0.9)" />;
      })}
      <path
        d={`M ${points.replaceAll(' ', ' L ')} L 144 48 L 0 48 Z`}
        fill="rgba(16,185,129,0.08)"
      />
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
          <article key={label} className="min-w-0 border border-emerald-500/20 bg-black/22 p-4">
            <div className="mb-3 font-mono text-[20px] leading-none text-emerald-400 tabular-nums">{value}</div>
            <div className="text-body-base font-normal tracking-[-0.01em] text-text-primary">{label}</div>
            <p className="text-body-xs font-mono text-white/55">{copy}</p>
            <ResultSparkline type={visual} />
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseStudySubnav() {
  return (
    <div className="mx-auto mb-0 flex w-full max-w-[1180px] items-center justify-between gap-4 pb-3 text-mono-xs uppercase text-white/45">
      <Link
        to="/"
        className="flex min-w-0 items-center gap-2 transition-colors hover:text-emerald-400"
      >
        <ArrowLeft className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
        <span className="truncate">Back To Case Files</span>
      </Link>

      <div className="flex shrink-0 items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-emerald-400">Case Study</span>
          <span>02 / 05</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/market-command-v2"
            className="flex h-7 w-7 items-center justify-center border border-border-subtle text-white/45 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
            aria-label="Previous case study"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
          <Link
            to="/algonquin-dashboard-v2"
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

function ClosingSection() {
  return (
    <section className="mb-16 grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-[1.45fr_1fr]">
      <div className="relative border border-border-subtle bg-black/18 p-4 sm:p-5">
        <CornerSquares />
        <div className="mb-4 flex items-center gap-2 text-mono-sm uppercase text-emerald-400">
          <span>06</span>
          <span>//</span>
          <span>Takeaway</span>
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-[0.9fr_0.52fr] sm:items-center">
          <div className="flex min-w-0 gap-4">
            <span className="mt-1 shrink-0 font-mono text-[44px] leading-none text-emerald-400" aria-hidden="true">
              “
            </span>
            <p className="text-mono-label leading-relaxed text-white/72">
              SYN_FOUNDRY became our force multiplier. We ship consistent systems faster, and our developers finally get what they need, when they need it.
            </p>
          </div>

          <div className="flex min-w-0 items-center bg-black/22 p-3">
            <img
              src={orbitalLabs}
              alt="Orbital Labs"
              className="h-14 w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative border border-border-subtle bg-black/18 p-4 sm:p-5">
        <CornerSquares />
        <div className="mb-4 flex items-center gap-2 text-mono-label uppercase text-emerald-400">
          <span>07</span>
          <span>//</span>
          <span>Next Steps</span>
        </div>
        <p className="mb-2 text-mono-label leading-relaxed text-white/72">
          Interested in building a similar system for your team? Let's design an operating layer that compounds.
        </p>
        <button className="max-w-full border border-emerald-700 bg-bg-surface px-4 py-2 text-mono-xs uppercase tracking-widest text-emerald-500 transition-colors hover:bg-emerald-500/10">
          [ Start A Conversation → ]
        </button>
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
            Synthetic Foundry turned AI-assisted brand work into a repeatable operating layer. It compressed intake, generation, documentation, and handoff into one system, helping teams move faster without losing coherence or control.
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

function SyntheticFoundryControlCenter() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden border border-emerald-500/22 bg-bg-surface/70 shadow-[0_0_28px_rgba(16,185,129,0.04),inset_0_0_22px_rgba(16,185,129,0.03)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(16,185,129,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.16)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative">
        <header className="flex min-w-0 items-center justify-between gap-3 border-b border-emerald-500/15 bg-white/[0.018] px-3 py-2.5 sm:px-4">
          <div className="flex min-w-0 items-center gap-2 text-mono-xs uppercase text-white/62">
            <Menu size={14} strokeWidth={1.5} className="shrink-0 text-white/45" />
            <span className="min-w-0 truncate">SYN_FOUNDRY // CONTROL CENTER</span>
          </div>
          <span className="flex shrink-0 items-center gap-2 text-mono-3xs uppercase text-emerald-400">
            Link: Secure
            <span className="h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.45)]" />
          </span>
        </header>

        <div className="p-3 sm:p-3">
          <div className="grid min-w-0 grid-cols-1 items-stretch gap-3 sm:grid-cols-[132px_minmax(0,1fr)]">
            <aside className="border border-emerald-500/18 bg-black/18">
              {foundrySteps.map(({ label, icon: Icon, active }) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 border-b border-emerald-500/10 px-3 py-3 text-mono-xs uppercase last:border-b-0 ${
                    active
                      ? 'bg-emerald-500/12 text-emerald-400 shadow-[inset_2px_0_0_rgba(16,185,129,0.65)]'
                      : 'text-white/48'
                  }`}
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center border ${
                      active ? 'border-emerald-400/65' : 'border-white/28'
                    }`}
                  >
                    <Icon size={10} strokeWidth={1.8} />
                  </span>
                  <span>{label}</span>
                </div>
              ))}
            </aside>

            <div className="min-w-0 space-y-3">
              <section className="border border-emerald-500/16 bg-black/18 p-3">
                <div className="mb-2 flex items-center gap-2 text-mono-xs uppercase">
                  <span className="text-emerald-400">Project:</span>
                  <span className="text-white/52">Orbital_Labs</span>
                </div>
                <div className="grid min-w-0 grid-cols-1 gap-2.5 md:grid-cols-[0.52fr_1.48fr]">
                  <div className="flex min-h-[128px] flex-col justify-between border border-emerald-500/12 bg-black/22 p-3">
                    <div className="text-mono-3xs uppercase text-white/48">Brand Inputs Ingested</div>
                    <CloudUpload className="h-7 w-7 text-emerald-400/58" strokeWidth={1.35} />
                    <div className="flex items-end gap-2 font-mono">
                      <span className="text-[23px] leading-none text-emerald-400 tabular-nums">124</span>
                      <span className="pb-1 text-mono-xs uppercase text-white/62">Files</span>
                    </div>
                  </div>
                  <FoundryMatrix />
                </div>
              </section>

              <section className="border border-emerald-500/16 bg-black/18 p-3">
                <div className="mb-3 text-mono-xs uppercase text-emerald-400">System Health</div>
                <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-3">
                  {healthMetrics.map(([label, value, filledSegments]) => (
                    <div key={label} className="min-w-0 border border-emerald-500/12 bg-black/20 p-2.5">
                      <div className="mb-2 truncate text-mono-3xs uppercase text-white/48">{label}</div>
                      <div className="font-mono text-[15px] leading-none text-emerald-400 tabular-nums">{value}</div>
                      <FoundryMetricBar filledSegments={Number(filledSegments)} />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-end gap-x-5 gap-y-2 px-1 text-mono-3xs uppercase text-white/45 sm:ml-[144px]">
            <span>Last Run: 17:24:11Z</span>
            <span className="hidden h-4 w-px bg-emerald-500/15 sm:block" />
            <span className="flex items-center gap-2 text-emerald-400">
              Status: Completed
              <span className="h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.45)]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SyntheticFoundryV2Page() {
  const projectDetails = [
    ['ROLE', 'Designer & Architect'],
    ['DURATION', '10 Weeks'],
    ['DELIVERABLE', 'AI Brand System'],
  ];

  return (
    <div className="min-h-screen flex flex-col relative max-w-full overflow-x-hidden p-4 sm:p-6">
      <TopBar className="max-w-[1180px]" />
      <CaseStudySubnav />
      <main className="flex-grow w-full max-w-[1180px] mx-auto min-w-0">
        <section className="relative grid min-w-0 grid-cols-1 gap-8 mb-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div className="flex min-w-0 flex-col">
            <div className="mb-4 inline-flex w-fit max-w-full border border-emerald-500/35 bg-emerald-500/5 px-3 py-1 text-mono-xs font-mono uppercase text-white/55">
              <span className="text-emerald-400">SYN_FOUNDRY</span>
              <span className="px-2 text-emerald-500/70">//</span>
              <span>AI-ASSISTED BRAND SYSTEM</span>
            </div>

            <div className="mb-3">
              <h1 className="font-space-grotesk text-[42px] font-medium uppercase leading-[0.98] tracking-[0] text-text-primary sm:text-[58px] lg:text-[58px]">
                Synthetic<br />Foundry
              </h1>
              <h2 className="mt-3 text-mono-base uppercase text-emerald-400">
                AI-ASSISTED BRAND SYSTEM
              </h2>
            </div>

            <p className="max-w-[400px] text-mono-base font-mono leading-relaxed text-white/62">
              An intelligent workflow and toolkit that accelerates brand system creation from messy inputs to production-ready design systems.
            </p>

            <div className="mt-8 grid min-w-0 grid-cols-1 border-y border-dashed border-border-subtle py-2 text-mono-xs uppercase sm:grid-cols-3">
              {projectDetails.map(([label, value], index) => (
                <div
                  key={label}
                  className={`min-w-0 px-2 first:pl-0 ${index > 0 ? 'border-t border-border-subtle pt-2 mt-2 sm:mt-0 sm:border-l sm:border-t-0 sm:pt-0' : ''}`}
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
                href={syntheticFoundryBrief.pdfUrl}
                download
                className="inline-flex max-w-full items-center gap-3 border border-border-subtle bg-transparent px-4 py-2 text-mono-xs uppercase tracking-widest text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
              >
                <span>Download Case Brief</span>
                <Download className="h-4 w-4" strokeWidth={1.6} />
              </a>
            </div>
          </div>

          <div className="flex min-w-0 items-center">
            <SyntheticFoundryControlCenter />
          </div>
        </section>
        <ProblemInsightSection />
        <BuildSection />
        <SystemInMotionSection />
        <ResultsSection />
        <TakeawaySection />
      </main>
      <Footer />
      <CaseBriefDock
        storageKey="case-brief-dock:synthetic-foundry"
        title="Synthetic Foundry"
        description="A compact PDF dossier of the system build."
        coverImage={syntheticFoundryBriefCover}
        coverAlt="Synthetic Foundry case brief cover"
        pdfUrl={syntheticFoundryBrief.pdfUrl}
        shareUrl={syntheticFoundryBrief.shareUrl}
      />
    </div>
  );
}
