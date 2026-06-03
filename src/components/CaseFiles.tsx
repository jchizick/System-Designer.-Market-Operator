import { Link } from 'react-router-dom';

const homepageCaseFiles = [
  {
    id: 'MKT_CMD',
    title: 'Market Command',
    outcome: 'Private trading dashboard for market context, review, and execution readiness.',
    path: '/market-command-v2',
  },
  {
    id: 'SYN_FOUNDRY',
    title: 'Synthetic Foundry',
    outcome: 'AI-assisted brand system for faster strategy and execution.',
    path: '/ai-brand-machine-synthetic-foundry-v2',
  },
  {
    id: 'ALG_DASH',
    title: 'Algonquin Dashboard',
    outcome: 'Trip planning dashboard for routes, gear, meals, and readiness.',
    path: '/algonquin-dashboard-v2',
  },
  {
    id: 'BRAWLER_MIND',
    title: 'The Brawler Mind',
    outcome: 'Trading performance system for psychology, routines, and execution.',
    path: '/trading-journey-brawler-mind-v2',
  },
  {
    id: 'BRAWL_HQ',
    title: 'Blockchain Brawlers',
    outcome: 'Content, community, and education engine for crypto traders.',
    path: '/blockchain-brawlers-v2',
  },
];

export function CaseFiles() {
  return (
    <section id="case-files" className="mb-10 scroll-mt-24">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-mono-xs text-emerald-400 flex-shrink-0">002 // CASE STUDIES</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
        <a href="#" className="text-mono-xs text-emerald-500 hover:text-emerald-400 transition-colors tracking-[0.08em] flex items-center gap-1.5 flex-shrink-0">
          BROWSE ALL SYSTEMS
          <span className="text-[10px]">→</span>
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {homepageCaseFiles.map((c) => (
          <Link
            key={c.path}
            to={c.path}
            className="relative flex h-full min-h-[170px] min-w-0 flex-col gap-3 bg-emerald-500/[0.04] border border-emerald-500/10 p-4 group hover:border-emerald-500/25 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_-2px_rgba(16,185,129,0.1)] transition-all duration-300 ease-out cursor-pointer no-underline"
          >
            <span className="absolute right-4 top-4 h-2 w-2 bg-emerald-400/90 shadow-[0_0_6px_rgba(52,211,153,0.45)]" aria-hidden="true" />

            <div className="h-4 min-w-0 pr-5 text-mono-2xs">
              <span className="block truncate whitespace-nowrap text-text-primary font-medium">SYS: {c.id}</span>
            </div>

            <div className="min-w-0">
              <div className="text-body-base font-normal tracking-[-0.01em] text-text-primary">{c.title}</div>
            </div>

            <div className="text-mono-label text-white/60 leading-[1.4]">
              {c.outcome}
            </div>

            <div className="mt-auto text-mono-2xs text-emerald-400/80 transition-colors group-hover:text-emerald-300">
              VIEW CASE →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
