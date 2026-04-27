import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const EXECUTE_INDEX = 3;

const nodes = [
  {
    id: "OBSERVE",
    label: "01",
    desc: "Market behavior, user patterns, anomalies",
    detail: "Scan environment. Ingest raw streams. Detect behavioral drift and statistical anomalies early.",
    icon: "◉"
  },
  {
    id: "FILTER",
    label: "02",
    desc: "Remove noise, isolate signal",
    detail: "Strip noise. Isolate signal. Preserve edge-critical variance.",
    icon: "⬡"
  },
  {
    id: "STRUCTURE",
    label: "03",
    desc: "Build decision framework",
    detail: "Convert signal into a thesis. Define risk. Set triggers.",
    icon: "◈"
  },
  {
    id: "EXECUTE",
    label: "04",
    desc: "Deploy with discipline",
    detail: "Deploy capital with precision. No hesitation. No override.",
    icon: "▣"
  },
  {
    id: "REVIEW",
    label: "05",
    desc: "Refine edge, iterate",
    detail: "Audit outcome. Compare expected vs realized. Update the model.",
    icon: "◎"
  }
];

// ─── Execution payoff: rapid-counting telemetry readout ───
function ExecutionTelemetry() {
  const [tick, setTick] = useState(0);
  const maxTicks = 18;

  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => {
        if (t >= maxTicks) { clearInterval(id); return t; }
        return t + 1;
      });
    }, 80);
    return () => clearInterval(id);
  }, []);

  const progress = Math.min(tick / maxTicks, 1);
  const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

  const latency = Math.round(14 - eased * 11.8);
  const fillRate = Math.round(eased * 99.7 * 10) / 10;
  const slippage = Math.round((1 - eased) * 2.4 * 100) / 100;
  const throughput = Math.round(eased * 12400);
  const pnl = `+${(eased * 3.42).toFixed(2)}`;
  const confirmed = tick >= maxTicks;

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Status header */}
      <div className="flex items-center gap-2">
        <motion.div
          className="w-2 h-2 bg-emerald-500"
          animate={{
            opacity: confirmed ? 1 : [1, 0.3, 1],
            boxShadow: confirmed
              ? '0 0 8px rgba(16,185,129,0.8)'
              : ['0 0 2px rgba(16,185,129,0.4)', '0 0 8px rgba(16,185,129,0.8)', '0 0 2px rgba(16,185,129,0.4)'],
          }}
          transition={{ duration: 0.3, repeat: confirmed ? 0 : Infinity }}
        />
        <span className="font-mono text-[11px] text-emerald-500 tracking-[0.08em]">
          {confirmed ? 'ORDER DEPLOYED' : 'DEPLOYING...'}
        </span>
        {confirmed && (
          <motion.span
            className="text-mono-2xs text-emerald-500/60 ml-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✓ ALL SYSTEMS NOMINAL
          </motion.span>
        )}
      </div>

      {/* Telemetry grid */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
        {[
          { label: 'LATENCY', value: `${latency}ms`, highlight: confirmed },
          { label: 'FILL_RATE', value: `${fillRate}%`, highlight: confirmed },
          { label: 'SLIPPAGE', value: `${slippage}bps`, highlight: confirmed },
          { label: 'THROUGHPUT', value: `${throughput}/s`, highlight: false },
          { label: 'NET_Δ', value: `${pnl}σ`, highlight: confirmed },
        ].map((metric) => (
          <div key={metric.label} className="flex flex-col">
            <span className="text-mono-2xs text-text-secondary/70 mb-0.5">
              {metric.label}
            </span>
            <span
              className={`font-mono text-[15px] tabular-nums transition-colors duration-200 ${metric.highlight ? 'text-emerald-500' : 'text-text-primary/80'
                }`}
            >
              {metric.value}
            </span>
          </div>
        ))}
      </div>

      {/* Execution receipt bar */}
      {confirmed && (
        <motion.div
          className="h-px w-full bg-emerald-500/30 relative overflow-hidden mt-1"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformOrigin: 'left' }}
        />
      )}
    </div>
  );
}

// ─── Shockwave rings that expand from the EXECUTE node ───
function ShockwaveRings() {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute border border-emerald-500/40"
          initial={{ width: 40, height: 40, opacity: 0.8 }}
          animate={{ width: 200 + i * 80, height: 200 + i * 80, opacity: 0 }}
          transition={{
            duration: 1.2,
            delay: i * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ borderRadius: 0 }}
        />
      ))}
    </div>
  );
}

// ─── Full-width flash sweep ───
function FlashSweep() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 0.6, times: [0, 0.1, 1] }}
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.12) 40%, rgba(16,185,129,0.25) 50%, rgba(16,185,129,0.12) 60%, transparent 100%)',
      }}
    />
  );
}

// ─── Chain cascade: lights all connections simultaneously ───
function ChainCascade() {
  return (
    <motion.div
      className="absolute top-0 left-0 right-0 h-full pointer-events-none z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.7, 0] }}
      transition={{ duration: 0.8, times: [0, 0.2, 1] }}
    >
      <div className="absolute inset-x-12 top-1/2 h-px"
        style={{
          background: 'linear-gradient(90deg, rgba(16,185,129,0.1), rgba(16,185,129,0.6), rgba(16,185,129,0.9), rgba(16,185,129,0.6), rgba(16,185,129,0.1))',
          boxShadow: '0 0 12px rgba(16,185,129,0.4)',
        }}
      />
    </motion.div>
  );
}

// ─── Connection line between nodes ───
function ConnectionLine({ active, index, isExecuting }: { active: boolean; index: number; isExecuting: boolean }) {
  return (
    <div className="hidden md:flex items-center flex-1 relative" style={{ minWidth: 40 }}>
      {/* Base line */}
      <div className={`absolute inset-x-0 top-1/2 h-px transition-colors duration-300 ${isExecuting ? 'bg-emerald-500/30' : 'bg-border-subtle'
        }`} />

      {/* Animated pulse */}
      <motion.div
        className="absolute top-1/2 h-px"
        style={{
          background: active || isExecuting
            ? 'linear-gradient(90deg, transparent, #10b981, transparent)'
            : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        }}
        initial={{ left: '-20%', width: '20%' }}
        animate={{ left: '100%' }}
        transition={{
          duration: isExecuting ? 0.6 : 1.5,
          repeat: Infinity,
          delay: index * (isExecuting ? 0.1 : 0.4),
          ease: 'linear',
        }}
      />

      {/* Arrow head */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path
            d="M1 1L4 4L1 7"
            stroke={active || isExecuting ? '#10b981' : 'rgba(255,255,255,0.15)'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Data tick marks */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 w-px h-1.5 -translate-y-1/2"
          style={{
            left: `${25 + i * 25}%`,
            backgroundColor: active || isExecuting ? 'rgba(16,185,129,0.4)' : 'rgba(255,255,255,0.06)',
          }}
        />
      ))}
    </div>
  );
}

// Mobile connection (vertical)
function MobileConnection({ active, index }: { active: boolean; index: number }) {
  return (
    <div className="md:hidden flex flex-col items-center py-1 relative" style={{ height: 32 }}>
      <div className="absolute inset-y-0 left-1/2 w-px bg-border-subtle" />
      <motion.div
        className="absolute left-1/2 w-px"
        style={{
          background: active
            ? 'linear-gradient(180deg, transparent, #10b981, transparent)'
            : 'linear-gradient(180deg, transparent, rgba(255,255,255,0.1), transparent)',
        }}
        initial={{ top: '-20%', height: '20%' }}
        animate={{ top: '100%' }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: index * 0.3,
          ease: 'linear',
        }}
      />
      {/* Arrow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path
            d="M1 1L4 4L7 1"
            stroke={active ? '#10b981' : 'rgba(255,255,255,0.15)'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function OperationalDoctrine() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showShockwave, setShowShockwave] = useState(false);
  const [executionKey, setExecutionKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const prevIndexRef = useRef<number>(0);

  // ─── Trigger execute payoff ───
  const triggerExecution = useCallback(() => {
    setIsExecuting(true);
    setShowShockwave(true);
    setExecutionKey((k) => k + 1);

    // DISABLED: Shake the section (uncomment to re-enable)
    // if (sectionRef.current) {
    //   sectionRef.current.classList.add('doctrine-shake');
    //   setTimeout(() => {
    //     sectionRef.current?.classList.remove('doctrine-shake');
    //   }, 600);
    // }

    // Clear shockwave after animation
    setTimeout(() => setShowShockwave(false), 1400);

    // Hold the execute state extra long so users absorb it
    setTimeout(() => setIsExecuting(false), 4000);
  }, []);

  // ─── Detect when EXECUTE becomes active ───
  useEffect(() => {
    if (activeIndex === EXECUTE_INDEX && prevIndexRef.current !== EXECUTE_INDEX) {
      triggerExecution();
    }
    prevIndexRef.current = activeIndex;
  }, [activeIndex, triggerExecution]);

  // Auto-cycle through nodes (pause longer on EXECUTE)
  useEffect(() => {
    if (!isAutoPlay) return;
    const duration = activeIndex === EXECUTE_INDEX && isExecuting ? 5500 : 3000;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nodes.length);
    }, duration);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlay, activeIndex, isExecuting]);

  const handleNodeClick = (idx: number) => {
    setIsAutoPlay(false);
    setActiveIndex(idx);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setTimeout(() => {
      setIsAutoPlay(true);
    }, 8000) as unknown as ReturnType<typeof setInterval>;
  };

  const activeNode = nodes[activeIndex];
  const isOnExecute = activeIndex === EXECUTE_INDEX;

  return (
    <section
      ref={sectionRef}
      className="border-t border-border-subtle pt-10 pb-8 relative"
      style={{
        // inject the shake keyframes inline so we need zero CSS file changes
      }}
    >
      {/* DISABLED: Shake keyframes (uncomment to re-enable)
      <style>{`
        @keyframes doctrineShake {
          0%, 100% { transform: translateX(0); }
          10% { transform: translateX(-2px) translateY(1px); }
          20% { transform: translateX(3px); }
          30% { transform: translateX(-1px) translateY(-1px); }
          40% { transform: translateX(2px); }
          50% { transform: translateX(-2px); }
          60% { transform: translateX(1px) translateY(1px); }
          70% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }
        .doctrine-shake {
          animation: doctrineShake 0.5s ease-out;
        }
      `}</style>
      */}

      {/* DISABLED: Section-wide flash on execute (uncomment to re-enable)
      <AnimatePresence>
        {showShockwave && <FlashSweep key="flash" />}
      </AnimatePresence>
      */}

      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-mono-xs text-emerald-400 mb-1">
            004 // DOCTRINE
          </div>
          <h2 className="text-[24px] font-normal tracking-[-0.02em] text-text-primary">
            Operational Loop
          </h2>
        </div>
        <div className="text-mono-2xs text-text-secondary/50 text-right hidden sm:block">
          <div>CYCLE: {String(activeIndex + 1).padStart(2, '0')}/05</div>
          <div className="mt-0.5">MODE: {isAutoPlay ? 'AUTO' : 'MANUAL'}</div>
        </div>
      </div>

      {/* Progress bar — throbs on execute */}
      <div className="h-px bg-white/[0.04] mb-8 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full"
          style={{
            backgroundColor: isOnExecute ? 'rgba(16,185,129,0.9)' : 'rgba(16,185,129,0.6)',
          }}
          initial={false}
          animate={{
            width: `${((activeIndex + 1) / nodes.length) * 100}%`,
            boxShadow: isOnExecute
              ? '0 0 12px rgba(16,185,129,0.6)'
              : '0 0 0px transparent',
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      {/* ═══════════ Desktop: Horizontal node flow ═══════════ */}
      <div className="hidden md:flex items-center w-full mb-8 relative">
        {/* Shockwave rings on EXECUTE */}
        <AnimatePresence>
          {showShockwave && (
            <div
              key="shockwave"
              className="absolute z-20 pointer-events-none"
              style={{
                // Position over the EXECUTE node (4th of 5 nodes, roughly 75% across if evenly spaced)
                left: '75%',
                top: '20px',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <ShockwaveRings />
            </div>
          )}
        </AnimatePresence>

        {/* Chain cascade flash across all connection lines */}
        <AnimatePresence>
          {showShockwave && (
            <div
              key="cascade"
              className="absolute inset-0 z-20 pointer-events-none flex items-start"
              style={{ paddingTop: 20 }}
            >
              <ChainCascade />
            </div>
          )}
        </AnimatePresence>

        {nodes.map((node, idx) => {
          const isActive = activeIndex === idx;
          const isPast = idx < activeIndex;
          const isExecuteNode = idx === EXECUTE_INDEX;
          const executeActive = isExecuteNode && isOnExecute;

          return (
            <React.Fragment key={node.id}>
              <motion.div
                className="relative z-10 flex flex-col items-center cursor-crosshair group"
                style={{ minWidth: 100 }}
                onClick={() => handleNodeClick(idx)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                {/* Node ring */}
                <div className="relative mb-3">
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute inset-[-6px] border"
                    animate={{
                      borderColor: executeActive
                        ? ['rgba(16,185,129,0.6)', 'rgba(16,185,129,0.2)', 'rgba(16,185,129,0.6)']
                        : isActive
                          ? ['rgba(16,185,129,0.3)', 'rgba(16,185,129,0.1)', 'rgba(16,185,129,0.3)']
                          : 'transparent',
                      boxShadow: executeActive
                        ? ['0 0 20px rgba(16,185,129,0.3)', '0 0 30px rgba(16,185,129,0.5)', '0 0 20px rgba(16,185,129,0.3)']
                        : '0 0 0px transparent',
                    }}
                    transition={{ duration: executeActive ? 0.8 : 2, repeat: Infinity }}
                  />

                  {/* Second outer ring for execute */}
                  {executeActive && (
                    <motion.div
                      className="absolute inset-[-12px] border border-emerald-500/10"
                      animate={{
                        borderColor: ['rgba(16,185,129,0.15)', 'rgba(16,185,129,0.05)', 'rgba(16,185,129,0.15)'],
                      }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  )}

                  {/* Node body */}
                  <motion.div
                    className={`w-10 h-10 border flex items-center justify-center transition-all duration-500 ${executeActive
                        ? 'bg-emerald-500/20 border-emerald-500'
                        : isActive
                          ? 'bg-emerald-500/10 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                          : isPast
                            ? 'bg-emerald-500/5 border-emerald-500/40'
                            : 'bg-bg-surface border-white/[0.08] group-hover:border-white/20'
                      }`}
                    animate={
                      executeActive
                        ? {
                          boxShadow: [
                            '0 0 20px rgba(16,185,129,0.4)',
                            '0 0 35px rgba(16,185,129,0.6)',
                            '0 0 20px rgba(16,185,129,0.4)',
                          ],
                        }
                        : {}
                    }
                    transition={executeActive ? { duration: 1, repeat: Infinity } : {}}
                  >
                    <motion.span
                      className={`text-sm transition-colors duration-300 ${executeActive
                          ? 'text-emerald-500'
                          : isActive
                            ? 'text-emerald-500'
                            : isPast
                              ? 'text-emerald-500/60'
                              : 'text-white/20 group-hover:text-white/40'
                        }`}
                      animate={executeActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                      transition={executeActive ? { duration: 0.8, repeat: Infinity } : {}}
                    >
                      {node.icon}
                    </motion.span>
                  </motion.div>

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500"
                      layoutId="activeDot"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>

                {/* Label */}
                <div
                  className={`text-mono-2xs mb-1 transition-colors duration-300 ${isActive
                      ? 'text-emerald-500'
                      : isPast
                        ? 'text-emerald-500/50'
                        : 'text-text-secondary/40'
                    }`}
                >
                  {node.label}
                </div>

                {/* Node name */}
                <motion.div
                  className={`font-mono text-[11px] tracking-[0.02em] transition-colors duration-300 ${isActive ? 'text-text-primary' : 'text-text-secondary/60'
                    }`}
                  animate={
                    executeActive
                      ? { color: ['#ffffff', '#10b981', '#ffffff'] }
                      : {}
                  }
                  transition={executeActive ? { duration: 1.5, repeat: Infinity } : {}}
                >
                  {node.id}
                </motion.div>

                {/* Short desc */}
                <div className="text-[9px] text-text-secondary/50 max-w-[110px] text-center leading-relaxed mt-1 hidden lg:block">
                  {node.desc}
                </div>
              </motion.div>

              {/* Connection line (not after last node) */}
              {idx < nodes.length - 1 && (
                <ConnectionLine
                  active={idx < activeIndex}
                  index={idx}
                  isExecuting={isOnExecute && isExecuting}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* ═══════════ Mobile: Vertical node flow ═══════════ */}
      <div className="md:hidden flex flex-col items-center w-full mb-6">
        {nodes.map((node, idx) => {
          const isActive = activeIndex === idx;
          const isPast = idx < activeIndex;
          const executeActive = idx === EXECUTE_INDEX && isOnExecute;
          return (
            <React.Fragment key={node.id}>
              <motion.div
                className="relative z-10 flex items-center gap-4 cursor-crosshair group w-full max-w-xs"
                onClick={() => handleNodeClick(idx)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                {/* Node body */}
                <motion.div
                  className={`w-9 h-9 border flex items-center justify-center flex-shrink-0 transition-all duration-500 ${executeActive
                      ? 'bg-emerald-500/20 border-emerald-500'
                      : isActive
                        ? 'bg-emerald-500/10 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                        : isPast
                          ? 'bg-emerald-500/5 border-emerald-500/40'
                          : 'bg-bg-surface border-white/[0.08]'
                    }`}
                  animate={
                    executeActive
                      ? { boxShadow: ['0 0 15px rgba(16,185,129,0.3)', '0 0 30px rgba(16,185,129,0.5)', '0 0 15px rgba(16,185,129,0.3)'] }
                      : {}
                  }
                  transition={executeActive ? { duration: 1, repeat: Infinity } : {}}
                >
                  <span
                    className={`text-xs ${isActive ? 'text-emerald-500' : isPast ? 'text-emerald-500/60' : 'text-white/20'
                      }`}
                  >
                    {node.icon}
                  </span>
                </motion.div>

                <div className="flex flex-col">
                  <div
                    className={`font-mono text-[10px] transition-colors ${isActive ? 'text-emerald-500' : 'text-text-secondary/50'
                      }`}
                  >
                    {node.label} — {node.id}
                  </div>
                  <div className="text-[10px] text-text-secondary/50 leading-relaxed">
                    {node.desc}
                  </div>
                </div>
              </motion.div>

              {idx < nodes.length - 1 && (
                <MobileConnection active={idx < activeIndex} index={idx} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* ═══════════ Detail panel ═══════════ */}
      <motion.div
        className="border relative overflow-hidden"
        animate={{
          borderColor: isOnExecute
            ? 'rgba(16,185,129,0.25)'
            : 'rgba(255,255,255,0.04)',
          backgroundColor: isOnExecute
            ? 'rgba(16,185,129,0.03)'
            : 'rgba(10,10,10,0.5)',
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Scan line effect — faster during execute */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: isOnExecute
              ? 'linear-gradient(90deg, transparent, rgba(16,185,129,0.7), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(16,185,129,0.4), transparent)',
          }}
          animate={{ y: [0, 80, 0] }}
          transition={{
            duration: isOnExecute ? 1.5 : 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Corner accents during execute */}
        {isOnExecute && (
          <>
            <motion.div
              className="absolute top-0 left-0 w-3 h-3 border-t border-l border-emerald-500/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute top-0 right-0 w-3 h-3 border-t border-r border-emerald-500/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-emerald-500/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-emerald-500/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            />
          </>
        )}

        <div className="p-5">
          <AnimatePresence mode="wait">
            {isOnExecute ? (
              /* ── EXECUTE payoff: telemetry takeover ── */
              <motion.div
                key={`execute-${executionKey}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <ExecutionTelemetry />
              </motion.div>
            ) : (
              /* ── Normal detail panel ── */
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row sm:items-start gap-4"
              >
                {/* Left: status block */}
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <div className="text-mono-2xs text-text-secondary/40 mb-2">
                    ACTIVE_NODE
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-emerald-500/40 bg-emerald-500/5 flex items-center justify-center">
                      <span className="text-emerald-500 text-xs">{activeNode.icon}</span>
                    </div>
                    <div>
                      <div className="font-mono text-[13px] text-emerald-500 tracking-[0.02em]">
                        {activeNode.id}
                      </div>
                      <div className="text-mono-2xs text-text-secondary/40">
                        PHASE {activeNode.label}/05
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px self-stretch bg-white/[0.04]" />

                {/* Right: detail text */}
                <div className="flex-1 min-w-0">
                  <div className="text-mono-2xs text-text-secondary/40 mb-2">
                    PROCESS_DETAIL
                  </div>
                  <p className="text-body-sm max-w-lg">
                    {activeNode.detail}
                  </p>
                </div>

                {/* Cycle indicator */}
                <div className="hidden sm:flex flex-col items-end gap-1 flex-shrink-0">
                  <div className="text-mono-2xs text-text-secondary/40 mb-1">
                    FLOW
                  </div>
                  <div className="flex gap-1">
                    {nodes.map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 transition-all duration-300 ${i === activeIndex
                            ? 'bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]'
                            : i < activeIndex
                              ? 'bg-emerald-500/30'
                              : 'bg-white/[0.06]'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom status bar */}
        <motion.div
          className="border-t px-5 py-2 flex justify-between items-center text-mono-2xs"
          animate={{
            borderColor: isOnExecute ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.04)',
            color: isOnExecute ? 'rgba(16,185,129,0.6)' : 'rgba(255,255,255,0.2)',
          }}
          transition={{ duration: 0.4 }}
        >
          <span>{isOnExecute ? 'EXECUTION_ENGINE v4.2' : 'LOOP_PROTOCOL v2.1'}</span>
          <span>
            {isOnExecute
              ? '■ LIVE — POSITION DEPLOYED'
              : 'OBSERVE → FILTER → STRUCTURE → EXECUTE → REVIEW → ∞'}
          </span>
        </motion.div>
      </motion.div>

      {/* Feedback loop indicator */}
      <div className="mt-3 flex items-center justify-center gap-2 text-mono-2xs text-text-secondary/25">
        <div className="w-8 h-px bg-white/[0.06]" />
        <span>CONTINUOUS FEEDBACK LOOP</span>
        <div className="w-8 h-px bg-white/[0.06]" />
      </div>
    </section>
  );
}
