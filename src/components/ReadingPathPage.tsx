import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  Eye,
  Brain,
  Users,
  Megaphone,
  TrendingUp,
  Swords,
  Cog,
  Network,
  Compass,
  Sparkles,
} from 'lucide-react';
import { TopBar } from './TopBar';
import { Footer } from './Footer';
import readingPathDataFlow from '../assets/Futuristic sci-fi control center design.png';

/* ─── Animated section wrapper (same pattern from AboutPage) ─── */
function RevealSection({
  children,
  className = '',
  delay = 0,
}: {
  key?: React.Key;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
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
   STAGE DATA
   ═══════════════════════════════════════════════════════════════ */
interface Stage {
  number: string;
  emoji: string;
  title: string;
  goal: string;
  description: string;
  books: Book[];
  outcome: string;
  icon: React.ElementType;
}

interface Book {
  id: string;
  title: string;
  image?: string;
}

const bookImageModules = import.meta.glob<string>('../assets/book-images/*', {
  eager: true,
  import: 'default',
});

const bookImageByFileName = Object.fromEntries(
  Object.entries(bookImageModules).map(([path, image]) => [
    path.split('/').pop() ?? '',
    image,
  ])
) as Record<string, string>;

const bookImageFileByTitle: Record<string, string> = {
  'Thinking, Fast and Slow': 'thinking-fast-and-slow.jpg',
  'Predictably Irrational': 'predictably-irrational.jpg',
  'The Organized Mind': 'the-organized-mind.jpg',
  'The Great Mental Models': 'the-great-mental-models.webp',
  'The Pyramid Principle': 'the-pyramid-principle.jpeg',
  Ultralearning: 'ultralearning.jpg',
  Range: 'range.jpg',
  'The Art of Learning': 'the-art-of-learning.jpg',
  'Mind Map Mastery': 'mind-map-mastery.jpg',
  'Lateral Thinking': 'lateral-thinking.jpg',
  'How Emotions Are Made': 'how-emotions-are-made.webp',
  'Games People Play': 'games-people-play.jpg',
  'A Theory of Human Motivation': 'a-theory-of-human-motivation.jpg',
  'Symbolic Interactionism': 'symbolic-interactionism.jpg',
  'The Righteous Mind': 'the-righteous-mind.jpg',
  'Influence: The Psychology of Persuasion':
    'influence-the-psychology-of-persuasion.jpg',
  Contagious: 'contagious.jpg',
  Alchemy: 'alchemy.jpg',
  'Breakthrough Advertising': 'breakthrough-advertising.jpg',
  Propaganda: 'propaganda.jpg',
  'Basic Economics': 'basic-economics.jpg',
  'The Wealth of Nations': 'the-wealth-of-nations.jpg',
  'The Psychology of Money': 'the-psychology-of-money.jpg',
  'The Black Swan': 'the-black-swan.jpg',
  Antifragile: 'antifragile.jpg',
  'The Art of War': 'the-art-of-war.jpg',
  'The Prince': 'the-prince.jpg',
  'The 48 Laws of Power': 'the-48-laws-of-power.jpg',
  'Playing to Win': 'playing-to-win.jpg',
  Positioning: 'positioning.jpg',
  'The Effective Executive': 'the-effective-executive.webp',
  'High Output Management': 'high-output-managment.jpg',
  'The Personal MBA': 'the-personal-mba.jpg',
  'Zero to One': 'zero-to-one.jpg',
  'The Hard Thing About Hard Things': 'the-hard-thing-about-hard-things.jpg',
  Scale: 'scale.jpg',
  'The Misbehavior of Markets': 'the-misbehavior-of-markets.jpg',
  Superintelligence: 'superintelligence.jpg',
  'A Brief History of Time': 'a-brief-history-of-time.jpg',
  'Steps to an Ecology of Mind': 'steps-to-an-ecology-of-mind.jpg',
  Meditations: 'meditations.jpg',
  "Man's Search for Meaning": 'mans-search-for-meaning.jpg',
  'The Republic': 'the-republic.jpg',
  'Being and Time': 'being-and-time.jpg',
  'The Lessons of History': 'the-lessons-of-history.jpg',
  'The Hero with a Thousand Faces': 'the-hero-with-a-thousand-faces.webp',
  'The Power of Myth': 'the-power-of-myth.jpg',
  'The Art of Memory': 'the-art-of-memory.jpg',
  'The Kybalion': 'the-kybalion.jpg',
};

function slugifyBookTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function createBook(title: string): Book {
  const imageFileName = bookImageFileByTitle[title];

  return {
    id: slugifyBookTitle(title),
    title,
    image: imageFileName ? bookImageByFileName[imageFileName] : undefined,
  };
}

const stages: Stage[] = [
  {
    number: '01',
    emoji: '🧠',
    title: 'PERCEPTION CONTROL',
    goal: 'See Clearly',
    description:
      'Stop being fooled—by others or yourself.\nStart here or everything else gets distorted.',
    books: [
      'Thinking, Fast and Slow',
      'Predictably Irrational',
      'The Organized Mind',
      'The Great Mental Models',
      'The Pyramid Principle',
    ].map(createBook),
    outcome:
      'You start noticing bias, noise, bad thinking—including your own.',
    icon: Eye,
  },
  {
    number: '02',
    emoji: '🧠',
    title: 'THINKING & LEARNING SYSTEMS',
    goal: 'Upgrade How You Learn',
    description:
      'Upgrade how you learn, decide, and adapt.',
    books: [
      'Ultralearning',
      'Range',
      'The Art of Learning',
      'Mind Map Mastery',
      'Lateral Thinking',
    ].map(createBook),
    outcome:
      'You stop consuming passively and start training your brain deliberately.',
    icon: Brain,
  },
  {
    number: '03',
    emoji: '🧠',
    title: 'HUMAN NATURE & PSYCHOLOGY',
    goal: 'Understand People',
    description:
      'Understand what actually drives people.',
    books: [
      'How Emotions Are Made',
      'Games People Play',
      'A Theory of Human Motivation',
      'Symbolic Interactionism',
      'The Righteous Mind',
    ].map(createBook),
    outcome: 'You see behavior as patterns, not personalities.',
    icon: Users,
  },
  {
    number: '04',
    emoji: '🧠',
    title: 'INFLUENCE & PERSUASION',
    goal: 'Shape Minds at Scale',
    description:
      'Understand how minds are shaped at scale.',
    books: [
      'Influence: The Psychology of Persuasion',
      'Contagious',
      'Alchemy',
      'Breakthrough Advertising',
      'Propaganda',
    ].map(createBook),
    outcome:
      'You start recognizing—and using—attention, emotion, and narrative as tools.',
    icon: Megaphone,
  },
  {
    number: '05',
    emoji: '🧠',
    title: 'MARKETS, ECONOMICS & REALITY INCENTIVES',
    goal: 'Follow the Money',
    description:
      'Understand how the world actually moves (money, risk, incentives).',
    books: [
      'Basic Economics',
      'The Wealth of Nations',
      'The Psychology of Money',
      'The Black Swan',
      'Antifragile',
    ].map(createBook),
    outcome:
      'You stop thinking in opinions and start thinking in incentives and probabilities.',
    icon: TrendingUp,
  },
  {
    number: '06',
    emoji: '🧠',
    title: 'STRATEGY, POWER & COMPETITION',
    goal: 'Navigate Power',
    description:
      'Navigate conflict, hierarchy, and long-term positioning.',
    books: [
      'The Art of War',
      'The Prince',
      'The 48 Laws of Power',
      'Playing to Win',
      'Positioning',
    ].map(createBook),
    outcome: 'You start thinking in moves, not reactions.',
    icon: Swords,
  },
  {
    number: '07',
    emoji: '🧠',
    title: 'BUSINESS, EXECUTION & LEVERAGE',
    goal: 'Turn Thinking Into Results',
    description:
      'Turn thinking into real-world results.',
    books: [
      'The Effective Executive',
      'High Output Management',
      'The Personal MBA',
      'Zero to One',
      'The Hard Thing About Hard Things',
    ].map(createBook),
    outcome:
      'You build systems that produce results, not just ideas.',
    icon: Cog,
  },
  {
    number: '08',
    emoji: '🧠',
    title: 'SYSTEMS, COMPLEXITY & REALITY MODELS',
    goal: 'See Hidden Structure',
    description:
      'See the hidden structure behind everything.',
    books: [
      'Scale',
      'The Misbehavior of Markets',
      'Superintelligence',
      'A Brief History of Time',
      'Steps to an Ecology of Mind',
    ].map(createBook),
    outcome:
      'You start seeing patterns across domains (biology, markets, tech, society).',
    icon: Network,
  },
  {
    number: '09',
    emoji: '🧠',
    title: 'MEANING, PHILOSOPHY & SELF-DIRECTION',
    goal: 'Choose Your Purpose',
    description:
      'Decide what all of this is for.',
    books: [
      'Meditations',
      "Man's Search for Meaning",
      'The Republic',
      'Being and Time',
      'The Lessons of History',
    ].map(createBook),
    outcome:
      'You develop a personal philosophy instead of borrowed beliefs.',
    icon: Compass,
  },
  {
    number: '10',
    emoji: '🧠',
    title: 'MYTH, SYMBOLISM & DEEP PATTERN RECOGNITION',
    goal: 'Master Narrative',
    description:
      'Understand narrative at the deepest level (culture, identity, story).',
    books: [
      'The Hero with a Thousand Faces',
      'The Power of Myth',
      'The Art of Memory',
      'The Kybalion',
    ].map(createBook),
    outcome:
      'You see how stories shape reality—and how to create them.',
    icon: Sparkles,
  },
];

/* Progression keywords displayed in the hero */
const progressionKeywords = [
  'Stop being fooled',
  'Learn how to think',
  'Understand people',
  'Learn influence',
  'Understand incentives',
  'Play strategy',
  'Execute in reality',
  'See systems',
  'Choose meaning',
  'Master narrative',
];

/* ═══════════════════════════════════════════════════════════════
   STAGE CARD
   ═══════════════════════════════════════════════════════════════ */
function BookCoverRail({
  books,
  activeBookId,
  onActiveBookChange,
}: {
  books: Book[];
  activeBookId: string | null;
  onActiveBookChange: (bookId: string | null) => void;
}) {
  const coverBooks = books.filter((book) => book.image).slice(0, 5);

  if (coverBooks.length === 0) {
    return null;
  }

  const displayedActiveBookId = activeBookId ?? coverBooks[0].id;

  return (
    <aside
      className="relative border border-emerald-500/10 bg-black/20 p-3 shadow-[inset_0_0_24px_rgba(16,185,129,0.025)] sm:p-4"
      onMouseLeave={() => onActiveBookChange(null)}
      aria-label="Book cover previews"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-mono-xs text-emerald-400/55">FIELD TEXTS</span>
        <span className="h-px flex-1 bg-emerald-500/10" />
        <span className="font-mono text-[10px] text-text-secondary/35">
          {coverBooks.length.toString().padStart(2, '0')}
        </span>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto pb-1 sm:gap-4">
        {coverBooks.map((book) => {
          const isActive = displayedActiveBookId === book.id;

          return (
            <button
              key={book.id}
              type="button"
              className={[
                'relative aspect-[2/3] h-32 w-[86px] flex-[0_0_auto] overflow-hidden border bg-bg-surface/80 text-left shadow-[0_10px_28px_-16px_rgba(0,229,168,0.45)] outline-none transition-[transform,opacity,border-color,box-shadow] duration-300 motion-reduce:transition-none sm:h-36 sm:w-24 lg:h-[162px] lg:w-[108px]',
                isActive
                  ? 'z-10 -translate-y-1 scale-[1.025] border-emerald-400/45 opacity-100 shadow-[0_0_0_1px_rgba(0,229,168,0.08),0_16px_32px_-18px_rgba(0,229,168,0.8)]'
                  : 'border-[rgba(0,229,168,0.18)] opacity-60 hover:opacity-90',
              ].join(' ')}
              onMouseEnter={() => onActiveBookChange(book.id)}
              onMouseMove={() => onActiveBookChange(book.id)}
              onPointerEnter={() => onActiveBookChange(book.id)}
              onPointerMove={() => onActiveBookChange(book.id)}
              onFocus={() => onActiveBookChange(book.id)}
              onBlur={() => onActiveBookChange(null)}
              aria-label={`Highlight ${book.title}`}
            >
              <img
                src={book.image}
                alt={`${book.title} cover`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_58%,rgba(0,0,0,0.62)_100%)]" />
              <span className="pointer-events-none absolute left-1.5 top-1.5 h-2 w-2 border-l border-t border-emerald-300/35" />
              <span className="pointer-events-none absolute bottom-1.5 right-1.5 h-2 w-2 border-b border-r border-emerald-300/35" />
            </button>
          );
        })}
      </div>
    </aside>
  );
}

function StageCard({ stage, index }: { key?: React.Key; stage: Stage; index: number }) {
  const Icon = stage.icon;
  const [activeBookId, setActiveBookId] = useState<string | null>(null);
  const hasCoverImages = stage.books.some((book) => book.image);

  return (
    <RevealSection delay={index * 0.06} className="w-full">
      <div
        className="relative border border-border-subtle bg-bg-surface/60 overflow-hidden group transition-all duration-500 hover:border-emerald-500/20"
        style={{
          boxShadow: 'inset 0 1px 0 0 rgba(16,185,129,0.04)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            '0 12px 32px -8px rgba(16,185,129,0.10), inset 0 1px 0 0 rgba(16,185,129,0.08)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            'inset 0 1px 0 0 rgba(16,185,129,0.04)';
        }}
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-emerald-500/20 z-10" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-emerald-500/20 z-10" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-emerald-500/20 z-10" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-emerald-500/20 z-10" />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent group-hover:via-emerald-500/30 transition-all duration-500" />

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-emerald-500/20 bg-emerald-500/5">
              <Icon className="w-6 h-6 text-emerald-400/70" />
            </div>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <span className="text-mono-xs text-emerald-400">
                  STAGE {stage.number}
                </span>
                <span className="text-mono-xs text-text-secondary/30">—</span>
                <span className="text-mono-xs text-text-secondary/50">
                  {stage.goal}
                </span>
              </div>
              <h3 className="text-mono-base sm:text-mono-lg font-medium text-text-primary uppercase tracking-wide leading-tight">
                {stage.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="font-space-grotesk text-body-sm mb-6 whitespace-pre-line max-w-[600px]">
            {stage.description}
          </p>

          {/* Books */}
          <div className="mb-6">
            <span className="text-mono-xs text-emerald-400/60 mb-3 block">
              READING LIST
            </span>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2"
              onMouseLeave={() => setActiveBookId(null)}
            >
              {stage.books.map((book) => {
                const isActive = activeBookId === book.id;

                return (
                <div
                  key={book.id}
                  className="flex items-start gap-2.5 group/book"
                  onMouseEnter={() => setActiveBookId(book.id)}
                  onMouseMove={() => setActiveBookId(book.id)}
                  onPointerEnter={() => setActiveBookId(book.id)}
                  onPointerMove={() => setActiveBookId(book.id)}
                  onFocus={() => setActiveBookId(book.id)}
                >
                  <span
                    className={[
                      'mt-[5px] text-[6px] flex-shrink-0 transition-colors duration-300 motion-reduce:transition-none',
                      isActive ? 'text-emerald-300' : 'text-emerald-500/40',
                    ].join(' ')}
                  >
                    ●
                  </span>
                  <span
                    className={[
                      'font-space-grotesk text-body-sm transition-colors duration-300 motion-reduce:transition-none group-hover/book:text-text-primary',
                      isActive ? 'text-text-primary' : 'text-text-primary/72',
                    ].join(' ')}
                  >
                    {book.title}
                  </span>
                </div>
                );
              })}
            </div>
          </div>

          {hasCoverImages && (
            <div className="mb-6">
              <BookCoverRail
                books={stage.books}
                activeBookId={activeBookId}
                onActiveBookChange={setActiveBookId}
              />
            </div>
          )}

          {/* Outcome */}
          <div className="border-t border-border-subtle pt-4">
            <div className="flex items-start gap-2">
              <span className="text-mono-xs text-emerald-400 flex-shrink-0 mt-0.5">
                👉
              </span>
              <span className="font-mono text-body-sm text-emerald-400/80">
                {stage.outcome}
              </span>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   READING PATH PAGE — Main Component
   ═══════════════════════════════════════════════════════════════ */
export function ReadingPathPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative p-4 sm:p-6">
      {/* ─── Top Navigation Bar ─── */}
      <TopBar />

      <main className="flex-grow flex flex-col w-full max-w-5xl mx-auto">
        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <RevealSection className="relative mb-1 min-h-[420px] overflow-hidden pt-8 sm:pt-0">
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_48%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_74%_44%,rgba(16,185,129,0.07),transparent_30%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-24 top-0 h-[500px] w-[1180px] max-w-[112%] opacity-[0.22] [mask-image:linear-gradient(90deg,transparent_0%,black_30%,black_74%,transparent_100%),linear-gradient(180deg,black_0%,black_68%,transparent_100%)] [mask-composite:intersect] sm:opacity-[0.62] lg:-right-20 lg:w-[920px]" aria-hidden="true">
            <img
              src={readingPathDataFlow}
              alt=""
              className="h-full w-full object-cover object-right"
            />
          </div>
          <div className="pointer-events-none absolute right-0 top-8 h-80 w-[52%] bg-[radial-gradient(circle_at_55%_45%,rgba(52,211,153,0.13),transparent_62%)] blur-sm" aria-hidden="true" />

          <div className="relative z-10 flex min-h-[420px] flex-col items-start justify-center">
            {/* Badge */}
            <div className="flex items-center mb-5">
              <span className="text-mono-xs px-2.5 py-1 border border-emerald-400/30 text-emerald-400 bg-emerald-400/5">
                READING PATH
              </span>
              <span className="text-mono-xs text-text-secondary/40 border border-l-0 border-border-subtle px-2.5 py-1">
                50 BOOKS / 10 STAGES
              </span>
            </div>

            <h1 className="font-space-grotesk text-display mb-4">
              THE MENTAL
              <br />
              UPGRADE PATH
            </h1>

            <p className="font-mono text-body-lg max-w-[640px] mb-8">
              A curated reading progression for perception, psychology,
              influence, markets, systems, strategy, and meaning.
            </p>

            {/* Progression keywords */}
            <div className="flex flex-wrap gap-2 mb-0">
              {progressionKeywords.map((keyword, idx) => (
                <RevealSection key={keyword} delay={idx * 0.04}>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-emerald-500/16 bg-black/34 text-mono-xs text-white/52 shadow-[inset_0_0_12px_rgba(16,185,129,0.025)] transition-colors hover:border-emerald-500/30 hover:text-text-primary cursor-default">
                      <span className="w-1.5 h-1.5 bg-emerald-400/55" />
                      {keyword}
                    </span>
                    {idx < progressionKeywords.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-emerald-500/20 flex-shrink-0 hidden sm:block" />
                    )}
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </RevealSection>

        <div className="h-px bg-border-subtle mb-10" />

        {/* ═══════════════════════════════════════════
            HOW TO USE THIS LIST
        ═══════════════════════════════════════════ */}
        <RevealSection className="mb-10">
          <div className="relative border border-border-subtle bg-bg-surface/60 p-8 sm:p-10">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-emerald-500/30" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-emerald-500/30" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-emerald-500/30" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-emerald-500/30" />

            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-emerald-400/60" />
              <span className="text-mono-base font-medium text-emerald-400 uppercase">
                HOW TO USE THIS LIST
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <p className="font-space-grotesk text-body-base text-text-primary/80">
                  Don't binge the whole thing.
                </p>
                <p className="font-space-grotesk text-body-sm">
                  Read 2–3 books per stage, apply what you learn, reflect, then
                  move forward. The goal isn't to collect titles. The goal is to
                  build better perception, sharper thinking, and stronger
                  judgment.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-500/50 mt-[5px] text-[6px]">
                    ●
                  </span>
                  <span className="font-space-grotesk text-body-sm text-text-primary/80">
                    Keep a mental models notebook.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-500/50 mt-[5px] text-[6px]">
                    ●
                  </span>
                  <span className="font-space-grotesk text-body-sm text-text-primary/80">
                    Track the ideas that change how you see the world.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        <div className="h-px bg-border-subtle mb-3" />

        {/* ═══════════════════════════════════════════
            THE PROGRESSION — Section label
        ═══════════════════════════════════════════ */}
        <RevealSection className="mb-8">
          <div className="flex flex-col gap-3">
            <span className="text-mono-base font-medium text-emerald-400 uppercase leading-tight">
              THE PROGRESSION
            </span>
            <div className="w-full h-px bg-border-subtle" />
          </div>
        </RevealSection>

        {/* ═══════════════════════════════════════════
            STAGES
        ═══════════════════════════════════════════ */}
        <div className="flex flex-col gap-6 mb-12">
          {stages.map((stage, idx) => (
            <StageCard key={stage.number} stage={stage} index={idx} />
          ))}
        </div>

        <div className="h-px bg-border-subtle mb-10" />

        {/* ═══════════════════════════════════════════
            CLOSING BANNER
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
              <div className="text-text-primary">
                The goal isn't to collect titles.
              </div>
              <div className="text-emerald-400">
                The goal is to build a better operating system.
              </div>
            </div>

            {/* Back link */}
            <Link
              to="/about"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-border-subtle hover:border-emerald-500 hover:text-emerald-500 transition-colors text-mono-xs tracking-widest uppercase group"
            >
              RETURN
              <ArrowRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </RevealSection>
      </main>

      {/* ─── Footer ─── */}
      <Footer />
    </div>
  );
}
