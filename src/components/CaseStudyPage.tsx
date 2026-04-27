import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { getCaseStudyBySlug, getAdjacentCases, caseStudies, type BuildBlock } from '../data/caseStudies';
import {
  AlertTriangle,
  Lightbulb,
  Wrench,
  Activity,
  ChartNoAxesCombined,
  Layers
} from "lucide-react";

/* ─── Animated section wrapper ─── */
function RevealSection({ children, className = '', delay = 0 }: { key?: React.Key; children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section Header ─── */
function SectionHeader({ icon: Icon, number, title, children }: { icon?: React.ElementType, number: string, title: string, children?: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 group cursor-default mb-4">
      {/* Icon - Left Column */}
      {Icon && (
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-border-subtle bg-black/30 rounded-sm group-hover:border-emerald-400 transition-colors mt-1.5">
          <Icon className="w-4 h-4 text-emerald-400 group-hover:text-emerald-400 transition-colors" />
        </div>
      )}

      {/* Content - Right Column */}
      <div className="flex flex-col flex-grow">
        {/* Title */}
        <div className="flex items-center gap-2 mb-3 mt-1 text-mono-sm">
          <span className="text-emerald-400">
            {number}
          </span>
          <span className="text-emerald-400">//</span>
          <span className="text-text-secondary uppercase group-hover:text-white transition-colors">
            {title}
          </span>
        </div>
        
        {/* Children (Paragraphs, etc) */}
        {children && (
          <div className="text-body-sm">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Image / video placeholder ─── */
function MediaPlaceholder({ label, className = '', aspectClass = 'aspect-video' }: { label: string; className?: string; aspectClass?: string }) {
  return (
    <div className={`relative overflow-hidden border border-border-subtle bg-bg-surface ${aspectClass} ${className}`}>
      {/* Scan line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
        animate={{ y: [0, 300, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-emerald-500/20" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-emerald-500/20" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-emerald-500/20" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-emerald-500/20" />
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />
      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div className="w-10 h-10 border border-border-subtle flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="2" width="14" height="14" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <line x1="2" y1="2" x2="16" y2="16" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            <line x1="16" y1="2" x2="2" y2="16" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          </svg>
        </div>
        <span className="font-mono text-[9px] text-text-secondary/30 tracking-[0.1em]">{label}</span>
      </div>
      {/* Status bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border-subtle px-3 py-1.5 flex justify-between font-mono text-[8px] text-text-secondary/20">
        <span>PLACEHOLDER</span>
        <span className="flex items-center gap-1">
          <span className="w-1 h-1 bg-emerald-500/40" />
          PIPELINE ACTIVE
        </span>
      </div>
    </div>
  );
}

/* ─── Video placeholder with play button ─── */
function VideoPlaceholder({ caption }: { caption?: string }) {
  return (
    <div className="relative overflow-hidden border border-border-subtle bg-bg-surface aspect-[16/8]">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
        animate={{ y: [0, 400, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-emerald-500/20" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-emerald-500/20" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-emerald-500/20" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-emerald-500/20" />
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border border-border-subtle bg-white/[0.03] flex items-center justify-center cursor-pointer hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all group">
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
            <path d="M2 2L18 12L2 22V2Z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className="group-hover:fill-emerald-500/30 group-hover:stroke-emerald-500/50 transition-colors" />
          </svg>
        </div>
      </div>
      {/* Caption bar */}
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 border-t border-border-subtle px-4 py-2 font-mono text-[9px] text-text-secondary/40 flex justify-between items-center">
          <span>{caption}</span>
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 bg-emerald-500/40" />
            VIDEO_CLIP
          </span>
        </div>
      )}
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   CASE STUDY PAGE — Redesigned Vertical Storytelling Layout
   ═══════════════════════════════════════════════════════════════ */
export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;
  const caseIndex = caseStudy ? caseStudies.findIndex(cs => cs.slug === caseStudy.slug) : -1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="font-mono text-[11px] text-emerald-500/60 tracking-[0.05em] mb-4">
          ERR: 404 // CASE NOT FOUND
        </div>
        <div className="text-[24px] text-text-primary mb-6">Case file not found.</div>
        <Link to="/" className="px-6 py-2 border border-border-subtle hover:border-emerald-500 hover:text-emerald-500 transition-colors font-mono text-xs tracking-widest uppercase">
          [ Return to Terminal ]
        </Link>
      </div>
    );
  }

  const { prev, next } = getAdjacentCases(caseStudy.slug);

  return (
    <div className="min-h-screen flex flex-col relative p-6">

      {/* ─── Top Navigation Bar ─── */}
      <header className="flex justify-between items-center pb-3 border-b border-border-subtle mb-8 text-mono-xs text-text-secondary w-full max-w-5xl mx-auto">
        <Link to="/" className="flex items-center gap-2 hover:text-emerald-500 transition-colors cursor-pointer group">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50 group-hover:opacity-100 transition-opacity">
            <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>RETURN_TO_TERMINAL</span>
        </Link>
        <div className="flex gap-6 items-center">
          <span className="text-emerald-500">CASE:</span>
          <span>{caseStudy.id}</span>
          <span className="hidden sm:inline text-text-secondary/30">|</span>
          <span className="hidden sm:inline text-text-secondary/40">{caseStudy.state}</span>
        </div>
      </header>

      <main className="flex-grow flex flex-col w-full max-w-5xl mx-auto">

        {/* ═══════════════════════════════════════════
            SECTION 01 — HERO
            Title + subtitle left, large image right
        ═══════════════════════════════════════════ */}
        <RevealSection className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
            {/* Left: Text */}
            <div className="flex flex-col h-full">
              {/* Badge + counter */}
              <div className="flex items-center mb-5">
                <span className="text-mono-xs px-2.5 py-1 border border-emerald-400/30 text-emerald-400 bg-emerald-400/5">
                  CASE STUDY
                </span>
                <span className="text-mono-xs text-text-secondary/40 border border-l-0 border-border-subtle px-2.5 py-1">
                  {String(caseIndex + 1).padStart(2, '0')} / {String(caseStudies.length).padStart(2, '0')}
                </span>
              </div>

              <h1 className="text-[38px] sm:text-[46px] font-medium tracking-[-0.03em] leading-[0.95] text-text-primary mb-3">
                {caseStudy.title}
              </h1>
              <div className="text-mono-sm text-emerald-400 uppercase mb-5">
                {caseStudy.subtitle}
              </div>

              <p className="text-body-base mb-8 max-w-[480px]">
                {caseStudy.heroDescription}
              </p>

              {/* Meta row with dividers */}
              <div className="mt-auto pt-6">
                <div className="flex flex-row flex-wrap divide-x divide-border-subtle w-full border-t border-border-subtle pt-6">
                  {[
                    { key: 'YEAR', val: caseStudy.year },
                    { key: 'TYPE', val: caseStudy.type },
                    { key: 'ROLE', val: caseStudy.role },
                    { key: 'DURATION', val: caseStudy.duration },
                  ].map((meta) => (
                    <div key={meta.key} className="flex flex-col px-6 mb-4 first:pl-0 last:pr-0">
                      <span className="text-mono-xs text-text-secondary uppercase mb-1">{meta.key}</span>
                      <span className="text-mono-sm text-white font-medium uppercase" title={meta.val}>{meta.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Hero image placeholder */}
            <MediaPlaceholder label="HERO_VISUAL" aspectClass="aspect-[4/3]" />
          </div>
        </RevealSection>

        <div className="h-px bg-border-subtle mb-10" />

        {/* ═══════════════════════════════════════════
            SECTION 02 + 03 — PROBLEM & INSIGHT (side-by-side)
            + THE BUILD with diagram
        ═══════════════════════════════════════════ */}
        <RevealSection className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-10">
            {/* Left column: Problem + Insight stacked */}
            <div className="flex flex-col gap-10">
              {/* Problem */}
              <SectionHeader icon={AlertTriangle} number="01" title="The Problem">
                {caseStudy.problem}
              </SectionHeader>
              
              <div className="h-px bg-border-subtle" />

              {/* Insight */}
              <SectionHeader icon={Lightbulb} number="02" title="The Insight">
                {caseStudy.insight}
              </SectionHeader>
            </div>

            {/* Right column: The Build */}
            <SectionHeader number="03" title="The Build">
              <p className="mb-5">
                {caseStudy.buildDescription}
              </p>
              {/* Build diagram placeholder */}
              <MediaPlaceholder label="SYSTEM_DIAGRAM" aspectClass="aspect-[4/3.2]" />
            </SectionHeader>
          </div>
        </RevealSection>
        {/* ═══════════════════════════════════════════
            BUILD BLOCKS — System / Design / Tools cards (Temporarily Hidden)
        ═══════════════════════════════════════════ */}
        {false && (
          <RevealSection className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseStudy.build.map((block, idx) => (
                <RevealSection key={block.label} delay={idx * 0.1}>
                  <div className="border border-border-subtle bg-transparent hover:bg-white/[0.015] transition-colors h-full flex flex-col">
                    {/* Block header */}
                    <div className="border-b border-border-subtle px-4 py-2.5 flex items-center justify-between">
                      <span className="font-mono text-[9px] text-emerald-500/70 tracking-[0.1em]">{block.label}</span>
                      <div className="flex gap-1">
                        {[0, 1, 2].map(i => <div key={i} className="w-1 h-1 bg-emerald-500/30" />)}
                      </div>
                    </div>
                    {/* Block body */}
                    <div className="p-4 flex flex-col flex-1">
                      <h4 className="text-[14px] font-normal tracking-[-0.01em] text-text-primary mb-2.5">{block.title}</h4>
                      <p className="text-[11.5px] text-text-secondary leading-[1.7] mb-4 flex-1">{block.description}</p>
                      {block.tags && block.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {block.tags.map(tag => (
                            <span key={tag} className="font-mono text-[8px] tracking-[0.06em] px-1.5 py-0.5 border border-border-subtle text-text-secondary/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </RevealSection>
        )}

        <div className="h-px bg-border-subtle mb-10" />

        {/* ═══════════════════════════════════════════
            SECTION 04 — SYSTEM IN MOTION (video)
        ═══════════════════════════════════════════ */}
        <RevealSection className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.3fr_0.7fr] gap-8 items-start">
            {/* Left: label + description */}
            <SectionHeader icon={Activity} number="04" title="System in Motion">
              {caseStudy.videoCaption || 'Watch the system in action.'}
            </SectionHeader>
            {/* Right: video placeholder */}
            <VideoPlaceholder caption={caseStudy.videoCaption} />
          </div>
        </RevealSection>

        <div className="h-px bg-border-subtle mb-10" />

        {/* ═══════════════════════════════════════════
            SECTION 05 — RESULTS (stat cards)
        ═══════════════════════════════════════════ */}
        <RevealSection className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.3fr_0.7fr] gap-8 items-start">
            <SectionHeader icon={ChartNoAxesCombined} number="05" title="Results" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudy.resultStats.map((stat, idx) => (
                <RevealSection key={idx} delay={idx * 0.08}>
                  <div
                    className="group/card relative border border-emerald-500/10 bg-emerald-500/[0.04] p-5 flex flex-col h-full rounded-sm transition-all duration-300 ease-out hover:border-emerald-500/25 hover:-translate-y-1"
                    style={{
                      boxShadow: 'inset 0 1px 0 0 rgba(16,185,129,0.08)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        '0 8px 24px -4px rgba(16,185,129,0.12), 0 0 0 1px rgba(16,185,129,0.08), inset 0 1px 0 0 rgba(16,185,129,0.12)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        'inset 0 1px 0 0 rgba(16,185,129,0.08)';
                    }}
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent group-hover/card:via-emerald-500/40 transition-all duration-300" />
                    <div className="text-[28px] sm:text-[32px] font-normal tracking-[-0.02em] text-emerald-500 leading-none mb-3 group-hover/card:text-emerald-400 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-body-sm text-text-secondary/60 group-hover/card:text-text-secondary/80 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </RevealSection>

        <div className="h-px bg-border-subtle mb-10" />

        {/* ═══════════════════════════════════════════
            SECTION 06 — TAKEAWAY
        ═══════════════════════════════════════════ */}
        <RevealSection className="mb-10">
          <SectionHeader icon={Layers} number="06" title="Takeaway">
            <div className="border-l-2 border-emerald-500/30 pl-6 py-2 mt-2">
              <p className="text-body-base italic max-w-2xl">
                "{caseStudy.takeaway}"
              </p>
            </div>
          </SectionHeader>
        </RevealSection>

        {/* ═══════════════════════════════════════════
            NAVIGATION — Previous / Next
        ═══════════════════════════════════════════ */}
        <div className="h-px bg-border-subtle mb-10" />
        <RevealSection className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prev ? (
              <Link
                to={`/case/${prev.slug}`}
                className="group border border-border-subtle hover:border-emerald-500/20 transition-all p-5 flex flex-col cursor-pointer"
              >
                <div className="text-mono-xs text-text-secondary/40 mb-2">
                  ← PREVIOUS CASE
                </div>
                <div className="text-mono-xs text-emerald-500/50 mb-1">
                  SYS: {prev.id}
                </div>
                <div className="text-[14px] text-text-primary group-hover:text-emerald-500 transition-colors">
                  {prev.title}
                </div>
                <div className="text-[11px] text-text-secondary/50 mt-1">
                  {prev.type}
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                to={`/case/${next.slug}`}
                className="group border border-border-subtle hover:border-emerald-500/20 transition-all p-5 flex flex-col items-end text-right cursor-pointer"
              >
                <div className="text-mono-xs text-text-secondary/40 mb-2">
                  NEXT CASE →
                </div>
                <div className="text-mono-xs text-emerald-500/50 mb-1">
                  SYS: {next.id}
                </div>
                <div className="text-[14px] text-text-primary group-hover:text-emerald-500 transition-colors">
                  {next.title}
                </div>
                <div className="text-[11px] text-text-secondary/50 mt-1">
                  {next.type}
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </RevealSection>

      </main>

      {/* ─── Footer ─── */}
      <footer className="mt-auto border-t border-border-subtle pt-4 flex flex-col md:flex-row justify-between items-center text-mono-xs text-text-secondary w-full max-w-5xl mx-auto gap-4">
        <Link to="/" className="text-emerald-500 hover:text-emerald-500/80 transition-colors cursor-pointer">
          SHUTDOWN / EXIT NODE
        </Link>
        <div>BUILT FOR SIGNAL. NOT FOR NOISE.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-text-primary transition-colors">[ CONTACT ]</a>
          <a href="#" className="hover:text-text-primary transition-colors">[ LINKEDIN ]</a>
          <a href="#" className="hover:text-text-primary transition-colors">[ X ]</a>
        </div>
      </footer>
    </div>
  );
}
