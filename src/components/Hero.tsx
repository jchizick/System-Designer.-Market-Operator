import React from 'react';
import { StockTicker } from './StockTicker';

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 mb-12">
      {/* Left Column: Text */}
      <div className="flex flex-col">
        <div className="text-mono-xs text-emerald-400 mb-2">
          001 // IDENTITY
        </div>

        <h1 className="text-display font-pixel mb-4">
          Design Engineer<br />
          <span className="text-display font-pixel opacity-15">AI Systems Designer</span>
        </h1>

        <p className="text-mono-base text-white/70 max-w-[350px]">
          Designing and operating systems that extract signal from noise and execute under pressure.
        </p>

        <div className="flex flex-wrap gap-4 pt-6">
          <button className="px-6 py-2 bg-bg-surface border border-emerald-700 text-emerald-500 hover:bg-emerald-500/10 transition-colors text-mono-xs tracking-widest uppercase">
            [ Access Case Files ]
          </button>
          <button className="px-6 py-2 bg-transparent border border-border-subtle hover:bg-white/5 transition-colors text-mono-xs tracking-widest uppercase text-text-secondary hover:text-text-primary">
            [ Initiate Contact ]
          </button>
        </div>
      </div>

      {/* Right Column: Live Ticker */}
      <div className="flex items-center">
        <StockTicker />
      </div>
    </section>
  );
}
