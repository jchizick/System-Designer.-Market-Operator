import React, { useEffect, useId, useState } from 'react';
import { Grid2X2, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

type TopBarProps = {
  className?: string;
};

const navItems = [
  { label: 'HOME', href: '/', match: (pathname: string, hash: string) => pathname === '/' && hash !== '#case-files' },
  { label: 'WORK', href: '/#case-files', match: (_pathname: string, hash: string) => hash === '#case-files' },
  { label: 'SYSTEMS', href: '/services', match: (pathname: string) => pathname === '/services' },
  { label: 'ABOUT', href: '/about', match: (pathname: string) => pathname === '/about' },
  { label: 'CONTACT', href: '/contact', match: (pathname: string) => pathname === '/contact' },
];

function StatusItem({ label, value, live = false }: { label: string; value: string; live?: boolean }) {
  return (
    <div className="flex items-center whitespace-nowrap">
      <span className="mr-1 text-emerald-400">{label}:</span>
      <span className="text-white/50">{value}</span>
      {live ? <span className="ml-2 h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.55)]" /> : null}
    </div>
  );
}

function FDMark() {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-emerald-500/50 bg-emerald-500/[0.035] font-mono text-[16px] font-medium tracking-[-0.04em] text-emerald-400 shadow-[inset_0_0_14px_rgba(16,185,129,0.035)] sm:h-10 sm:w-10 sm:text-[18px]">
      JC
    </div>
  );
}

export function TopBar({ className = 'max-w-5xl' }: TopBarProps) {
  const [time, setTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const location = useLocation();
  const { pathname, hash } = location;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().split('T')[1].substring(0, 8) + 'Z');
    };

    updateTime();
    const interval = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, hash]);

  const isActive = (item: (typeof navItems)[number]) => item.match(pathname, hash);

  return (
    <header className={`mb-6 w-full ${className} mx-auto text-mono-xs uppercase text-text-secondary`}>
      <div className="hidden items-center justify-between gap-4 border-b border-border-subtle pb-3 lg:flex">
        <div className="flex min-w-0 flex-wrap items-center gap-x-9 gap-y-1.5">
          <StatusItem label="OPERATOR" value="FORWARD_DEPLOYED" />
          <StatusItem label="STATUS" value="ONLINE" />
          <StatusItem label="SYSTEM" value="PORTFOLIO_V2" />
          <StatusItem label="LINK" value="SECURE" live />
        </div>
        <div className="flex shrink-0 items-center gap-6 text-white/45">
          <span>SYS.TIME: {time}</span>
          <span>ACCESS_LEVEL: 04</span>
        </div>
      </div>

      <nav
        className="relative border border-emerald-500/18 bg-black/16 px-3 py-3 shadow-[inset_0_0_24px_rgba(16,185,129,0.018)] sm:px-4 lg:mt-0 lg:py-2"
        aria-label="Primary navigation"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/22 to-transparent" />

        <div className="flex min-w-0 items-center justify-between gap-4">
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3 transition-colors hover:text-emerald-400"
            aria-label="Forward-Deployed terminal home"
          >
            <FDMark />
            <div className="min-w-0 font-mono text-[10px] font-semibold uppercase leading-tight tracking-[0.08em] text-white/68 transition-colors group-hover:text-emerald-300 sm:text-[12px]">
              <div>JORDAN CHIZICK</div>
              <div>DESIGN ENGINEER</div>
            </div>
          </Link>

          <div className="hidden items-center justify-center gap-10 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item);

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative px-1 py-2 font-mono text-[11px] font-medium tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-emerald-400/70 ${
                    active ? 'text-emerald-400' : 'text-white/48 hover:text-white/78'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.55)]" />
                  ) : null}
                </Link>
              );
            })}
          </div>

          <Link
            to="/#case-files"
            className="hidden min-h-10 shrink-0 items-center justify-center gap-3 border border-emerald-500/34 bg-emerald-500/[0.025] px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-400 transition-colors hover:border-emerald-400/55 hover:bg-emerald-500/[0.055] hover:text-emerald-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-emerald-400/70 lg:inline-flex"
          >
            <Grid2X2 className="h-4 w-4" strokeWidth={1.8} />
            <span>ACCESS CASE FILES</span>
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-emerald-500/26 bg-emerald-500/[0.025] text-emerald-400 transition-colors hover:border-emerald-400/55 hover:text-emerald-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-emerald-400/70 lg:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls={menuId}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-4.5 w-4.5" strokeWidth={1.7} /> : <Menu className="h-4.5 w-4.5" strokeWidth={1.7} />}
          </button>
        </div>

        <div
          id={menuId}
          className={`mt-3 border-t border-emerald-500/14 pt-3 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="mb-3 flex items-center justify-between gap-3 border border-emerald-500/12 bg-black/22 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.08em] text-white/45">
            <span>
              <span className="text-emerald-400">STATUS:</span> ONLINE
            </span>
            <span>ACCESS_LEVEL_04</span>
          </div>

          <div className="grid gap-1.5">
            {[...navItems, { label: 'ACCESS CASE FILES', href: '/#case-files', match: (_pathname: string, activeHash: string) => activeHash === '#case-files' }].map((item) => {
              const active = isActive(item);

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex min-h-10 items-center justify-between border border-transparent px-3 font-mono text-[11px] font-medium uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-emerald-400/70 ${
                    active
                      ? 'border-emerald-500/24 bg-emerald-500/[0.035] text-emerald-400'
                      : 'text-white/58 hover:border-emerald-500/18 hover:bg-emerald-500/[0.025] hover:text-white/82'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {active ? <span className="h-1.5 w-1.5 bg-emerald-400" /> : null}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
