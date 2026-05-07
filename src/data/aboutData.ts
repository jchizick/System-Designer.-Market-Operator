/* ═══════════════════════════════════════════════════════════════
   ABOUT ME — Static Content Data
   All text, labels, and structured content for the About page.
   ═══════════════════════════════════════════════════════════════ */

/* ─── System Map Nodes (Hero Diagram) ─── */
export interface SystemMapNode {
  id: string;
  label: string;
  subtitle: string;
}

export const systemMapNodes: SystemMapNode[] = [
  { id: 'CURIOSITY', label: 'CURIOSITY', subtitle: 'The spark' },
  { id: 'DISCIPLINE', label: 'DISCIPLINE', subtitle: 'The engine' },
  { id: 'EXECUTION', label: 'EXECUTION', subtitle: 'The outcome' },
  { id: 'SYSTEMS', label: 'SYSTEMS', subtitle: 'The structure' },
  { id: 'LEVERAGE', label: 'LEVERAGE', subtitle: 'The multiplier' },
  { id: 'IMPACT', label: 'IMPACT', subtitle: 'The purpose' },
];

/* ─── The Path (Timeline Steps) ─── */
export interface PathStep {
  number: string;
  title: string;
  description: string;
  sideLabel: string;
  bullets: string[];
}

export const pathSteps: PathStep[] = [
  {
    number: '01',
    title: 'UNIVERSITY EDUCATION',
    description:
      'I started in business school, gained a foundation in strategy, finance, and economics—but realized the system was designed for compliance, not understanding.',
    sideLabel: 'FOCUS AREAS',
    bullets: [
      'Business Strategy',
      'Finance & Economics',
      'Systems Thinking (early)',
    ],
  },
  {
    number: '02',
    title: 'RESEARCH ON\nTHE FUTURE OF WORK',
    description:
      'I researched how automation and AI are reshaping the labor market and the skills required to thrive. This led to my report "The Future of Work: Adapting to a Changing Labor Market."',
    sideLabel: 'KEY INSIGHTS',
    bullets: [
      'Automation is accelerating',
      'Skills > degrees',
      'Human edge = creativity, critical thinking, adaptability',
    ],
  },
  {
    number: '03',
    title: 'REBUILDING MY MIND',
    description:
      'I identified my gaps and committed to re-building my worldview from the ground up. I read thousands of books across psychology, philosophy, economics, strategy, and more—synthesizing ideas into mental models and systems.',
    sideLabel: 'CORE TRANSFORMATIONS',
    bullets: [
      'Systematic thinking',
      'Clearer judgment',
      'Better decision frameworks',
      'Rewired beliefs & identity',
    ],
  },
  {
    number: '04',
    title: 'THE PATH TO TRADING',
    description:
      'I entered the markets to test everything I had learned. Trading became the ultimate classroom—forcing mastery of probability, risk, psychology, and execution.',
    sideLabel: 'KEY DISCIPLINES',
    bullets: [
      'Mastery of self',
      'Risk & probability',
      'Emotional control',
      'Systems in motion',
    ],
  },
  {
    number: '05',
    title: 'EXECUTION MODE',
    description:
      'Now I build. Systems, brands, tools, and content that compound knowledge and create real impact. This is my new operating system in action.',
    sideLabel: 'CURRENT FOCUS',
    bullets: [
      'Building scalable systems',
      'Creating valuable content',
      'Empowering others',
      'Shipping consistently',
    ],
  },
];

/* ─── Principles ─── */
export interface Principle {
  icon: string;       // Lucide icon name reference
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    icon: 'Crosshair',
    title: 'TRUTH FIRST',
    description: "Seek reality. Build on what's true, not what's comfortable.",
  },
  {
    icon: 'Layers',
    title: 'COMPOUND LEARNING',
    description: 'Read deeply. Think systematically. Connect everything.',
  },
  {
    icon: 'Zap',
    title: 'DISCIPLINE EDGE',
    description: 'Small daily actions. Compounded over time. No shortcuts.',
  },
  {
    icon: 'Triangle',
    title: 'BUILD > CONSUME',
    description:
      "Execution is the ultimate test of knowledge. Ship or it's fantasy.",
  },
];

/* ─── Tools ─── */
export const tools: string[] = [
  'Systems Thinking',
  'Mental Models',
  'Markets',
  'Content Systems',
  'AI & Automation',
  'Design & UX',
];

/* ─── Core System (left column) ─── */
export const coreSystem = {
  label: 'CORE SYSTEM',
  heading: ['Understanding.', 'Structure.', 'Execution.'],
  body: 'I study how people think, how narratives shape perception, and how systems drive outcomes. Then I build frameworks, tools, environments, and products that create leverage.',
  cta: 'VIEW MY READING PATH',
};

/* ─── Closing Banner ─── */
export const closingBanner = {
  line1: 'I build internal and external systems for navigating complexity.',
  line2: 'Then I test them where it matters.',
  stamp: ['JLC', 'v1.0'],
};
