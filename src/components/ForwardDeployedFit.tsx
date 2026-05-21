const fitSignals = [
  'DISCOVERY',
  'SYSTEMS THINKING',
  'WORKFLOW DESIGN',
  'AI IMPLEMENTATION',
  'STAKEHOLDER TRANSLATION',
];

const zoneLabels = [
  {
    label: 'HIGH ACUMEN / LOW TECH',
    className: 'left-[13%] top-[20%]',
  },
  {
    label: 'LOW ACUMEN / LOW TECH',
    className: 'left-[13%] bottom-[25%]',
  },
  {
    label: 'HIGH TECH / LOW ACUMEN',
    className: 'right-[11%] bottom-[25%]',
  },
];

export function ForwardDeployedFit() {
  return (
    <section className="mb-10">
      <div className="relative overflow-hidden border border-emerald-500/15 bg-emerald-500/[0.025] px-4 py-3 sm:px-5">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(16,185,129,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.18)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
        <div className="pointer-events-none absolute right-3 top-3 flex gap-1">
          {[0, 1, 2, 3].map((tick) => (
            <span key={tick} className="h-1 w-1 bg-emerald-400/35" />
          ))}
        </div>

        <div className="relative min-w-0">
          <div className="mb-2 flex items-center gap-4">
            <span className="flex-shrink-0 text-mono-xs text-emerald-400">
              003 // FORWARD-DEPLOYED FIT
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.15fr)] lg:items-center lg:gap-8 xl:grid-cols-[minmax(0,0.85fr)_minmax(400px,1.2fr)]">
            <div className="min-w-0 lg:self-center">
              <div className="max-w-xl">
                <p className="text-mono-label leading-relaxed text-white/72">
                  I work where business problems, AI tooling, workflow design, and product interfaces overlap.{' '}
                  I map the friction, design the operating layer, prototype the system, and help teams deploy tools that make work easier to execute.
                </p>
              </div>

              <div className="mt-4 flex min-w-0 flex-wrap gap-2">
                {fitSignals.map((signal) => (
                  <span
                    key={signal}
                    className="border border-emerald-500/25 bg-black/20 px-2.5 py-1 text-mono-2xs text-emerald-400/78 shadow-[inset_0_0_8px_rgba(16,185,129,0.018)]"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="relative mx-auto min-h-[204px] w-full max-w-[520px] min-w-0 overflow-hidden px-3 pb-7 pt-0 sm:min-h-[214px] sm:px-4 sm:pb-8 sm:pl-14 sm:pt-0 lg:ml-auto lg:mr-0 xl:max-w-[548px]"
              role="img"
              aria-label="Technical fluency and commercial operator acumen quadrant showing forward-deployed fit in the high leverage top-right zone."
            >
              <div className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(16,185,129,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.16)_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="pointer-events-none absolute inset-x-4 bottom-9 top-5 border-l border-b border-emerald-500/34 sm:left-20 sm:right-5">
                <span className="absolute -right-[1px] bottom-[-3px] h-1.5 w-1.5 rotate-45 border-r border-t border-emerald-500/34" />
                <span className="absolute -left-[3px] -top-[1px] h-1.5 w-1.5 -rotate-45 border-r border-t border-emerald-500/34" />
              </div>
              <div className="pointer-events-none absolute left-4 right-4 top-[48%] border-t border-dashed border-emerald-500/22 sm:left-20 sm:right-5" />
              <div className="pointer-events-none absolute bottom-9 top-5 left-1/2 border-l border-dashed border-emerald-500/22" />

              <div className="relative z-10 h-full min-h-[168px]">
                <div className="mb-2 text-center text-mono-3xs uppercase text-white/48 sm:hidden">
                  Operator Acumen
                </div>
                <div className="pointer-events-none absolute bottom-0 left-[-0.1rem] top-5 hidden items-center justify-center sm:flex">
                  <span className="rotate-180 whitespace-nowrap text-mono-3xs uppercase text-white/50 [writing-mode:vertical-rl]">
                    Operator Acumen
                  </span>
                </div>
                <div className="pointer-events-none absolute bottom-[-1.95rem] left-1/2 -translate-x-1/2 text-mono-3xs uppercase text-white/48">
                  Technical Fluency
                </div>
                <div className="pointer-events-none absolute bottom-[-1.95rem] left-0 text-mono-3xs uppercase text-white/42 sm:left-6">
                  Low
                </div>
                <div className="pointer-events-none absolute bottom-[-1.95rem] right-0 text-mono-3xs uppercase text-white/42">
                  High
                </div>
                <div className="pointer-events-none absolute bottom-[-1.55rem] right-9 hidden h-px w-6 bg-white/42 sm:block">
                  <span className="absolute -right-1 -top-[3px] h-1.5 w-1.5 rotate-45 border-r border-t border-white/42" />
                </div>
                <div className="pointer-events-none absolute bottom-0 left-[-0.25rem] hidden text-mono-3xs uppercase text-white/32 sm:block">
                  Low
                </div>
                <div className="pointer-events-none absolute left-[-0.25rem] top-5 hidden text-mono-3xs uppercase text-white/32 sm:block">
                  High
                </div>

                {zoneLabels.map((zone) => (
                  <div
                    key={zone.label}
                    className={`pointer-events-none absolute max-w-[8rem] text-mono-3xs uppercase leading-relaxed text-white/35 ${zone.className}`}
                  >
                    {zone.label}
                  </div>
                ))}

                <div className="absolute right-[7%] top-[14%] flex max-w-[12rem] items-center gap-3 sm:right-[5%] sm:top-[15%]">
                  <div className="relative h-4 w-4 flex-shrink-0">
                    <span className="absolute -inset-5 bg-[radial-gradient(circle,rgba(16,185,129,0.22)_0%,rgba(16,185,129,0.06)_32%,transparent_68%)]" />
                    <span className="absolute inset-0 border border-emerald-300/60 bg-emerald-400/82 shadow-[0_0_14px_rgba(16,185,129,0.5)]" />
                    <span className="absolute inset-[5px] bg-black/50" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-mono-2xs uppercase leading-tight text-emerald-300">
                      Forward-Deployed Fit
                    </div>
                    <div className="mt-1 text-mono-3xs uppercase text-emerald-400/58">
                      High Leverage Zone
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
