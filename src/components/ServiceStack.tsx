import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Radar, Workflow, type LucideIcon } from 'lucide-react';

type Service = {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    label: '01 // AI',
    title: 'AI Workflow Systems',
    description: 'Prompt architecture, automation logic, and repeatable content pipelines for small teams.',
    icon: Workflow,
  },
  {
    label: '02 // PRODUCT',
    title: 'Product Interface Systems',
    description: 'Dashboards, internal tools, prototypes, and decision-support interfaces built for clarity under pressure.',
    icon: LayoutDashboard,
  },
  {
    label: '03 // BRAND',
    title: 'Brand Operating Systems',
    description: 'Positioning, messaging, identity, and campaign assets connected into one deployable system.',
    icon: Radar,
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = service.icon;

  return (
    <article className="group relative min-h-[168px] overflow-hidden border border-emerald-500/12 bg-emerald-500/[0.025] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition-all duration-300 hover:border-emerald-500/25 hover:bg-emerald-500/[0.045]">
      <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(16,185,129,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.18)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute inset-x-0 top-0 h-7 border-b border-emerald-500/[0.08] bg-emerald-500/[0.025]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute left-0 top-0 h-px w-12 bg-emerald-400/40" />
      <div className="absolute bottom-0 right-0 h-px w-12 bg-emerald-400/20" />
      <div className="absolute right-3 top-3 flex gap-1">
        {[0, 1, 2, 3].map((tick) => (
          <span key={tick} className="h-1 w-1 bg-emerald-400/30 transition-colors group-hover:bg-emerald-400/55" />
        ))}
      </div>
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-4 flex items-start gap-4">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-emerald-500/25 bg-bg-surface/70 text-emerald-400 shadow-[inset_0_0_12px_rgba(16,185,129,0.035)]">
            <Icon size={18} strokeWidth={1.5} />
          </div>
          <div className="min-w-0 pt-0.5">
            <span className="mb-2 block text-mono-2xs font-medium text-emerald-400/80">
              {service.label}
            </span>
            <h3 className="text-body-base font-normal leading-tight text-text-primary">
              {service.title}
            </h3>
          </div>
        </div>
        <p className="text-mono-label leading-relaxed text-white/60">
          {service.description}
        </p>
      </div>
    </article>
  );
};

export function ServiceStack() {
  return (
    <section className="mt-2 mb-4">
      <div className="mb-3 flex items-center gap-4">
        <span className="flex-shrink-0 text-mono-xs text-emerald-400">
          006 // SERVICE STACK
        </span>
        <div className="h-px flex-1 bg-white/[0.08]" />
        <Link
          to="/services"
          className="flex flex-shrink-0 items-center gap-1.5 text-mono-xs text-emerald-500 transition-colors hover:text-emerald-400"
        >
          ACCESS FULL SERVICES
          <span className="text-[10px]">&rarr;</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.label} service={service} />
        ))}
      </div>

      <div className="mt-4 border border-emerald-500/12 bg-emerald-500/[0.035] px-4 py-3">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <div className="mb-2 text-mono-2xs font-medium text-emerald-400/80">
              OPERATOR FIT
            </div>
            <p className="text-body-sm text-text-primary/80">
              Built for operators, founders, and teams moving through complexity.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex flex-shrink-0 items-center justify-center border border-emerald-500/25 bg-bg-surface/70 px-3 py-2 text-mono-xs text-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.04),inset_0_0_10px_rgba(16,185,129,0.025)] transition-all duration-300 hover:border-emerald-400/45 hover:bg-emerald-500/[0.065] hover:text-emerald-300 hover:shadow-[0_0_18px_rgba(16,185,129,0.09),inset_0_0_12px_rgba(16,185,129,0.04)]"
          >
            [ ACCESS SERVICE STACK ]
          </Link>
        </div>
      </div>
    </section>
  );
}
