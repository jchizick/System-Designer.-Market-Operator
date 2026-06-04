import React from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Box,
  Clapperboard,
  ChevronLeft,
  ChevronRight,
  CheckSquare,
  Download,
  Gem,
  GraduationCap,
  Lightbulb,
  Menu,
  Megaphone,
  MessageSquare,
  Music,
  Play,
  PlayCircle,
  Radio,
  Rocket,
  Sparkles,
  Star,
  Target,
  Users,
} from 'lucide-react';
import { Footer } from './Footer';
import { CaseBriefDock } from './CaseBriefDock';
import { TopBar } from './TopBar';
import blockchainBrawlersBriefCover from '../assets/blockchain-brawlers-brief-cover.png';
import blockchainBrawlersSystemInMotionMockup from '../assets/blockchain-brawlers-system-in-motion-mockup.png';

const blockchainBrawlersBrief = {
  pdfUrl: 'https://ybnjfz0v2gs31z0q.public.blob.vercel-storage.com/blockchain-brawler-brief.pdf',
  shareUrl: '/blockchain-brawlers-v2',
};

const commandModes = [
  { label: 'Signal', icon: Radio, active: true },
  { label: 'Content', icon: PlayCircle },
  { label: 'Community', icon: Users },
  { label: 'Education', icon: BookOpen },
  { label: 'Deploy', icon: Rocket },
];

const projectDetails = [
  ['Role', 'Lead Designer & System Architect'],
  ['Duration', '16 weeks'],
  ['Team', '3 Designers, 2 Engineers'],
  ['Deliverable', 'Brand & Content Operating System'],
];

const ecosystemNodes = [
  ['Content', PlayCircle, 'top-[4%] left-1/2 -translate-x-1/2'],
  ['Education', GraduationCap, 'right-[8%] top-[32%]'],
  ['Offers / Outputs', Box, 'bottom-[12%] right-[8%]'],
  ['Music / Media', Music, 'bottom-[12%] left-[8%]'],
  ['Community', Users, 'left-[8%] top-[32%]'],
];

const sideStats = [
  ['Community Growth', '+2.8K', 'this month', 'lineUp'],
  ['Content Throughput', '124', 'assets / month', 'bars'],
  ['Engagement Rate', '88%', 'avg. engagement', 'donut'],
  ['Output Cadence', '5', 'streams active', 'barsUp'],
];

const healthCards = [
  ['Network Uptime', '99.9%', 17],
  ['Content Flow', '92%', 16],
  ['Community Activity', '88%', 15],
  ['Education Impact', '85%', 14],
  ['Member Retention', '81%', 13],
];

const problemImpacts = [
  'Fragmented community touchpoints',
  'Generic trading content',
  'Low retention and weak identity',
  'Poor cohesion between content, education, and brand',
];

const insightPrinciples = [
  ['Culture First', 'Lead with identity and values to attract the right tribe.', Users],
  ['Content Engine', 'Consistent, multi-format content that informs, entertains, and converts.', PlayCircle],
  ['Community Loops', 'Built-in participation loops that turn members into contributors.', RefreshLoopIcon],
  ['Education With Identity', 'Learn in the language of the culture with frameworks that stick.', GraduationCap],
];

const architectureSteps = [
  ['Attract', 'Pull in the right people', MagnetIcon],
  ['Engage', 'Deliver value & spark interaction', MessageSquare],
  ['Educate', 'Teach frameworks & mindsets', BookOpen],
  ['Amplify', 'Empower member creators', Megaphone],
  ['Evolve', 'Iterate, expand, compound', Rocket],
];

const coreCapabilities = [
  ['Content System', 'Plan, produce, and distribute across channels.', Box],
  ['Brand Worldbuilding', 'Visual identity, story, and cultural narratives.', GlobeIcon],
  ['Community Infrastructure', 'Spaces, roles, and engagement loops.', Users],
  ['Music / Media Layer', 'Original music, podcasts, and ambient media.', BarChart3],
  ['Education Engine', 'Courses, playbooks, and live learning experiences.', BookOpen],
];

const stackItems = ['Notion', 'Discord', 'YouTube', 'X', 'Suno', 'Figma', 'Webflow'];

const ecosystemLayers = [
  ['Brand Layer', 'Identity, story, visual world, voice & values.', 'left-1/2 top-[8%] -translate-x-1/2'],
  ['Content Layer', 'Videos, shorts, livestreams, posts, podcasts, music.', 'left-[4%] top-[34%]'],
  ['Community Layer', 'Discord, events, roles, UGC, member experiences.', 'right-[4%] top-[34%]'],
  ['Education Layer', 'Courses, playbooks, live classes, mentorship.', 'left-[17%] bottom-[10%]'],
  ['Offer / Output Layer', 'Products, tools, alerts, signals, merch & drops.', 'right-[17%] bottom-[10%]'],
];

const motionPipeline = [
  ['01', 'Signal', 'Market intel, trends, community pulse.'],
  ['02', 'Content', 'Create, publish, distribute.'],
  ['03', 'Community', 'Engage, discuss, collaborate.'],
  ['04', 'Conversion', 'Offers, tools, memberships.'],
  ['05', 'Flywheel', 'Feedback, UGC, compounding growth.'],
];

const resultCards = [
  ['+3.7x', 'Content Output', 'vs. previous period', 'lineUp'],
  ['88%', 'Community Engagement', 'Avg. engagement rate', 'lineSteady'],
  ['+64%', 'Brand Recall', 'Aided brand lift', 'bars'],
  ['5', 'Active Content Streams', 'Consistent cadence', 'streams'],
  ['72%', 'System Reuse', 'Assets repurposed', 'donut'],
  ['4.9/5', 'Member Sentiment', 'Average rating', 'stars'],
];

const learningNotes = [
  'Culture is the moat-content is the engine.',
  'Repetition at scale builds trust and memory.',
  'Systems outperform one-off campaigns.',
  'Empower the community to co-create the brand.',
];

const impactTags = ['Culture', 'Content', 'Community', 'Education', 'Flywheel'];

const operatorNotes = [
  ['Would I build it again?', 'Yes-stronger and earlier.', Target],
  ['Biggest risk', 'Platform changes, attribution.', PlayCircle],
  ['Next iteration', 'Token-gated perks & learning bootcamps.', Box],
];

function MagnetIcon({ className, strokeWidth = 1.6 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 4v6.5a7 7 0 0 0 14 0V4h-5v6.5a2 2 0 0 1-4 0V4H5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path d="M5 8h5M14 8h5" stroke="currentColor" strokeLinecap="round" strokeWidth={strokeWidth} />
    </svg>
  );
}

function GlobeIcon({ className, strokeWidth = 1.6 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3.5 9h17M3.5 15h17M12 3c2.2 2.4 3.2 5.4 3.2 9S14.2 18.6 12 21M12 3C9.8 5.4 8.8 8.4 8.8 12S9.8 18.6 12 21" stroke="currentColor" strokeLinecap="round" strokeWidth={strokeWidth} />
    </svg>
  );
}

function RefreshLoopIcon({ className, strokeWidth = 1.6 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19.2 8.3A7.8 7.8 0 0 0 5.7 6.2L4 8.1M4 8.1V3.8M4 8.1h4.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M4.8 15.7a7.8 7.8 0 0 0 13.5 2.1L20 15.9M20 15.9v4.3M20 15.9h-4.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

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
        <span className="truncate">RETURN TO TERMINAL</span>
      </Link>

      <div className="flex shrink-0 items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-emerald-400">Case Study</span>
          <span>05 / 05</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/trading-journey-brawler-mind-v2"
            className="flex h-7 w-7 items-center justify-center border border-border-subtle text-white/45 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
            aria-label="Previous case study"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
          <Link
            to="/market-command-v2"
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

function SegmentBar({ filledSegments }: { filledSegments: number }) {
  return (
    <div className="mt-2 flex items-center gap-[2px]" aria-hidden="true">
      {Array.from({ length: 18 }, (_, index) => (
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

function MiniStatVisual({ type }: { type: string }) {
  if (type === 'donut') {
    return (
      <svg className="h-14 w-14 -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="17" fill="none" stroke="rgba(6,78,59,0.72)" strokeWidth="7" />
        <circle
          cx="24"
          cy="24"
          r="17"
          fill="none"
          stroke="rgba(52,211,153,0.86)"
          strokeDasharray="94 107"
          strokeLinecap="butt"
          strokeWidth="7"
        />
      </svg>
    );
  }

  const bars = type === 'barsUp' ? [18, 26, 35, 48, 62, 74, 88] : [28, 50, 38, 62, 44, 56, 68, 41, 74, 58, 65, 52];

  if (type === 'bars' || type === 'barsUp') {
    return (
      <div className="flex h-10 items-end gap-1" aria-hidden="true">
        {bars.map((height, index) => (
          <span key={index} className="w-1.5 bg-emerald-400/70" style={{ height: `${height}%` }} />
        ))}
      </div>
    );
  }

  const points = '0,34 22,28 44,31 66,24 88,20 110,15 132,8';

  return (
    <svg className="h-11 w-full overflow-visible" viewBox="0 0 132 44" aria-hidden="true">
      <polyline points={points} fill="none" stroke="rgba(16,185,129,0.88)" strokeWidth="1.5" />
      {points.split(' ').map((point) => {
        const [x, y] = point.split(',');
        return <circle key={point} cx={x} cy={y} r="1.6" fill="rgba(52,211,153,0.9)" />;
      })}
    </svg>
  );
}

function BrawlersEcosystemMap() {
  return (
    <div className="relative min-h-[242px] overflow-hidden border border-emerald-500/14 bg-black/28">
      <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle,rgba(16,185,129,0.65)_1px,transparent_1.3px)] [background-size:18px_18px]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 460 260" preserveAspectRatio="none" aria-hidden="true">
        <circle cx="230" cy="132" r="88" fill="none" stroke="rgba(16,185,129,0.22)" strokeWidth="1" />
        <circle cx="230" cy="132" r="62" fill="none" stroke="rgba(16,185,129,0.18)" strokeDasharray="4 8" strokeWidth="1" />
        <path d="M230 67 L230 94" stroke="rgba(52,211,153,0.78)" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path d="M302 117 L264 126" stroke="rgba(52,211,153,0.78)" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path d="M283 196 L257 166" stroke="rgba(52,211,153,0.78)" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path d="M177 196 L203 166" stroke="rgba(52,211,153,0.78)" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path d="M158 117 L196 126" stroke="rgba(52,211,153,0.78)" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <defs>
          <marker id="arrow" markerHeight="6" markerWidth="6" orient="auto" refX="5" refY="3">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(52,211,153,0.78)" />
          </marker>
        </defs>
      </svg>

        <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-emerald-400/70 bg-black/70 text-[38px] font-semibold leading-none text-emerald-400 shadow-[0_0_28px_rgba(16,185,129,0.2)]">
          BB
        </div>

      {ecosystemNodes.map(([label, Icon, position]) => (
        <div key={label as string} className={`absolute ${position as string} flex w-28 flex-col items-center text-center`}>
          <div className="mb-2 flex h-11 w-11 items-center justify-center border border-emerald-500/45 bg-black/58 text-emerald-400">
            {React.createElement(Icon as React.ElementType, { className: 'h-5 w-5', strokeWidth: 1.6 })}
          </div>
          <div className="text-mono-3xs uppercase text-white/56">{label as string}</div>
        </div>
      ))}
    </div>
  );
}

function BrawlersCommandCenter() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden border border-emerald-500/22 bg-bg-surface/70 shadow-[0_0_28px_rgba(16,185,129,0.04),inset_0_0_22px_rgba(16,185,129,0.03)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(16,185,129,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.16)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative">
        <header className="flex min-w-0 items-center justify-between gap-3 border-b border-emerald-500/15 bg-white/[0.018] px-3 py-2.5 sm:px-4">
          <div className="flex min-w-0 items-center gap-2 text-mono-xs uppercase text-white/62">
            <Menu size={14} strokeWidth={1.5} className="shrink-0 text-white/45" />
            <span className="min-w-0 truncate">BRAWL_HQ // COMMAND CENTER</span>
          </div>
          <span className="flex shrink-0 items-center gap-2 text-mono-3xs uppercase text-emerald-400">
            Link: Secure
            <span className="h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.45)]" />
          </span>
        </header>

        <div className="p-3 sm:p-4">
          <div className="grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-[116px_minmax(0,1fr)_172px]">
            <aside className="flex min-h-full flex-col border border-emerald-500/18 bg-black/18 lg:row-span-2">
              {commandModes.map(({ label, icon: Icon, active }) => (
                <div
                  key={label}
                  className={`flex flex-1 items-center gap-3 border-b border-emerald-500/10 px-3 py-3 text-mono-xs uppercase last:border-b-0 ${
                    active
                      ? 'bg-emerald-500/12 text-emerald-400 shadow-[inset_2px_0_0_rgba(16,185,129,0.65)]'
                      : 'text-white/48'
                  }`}
                >
                  <Icon size={15} strokeWidth={1.7} />
                  <span>{label}</span>
                </div>
              ))}
            </aside>

            <section className="min-w-0 border border-emerald-500/16 bg-black/18 p-2.5">
              <div className="mb-2 text-mono-xs uppercase text-emerald-400">Ecosystem Map</div>
              <BrawlersEcosystemMap />
            </section>

            <aside className="grid min-w-0 grid-cols-1 border border-emerald-500/12 bg-black/22">
              {sideStats.map(([label, value, copy, visual], index) => (
                <div key={label} className={`${index > 0 ? 'border-t border-emerald-500/10' : ''} p-3`}>
                  <div className="text-mono-3xs uppercase text-emerald-400">{label}</div>
                  <div className="mt-1 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-mono text-[18px] leading-none text-emerald-400 tabular-nums">{value}</div>
                      <div className="mt-1 text-mono-3xs uppercase text-white/58">{copy}</div>
                    </div>
                    <div className="min-w-[52px] flex-1">
                      <MiniStatVisual type={visual} />
                    </div>
                  </div>
                </div>
              ))}
            </aside>

            <section className="border border-emerald-500/16 bg-black/18 p-3 lg:col-span-2">
              <div className="mb-3 text-mono-xs uppercase text-emerald-400">System Health</div>
              <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-5">
                {healthCards.map(([label, value, filledSegments]) => (
                  <div key={label} className="min-w-0 border border-emerald-500/12 bg-black/20 p-2.5">
                    <div className="mb-2 truncate text-mono-3xs uppercase text-white/48">{label}</div>
                    <div className="font-mono text-[15px] leading-none text-emerald-400 tabular-nums">{value}</div>
                    <SegmentBar filledSegments={Number(filledSegments)} />
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-end gap-x-5 gap-y-2 px-1 text-mono-3xs uppercase text-white/45">
            <span>Last Sync: 17:24:11Z</span>
            <span className="hidden h-4 w-px bg-emerald-500/15 sm:block" />
            <span className="flex items-center gap-2 text-emerald-400">
              Status: Active
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
    <section className="relative mb-5 grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1.1fr]">
      <div className="min-w-0">
        <div className="mb-4 inline-flex w-fit max-w-full border border-emerald-500/26 bg-emerald-500/5 px-3 py-1 text-mono-xs uppercase text-white/55">
          <span className="text-emerald-400">BRAWL_HQ</span>
          <span className="px-2 text-emerald-500/70">//</span>
          <span>Content & Community System</span>
        </div>

        <div className="mb-3">
          <h1 className="font-space-grotesk text-[42px] font-medium uppercase leading-[0.98] tracking-[0] text-text-primary sm:text-[58px] lg:text-[58px]">
            Blockchain<br />Brawlers
          </h1>
          <h2 className="mt-3 text-mono-base uppercase text-emerald-400">
            Trader Culture Operating System
          </h2>
        </div>

        <p className="max-w-[470px] text-mono-base font-mono leading-relaxed text-white/62">
          A brand and content engine built to unite traders through media, music, education, and community infrastructure. More than content-this is a self-reinforcing system that turns culture into conviction and participation.
        </p>

        <div className="mt-8 grid min-w-0 grid-cols-2 border-y border-dashed border-border-subtle py-3 text-mono-xs uppercase sm:grid-cols-4">
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

        <div className="mt-5 flex flex-wrap gap-3 sm:flex-nowrap sm:gap-2">
          <button className="inline-flex max-w-full items-center gap-3 border border-emerald-700 bg-bg-surface px-3 py-2 text-mono-xs uppercase tracking-widest text-emerald-500 transition-colors hover:bg-emerald-500/10 sm:px-4">
            <span className="whitespace-nowrap">View System In Action</span>
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.6} />
          </button>
          <a
            href={blockchainBrawlersBrief.pdfUrl}
            download
            className="inline-flex max-w-full items-center gap-3 border border-border-subtle bg-transparent px-3 py-2 text-mono-xs uppercase tracking-widest text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary sm:px-4"
          >
            <span className="whitespace-nowrap">Download Case Brief</span>
            <Download className="h-4 w-4 shrink-0" strokeWidth={1.6} />
          </a>
        </div>
      </div>

      <div className="flex min-w-0 items-center">
        <BrawlersCommandCenter />
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
        <div className={`text-body-sm font-mono text-white/58 ${number === '02' ? 'max-w-[68ch]' : ''}`}>
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
          <StudySectionHeader icon={AlertTriangle} number="01" title="The Problem">
            <p className="text-mono-label leading-relaxed text-white/72">
              Most trading communities are fragmented, low-trust, repetitive, and hard to differentiate. Content is scattered, identity is weak, and education often lacks energy or belonging.
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
              When a trading brand behaves like a cultural operating system-not just a content page-it creates stronger loyalty, clearer identity, and self-reinforcing participation across every touchpoint.
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

function BrawlersEcosystemOverview() {
  return (
    <div className="relative flex min-h-[430px] flex-1 flex-col overflow-hidden border border-emerald-500/18 bg-black/20 p-3">
      <div className="mb-2 text-center text-mono-sm uppercase text-white/62">Blockchain Brawlers Ecosystem</div>
      <div className="relative min-h-[360px] flex-1">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 260" preserveAspectRatio="none" aria-hidden="true">
          <path d="M280 64 V104" stroke="rgba(52,211,153,0.72)" strokeWidth="1.5" markerEnd="url(#brawlArrow)" />
          <path d="M210 132 H248" stroke="rgba(52,211,153,0.72)" strokeWidth="1.5" markerEnd="url(#brawlArrow)" />
          <path d="M350 132 H312" stroke="rgba(52,211,153,0.72)" strokeWidth="1.5" markerEnd="url(#brawlArrow)" />
          <path d="M238 198 H270" stroke="rgba(52,211,153,0.72)" strokeWidth="1.5" markerEnd="url(#brawlArrow)" />
          <path d="M322 198 H290" stroke="rgba(52,211,153,0.72)" strokeWidth="1.5" markerEnd="url(#brawlArrow)" />
          <path d="M168 103 C150 78 156 57 196 57 H247" fill="none" stroke="rgba(52,211,153,0.72)" strokeWidth="1.5" markerEnd="url(#brawlArrow)" />
          <path d="M392 103 C410 78 404 57 364 57 H313" fill="none" stroke="rgba(52,211,153,0.72)" strokeWidth="1.5" markerEnd="url(#brawlArrow)" />
          <path d="M420 162 C444 185 432 220 382 220 H352" fill="none" stroke="rgba(52,211,153,0.72)" strokeWidth="1.5" markerEnd="url(#brawlArrow)" />
          <defs>
            <marker id="brawlArrow" markerHeight="6" markerWidth="6" orient="auto" refX="5" refY="3">
              <path d="M0,0 L6,3 L0,6 Z" fill="rgba(52,211,153,0.72)" />
            </marker>
          </defs>
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-emerald-400/70 bg-black/72 text-[30px] font-semibold leading-none text-emerald-400 shadow-[0_0_22px_rgba(16,185,129,0.18)]">
          BB
        </div>

        {ecosystemLayers.map(([title, copy, position]) => (
          <div key={title} className={`absolute z-10 w-[164px] border border-emerald-500/22 bg-black/70 p-3 text-center ${position}`}>
            <div className="mb-2 text-mono-xs uppercase text-emerald-400">{title}</div>
            <p className="text-mono-2xs leading-relaxed text-white/62">{copy}</p>
          </div>
        ))}
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
            <div className="grid min-w-0 grid-cols-1 items-stretch gap-1 sm:grid-cols-[1fr_1.25rem_1fr_1.25rem_1fr_1.25rem_1fr_1.25rem_1fr]">
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
            <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-5">
              {coreCapabilities.map(([title, copy, Icon]) => (
                <div key={title as string} className="min-w-0 border border-emerald-500/14 bg-black/22 p-3 text-center">
                  {React.createElement(Icon as React.ElementType, {
                    className: 'mx-auto mb-3 h-6 w-6 text-emerald-400',
                    strokeWidth: 1.6,
                  })}
                  <div className="mb-2 text-mono-2xs uppercase text-white/72">{title as string}</div>
                  <p className="text-mono-3xs leading-relaxed text-white/55">{copy as string}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border border-emerald-500/18 bg-black/20 p-3">
            <div className="mb-2 text-mono-2xs uppercase text-emerald-400">Stack</div>
            <div className="grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-7">
              {stackItems.map((item) => (
                <span
                  key={item}
                  className="min-w-0 border border-emerald-500/18 bg-black/24 px-3 py-2 text-center text-mono-3xs uppercase text-white/62"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>

      <aside className="relative flex min-w-0 flex-col border border-border-subtle bg-black/18 p-4 sm:p-5">
        <CornerSquares />
        <div className="mb-4 text-mono-label uppercase text-emerald-400">System Overview</div>
        <BrawlersEcosystemOverview />
      </aside>
    </section>
  );
}

function SystemInMotionSection() {
  return (
    <section className="relative mb-5 border border-border-subtle bg-black/18 p-4 sm:p-5">
      <CornerSquares />
      <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[0.42fr_1.58fr]">
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
          <div className="relative min-h-[260px] flex-1 overflow-hidden border border-emerald-500/14 bg-black/30">
            <img
              src={blockchainBrawlersSystemInMotionMockup}
              alt="Blockchain Brawlers live system preview"
              className="h-full min-h-[260px] w-full object-contain"
            />
          </div>
        </section>
      </div>
    </section>
  );
}

function ResultSparkline({ type }: { type: string }) {
  if (type === 'bars') {
    const bars = [34, 64, 74, 68, 62, 78, 88, 12, 76, 66];

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

  if (type === 'streams') {
    const rows = [
      [82, 56, 74],
      [64, 88, 58],
      [90, 48, 78],
      [72, 68, 86],
    ];

    return (
      <div className="mt-5 grid h-12 grid-cols-3 gap-x-3 gap-y-2" aria-hidden="true">
        {rows.flatMap((row, rowIndex) =>
          row.map((width, colIndex) => (
            <span
              key={`${rowIndex}-${colIndex}`}
              className="h-1.5 border border-emerald-500/15 bg-emerald-500/35"
              style={{ width: `${width}%` }}
            />
          )),
        )}
      </div>
    );
  }

  if (type === 'donut') {
    return (
      <div className="mt-4 flex h-12 items-center justify-center" aria-hidden="true">
        <svg className="h-14 w-14 -rotate-90" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="17" fill="none" stroke="rgba(6,78,59,0.72)" strokeWidth="7" />
          <circle
            cx="24"
            cy="24"
            r="17"
            fill="none"
            stroke="rgba(52,211,153,0.86)"
            strokeDasharray="77 107"
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
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${index < 4 ? 'fill-current' : ''}`}
            strokeWidth={1.4}
          />
        ))}
      </div>
    );
  }

  const isUp = type === 'lineUp';
  const points = isUp
    ? '0,39 22,34 44,28 66,23 88,20 110,15 132,7 154,10 176,6 198,13 220,5'
    : '0,33 20,28 40,19 60,23 80,18 100,25 120,17 140,13 160,10 180,8 200,7 220,6';

  return (
    <svg className="mt-4 h-12 w-full overflow-visible" viewBox="0 0 220 48" role="img" aria-label="">
      <polyline points={points} fill="none" stroke="rgba(16,185,129,0.88)" strokeWidth="1.5" />
      {points.split(' ').map((point) => {
        const [x, y] = point.split(',');
        return <circle key={point} cx={x} cy={y} r="1.7" fill="rgba(52,211,153,0.9)" />;
      })}
      <path d={`M ${points.replaceAll(' ', ' L ')} L 220 48 L 0 48 Z`} fill="rgba(16,185,129,0.08)" />
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
            <div className="mb-3 font-mono text-[24px] leading-none text-emerald-400 tabular-nums">{value}</div>
            <div className="text-body-base font-normal tracking-[0] text-text-primary">{label}</div>
            <p className="text-body-xs font-mono text-white/55">{copy}</p>
            <ResultSparkline type={visual} />
          </article>
        ))}
      </div>
    </section>
  );
}

function TakeawaySection() {
  return (
    <section className="relative mb-16 grid min-w-0 grid-cols-1 border border-border-subtle bg-black/18 lg:grid-cols-[0.95fr_1.28fr_0.95fr]">
      <CornerSquares />

      <div className="min-w-0 border-b border-border-subtle p-4 sm:p-5 lg:border-b-0 lg:border-r">
        <div className="mb-4 flex items-center gap-2 text-mono-label uppercase text-emerald-400">
          <span>06</span>
          <span>//</span>
          <span>Takeaway</span>
        </div>

        <div className="border border-emerald-500/18 bg-black/20 p-4">
          <div className="mb-4 text-mono-2xs uppercase text-emerald-400">What I Learned</div>
          <ul className="space-y-4">
            {learningNotes.map((note) => (
              <li key={note} className="grid min-w-0 grid-cols-[1.2rem_minmax(0,1fr)] gap-3">
                <CheckSquare className="mt-0.5 h-3.5 w-3.5 text-white/52" strokeWidth={1.6} />
                <span className="text-mono-2xs leading-relaxed text-white/72">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="min-w-0 border-b border-border-subtle p-4 sm:p-5 lg:border-b-0 lg:border-r">
        <div className="grid min-w-0 grid-cols-[3.4rem_minmax(0,1fr)] gap-4 border border-emerald-500/18 bg-black/20 p-4">
          <div className="flex h-11 w-11 items-center justify-center text-emerald-400">
            <Target className="h-9 w-9" strokeWidth={1.6} />
          </div>
          <div className="min-w-0">
            <div className="mb-3 text-mono-label uppercase text-emerald-400">Strategic Impact</div>
            <p className="max-w-[54ch] text-mono-2xs leading-relaxed text-white/72">
              Blockchain Brawlers evolved into a repeatable operating system-uniting media, music, education, and community under one brand world. This system drives loyalty, creates compounding content value, and opens scalable monetization and owned-audience opportunities.
            </p>
          </div>

          <div className="col-span-full mt-1 grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-5">
            {impactTags.map((tag) => (
              <span
                key={tag}
                className="border border-emerald-500/22 bg-black/28 px-3 py-2 text-center text-mono-2xs uppercase text-emerald-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <aside className="min-w-0 p-4 sm:p-5">
        <div className="mb-4 text-mono-label uppercase text-emerald-400">Operator Notes</div>
        <div className="border border-emerald-500/18 bg-black/20 p-4">
          <div className="space-y-5">
            {operatorNotes.map(([label, value, Icon]) => (
              <div key={label as string} className="grid min-w-0 grid-cols-[2rem_minmax(0,1fr)] gap-3">
                {React.createElement(Icon as React.ElementType, {
                  className: 'h-7 w-7 text-emerald-400',
                  strokeWidth: 1.6,
                })}
                <div className="min-w-0">
                  <div className="mb-1 text-mono-2xs uppercase text-emerald-400">{label as string}</div>
                  <p className="text-mono-2xs leading-relaxed text-white/72">{value as string}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}

export function BlockchainBrawlersV2Page() {
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
        storageKey="case-brief-dock:blockchain-brawlers"
        title="Blockchain Brawlers"
        description="A compact PDF dossier of the system build."
        coverImage={blockchainBrawlersBriefCover}
        coverAlt="Blockchain Brawlers case brief cover"
        pdfUrl={blockchainBrawlersBrief.pdfUrl}
        shareUrl={blockchainBrawlersBrief.shareUrl}
        discussHref="/contact?case=blockchain-brawlers"
        contactHref="/contact?case=blockchain-brawlers"
      />
    </div>
  );
}
