import React from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  Circle,
  ClipboardList,
  CloudSun,
  Compass,
  Database,
  Download,
  FileText,
  LayoutGrid,
  Lightbulb,
  Map,
  Menu,
  PackageCheck,
  RefreshCw,
  Route,
  Settings,
  Star,
  ShieldCheck,
  Target,
  Sun,
  Tent,
  Users,
  Zap,
} from 'lucide-react';
import { Footer } from './Footer';
import { CaseBriefDock } from './CaseBriefDock';
import { TopBar } from './TopBar';
import algonquinRouteMapHero from '../assets/algonquin-route-map-hero.png';
import fieldProtocolBriefCover from '../assets/field-protocol-brief-cover.png';

const algonquinDashboardBrief = {
  pdfUrl: 'https://ybnjfz0v2gs31z0q.public.blob.vercel-storage.com/algonquin-dashboard-brief.pdf',
  shareUrl: '/algonquin-dashboard-v2',
};

const tripModes = [
  { label: 'Plan', icon: CheckCircle2, active: true },
  { label: 'Map', icon: Map },
  { label: 'Pack', icon: PackageCheck },
  { label: 'Monitor', icon: Compass },
  { label: 'Execute', icon: FileText },
];

const readinessCards = [
  ['Readiness Score', '92%', 16],
  ['Gear Packed', '87%', 14],
  ['Meals Prepared', '80%', 13],
];

const projectDetails = [
  ['Role', 'Product Designer & System Builder'],
  ['Duration', '4 weeks'],
  ['Team', '2 people'],
  ['Deliverable', 'Trip Planning Dashboard'],
];

const problemImpacts = [
  'Scattered planning tools and sources',
  'Gear uncertainty and missing essentials',
  'Weather and conditions context switching',
  'Decision fatigue from too many variables',
  'Inconsistent trip readiness and checks',
];

const insightPrinciples = [
  ['Context First', 'Route, weather, and campsite context up front.', Map],
  ['Readiness Driven', 'Track what matters, so nothing gets missed.', CheckCircle2],
  ['Modular Planning', 'Plan in layers, adjust as conditions change.', PackageCheck],
  ['Human Decisions', 'Surface the right info so people make better calls.', Users],
];

const architectureSteps = [
  ['Route', 'Plan path & campsite', Map],
  ['Weather', 'Forecast & conditions', CloudSun],
  ['Gear', 'Pack & checklist', PackageCheck],
  ['Meals', 'Plan & provisions', ClipboardList],
  ['Logistics', 'Permits & transport', Route],
];

const coreCapabilities = [
  ['Itinerary Planning', 'Build route, campsites, and day-by-day plan.'],
  ['Route Visualization', 'Topographic map, distance, portages, elevation.'],
  ['Gear Checklist', 'Smart packing lists, weight estimates, duplicates.'],
  ['Meal Coordination', 'Meal plan, cooking gear, and food quantities.'],
  ['Readiness Tracking', 'Overall readiness score and category breakdown.'],
];

const stackItems = ['React', 'TypeScript', 'Tailwind', 'Local Data', 'Mapbox', 'Planning Logic'];

const overviewCards = [
  ['Trip Inputs', 'Route ideas, dates, party, preferences, permits, constraints.', CalendarDays],
  ['Context Layer', 'Weather, fire risk, water levels, alerts, conditions.', CloudSun],
  ['Readiness Engine', 'Rules, checklists, scoring, conflicts, recommendations.', Settings],
  ['Dashboard UI', 'Plan, monitor, adjust, and execute with clarity.', LayoutGrid],
  ['Outputs', 'Packing list, meal plan, itinerary, execution snapshot.', FileText],
];

const motionPipeline = [
  ['01', 'Plan', 'Define trip window, party, and goals.'],
  ['02', 'Map', 'Build route, review campsites.'],
  ['03', 'Pack', 'Check gear, confirm essentials.'],
  ['04', 'Check', 'Review weather, readiness score.'],
  ['05', 'Go', 'Finalize, export, head out.'],
];

const resultCards = [
  ['+89%', 'Readiness confidence', 'Before departure', 'lineUp'],
  ['-58%', 'Planning time', '6 weeks -> 2.5 weeks', 'lineDown'],
  ['-72%', 'Missing-item risk', 'Fewer forgotten essentials', 'bars'],
  ['+3.1x', 'Packing clarity', 'Clearer, lighter, smarter', 'lineDown'],
  ['84%', 'Trip coordination', 'Smoother team alignment', 'donut'],
  ['4.8/5', 'Decision confidence', 'Average rating', 'stars'],
];

const learningNotes = [
  'Operational clarity comes from unified context, not more tools.',
  'Centralized planning reduces cognitive load and decision fatigue.',
  'Readiness systems create confidence and better execution.',
  'Designing for real-world conditions drives adoption and trust.',
];

const impactMetrics = [
  ['Less Friction', 'More time outdoors', Zap],
  ['Fewer Surprises', 'Better outcomes', Settings],
  ['Repeatable System', 'Easier for every trip', Route],
];

const operatorNotes = [
  ['Would I build it again?', 'Yes.'],
  ["What I'd do differently", 'Add live weather sync earlier.'],
  ['Biggest risk', 'Too much detail without prioritization.'],
  ['Next iteration', 'Deeper route & campsite intelligence.'],
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
          <span>03 / 05</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/ai-brand-machine-synthetic-foundry-v2"
            className="flex h-7 w-7 items-center justify-center border border-border-subtle text-white/45 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
            aria-label="Previous case study"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
          <Link
            to="/trading-journey-brawler-mind-v2"
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

function RouteMapPreview() {
  return (
    <div className="relative min-h-[168px] overflow-hidden border border-emerald-500/14 bg-[#03130e]">
      <img
        src={algonquinRouteMapHero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_52%,transparent_0_45%,rgba(0,0,0,0.28)_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />
    </div>
  );
}

function TripControlCenter() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden border border-emerald-500/22 bg-bg-surface/70 shadow-[0_0_28px_rgba(16,185,129,0.04),inset_0_0_22px_rgba(16,185,129,0.03)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(16,185,129,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.16)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative">
        <header className="flex min-w-0 items-center justify-between gap-3 border-b border-emerald-500/15 bg-white/[0.018] px-3 py-2.5 sm:px-4">
          <div className="flex min-w-0 items-center gap-2 text-mono-xs uppercase text-white/62">
            <Menu size={14} strokeWidth={1.5} className="shrink-0 text-white/45" />
            <span className="min-w-0 truncate">ALG_DASH // TRIP CONTROL CENTER</span>
          </div>
          <span className="flex shrink-0 items-center gap-2 text-mono-3xs uppercase text-emerald-400">
            Link: Secure
            <span className="h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.45)]" />
          </span>
        </header>

        <div className="p-3 sm:p-2">
          <div className="min-w-0 space-y-3">
            <div className="grid min-w-0 grid-cols-1 items-stretch gap-3 sm:grid-cols-[132px_minmax(0,1fr)]">
              <aside className="border border-emerald-500/18 bg-black/18">
                {tripModes.map(({ label, icon: Icon, active }) => (
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
                        active ? 'border-emerald-400/65 text-emerald-400' : 'border-white/28 text-white/36'
                      }`}
                    >
                      <Icon size={10} strokeWidth={1.8} />
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </aside>

              <section className="min-w-0 border border-emerald-500/16 bg-black/18 p-2.5">
                <div className="mb-2 flex min-w-0 items-center gap-2 text-mono-xs uppercase">
                  <span className="text-emerald-400">Trip:</span>
                  <span className="truncate text-white/52">Algonquin Park // Maple Leaf Lake</span>
                </div>
                <div className="grid min-w-0 grid-cols-1 gap-2 lg:grid-cols-[minmax(0,1fr)_156px]">
                  <RouteMapPreview />
                  <aside className="grid min-w-0 grid-cols-1 border border-emerald-500/12 bg-black/22">
                    <div className="border-b border-emerald-500/10 p-3">
                      <div className="mb-1 text-mono-3xs uppercase text-emerald-400">Trip Window</div>
                      <div className="flex gap-2 text-mono-3xs uppercase text-white/58">
                        <CalendarDays className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/38" strokeWidth={1.6} />
                        <span>Jul 5 - Jul 8, 2026<br />4 days / 3 nights</span>
                      </div>
                    </div>
                    <div className="border-b border-emerald-500/10 p-3">
                      <div className="mb-1 text-mono-3xs uppercase text-emerald-400">Party</div>
                      <div className="flex items-center gap-2 text-mono-3xs uppercase text-white/58">
                        <Users className="h-3.5 w-3.5 text-white/38" strokeWidth={1.6} />
                        <span>2 Adults</span>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="mb-1 text-mono-3xs uppercase text-emerald-400">Permit</div>
                      <div className="flex items-center gap-2 text-mono-3xs uppercase text-white/58">
                        <Circle className="h-3.5 w-3.5 text-white/38" strokeWidth={1.6} />
                        <span>Issued</span>
                      </div>
                    </div>
                  </aside>
                </div>
              </section>
            </div>

            <section className="border border-emerald-500/16 bg-black/18 p-3">
              <div className="mb-2 text-mono-xs uppercase text-emerald-400">Readiness Overview</div>
              <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-5">
                {readinessCards.map(([label, value, filledSegments]) => (
                  <div key={label} className="min-w-0 border border-emerald-500/12 bg-black/20 p-2.5">
                    <div className="mb-2 truncate text-mono-3xs uppercase text-white/48">{label}</div>
                    <div className="font-mono text-[15px] leading-none text-emerald-400 tabular-nums">{value}</div>
                    <ReadinessBar filledSegments={Number(filledSegments)} />
                  </div>
                ))}
                <div className="min-w-0 border border-emerald-500/12 bg-black/20 p-2.5">
                  <div className="mb-1 text-mono-3xs uppercase text-white/48">Weather Check</div>
                  <div className="text-mono-xs uppercase text-emerald-400">Good</div>
                  <Sun className="mt-2 h-5 w-5 text-emerald-400" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 border border-emerald-500/12 bg-black/20 p-2.5">
                  <div className="mb-1 text-mono-3xs uppercase text-white/48">Campsite Status</div>
                  <div className="text-mono-xs uppercase text-emerald-400">Confirmed</div>
                  <Tent className="mt-2 h-5 w-5 text-emerald-400" strokeWidth={1.5} />
                </div>
              </div>
            </section>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-end gap-x-5 gap-y-2 px-1 text-mono-3xs uppercase text-white/45">
            <span>Last Sync: 17:24:18Z</span>
            <span className="hidden h-4 w-px bg-emerald-500/15 sm:block" />
            <span className="flex items-center gap-2 text-emerald-400">
              Status: Ready
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
          <span className="text-emerald-400">ALG_DASH</span>
          <span className="px-2 text-emerald-500/70">//</span>
          <span>Backcountry Planning System</span>
        </div>

        <div className="mb-3">
          <h1 className="font-space-grotesk text-[42px] font-medium uppercase leading-[0.98] tracking-[-.01em] text-text-primary sm:text-[50px] lg:text-[52px]">
            Algonquin<br />Dashboard
          </h1>
          <h2 className="mt-3 text-mono-base uppercase text-emerald-400">
            Backcountry Trip Planning System
          </h2>
        </div>

        <p className="max-w-[470px] text-mono-base font-mono leading-relaxed text-white/62">
          A real-time planning and decision-support dashboard built to coordinate route planning, gear readiness, weather context, meals, logistics, and campsite execution for an Algonquin Park backcountry trip.
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
          <a href="#system-in-motion" className="inline-flex max-w-full items-center gap-3 border border-emerald-700 bg-bg-surface px-4 py-2 text-mono-xs uppercase tracking-widest text-emerald-500 transition-colors hover:bg-emerald-500/10">
            <span>View System In Action</span>
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </a>
          <a
            href={algonquinDashboardBrief.pdfUrl}
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
          <StudySectionHeader icon={AlertTriangle} number="01" title="The Problem">
            <p className="text-mono-label leading-relaxed text-white/72">
              Trip planning was fragmented across notes, browser tabs, weather apps, maps, packing lists, and messages. It created friction, forgotten items, duplicated effort, and reduced confidence before departure.
            </p>

            <ul className="mt-5 space-y-0.5">
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
              By combining route context, packing status, meals, weather, and logistics into one interface, the trip becomes easier to coordinate and execute.
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

          <section className="border border-emerald-500/18 bg-black/20 p-3">
            <div className="mb-2 text-mono-2xs uppercase text-emerald-400">Stack</div>
            <div className="grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
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

      <aside className="relative min-w-0 border border-border-subtle bg-black/18 p-4 sm:p-5">
        <CornerSquares />
        <div className="mb-4 text-mono-label uppercase text-emerald-400">System Overview</div>
        <div className="border border-emerald-500/18 bg-black/20 p-3">
          <div className="mb-3 text-center text-mono-xs uppercase text-white/62">Algonquin Dashboard Architecture</div>

          <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-5">
            {overviewCards.map(([title, copy, Icon]) => (
              <div key={title as string} className="min-w-0 border border-emerald-500/18 bg-black/22 p-2 text-center">
                {React.createElement(Icon as React.ElementType, {
                  className: 'mx-auto mb-3 h-7 w-7 text-emerald-400',
                  strokeWidth: 1.6,
                })}
                <div className="mb-2 text-mono-2xs uppercase text-emerald-400">{title as string}</div>
                <p className="text-mono-3xs text-white/55">{copy as string}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto my-3 hidden h-7 w-[84%] grid-cols-5 text-emerald-500/60 sm:grid" aria-hidden="true">
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className="relative mx-auto block h-full w-px bg-emerald-500/45 after:absolute after:-bottom-0.5 after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:rotate-45 after:border-b after:border-r after:border-emerald-500/70"
              />
            ))}
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-[1fr_2.5rem_1fr]">
            <div className="min-w-0 border border-emerald-500/18 bg-black/22 p-3">
              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="text-mono-xs uppercase text-emerald-400">Data Layer</div>
                <Database className="h-6 w-6 shrink-0 text-emerald-400" strokeWidth={1.6} />
              </div>
              <p className="text-mono-2xs leading-relaxed text-white/55">
                Local trip data, maps, forecasts, templates, and user settings.
              </p>
            </div>

            <div className="hidden items-center justify-center text-mono-xs text-emerald-500/60 sm:flex">---&gt;</div>

            <div className="min-w-0 border border-emerald-500/18 bg-black/22 p-3">
              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="text-mono-xs uppercase text-emerald-400">Sync & Export</div>
                <RefreshCw className="h-6 w-6 shrink-0 text-emerald-400" strokeWidth={1.6} />
              </div>
              <p className="text-mono-2xs leading-relaxed text-white/55">
                Export checklists, maps offline, share plan, print, backup.
              </p>
            </div>
          </div>

          <button className="mt-3 w-full max-w-full border border-emerald-700 bg-bg-surface px-3 py-2 text-mono-xs uppercase tracking-widest text-emerald-500 transition-colors hover:bg-emerald-500/10 sm:px-4">
            [ View System Map ]
          </button>
        </div>
      </aside>
    </section>
  );
}

const liveItinerary = [
  ['Day 1', 'Access Point -> Smoke Lake', '6.2 km'],
  ['Day 2', 'Smoke Lake -> Maple Leaf Lake', '8.1 km'],
  ['Day 3', 'Maple Leaf Lake (Explore)', '-'],
  ['Day 4', 'Maple Leaf Lake -> Smoke Lake', '8.1 km'],
  ['Day 5', 'Smoke Lake -> Access Point', '3.9 km'],
];

const liveReadiness = [
  ['Gear', '87%'],
  ['Meals', '80%'],
  ['Weather', '94%'],
  ['Logistics', '100%'],
];

const liveChecklist = ['Routes', 'Shelter', 'Clothing', 'Cooking', 'Navigation'];

const liveMeals = [
  ['Breakfasts', '4'],
  ['Lunches', '4'],
  ['Dinners', '4'],
  ['Snacks', '8'],
];

const liveForecast = [
  ['Sat', '19/8', 'text-emerald-400'],
  ['Sun', '20/9', 'text-yellow-400'],
  ['Mon', '21/10', 'text-white/62'],
];

function LiveDashboardCard({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`min-w-0 border border-emerald-500/20 bg-black/28 ${className}`}>
      <div className="border-b border-emerald-500/16 px-3 py-2 text-mono-2xs uppercase text-emerald-400">
        {title}
      </div>
      <div className="p-3">{children}</div>
    </section>
  );
}

function MiniReadinessGauge() {
  return (
    <div className="flex items-center gap-1">
      <div className="relative h-[74px] w-[74px] shrink-0">
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 74 74" aria-hidden="true">
          <circle cx="37" cy="37" r="28" fill="rgba(0,0,0,0.28)" stroke="rgba(16,185,129,0.18)" strokeWidth="7" />
          <circle
            cx="37"
            cy="37"
            r="28"
            fill="none"
            stroke="rgba(16,185,129,0.92)"
            strokeDasharray="162 176"
            strokeLinecap="butt"
            strokeWidth="7"
            className="drop-shadow-[0_0_7px_rgba(16,185,129,0.25)]"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[18px] leading-none text-white/80 tabular-nums">
          92%
        </div>
      </div>
      <div className="ml-1 min-w-0 flex-1 space-y-1.5 text-mono-3xs uppercase tabular-nums">
        {liveReadiness.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[1.8fr_1.6rem] gap-2">
            <span className="truncate text-white/50">{label}</span>
            <span className="text-right text-emerald-400">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LiveRouteMap() {
  return (
    <div className="relative h-[274px] overflow-hidden border border-emerald-500/14 bg-[#03130e]">
      <img
        src={algonquinRouteMapHero}
        alt="Algonquin route map"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.38),transparent_20%,transparent_74%,rgba(0,0,0,0.3)),radial-gradient(circle_at_52%_50%,transparent_0_46%,rgba(0,0,0,0.28)_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />

      {[
        ['Access Point', 'left-[22%] top-[13%]'],
        ['Maple Leaf Lake\\A Campsite 2', 'left-[67%] top-[43%]'],
        ['Smoke Lake\\A Campsite 3', 'left-[77%] top-[70%]'],
        ['Burnt Island\\Campsite 1', 'left-[18%] top-[28%]'],
      ].map(([label, position]) => (
        <div key={label} className={`absolute ${position} max-w-[112px] text-mono-3xs uppercase leading-tight text-white/68`}>
          <span className="mb-1 block h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
          {label.split('\\A').map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
        </div>
      ))}

      <div className="absolute bottom-2 left-3 flex items-center gap-4 text-mono-3xs uppercase text-white/58">
        <span className="text-emerald-400">---</span>
        <span>Route</span>
        <span className="text-yellow-400">---</span>
        <span>Portage</span>
        <span className="flex items-center gap-1">
          <Tent className="h-3 w-3 text-emerald-400" strokeWidth={1.8} />
          Campsite
        </span>
      </div>
    </div>
  );
}

function LiveWeatherPanel() {
  return (
    <LiveDashboardCard title="Weather" className="min-h-[126px]">
      <div className="flex items-center gap-3">
        <Sun className="h-10 w-10 shrink-0 text-yellow-400" strokeWidth={1.6} />
        <div className="min-w-0 pt-1">
          <div className="font-mono text-[23px] leading-none text-white/84 tabular-nums">18 C</div>
          <div className="mt-1 text-mono-3xs uppercase text-white/58">Partly Sunny</div>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 border-t border-emerald-500/12 pt-2 text-center text-mono-3xs uppercase tabular-nums">
        {liveForecast.map(([day, temp, color]) => (
          <div key={day}>
            <div className="text-white/44">{day}</div>
            <div className={color}>{temp}</div>
          </div>
        ))}
      </div>
    </LiveDashboardCard>
  );
}

function LiveDashboardPreview() {
  return (
    <div className="relative min-h-[326px] flex-1 overflow-hidden border border-emerald-500/14 bg-black/30">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(16,185,129,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.16)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_34px_rgba(16,185,129,0.06)]" />

      <div className="relative overflow-x-auto p-2.5" tabIndex={0} aria-label="Live dashboard preview panels">
        <div className="min-w-[1010px]">
          <header className="grid grid-cols-[150px_minmax(0,1fr)_54px] items-center border border-emerald-500/18 bg-black/32 text-mono-3xs uppercase text-white/54">
            <div className="flex items-center gap-2 border-r border-emerald-500/14 px-3 py-2">
              <Tent className="h-3.5 w-3.5 text-white/36" strokeWidth={1.6} />
              <span className="text-white/62">ALG_DASH</span>
            </div>
            <nav className="flex min-w-0 items-center gap-0 overflow-hidden">
              {['Plan', 'Map', 'Pack', 'Meals', 'Monitor', 'Execute'].map((item) => (
                <span
                  key={item}
                  className={`border-r border-emerald-500/12 px-5 py-2 ${item === 'Map' ? 'bg-emerald-400/10 text-emerald-400' : ''}`}
                >
                  {item}
                </span>
              ))}
            </nav>
            <div className="flex justify-end gap-2 px-3 text-white/34">
              <span>-|</span>
              <span>[]</span>
              <span>+</span>
            </div>
          </header>

          <div className="grid grid-cols-[178px_1fr_358px] grid-rows-[274px_54px] gap-2 border-x border-b border-emerald-500/18 p-2">
            <LiveDashboardCard title="Itinerary" className="min-h-0 overflow-hidden">
              <div className="mb-3 text-mono-3xs uppercase text-white/44">
                <span className="text-emerald-400">5 days</span> / 4 nights
              </div>
              <div className="space-y-2">
                {liveItinerary.map(([day, routeName, distance]) => (
                  <div key={day} className="text-mono-3xs uppercase leading-relaxed">
                    <div className="text-emerald-400">{day}</div>
                    <div className="leading-snug text-white/58">{routeName}</div>
                    <div className="font-mono text-white/44 tabular-nums">{distance}</div>
                  </div>
                ))}
              </div>
            </LiveDashboardCard>

            <main className="min-w-0">
              <LiveRouteMap />
            </main>

            <aside className="row-span-2 grid grid-cols-2 gap-2">
              <LiveDashboardCard title="Readiness" className="col-span-1 min-h-[126px]">
                <MiniReadinessGauge />
              </LiveDashboardCard>

              <LiveWeatherPanel />

              <LiveDashboardCard title="Data Checklist" className="min-h-[126px]">
                <div className="space-y-1 text-mono-3xs uppercase text-white/58">
                  {liveChecklist.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-400" strokeWidth={1.7} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </LiveDashboardCard>

              <LiveDashboardCard title="Meals" className="min-h-[126px]">
                <div className="mb-3 text-mono-3xs uppercase text-white/62">2,850 Cal / Day</div>
                <div className="space-y-1 text-mono-3xs uppercase tabular-nums">
                  {liveMeals.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[1fr_1.5rem] gap-2">
                      <span className="text-white/52">{label}</span>
                      <span className="text-right text-white/72">{value}</span>
                    </div>
                  ))}
                </div>
              </LiveDashboardCard>

              <div className="col-span-2 grid grid-cols-2 border border-emerald-500/20 bg-black/28 text-mono-3xs uppercase">
                <div className="border-r border-emerald-500/14 p-3">
                  <div className="mb-1 text-emerald-400">Gear Status</div>
                  <div className="text-white/62">Not in effect</div>
                </div>
                <div className="p-3">
                  <div className="mb-1 text-emerald-400">Permit Status</div>
                  <div className="text-white/62">Issued</div>
                </div>
              </div>
            </aside>

            <div className="col-span-2 grid grid-cols-5 border border-emerald-500/18 bg-black/28 text-mono-3xs uppercase">
              {[
                ['Total Distance', '26.3 km'],
                ['Total Time', '5 h'],
                ['Elevation Gain', '410 m'],
                ['Water Sources', '9'],
                ['Campsites', '3'],
              ].map(([label, value], index) => (
                <div key={label} className={`px-3 py-2 ${index > 0 ? 'border-l border-emerald-500/14' : ''}`}>
                  <div className="text-white/42">{label}</div>
                  <div className="mt-1 font-mono text-[14px] leading-none text-white/74 tabular-nums">{value}</div>
                </div>
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
      <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[0.4fr_1.55fr]">
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
          <div className="mb-3 text-mono-label uppercase text-emerald-400">Live Dashboard Preview</div>
          <LiveDashboardPreview />
        </section>
      </div>
    </section>
  );
}

function ResultSparkline({ type, compactOnMobile = false }: { type: string; compactOnMobile?: boolean }) {
  if (type === 'bars') {
    const bars = [32, 66, 48, 76, 58, 72, 86, 52, 80, 46, 70];

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
            strokeDasharray="90 107"
            strokeLinecap="butt"
            strokeWidth="7"
          />
        </svg>
      </div>
    );
  }

  if (type === 'stars') {
    return (
      <div className={`${compactOnMobile ? 'mt-0 flex-wrap justify-end gap-1.5 sm:mt-6 sm:flex-nowrap sm:justify-start sm:gap-2' : 'mt-6 gap-2'} flex items-center text-emerald-400`} aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.4} />
        ))}
      </div>
    );
  }

  const isUp = type === 'lineUp';
  const points = isUp
    ? '0,35 18,38 36,34 54,42 72,36 90,38 108,36 126,34 144,24 162,14 180,10'
    : '0,12 18,18 36,22 54,20 72,21 90,24 108,30 126,38 144,34 162,31 180,29';

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
              <p className="text-body-xs font-mono text-white/55">{copy}</p>
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
            The Algonquin Dashboard turned a personal planning challenge into a reusable decision-support system. It streamlines how we plan, adapt, and execute backcountry trips-reducing risk, increasing confidence, and creating a repeatable process that can scale to more trips, more people, and more conditions.
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

export function AlgonquinDashboardV2Page() {
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
        storageKey="case-brief-dock:algonquin-dashboard"
        title="Algonquin Dashboard"
        description="A compact PDF dossier of the system build."
        coverImage={fieldProtocolBriefCover}
        coverAlt="Algonquin Dashboard case brief cover"
        pdfUrl={algonquinDashboardBrief.pdfUrl}
        shareUrl={algonquinDashboardBrief.shareUrl}
        discussHref="/contact?case=algonquin-dashboard"
        contactHref="/contact?case=algonquin-dashboard"
      />
    </div>
  );
}
