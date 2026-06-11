const fitSignals = [
  '• DISCOVERY',
  '• SYSTEMS THINKING',
  '• WORKFLOW DESIGN',
  '• AI IMPLEMENTATION',
  '• STAKEHOLDER TRANSLATION',
];

const zoneLabels = [
  {
    label: 'HIGH ACUMEN / LOW TECH',
    className: 'left-[29%] top-[29%] -translate-x-1/2 text-center sm:left-[13%] sm:top-[25%] sm:translate-x-0 sm:text-left',
  },
  {
    label: 'LOW ACUMEN / LOW TECH',
    className: 'left-[29%] bottom-[17%] -translate-x-1/2 text-center sm:left-[13%] sm:bottom-[10%] sm:translate-x-0 sm:text-left',
  },
  {
    label: 'HIGH TECH / LOW ACUMEN',
    className: 'left-[76%] bottom-[17%] -translate-x-1/2 text-center sm:left-auto sm:right-[11%] sm:bottom-[10%] sm:translate-x-0 sm:text-left',
  },
];

function CubeHexMark() {
  return (
    <div
      className="relative mx-auto flex h-20 w-20 flex-shrink-0 items-center justify-center sm:h-22 sm:w-22"
      aria-hidden="true"
    >
      <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-emerald-400/24" />
      <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-emerald-400/24" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-emerald-400/24" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-emerald-400/24" />
      <svg viewBox="0 0 112 112" className="relative h-full w-full text-emerald-400">
        <defs>
          <radialGradient id="cube-core-glow" cx="50%" cy="52%" r="38%">
            <stop offset="0%" stopColor="rgba(16,185,129,0.22)" />
            <stop offset="45%" stopColor="rgba(16,185,129,0.08)" />
            <stop offset="100%" stopColor="rgba(16,185,129,0)" />
          </radialGradient>
        </defs>
        <polygon
          points="56 20 91 37.5 91 74.5 56 92 21 74.5 21 37.5"
          fill="none"
          stroke="rgba(16,185,129,0.22)"
          strokeWidth="1"
        />
        <polygon
          points="56 28 81.5 41.25 81.5 70.75 56 84 30.5 70.75 30.5 41.25"
          fill="none"
          stroke="rgba(16,185,129,0.12)"
          strokeWidth="0.8"
        />
        <circle cx="56" cy="56" r="27" fill="url(#cube-core-glow)" />

        <path
          d="M56 34L76 45.75L56 57.5L36 45.75L56 34Z"
          fill="rgba(16,185,129,0.055)"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinejoin="miter"
        />
        <path
          d="M36 45.75V68.25L56 80V57.5L36 45.75Z"
          fill="rgba(16,185,129,0.025)"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinejoin="miter"
        />
        <path
          d="M76 45.75V68.25L56 80V57.5L76 45.75Z"
          fill="rgba(16,185,129,0.04)"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinejoin="miter"
        />
        <path d="M56 34V57.5M56 57.5V80" stroke="rgba(16,185,129,0.78)" strokeWidth="1" />
        <path d="M36 45.75L56 57.5L76 45.75" stroke="rgba(16,185,129,0.5)" strokeWidth="0.85" />
        <path d="M36 68.25L56 57.5L76 68.25" stroke="rgba(16,185,129,0.28)" strokeWidth="0.75" />
      </svg>
    </div>
  );
}

function FitDiagram() {
  return (
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
      <div className="pointer-events-none absolute left-4 right-4 top-[46%] border-t border-dashed border-emerald-500/22 sm:left-20 sm:right-5" />
      <div className="pointer-events-none absolute bottom-9 top-5 left-[52%] border-l border-dashed border-emerald-500/22" />

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
          <span className="absolute -right-0 -top-[3px] h-1.5 w-1.5 rotate-45 border-r border-t border-white/42" />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-[-0.25rem] hidden text-mono-3xs uppercase text-white/32 sm:block">
          Low
        </div>
        <div className="pointer-events-none absolute left-[-0.45rem] top-5 hidden text-mono-3xs uppercase text-white/32 sm:block">
          High
        </div>

        {zoneLabels.map((zone) => (
          <div
            key={zone.label}
            className={`pointer-events-none absolute max-w-[6.8rem] text-mono-2xs uppercase leading-relaxed text-white/35 sm:max-w-[8rem] ${zone.className}`}
          >
            {zone.label}
          </div>
        ))}

        <div className="absolute left-[76%] top-[28%] flex w-auto -translate-x-1/2 items-center gap-2 text-left sm:left-auto sm:right-[5%] sm:top-[25%] sm:max-w-[12rem] sm:translate-x-0 sm:gap-3">
          <div className="relative h-4 w-4 flex-shrink-0">
            <span className="absolute -inset-5 bg-[radial-gradient(circle,rgba(16,185,129,0.22)_0%,rgba(16,185,129,0.06)_32%,transparent_68%)]" />
            <span className="absolute inset-0 border border-emerald-300/60 bg-emerald-400/82 shadow-[0_0_14px_rgba(16,185,129,0.5)]" />
            <span className="absolute inset-[5px] bg-black/50" />
          </div>
          <div className="min-w-0">
            <div className="whitespace-nowrap font-mono text-[8px] uppercase leading-none tracking-[0.08em] text-emerald-300 sm:whitespace-normal sm:text-[10px] sm:leading-tight sm:tracking-[0.1em]">
              Forward-Deployed Fit
            </div>
            <div className="mt-1 whitespace-nowrap font-mono text-[7px] uppercase leading-none tracking-[0.08em] text-emerald-400/58 sm:whitespace-normal sm:text-[9px] sm:leading-normal sm:tracking-[0.1em]">
              High Leverage Zone
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

          <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.15fr)] lg:items-center lg:gap-7 xl:grid-cols-[minmax(0,1fr)_minmax(400px,1fr)]">
            <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-[80px_minmax(0,1fr)] sm:items-start lg:grid-cols-[96px_minmax(0,1fr)]">
              <CubeHexMark />

              <div className="min-w-0">
                <div className="max-w-xl">
                  <p className="text-mono-sm leading-relaxed text-white/72">
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
            </div>

            <FitDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
