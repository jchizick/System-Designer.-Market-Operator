import React from 'react';

const cases = [
  {
    id: "BRAWL_01",
    type: "VOLATILITY ENGINE",
    title: "BRAWL INDICATOR",
    outcome: "Structured decision model for high-volatility environments.",
    visualType: "bars"
  },
  {
    id: "LIQ_MAP",
    type: "HEATMAP OVERLAY",
    title: "LIQUIDITY MAPPER",
    outcome: "Identified hidden support zones across fragmented order books.",
    visualType: "grid"
  },
  {
    id: "SN_DASH",
    type: "OPERATOR TERMINAL",
    title: "SIGNAL NEXUS",
    outcome: "Unified 14 disparate data feeds into a single execution context.",
    visualType: "wave"
  },
  {
    id: "VRTX_99",
    type: "EXECUTION ALGO",
    title: "VERTEX ROUTER",
    outcome: "Reduced slippage by 12% during peak market stress events.",
    visualType: "nodes"
  },
  {
    id: "OBS_NET",
    type: "MONITORING SYSTEM",
    title: "OBSIDIAN NETWORK",
    outcome: "Real-time anomaly detection with sub-millisecond latency.",
    visualType: "radar"
  },
  {
    id: "PRISM_X",
    type: "DATA REFRACTION",
    title: "PRISM ANALYTICS",
    outcome: "Separated institutional flow from retail noise automatically.",
    visualType: "scatter"
  }
];

function AbstractVisual({ type }: { type: string }) {
  return (
    <div className="h-16 w-full bg-transparent border-y border-white/[0.04] relative overflow-hidden flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity my-2">
      {/* Abstract patterns based on type */}
      {type === 'bars' && (
        <div className="flex items-end gap-[2px] h-full w-full px-4 pt-4 pb-1">
          {[...Array(24)].map((_, i) => {
            const isSpike = Math.random() > 0.85;
            return (
              <div key={i} className={`flex-1 ${isSpike ? 'bg-accent-green' : 'bg-border-subtle'}`} style={{ height: `${Math.random() * (isSpike ? 100 : 40) + 10}%`, opacity: isSpike ? 0.9 : 0.3 }}></div>
            );
          })}
        </div>
      )}
      {type === 'grid' && (
        <div className="grid grid-cols-8 grid-rows-4 gap-0.5 w-full h-full p-1">
          {[...Array(32)].map((_, i) => {
            const isSpike = Math.random() > 0.9;
            return (
              <div key={i} className={`${isSpike ? 'bg-accent-green' : 'bg-border-subtle'} ${Math.random() > 0.6 ? 'opacity-80' : 'opacity-20'}`}></div>
            );
          })}
        </div>
      )}
      {type === 'wave' && (
        <svg className="w-full h-full stroke-border-subtle fill-none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0,60 Q15,10 35,50 T70,20 T100,60" strokeWidth="1" className="stroke-accent-green/60" />
          <path d="M0,70 Q25,30 50,70 T100,40" strokeWidth="0.5" className="opacity-40" />
        </svg>
      )}
      {type === 'nodes' && (
        <div className="relative w-full h-full">
          {[...Array(12)].map((_, i) => {
            const isSpike = Math.random() > 0.8;
            return (
              <div key={i} className={`absolute w-1 h-1 rounded-full ${isSpike ? 'bg-accent-green shadow-[0_0_4px_#006239]' : 'bg-border-subtle'}`} style={{ top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%` }}></div>
            );
          })}
          <svg className="absolute inset-0 w-full h-full stroke-border-subtle/30 fill-none">
            <line x1="10%" y1="40%" x2="40%" y2="70%" strokeWidth="1" />
            <line x1="40%" y1="70%" x2="85%" y2="25%" strokeWidth="1" className="stroke-accent-green/40" />
            <line x1="40%" y1="70%" x2="60%" y2="80%" strokeWidth="0.5" />
          </svg>
        </div>
      )}
      {type === 'radar' && (
        <div className="relative w-12 h-12 rounded-full border border-border-subtle/50 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-border-subtle/30"></div>
          <div className="w-2 h-2 rounded-full bg-accent-green/80 absolute top-2 right-2 shadow-[0_0_4px_#006239]"></div>
          <div className="absolute top-1/2 left-1/2 w-1/2 h-[1px] bg-accent-green/60 origin-left animate-[spin_2s_linear_infinite]"></div>
        </div>
      )}
      {type === 'scatter' && (
        <div className="relative w-full h-full p-2">
          {[...Array(45)].map((_, i) => {
            const isSpike = Math.random() > 0.85;
            return (
              <div key={i} className={`absolute w-0.5 h-0.5 ${isSpike ? 'bg-accent-green' : 'bg-border-subtle'}`} style={{ top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%`, opacity: isSpike ? 1 : 0.4 }}></div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function CaseFiles() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 mb-8 h-auto md:h-[320px]">
      {cases.map((c, idx) => (
        <div key={idx} className="bg-transparent border border-white/[0.04] p-3 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors cursor-pointer">
          <div className="flex justify-between font-mono text-[9px] mb-2">
            <span className="text-text-primary/80">SYS: {c.id}</span>
            <span className="text-text-secondary/50">{c.type.split(' ')[0]}</span>
          </div>
          
          <div className="text-[14px] font-normal tracking-[0.02em] mb-1 text-text-primary">{c.title}</div>
          
          <AbstractVisual type={c.visualType} />
          
          <div className="text-[11px] text-text-secondary leading-[1.3]">
            {c.outcome}
          </div>
        </div>
      ))}
    </section>
  );
}
