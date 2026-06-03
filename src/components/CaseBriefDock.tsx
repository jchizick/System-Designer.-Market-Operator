import React, { useEffect, useMemo, useState } from 'react';
import { ArrowDownToLine, Copy, X } from 'lucide-react';

interface CaseBriefDockProps {
  storageKey: string;
  eyebrow?: string;
  title: string;
  description: string;
  coverImage: string;
  coverAlt: string;
  pdfUrl: string;
  shareUrl: string;
  detailHref?: string;
  contactHref?: string;
}

export function CaseBriefDock({
  storageKey,
  eyebrow = 'Case Brief Available',
  title,
  description,
  coverImage,
  coverAlt,
  pdfUrl,
  shareUrl,
  detailHref = '#case-brief',
  contactHref = '#',
}: CaseBriefDockProps) {
  const [isPastThreshold, setIsPastThreshold] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle');

  const normalizedShareUrl = useMemo(() => {
    if (shareUrl.startsWith('http')) {
      return shareUrl;
    }

    if (typeof window === 'undefined') {
      return shareUrl;
    }

    return new URL(shareUrl, window.location.origin).toString();
  }, [shareUrl]);

  useEffect(() => {
    try {
      setIsDismissed(window.sessionStorage.getItem(storageKey) === 'dismissed');
    } catch {
      setIsDismissed(false);
    }
  }, [storageKey]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) {
        setIsPastThreshold(false);
        return;
      }

      setIsPastThreshold(window.scrollY / scrollableHeight >= 0.4);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (copyState !== 'copied') {
      return;
    }

    const timeoutId = window.setTimeout(() => setCopyState('idle'), 1600);
    return () => window.clearTimeout(timeoutId);
  }, [copyState]);

  const isVisible = isPastThreshold && !isDismissed;

  const handleDismiss = () => {
    setIsDismissed(true);
    try {
      window.sessionStorage.setItem(storageKey, 'dismissed');
    } catch {
      // The dock can still close if sessionStorage is blocked.
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(normalizedShareUrl);
      setCopyState('copied');
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = normalizedShareUrl;
      textArea.setAttribute('readonly', '');
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();

      const didCopy = document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopyState(didCopy ? 'copied' : 'idle');
    }
  };

  return (
    <aside
      aria-label="Case brief download"
      className={`fixed bottom-5 right-5 z-[80] hidden w-[292px] border border-emerald-500/35 bg-black/88 p-4 font-mono shadow-[0_0_28px_rgba(16,185,129,0.16)] backdrop-blur-md transition duration-300 ease-out md:block ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 border border-emerald-300/10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,185,129,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.18) 1px, transparent 1px)',
          backgroundSize: '12px 12px',
        }}
      />

      <div className="relative">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-mono-xs uppercase tracking-widest text-emerald-400">{eyebrow}</p>
          <button
            type="button"
            onClick={handleDismiss}
            className="flex h-7 w-7 shrink-0 items-center justify-center border border-emerald-500/30 bg-black/55 text-white/60 transition-colors hover:border-emerald-400/60 hover:text-emerald-300"
            aria-label="Close case brief dock"
          >
            <X className="h-3.5 w-3.5" strokeWidth={1.8} />
          </button>
        </div>

        <a href={detailHref} className="group block border border-emerald-500/25 bg-emerald-500/5 p-1">
          <img
            src={coverImage}
            alt={coverAlt}
            className="aspect-[1.58] w-full object-cover opacity-88 transition-opacity group-hover:opacity-100"
            loading="lazy"
          />
        </a>

        <h2 className="mt-5 text-[20px] uppercase leading-tight tracking-[0] text-white">
          {title}
        </h2>
        <p className="mt-3 max-w-[24ch] text-mono-sm leading-relaxed text-white/72">
          {description}
        </p>

        <a
          href={pdfUrl}
          download
          className="mt-5 flex h-11 w-full items-center justify-center gap-3 border border-emerald-400/40 bg-emerald-500 px-4 text-mono-xs font-semibold uppercase tracking-widest text-black transition-colors hover:bg-emerald-300"
        >
          <span>Download Brief</span>
          <ArrowDownToLine className="h-4 w-4" strokeWidth={1.9} />
        </a>

        <a
          href={detailHref}
          className="mt-3 flex h-9 w-full items-center justify-center border border-emerald-500/25 bg-black/35 px-4 text-mono-xs font-semibold uppercase tracking-widest text-white/86 transition-colors hover:border-emerald-400/55 hover:bg-emerald-500/8 hover:text-emerald-300"
        >
          View Details
        </a>

        <div className="mt-5 flex items-center justify-center gap-3 text-mono-xs font-semibold uppercase tracking-widest text-white/78">
          <a href={contactHref} className="transition-colors hover:text-emerald-300">
            Contact
          </a>
          <span className="text-white/35">.</span>
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 transition-colors hover:text-emerald-300"
          >
            <span>{copyState === 'copied' ? 'Copied' : 'Copy Link'}</span>
            {copyState !== 'copied' && <Copy className="h-3 w-3" strokeWidth={1.8} />}
          </button>
        </div>
      </div>
    </aside>
  );
}
