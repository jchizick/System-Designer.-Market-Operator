import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';

// ── Phase 1: Fake data ─────────────────────────────────────────────────────
interface TickerItem {
  symbol: string;
  price: number;
  change: number; // percent
  sparkline: number[];
}

const SEED_TICKERS: TickerItem[] = [
  { symbol: 'BTC/USD',  price: 84_312.45, change:  1.87, sparkline: [] },
  { symbol: 'ETH/USD',  price:  3_218.70, change: -0.42, sparkline: [] },
  { symbol: 'SOL/USD',  price:   148.93,  change:  3.21, sparkline: [] },
  { symbol: 'AAPL',     price:   198.52,  change:  0.64, sparkline: [] },
  { symbol: 'NVDA',     price:   875.30,  change:  2.15, sparkline: [] },
  { symbol: 'TSLA',     price:   172.88,  change: -1.33, sparkline: [] },
  { symbol: 'SPY',      price:   512.41,  change:  0.38, sparkline: [] },
  { symbol: 'XAU/USD',  price: 2_342.10,  change:  0.92, sparkline: [] },
  { symbol: 'EUR/USD',  price:     1.0872,change: -0.11, sparkline: [] },
  { symbol: 'DOGE/USD', price:     0.1623,change:  5.44, sparkline: [] },
  { symbol: 'AVAX/USD', price:    36.72,  change: -2.08, sparkline: [] },
  { symbol: 'LINK/USD', price:    14.88,  change:  1.55, sparkline: [] },
];

const ROW_HEIGHT = 42; // px — fixed row height
const VISIBLE_ROWS = 6;
const STEP_INTERVAL_MS = 3000; // scroll one row every 3s
const FOCUS_POSITION = 1; // which visible row (0-indexed) is the "focused" one

function generateSparkline(base: number, len = 20): number[] {
  const pts: number[] = [base];
  for (let i = 1; i < len; i++) {
    const delta = (Math.random() - 0.48) * base * 0.008;
    pts.push(pts[i - 1] + delta);
  }
  return pts;
}

function jitterPrice(price: number): number {
  return price + (Math.random() - 0.48) * price * 0.002;
}

// ── Micro sparkline SVG ────────────────────────────────────────────────────
function MicroChart({
  data,
  positive,
  focused,
}: {
  data: number[];
  positive: boolean;
  focused?: boolean;
}) {
  if (data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = focused ? 80 : 64;
  const h = focused ? 34 : 28;
  const step = w / (data.length - 1);

  const points = data
    .map((v, i) => `${i * step},${h - ((v - min) / range) * h}`)
    .join(' ');

  // Unique gradient IDs to avoid SVG conflicts across rows
  const uid = useMemo(() => Math.random().toString(36).slice(2, 8), []);
  const gradId = `spark_${uid}`;

  const strokeColor = positive
    ? focused ? '#00c46e' : '#10b981'
    : focused ? '#c44040' : '#6b2020';
  const fillStart = positive
    ? focused ? 'rgba(0,196,110,0.35)' : 'rgba(16,185,129,0.25)'
    : focused ? 'rgba(196,64,64,0.35)' : 'rgba(107,32,32,0.25)';
  const fillEnd = 'rgba(0,0,0,0)';

  const areaPoints = `0,${h} ${points} ${w},${h}`;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="flex-shrink-0">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fillStart} />
          <stop offset="100%" stopColor={fillEnd} />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#${gradId})`} />
      <polyline
        points={points}
        fill="none"
        stroke={strokeColor}
        strokeWidth={focused ? 2 : 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Single row ─────────────────────────────────────────────────────────────
const TickerRow = React.memo(function TickerRow({ item, focused }: { item: TickerItem; focused: boolean }) {
  const positive = item.change >= 0;

  const formattedPrice = useMemo(() => {
    if (item.price >= 1000) return item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (item.price >= 1) return item.price.toFixed(2);
    return item.price.toFixed(4);
  }, [item.price]);

  return (
    <div
      className={`flex items-center gap-3 px-3 border-b border-border-subtle transition-all duration-700 ease-out ${
        focused
          ? 'bg-[rgba(16,185,129,0.08)]'
          : 'bg-transparent'
      }`}
      style={{
        height: ROW_HEIGHT,
        ...(focused ? {
          boxShadow: 'inset 2px 0 0 0 #10b981, 0 0 20px rgba(16,185,129,0.06)',
        } : {}),
      }}
    >
      {/* Symbol */}
      <span
        className={`font-mono tracking-[0.08em] flex-shrink-0 uppercase transition-all duration-700 ease-out ${
          focused
            ? 'text-mono-sm text-emerald-500 w-[76px]'
            : 'text-mono-label text-text-primary w-[72px] opacity-50'
        }`}
      >
        {item.symbol}
      </span>

      {/* Sparkline */}
      <MicroChart data={item.sparkline} positive={positive} focused={focused} />

      {/* Price */}
      <span
        className={`font-mono ml-auto tabular-nums transition-all duration-700 ease-out ${
          focused
            ? 'text-mono-sm text-text-primary'
            : 'text-mono-sm text-text-primary opacity-50'
        }`}
      >
        {formattedPrice}
      </span>

      {/* % Change */}
      <span
        className={`font-mono text-right tabular-nums flex-shrink-0 transition-all duration-700 ease-out ${
          focused ? 'text-mono-sm w-[60px]' : 'text-mono-label w-[56px] opacity-60'
        } ${positive ? 'text-emerald-500' : 'text-[#8b3a3a]'}`}
      >
        {positive ? '+' : ''}{item.change.toFixed(2)}%
      </span>

      {/* Focus indicator dot */}
      <span
        className={`w-1 h-1 flex-shrink-0 ml-1 transition-all duration-700 ${
          focused ? 'bg-emerald-500 opacity-100 animate-pulse' : 'bg-transparent opacity-0'
        }`}
      />
    </div>
  );
});

// ── Main step-scrolling ticker ─────────────────────────────────────────────
export function StockTicker() {
  const [tickers, setTickers] = useState<TickerItem[]>(() =>
    SEED_TICKERS.map(t => ({ ...t, sparkline: generateSparkline(t.price) }))
  );

  // step = how many rows we've scrolled past from the top
  const [step, setStep] = useState(0);
  // controls whether translateY animates or jumps instantly (for reset)
  const [animate, setAnimate] = useState(true);
  const totalItems = SEED_TICKERS.length;

  // The focused asset is whichever one sits at FOCUS_POSITION in the viewport
  const focusedSymbol = useMemo(() => {
    const idx = (step + FOCUS_POSITION) % totalItems;
    return tickers[idx]?.symbol;
  }, [step, tickers, totalItems]);

  // Step forward one row every STEP_INTERVAL_MS
  useEffect(() => {
    const iv = setInterval(() => {
      setStep(prev => prev + 1);
      setAnimate(true);
    }, STEP_INTERVAL_MS);
    return () => clearInterval(iv);
  }, []);

  // When we've scrolled a full set, instantly reset to 0 (no visible jump
  // because the duplicated list makes both positions look identical)
  useEffect(() => {
    if (step >= totalItems) {
      // Let the transition finish (700ms), then snap back
      const t = setTimeout(() => {
        setAnimate(false); // disable transition for the reset
        setStep(prev => prev - totalItems);
        // Re-enable transition on next frame
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setAnimate(true));
        });
      }, 750);
      return () => clearTimeout(t);
    }
  }, [step, totalItems]);

  // Live-ish price jitter every 1.5s
  useEffect(() => {
    const iv = setInterval(() => {
      setTickers(prev =>
        prev.map(t => {
          const seed = SEED_TICKERS.find(s => s.symbol === t.symbol)!;
          const newPrice = jitterPrice(t.price);
          const pctFromBase = ((newPrice - seed.price) / seed.price) * 100;
          const newSparkline = [...t.sparkline.slice(1), newPrice];
          return { ...t, price: newPrice, change: parseFloat(pctFromBase.toFixed(2)), sparkline: newSparkline };
        })
      );
    }, 1500);
    return () => clearInterval(iv);
  }, []);

  // Build the rendered list: original + full duplicate for seamless wrap
  const renderList = useMemo(() => [...tickers, ...tickers], [tickers]);

  const translateY = -(step * ROW_HEIGHT);

  return (
    <div className="relative flex flex-col h-full max-h-[280px] w-full border border-border-subtle bg-bg-surface overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-border-subtle bg-[rgba(255,255,255,0.02)] flex-shrink-0 z-20">
        <span className="text-mono-xs text-text-secondary uppercase">
          Live Feed
        </span>
        <div className="flex items-center gap-2">
          <span
            className="text-mono-2xs text-emerald-500 uppercase opacity-60 transition-all duration-500"
            key={focusedSymbol} // force re-mount for fade-in
          >
            {focusedSymbol}
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
        </div>
      </div>

      {/* Step-scrolling area */}
      <div
        className="flex-1 overflow-hidden"
        style={{ height: VISIBLE_ROWS * ROW_HEIGHT }}
      >
        <div
          style={{
            transform: `translateY(${translateY}px)`,
            transition: animate ? 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
            willChange: 'transform',
          }}
        >
          {renderList.map((item, i) => (
            <TickerRow
              key={`${item.symbol}-${i}`}
              item={item}
              focused={item.symbol === focusedSymbol}
            />
          ))}
        </div>
      </div>

      {/* Top / bottom gradient masks */}
      <div className="pointer-events-none absolute top-[33px] left-0 right-0 h-8 bg-gradient-to-b from-bg-surface to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-bg-surface to-transparent z-10" />
    </div>
  );
}
