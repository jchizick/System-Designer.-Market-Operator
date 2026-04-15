import React, { useState } from 'react';

const nodes = [
  {
    id: "OBSERVE",
    desc: "Market behavior, user patterns, anomalies"
  },
  {
    id: "FILTER",
    desc: "Remove noise, isolate signal"
  },
  {
    id: "STRUCTURE",
    desc: "Build decision framework"
  },
  {
    id: "EXECUTE",
    desc: "Deploy with discipline"
  },
  {
    id: "REVIEW",
    desc: "Refine edge"
  }
];

export function OperationalDoctrine() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-border-subtle pt-12 pb-8 flex justify-between items-start relative">
      {/* Connecting Line */}
      <div className="absolute top-[53px] left-12 right-12 border-t border-dashed border-white/20 z-0 hidden md:block"></div>
      
      {nodes.map((node, idx) => {
        const isActive = activeIndex === idx;
        return (
          <div 
            key={idx} 
            className="relative z-10 bg-bg-base px-6 text-center group cursor-crosshair flex-1"
            onMouseEnter={() => setActiveIndex(idx)}
          >
            <div className={`w-3 h-3 border mx-auto mb-4 transition-all duration-300
              ${isActive ? 'bg-accent-green border-accent-green shadow-[0_0_10px_var(--color-accent-green)]' : 'bg-bg-base border-white/30 group-hover:border-white/60'}`}
            ></div>
            
            <div className={`font-mono text-[11px] mb-2 transition-colors ${isActive ? 'text-accent-green' : 'text-text-primary'}`}>
              {node.id}
            </div>
            <div className="text-[10px] text-text-secondary/70 max-w-[120px] mx-auto leading-relaxed">
              {node.desc}
            </div>
          </div>
        );
      })}
    </section>
  );
}
