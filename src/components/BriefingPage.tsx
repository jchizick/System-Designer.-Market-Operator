import React from 'react';
import { CalendarDays, Check, CheckCircle2, Copy, LockKeyhole, MonitorPlay, ShieldCheck } from 'lucide-react';
import { Footer } from './Footer';
import { TopBar } from './TopBar';
import { CalBriefingEmbed } from './CalBriefingEmbed';

const bestForItems = [
  'AI workflow opportunities',
  'Internal tools',
  'Product systems',
  'Operational interfaces',
  'Case-file follow-up',
];

const formatItems = [
  '25 minute video call',
  'Cal Video',
  'No prep required',
];

const calendarLink = 'chizick/schedule-briefing';

function ScopeList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="mb-3 text-mono-xs font-semibold uppercase tracking-[0.14em] text-emerald-400">
        {label}
      </div>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-3 font-mono text-[13px] leading-snug text-white/62">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-300/80" strokeWidth={1.8} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BriefingScopePanel() {
  return (
    <aside className="relative min-w-0 border border-emerald-500/18 bg-black/24 p-5 shadow-[inset_0_0_32px_rgba(16,185,129,0.025)] sm:p-6">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(52,211,153,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.16)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between gap-4 border-b border-emerald-500/14 pb-4">
          <div className="flex min-w-0 items-center gap-3">
            <ShieldCheck className="h-4.5 w-4.5 shrink-0 text-emerald-300" strokeWidth={1.5} />
            <h2 className="text-mono-sm font-semibold uppercase tracking-[0.12em] text-emerald-300">
              Briefing Scope
            </h2>
          </div>
          <span className="h-1.5 w-1.5 shrink-0 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />
        </div>

        <div className="space-y-7">
          <ScopeList label="Best For" items={bestForItems} />
          <div className="border-t border-dashed border-emerald-500/16 pt-6">
            <ScopeList label="Format" items={formatItems} />
          </div>
        </div>

        <div className="mt-7 grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 border border-emerald-500/16 bg-emerald-500/[0.025] p-3">
          <MonitorPlay className="h-5 w-5 text-emerald-300/80" strokeWidth={1.5} />
          <p className="font-mono text-[12px] leading-relaxed text-white/54">
            Secure scheduling channel. Select an available slot and Cal.com will handle the invite.
          </p>
        </div>
      </div>
    </aside>
  );
}

function CalendarLinkPanel() {
  const [copyState, setCopyState] = React.useState<'idle' | 'copied'>('idle');

  const copyCalendarLink = async () => {
    await navigator.clipboard.writeText(calendarLink);
    setCopyState('copied');
    window.setTimeout(() => setCopyState('idle'), 1800);
  };

  return (
    <div className="hidden border border-emerald-500/16 bg-black/24 p-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/48 lg:block">
      <div className="mb-3 flex items-center gap-2 text-emerald-400">
        <CalendarDays className="h-4 w-4" strokeWidth={1.6} />
        <span>Calendar Link</span>
      </div>
      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_2rem] items-center gap-2">
        <div className="min-w-0 whitespace-nowrap text-white/64">{calendarLink}</div>
        <button
          type="button"
          onClick={copyCalendarLink}
          className="inline-flex h-8 w-8 items-center justify-center border border-emerald-500/22 bg-emerald-500/[0.025] text-emerald-300 transition-colors hover:border-emerald-400/55 hover:bg-emerald-500/[0.08] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-emerald-400/70"
          aria-label="Copy calendar link"
        >
          {copyState === 'copied' ? <Check className="h-4 w-4" strokeWidth={1.8} /> : <Copy className="h-4 w-4" strokeWidth={1.8} />}
        </button>
      </div>
      <div className="mt-0 h-0 text-mono-2xs text-emerald-300/70">
        {copyState === 'copied' ? 'COPIED TO CLIPBOARD' : ''}
      </div>
    </div>
  );
}

export function BriefingPage() {
  return (
    <div className="relative flex min-h-screen max-w-full flex-col overflow-x-hidden p-4 sm:p-6">
      <TopBar className="max-w-[1180px]" />

      <main className="mx-auto flex w-full max-w-[1180px] flex-grow flex-col min-w-0">
        <section className="relative mb-8 overflow-hidden border border-emerald-500/12 bg-emerald-500/[0.012] px-5 py-7 sm:px-7 sm:py-8">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/28 to-transparent" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-3 text-mono-xs font-semibold uppercase tracking-[0.14em] text-emerald-400">
                <LockKeyhole className="h-3.5 w-3.5" strokeWidth={1.6} />
                <span>Secure Scheduling Interface</span>
              </div>
              <h1 className="font-space-grotesk text-[42px] font-medium uppercase leading-[1.02] tracking-[0] text-text-primary sm:text-[56px] lg:text-[64px]">
                Schedule Briefing
              </h1>
              <p className="mt-6 max-w-[760px] font-mono text-[14px] leading-[1.7] tracking-[0.03em] text-white/66 sm:text-[15px]">
                A short operator briefing to discuss your project, workflow, or system opportunity. We’ll map the current situation, identify the friction points, and determine whether there’s a useful way to work together.
              </p>
            </div>

            <CalendarLinkPanel />
          </div>
        </section>

        <section className="mb-10 grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[320px_minmax(0,1fr)]">
          <BriefingScopePanel />

          <section className="relative min-w-0 overflow-hidden border border-emerald-500/28 bg-black/28 shadow-[0_0_30px_rgba(16,185,129,0.045),inset_0_0_32px_rgba(16,185,129,0.025)]">
            <div className="flex min-h-12 items-center justify-between gap-4 border-b border-emerald-500/18 px-4 sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <CalendarDays className="h-4.5 w-4.5 shrink-0 text-emerald-300" strokeWidth={1.5} />
                <h2 className="truncate text-mono-sm font-semibold uppercase tracking-[0.12em] text-emerald-300">
                  Cal.com // Schedule Briefing
                </h2>
              </div>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-white/34 sm:block">
                Dark Interface
              </span>
            </div>
            <div className="relative min-h-[700px] w-full overflow-hidden lg:min-h-[760px]">
              <CalBriefingEmbed />
            </div>
          </section>
        </section>
      </main>

      <Footer className="max-w-[1180px]" />
    </div>
  );
}
