import React, { useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import {
  GraduationCap,
  Search,
  Brain,
  TrendingUp,
  Rocket,
  Crosshair,
  Layers,
  Zap,
  Triangle,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import {
  systemMapNodes,
  pathSteps,
  principles,
  tools,
  coreSystem,
  closingBanner,
  type PathStep,
} from '../data/aboutData';
import aboutHeroImg from '../assets/about-hero.png';
import sparkImg from '../assets/01-spark.png';
import structureImg from '../assets/02-structure.png';
import integrationImg from '../assets/03-integration.png';
import executionImg from '../assets/04-execution.png';
import impactImg from '../assets/05-impact.png';

const transformationSteps = [
  {
    number: '01',
    title: 'SPARK',
    img: sparkImg,
    text: 'It starts with curiosity.\nA question. A spark.\nThe desire to understand.',
  },
  {
    number: '02',
    title: 'STRUCTURE',
    img: structureImg,
    text: 'I build frameworks.\nMap the system.\nMake sense of complexity.',
  },
  {
    number: '03',
    title: 'INTEGRATION',
    img: integrationImg,
    text: 'Connect the dots.\nIntegrate knowledge.\nTurn theory into clarity.',
  },
  {
    number: '04',
    title: 'EXECUTION',
    img: executionImg,
    text: 'I take action.\nTest. Build. Iterate.\nSystems in motion.',
  },
  {
    number: '05',
    title: 'IMPACT',
    img: impactImg,
    text: 'Create leverage.\nMultiply impact.\nLeave a mark.',
  },
];

/* ─── Animated section wrapper (reused pattern from CaseStudyPage) ─── */
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

/* ═══════════════════════════════════════════════════════════════
   SYSTEM MAP VISUAL — Animated radial network diagram
   ═══════════════════════════════════════════════════════════════ */
function SystemMapVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Array<{
    x: number; y: number;
    vx: number; vy: number;
    life: number; maxLife: number;
    size: number;
  }>>([]);

  // Node positions — placed radially (3 left, 3 right) matching the design
  const nodePositions = [
    { x: 0.18, y: 0.22, label: 'CURIOSITY', subtitle: 'The spark' },       // top-left
    { x: 0.18, y: 0.50, label: 'DISCIPLINE', subtitle: 'The engine' },     // mid-left
    { x: 0.18, y: 0.78, label: 'EXECUTION', subtitle: 'The outcome' },     // bot-left
    { x: 0.82, y: 0.22, label: 'SYSTEMS', subtitle: 'The structure' },     // top-right
    { x: 0.82, y: 0.50, label: 'LEVERAGE', subtitle: 'The multiplier' },   // mid-right
    { x: 0.82, y: 0.78, label: 'IMPACT', subtitle: 'The purpose' },        // bot-right
  ];

  const draw = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number, time: number) => {
    ctx.clearRect(0, 0, w, h);
    const dpr = window.devicePixelRatio || 1;
    const cx = w / 2;
    const cy = h / 2;

    // ─── Background radial glow ───
    const radGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.45);
    radGrad.addColorStop(0, 'rgba(16, 185, 129, 0.06)');
    radGrad.addColorStop(0.5, 'rgba(16, 185, 129, 0.02)');
    radGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = radGrad;
    ctx.fillRect(0, 0, w, h);

    // ─── Circular grid rings ───
    for (let i = 1; i <= 3; i++) {
      const r = (Math.min(w, h) * 0.15) * i;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(16, 185, 129, ${0.06 - i * 0.015})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // ─── Connection lines from each node to center ───
    const absNodes = nodePositions.map(n => ({ x: n.x * w, y: n.y * h, label: n.label, subtitle: n.subtitle }));

    absNodes.forEach((node) => {
      const grad = ctx.createLinearGradient(node.x, node.y, cx, cy);
      grad.addColorStop(0, 'rgba(16, 185, 129, 0.25)');
      grad.addColorStop(1, 'rgba(16, 185, 129, 0.05)');
      ctx.beginPath();
      ctx.moveTo(node.x, node.y);
      ctx.lineTo(cx, cy);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // ─── Cross-connections between adjacent nodes ───
    const connections = [[0, 3], [1, 4], [2, 5], [0, 1], [1, 2], [3, 4], [4, 5]];
    connections.forEach(([a, b]) => {
      ctx.beginPath();
      ctx.moveTo(absNodes[a].x, absNodes[a].y);
      ctx.lineTo(absNodes[b].x, absNodes[b].y);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.07)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
    });

    // ─── Center pulsing node ───
    const pulseR = 6 + Math.sin(time * 2) * 2;
    const centerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, pulseR * 3);
    centerGlow.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
    centerGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = centerGlow;
    ctx.fillRect(cx - pulseR * 3, cy - pulseR * 3, pulseR * 6, pulseR * 6);

    ctx.beginPath();
    ctx.arc(cx, cy, pulseR, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(16, 185, 129, 0.6)';
    ctx.fill();

    // ─── Particles traveling along connections ───
    const particles = particlesRef.current;
    // Spawn new particles
    if (particles.length < 40 && Math.random() < 0.3) {
      const nodeIdx = Math.floor(Math.random() * absNodes.length);
      const node = absNodes[nodeIdx];
      const targetX = cx;
      const targetY = cy;
      const dx = targetX - node.x;
      const dy = targetY - node.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const speed = 0.5 + Math.random() * 0.8;
      particles.push({
        x: node.x,
        y: node.y,
        vx: (dx / dist) * speed,
        vy: (dy / dist) * speed,
        life: 0,
        maxLife: dist / speed,
        size: 1 + Math.random() * 1.5,
      });
    }

    // Update and draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life++;

      if (p.life >= p.maxLife) {
        particles.splice(i, 1);
        continue;
      }

      const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.8;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
      ctx.fill();
    }

    // ─── Node labels (drawn on canvas for clean integration) ───
    absNodes.forEach((node, idx) => {
      // Node dot
      ctx.beginPath();
      ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(16, 185, 129, 0.7)';
      ctx.fill();

      // Glow
      const nodeGlow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 12);
      nodeGlow.addColorStop(0, 'rgba(16, 185, 129, 0.15)');
      nodeGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = nodeGlow;
      ctx.fillRect(node.x - 12, node.y - 12, 24, 24);
    });

    // ─── Scanning ring ───
    const scanAngle = time * 0.5;
    const scanR = Math.min(w, h) * 0.35;
    ctx.beginPath();
    ctx.arc(cx, cy, scanR, scanAngle, scanAngle + 0.5);
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.15)';
    ctx.lineWidth = 2;
    ctx.stroke();

  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.scale(dpr, dpr);
    };
    resizeCanvas();

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let startTime = performance.now();

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const time = (performance.now() - startTime) / 1000;
      draw(ctx, rect.width, rect.height, time);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [draw]);

  return (
    <div className="relative w-full aspect-[4/3] border border-border-subtle bg-bg-surface overflow-hidden">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-emerald-500/30 z-10" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-emerald-500/30 z-10" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-emerald-500/30 z-10" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-emerald-500/30 z-10" />

      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* HTML node labels overlaid on canvas */}
      {nodePositions.map((node, idx) => (
        <div
          key={node.label}
          className="absolute flex flex-col px-2.5 py-1.5 border border-border-subtle bg-bg-base/80 backdrop-blur-sm"
          style={{
            left: `${node.x * 100}%`,
            top: `${node.y * 100}%`,
            transform: idx < 3 ? 'translate(-110%, -50%)' : 'translate(10%, -50%)',
          }}
        >
          <span className="text-mono-2xs text-emerald-400 whitespace-nowrap">{node.label}</span>
          <span className="text-mono-3xs text-text-secondary/50 whitespace-nowrap">{node.subtitle}</span>
        </div>
      ))}

      {/* Scan line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
        animate={{ y: [0, 400, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   PATH ROW — Single timeline step
   ═══════════════════════════════════════════════════════════════ */
const pathIcons = [GraduationCap, Search, Brain, TrendingUp, Rocket];

function PathRow({ step, index }: { key?: React.Key; step: PathStep; index: number }) {
  const Icon = pathIcons[index] || GraduationCap;

  return (
    <RevealSection delay={index * 0.08}>
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch py-6 gap-6 lg:gap-0">
        {/* Left: Icon + Number/Title */}
        <div className="lg:col-span-4 flex items-start gap-4 lg:pr-8 lg:border-r lg:border-border-subtle">
          <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center border border-border-subtle bg-bg-surface">
            <Icon className="w-7 h-7 text-emerald-400/60" />
          </div>
          <div className="flex items-center h-14">
            <div className="flex flex-row items-start gap-2">
              <span className="text-mono-sm text-emerald-400 whitespace-nowrap">{step.number} //</span>
              <span className="text-mono-base font-medium text-text-primary uppercase leading-tight whitespace-pre-line">{step.title}</span>
            </div>
          </div>
        </div>

        {/* Center: Description */}
        <div className="lg:col-span-4 text-body-sm lg:px-8 lg:border-r lg:border-border-subtle">
          {step.description}
        </div>

        {/* Right: Side label + Bullets */}
        <div className="lg:col-span-4 flex justify-between lg:pl-8">
          <div className="flex flex-col">
            <span className="text-mono-xs text-emerald-400 mb-2">{step.sideLabel}</span>
            <ul className="flex flex-col gap-1">
              {step.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-body-sm">
                  <span className="text-emerald-500/50 mt-[5px] text-[6px]">●</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center self-center">
            <ArrowRight className="w-4 h-4 text-emerald-500/30" />
          </div>
        </div>
      </div>

      {/* Divider */}
      {index < pathSteps.length - 1 && (
        <div className="h-px bg-border-subtle" />
      )}
    </RevealSection>
  );
}


/* ═══════════════════════════════════════════════════════════════
   PRINCIPLE CARD
   ═══════════════════════════════════════════════════════════════ */
const principleIcons: Record<string, React.ElementType> = {
  Crosshair,
  Layers,
  Zap,
  Triangle,
};

function PrincipleCard({ principle, index }: { key?: React.Key; principle: typeof principles[0]; index: number }) {
  const Icon = principleIcons[principle.icon] || Crosshair;

  return (
    <RevealSection delay={index * 0.1}>
      <div className="group border border-emerald-500/10 bg-emerald-500/[0.03] p-5 flex flex-col h-full transition-all duration-300 hover:border-emerald-500/25 hover:-translate-y-1"
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
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent group-hover:via-emerald-500/40 transition-all duration-300" />

        {/* Icon */}
        <div className="w-10 h-10 border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center mb-4">
          <Icon className="w-5 h-5 text-emerald-400" />
        </div>

        {/* Title */}
        <h4 className="text-mono-xs text-text-primary mb-2 tracking-[0.06em]">{principle.title}</h4>

        {/* Description */}
        <p className="text-body-sm flex-1">{principle.description}</p>
      </div>
    </RevealSection>
  );
}


/* ═══════════════════════════════════════════════════════════════
   ABOUT PAGE — Main Component
   ═══════════════════════════════════════════════════════════════ */
export function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
          <span className="text-emerald-500">PAGE:</span>
          <span>ABOUT</span>
          <span className="hidden sm:inline text-text-secondary/30">|</span>
          <span className="hidden sm:inline text-text-secondary/40">43.716041°N / -79.3919392°W</span>
        </div>
      </header>

      <main className="flex-grow flex flex-col w-full max-w-5xl mx-auto">

        {/* ═══════════════════════════════════════════
            SECTION 01 — HERO
        ═══════════════════════════════════════════ */}
        <RevealSection className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
            {/* Left: Text */}
            <div className="flex flex-col">
              {/* Badge + counter */}
              <div className="flex items-center mb-5">
                <span className="text-mono-xs px-2.5 py-1 border border-emerald-400/30 text-emerald-400 bg-emerald-400/5">
                  ABOUT
                </span>
                <span className="text-mono-xs text-text-secondary/40 border border-l-0 border-border-subtle px-2.5 py-1">
                  07 / 1987
                </span>
              </div>

              <h1 className="text-display mb-4">
                About Me
              </h1>

              <div className="text-mono-sm text-emerald-400 uppercase mb-5 leading-relaxed">
                I STUDY SYSTEMS.<br />
                THEN I BUILD IN THEM.
              </div>

              <p className="text-body-lg max-w-[440px]">
                My path has been anything but linear. It's a journey of curiosity, deep study, and relentless execution—turning understanding into systems that create impact.
              </p>
            </div>

            {/* Right: System Map Visual */}
            {/* <SystemMapVisual /> */}
            <div className="relative w-full border border-border-subtle bg-bg-surface overflow-hidden flex items-center justify-center p-2">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-emerald-500/30 z-10" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-emerald-500/30 z-10" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-emerald-500/30 z-10" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-emerald-500/30 z-10" />

              <img
                src={aboutHeroImg}
                alt="System Map Visual"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* ─── HOW THE SYSTEM WORKS ─── */}
          <div className="w-full h-px bg-border-subtle mt-8 mb-8" />
          <div className="w-full">
            <div className="text-mono-base font-medium text-emerald-400 uppercase mb-8">
              HOW THE SYSTEM WORKS
            </div>

            <div className="w-full overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="flex flex-row items-stretch justify-between min-w-[900px] lg:min-w-0">
                {transformationSteps.map((step, i) => (
                  <div key={step.number} className="flex flex-col items-center text-center flex-1 px-2">
                    {/* Number and Title */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="text-emerald-400 text-mono-sm mb-1.5">{step.number}</div>
                      <div className="text-text-primary text-mono-base uppercase">{step.title}</div>
                    </div>

                    {/* Image with absolute arrow to the right */}
                    <div className="w-full flex justify-center mb-8 relative">
                      <div className="relative flex justify-center w-full">
                        <img src={step.img} alt={step.title} className="w-full max-w-[160px] max-h-[160px] object-contain" />

                        {i < transformationSteps.length - 1 && (
                          <div className="absolute top-1/2 -right-2 lg:-right-4 -translate-y-1/2 translate-x-1/2 text-emerald-500/60 z-10">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                              <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Text */}
                    <p className="text-body-sm text-text-secondary whitespace-pre-line max-w-[180px]">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>

        <div className="h-px bg-border-subtle mb-3" />

        {/* ═══════════════════════════════════════════
            SECTION 02 — THE PATH
        ═══════════════════════════════════════════ */}
        <RevealSection className="mb-10">
          {/* Section label */}
          <div className="flex flex-col gap-3 mb-3">
            <span className="text-mono-base font-medium text-emerald-400 uppercase leading-tight">THE PATH</span>
            <div className="w-full h-px bg-border-subtle" />
          </div>

          {/* Timeline rows */}
          <div className="flex flex-col">
            {pathSteps.map((step, idx) => (
              <PathRow key={step.number} step={step} index={idx} />
            ))}
          </div>
        </RevealSection>

        <div className="h-px bg-border-subtle mb-10" />

        {/* ═══════════════════════════════════════════
            SECTION 03 — CORE SYSTEM + PRINCIPLES
        ═══════════════════════════════════════════ */}
        <RevealSection className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.25fr_0.75fr] gap-10">
            {/* Left: Core System */}
            <div className="flex flex-col">
              <span className="text-mono-xs text-emerald-400 mb-4">{coreSystem.label}</span>
              <h2 className="text-heading-lg mb-5">
                {coreSystem.heading.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}<br />
                  </React.Fragment>
                ))}
              </h2>
              <p className="text-body-sm mb-6 max-w-[320px]">
                {coreSystem.body}
              </p>
              <Link
                to="/reading-path"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-subtle hover:border-emerald-500 hover:text-emerald-500 transition-colors text-mono-xs tracking-widest uppercase w-fit group"
              >
                {coreSystem.cta}
                <ArrowRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            {/* Right: My Principles */}
            <div className="flex flex-col">
              <span className="text-mono-xs text-emerald-400 mb-4">MY PRINCIPLES</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {principles.map((p, idx) => (
                  <PrincipleCard key={p.title} principle={p} index={idx} />
                ))}
              </div>

              {/* Tools I Operate With */}
              <div className="flex flex-col gap-3">
                <span className="text-mono-xs text-emerald-400 flex-shrink-0 text-left">TOOLS I OPERATE WITH</span>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, idx) => (
                    <RevealSection key={tool} delay={idx * 0.05}>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border-subtle bg-bg-surface text-mono-xs text-text-secondary hover:border-emerald-500/30 hover:text-text-primary transition-colors cursor-default">
                        <span className="w-1.5 h-1.5 bg-emerald-500/40" />
                        {tool}
                      </span>
                    </RevealSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        <div className="h-px bg-border-subtle mb-10" />

        {/* ═══════════════════════════════════════════
            SECTION 05 — CLOSING BANNER
        ═══════════════════════════════════════════ */}
        <RevealSection className="mb-12">
          <div className="relative border border-border-subtle bg-bg-surface p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-emerald-500/30" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-emerald-500/30" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-emerald-500/30" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-emerald-500/30" />

            {/* Text */}
            <div className="text-mono-statement">
              <div className="text-text-primary">{closingBanner.line1}</div>
              <div className="text-emerald-400">{closingBanner.line2}</div>
            </div>

            {/* Stamp */}
            <div className="flex-shrink-0 border border-border-subtle px-4 py-3 text-mono-base sm:text-mono-lg text-text-secondary/50 leading-tight text-right">
              {closingBanner.stamp.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
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
