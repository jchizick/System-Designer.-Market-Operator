import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Box,
  CheckCircle2,
  CircleDot,
  Droplet,
  Grid2X2,
  Layers,
  MoreHorizontal,
  Network,
  Search,
  XCircle,
} from 'lucide-react';
import { TopBar } from './TopBar';
import { Footer } from './Footer';

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
    badge: 'Clarity First',
    description: 'Short, focused engagement to clarify the real problem and map the path forward.',
    includes: ['System audit', 'Problem map', 'Opportunity map', 'Implementation brief'],
    icon: Droplet,
  },
  {
    title: 'Build Sprint',
    badge: 'Focused Build',
    description: 'Focused build to create the system core fast and ship a working first version.',
    includes: ['UX / UI direction', 'System architecture', 'Frontend build', 'Workflow logic', 'Deployment-ready asset'],
    icon: Box,
  },
  {
    title: 'Operating System Build',
    badge: 'Premium Depth',
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
  },
  {
    number: '02',
    title: 'Structure',
    description: 'Turn scattered context into a usable system map.',
  },
  {
    number: '03',
    title: 'Prototype',
    description: 'Create the first working version fast.',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Ship the system into a real environment.',
  },
  {
    number: '05',
    title: 'Refine',
    description: 'Tighten the system based on use, feedback, and friction.',
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
        href: '/ai-brand-machine-synthetic-foundry-v2',
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
      },
      {
        title: 'Market Command',
        description: 'Trading intelligence interface for real-time market monitoring.',
        href: '/market-command-v2',
      },
      {
        title: 'The Brawler Mind',
        description: 'Performance dashboard & system hub for athlete development.',
        href: '/trading-journey-brawler-mind-v2',
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
      },
      {
        title: "Daniel's Massage Therapy",
        description: 'Brand & site system for local business growth & booking.',
        href: '/contact?case=daniels-massage-therapy',
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
    <article className="relative min-h-[360px] border border-emerald-500/20 bg-[#07100f]/62 p-4 shadow-[inset_0_0_24px_rgba(16,185,129,0.025)]">
      <div className="absolute right-4 top-4 flex gap-1">
        {[0, 1, 2].map((tick) => (
          <span key={tick} className="h-1.5 w-1.5 bg-emerald-400/45" />
        ))}
      </div>

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

      <p className="font-mono text-[13px] leading-[1.55] text-white/62">
        <span className="font-medium uppercase tracking-[0.08em] text-emerald-400">Outcome:</span>{' '}
        {offer.outcome}
      </p>
    </article>
  );
}

function EngagementCard({ engagement }: { engagement: (typeof engagementTypes)[number] }) {
  const Icon = engagement.icon;

  return (
    <article className="relative min-h-[294px] border border-emerald-500/20 bg-[#07100f]/62 p-4 shadow-[inset_0_0_24px_rgba(16,185,129,0.025)]">
      <div className="absolute right-4 top-3 flex gap-1">
        {[0, 1, 2].map((tick) => (
          <span key={tick} className="h-1 w-1 bg-emerald-400/35" />
        ))}
      </div>

      <div className="mb-4 grid grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center border border-emerald-500/25 bg-black/35 text-emerald-400">
          <Icon className="h-5 w-5" strokeWidth={1.7} />
        </div>
        <h3 className="font-mono text-[13px] font-semibold uppercase tracking-[0.12em] text-white/76">
          {engagement.title}
        </h3>
        <span className="hidden border border-emerald-500/24 bg-emerald-500/[0.055] px-2.5 py-1 text-mono-2xs font-medium uppercase text-emerald-400 sm:inline">
          {engagement.badge}
        </span>
      </div>

      <p className="mb-5 font-mono text-[13px] leading-[1.55] text-white/62">
        {engagement.description}
      </p>

      <div className="mb-3 text-mono-xs font-medium uppercase tracking-[0.08em] text-emerald-400">
        Includes:
      </div>
      <ul className="mb-8 space-y-1.5">
        {engagement.includes.map((item) => (
          <li key={item} className="grid grid-cols-[0.8rem_minmax(0,1fr)] gap-2 font-mono text-[12px] leading-tight text-white/58">
            <span className="mt-[0.35rem] h-1.5 w-1.5 bg-emerald-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link to="/contact" className="absolute bottom-4 left-4 inline-flex items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-emerald-400 transition-colors hover:text-emerald-300">
        View Details
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
      </Link>
    </article>
  );
}

function OffersSection() {
  return (
    <SectionShell label="The Three Offers" action="Stack Overview">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {offers.map((offer) => (
          <React.Fragment key={offer.label}>
            <OfferCard offer={offer} />
          </React.Fragment>
        ))}
      </div>
    </SectionShell>
  );
}

function EngagementTypesSection() {
  return (
    <SectionShell label="Engagement Types">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {engagementTypes.map((engagement) => (
          <React.Fragment key={engagement.title}>
            <EngagementCard engagement={engagement} />
          </React.Fragment>
        ))}
      </div>
    </SectionShell>
  );
}

function HowIWorkSection() {
  return (
    <SectionShell label="How I Work">
      <div className="relative overflow-x-auto pb-1 scrollbar-hide">
        <div className="relative min-w-[1040px] pt-11">
          <div className="absolute left-6 right-6 top-[26px] h-px border-t border-dashed border-emerald-500/42" aria-hidden="true" />
          <div className="absolute right-6 top-[20px] h-0 w-0 border-y-[7px] border-l-[12px] border-y-transparent border-l-emerald-400" aria-hidden="true" />
          <div className="absolute left-4 top-[14px] z-10 flex h-7 w-7 items-center justify-center rounded-full border border-emerald-500/40 bg-[#07100f] text-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.14)]">
            <Search className="h-3.5 w-3.5" strokeWidth={1.8} />
          </div>

          <div className="grid grid-cols-5 gap-10">
            {workSteps.map((step) => (
              <article key={step.number} className="relative">
                <div className="absolute left-1/2 top-[-43px] z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-emerald-500/42 bg-[#07100f] shadow-[0_0_14px_rgba(16,185,129,0.12)]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.55)]" />
                </div>
                <div className="min-h-[120px] border border-emerald-500/16 bg-[#07100f]/58 p-4">
                  <div className="mb-3 font-mono text-[13px] font-semibold uppercase tracking-[0.1em] text-emerald-400">
                    {step.number} // {step.title}
                  </div>
                  <p className="font-mono text-[13px] leading-[1.48] text-white/62">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
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
    ? 'text-emerald-400 border-emerald-500/28 bg-emerald-400/[0.035]'
    : 'text-red-400 border-red-400/26 bg-red-400/[0.025]';
  const labelClasses = tone === 'fit' ? 'text-emerald-400' : 'text-red-400';

  return (
    <div className="min-w-0">
      <div className={`mb-5 text-mono-sm font-medium uppercase tracking-[0.08em] ${labelClasses}`}>
        // {label}
      </div>
      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item} className="grid grid-cols-[1.45rem_minmax(0,1fr)] items-start gap-4 font-mono text-[13px] leading-snug text-white/62">
            <span className={`mt-[-1px] flex h-5 w-5 items-center justify-center rounded-full border ${colorClasses}`}>
              <Icon className="h-3.5 w-3.5" strokeWidth={2} />
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
    <div className="relative hidden min-h-[168px] items-center justify-center border-x border-emerald-500/14 lg:flex" aria-hidden="true">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-emerald-500/16" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-emerald-500/16" />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/15">
        <span className="absolute h-11 w-11 rounded-full border border-emerald-500/24" />
        <span className="absolute h-6 w-6 rounded-full border border-emerald-400/32" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/28 shadow-[0_0_18px_rgba(52,211,153,0.18)]" />
      </div>
    </div>
  );
}

function AudienceFitSection() {
  return (
    <section className="relative border border-emerald-500/12 bg-emerald-500/[0.018] px-5 py-5 sm:px-6 sm:py-6">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(16,185,129,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.16)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)] lg:gap-9">
        <FitList tone="fit" label="Who This Is For" items={fitSignals} />
        <CenterReticle />
        <FitList tone="misfit" label="Not Built For" items={misfitSignals} />
      </div>
    </section>
  );
}

function ProofPlaceholder({ title }: { title: string }) {
  return (
    <div className="relative aspect-square w-[96px] flex-shrink-0 overflow-hidden border border-emerald-500/22 bg-[#0a1512]">
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(52,211,153,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.22)_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(52,211,153,0.24),transparent_38%)]" />
      <div className="absolute left-3 right-3 top-3 h-px bg-emerald-400/32" />
      <div className="absolute bottom-3 left-3 right-3 h-px bg-emerald-400/20" />
      <span className="absolute inset-x-3 top-1/2 -translate-y-1/2 text-center font-mono text-[8px] uppercase leading-tight text-emerald-300/58">
        {title}
      </span>
    </div>
  );
}

function ProofCard({ group }: { group: (typeof proofGroups)[number] }) {
  const Icon = group.icon;

  return (
    <article className="min-h-[322px] border border-emerald-500/22 bg-[#07100f]/62 shadow-[inset_0_0_24px_rgba(16,185,129,0.025)]">
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
            className="group grid grid-cols-[96px_minmax(0,1fr)] gap-4 px-4 py-3 transition-colors hover:bg-emerald-500/[0.035]"
          >
            <ProofPlaceholder title="Image Pending" />
            <div className="min-w-0 self-center">
              <h4 className="mb-2 font-space-grotesk text-[18px] font-medium leading-tight text-text-primary">
                {item.title}
              </h4>
              <p className="mb-2 font-mono text-[12px] leading-[1.45] text-white/58">
                {item.description}
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-emerald-400 transition-colors group-hover:text-emerald-300">
                View Case Study
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.7} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}

function ProofSection() {
  return (
    <SectionShell label="Proof: Case Study Links" action="View All Case Studies" actionHref="/#case-files">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {proofGroups.map((group) => (
          <React.Fragment key={group.title}>
            <ProofCard group={group} />
          </React.Fragment>
        ))}
      </div>
    </SectionShell>
  );
}

function BuildCtaSection() {
  return (
    <section className="relative border border-emerald-500/14 bg-emerald-500/[0.018] p-5 sm:p-6">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(16,185,129,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.16)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative z-10 grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div>
          <div className="mb-4 text-mono-sm font-medium uppercase tracking-[0.08em] text-emerald-400">
            // Let's Build
          </div>
          <h2 className="font-mono text-[28px] uppercase leading-tight tracking-[0.04em] text-text-primary sm:text-[32px]">
            Ready to build a system?
          </h2>
          <p className="mt-3 max-w-[570px] font-mono text-[13px] leading-[1.55] text-white/62">
            Bring the scattered pieces. I'll help turn them into structure, interface, workflow, and deployment.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row lg:min-w-[600px]">
          <Link
            to="/contact"
            className="inline-flex min-h-16 flex-1 items-center justify-center gap-6 border border-emerald-400/55 bg-emerald-400 px-7 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-[#03110c] shadow-[0_0_22px_rgba(52,211,153,0.2)] transition-colors hover:bg-emerald-300"
          >
            <span>Start a Project</span>
            <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
          </Link>
          <Link
            to="/#case-files"
            className="inline-flex min-h-16 flex-1 items-center justify-center gap-6 border border-emerald-500/36 bg-black/28 px-7 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-white/62 transition-colors hover:border-emerald-400/55 hover:text-white/84"
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
        <section className="relative mb-10 min-h-[420px] overflow-hidden border-t border-white/8 pt-10 sm:pt-12">
          <div className="absolute left-1/2 top-0 h-1 w-36 -translate-x-1/2 bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.45)]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_48%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_74%_44%,rgba(16,185,129,0.07),transparent_30%)]" aria-hidden="true" />

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.72fr)] lg:items-center">
            <div className="min-w-0">
              <div className="mb-7 text-mono-sm font-medium uppercase tracking-[0.08em] text-emerald-400">
                006 // Service Stack
              </div>

              <h1 className="max-w-[680px] font-space-grotesk text-[40px] font-medium leading-[1.12] tracking-[-0.04em] text-text-primary sm:text-[54px] lg:text-[58px]">
                Client-facing systems for operators, founders, and teams moving through complexity.
              </h1>

              <p className="mt-6 max-w-[650px] text-body-lg font-space-grotesk leading-[1.45] tracking-[-0.01em] text-white/66">
                AI workflows, product interfaces, and brand operating systems - designed, structured, and deployed as usable systems.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-8 border border-emerald-400/55 bg-emerald-400 px-8 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-[#03110c] shadow-[0_0_22px_rgba(52,211,153,0.2)] transition-colors hover:bg-emerald-300"
                >
                  <span>Start a Build</span>
                  <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
                </Link>
                <Link
                  to="/#case-files"
                  className="inline-flex min-h-14 items-center justify-center gap-8 border border-emerald-500/36 bg-black/28 px-8 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-white/62 transition-colors hover:border-emerald-400/55 hover:text-white/84"
                >
                  <span>View Case Studies</span>
                  <Grid2X2 className="h-5 w-5 text-emerald-400/75" strokeWidth={1.8} />
                </Link>
              </div>
            </div>

            <ServiceStatusPanel />
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
