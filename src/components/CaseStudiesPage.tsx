import { ArrowRight, LockKeyhole } from 'lucide-react';
import type { Key } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import { TopBar } from './TopBar';
import algonquinDashboardThumb from '../assets/algonquin-dashboard-thumb.png';
import blockchainBrawlersThumb from '../assets/blockchain-brawlers-thumb.png';
import brawlerMindThumb from '../assets/brawler-mind-thumb.png';
import marketCommandThumb from '../assets/market-command-thumb.png';
import syntheticFoundryThumb from '../assets/synthetic-foundry-thumb.png';

type ClassifiedVisual = 'health' | 'property' | 'identity' | 'community';

type CaseStudy = {
  id: string;
  title: string;
  type: string;
  status: string;
  description: string;
  cta: string;
  path?: string;
  thumbnail?: string;
  visual?: ClassifiedVisual;
};

const caseStudies: CaseStudy[] = [
  { id: 'MKT_CMD', title: 'Market Command', type: 'TRADING SYSTEM', status: 'ACTIVE FILE', description: 'Private trading dashboard for market context, review, and execution readiness.', cta: 'VIEW CASE', path: '/market-command-v2', thumbnail: marketCommandThumb },
  { id: 'SYN_FOUNDRY', title: 'Synthetic Foundry', type: 'AI BRAND SYSTEM', status: 'ACTIVE FILE', description: 'AI-assisted brand system for faster strategy and execution.', cta: 'VIEW CASE', path: '/ai-brand-machine-synthetic-foundry-v2', thumbnail: syntheticFoundryThumb },
  { id: 'ALG_DASH', title: 'Algonquin Dashboard', type: 'FIELD OPS DASHBOARD', status: 'ACTIVE FILE', description: 'Trip planning dashboard for routes, gear, meals, and readiness.', cta: 'VIEW CASE', path: '/algonquin-dashboard-v2', thumbnail: algonquinDashboardThumb },
  { id: 'BRAWLER_MIND', title: 'The Brawler Mind', type: 'PERFORMANCE SYSTEM', status: 'ACTIVE FILE', description: 'Trading performance system for psychology, routines, and execution.', cta: 'VIEW CASE', path: '/trading-journey-brawler-mind-v2', thumbnail: brawlerMindThumb },
  { id: 'BRAWL_HQ', title: 'Blockchain Brawlers', type: 'EDUCATION ENGINE', status: 'ACTIVE FILE', description: 'Content, community, and education engine for crypto traders.', cta: 'VIEW CASE', path: '/blockchain-brawlers-v2', thumbnail: blockchainBrawlersThumb },
  { id: 'DANIEL_MASSAGE', title: "Daniel's Massage Therapy", type: 'LOCAL SERVICE SYSTEM', status: 'CASE FILE PENDING', description: 'Local service website and positioning system for a massage therapy practice.', cta: 'CASE FILE PENDING', visual: 'health' },
  { id: 'VTR_RE', title: 'Veronica Toronto Real Estate', type: 'REAL ESTATE SYSTEM', status: 'CASE FILE PENDING', description: 'Real estate marketing, listing presentation, and local brand support system.', cta: 'CASE FILE PENDING', visual: 'property' },
  { id: 'TOT_CONSULTING', title: 'Time on Target Consulting', type: 'VISUAL IDENTITY', status: 'CLASSIFIED / ARCHIVE', description: 'Visual identity work for a consulting brand.', cta: 'CASE FILE LOCKED', visual: 'identity' },
  { id: 'GH15', title: 'GH15', type: 'MARKETING SYSTEM', status: 'CLASSIFIED / ARCHIVE', description: 'Marketing and community work for a bodybuilding forum.', cta: 'CASE FILE LOCKED', visual: 'community' },
];

const metrics = [
  ['ACTIVE FILES', '05'],
  ['CLASSIFIED', '04'],
  ['TOTAL SYSTEMS', '09'],
] as const;

function ClassifiedGraphic({ visual }: { visual: ClassifiedVisual }) {
  const shared = 'fill-none stroke-emerald-300/28 [stroke-width:1]';

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#07100e]" aria-hidden="true">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(52,211,153,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.1)_1px,transparent_1px)] [background-size:18px_18px]" />
      <svg viewBox="0 0 320 180" className="absolute inset-0 h-full w-full">
        {visual === 'health' ? (
          <>
            <rect x="30" y="32" width="112" height="116" className={shared} />
            <path d="M48 58h76M48 78h30M88 78h36M48 98h76M48 118h44" className={shared} />
            <path d="M205 48v72M169 84h72" className={`${shared} stroke-emerald-300/42`} />
            <circle cx="205" cy="84" r="52" className={shared} />
            <path d="M166 144h78M180 154h50" className={shared} />
          </>
        ) : null}
        {visual === 'property' ? (
          <>
            <path d="M42 91 105 43l63 48v61H42Z" className={`${shared} stroke-emerald-300/42`} />
            <path d="M67 152v-42h76v42M92 152v-28h26v28" className={shared} />
            <rect x="196" y="38" width="86" height="104" className={shared} />
            <path d="M208 57h62M208 76h40M208 96h62M208 116h50" className={shared} />
            <circle cx="256" cy="76" r="4" className="fill-emerald-300/40" />
          </>
        ) : null}
        {visual === 'identity' ? (
          <>
            <circle cx="160" cy="88" r="58" className={shared} />
            <circle cx="160" cy="88" r="38" className={shared} />
            <circle cx="160" cy="88" r="17" className={`${shared} stroke-emerald-300/48`} />
            <path d="M160 20v136M92 88h136" className={shared} />
            <path d="M33 36h50v34H33zM237 108h50v34h-50z" className={shared} />
            <path d="M43 48h30M43 58h18M247 120h30M247 130h18" className={shared} />
          </>
        ) : null}
        {visual === 'community' ? (
          <>
            <rect x="34" y="30" width="252" height="120" className={shared} />
            <path d="M34 58h252M104 58v92M222 58v92" className={shared} />
            <circle cx="69" cy="88" r="12" className={shared} />
            <path d="M49 124c4-18 36-18 40 0M124 81h74M124 101h58M124 121h68" className={shared} />
            <path d="M243 82v44M231 94v20M255 94v20M225 103h36" className={`${shared} stroke-emerald-300/44`} />
          </>
        ) : null}
      </svg>
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-emerald-300/18 to-transparent" />
      <div className="absolute right-3 top-3 border border-white/10 bg-black/50 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.15em] text-white/30">Classified</div>
    </div>
  );
}

function CaseStudyCard({ study, index }: { key?: Key; study: CaseStudy; index: number }) {
  const active = Boolean(study.path && study.thumbnail);
  const cardClass = `case-index-card group relative flex min-h-[390px] min-w-0 flex-col overflow-hidden border p-4 transition-all duration-300 ${active ? 'border-emerald-500/14 bg-emerald-500/[0.035] hover:-translate-y-0.5 hover:border-emerald-400/34 hover:shadow-[0_10px_28px_rgba(16,185,129,0.075)]' : 'border-white/[0.075] bg-white/[0.014] text-white/72'}`;

  const content = (
    <>
      <div className="mb-4 flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.12em]">
        <span className={active ? 'text-emerald-300/85' : 'text-white/38'}>{String(index + 1).padStart(2, '0')} // SYS: {study.id}</span>
        <span className={active ? 'text-white/38' : 'text-white/28'}>{study.type}</span>
      </div>

      <div className={`relative -mx-1 aspect-[16/9] overflow-hidden border ${active ? 'border-emerald-500/14 bg-black/32' : 'border-white/[0.065] bg-black/36 opacity-65'}`}>
        {active ? (
          <img src={study.thumbnail} alt="" className="h-full w-full object-cover opacity-88 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100" loading="lazy" aria-hidden="true" />
        ) : (
          <ClassifiedGraphic visual={study.visual!} />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className={`font-mono text-[9px] uppercase tracking-[0.12em] ${active ? 'text-emerald-400/78' : 'text-white/32'}`}>{study.status}</span>
          {active ? <span className="h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.45)]" /> : <LockKeyhole className="h-3.5 w-3.5 text-white/25" strokeWidth={1.5} />}
        </div>
        <h2 className={`mb-3 font-space-grotesk text-[20px] font-medium leading-tight tracking-[-0.015em] ${active ? 'text-text-primary' : 'text-white/58'}`}>{study.title}</h2>
        <p className={`font-mono text-[12px] leading-[1.55] ${active ? 'text-white/58' : 'text-white/36'}`}>{study.description}</p>
        <div className={`mt-auto flex items-center justify-between gap-4 border-t pt-4 font-mono text-[9px] font-medium uppercase tracking-[0.12em] ${active ? 'border-emerald-500/12 text-emerald-400/84 transition-colors group-hover:text-emerald-300' : 'border-white/[0.065] text-white/28'}`}>
          <span>{study.cta}</span>
          {active ? <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} /> : <LockKeyhole className="h-3.5 w-3.5" strokeWidth={1.4} />}
        </div>
      </div>
    </>
  );

  return active ? (
    <Link to={study.path!} className={`${cardClass} no-underline`} aria-label={`View ${study.title} case study`}>{content}</Link>
  ) : (
    <article className={cardClass} aria-label={`${study.title}, ${study.status}`}>{content}</article>
  );
}

export function CaseStudiesPage() {
  return (
    <div className="relative flex min-h-screen max-w-full flex-col overflow-x-hidden p-4 sm:p-6">
      <TopBar className="max-w-[1180px]" />
      <main className="mx-auto flex w-full max-w-[1180px] min-w-0 flex-grow flex-col">
        <section className="relative mb-7 overflow-hidden border border-emerald-500/12 bg-emerald-500/[0.018] px-5 py-7 sm:px-7 sm:py-9 lg:px-9">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(52,211,153,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.16)_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <div className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-400">002 // System Index</div>
              <h1 className="mb-4 font-space-grotesk text-[38px] font-medium uppercase leading-none tracking-[-0.035em] text-text-primary sm:text-[50px]">Case Studies</h1>
              <p className="max-w-[680px] font-mono text-[13px] leading-[1.65] text-white/56 sm:text-[14px]">A field archive of systems, interfaces, brand engines, dashboards, and operational builds.</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {metrics.map(([label, value]) => (
                <div key={label} className="min-w-0 border border-emerald-500/16 bg-black/24 px-3 py-3.5 sm:min-w-[138px]">
                  <div className="mb-2 font-mono text-[8px] uppercase tracking-[0.13em] text-emerald-400/72">{label}</div>
                  <div className="font-mono text-[20px] leading-none text-text-primary">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12" aria-labelledby="systems-grid-title">
          <div className="mb-4 flex items-center gap-4">
            <h2 id="systems-grid-title" className="shrink-0 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-emerald-400">// All Systems</h2>
            <div className="h-px flex-1 bg-emerald-500/12" />
            <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/28">09 indexed files</span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => <CaseStudyCard key={study.id} study={study} index={index} />)}
          </div>
        </section>
      </main>
      <Footer className="max-w-[1180px]" />
    </div>
  );
}
