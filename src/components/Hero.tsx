import React from 'react';
import { DeploymentSurface } from './DeploymentSurface';

export function Hero() {
  return (
    <section className="grid min-w-0 grid-cols-1 gap-8 mb-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
      {/* Left Column: Text */}
      <div className="flex min-w-0 flex-col">
        <div className="text-mono-xs text-emerald-400 mb-2">
          001 // IDENTITY
        </div>

        <div className="mb-4">
          <h1 className="hero-typewriter text-display font-pixel break-words" aria-label="Forward-Deployed Design Engineer">
            <span className="type-line type-line-1">
              <span className="type-text">Forward-Deployed</span>
            </span>
            <span className="type-line type-line-2">
              <span className="type-text">Design Engineer</span>
            </span>
          </h1>
          <h2 className="hero-subtitle-fade text-heading-md font-pixel">
            AI Workflow & Product Systems
          </h2>
        </div>

        <p className="text-mono-base text-white/70 max-w-[350px]">
          I help teams turn messy operations into usable AI-assisted workflows, internal tools, and digital operating systems.
        </p>

        <div className="flex flex-wrap gap-3 pt-6 sm:gap-4">
          <button className="max-w-full px-4 py-2 bg-bg-surface border border-emerald-700 text-emerald-500 hover:bg-emerald-500/10 transition-colors text-mono-xs tracking-widest uppercase sm:px-6">
            [ Access Case Files ]
          </button>
          <button className="max-w-full px-4 py-2 bg-transparent border border-border-subtle hover:bg-white/5 transition-colors text-mono-xs tracking-widest uppercase text-text-secondary hover:text-text-primary sm:px-6">
            [ CONTACT OPERATOR ]
          </button>
        </div>
      </div>

      {/* Right Column: Deployment Surface */}
      <div className="flex min-w-0 items-center">
        <DeploymentSurface />
      </div>
    </section>
  );
}
