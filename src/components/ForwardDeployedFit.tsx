const fitSignals = [
  'DISCOVERY',
  'SYSTEMS THINKING',
  'WORKFLOW DESIGN',
  'AI IMPLEMENTATION',
  'STAKEHOLDER TRANSLATION',
];

export function ForwardDeployedFit() {
  return (
    <section className="mb-10">
      <div className="relative overflow-hidden border border-emerald-500/15 bg-emerald-500/[0.025] px-4 py-4 sm:px-5">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(16,185,129,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.18)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
        <div className="pointer-events-none absolute right-3 top-3 flex gap-1">
          {[0, 1, 2, 3].map((tick) => (
            <span key={tick} className="h-1 w-1 bg-emerald-400/35" />
          ))}
        </div>

        <div className="relative min-w-0">
          <div className="mb-3 flex items-center gap-4">
            <span className="flex-shrink-0 text-mono-xs text-emerald-400">
              003 // FORWARD-DEPLOYED FIT
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.7fr)_minmax(240px,0.8fr)] lg:items-start lg:gap-14">
            <div className="min-w-0">
              <div className="max-w-3xl space-y-3">
                <div className="border-l border-emerald-500/20 pl-3">
                  <p className="text-mono-label leading-relaxed text-white/68">
                    I work where business problems, AI tooling, workflow design, and product interfaces overlap.
                  </p>
                </div>

                <div className="border-l border-emerald-500/20 pl-3">
                  <p className="text-mono-label leading-relaxed text-white/68">
                    I map the friction, design the operating layer, prototype the system, and help teams deploy tools that make work easier to execute.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-wrap gap-2">
              {fitSignals.map((signal) => (
                <span
                  key={signal}
                  className="border border-emerald-500/18 bg-black/20 px-2.5 py-1 text-mono-2xs text-emerald-400/72"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
