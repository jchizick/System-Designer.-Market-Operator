import React from 'react';

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 mb-12">
      {/* Left Column: Text */}
      <div className="flex flex-col">
        <div className="font-mono text-[11px] text-accent-green tracking-[0.05em] mb-2">
          001 // IDENTITY
        </div>
        
        <h1 className="text-[48px] font-normal tracking-[-0.03em] leading-[0.95] text-text-primary mb-4">
          System Designer<br />
          Market Operator
        </h1>
        
        <p className="text-[16px] text-text-secondary max-w-[420px] leading-[1.4]">
          Designing systems that extract signal from noise and execute under pressure.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-6">
          <button className="px-6 py-3 bg-bg-surface border border-border-subtle hover:border-accent-green hover:text-accent-green transition-colors font-mono text-xs tracking-widest uppercase">
            [ Access Case Files ]
          </button>
          <button className="px-6 py-3 bg-transparent border border-transparent hover:border-border-subtle transition-colors font-mono text-xs tracking-widest uppercase text-text-secondary hover:text-text-primary">
            [ Initiate Contact ]
          </button>
        </div>
      </div>

      {/* Right Column: System Visual */}
      <div className="grid grid-cols-12 gap-1 opacity-60">
        {[...Array(36)].map((_, i) => {
          const isActive = [1, 5, 9, 13, 16, 20, 26, 28, 32, 35].includes(i);
          return (
            <div 
              key={i} 
              className={`aspect-square border border-border-subtle ${isActive ? 'bg-accent-green opacity-40' : 'bg-bg-surface'}`}
            ></div>
          );
        })}
      </div>
    </section>
  );
}
