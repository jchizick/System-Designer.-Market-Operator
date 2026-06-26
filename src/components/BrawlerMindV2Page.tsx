import React from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Eye,
  FileText,
  Landmark,
  Layers,
  Lightbulb,
  Menu,
  MoveRight,
  PlayCircle,
  RefreshCw,
  ShieldCheck,
  Star,
  SlidersHorizontal,
  Target,
  UserRound,
} from 'lucide-react';
import { Footer } from './Footer';
import { CaseBriefDock } from './CaseBriefDock';
import { TopBar } from './TopBar';
import brawlerMindBook from '../assets/brawler-mind-book-2.png';
import brawlerMindChartArtifact from '../assets/brawler-mind-chart-artifact.png';
import brawlerMindBriefCover from '../assets/the-brawler-mind-brief-cover.png';

const brawlerMindBrief = {
  pdfUrl: 'https://ybnjfz0v2gs31z0q.public.blob.vercel-storage.com/the-brawler-mind-brief.pdf',
  shareUrl: '/trading-journey-brawler-mind-v2',
};

const projectDetails = [
  ['Role', 'Lead Designer & System Architect'],
  ['Duration', '16 Weeks'],
  ['Team', '2 Designers, 1 Strategist'],
  ['Deliverable', 'Book, Framework, Content Engine'],
];

const problemImpacts = [
  'Chasing setups instead of executing plans',
  'Inconsistent performance and self-sabotage',
  'Overtrading and poor risk management',
  'Confusion, doubt, and lack of conviction',
  'Knowledge without integration or identity',
];

const insightPrinciples = [
  ['Principles First', 'Anchor decisions in timeless truths.', Landmark],
  ['Decision Frameworks', 'Turn chaos into clear choices.', Target],
  ['Identity & Language', 'Speak and think like the operator.', UserRound],
  ['Pressure Tested', 'Built for real markets, not ideal ones.', ShieldCheck],
];

const architectureSteps = [
  ['Observe', 'See the market clearly', Eye],
  ['Interpret', 'Find meaning in context', Brain],
  ['Frame', 'Build the plan with edges', SlidersHorizontal],
  ['Execute', 'Carry out with discipline', UserRound],
  ['Review', 'Learn, adapt, compound', ShieldCheck],
];

const coreCapabilities = [
  ['Philosophy Design', 'Codify beliefs, values, and operating rules.'],
  ['Decision Models', 'Frameworks for probability, risk, and conviction.'],
  ['Educational Framework', 'Structure learning paths and concept progression.'],
  ['Content System', 'Books, essays, notes, and framework assets.'],
  ['Reflection Loop', 'Review, journal, score, and improve.'],
];

const overviewCards = [
  ['Frameworks', 'Mental models & decision systems', Brain],
  ['Content Engine', 'Books, essays, notes, templates, prompts', BookOpen],
  ['Education System', 'Courses, lessons, guides, playbooks', Layers],
  ['Decision Tools', 'Checklists, routines, journals, scores', ClipboardCheck],
];

const resultCards = [
  ['+3.2x', 'Decision clarity', 'self-rated improvement', 'lineUp'],
  ['87%', 'Framework adoption', 'active users', 'donut'],
  ['+61%', 'Recall / retention', 'across content', 'bars'],
  ['5', 'Active content streams', 'books, lessons, notes', 'icons'],
  ['74%', 'System reuse', 'templates & tools', 'segments'],
  ['4.9/5', 'Reader / member sentiment', 'average rating', 'stars'],
];

const frameworkRows = [
  ['01', 'Market & Mind', 'Understand the battlefield within and beyond.'],
  ['02', 'B.R.A.W.L Process', 'A repeatable process for high-probability execution.'],
  ['03', 'Execution Discipline', 'Discipline is the edge that compounds.'],
  ['04', 'Trade Review', 'Extract. Learn. Improve. Without emotion.'],
  ['05', '8 Circuits', 'Performance circuits that build the operator.'],
];

const learningNotes = [
  "Philosophy without structure doesn't change outcomes.",
  'Repetition through systems creates conviction.',
  'Identity drives consistency more than motivation.',
  "Education becomes powerful when it's applied.",
  'Operators are built - not inspired.',
];

const impactItems = [
  ['Mental Edge', 'Clearer thinking under pressure', Brain],
  ['Decision Systems', 'Repeatable execution framework', Target],
  ['Operator Identity', 'Shared language for disciplined traders', UserRound],
];

const operatorNotes = [
  ['Would I build it again?', 'Absolutely.'],
  ['Biggest risk', 'Overcomplicating simplicity.'],
  ['Next iteration', 'Mobile app + AI coach.'],
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
        <span className="truncate">RETURN TO TERMINAL</span>
      </Link>

      <div className="flex shrink-0 items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-emerald-400">Case Study</span>
          <span>04 / 05</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/algonquin-dashboard-v2"
            className="flex h-7 w-7 items-center justify-center border border-border-subtle text-white/45 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
            aria-label="Previous case study"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
          <Link
            to="/blockchain-brawlers-v2"
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

function BrawlerMindControlCenter() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden border border-emerald-500/22 bg-bg-surface/70 shadow-[0_0_28px_rgba(16,185,129,0.04),inset_0_0_22px_rgba(16,185,129,0.03)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(16,185,129,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.16)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative">
        <header className="flex min-w-0 items-center justify-between gap-3 border-b border-emerald-500/15 bg-white/[0.018] px-3 py-2.5 sm:px-4">
          <div className="flex min-w-0 items-center gap-2 text-mono-xs uppercase text-white/62">
            <Menu size={14} strokeWidth={1.5} className="shrink-0 text-white/45" />
            <span className="min-w-0 truncate">BRAWLER_MIND // CONTROL CENTER</span>
          </div>
          <span className="flex shrink-0 items-center gap-2 text-mono-3xs uppercase text-emerald-400">
            Link: Secure
            <span className="h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.45)]" />
          </span>
        </header>

        <div className="p-3 sm:p-3">
          <div className="min-w-0">
            <section className="min-w-0 border border-emerald-500/16 bg-black/18 p-2.5">
              <div className="text-mono-xs uppercase text-emerald-400">Mental Operating System</div>
              <p className="mt-0.5 max-w-[42rem] text-mono-3xs leading-snug text-white/45">
                A trading psychology field manual structured into repeatable lessons, rituals, and execution rules.
              </p>
              <div className="mt-0.5 text-mono-3xs uppercase text-white/34">
                Foundation → Framework → Content → Training → Deploy
              </div>
              <div className="mt-2 grid min-w-0 grid-cols-1 gap-2.5 xl:grid-cols-[0.79fr_1.21fr]">
                <div className="relative min-h-[185px] overflow-hidden border border-emerald-500/14 bg-black/30">
                  <img
                    src={brawlerMindBook}
                    alt="The Brawler Mind book cover"
                    className="h-full min-h-[185px] w-full object-cover object-[32%_48%] opacity-90"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_46%_48%,transparent_0_48%,rgba(0,0,0,0.52)_100%)]" />
                </div>
                <div className="min-w-0 border border-emerald-500/14 bg-black/20 p-2.5">
                  <div className="mb-1.5 text-mono-2xs uppercase text-emerald-400">The Brawler Mind Framework</div>
                  <div className="space-y-1.5">
                    {frameworkRows.map(([number, title, copy]) => (
                      <div key={number} className="grid min-w-0 grid-cols-[1.75rem_minmax(0,1fr)] gap-2 border border-emerald-500/10 bg-black/16 px-2 py-1.5">
                        <div className="text-mono-3xs text-emerald-400">{number}</div>
                        <div className="min-w-0">
                          <div className="text-mono-3xs uppercase text-white/72">{title}</div>
                          <p className="text-mono-3xs leading-snug text-white/52">{copy}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-2 border border-emerald-500/16 bg-black/18 px-3 py-2">
            <div className="flex min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-1 text-mono-3xs uppercase">
              
              {/* <span className="text-white/44">Design → Execute → Evolve</span> */}
              <span className="border border-emerald-500/20 bg-black/24 px-2 py-1 text-emerald-400/72">
                Built in the markets · Engineered in discipline
              </span>
              <span className="text-white/52">Systems · Discipline · Repetition</span>
            </div>
          </section>

          <div className="mt-2 flex flex-wrap items-center justify-end gap-x-5 gap-y-1 px-1 text-mono-3xs uppercase text-white/45">
            <span>Last Sync: 17:37:11</span>
            <span className="hidden h-4 w-px bg-emerald-500/15 sm:block" />
            <span className="flex items-center gap-2 text-emerald-400">
              Status: Deployed
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
          <span className="text-emerald-400">BRAWLER_MIND</span>
          <span className="px-2 text-emerald-500/70">//</span>
          <span>Trading Philosophy System</span>
        </div>

        <div className="mb-3">
          <h1 className="font-space-grotesk text-[42px] font-medium uppercase leading-[0.98] tracking-[-.01em] text-text-primary sm:text-[58px] lg:whitespace-nowrap lg:text-[50px] xl:text-[52px]">
            The Brawler<br />Mind
          </h1>
          <h2 className="mt-3 text-mono-base uppercase text-emerald-400">
            Mental Operating System For Traders
          </h2>
        </div>

        <p className="max-w-[470px] text-mono-base font-mono leading-relaxed text-white/62">
          A trading philosophy transformed into a book, content engine, and decision-support framework. Built to help traders operate with clarity, discipline, and conviction under pressure-turning mindset into measurable edge.
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
          <a
            href={brawlerMindBrief.pdfUrl}
            download
            className="inline-flex max-w-full items-center gap-3 border border-emerald-700 bg-bg-surface px-4 py-2 text-mono-xs uppercase tracking-widest text-emerald-500 transition-colors hover:bg-emerald-500/10"
          >
            <span>OPEN CASE BRIEF</span>
            <FileText className="h-4 w-4" strokeWidth={1.6} />
          </a>
          <a href="#system-in-motion" className="inline-flex max-w-full items-center gap-3 border border-border-subtle bg-transparent px-4 py-2 text-mono-xs uppercase tracking-widest text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary">
            <span>VIEW SYSTEM IN ACTION</span>
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </a>
        </div>
      </div>

      <div className="flex min-w-0 items-center">
        <BrawlerMindControlCenter />
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
          <StudySectionHeader icon={AlertTriangle} number="01" title="The Problem">
            <p className="text-mono-label leading-relaxed text-white/72">
              Most traders lack a durable mental model. They are reactive instead of intentional, emotionally inconsistent, overloaded by noise, and unable to translate information into repeatable decisions under pressure.
            </p>

            <div className="mt-5 text-mono-label uppercase text-emerald-400">Impact</div>
            <ul className="mt-2 space-y-0.5">
              {problemImpacts.map((impact) => (
                <li key={impact} className="flex gap-1.5 leading-snug">
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-emerald-400/70" />
                  <span className="px-1 text-mono-label leading-relaxed text-white/72">{impact}</span>
                </li>
              ))}
            </ul>
          </StudySectionHeader>
        </div>

        <div className="min-w-0 lg:pl-8">
          <StudySectionHeader icon={Lightbulb} number="02" title="The Insight">
            <p className="text-mono-label leading-relaxed text-white/72">
              If trading philosophy is structured into principles, language, frameworks, and training loops, it becomes a real operating system. Not just inspiration - an internal architecture that shapes how you think, decide, and execute.
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

function BrawlerArchitectureMap() {
  return (
    <div className="border border-emerald-500/18 bg-black/20 px-3 py-2.5">
      <div className="mb-2 text-center text-mono-2xs uppercase text-white/62">The Brawler Mind Architecture</div>

      <div className="mx-auto max-w-[20rem] border border-emerald-500/28 bg-black/28 px-3 py-2 text-center shadow-[inset_0_0_18px_rgba(16,185,129,0.03)] max-sm:max-w-full">
        <div className="text-mono-2xs uppercase text-emerald-400">Core Philosophy</div>
        <p className="text-mono-3xs leading-relaxed text-white/58">Mindset → Principles → Values</p>
      </div>

      <div className="relative mx-auto hidden h-4 w-[72%] sm:block" aria-hidden="true">
        <div className="absolute left-0 right-0 bottom-0 h-px bg-emerald-500/24" />
        <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-emerald-500/45 after:absolute after:bottom-[-1px] after:left-1/2 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:rotate-45 after:border-b after:border-r after:border-emerald-400/60" />
      </div>
      <div
        className="mx-auto h-3 w-px bg-emerald-500/45 after:block after:h-1.5 after:w-1.5 after:translate-x-[-2.5px] after:translate-y-[9px] after:rotate-45 after:border-b after:border-r after:border-emerald-400/55 sm:hidden"
        aria-hidden="true"
      />

      <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {overviewCards.map(([title, copy, Icon]) => (
          <div key={title as string} className="min-w-0 border border-emerald-500/18 bg-black/22 px-2 py-2 text-center">
            {React.createElement(Icon as React.ElementType, {
              className: 'mx-auto mb-2 h-5 w-5 text-emerald-400',
              strokeWidth: 1.6,
            })}
            <div className="mb-1.5 text-mono-2xs uppercase text-emerald-400">{title as string}</div>
            <p className="text-mono-3xs text-white/55">{copy as string}</p>
          </div>
        ))}
      </div>

      <div className="relative mx-auto hidden h-4 w-[72%] sm:block" aria-hidden="true">
        <div className="absolute left-0 right-0 top-0 h-px bg-emerald-500/24" />
        <div className="absolute left-0 right-0 top-0 grid grid-cols-4">
          {overviewCards.map(([title]) => (
            <span key={title as string} className="mx-auto h-4 w-px bg-emerald-500/38" />
          ))}
        </div>
        <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-emerald-500/45 after:absolute after:bottom-[-1px] after:left-1/2 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:rotate-45 after:border-b after:border-r after:border-emerald-400/60" />
      </div>
      <div
        className="mx-auto h-3 w-px bg-emerald-500/45 after:block after:h-1.5 after:w-1.5 after:translate-x-[-2.5px] after:translate-y-[9px] after:rotate-45 after:border-b after:border-r after:border-emerald-400/55 sm:hidden"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[72%] border border-emerald-500/28 bg-black/28 px-3 py-2 text-center shadow-[inset_0_0_18px_rgba(16,185,129,0.03)] max-sm:max-w-full">
        <div className="text-mono-2xs uppercase text-emerald-400">Operator Application Layer</div>
        <p className="text-mono-3xs leading-relaxed text-white/58">Apply → Execute → Reflect → Adapt</p>
      </div>

      <div
        className="mx-auto h-3 w-px bg-emerald-500/45 after:block after:h-1.5 after:w-1.5 after:translate-x-[-2.5px] after:translate-y-[9px] after:rotate-45 after:border-b after:border-r after:border-emerald-400/55"
        aria-hidden="true"
      />

      <div className="mb-0.5 mx-auto max-w-[72%] border border-emerald-500/28 bg-black/28 px-3 py-2 text-center shadow-[inset_0_0_18px_rgba(16,185,129,0.03)] max-sm:max-w-full">
        <div className="text-mono-2xs uppercase text-emerald-400">Outcomes</div>
        <p className="text-mono-3xs leading-relaxed text-white/58">Clarity → Consistency → Edge → Identity</p>
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
            <div className="mb-2 text-mono-2xs uppercase text-emerald-400">The Trader's Operating Pipeline</div>
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
            <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-5">
              {coreCapabilities.map(([title, copy]) => (
                <div key={title} className="min-w-0 border border-emerald-500/14 bg-black/22 p-2">
                  <div className="mb-2 text-mono-2xs uppercase text-white/72">{title}</div>
                  <p className="text-mono-3xs text-white/55">{copy}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <aside className="relative min-w-0 border border-border-subtle bg-black/18 p-4 sm:p-5">
        <CornerSquares />
        <div className="mb-4 text-mono-label uppercase text-emerald-400">System Overview</div>
        <BrawlerArchitectureMap />
      </aside>
    </section>
  );
}

const brawlerMotionSteps = [
  ['01', 'Context', 'Session map, levels, scenario.'],
  ['02', 'Internal State', 'Calm, focused, rule-bound.'],
  ['03', 'B.R.A.W.L Filter', 'Bias, risk, acceptance, window.'],
  ['04', 'Execution', 'Plan active, size controlled.'],
  ['05', 'Review', 'Outcome logged, lesson captured.'],
];

const internalStateRows = [
  ['Calm', '82%', [10, 11, 13, 12, 13, 14, 14], 'emerald'],
  ['Clarity', '76%', [10, 10, 11, 13, 12, 13, 13], 'emerald'],
  ['Focus', '88%', [9, 10, 12, 12, 13, 13, 14], 'emerald'],
  ['Emotion', '21%', [11, 11, 10, 11, 10, 10, 11], 'amber'],
  ['Confidence', '72%', [9, 10, 11, 10, 12, 12, 13], 'emerald'],
];

const stateSummaryRows = [
  ['Mind', 'Clear'],
  ['Body', 'Composed'],
  ['Emotion', 'Neutral'],
  ['Readiness', 'High'],
];

const principleNotes = [
  'Control what you can control Accept what you cant.',
];

const brawlFilterRows = [
  ['Bias', 'Long above acceptance'],
  ['Risk', '1R max - no chase'],
  ['Window', 'Retest after sweep'],
  ['Limit', 'Invalid below range'],
];

function MotionProcessCard({ number, title, copy }: { number: string; title: string; copy: string }) {
  const isActive = number === '03';

  return (
    <article
      className={`min-w-0 border px-3 py-2 ${
        isActive
          ? 'border-emerald-400/42 bg-emerald-400/[0.055] shadow-[inset_0_0_18px_rgba(16,185,129,0.035)]'
          : 'border-emerald-500/16 bg-black/22'
      }`}
    >
      <div className="mb-1.5 flex items-center justify-between gap-2 text-mono-3xs uppercase">
        <span className={isActive ? 'text-emerald-300' : 'text-emerald-400'}>{number}</span>
        <span className={`h-1.5 w-1.5 ${isActive ? 'bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.32)]' : 'bg-emerald-400/55'}`} />
      </div>
      <div className="text-mono-2xs uppercase text-white/78">{title}</div>
      <p className="mt-0.5 text-mono-3xs leading-snug text-white/44">{copy}</p>
    </article>
  );
}

function MotionInfoPanel({ title, children, active = false }: { title: string; children: React.ReactNode; active?: boolean }) {
  return (
    <section className="min-w-0 border border-emerald-500/18 bg-black/24">
      <div className="flex items-center gap-2 border-b border-emerald-500/14 px-3 py-2 text-mono-2xs uppercase text-emerald-400">
        {active ? <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/82" aria-hidden="true" /> : null}
        {title}
      </div>
      <div className="p-3">{children}</div>
    </section>
  );
}

function StateSparkline({ points, tone = 'emerald' }: { points: number[]; tone?: 'emerald' | 'amber' }) {
  const width = 46;
  const height = 14;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = Math.max(max - min, 1);
  const path = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - ((point - min) / range) * (height - 4) - 2;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <svg
      className={`h-3.5 w-[46px] ${tone === 'amber' ? 'text-amber-400/62' : 'text-emerald-400/48'}`}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden="true"
    >
      <polyline points={path} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.15" />
    </svg>
  );
}

function ReadinessGauge() {
  const radius = 19;
  const circumference = 2 * Math.PI * radius;
  const progress = 0.72 * circumference;

  return (
    <div className="relative flex h-[58px] w-[58px] shrink-0 items-center justify-center" aria-hidden="true">
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 58 58">
        <circle cx="29" cy="29" r={radius} fill="none" stroke="rgba(6,78,59,0.62)" strokeWidth="4" />
        <circle
          cx="29"
          cy="29"
          r={radius}
          fill="none"
          stroke="rgba(52,211,153,0.68)"
          strokeDasharray={`${progress} ${circumference - progress}`}
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>
      <div className="text-center font-mono uppercase leading-none">
        <div className="text-[12px] text-emerald-400">72%</div>
        <div className="mt-1 text-[7px] text-emerald-300/70">Ready</div>
      </div>
    </div>
  );
}

function BrawlerChartReplay() {
  return (
    <div className="relative overflow-hidden border border-emerald-400/30 bg-black/34 shadow-[0_0_24px_rgba(16,185,129,0.035),inset_0_0_24px_rgba(16,185,129,0.035)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(16,185,129,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative flex items-center justify-between border-b border-emerald-400/24 bg-emerald-400/[0.025] px-3 py-2 text-mono-3xs uppercase">
        <span className="text-emerald-400">Chart Replay // ES 5m</span>
        <span className="text-emerald-400/70">Setup: sweep + acceptance</span>
      </div>
      <img
        src={brawlerMindChartArtifact}
        alt="Brawler Mind chart replay artifact"
        className="relative block h-auto w-full object-contain object-top"
      />
    </div>
  );
}

function BrawlerSystemPreview() {
  return (
    <div className="relative min-h-[430px] flex-1 overflow-hidden border border-emerald-500/14 bg-black/30">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(16,185,129,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.14)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_34px_rgba(16,185,129,0.05)]" />

      <div className="relative overflow-x-auto p-3" tabIndex={0} aria-label="Brawler Mind system in motion preview">
        <div className="min-w-[1040px] space-y-3">
          <div className="grid grid-cols-5 gap-2">
            {brawlerMotionSteps.map(([number, title, copy]) => (
              <React.Fragment key={number}>
                <MotionProcessCard number={number} title={title} copy={copy} />
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-[184px_minmax(0,1fr)_260px] items-start gap-3">
            <aside className="space-y-3 opacity-90">
              <MotionInfoPanel title="Internal State" active>
                <div className="space-y-2 text-mono-3xs uppercase">
                  {internalStateRows.map(([label, value, points, tone]) => (
                    <div key={label as string} className="grid grid-cols-[4rem_2.4rem_2.9rem] items-center gap-1">
                      <span className={tone === 'amber' ? 'text-amber-400/78' : 'text-white/52'}>{label}</span>
                      <span className={`text-right ${tone === 'amber' ? 'text-amber-400' : 'text-emerald-400'}`}>{value}</span>
                      <StateSparkline points={points as number[]} tone={tone as 'emerald' | 'amber'} />
                    </div>
                  ))}
                </div>
              </MotionInfoPanel>

              <MotionInfoPanel title="State Summary">
                <div className="grid grid-cols-[minmax(0,1fr)_3.65rem] items-center gap-2">
                  <div className="space-y-1.5 text-mono-3xs uppercase">
                    {stateSummaryRows.map(([label, value]) => (
                      <div key={label} className="whitespace-nowrap">
                        <span className="text-emerald-400/72">{label}: </span>
                        <span className="text-emerald-300/86">{value}</span>
                      </div>
                    ))}
                  </div>
                  <ReadinessGauge />
                </div>
              </MotionInfoPanel>

              <MotionInfoPanel title="Notes / Principles">
                <div className="space-y-1.5 text-mono-3xs leading-relaxed text-white/60">
                  {principleNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </MotionInfoPanel>
            </aside>

            <BrawlerChartReplay />

            <aside className="space-y-3">
              <MotionInfoPanel title="B.R.A.W.L. Filter">
                <div className="divide-y divide-emerald-500/12 text-mono-3xs uppercase">
                  {brawlFilterRows.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[3.4rem_minmax(0,1fr)] gap-2 py-1.5 first:pt-0 last:pb-0">
                      <div className="text-emerald-400">{label}</div>
                      <div className="min-w-0 text-white/58">{value}</div>
                    </div>
                  ))}
                </div>
              </MotionInfoPanel>

              <MotionInfoPanel title="Execution Decision">
                <div className="text-mono-2xs uppercase text-emerald-400">Execute</div>
                <p className="mt-1 text-mono-3xs leading-relaxed text-white/58">
                  Entry allowed only inside the window. Size fixed. Stop predefined.
                </p>
              </MotionInfoPanel>

              <MotionInfoPanel title="Post-Trade Review">
                <div className="grid grid-cols-2 gap-2 text-mono-3xs uppercase">
                  <div>
                    <div className="text-white/42">Plan</div>
                    <div className="text-emerald-400">Followed</div>
                  </div>
                  <div>
                    <div className="text-white/42">State</div>
                    <div className="text-emerald-400">Stable</div>
                  </div>
                </div>
                <div className="mt-3 border-t border-emerald-500/12 pt-2 text-mono-3xs uppercase">
                  <span className="text-white/42">Next Focus</span>
                  <span className="px-1.5 text-emerald-400">-</span>
                  <span className="text-emerald-400">No Late Chase</span>
                </div>
              </MotionInfoPanel>
            </aside>
          </div>

          <div className="relative border border-emerald-500/18 bg-black/24 px-3 py-2 text-mono-2xs uppercase">
            <div className="absolute left-3 right-3 top-1/2 h-px -translate-y-1/2 bg-emerald-500/14" aria-hidden="true" />
            <div className="relative grid grid-cols-[1fr_1.5rem_1fr_1.5rem_1fr_1.5rem_1fr] text-center">
              {['Observe', 'Filter', 'Execute', 'Review'].map((step, index) => (
                <React.Fragment key={step}>
                  <span className={`${step === 'Filter' ? 'text-emerald-400' : 'text-white/64'} relative bg-black/80 px-2`}>
                    {step}
                    {step === 'Filter' ? (
                      <span className="absolute -bottom-2 left-1/2 h-1 w-10 -translate-x-1/2 bg-emerald-400/72 shadow-[0_0_8px_rgba(52,211,153,0.22)]" />
                    ) : null}
                  </span>
                  {index < 3 ? (
                    <span className="flex items-center justify-center bg-black/80 text-emerald-400/58">
                      <MoveRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </span>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemInMotionSection() {
  return (
    <section id="system-in-motion" className="relative mb-5 scroll-mt-24 border border-border-subtle bg-black/18 p-4 sm:p-5">
      <CornerSquares />
      <div className="mb-3">
        <div className="flex items-center gap-2 text-mono-label uppercase text-emerald-400">
          <span>04</span>
          <span>//</span>
          <span>System In Motion</span>
        </div>
        <p className="mt-1 text-mono-3xs uppercase text-white/45">
          See the setup. Filter the signal. Execute the plan. Review the result.
        </p>
      </div>
      <BrawlerSystemPreview />
    </section>
  );
}

function ResultSparkline({ type, compactOnMobile = false }: { type: string; compactOnMobile?: boolean }) {
  if (type === 'bars') {
    const bars = [38, 64, 42, 70, 48, 78, 52, 68, 84];

    return (
      <div className={`${compactOnMobile ? 'mt-0 h-16 w-24 justify-end gap-1 sm:mt-4 sm:h-12 sm:w-auto sm:justify-start sm:gap-1.5' : 'mt-4 h-12 gap-1.5'} flex items-end`} aria-hidden="true">
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
      <div className={`${compactOnMobile ? 'mt-0 h-16 w-24 sm:mt-4 sm:h-12 sm:w-auto' : 'mt-4 h-12'} flex items-center justify-center`} aria-hidden="true">
        <svg className="h-14 w-14 -rotate-90" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="17" fill="none" stroke="rgba(6,78,59,0.72)" strokeWidth="7" />
          <circle
            cx="24"
            cy="24"
            r="17"
            fill="none"
            stroke="rgba(52,211,153,0.86)"
            strokeDasharray="93 107"
            strokeLinecap="butt"
            strokeWidth="7"
          />
        </svg>
      </div>
    );
  }

  if (type === 'icons') {
    const icons = [BookOpen, FileText, PlayCircle, ClipboardCheck, Brain];

    return (
      <div className={`${compactOnMobile ? 'mt-0 w-28 gap-1 p-1.5 sm:mt-5 sm:w-auto sm:gap-1.5 sm:p-2' : 'mt-5 gap-1.5 p-2'} grid grid-cols-5 border border-emerald-500/20 bg-emerald-500/5 text-emerald-400`} aria-hidden="true">
        {icons.map((Icon, index) => (
          <span key={index} className="flex h-7 items-center justify-center border border-emerald-500/20 bg-black/24">
            <Icon className="h-4 w-4" strokeWidth={1.6} />
          </span>
        ))}
      </div>
    );
  }

  if (type === 'segments') {
    return (
      <div className={`${compactOnMobile ? 'mt-0 w-24 gap-1 sm:mt-6 sm:w-auto sm:gap-1.5' : 'mt-6 gap-1.5'} grid grid-cols-5`} aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={`h-5 border border-emerald-500/20 ${
              index < 4 ? 'bg-emerald-400/62 shadow-[0_0_8px_rgba(16,185,129,0.12)]' : 'bg-emerald-950/45'
            }`}
          />
        ))}
      </div>
    );
  }

  if (type === 'stars') {
    return (
      <div className={`${compactOnMobile ? 'mt-0 flex-wrap justify-end gap-1.5 sm:mt-6 sm:flex-nowrap sm:justify-start sm:gap-2' : 'mt-6 gap-2'} flex items-center text-emerald-400`} aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} className={`h-4 w-4 ${index < 4 ? 'fill-current' : ''}`} strokeWidth={1.4} />
        ))}
      </div>
    );
  }

  const points = '0,35 18,31 36,28 54,28 72,22 90,20 108,21 126,22 144,17 162,14 180,8';

  return (
    <svg
      className={`${compactOnMobile ? 'mt-0 h-16 w-32 sm:mt-4 sm:h-12 sm:w-full' : 'mt-4 h-12 w-full'} overflow-visible`}
      viewBox="0 0 180 48"
      role="img"
      aria-label=""
    >
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
          <article key={label} className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border border-emerald-500/20 bg-black/22 p-4 sm:block">
            <div className="min-w-0">
              <div className="mb-3 font-mono text-[24px] leading-none text-emerald-400 tabular-nums">{value}</div>
              <div className="text-body-base font-normal tracking-[0] text-text-primary">{label}</div>
              <p className="text-body-xs font-mono text-white/55">({copy})</p>
            </div>
            <div className="flex shrink-0 justify-end sm:block">
              <ResultSparkline type={visual} compactOnMobile />
            </div>
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
            <ul className="space-y-1.5">
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
            The Brawler Mind became more than a book — it became a living system for traders to think, decide, and grow. By turning philosophy into frameworks, content, and training loops, it created a repeatable path to clarity under pressure and a shared language for a global community of disciplined operators.
          </p>

          <div className="mt-5 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-3">
            {impactItems.map(([title, copy, Icon]) => (
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
                <div className="border-r border-emerald-500/18 px-2 py-1.5 text-mono-3xs uppercase leading-relaxed text-emerald-400">
                  {label}
                </div>
                <div className="px-2 py-1.5 text-mono-2xs leading-relaxed text-white/72">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrawlerMindV2Page() {
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
        storageKey="case-brief-dock:brawler-mind"
        title="The Brawler Mind"
        description="A compact PDF dossier of the system build."
        coverImage={brawlerMindBriefCover}
        coverAlt="The Brawler Mind case brief cover"
        pdfUrl={brawlerMindBrief.pdfUrl}
        shareUrl={brawlerMindBrief.shareUrl}
        discussHref="/contact?case=the-brawler-mind"
        contactHref="/contact?case=the-brawler-mind"
      />
    </div>
  );
}
