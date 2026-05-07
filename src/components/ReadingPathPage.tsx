import React, { useRef, useEffect } from 'react';
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
  books: string[];
  outcome: string;
  icon: React.ElementType;
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
function StageCard({ stage, index }: { stage: Stage; index: number }) {
  const Icon = stage.icon;
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
          <p className="text-body-sm mb-6 whitespace-pre-line max-w-[600px]">
            {stage.description}
          </p>

          {/* Books */}
          <div className="mb-6">
            <span className="text-mono-xs text-emerald-400/60 mb-3 block">
              READING LIST
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {stage.books.map((book, bIdx) => (
                <div
                  key={book}
                  className="flex items-start gap-2.5 group/book"
                >
                  <span className="text-emerald-500/40 mt-[5px] text-[6px] flex-shrink-0">
                    ●
                  </span>
                  <span className="text-body-sm group-hover/book:text-text-primary transition-colors">
                    {book}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="border-t border-border-subtle pt-4">
            <div className="flex items-start gap-2">
              <span className="text-mono-xs text-emerald-400 flex-shrink-0 mt-0.5">
                👉
              </span>
              <span className="text-body-sm text-emerald-400/80 italic">
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
    <div className="min-h-screen flex flex-col relative p-6">
      {/* ─── Top Navigation Bar ─── */}
      <header className="flex justify-between items-center pb-3 border-b border-border-subtle mb-8 text-mono-xs text-text-secondary w-full max-w-5xl mx-auto">
        <Link
          to="/about"
          className="flex items-center gap-2 hover:text-emerald-500 transition-colors cursor-pointer group"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="opacity-50 group-hover:opacity-100 transition-opacity"
          >
            <path
              d="M8 2L4 6L8 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>RETURN_TO_ABOUT</span>
        </Link>
        <div className="flex gap-6 items-center">
          <span className="text-emerald-500">PAGE:</span>
          <span>READING PATH</span>
          <span className="hidden sm:inline text-text-secondary/30">|</span>
          <span className="hidden sm:inline text-text-secondary/40">
            10 STAGES
          </span>
        </div>
      </header>

      <main className="flex-grow flex flex-col w-full max-w-5xl mx-auto">
        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <RevealSection className="mb-10">
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div className="flex items-center mb-5">
              <span className="text-mono-xs px-2.5 py-1 border border-emerald-400/30 text-emerald-400 bg-emerald-400/5">
                READING PATH
              </span>
              <span className="text-mono-xs text-text-secondary/40 border border-l-0 border-border-subtle px-2.5 py-1">
                50 BOOKS / 10 STAGES
              </span>
            </div>

            <h1 className="text-display mb-4">
              The Mental
              <br />
              Upgrade Path
            </h1>

            <p className="text-body-lg max-w-[640px] mb-8">
              A curated reading progression for perception, psychology,
              influence, markets, systems, strategy, and meaning.
            </p>

            {/* Progression keywords */}
            <div className="flex flex-wrap gap-2 mb-0">
              {progressionKeywords.map((keyword, idx) => (
                <RevealSection key={keyword} delay={idx * 0.04}>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border-subtle bg-bg-surface text-mono-xs text-text-secondary hover:border-emerald-500/30 hover:text-text-primary transition-colors cursor-default">
                      <span className="w-1.5 h-1.5 bg-emerald-500/40" />
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
                <p className="text-body-base text-text-primary/80">
                  Don't binge the whole thing.
                </p>
                <p className="text-body-sm">
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
                  <span className="text-body-sm text-text-primary/80">
                    Keep a mental models notebook.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-500/50 mt-[5px] text-[6px]">
                    ●
                  </span>
                  <span className="text-body-sm text-text-primary/80">
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
      <footer className="mt-auto border-t border-border-subtle pt-4 flex flex-col md:flex-row justify-between items-center text-mono-xs text-text-secondary w-full max-w-5xl mx-auto gap-4">
        <Link
          to="/"
          className="text-emerald-500 hover:text-emerald-500/80 transition-colors cursor-pointer"
        >
          SHUTDOWN / EXIT NODE
        </Link>
        <div>BUILT FOR SIGNAL. NOT FOR NOISE.</div>
        <div className="flex gap-4">
          <a
            href="#"
            className="hover:text-text-primary transition-colors"
          >
            [ CONTACT ]
          </a>
          <a
            href="#"
            className="hover:text-text-primary transition-colors"
          >
            [ LINKEDIN ]
          </a>
          <a
            href="#"
            className="hover:text-text-primary transition-colors"
          >
            [ X ]
          </a>
        </div>
      </footer>
    </div>
  );
}
