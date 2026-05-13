import React from 'react';
import { Box, Code2, Layers, Repeat2, Workflow, type LucideIcon } from 'lucide-react';
import operatorPhoto from '../assets/operator-photo.png';

type Capability = {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  {
    label: '01 // PRODUCT',
    title: 'Product Systems',
    description: 'Interface architecture, dashboards, user flows, and internal tools built for clarity under pressure.',
    icon: Box,
  },
  {
    label: '02 // AI',
    title: 'AI Workflows',
    description: 'Prompt systems, automation logic, brand engines, and content pipelines that scale useful output.',
    icon: Workflow,
  },
  {
    label: '03 // BRAND',
    title: 'Brand Infrastructure',
    description: 'Positioning, visual systems, messaging frameworks, and campaign assets aligned into one operating layer.',
    icon: Layers,
  },
  {
    label: '04 // FRONTEND',
    title: 'Frontend Prototyping',
    description: 'React and Next.js interfaces, interactive layouts, and fast MVP builds for testing ideas in motion.',
    icon: Code2,
  },
];

const CapabilityCard: React.FC<{ capability: Capability }> = ({ capability }) => {
  const Icon = capability.icon;

  return (
    <article className="group relative min-h-[150px] overflow-hidden border border-emerald-500/12 bg-emerald-500/[0.035] p-4 transition-all duration-300 hover:border-emerald-500/25 hover:bg-emerald-500/[0.055]">
      <div className="absolute right-3 top-3 flex gap-1">
        {[0, 1, 2, 3].map((tick) => (
          <span key={tick} className="h-1 w-1 bg-emerald-400/35 transition-colors group-hover:bg-emerald-400/55" />
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex h-full gap-4">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-emerald-500/25 bg-bg-surface/70 text-emerald-400">
          <Icon size={18} strokeWidth={1.5} />
        </div>
        <div className="min-w-0 pt-0.5">
          <div className="mb-2 text-mono-2xs font-medium text-emerald-400/80">
            {capability.label}
          </div>
          <h3 className="mb-2 text-body-base font-normal leading-tight text-text-primary">
            {capability.title}
          </h3>
          <p className="text-mono-label text-white/60">
            {capability.description}
          </p>
        </div>
      </div>
    </article>
  );
};

export function Capabilities() {
  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center gap-4">
        <span className="flex-shrink-0 text-mono-xs text-emerald-400">
          005 // CAPABILITIES
        </span>
        <div className="h-px flex-1 bg-white/[0.06]" />
        <span className="hidden flex-shrink-0 text-mono-2xs text-text-secondary/40 sm:inline">
          SYSTEM SURFACE: ACTIVE
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {capabilities.map((capability) => (
              <CapabilityCard key={capability.label} capability={capability} />
            ))}
          </div>

          <div className="relative overflow-hidden border border-emerald-500/12 bg-emerald-500/[0.035] p-4">
            <div className="absolute left-0 top-0 h-full w-px bg-emerald-400/25" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-emerald-500/25 bg-bg-surface/70 text-emerald-400">
                <Repeat2 size={18} strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <div className="mb-2 text-mono-2xs font-medium text-emerald-400/80">
                  OPERATOR PHILOSOPHY
                </div>
                <p className="text-mono-label text-white/60">
                  Systems over assets. Durability over decoration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="border border-border-subtle bg-[#070707] p-3">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-mono-2xs text-text-secondary/60">
              ABOUT / OPERATOR
            </span>
            <span className="flex items-center gap-1.5 text-mono-2xs font-medium text-emerald-400">
              ONLINE
              <span className="h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.65)]" />
            </span>
          </div>

          <div className="relative overflow-hidden border border-emerald-500/15 bg-bg-base shadow-[0_0_24px_rgba(16,185,129,0.08),inset_0_0_18px_rgba(16,185,129,0.05)] before:pointer-events-none before:absolute before:inset-0 before:z-10 before:bg-emerald-500/[0.055] before:mix-blend-screen after:pointer-events-none after:absolute after:inset-0 after:z-10 after:bg-[radial-gradient(circle_at_50%_34%,transparent_0%,rgba(16,185,129,0.06)_58%,rgba(0,0,0,0.34)_100%)]">
            <img
              src={operatorPhoto}
              alt="Operator portrait"
              className="relative z-0 aspect-[4/3] w-full object-cover object-center opacity-90 grayscale contrast-[1.12] brightness-[0.78] saturate-[0.55]"
            />
          </div>

          <div className="border-b border-white/[0.06] py-3">
            <p className="text-mono-label leading-relaxed text-text-primary/85">
              Independent operator.
              <br />
              Systems thinker. Builder.
            </p>
          </div>

          <div className="flex gap-3 pt-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-emerald-400" />
            <p className="text-body-xs text-white/60">
              Operating at the intersection of design, code, and strategy. Focused on durable systems that compound over time.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
