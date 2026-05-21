import React from 'react';
import {
  Activity,
  Blocks,
  Crosshair,
  Database,
  LayoutDashboard,
  Network,
  PenLine,
  Upload,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

interface ProcessStep {
  label: string;
  icon: LucideIcon;
}

interface StackItem {
  label: string;
  copy: string;
  icon: LucideIcon;
}

interface MetricItem {
  label: string;
  value: string;
  filledSegments: number;
}

const processSteps: ProcessStep[] = [
  { label: 'Discover', icon: Crosshair },
  { label: 'Design', icon: PenLine },
  { label: 'Build', icon: Blocks },
  { label: 'Deploy', icon: Upload },
  { label: 'Operate', icon: Activity },
];

const stackItems: StackItem[] = [
  { label: 'Data', copy: 'Connect & Normalize', icon: Database },
  { label: 'Models', copy: 'LLM + Tools Orchestration', icon: Network },
  { label: 'Workflows', copy: 'Automate & Augment', icon: Workflow },
  { label: 'Interfaces', copy: 'Dashboards & Internal Tools', icon: LayoutDashboard },
];

const metrics: MetricItem[] = [
  { label: 'Task Automation', value: '78%', filledSegments: 8 },
  { label: 'Cycle Time', value: '-42%', filledSegments: 6 },
  { label: 'System Uptime', value: '99.9%', filledSegments: 10 },
];

function SegmentedMetricBar({
  filledSegments,
  totalSegments = 10,
}: {
  filledSegments: number;
  totalSegments?: number;
}) {
  return (
    <div className="flex shrink-0 items-center gap-[2px]" aria-hidden="true">
      {Array.from({ length: totalSegments }, (_, segmentIndex) => {
        const isActive = segmentIndex < filledSegments;

        return (
          <span
            key={segmentIndex}
            className={[
              'h-2.5 w-[3px] border border-emerald-500/10 sm:h-3 sm:w-1',
              isActive
                ? 'bg-emerald-400/75 shadow-[0_0_5px_rgba(52,211,153,0.18)]'
                : 'bg-emerald-950/45',
            ].join(' ')}
          />
        );
      })}
    </div>
  );
}

function SurfaceSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-emerald-500/15 px-3 py-2.5 sm:px-4 sm:py-3">
      <div className="mb-2 text-mono-2xs uppercase text-emerald-400/65 sm:mb-3">
        {title}
      </div>
      {children}
    </section>
  );
}

export function DeploymentSurface() {
  return (
    <>
      <style>{`
        @keyframes deployment-rail-signal {
          0%, 5% {
            transform: translateX(-40%);
            opacity: 0;
          }
          9% {
            opacity: 0.72;
          }
          21% {
            transform: translateX(40%);
            opacity: 0.56;
          }
          26%, 100% {
            transform: translateX(40%);
            opacity: 0;
          }
        }

        @keyframes deployment-link-heartbeat {
          0%, 70%, 100% { opacity: 0.62; }
          24% { opacity: 1; }
        }

        .deployment-rail {
          overflow: visible;
          pointer-events: none;
          z-index: 1;
        }

        .deployment-rail::before {
          content: "";
          position: absolute;
          left: 50%;
          top: -4px;
          z-index: 3;
          width: 8px;
          height: 8px;
          border-right: 1.5px solid rgba(52, 211, 153, 0.82);
          border-top: 1.5px solid rgba(52, 211, 153, 0.82);
          opacity: 0.86;
          transform: translateX(-50%) rotate(45deg);
        }

        .deployment-rail::after {
          content: "";
          position: absolute;
          inset-inline: 0;
          top: -2px;
          z-index: 2;
          height: 4px;
          background: linear-gradient(
            90deg,
            transparent 0 calc(50% - 2px),
            rgba(52, 211, 153, 0.9) calc(50% - 2px) calc(50% + 2px),
            transparent calc(50% + 2px) 100%
          );
          box-shadow: 0 0 4px rgba(16, 185, 129, 0.35);
          opacity: 0;
          transform: translateX(-40%);
          animation: deployment-rail-signal 6.8s cubic-bezier(0.42, 0, 0.24, 1) infinite;
          animation-delay: var(--rail-delay, 0s);
        }

        .deployment-rail-delay-1::after { --rail-delay: 1.7s; }
        .deployment-rail-delay-2::after { --rail-delay: 3.4s; }
        .deployment-rail-delay-3::after { --rail-delay: 5.1s; }

        .deployment-stack-card::before {
          content: "";
          position: absolute;
          inset-block: 0;
          left: -3rem;
          z-index: 0;
          width: 3rem;
          pointer-events: none;
          background: linear-gradient(
            100deg,
            transparent 0%,
            rgba(16, 185, 129, 0.08) 34%,
            rgba(16, 185, 129, 0.18) 50%,
            rgba(16, 185, 129, 0.08) 66%,
            transparent 100%
          );
          mix-blend-mode: screen;
          opacity: 0;
          transform: translateX(-135%);
          transition: opacity 240ms ease, transform 520ms ease;
        }

        .deployment-stack-card:hover::before {
          opacity: 0.6;
          transform: translateX(560%);
        }

        .deployment-link-status {
          animation: deployment-link-heartbeat 5.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .deployment-rail::after,
          .deployment-stack-card::before,
          .deployment-link-status {
            animation: none !important;
          }

          .deployment-rail::after,
          .deployment-stack-card::before {
            opacity: 0 !important;
          }
        }
      `}</style>
      <div className="relative w-full min-w-0 overflow-hidden border border-emerald-500/20 bg-bg-surface/70 shadow-[0_0_28px_rgba(16,185,129,0.035),inset_0_0_20px_rgba(16,185,129,0.025)]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(16,185,129,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.18)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative">
          <header className="flex min-w-0 items-center justify-between gap-2 border-b border-emerald-500/15 bg-white/[0.018] px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5">
            <span className="min-w-0 truncate text-mono-2xs uppercase text-text-secondary/65">
              Deployment Orchestration Surface
            </span>
            <span className="flex shrink-0 items-center gap-2 text-mono-3xs uppercase text-emerald-400/80">
              Link: Secure
              <span className="deployment-link-status h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.45)]" />
            </span>
          </header>

          <section className="px-3 py-3 sm:px-4 sm:py-4">
            <div className="grid grid-cols-5 gap-1 sm:gap-2">
              {processSteps.map(({ label, icon: Icon }, index) => (
                <div key={label} className="relative flex min-w-0 flex-col items-center gap-1.5 sm:gap-2">
                  {index < processSteps.length - 1 ? (
                    <div
                      className={[
                        'deployment-rail absolute left-[calc(50%+1.5rem)] right-[calc(-50%+1rem)] top-[2.45rem] hidden border-t border-dashed border-emerald-500/35 sm:block',
                        index > 0 ? `deployment-rail-delay-${index}` : '',
                      ].join(' ')}
                    />
                  ) : null}
                  <div className="text-mono-3xs uppercase text-text-secondary/50">
                    {label}
                  </div>
                  <div
                    className="deployment-node relative z-10 flex h-7 w-7 items-center justify-center border border-emerald-500/25 bg-black/30 text-emerald-400 shadow-[inset_0_0_12px_rgba(16,185,129,0.035)] sm:h-10 sm:w-10"
                  >
                    <Icon size={15} strokeWidth={1.5} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <SurfaceSection title="Enterprise Stack">
            <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2 lg:grid-cols-4">
              {stackItems.map(({ label, copy, icon: Icon }, index) => (
                <article
                  key={label}
                  className="deployment-stack-card relative min-w-0 overflow-hidden border border-emerald-500/18 bg-black/20 p-2 transition-colors duration-300 hover:border-emerald-400/30 hover:bg-emerald-500/[0.035] sm:p-2.5"
                >
                  <div className="relative z-10 mb-1.5 flex items-center justify-between gap-2 sm:mb-2.5">
                    <span className="text-mono-3xs uppercase text-emerald-400/70">
                      {label}
                    </span>
                    <Icon className="shrink-0 text-emerald-400/75" size={14} strokeWidth={1.5} />
                  </div>
                  <p className="relative z-10 break-words text-mono-3xs leading-relaxed text-white/65 sm:text-mono-label lg:text-mono-3xs">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </SurfaceSection>

          <SurfaceSection title="Response Metrics">
            <div className="space-y-1.5 sm:hidden">
              {metrics.map(({ label, value, filledSegments }) => (
                <div
                  key={label}
                  className="min-w-0 border-t border-emerald-500/12 bg-emerald-500/[0.01] px-1.5 py-1.5"
                >
                  <div className="min-w-0 truncate text-mono-3xs uppercase text-emerald-400/55">
                    <span className="text-emerald-500/45">//</span>{' '}
                    {label}
                  </div>
                  <div className="mt-1 flex min-w-0 items-center justify-between gap-3">
                    <SegmentedMetricBar filledSegments={filledSegments} />
                    <div className="shrink-0 font-mono text-[15px] leading-none text-emerald-300/65 tabular-nums">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden grid-cols-3 gap-2 sm:grid">
              {metrics.map(({ label, value, filledSegments }) => (
                <div
                  key={label}
                  className="min-w-0 border-l border-t border-emerald-500/12 bg-emerald-500/[0.01] px-2 py-1.5"
                >
                  <div className="mb-0.5 truncate text-mono-3xs uppercase text-emerald-400/55">
                    <span className="text-emerald-500/45">//</span>{' '}
                    {label}
                  </div>
                  <div className="flex min-w-0 items-center justify-between gap-2">
                    <SegmentedMetricBar filledSegments={filledSegments} />
                    <div className="shrink-0 font-mono text-[15px] leading-none text-emerald-300/65 tabular-nums">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SurfaceSection>
        </div>
      </div>
    </>
  );
}
