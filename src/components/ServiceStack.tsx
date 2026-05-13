import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    label: '01 // AI',
    title: 'AI Workflow Systems',
    description: 'Prompt architecture, automation logic, and repeatable content pipelines for small teams.',
  },
  {
    label: '02 // PRODUCT',
    title: 'Product Interface Systems',
    description: 'Dashboards, internal tools, prototypes, and decision-support interfaces built for clarity under pressure.',
  },
  {
    label: '03 // BRAND',
    title: 'Brand Operating Systems',
    description: 'Positioning, messaging, identity, and campaign assets connected into one deployable system.',
  },
];

type Service = (typeof services)[number];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <article className="group relative min-h-[176px] overflow-hidden border border-emerald-500/12 bg-[#070707] p-4 transition-all duration-300 hover:border-emerald-500/25 hover:bg-emerald-500/[0.035]">
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(16,185,129,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.18)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute left-0 top-0 h-px w-12 bg-emerald-400/40" />
      <div className="absolute bottom-0 right-0 h-px w-12 bg-emerald-400/20" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 flex items-center justify-between gap-3">
          <span className="text-mono-2xs font-medium text-emerald-400/80">
            {service.label}
          </span>
          <span className="h-1.5 w-1.5 bg-emerald-400/50 shadow-[0_0_6px_rgba(16,185,129,0.35)]" />
        </div>
        <h3 className="mb-3 text-body-base font-normal leading-tight text-text-primary">
          {service.title}
        </h3>
        <p className="text-mono-label leading-relaxed text-white/60">
          {service.description}
        </p>
      </div>
    </article>
  );
};

export function ServiceStack() {
  return (
    <section className="mb-4">
      <div className="mb-3 flex items-center gap-4">
        <span className="flex-shrink-0 text-mono-xs text-emerald-400">
          006 // SERVICE STACK
        </span>
        <div className="h-px flex-1 bg-white/[0.06]" />
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
            className="inline-flex flex-shrink-0 items-center justify-center border border-emerald-500/25 bg-bg-surface/70 px-3 py-2 text-mono-xs text-emerald-400 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-500/[0.06] hover:text-emerald-300"
          >
            [ ACCESS SERVICE STACK ]
          </Link>
        </div>
      </div>
    </section>
  );
}
