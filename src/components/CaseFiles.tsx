import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

function AbstractVisual({ type }: { type: string }) {
  return (
    <div className="h-16 w-full bg-transparent border-y border-border-subtle relative overflow-hidden flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity my-2">
      {/* Abstract patterns based on type */}
      {type === 'bars' && (
        <div className="flex items-end gap-[2px] h-full w-full px-4 pt-4 pb-1">
          {[...Array(24)].map((_, i) => {
            const isSpike = i % 7 === 3 || i % 11 === 5;
            return (
              <div key={i} className={`flex-1 ${isSpike ? 'bg-emerald-500' : 'bg-border-subtle'}`} style={{ height: `${isSpike ? 60 + (i * 7 % 40) : 10 + (i * 13 % 30)}%`, opacity: isSpike ? 0.9 : 0.3 }}></div>
            );
          })}
        </div>
      )}
      {type === 'grid' && (
        <div className="grid grid-cols-8 grid-rows-4 gap-0.5 w-full h-full p-1">
          {[...Array(32)].map((_, i) => {
            const isSpike = (i % 17 < 3) || (i % 23 < 2);
            return (
              <div key={i} className={`${isSpike ? 'bg-emerald-500' : 'bg-border-subtle'} ${isSpike ? 'opacity-80' : 'opacity-20'}`}></div>
            );
          })}
        </div>
      )}
      {type === 'wave' && (
        <svg className="w-full h-full stroke-border-subtle fill-none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0,60 Q15,10 35,50 T70,20 T100,60" strokeWidth="1" className="stroke-emerald-500/60" />
          <path d="M0,70 Q25,30 50,70 T100,40" strokeWidth="0.5" className="opacity-40" />
        </svg>
      )}
      {type === 'nodes' && (
        <div className="relative w-full h-full">
          {[...Array(12)].map((_, i) => {
            const isSpike = i % 5 === 0;
            return (
              <div key={i} className={`absolute w-1 h-1 rounded-full ${isSpike ? 'bg-emerald-500 shadow-[0_0_4px_#10b981]' : 'bg-border-subtle'}`} style={{ top: `${15 + (i * 31 % 70)}%`, left: `${10 + (i * 37 % 80)}%` }}></div>
            );
          })}
          <svg className="absolute inset-0 w-full h-full stroke-border-subtle/30 fill-none">
            <line x1="10%" y1="40%" x2="40%" y2="70%" strokeWidth="1" />
            <line x1="40%" y1="70%" x2="85%" y2="25%" strokeWidth="1" className="stroke-emerald-500/40" />
            <line x1="40%" y1="70%" x2="60%" y2="80%" strokeWidth="0.5" />
          </svg>
        </div>
      )}
      {type === 'radar' && (
        <div className="relative w-12 h-12 rounded-full border border-border-subtle/50 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-border-subtle/30"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-500/80 absolute top-2 right-2 shadow-[0_0_4px_#10b981]"></div>
          <div className="absolute top-1/2 left-1/2 w-1/2 h-[1px] bg-emerald-500/60 origin-left animate-[spin_2s_linear_infinite]"></div>
        </div>
      )}
      {type === 'scatter' && (
        <div className="relative w-full h-full p-2">
          {[...Array(45)].map((_, i) => {
            const isSpike = i % 8 === 0;
            return (
              <div key={i} className={`absolute w-0.5 h-0.5 ${isSpike ? 'bg-emerald-500' : 'bg-border-subtle'}`} style={{ top: `${10 + (i * 29 % 80)}%`, left: `${10 + (i * 41 % 80)}%`, opacity: isSpike ? 1 : 0.4 }}></div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function CaseFiles() {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-mono-xs text-emerald-400 flex-shrink-0">003 // CASE FILES</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
        <a href="#" className="text-mono-xs text-emerald-500 hover:text-emerald-400 transition-colors tracking-[0.08em] flex items-center gap-1.5 flex-shrink-0">
          BROWSE ALL SYSTEMS
          <span className="text-[10px]">→</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[320px]">
        {caseStudies.map((c, idx) => (
          <Link
            key={idx}
            to={`/case/${c.slug}`}
            className="relative bg-emerald-500/[0.04] border border-emerald-500/10 p-3 flex flex-col justify-between group hover:border-emerald-500/25 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_-2px_rgba(16,185,129,0.1)] transition-all duration-300 ease-out cursor-pointer no-underline"
          >
            <div className="flex justify-between text-mono-2xs mb-2">
              <span className="text-text-primary font-medium">SYS: {c.id}</span>
              <span className="text-text-secondary/50">{c.type.split(' ')[0]}</span>
            </div>

            <div className="flex items-center justify-between mb-1">
              <div className="text-body-base font-normal tracking-[-0.01em] text-text-primary">{c.title}</div>
              <div className="text-mono-2xs px-1.5 py-[2px] bg-emerald-400/5 text-emerald-400/70 border border-emerald-400/20">{c.state}</div>
            </div>

            <AbstractVisual type={c.visualType} />

            <div className="text-mono-label text-white/60 leading-[1.4]">
              {c.outcome}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
