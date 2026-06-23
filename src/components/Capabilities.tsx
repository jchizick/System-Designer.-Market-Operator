import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Code2, Database, Workflow, type LucideIcon } from 'lucide-react';
import operatorPhoto from '../assets/about-page-still.png';
import { OperationalLoop } from './OperationalLoop';

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  {
    title: 'Product Systems',
    description: 'End-to-end product systems with dashboards, tools, and operational interfaces.',
    icon: Box,
  },
  {
    title: 'AI Workflow Systems',
    description: 'Design and integrate AI workflows that automate, augment, and accelerate real work.',
    icon: Workflow,
  },
  {
    title: 'Business Systems',
    description: 'Build the operating layer that connects data, people, processes, and tools.',
    icon: Database,
  },
  {
    title: 'Frontend Prototyping',
    description: 'Rapid, high-fidelity interfaces to test ideas, align stakeholders, and ship with confidence.',
    icon: Code2,
  },
];

const CapabilityCard: React.FC<{ capability: Capability }> = ({ capability }) => {
  const Icon = capability.icon;

  return (
    <article className="group relative min-h-[156px] overflow-hidden border border-emerald-500/12 bg-emerald-500/[0.035] p-3 transition-colors duration-300 hover:border-emerald-500/25 hover:bg-emerald-500/[0.055]">
      <div className="absolute right-2.5 top-2.5 flex gap-1">
        {[0, 1, 2, 3].map((tick) => (
          <span key={tick} className="h-1 w-1 bg-emerald-400/35 transition-colors group-hover:bg-emerald-400/55" />
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex h-full flex-col gap-2.5">
        <div className="flex items-start">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-emerald-500/25 bg-bg-surface/70 text-emerald-400">
            <Icon size={16} strokeWidth={1.5} />
          </div>
        </div>
        <h3 className="text-[14px] font-space-grotesk leading-snug text-text-primary">
          {capability.title}
        </h3>
        <p className="text-mono-2xs leading-relaxed text-white/60 sm:text-[10px]">
          {capability.description}
        </p>
      </div>
    </article>
  );
};

export function Capabilities() {
  return (
    <section className="mb-4">
      <div className="mb-4 flex items-center gap-4">
        <span className="flex-shrink-0 text-mono-xs text-emerald-400">
          004 // CAPABILITIES
        </span>
        <div className="h-px flex-1 bg-white/[0.06]" />
        <span className="hidden flex-shrink-0 text-mono-2xs text-text-secondary/40 sm:inline">
          SYSTEM SURFACE: ACTIVE
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <CapabilityCard key={capability.title} capability={capability} />
            ))}
          </div>

          <OperationalLoop />
        </div>

        <aside className="flex flex-col border border-border-subtle bg-[#070707] p-3">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-mono-2xs text-text-secondary/60">
              ABOUT / OPERATOR
            </span>
            <span className="flex items-center gap-1.5 text-mono-2xs font-medium text-emerald-400">
              ONLINE
              <span className="h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.65)]" />
            </span>
          </div>

          <div className="
  relative z-0 aspect-[5/4] w-full object-cover object-center
  opacity-95
  contrast-[1.06]
  brightness-[0.9]
  saturate-[0.85]">
            <img
              src={operatorPhoto}
              alt="Operator portrait"
              className="aspect-[5/4] w-full object-cover object-center  relative overflow-hidden border border-emerald-500/15 bg-bg-base
  shadow-[0_0_24px_rgba(16,185,129,0.07),inset_0_0_18px_rgba(16,185,129,0.04)]
  before:pointer-events-none before:absolute before:inset-0 before:z-10
  before:bg-emerald-500/[0.025] before:mix-blend-screen
  after:pointer-events-none after:absolute after:inset-0 after:z-10
  after:bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(16,185,129,0.035)_58%,rgba(0,0,0,0.26)_100%)]
"
            />
          </div>

          <div className="py-3">
            <p className="text-mono-label leading-relaxed text-text-primary/85">
              Independent operator building interfaces, AI workflows, and business systems for founders, operators, and small teams.
            </p>
            <p className="mt-2 text-mono-label leading-relaxed text-text-primary/85">
              Focused on durable systems that keep working after launch.
            </p>
          </div>

          <div className="mt-auto border-t border-white/[0.06] pt-3">
            <div className="space-y-2 pb-3">
              {[
                ['LOCATION', 'TORONTO, ON'],
                ['AVAILABILITY', 'OPEN'],
                ['ENGAGEMENT', 'PROJECT / RETAINER'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-baseline gap-2 text-mono-2xs uppercase">
                  <span className="font-medium text-emerald-400/80">{label}:</span>
                  <span className="text-text-primary/65">{value}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="flex w-full items-center justify-center border border-emerald-500/45 px-4 py-3 text-mono-xs font-medium uppercase tracking-[0.1em] text-emerald-400 transition-colors duration-300 hover:border-emerald-400/75 hover:bg-emerald-500/[0.055] hover:text-emerald-300 hover:shadow-[0_0_16px_rgba(16,185,129,0.08)]"
            >
              CONTACT OPERATOR &rarr;
            </Link>
          </div>
        </aside>
      </div >
    </section >
  );
}
