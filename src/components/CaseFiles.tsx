import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const homepageCaseFiles = caseStudies.slice(0, 5);

export function CaseFiles() {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-mono-xs text-emerald-400 flex-shrink-0">002 // CASE FILES</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
        <a href="#" className="text-mono-xs text-emerald-500 hover:text-emerald-400 transition-colors tracking-[0.08em] flex items-center gap-1.5 flex-shrink-0">
          BROWSE ALL SYSTEMS
          <span className="text-[10px]">→</span>
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {homepageCaseFiles.map((c) => (
          <Link
            key={c.slug}
            to={`/case/${c.slug}`}
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
