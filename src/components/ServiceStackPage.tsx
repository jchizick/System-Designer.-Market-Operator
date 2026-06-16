import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Box,
  CheckCircle2,
  CircleDot,
  CloudUpload,
  Droplet,
  FileSearch,
  GitBranch,
  Grid2X2,
  Layers,
  MoreHorizontal,
  Network,
  Search,
  Settings2,
  XCircle,
} from 'lucide-react';
import { TopBar } from './TopBar';
import { Footer } from './Footer';
import { DiagnosticSprintVisual } from './DiagnosticSprintVisual';
import { BuildSprintVisual } from './BuildSprintVisual';
import { FullSystemBuildVisual } from './FullSystemBuildVisual';
import syntheticFoundryServiceThumb from '../assets/synthetic-foundry-service-thumb.webp';
import algonquinDashboardServiceThumb from '../assets/algonquin-dashboard-service-thumb.webp';
import marketCommandServiceThumb from '../assets/market-command-service-thumb.webp';
import brawlerMindServiceThumb from '../assets/brawler-mind-service-thumb.webp';
import blockchainBrawlersServiceThumb from '../assets/blockchain-brawlers-service-thumb.webp';
import danielsMassageServiceThumb from '../assets/daniels-massage-service-thumb.webp';
import torontoRealEstateBrandSystemThumb from '../assets/toronto-real-estate-brand-system-thumb.png';
import servicesAmbientSystemField from '../assets/Futuristic command center with holographic displays.png';

// Temporarily hidden while testing ambient hero background
const SHOW_SERVICE_STATUS_PANEL = false;

function useRevealOnScroll() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.16 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function RevealGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div ref={ref} className={`service-reveal-group ${isVisible ? 'is-visible' : ''} ${className || ''}`}>
      {children}
    </div>
  );
}

function StatusTicks() {
  return (
    <div className="service-status-ticks absolute right-4 top-4 flex gap-1" aria-hidden="true">
      {[0, 1, 2].map((tick) => (
        <span key={tick} className="h-1.5 w-1.5 bg-emerald-400/45" />
      ))}
    </div>
  );
}

const offers = [
  {
    label: '01 // AI',
    title: 'AI Workflow Systems',
    description: 'Turn repeated tasks, scattered content, and manual processes into structured AI-assisted workflows.',
    examples: ['Content engines', 'Research workflows', 'Prompt systems', 'Internal automations', 'Knowledge processing'],
    outcome: 'Less manual drag. More repeatable leverage.',
    icon: Network,
  },
  {
    label: '02 // PRODUCT',
    title: 'Product Interface Systems',
    description: 'Dashboards, internal tools, prototypes, and decision-support interfaces built for clarity under pressure.',
    examples: ['Private dashboards', 'Decision-support tools', 'Admin panels', 'MVP interfaces', 'Data visualization systems'],
    outcome: 'A working interface that turns complexity into action.',
    icon: Grid2X2,
  },
  {
    label: '03 // BRAND',
    title: 'Brand Operating Systems',
    description: 'Messaging, identity, landing pages, and campaign assets connected into one deployable system.',
    examples: ['Landing pages', 'Messaging systems', 'Case studies', 'Content systems', 'Offer architecture'],
    outcome: 'A brand that explains, positions, and deploys.',
    icon: CircleDot,
  },
];

const engagementTypes = [
  {
    title: 'Diagnostic Sprint',
    slug: 'diagnostic-sprint',
    accent: 'Clarity First',
    description: 'Short, focused engagement to clarify the real problem and map the path forward.',
    includes: ['System audit', 'Problem map', 'Opportunity map', 'Implementation brief'],
    icon: Droplet,
  },
  {
    title: 'Build Sprint',
    slug: 'build-sprint',
    accent: 'Focused Build',
    description: 'Focused build to create the system core fast and ship a working first version.',
    includes: ['UX / UI direction', 'System architecture', 'Frontend build', 'Workflow logic', 'Deployment-ready asset'],
    icon: Box,
  },
  {
    title: 'Full System Build',
    slug: 'full-system-build',
    accent: 'Premium Depth',
    description: 'Deeper engagement to design, build, and deploy a complete operating system.',
    includes: ['Strategy & positioning', 'System architecture', 'Interface design', 'AI workflow layer', 'Brand / message layer', 'Deployment support'],
    icon: Layers,
  },
];

const workSteps = [
  {
    number: '01',
    title: 'Diagnose',
    description: 'Clarify the real problem beneath the surface request.',
    meta: 'Input Analysis + Scope',
    icon: FileSearch,
  },
  {
    number: '02',
    title: 'Structure',
    description: 'Turn scattered context into a usable system map.',
    meta: 'System Map + Flow Logic',
    icon: GitBranch,
  },
  {
    number: '03',
    title: 'Prototype',
    description: 'Create the first working version fast.',
    meta: 'v0.1 Build + Test Cycle',
    icon: Box,
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Ship the system into a real environment.',
    meta: 'v0.1 Build + Test Cycle',
    icon: CloudUpload,
  },
  {
    number: '05',
    title: 'Refine',
    description: 'Tighten the system based on use, feedback, and friction.',
    meta: 'Use + Feedback + Friction',
    icon: Settings2,
  },
];

const fitSignals = [
  'Founders with too many moving parts',
  'Operators building from scratch',
  'Consultants / productized experts',
  'Small teams without internal systems',
  'Creators turning knowledge into assets',
  'Businesses that need clarity before scale',
];

const misfitSignals = [
  'Decoration-only design requests',
  'Vague "make it pop" projects',
  'Trend-chasing brand work',
  'Bloated agency-style timelines',
  'Clients who want assets without strategy',
];

const proofGroups = [
  {
    title: 'AI Workflow Systems',
    icon: Search,
    items: [
      {
        title: 'Synthetic Foundry',
        description: 'AI content engine & research workflow system for scalable output.',
        detail: 'Research, synthesis, and brand output pipelines connected into one deployable engine.',
        href: '/ai-brand-machine-synthetic-foundry-v2',
        image: syntheticFoundryServiceThumb,
      },
    ],
  },
  {
    title: 'Product Interface Systems',
    icon: Grid2X2,
    items: [
      {
        title: 'Algonquin Dashboard',
        description: 'Private dashboard for operational visibility & decision support.',
        href: '/algonquin-dashboard-v2',
        image: algonquinDashboardServiceThumb,
      },
      {
        title: 'Market Command',
        description: 'Trading intelligence interface for real-time market monitoring.',
        href: '/market-command-v2',
        image: marketCommandServiceThumb,
      },
      {
        title: 'The Brawler Mind',
        description: 'Performance dashboard & system hub for athlete development.',
        href: '/trading-journey-brawler-mind-v2',
        image: brawlerMindServiceThumb,
      },
    ],
  },
  {
    title: 'Brand Operating Systems',
    icon: CircleDot,
    items: [
      {
        title: 'Blockchain Brawlers',
        description: 'Brand platform, landing pages, and campaign assets system.',
        href: '/blockchain-brawlers-v2',
        image: blockchainBrawlersServiceThumb,
      },
      {
        title: "Local Wellness System",
        description: 'Brand & site system for local business growth & booking.',
        href: '/contact?case=local-wellness-system',
        cta: 'Inquire About This Build',
        image: danielsMassageServiceThumb,
      },
      {
        title: 'Toronto Real Estate Brand System',
        description: 'Brand system and market-facing web presence for a real estate operator.',
        href: '/contact?case=toronto-real-estate-brand-system',
        cta: 'Inquire About This Build',
        image: torontoRealEstateBrandSystemThumb,
      },
    ],
  },
];

function ServiceStatusPanel() {
  const rows = [
    { icon: Activity, label: 'SERVICE STACK ONLINE' },
    { icon: Box, label: '03 ACTIVE SYSTEM TYPES' },
    { icon: Layers, label: 'AI // PRODUCT // BRAND' },
  ];

  return (
    <aside className="relative border border-emerald-500/28 bg-[#07100f]/74 shadow-[0_0_30px_rgba(16,185,129,0.055),inset_0_0_28px_rgba(16,185,129,0.025)]">
      <div className="flex min-h-12 items-center justify-between border-b border-emerald-500/20 px-6">
        <div className="text-mono-sm font-medium uppercase text-emerald-400">// System Status</div>
        <MoreHorizontal className="h-5 w-5 text-emerald-400" strokeWidth={2} />
      </div>

      <div className="relative p-6">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(16,185,129,0.42)_1px,transparent_1px)] [background-size:6px_6px]" />
        <div className="relative z-10 space-y-6">
          {rows.map(({ icon: Icon, label }) => (
            <div key={label} className="grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-5">
              <Icon className="h-5 w-5 text-emerald-400" strokeWidth={1.7} />
              <span className="font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-white/62">
                {label}
              </span>
            </div>
          ))}

          <div className="border-t border-dashed border-emerald-500/28 pt-6">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5">
              <span className="font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-emerald-400">
                Status:
              </span>
              <span className="font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-white/62">
                Available for select builds
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function SectionShell({
  label,
  action,
  actionHref,
  children,
}: {
  label: string;
  action?: string;
  actionHref?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative border border-emerald-500/12 bg-emerald-500/[0.018] p-4 sm:p-5">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(16,185,129,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.18)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative z-10 mb-4 flex items-center justify-between gap-4">
        <span className="text-mono-sm font-medium uppercase tracking-[0.08em] text-emerald-400">
          // {label}
        </span>
        {action && actionHref ? (
          <Link
            to={actionHref}
            className="hidden text-mono-xs font-medium uppercase tracking-[0.12em] text-emerald-400 transition-colors hover:text-emerald-300 sm:inline"
          >
            [ {action} ]
          </Link>
        ) : action ? (
          <span className="hidden text-mono-xs font-medium uppercase tracking-[0.12em] text-emerald-400 sm:inline">
            [ {action} ]
          </span>
        ) : null}
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}

function OfferCard({ offer }: { offer: (typeof offers)[number] }) {
  const Icon = offer.icon;

  return (
    <article className="service-active-card relative flex h-full min-h-[360px] flex-col border border-emerald-500/20 bg-[#07100f]/62 p-4 shadow-[inset_0_0_24px_rgba(16,185,129,0.025)]">
      <StatusTicks />

      <div className="mb-4 flex items-start gap-4">
        <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center border border-emerald-500/28 bg-black/35 text-emerald-400 shadow-[inset_0_0_14px_rgba(16,185,129,0.04)]">
          <Icon className="h-7 w-7" strokeWidth={1.7} />
        </div>
        <div className="min-w-0 pt-1">
          <div className="mb-2 text-mono-sm font-medium uppercase tracking-[0.08em] text-emerald-400">
            {offer.label}
          </div>
          <h2 className="font-space-grotesk text-[19px] font-medium leading-tight text-text-primary">
            {offer.title}
          </h2>
        </div>
      </div>

      <p className="mb-6 font-mono text-[13px] leading-[1.6] text-white/62">
        {offer.description}
      </p>

      <div className="mb-5 text-mono-xs font-medium uppercase tracking-[0.08em] text-emerald-400">
        Examples include:
      </div>
      <ul className="mb-6 space-y-2">
        {offer.examples.map((example) => (
          <li key={example} className="grid grid-cols-[0.8rem_minmax(0,1fr)] gap-2 font-mono text-[13px] leading-tight text-white/58">
            <span className="mt-[0.35rem] h-1.5 w-1.5 bg-emerald-400" />
            <span>{example}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto border border-emerald-500/16 bg-emerald-500/[0.035] px-3.5 py-3 shadow-[inset_0_0_18px_rgba(16,185,129,0.025)]">
        <div className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-400">
          Outcome
        </div>
        <p className="font-mono text-[13px] leading-[1.45] text-white/72">
          {offer.outcome}
        </p>
      </div>
    </article>
  );
}

function EngagementVisual({ imageSrc, type }: { imageSrc?: string; type: 'diagnostic' | 'build' | 'system' }) {
  if (imageSrc) {
    return (
      <div
        className={`service-engagement-visual service-engagement-visual--image service-engagement-visual--${type}`}
        aria-hidden="true"
      >
        <img src={imageSrc} alt="" className="service-engagement-visual-image" loading="lazy" />
        <div className="service-engagement-visual-vignette" />
      </div>
    );
  }

  if (type === 'diagnostic') {
    return (
      <div className="service-engagement-visual service-engagement-visual--diagnostic" aria-hidden="true">
        <div className="service-visual-grid" />
        <svg viewBox="0 0 260 150" className="service-visual-svg">
          <circle cx="88" cy="82" r="48" className="service-visual-line" />
          <circle cx="88" cy="82" r="30" className="service-visual-line service-visual-line--muted" />
          <path d="M88 82 L128 58" className="service-visual-sweep" />
          <path d="M88 82 L48 112" className="service-visual-line service-visual-line--muted" />
          <circle cx="128" cy="58" r="3" className="service-visual-node service-visual-node--hot" />
          <circle cx="53" cy="72" r="2.5" className="service-visual-node" />
          <circle cx="104" cy="117" r="2.5" className="service-visual-node" />
          <circle cx="154" cy="98" r="2" className="service-visual-node service-visual-node--dim" />
        </svg>
        <div className="service-visual-chip service-visual-chip--left">
          <span />
          Scan
        </div>
      </div>
    );
  }

  if (type === 'build') {
    return (
      <div className="service-engagement-visual service-engagement-visual--build" aria-hidden="true">
        <div className="service-visual-grid" />
        <svg viewBox="0 0 260 150" className="service-visual-svg">
          <path d="M54 72 H102 C116 72 118 44 132 44 H170" className="service-visual-line" />
          <path d="M102 72 C116 72 118 106 132 106 H178" className="service-visual-line service-visual-line--muted" />
          <rect x="34" y="54" width="42" height="36" className="service-visual-panel" />
          <rect x="106" y="26" width="54" height="36" className="service-visual-panel service-visual-panel--active" />
          <rect x="108" y="88" width="58" height="36" className="service-visual-panel" />
          <rect x="182" y="55" width="42" height="40" className="service-visual-panel service-visual-panel--active" />
          <circle cx="102" cy="72" r="3" className="service-visual-node" />
          <circle cx="178" cy="74" r="3.5" className="service-visual-node service-visual-node--hot" />
        </svg>
        <div className="service-visual-chip">
          <span />
          Build
        </div>
      </div>
    );
  }

  return (
    <div className="service-engagement-visual service-engagement-visual--system" aria-hidden="true">
      <div className="service-visual-grid" />
      <svg viewBox="0 0 260 150" className="service-visual-svg">
        <path d="M82 38 H178 L196 56 H64 Z" className="service-visual-layer service-visual-layer--top" />
        <path d="M66 66 H194 L174 86 H86 Z" className="service-visual-layer" />
        <path d="M84 98 H176 L194 116 H66 Z" className="service-visual-layer service-visual-layer--low" />
        <path d="M96 56 V98 M132 56 V98 M168 56 V98" className="service-visual-line service-visual-line--muted" />
        <circle cx="96" cy="56" r="2.6" className="service-visual-node" />
        <circle cx="132" cy="76" r="3.2" className="service-visual-node service-visual-node--hot" />
        <circle cx="168" cy="98" r="2.6" className="service-visual-node" />
      </svg>
      <div className="service-visual-chip">
        <span />
        System
      </div>
    </div>
  );
}

function EngagementCard({ engagement }: { engagement: (typeof engagementTypes)[number] }) {
  const Icon = engagement.icon;
  const visualType = engagement.title === 'Diagnostic Sprint'
    ? 'diagnostic'
    : engagement.title === 'Build Sprint'
      ? 'build'
      : 'system';
  const isDiagnostic = visualType === 'diagnostic';
  const isBuild = visualType === 'build';
  const isSystem = visualType === 'system';

  return (
    <article className="service-active-card service-engagement-card group relative flex h-full flex-col overflow-hidden border border-emerald-500/20 bg-[#07100f]/62 p-4 shadow-[inset_0_0_24px_rgba(16,185,129,0.025)]">
      <StatusTicks />

      <div className="mb-3 grid grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-3 pr-12">
        <div className="flex h-9 w-9 items-center justify-center border border-emerald-500/25 bg-black/35 text-emerald-400">
          <Icon className="h-5 w-5" strokeWidth={1.7} />
        </div>
        <h3 className="font-mono text-[13px] font-semibold uppercase tracking-[0.12em] text-white/76">
          {engagement.title}
        </h3>
      </div>

      {/* <div className="mb-4 w-fit border border-emerald-500/16 bg-black/24 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-emerald-400/78">
        {engagement.accent}
      </div> */}

      <p className="mb-5 font-mono text-[13px] leading-[1.55] text-white/62">
        {engagement.description}
      </p>

      <div className={`service-engagement-detail relative min-h-[176px] overflow-hidden ${isDiagnostic ? 'service-engagement-detail--diagnostic' : isBuild ? 'service-engagement-detail--build' : isSystem ? 'service-engagement-detail--system' : 'border border-emerald-500/14 bg-black/18'}`}>
        {isDiagnostic ? (
          <DiagnosticSprintVisual />
        ) : isBuild ? (
          <BuildSprintVisual />
        ) : isSystem ? (
          <FullSystemBuildVisual />
        ) : (
          <EngagementVisual type={visualType} />
        )}

        <div className="service-engagement-includes">
          <div className="mb-3 text-mono-xs font-medium uppercase tracking-[0.08em] text-emerald-400">
            Includes:
          </div>
          <ul className="space-y-1.5">
            {engagement.includes.map((item) => (
              <li key={item} className="grid grid-cols-[0.8rem_minmax(0,1fr)] gap-2 font-mono text-[12px] leading-tight text-white/62">
                <span className="mt-[0.35rem] h-1.5 w-1.5 bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link to={`/contact?engagement=${engagement.slug}`} className="service-inline-cta mt-4 inline-flex items-center gap-2 self-start font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-emerald-400 transition-colors hover:text-emerald-300">
        Start This Engagement
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
      </Link>
    </article>
  );
}

function OffersSection() {
  return (
    <SectionShell label="The Three Offers" action="Stack Overview">
      <RevealGroup className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {offers.map((offer, index) => (
          <div key={offer.label} className="service-reveal-item" style={{ transitionDelay: `${index * 70}ms` }}>
            <OfferCard offer={offer} />
          </div>
        ))}
      </RevealGroup>
    </SectionShell>
  );
}

function EngagementTypesSection() {
  return (
    <SectionShell label="Engagement Types">
      <RevealGroup className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {engagementTypes.map((engagement, index) => (
          <div key={engagement.title} className="service-reveal-item" style={{ transitionDelay: `${index * 70}ms` }}>
            <EngagementCard engagement={engagement} />
          </div>
        ))}
      </RevealGroup>
    </SectionShell>
  );
}

function HowIWorkSection() {
  return (
    <SectionShell label="How I Work">
      <div className="service-work-loop relative py-2 sm:py-3">
        <div className="relative mb-2 hidden lg:block">
          <div className="absolute left-2 right-7 top-1/2 h-px -translate-y-1/2 border-t border-dashed border-emerald-500/34" aria-hidden="true" />
          <span className="service-work-signal absolute top-[calc(50%+3px)] z-10 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(52,211,153,0.65)] lg:block" aria-hidden="true" />
          <div className="absolute right-2 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[6px] border-l-[10px] border-y-transparent border-l-emerald-400/80" aria-hidden="true" />

          <div className="relative z-10 grid grid-cols-5 gap-10">
            {workSteps.map((step, index) => (
              <div key={step.number} className="flex justify-center">
                <span className={`service-work-node service-work-node-${index} border border-emerald-500/20 bg-[#07100f] px-2.5 py-2.5 font-mono text-[11px] font-semibold leading-none tracking-[0.12em] text-emerald-300/78`}>
                  {step.number}
                </span>
              </div>
            ))}
          </div>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-3 lg:grid-cols-5 lg:gap-10">
          {workSteps.map((step, index) => {
            const StepIcon = step.icon;

            return (
              <div key={step.number} className="service-reveal-item" style={{ transitionDelay: `${index * 50}ms` }}>
                <article className={`service-active-card service-work-step-card service-work-step-card-${index} relative h-full min-h-[130px] overflow-hidden border border-emerald-500/18 bg-[#07100f]/58 p-4`}>
                  <div className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(52,211,153,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.18)_1px,transparent_1px)] [background-size:12px_12px]" />
                  <div className="service-work-step-pulse pointer-events-none absolute inset-0 opacity-0" />
                  <div className="relative z-10 mb-3 flex items-start justify-between gap-3">
                    <div className="font-mono text-[13px] font-semibold uppercase tracking-[0.1em] text-emerald-400">
                      {step.number} //<br />{step.title}
                    </div>
                    <StepIcon className="service-work-step-icon h-7 w-7 flex-shrink-0 text-emerald-300/58" strokeWidth={1.35} />
                  </div>
                  <p className="relative z-10 font-mono text-[13px] leading-[1.48] text-white/62">
                    {step.description}
                  </p>
                  <div className="relative z-10 mt-4 border-t border-emerald-500/12 pt-2 font-mono text-[8px] uppercase leading-none tracking-[0.08em] text-white/38">
                    {step.meta}
                  </div>
                </article>
              </div>
            );
          })}
        </RevealGroup>
      </div>
    </SectionShell>
  );
}

function FitList({
  tone,
  label,
  items,
}: {
  tone: 'fit' | 'misfit';
  label: string;
  items: string[];
}) {
  const Icon = tone === 'fit' ? CheckCircle2 : XCircle;
  const colorClasses = tone === 'fit'
    ? 'text-emerald-300 border-emerald-400/38 bg-emerald-400/[0.06] shadow-[0_0_14px_rgba(52,211,153,0.08)]'
    : 'text-red-300 border-red-400/38 bg-red-400/[0.045] shadow-[0_0_14px_rgba(248,113,113,0.055)]';
  const labelClasses = tone === 'fit' ? 'text-emerald-400' : 'text-red-400';
  const rowClasses = tone === 'fit'
    ? 'border-emerald-500/14 bg-emerald-500/[0.018]'
    : 'border-red-400/12 bg-red-400/[0.014]';

  return (
    <div className="service-active-card service-fit-panel h-full min-w-0 border border-emerald-500/12 bg-black/12 p-4">
      <div className="mb-5 flex items-center justify-between gap-4 border-b border-emerald-500/10 pb-3">
        <div className={`text-mono-sm font-semibold uppercase tracking-[0.08em] ${labelClasses}`}>
          // {label}
        </div>
        <span className={`h-1.5 w-8 ${tone === 'fit' ? 'bg-emerald-400/52' : 'bg-red-400/48'}`} aria-hidden="true" />
      </div>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className={`grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-3 border px-2.5 py-2 font-mono text-[13px] leading-snug text-white/68 ${rowClasses}`}>
            <span className={`flex h-7 w-7 items-center justify-center rounded-full border ${colorClasses}`}>
              <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CenterReticle() {
  return (
    <div className="service-fit-scanner relative hidden min-h-[220px] items-center justify-center border-x border-emerald-500/14 lg:flex" aria-hidden="true">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-500/24 to-transparent" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-500/24 to-transparent" />
      <span className="absolute top-8 h-px w-10 bg-emerald-400/18" />
      <span className="absolute bottom-8 h-px w-10 bg-red-400/14" />
      <div className="service-fit-scanner-core relative flex h-20 w-20 items-center justify-center border border-emerald-500/18 bg-black/20">
        <span className="absolute h-16 w-16 border border-emerald-500/18" />
        <span className="absolute h-10 w-10 border border-emerald-400/26" />
        <span className="absolute h-24 w-px bg-gradient-to-b from-transparent via-emerald-400/24 to-transparent" />
        <span className="absolute h-px w-24 bg-gradient-to-r from-transparent via-emerald-400/24 to-transparent" />
        <span className="service-fit-scanner-dot h-2.5 w-2.5 bg-emerald-400/36 shadow-[0_0_18px_rgba(52,211,153,0.18)]" />
      </div>
    </div>
  );
}

function AudienceFitSection() {
  return (
    <section className="relative border border-emerald-500/12 bg-emerald-500/[0.018] px-5 py-5 sm:px-6 sm:py-6">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(16,185,129,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.16)_1px,transparent_1px)] [background-size:24px_24px]" />
      <RevealGroup className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)] lg:gap-9">
        <div className="service-reveal-item" style={{ transitionDelay: '0ms' }}>
          <FitList tone="fit" label="Built For" items={fitSignals} />
        </div>
        <CenterReticle />
        <div className="service-reveal-item" style={{ transitionDelay: '80ms' }}>
          <FitList tone="misfit" label="Not Built For" items={misfitSignals} />
        </div>
      </RevealGroup>
    </section>
  );
}

function ProofThumbnail({
  src,
  alt,
  featured = false,
}: {
  src: string;
  alt: string;
  featured?: boolean;
}) {
  const width = featured ? 116 : 102;
  const height = featured ? 104 : 84;

  return (
    <div
      className="service-proof-thumbnail relative flex-shrink-0 overflow-hidden border border-emerald-500/24 bg-[#07120f] shadow-[inset_0_0_22px_rgba(16,185,129,0.045),0_0_18px_rgba(16,185,129,0.035)]"
      style={{ width: width + 2, height: height + 2 }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
        style={{ width, height }}
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 border border-emerald-300/10" />
      <div className="pointer-events-none absolute inset-x-2 top-2 h-px bg-emerald-300/24" />
      <div className="pointer-events-none absolute inset-x-2 bottom-2 h-px bg-emerald-300/16" />
    </div>
  );
}

function FeaturedProofTelemetry() {
  return (
    <div className="mx-4 mb-4 mt-auto border border-emerald-500/14 bg-black/20 p-3">
      <div className="mb-2 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-400/72">
        System Preview
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['Inputs', 'Pipeline', 'Output'].map((label, index) => (
          <div key={label} className="border border-emerald-500/12 bg-emerald-500/[0.025] px-2 py-2 text-center">
            <div className="mx-auto mb-1.5 h-1 w-8 bg-emerald-400/25" />
            <div className="font-mono text-[8px] uppercase leading-none tracking-[0.08em] text-white/42">
              0{index + 1}
            </div>
            <div className="mt-1 font-mono text-[8px] uppercase leading-none tracking-[0.08em] text-emerald-300/58">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProofCard({ group }: { group: (typeof proofGroups)[number] }) {
  const Icon = group.icon;
  const featured = group.items.length === 1;

  return (
    <article className="service-active-card flex h-full min-h-[322px] flex-col border border-emerald-500/22 bg-[#07100f]/62 shadow-[inset_0_0_24px_rgba(16,185,129,0.025)]">
      <header className="flex min-h-12 items-center gap-3 border-b border-emerald-500/18 px-4">
        <Icon className="h-5 w-5 flex-shrink-0 text-emerald-400" strokeWidth={1.8} />
        <h3 className="font-mono text-[13px] font-semibold uppercase tracking-[0.1em] text-emerald-400">
          {group.title}
        </h3>
      </header>

      <div className="divide-y divide-emerald-500/14">
        {group.items.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className={`group grid gap-4 px-4 transition-colors hover:bg-emerald-500/[0.035] ${featured ? 'grid-cols-[118px_minmax(0,1fr)] py-4' : 'grid-cols-[104px_minmax(0,1fr)] py-2.5'}`}
          >
            <ProofThumbnail src={item.image} alt={`${item.title} service preview`} featured={featured} />
            <div className="min-w-0 self-center">
              <h4 className={`mb-2 font-space-grotesk font-medium leading-tight text-text-primary ${featured ? 'text-[19px]' : 'text-[18px]'}`}>
                {item.title}
              </h4>
              <p className="mb-2 font-mono text-[12px] leading-[1.45] text-white/58">
                {item.description}
              </p>
              {'detail' in item ? (
                <p className="mb-2 hidden font-mono text-[11px] leading-[1.45] text-white/42 xl:block">
                  {item.detail}
                </p>
              ) : null}
              <span className="service-inline-cta inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-emerald-400 transition-colors group-hover:text-emerald-300">
                {item.cta || 'View Case Study'}
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.7} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      {featured ? <FeaturedProofTelemetry /> : null}
    </article>
  );
}

function ProofSection() {
  return (
    <SectionShell label="Proof: Case Study Links" action="View All Case Studies" actionHref="/#case-files">
      <RevealGroup className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {proofGroups.map((group, index) => (
          <div key={group.title} className="service-reveal-item" style={{ transitionDelay: `${index * 70}ms` }}>
            <ProofCard group={group} />
          </div>
        ))}
      </RevealGroup>
    </SectionShell>
  );
}

function BuildCtaSection() {
  return (
    <section className="relative border border-emerald-500/14 bg-emerald-500/[0.018] p-5 sm:p-6">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(16,185,129,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.16)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div>
          <div className="mb-4 text-mono-sm font-medium uppercase tracking-[0.08em] text-emerald-400">
            // Let's Build
          </div>
          <h2 className="font-space-grotesk font-medium text-[28px] leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-[56px]">
            Ready to Build<br />A System?
          </h2>
          <p className="mt-3 max-w-[570px] font-mono text-[13px] leading-[1.55] text-white/62">
            Bring the scattered pieces. I'll help turn them into structure, interface, workflow, and deployment.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row lg:min-w-[600px]">
          <Link
            to="/contact"
            className="service-primary-cta inline-flex min-h-16 flex-1 items-center justify-center gap-6 border border-emerald-400/55 bg-emerald-400 px-7 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-[#03110c] shadow-[0_0_22px_rgba(52,211,153,0.2)] transition-colors hover:bg-emerald-300"
          >
            <span>Start a Build</span>
            <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
          </Link>
          <Link
            to="/#case-files"
            className="service-secondary-cta inline-flex min-h-16 flex-1 items-center justify-center gap-6 border border-emerald-500/36 bg-black/28 px-7 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-white/62 transition-colors hover:border-emerald-400/55 hover:text-white/84"
          >
            <span>View Case Studies</span>
            <Grid2X2 className="h-5 w-5 text-emerald-400/75" strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ServiceStackPage() {
  return (
    <div className="min-h-screen flex flex-col relative max-w-full overflow-x-hidden p-4 sm:p-6">
      <TopBar className="max-w-[1180px]" />

      <main className="flex-grow flex flex-col w-full max-w-[1180px] mx-auto min-w-0">
        <section className="relative mb-10 min-h-[420px] overflow-hidden pt-10 sm:pt-0">
          {/* <div className="absolute left-1/2 top-0 h-1 w-36 -translate-x-1/2 bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.45)]" aria-hidden="true" /> */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_48%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_74%_44%,rgba(16,185,129,0.07),transparent_30%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-24 top-0 h-[500px] w-[1180px] max-w-[112%] opacity-[0.24] [mask-image:linear-gradient(90deg,transparent_0%,black_30%,black_74%,transparent_100%),linear-gradient(180deg,black_0%,black_68%,transparent_100%)] [mask-composite:intersect] sm:opacity-[0.70] lg:-right-30 lg:w-[940px]" aria-hidden="true">
            <img
              src={servicesAmbientSystemField}
              alt=""
              className="h-full w-full object-cover object-right"
            />
          </div>
          <div className="pointer-events-none absolute right-0 top-8 h-80 w-[46%] bg-[radial-gradient(circle_at_55%_45%,rgba(52,211,153,0.13),transparent_62%)] blur-sm" aria-hidden="true" />

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.72fr)] lg:items-center">
            <div className="min-w-0">
              <div className="mb-4 text-mono-sm font-medium uppercase tracking-[0.08em] text-emerald-400">
                006 // Service Stack
              </div>

              <h1 className="max-w-[680px] font-space-grotesk text-[40px] font-medium leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-[54px] lg:text-[58px]">
                Client-facing systems for operators, founders, and teams moving through complexity.
              </h1>

              <p className="mt-6 max-w-[650px] text-[16px] font-mono leading-[1.55] tracking-[-0.01em] text-white/66">
                AI workflows, product interfaces, and brand operating systems - designed, structured, and deployed as usable systems.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="service-primary-cta inline-flex min-h-14 items-center justify-center gap-8 border border-emerald-400/55 bg-emerald-400 px-8 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-[#03110c] shadow-[0_0_22px_rgba(52,211,153,0.2)] transition-colors hover:bg-emerald-300"
                >
                  <span>Start a Build</span>
                  <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
                </Link>
                <Link
                  to="/#case-files"
                  className="service-secondary-cta inline-flex min-h-14 items-center justify-center gap-8 border border-emerald-500/36 bg-black/28 px-8 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-white/62 transition-colors hover:border-emerald-400/55 hover:text-white/84"
                >
                  <span>View Case Studies</span>
                  <Grid2X2 className="h-5 w-5 text-emerald-400/75" strokeWidth={1.8} />
                </Link>
              </div>
            </div>

            {SHOW_SERVICE_STATUS_PANEL ? <ServiceStatusPanel /> : null}
          </div>
        </section>

        <div className="space-y-3 pb-10">
          <OffersSection />
          <EngagementTypesSection />
          <HowIWorkSection />
          <AudienceFitSection />
          <ProofSection />
          <BuildCtaSection />
        </div>
      </main>

      <Footer className="max-w-[1180px]" />
    </div>
  );
}
