import React, { useState, useEffect } from 'react';

interface BuildLogEntry {
  timestamp: string;
  date: string;
  name: string;
  status: 'DEPLOYED' | 'UPDATED' | 'ACTIVE BUILD' | 'PROTOTYPE';
  metrics: string;
  category: 'SYSTEM' | 'RESEARCH' | 'BRAND';
}

const buildLogEntries: BuildLogEntry[] = [
  {
    timestamp: '13:32:10Z',
    date: 'MAY 28',
    name: 'Execution Layer v2.1',
    status: 'DEPLOYED',
    metrics: '-18% slippage  +14% fill consistency',
    category: 'SYSTEM',
  },
  {
    timestamp: '11:07:45Z',
    date: 'MAY 28',
    name: 'Market Command Dashboard',
    status: 'UPDATED',
    metrics: 'New scanner: Dark Pool Flow',
    category: 'SYSTEM',
  },
  {
    timestamp: '09:41:22Z',
    date: 'MAY 26',
    name: 'Regime Detection v0.3',
    status: 'ACTIVE BUILD',
    metrics: 'Vol clustering + order flow imbalance',
    category: 'RESEARCH',
  },
  {
    timestamp: '08:15:03Z',
    date: 'MAY 26',
    name: 'Synthetic Foundry',
    status: 'PROTOTYPE',
    metrics: 'Brand OS module: Voice Engine',
    category: 'BRAND',
  },
];

function StatusBadge({ status }: { status: BuildLogEntry['status'] }) {
  const colorMap: Record<BuildLogEntry['status'], string> = {
    DEPLOYED: 'text-emerald-500',
    UPDATED: 'text-emerald-500',
    'ACTIVE BUILD': 'text-emerald-400',
    PROTOTYPE: 'text-emerald-400',
  };

  return (
    <span className={`text-mono-xs font-medium tracking-[0.08em] ${colorMap[status]}`}>
      {status}
    </span>
  );
}

function PulsingDot({ status }: { status: BuildLogEntry['status'] }) {
  const isLive = status === 'DEPLOYED' || status === 'ACTIVE BUILD';

  return (
    <span className="relative flex items-center justify-center w-3 h-3 flex-shrink-0">
      <span className="w-[5px] h-[5px] bg-emerald-500 rounded-full" />
      {isLive && (
        <span className="absolute w-[5px] h-[5px] bg-emerald-500 rounded-full animate-ping opacity-75" />
      )}
    </span>
  );
}

export function BuildLog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const el = document.getElementById('build-log-section');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="build-log-section" className="mb-4">
      {/* Header row */}
      <div className="flex items-center gap-4 mb-3">
        <span className="text-mono-xs text-emerald-400 flex-shrink-0">006 // BUILD LOG (LIVE)</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
        <a
          href="#"
          className="text-mono-xs text-emerald-500 hover:text-emerald-400 transition-colors tracking-[0.08em] flex items-center gap-1.5 flex-shrink-0"
        >
          VIEW FULL LOG
          <span className="text-[10px]">→</span>
        </a>
      </div>

      {/* Log table */}
      <div
        className="border border-border-subtle bg-[#070707] overflow-hidden"
        style={{
          boxShadow: '0 0 40px rgba(16, 185, 129, 0.02), inset 0 1px 0 rgba(255,255,255,0.02)',
        }}
      >
        {buildLogEntries.map((entry, idx) => (
          <div
            key={idx}
            className={`
              grid items-center gap-x-4 px-4 py-2.5
              border-b border-white/[0.04] last:border-b-0
              hover:bg-emerald-500/[0.03] transition-all duration-300
              group cursor-default
            `}
            style={{
              gridTemplateColumns: '14px 160px 1fr 130px 1fr auto',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
              transition: `opacity 0.4s ease ${idx * 0.08}s, transform 0.4s ease ${idx * 0.08}s`,
            }}
          >
            {/* Pulsing dot */}
            <PulsingDot status={entry.status} />

            {/* Timestamp + Date */}
            <div className="flex items-center gap-3 text-mono-2xs text-text-secondary/50 tabular-nums whitespace-nowrap">
              <span>{entry.timestamp}</span>
              <span className="text-text-secondary/30">{entry.date}</span>
            </div>

            {/* Entry name */}
            <span className="text-mono-label text-white/60 tracking-[0.01em] group-hover:text-text-primary transition-colors truncate">
              {entry.name}
            </span>

            {/* Status badge */}
            <StatusBadge status={entry.status} />

            {/* Metrics */}
            <span className="text-mono-2xs text-text-secondary/50 tracking-[0.02em] truncate group-hover:text-text-secondary/70 transition-colors">
              {entry.metrics}
            </span>

            {/* Category */}
            <span className="text-mono-2xs text-text-secondary/30 tracking-[0.08em] uppercase text-right whitespace-nowrap">
              {entry.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
