import React from 'react';
import { StockTicker } from './StockTicker';

export function Hero() {
  return (
    <section className="grid min-w-0 grid-cols-1 gap-8 mb-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
      {/* Left Column: Text */}
      <div className="flex min-w-0 flex-col">
        <div className="text-mono-xs text-emerald-400 mb-2">
          001 // IDENTITY
        </div>

        <h1 className="text-display font-pixel mb-4 break-words">
          Design Engineer<br />
          <span className="text-display font-pixel opacity-15">AI Systems Designer</span>
        </h1>

        <p className="text-mono-base text-white/70 max-w-[350px]">
          Designing and operating systems that extract signal from noise and execute under pressure.
        </p>

        <div className="flex flex-wrap gap-3 pt-6 sm:gap-4">
          <button className="max-w-full px-4 py-2 bg-bg-surface border border-emerald-700 text-emerald-500 hover:bg-emerald-500/10 transition-colors text-mono-xs tracking-widest uppercase sm:px-6">
            [ Access Case Files ]
          </button>
          <button className="max-w-full px-4 py-2 bg-transparent border border-border-subtle hover:bg-white/5 transition-colors text-mono-xs tracking-widest uppercase text-text-secondary hover:text-text-primary sm:px-6">
            [ Initiate Contact ]
          </button>
        </div>
      </div>

      {/* Right Column: Live Ticker */}
      <div className="flex min-w-0 items-center">
        <StockTicker />
      </div>
    </section>
  );
}
