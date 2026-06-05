import React, { useEffect, useState } from 'react';
import { Eye, Layers, RefreshCw, Rocket, Search, type LucideIcon } from 'lucide-react';

type LoopStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const loopSteps: LoopStep[] = [
  {
    number: '01',
    title: 'Observe',
    description: 'Understand context, systems, and friction.',
    icon: Eye,
  },
  {
    number: '02',
    title: 'Diagnose',
    description: 'Map root causes and leverage points.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Structure',
    description: 'Design workflows, data, and interfaces.',
    icon: Layers,
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Build, integrate, and launch.',
    icon: Rocket,
  },
  {
    number: '05',
    title: 'Refine',
    description: 'Measure, iterate, and harden.',
    icon: RefreshCw,
  },
];

const diagramPositions = [
  { x: 180, y: 48 },
  { x: 312, y: 144 },
  { x: 262, y: 312 },
  { x: 98, y: 312 },
  { x: 48, y: 144 },
];

const diagramNodes = loopSteps.map((step, index) => ({
  ...step,
  ...diagramPositions[index],
}));

const centerTicks = Array.from({ length: 72 }, (_, index) => {
  const angle = -90 + index * 5;
  const radians = (angle * Math.PI) / 180;
  const tickCenterY = 187;
  const innerRadius = index % 2 === 0 ? 66 : 70;
  const outerRadius = index % 2 === 0 ? 86 : 82;

  return {
    x1: 180 + Math.cos(radians) * innerRadius,
    y1: tickCenterY + Math.sin(radians) * innerRadius,
    x2: 180 + Math.cos(radians) * outerRadius,
    y2: tickCenterY + Math.sin(radians) * outerRadius,
  };
});

type CircularIconNodeProps = {
  Icon: LucideIcon;
  size: number;
  iconSize: number;
  active?: boolean;
  title?: string;
  className?: string;
};

const CircularIconNode: React.FC<CircularIconNodeProps> = ({
  Icon,
  size,
  iconSize,
  active = false,
  title,
  className = '',
}) => (
  <span
    className={`relative inline-flex flex-shrink-0 items-center justify-center bg-transparent text-emerald-400 ${className}`}
    style={{ width: size, height: size }}
    title={title}
  >
    <svg
      className="absolute inset-0 h-full w-full overflow-visible"
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 1}
        fill={active ? 'rgba(16,185,129,0.045)' : 'rgba(7,7,7,0.92)'}
        stroke="currentColor"
        strokeOpacity={active ? '0.42' : '0.22'}
        strokeWidth="1"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 8}
        fill="none"
        stroke="currentColor"
        strokeOpacity={active ? '0.14' : '0.07'}
        strokeWidth="1"
      />
    </svg>
    <Icon
      size={iconSize}
      strokeWidth={1.5}
      className={active ? 'relative z-10 text-emerald-300/82' : 'relative z-10 text-emerald-400/62'}
    />
  </span>
);

const StatusDot: React.FC<{ active?: boolean }> = ({ active = false }) => (
  <svg className="h-1.5 w-1.5 text-emerald-400" viewBox="0 0 6 6" aria-hidden="true">
    <circle cx="3" cy="3" r={active ? '2.1' : '1.6'} fill="currentColor" opacity={active ? '0.78' : '0.28'} />
  </svg>
);

type MapNodeProps = {
  Icon: LucideIcon;
  number: string;
  title: string;
  active?: boolean;
};

const MapNode: React.FC<MapNodeProps> = ({ Icon, number, title, active = false }) => (
  <span
    className={`relative flex h-[84px] w-[84px] items-center justify-center bg-transparent text-emerald-400 transition-transform duration-300 ${
      active ? 'scale-[1.035]' : 'scale-100'
    }`}
    title={title}
  >
    <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 84 84" aria-hidden="true">
      <circle
        cx="42"
        cy="42"
        r="40"
        fill="rgba(7,7,7,0.92)"
        stroke="currentColor"
        strokeOpacity={active ? '0.44' : '0.30'}
        strokeWidth="1.4"
      />
      <circle
        cx="42"
        cy="42"
        r="32"
        fill="rgba(16,185,129,0.025)"
        stroke="currentColor"
        strokeOpacity={active ? '0.20' : '0.10'}
        strokeWidth="1"
      />
    </svg>
    <span className="relative z-10 flex flex-col items-center gap-0.5 text-center">
      <Icon size={17} strokeWidth={1.6} className={active ? 'text-emerald-300/88' : 'text-emerald-400/74'} />
      <span className={`text-mono-2xs font-semibold leading-none transition-colors duration-300 ${active ? 'text-emerald-300' : 'text-emerald-400/78'}`}>{number}</span>
      <span className={`text-mono-3xs font-semibold uppercase leading-none transition-colors duration-300 ${active ? 'text-white/82' : 'text-white/62'}`}>{title}</span>
    </span>
  </span>
);

export function OperationalLoop() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);

  useEffect(() => {
    if (isInteractionPaused) {
      return undefined;
    }

    const loopTimer = window.setInterval(() => {
      setActiveStepIndex((currentIndex) => (currentIndex + 1) % loopSteps.length);
    }, 1400);

    return () => window.clearInterval(loopTimer);
  }, [isInteractionPaused]);

  const handleStepHover = (index: number) => {
    setIsInteractionPaused(true);
    setActiveStepIndex(index);
  };

  return (
    <section
      className="relative overflow-hidden border border-emerald-500/[0.10] bg-[#070707] px-3.5 pb-2.5 pt-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] sm:px-4 sm:pb-3 sm:pt-4"
      onMouseLeave={() => {
        setActiveStepIndex(0);
        setIsInteractionPaused(false);
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(16,185,129,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.14)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(16,185,129,0.055),transparent_42%)]" />

      <div className="relative z-10 mb-4 flex items-center gap-4">
        <span className="flex-shrink-0 text-mono-xs text-emerald-400">
          005 // OPERATIONAL LOOP
        </span>
        <div className="h-px flex-1 bg-white/[0.06]" />
        <span className="hidden flex-shrink-0 text-mono-2xs text-text-secondary/40 sm:inline">
          SYSTEM MAP
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-1 items-start gap-4 md:grid-cols-[minmax(0,0.8fr)_minmax(310px,1.20fr)]">
        <div className="relative min-w-0">
          <div className="relative">
            <div className="pointer-events-none absolute bottom-[1.85rem] left-[2.65rem] top-[1.85rem] z-10 w-px bg-emerald-500/[0.18]" />
            <div className="pointer-events-none absolute bottom-0 left-[3.2rem] right-0 top-0 border border-emerald-500/[0.12] bg-black/18" />
            {loopSteps.map(({ number, title, description, icon: Icon }, index) => {
              const isActive = activeStepIndex === index;

              return (
              <article
                key={number}
                className="group relative grid min-w-0 grid-cols-[3.2rem_minmax(0,1fr)]"
                onMouseEnter={() => handleStepHover(index)}
              >
                <span
                  className={`relative z-10 grid grid-cols-[1.45rem_1rem] items-center gap-2 pl-1.5 text-mono-xs font-medium transition-colors duration-300 ${
                    isActive ? 'text-emerald-300' : 'text-emerald-400/58'
                  }`}
                >
                  <span>{number}</span>
                  <span className="relative h-2.5 w-2.5 bg-transparent text-emerald-400">
                    <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 10 10" aria-hidden="true">
                      <circle cx="5" cy="5" r="4" fill="rgba(16,185,129,0.18)" stroke="currentColor" strokeOpacity="0.42" />
                      <circle cx="5" cy="5" r="2" fill="currentColor" opacity={isActive ? '0.86' : '0.48'} />
                    </svg>
                  </span>
                </span>

                <div
                  className={`grid min-w-0 grid-cols-[2.35rem_minmax(0,1fr)] gap-2 border-emerald-500/[0.10] px-4 py-2.5 transition-colors duration-300 ${
                    isActive ? 'bg-emerald-500/[0.055]' : 'bg-emerald-500/[0.022] group-hover:bg-emerald-500/[0.04]'
                  } ${
                    index === loopSteps.length - 1 ? '' : 'border-b'
                  }`}
                >
                  <CircularIconNode Icon={Icon} size={34} iconSize={14} active={isActive} title={title} />
                  <div className="min-w-0">
                    <h3 className={`text-body-base font-space-grotesk leading-[1.04] transition-colors duration-300 ${isActive ? 'text-white' : 'text-text-primary'}`}>
                      {title}
                    </h3>
                    <p className={`text-mono-3xs leading-[1.45] transition-colors duration-300 sm:text-[9px] ${isActive ? 'text-white/72' : 'text-white/56'}`}>
                      {description}
                    </p>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>

        <div className="relative flex min-w-0 items-center justify-center overflow-hidden bg-bg-surface/[0.08] p-2 sm:p-2.5">
          <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-emerald-500/30" />
          <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-emerald-500/30" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-emerald-500/30" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-emerald-500/30" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.06),transparent_62%)]" />
          <div className="pointer-events-none absolute inset-x-6 top-1/2 h-px bg-emerald-500/[0.07]" />
          <div className="pointer-events-none absolute inset-y-6 left-1/2 w-px bg-emerald-500/[0.07]" />

          <div
            aria-label="Operational loop circular system map"
            className="relative z-10 aspect-square w-full max-w-[288px] text-emerald-400"
            role="img"
          >
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 360 360"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="operational-loop-arrow"
                  markerHeight="7"
                  markerWidth="7"
                  orient="auto"
                  refX="6.2"
                  refY="3.5"
                  viewBox="0 0 7 7"
                >
                  <path d="M 0 0 L 7 3.5 L 0 7 z" fill="currentColor" opacity="0.46" />
                </marker>
              </defs>
              <g transform="translate(180 180) scale(1.01) translate(-180 -180)">
                <circle cx="180" cy="180" r="140" fill="none" stroke="currentColor" strokeOpacity="0.07" strokeWidth="1" />
                <circle cx="180" cy="180" r="114" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
                <circle cx="180" cy="180" r="88" fill="none" stroke="currentColor" strokeDasharray="2 8" strokeOpacity="0.11" strokeWidth="1" />
                <line x1="44" y1="180" x2="316" y2="180" stroke="currentColor" strokeDasharray="2 9" strokeOpacity="0.08" strokeWidth="1" />
                <line x1="180" y1="44" x2="180" y2="316" stroke="currentColor" strokeDasharray="2 9" strokeOpacity="0.08" strokeWidth="1" />

                {/* pentagonStructure */}
                <polygon
                  points="180,48 312,144 262,312 98,312 48,144"
                  fill="rgba(16,185,129,0.025)"
                  stroke="none"
                />
                <polygon
                  points="180,80 280,153 242,282 118,282 80,153"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.17"
                  strokeWidth="1"
                />
                {/* flowArrows */}
                <g strokeLinecap="round">
                  <path d="M 222 82 L 265 113" fill="none" markerEnd="url(#operational-loop-arrow)" stroke="currentColor" strokeOpacity="0.42" strokeWidth="1.35" />
                  <path d="M 297 197 L 277 258" fill="none" markerEnd="url(#operational-loop-arrow)" stroke="currentColor" strokeOpacity="0.42" strokeWidth="1.35" />
                  <path d="M 206 312 L 154 312" fill="none" markerEnd="url(#operational-loop-arrow)" stroke="currentColor" strokeOpacity="0.42" strokeWidth="1.35" />
                  <path d="M 81 258 L 64 198" fill="none" markerEnd="url(#operational-loop-arrow)" stroke="currentColor" strokeOpacity="0.42" strokeWidth="1.35" />
                  <path d="M 93 113 L 139 82" fill="none" markerEnd="url(#operational-loop-arrow)" stroke="currentColor" strokeOpacity="0.42" strokeWidth="1.35" />
                </g>
                {diagramNodes.map(({ number, x, y }, index) => (
                  <line
                    key={`${number}-hub`}
                    x1="180"
                    y1="180"
                    x2={x}
                    y2={y}
                    stroke="currentColor"
                    strokeOpacity={activeStepIndex === index ? '0.24' : '0.10'}
                    strokeWidth={activeStepIndex === index ? '1.2' : '1'}
                  />
                ))}

                {/* calibrationTicks */}
                {centerTicks.map(({ x1, y1, x2, y2 }) => (
                  <line
                    key={`${x1}-${y1}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    strokeOpacity="0.20"
                    strokeWidth="1"
                  />
                ))}
              </g>
              <polygon
                points="180,130 234,170 213,233 147,233 126,170"
                fill="rgba(7,7,7,0.92)"
                stroke="currentColor"
                strokeOpacity="0.48"
                strokeWidth="1.5"
              />
              <text
                x="180"
                y="180"
                textAnchor="middle"
                fill="rgba(52,211,153,0.72)"
                className="text-[11px] font-space-grotesk font-semibold uppercase"
              >
                OPERATIONAL
              </text>
              <text
                x="180"
                y="196"
                textAnchor="middle"
                fill="rgba(255,255,255,0.48)"
                className="text-[9px] font-semibold uppercase"
              >
                CORE /
              </text>
              <text
                x="180"
                y="212"
                textAnchor="middle"
                fill="rgba(255,255,255,0.42)"
                className="text-[9px] font-semibold uppercase"
              >
                SYSTEM
              </text>
            </svg>

            {diagramNodes.map(({ number, title, x, y, icon: Icon }, index) => (
              <span
                key={number}
                className="absolute flex h-[94px] w-[94px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-transparent"
                onMouseEnter={() => handleStepHover(index)}
                style={{ left: `${(x / 360) * 100}%`, top: `${(y / 360) * 100}%` }}
              >
                <MapNode Icon={Icon} number={number} title={title} active={activeStepIndex === index} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/*
      <div className="relative z-10 mt-2.5 flex items-center justify-between border-t border-white/[0.05] pt-2 text-mono-3xs text-text-secondary/42">
        <span>PROCESS MAP</span>
        <span className="flex items-center gap-1.5">
          <StatusDot active />
          <StatusDot />
          <StatusDot />
        </span>
        <span>5 NODE LOOP</span>
      </div>
      */}
    </section>
  );
}
