import React, { useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import {
  GraduationCap,
  Search,
  Brain,
  SlidersHorizontal,
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
  principles,
  tools,
  coreSystem,
  closingBanner,
} from '../data/aboutData';
import aboutHeroBg from '../assets/about-hero-bg.png';
import blockchainBrawlersCover from '../assets/blockchain-brawlers-cover.png';
import brawlerMindCover from '../assets/the-brawler-mind-cover.png';
import algonquinDashboardCover from '../assets/algonquin-dashboard-cover.png';
import aiBrandMachineCover from '../assets/ai-brand-machine-cover.png';
import brawlerMindRealCover from '../assets/brawler-mind-real-cover.png';
import futureOfWorkCover from '../assets/future-of-work-cover.png';
import behavioralLeveragePrinciplesCover from '../assets/12-behavioral-leverage-principles.png';
import psychologyIcon from '../assets/psychology-icon.svg';
import narrativeIcon from '../assets/narrative-icon.svg';
import systemsIcon from '../assets/systems-icon.svg';
import { TopBar } from './TopBar';

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
const pathIcons = [GraduationCap, Search, Brain, SlidersHorizontal, Rocket];

const pathTimelineSteps = [
  {
    number: '01',
    title: 'UNIVERSITY\nEDUCATION',
    description: 'I built a foundation in strategy, finance, and economics - learning how systems allocate resources and shape outcomes.',
    cta: 'See full details',
    bullets: ['Strategy & markets', 'Economics & finance', 'Systems thinking intro'],
  },
  {
    number: '02',
    title: 'RESEARCH ON THE\nFUTURE OF WORK',
    description: 'I researched how automation and AI are reshaping the labor market and the skills required to thrive.',
    cta: 'View research',
    href: 'https://ybnjfz0v2gs31z0q.public.blob.vercel-storage.com/The%20Behavioral%20Leverage%20Framework.pdf',
    bullets: ['Rise of automation', 'Shift to knowledge work', 'Human skills as leverage'],
  },
  {
    number: '03',
    title: 'REBUILDING\nMY MIND',
    description: 'I identified my gaps and rebuilt my thinking from the ground up - across disciplines and mental models.',
    cta: 'My reading list',
    href: '/reading-path',
    bullets: ['Cross-disciplinary learning', 'Mental models & systems', 'Psychology to persuasion'],
  },
  {
    number: '04',
    title: 'THE PATH TO\nTRADING',
    description: 'I entered the markets to test everything I had learned. Trading became the ultimate classroom.',
    cta: 'Study the system',
    href: '/trading-journey-brawler-mind-v2',
    bullets: ['Mastery of self', 'Risk, probability, discipline', 'Systems thinking in action'],
  },
  {
    number: '05',
    title: 'EXECUTION\nMODE',
    description: 'Bringing ideas to life. Building systems, content, and tools that create real impact.',
    cta: 'Explore my work',
    href: '#current-work',
    bullets: ['Brand building', 'Product & systems', 'Data to decision', 'AI x creativity'],
  },
];

const currentWorkItems = [
  {
    title: 'Blockchain Brawlers',
    description: 'A multi-layered brand ecosystem combining trading education, content, music, and community.',
    image: blockchainBrawlersCover,
    href: '/blockchain-brawlers-v2',
  },
  {
    title: 'The Brawler Mind',
    description: 'A framework for high-performance thinking, decision-making, and identity under pressure.',
    image: brawlerMindCover,
    href: '/trading-journey-brawler-mind-v2',
  },
  {
    title: 'Algonquin Park\nCamping Dashboard',
    description: 'A data-driven dashboard that helps campers make smarter decisions with real-time environmental insights.',
    image: algonquinDashboardCover,
    href: '/algonquin-dashboard-v2',
  },
  {
    title: 'AI Brand Machine\n(Synthetic Foundry)',
    description: 'An AI-powered system for building brands-input to output pipelines, visual systems, and iterative creation.',
    image: aiBrandMachineCover,
    href: '/ai-brand-machine-synthetic-foundry-v2',
  },
];

const throughLinePillars = [
  {
    title: 'PSYCHOLOGY',
    description: 'Behavior, cognition, decision-making, identity.',
    icon: psychologyIcon,
  },
  {
    title: 'NARRATIVE',
    description: 'Meaning, communication, cultural influence.',
    icon: narrativeIcon,
  },
  {
    title: 'SYSTEMS',
    description: 'Structure, leverage, feedback loops, compounding.',
    icon: systemsIcon,
  },
];

const fieldDocuments = [
  {
    title: 'The Brawler Mind',
    description: 'Master your inner game. A guide to identity, discipline, and edge.',
    image: brawlerMindRealCover,
    href: '/trading-journey-brawler-mind-v2',
  },
  {
    title: '12 Behavioral\nLeverage Principles',
    description: 'Mental models for better decisions under pressure.',
    image: behavioralLeveragePrinciplesCover,
    href: 'https://ybnjfz0v2gs31z0q.public.blob.vercel-storage.com/The%20Behavioral%20Leverage%20Framework.pdf',
  },
  {
    title: 'Future of Work\nResearch Report',
    description: 'Signals, shifts, and skill stacks for the next era.',
    image: futureOfWorkCover,
    href: 'https://ybnjfz0v2gs31z0q.public.blob.vercel-storage.com/The-Future-of-Work-by-Jordan-Chizick.pdf',
  },
];

const operatorSignals = [
  {
    quote: 'JLC has a rare ability to turn complex systems and ideas into clarity-and then build things that actually work.',
    source: 'Founder, Fintech Platform',
  },
];



/* ═══════════════════════════════════════════════════════════════
   PRINCIPLE CARD
   ═══════════════════════════════════════════════════════════════ */
function PathTimelineSection() {
  return (
    <RevealSection className="mb-8">
      <section className="relative overflow-hidden">
        <div className="mb-4 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
          <span className="text-mono-sm font-medium uppercase leading-tight text-emerald-400">001 // THE PATH</span>
          <span className="h-px bg-white/10" aria-hidden="true" />
        </div>

        <div className="relative overflow-x-auto pb-1 scrollbar-hide">
          <div className="relative min-w-[1040px]">
            <div className="absolute left-2 right-2 top-[25px] h-px bg-white/44" aria-hidden="true" />
            <span className="about-path-signal-packet absolute top-[25px] z-20 h-1.5 w-1.5 rounded-full bg-[#f1aa3d] shadow-[0_0_10px_rgba(241,170,61,0.72)]" aria-hidden="true" />
            <span className="absolute left-1 top-[22px] h-1.5 w-1.5 bg-[#f1aa3d] shadow-[0_0_8px_rgba(241,170,61,0.6)]" aria-hidden="true" />
            <span className="absolute right-1 top-[22px] h-1.5 w-1.5 bg-[#f1aa3d] shadow-[0_0_8px_rgba(241,170,61,0.6)]" aria-hidden="true" />

            <div className="grid grid-cols-5 gap-7">
              {pathTimelineSteps.map((step, index) => {
                const Icon = pathIcons[index] || GraduationCap;

                return (
                  <article key={step.number} className="relative min-w-0 pt-[76px]">
                    <div className={`about-path-icon-signal about-path-icon-signal-${index} absolute left-1/2 top-0 z-10 flex h-[52px] w-[52px] -translate-x-1/2 items-center justify-center border border-white/55 bg-black/62 text-white/72 shadow-[0_0_16px_rgba(255,255,255,0.04)]`}>
                      <span className="absolute inset-1.5 border border-white/18" aria-hidden="true" />
                      <Icon className="h-6 w-6" strokeWidth={1.35} />
                    </div>

                    {/* <div className="mb-2 font-mono text-[17px] text-center leading-none text-[#f1aa3d] tabular-nums">
                      {step.number} /
                    </div> */}
                    <h3 className="mb-3 min-h-[3.7rem] whitespace-pre-line font-mono text-[17px] text-center uppercase leading-[1.15] tracking-[0.04em] text-white/82">
                      {step.title}
                    </h3>
                    <p className="mb-4 font-mono text-[12px] leading-[1.58] text-white/55">
                      {step.description}
                    </p>
                    <ul className="mb-4 space-y-1">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="grid grid-cols-[0.65rem_minmax(0,1fr)] gap-1.5 font-mono text-[12px] leading-[1.45] text-white/62">
                          <span className="pt-[0.42rem] text-[9px] leading-none text-[#f1aa3d]">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {step.href ? (
                      step.href.startsWith('/') ? (
                        <Link to={step.href} className="inline-flex items-center gap-2 font-mono text-[13px] font-medium text-[#f1aa3d] transition-colors hover:text-[#ffd28a]">
                          <span>{step.cta}</span>
                          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </Link>
                      ) : (
                        <a
                          href={step.href}
                          target={step.href.startsWith('http') ? '_blank' : undefined}
                          rel={step.href.startsWith('http') ? 'noreferrer' : undefined}
                          className="inline-flex items-center gap-2 font-mono text-[13px] font-medium text-[#f1aa3d] transition-colors hover:text-[#ffd28a]"
                        >
                          <span>{step.cta}</span>
                          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </a>
                      )
                    ) : (
                      <div className="inline-flex items-center gap-2 font-mono text-[13px] font-medium text-[#f1aa3d]">
                        <span>{step.cta}</span>
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

function CurrentWorkSection() {
  return (
    <RevealSection className="mb-10">
      <section id="current-work" className="scroll-mt-24">
        <div className="mb-4 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
          <span className="text-mono-sm font-medium uppercase leading-tight text-emerald-400">002 // CURRENT WORK</span>
          <span className="h-px bg-white/10" aria-hidden="true" />
        </div>

        <h2 className="mb-5 font-playfair text-[32px] font-medium leading-tight text-[#f4efe6] sm:text-[40px]">
          Systems in execution.
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {currentWorkItems.map((item, index) => (
            <RevealSection key={item.title} delay={index * 0.06}>
              <Link
                to={item.href}
                className="group flex h-full min-h-[390px] flex-col overflow-hidden border border-white/12 bg-[#070a09]/82 transition-colors hover:border-[#f1aa3d]/45"
              >
                <div className="relative aspect-[1.36] overflow-hidden border-b border-white/10 bg-black">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(0,0,0,0.38)_100%)]" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-3 whitespace-pre-line font-playfair text-[21px] font-medium leading-[1.16] text-[#f4efe6]">
                    {item.title}
                  </h3>
                  <p className="mb-6 font-mono text-[13px] leading-[1.68] text-white/60">
                    {item.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 font-mono text-[14px] font-medium text-[#f1aa3d]">
                    <span>View Project</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.6} />
                  </span>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </section>
    </RevealSection>
  );
}

function FinalAboutSections() {
  return (
    <RevealSection className="mb-12">
      <section className="space-y-7">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_2.05fr]">
          <div className="pr-8">
            <div className="mb-3 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
              <span className="text-mono-sm font-medium uppercase leading-tight text-emerald-400">003 // THE THROUGH-LINE</span>
              <span className="h-px bg-white/10" aria-hidden="true" />
            </div>
            <h2 className="mb-4 font-playfair text-[38px] font-medium leading-[0.98] text-[#f4efe6] sm:text-[46px]">
              Understanding.<br />
              Structure.<br />
              Execution.
            </h2>
            <p className="max-w-[360px] font-mono text-[13px] leading-[1.7] text-white/58">
              I study how people think, how narratives shape perception, and how systems drive outcomes. Then I build frameworks, tools, environments, and products that create leverage.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 border-white/12 lg:mt-0 lg:grid-cols-3">
            {throughLinePillars.map((pillar) => (
              <article key={pillar.title} className="flex min-h-[220px] flex-col items-center justify-center border-t border-white/10 py-7 text-center lg:border-l lg:border-t-0 lg:px-10 lg:py-0">
                <div className="mb-5 flex justify-center">
                  <img
                    src={pillar.icon}
                    alt=""
                    className="h-16 w-16 object-contain drop-shadow-[0_0_8px_rgba(241,170,61,0.24)]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-5 font-mono text-[18px] uppercase tracking-[0.12em] text-white/78">{pillar.title}</h3>
                <p className="mx-auto max-w-[210px] font-mono text-[14px] leading-[1.65] text-white/55">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,2.25fr)_minmax(260px,0.75fr)]">
          <section>
            <div className="mb-4 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
              <span className="text-mono-sm font-medium uppercase leading-tight text-emerald-400">004 // BOOKS + FIELD DOCUMENTS</span>
              <span className="h-px bg-white/10" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {fieldDocuments.map((doc) => {
                const isExternal = doc.href.startsWith('http');
                const content = (
                  <>
                    <img src={doc.image} alt="" className="h-[124px] w-[88px] object-cover opacity-88" aria-hidden="true" />
                    <div className="flex min-w-0 flex-col">
                      <h3 className="mb-3 whitespace-pre-line font-mono text-[14px] font-medium leading-[1.35] text-white/82">{doc.title}</h3>
                      <p className="mb-4 font-mono text-[12px] leading-[1.55] text-white/50">{doc.description}</p>
                      <span className="mt-auto inline-flex items-center gap-2 font-mono text-[12px] font-medium text-[#f1aa3d]">
                        Read Now
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                      </span>
                    </div>
                    <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-emerald-400/35" aria-hidden="true" />
                    <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-emerald-400/25" aria-hidden="true" />
                  </>
                );

                return isExternal ? (
                  <a
                    key={doc.title}
                    href={doc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative grid min-h-[152px] grid-cols-[88px_minmax(0,1fr)] gap-5 border border-white/12 bg-[#070a09]/82 p-4 transition-colors hover:border-[#f1aa3d]/45"
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    key={doc.title}
                    to={doc.href}
                    className="group relative grid min-h-[152px] grid-cols-[88px_minmax(0,1fr)] gap-5 border border-white/12 bg-[#070a09]/82 p-4 transition-colors hover:border-[#f1aa3d]/45"
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </section>

          <section>
            <div className="mb-4 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
              <span className="text-mono-sm font-medium uppercase leading-tight text-emerald-400">OPERATOR SIGNALS</span>
              <span className="h-px bg-white/10" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-1 gap-3">
              {operatorSignals.map((signal) => (
                <article key={signal.source} className="relative min-h-[136px] border border-white/12 bg-[#070a09]/82 p-5">
                  <div className="mb-2.5 font-playfair text-[28px] leading-none text-[#f1aa3d]">“</div>
                  <p className="font-mono text-[13px] leading-[1.6] text-white/66">{signal.quote}</p>
                  <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-white/42">- {signal.source}</div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="relative overflow-hidden border border-emerald-400/35 bg-[#07100f]/72 px-6 py-8 shadow-[inset_0_0_0_1px_rgba(241,170,61,0.2)] sm:px-12">
          <div className="absolute left-0 top-0 h-3 w-3 border-l border-t border-[#f1aa3d]/45" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[#f1aa3d]/45" aria-hidden="true" />
          <div className="grid grid-cols-1 items-center gap-0 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-6">
            <span className="hidden font-playfair text-[58px] leading-none text-[#f1aa3d]/55 sm:block" aria-hidden="true">✶</span>
            <div className="text-center font-mono text-[18px] leading-[1.55] sm:text-[22px]">
              <div className="text-white/86">I build internal and external systems for navigating complexity.</div>
              <div className="text-emerald-400">Then I test them where it matters.</div>
            </div>
            <span className="hidden font-playfair text-[58px] leading-none text-[#f1aa3d]/55 sm:block" aria-hidden="true">✶</span>
          </div>
        </section>
      </section>
    </RevealSection>
  );
}

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
    <div className="min-h-screen flex flex-col relative p-4 sm:p-6">
      <TopBar className="max-w-[1180px]" />

      <main className="flex-grow flex flex-col w-full max-w-[1180px] mx-auto">

        {/* ═══════════════════════════════════════════
            SECTION 01 — HERO
        ═══════════════════════════════════════════ */}
        <RevealSection className="mb-6">
          <section className="relative min-h-[540px] overflow-hidden border border-white/[0.06] bg-black shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]">
            <img
              src={aboutHeroBg}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[58%_48%]"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_28%,rgba(0,0,0,0.28)_56%,rgba(0,0,0,0.68)_100%)]" aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(255,255,255,0.08),transparent_32%),linear-gradient(0deg,rgba(0,0,0,0.75),transparent_28%)]" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:20px_20px]" aria-hidden="true" />

            <div className="relative z-10 flex min-h-[540px] flex-col px-4 py-4 sm:px-8 sm:py-4">
              <header className="mb-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3 text-mono-xs uppercase text-white/48">
                <Link to="/" className="inline-flex items-center gap-2 border border-white/10 bg-black/30 px-2.5 py-1.5 transition-colors hover:border-emerald-400/40 hover:text-emerald-300">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="opacity-70">
                    <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
                  </svg>
                  <span>RETURN_TO_TERMINAL</span>
                </Link>

                <div className="flex items-center">
                  <span className="border border-emerald-500/35 bg-emerald-500/10 px-4 py-1.5 text-emerald-400">ABOUT</span>
                  <span className="border border-l-0 border-white/10 bg-black/28 px-4 py-1.5 text-white/35">1987</span>
                </div>
              </header>

              <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.58fr)_minmax(16rem,0.42fr)] lg:items-center">
                <div className="max-w-[560px]">
                  {/* <div className="mb-4 text-mono-sm font-medium uppercase text-emerald-400">ABOUT / OPERATOR</div> */}
                  <h1 className="font-playfair text-[44px] font-medium leading-[0.94] tracking-[0] text-[#f4efe6] sm:text-[56px] lg:text-[56px]">
                    <span className="block">I study systems.</span>
                    <span className="block pt-1.5 italic text-[#f1aa3d]">Then I build in them.</span>
                  </h1>

                  <p className="mt-6 max-w-[450px] font-mono text-[13px] leading-[1.62] text-white/66 sm:text-[14px]">
                    My path hasn't been linear. I've moved through business, psychology, markets, AI, and countless systems-collecting patterns, stress-testing ideas, and learning what actually holds up in real conditions. Now I build tools, workflows, and products that create leverage and clarity for people and teams operating in complexity.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      to="/contact"
                      className="inline-flex min-h-9 items-center justify-center border border-emerald-500/45 bg-emerald-500/[0.08] px-7 text-mono-xs font-medium uppercase tracking-[0.14em] text-emerald-300 transition-colors hover:border-emerald-300 hover:bg-emerald-500/15"
                    >
                      [ Contact Operator ]
                    </Link>
                    <Link
                      to="/"
                      className="inline-flex min-h-9 items-center justify-center border border-white/16 bg-black/22 px-7 text-mono-xs font-medium uppercase tracking-[0.14em] text-white/58 transition-colors hover:border-white/30 hover:text-white/78"
                    >
                      [ View Case Studies ]
                    </Link>
                  </div>
                </div>

                <aside className="ml-auto hidden max-w-[285px] pr-4 text-[#d8d1c6]/78 lg:block">
                  <div className="mb-2 font-playfair text-[30px] leading-none text-[#f1aa3d]">“</div>
                  <blockquote className="font-playfair text-[19px] italic leading-[1.38]">
                    The goal isn't just knowledge. It's clarity under pressure and the ability to build systems that actually work in reality.
                  </blockquote>
                  <div className="mt-3 text-right font-playfair text-[30px] leading-none text-[#f1aa3d]">”</div>
                </aside>
              </div>
            </div>
          </section>

        </RevealSection>

        <PathTimelineSection />


        <CurrentWorkSection />

        <FinalAboutSections />


      </main>

      {/* ─── Footer ─── */}
      <footer className="mt-auto border-t border-border-subtle pt-4 flex flex-col md:flex-row justify-between items-center text-mono-xs text-text-secondary w-full max-w-[1180px] mx-auto gap-4">
        <Link to="/" className="text-emerald-500 hover:text-emerald-500/80 transition-colors cursor-pointer">
          SHUTDOWN / EXIT NODE
        </Link>
        <div>SYSTEMS OVER ASSETS. DURABILITY OVER DECORATION.</div>
        <div className="flex gap-4">
          <Link to="/contact" className="hover:text-text-primary transition-colors">[ CONTACT ]</Link>
          <a href="#" className="hover:text-text-primary transition-colors">[ LINKEDIN ]</a>
          <a href="#" className="hover:text-text-primary transition-colors">[ X ]</a>
        </div>
      </footer>
    </div>
  );
}


