export interface BuildBlock {
  label: string;
  title: string;
  description: string;
  tags?: string[];
}

export interface ResultStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  type: string;
  title: string;
  state: string;
  visualType: string;
  outcome: string;
  // Case study detail fields
  subtitle: string;
  heroDescription: string;
  problem: string;
  insight: string;
  buildDescription: string;
  build: BuildBlock[];
  outcomes: string[];
  resultStats: ResultStat[];
  videoCaption?: string;
  hasVideo?: boolean;
  takeaway: string;
  year: string;
  duration: string;
  role: string;
  // Media placeholders (paths will be added later when images are ready)
  heroImage?: string;
  buildDiagramImage?: string;
  buildImages?: string[];        // Per-block images for "The Build" section
  systemMotionImage?: string;    // Static image for "System in Motion" (pre-video)
  videoClip?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "BRAWL_HQ",
    slug: "blockchain-brawlers",
    type: "BRAND ECOSYSTEM",
    title: "Blockchain Brawlers",
    outcome: "A self-reinforcing content, music, community, and education engine for crypto traders.",
    visualType: "bars",
    state: "LIVE SYSTEM",
    subtitle: "Underground Trading Culture Engine",
    heroDescription: "Blockchain Brawlers is a multi-layered brand ecosystem built around crypto trading, outsider psychology, music, education, and community. What started as a content identity evolved into a full cultural machine — connecting visual assets, market commentary, music drops, community language, and trader education into one unified system.",
    year: "2025",
    duration: "ONGOING",
    role: "FOUNDER / BRAND SYSTEM DESIGNER",
    problem: "Most trading brands look the same: generic charts, recycled motivation, fake alpha, and surface-level content. The crypto education space is crowded with influencers selling shortcuts, while most communities fail to create a real identity people want to belong to. Blockchain Brawlers was built to solve a different problem: how do you turn trading education into a culture — something people can recognize, participate in, and rally around?",
    insight: "A strong trading brand cannot be built from content alone. It needs mythology, language, rituals, visual identity, music, and repeatable systems. The breakthrough was treating Blockchain Brawlers less like a content page and more like a living ecosystem: every post, song, visual, course concept, and community interaction feeds the same larger narrative — disciplined outsiders learning to survive and win in high-volatility markets.",
    buildDescription: "A multi-layered brand system connecting content, music, community, and education into one compounding ecosystem.",
    heroImage: "/src/assets/brawler-hero.png",
    buildImages: [
      "/src/assets/brawler-ecosystem.png",
      "/src/assets/brawler-content-system.png",
      "/src/assets/brawler-music.png",
      "/src/assets/brawler-community.png",
      "/src/assets/brawler-partnerships.png"
    ],
    systemMotionImage: "/src/assets/brawler-system-in-motion.png",
    hasVideo: true,
    videoCaption: "Short cinematic reel showing the Blockchain Brawlers engine in motion: visuals, charts, music, posts, and community loops.",
    build: [
      {
        label: "ECOSYSTEM",
        title: "Content → Music → Community → Course → Tools / Partnerships",
        description: "The brand was structured as a connected ecosystem rather than a collection of disconnected assets. Social content introduces the philosophy, music expands the world, community language creates belonging, and the course turns the worldview into a practical trading education system. Each layer reinforces the others.",
        tags: ["Brand Strategy", "Ecosystem Design", "Content Architecture", "Community"]
      },
      {
        label: "CONTENT",
        title: "Trading Philosophy Content System",
        description: "A repeatable content system was built around market psychology, execution discipline, chart interpretation, and outsider identity. Posts, visual assets, quotes, and educational fragments all use a consistent voice: sharp, direct, anti-hype, and focused on turning noisy market behavior into structured decision-making.",
        tags: ["X / Twitter", "Visual Assets", "Copywriting", "Trading Psychology"]
      },
      {
        label: "MUSIC",
        title: "The Brawler Soundtrack",
        description: "Music became a world-building layer for the brand. Tracks across hip-hop, drill, reggae, drum & bass, phonk, synthwave, and global styles were used to give the project emotional gravity and cultural identity. The music system transforms trading from a technical topic into a cinematic, mythic experience.",
        tags: ["Suno AI", "Album System", "Audio Branding", "Worldbuilding"]
      },
      {
        label: "COMMUNITY",
        title: "Language, Identity & Engagement Loops",
        description: "The community layer was designed around shared language, inside jokes, trader archetypes, and the idea of the 'Brawler' as a disciplined market outsider. Engagement was not treated as vanity metrics — it became feedback for refining the content engine and identifying which ideas had cultural traction.",
        tags: ["Community Design", "Engagement Loops", "Brand Voice", "Tribe Building"]
      },
      {
        label: "PARTNERSHIP",
        title: "ATAS Platform Partnership",
        description: "The brand extended beyond content into a strategic partnership with ATAS, aligning Blockchain Brawlers with a professional order flow trading platform used by serious traders. This gave the ecosystem a stronger bridge between education, execution, and real trading tools.",
        tags: ["ATAS", "Order Flow", "Trading Tools", "Strategic Partnership"]
      }
    ],
    outcomes: [
      "Created a complete trading culture brand spanning content, music, education, and community",
      "Developed a distinct visual and verbal identity separate from generic crypto influencer branding",
      "Produced a multi-genre music layer that expanded the brand into a larger fictional and emotional universe",
      "Built the foundation for a beginner trading course rooted in discipline, psychology, and repeatable process",
      "Established a scalable ecosystem where each content layer feeds the next"
    ],
    resultStats: [
      { value: "4", label: "Core ecosystem layers: content, music, community, course" },
      { value: "33+", label: "Original music tracks developed for the brand universe" },
      { value: "1", label: "Unified brand mythology across every touchpoint" },
      { value: "∞", label: "Repeatable content loops designed for long-term compounding" }
    ],
    takeaway: "Blockchain Brawlers is not just a trading brand. It is a cultural engine. The system works because every asset feeds the same loop: philosophy becomes content, content becomes identity, identity becomes community, and community creates demand for deeper education."
  },
  {
    id: "SYN_FOUNDRY",
    slug: "ai-brand-machine-synthetic-foundry",
    type: "BRAND MANUFACTURING SYSTEM",
    title: "Synthetic Foundry",
    outcome: "A high-velocity brand manufacturing system that converts raw business ideas into engineered brand infrastructure.",
    visualType: "grid",
    state: "ACTIVE BUILD",
    subtitle: "Automated Brand Strategy Pipeline",
    heroDescription: "The Synthetic Foundry is an AI-powered brand manufacturing system that transforms a founder’s raw idea into multiple strategic brand universes, calibrated signal profiles, moodboards, Brand DNA, operating rules, and implementation roadmaps. Instead of treating branding as taste, it treats identity as engineered infrastructure.",
    year: "2026",
    duration: "ONGOING",
    role: "SYSTEM DESIGNER / BRAND STRATEGIST / AI WORKFLOW ARCHITECT",
    problem: "Traditional branding processes are slow, subjective, and fragmented. Founders often move from vague ideas to logos, colors, and revisions without ever defining the structural logic that should govern how the brand behaves. The result is a polished surface with no operating system underneath: no clear signal profile, no behavioral rules, no implementation map, and no way to scale the identity consistently across product, content, marketing, and experience.",
    insight: "A brand is not just a visual identity. It is a behavioral system. If the emotional signal, strategic narrative, visual language, and execution rules can be generated, compared, calibrated, and locked in sequence, then branding becomes less like subjective decoration and more like infrastructure design. The critical shift was building a process that forces every creative decision through a structured pipeline: idea, universe, signal, DNA, systems, applications, and execution.",
    buildDescription: "An AI-assisted workshop and operator dashboard that compresses brand discovery, strategic exploration, identity logic, and execution planning into a repeatable manufacturing pipeline.",
    heroImage: "/src/assets/brand-machine-hero.png",
    buildImages: [
      "/src/assets/brand-machine-input.png",
      "/src/assets/brand-machine-processing.png",
      "/src/assets/brand-machine-system.png",
      "/src/assets/brand-machine-why-this-works.png"
    ],
    systemMotionImage: "/src/assets/brand-machine-system-in-motion.png",
    hasVideo: false,
    videoCaption: "Looped pipeline animation showing raw input moving through AI processing layers and emerging as structured brand infrastructure.",
    build: [
      {
        label: "INPUT",
        title: "Raw Idea Intake & Strategic Brief",
        description: "The system begins with a founder’s natural-language idea and converts it into a structured strategic brief. It extracts the product concept, audience, problem, emotional intention, founder belief, and brand constraints. This becomes the raw material for the machine: the unrefined ore that will be pressure-tested, shaped, and transformed into multiple possible brand realities.",
        tags: ["Client Intake", "Prompt Design", "Structured Brief", "Founder Context"]
      },
      {
        label: "PROCESSING",
        title: "Universe Generation & Signal Calibration",
        description: "The AI pipeline generates multiple Brand Universes from the same input. Each universe contains a distinct positioning angle, emotional signal profile, narrative logic, visual direction, and moodboard prompt. The 4-Signal Matrix — Authority, Warmth, Energy, and Precision — turns subjective brand feeling into measurable strategic behavior. The user can compare realities before committing to one.",
        tags: ["LLM Pipeline", "Brand Universes", "Signal Matrix", "Moodboards"]
      },
      {
        label: "SYSTEM",
        title: "Brand DNA & Operating System",
        description: "Once a universe is selected, the system locks the Brand DNA: core belief, narrative spine, visual DNA, experience principle, and signal profile. That DNA is then translated into concrete behavioral rules across communication, design, product, marketing, and experience. The output is not a static brand guide — it is a Brand Operating System that defines how the identity should behave under real-world pressure.",
        tags: ["Brand DNA", "Behavioral Rules", "Operating System", "Execution Logic"]
      },
      {
        label: "OUTPUT",
        title: "Implementation Matrix & Execution Roadmap",
        description: "The final layer converts strategy into execution. The Brand Application Matrix maps where the identity appears across product, platform, communication, and environment. The Implementation Planner then turns those touchpoints into a phased roadmap for identity assets, product UI, documentation, content templates, and deployment surfaces. The founder walks away with direction, rules, and a production plan.",
        tags: ["Application Matrix", "Roadmap", "UI Systems", "Brand Deployment"]
      }
    ],
    outcomes: [
      "Designed a repeatable AI-powered workflow for transforming raw ideas into complete brand systems.",
      "Compressed traditional multi-week discovery into a structured 25-minute workshop format.",
      "Created a multi-universe generation model that lets founders compare different strategic realities before choosing one.",
      "Built a 4-Signal Matrix to translate abstract brand traits into concrete communication, design, product, and marketing rules.",
      "Developed a Brand Operating System model that moves beyond static guidelines into execution-ready infrastructure."
    ],
    resultStats: [
      { value: "25 MIN", label: "Workshop path from raw idea to structured brand system" },
      { value: "3x", label: "Brand universes generated from a single concept" },
      { value: "4", label: "Core signal dimensions used to calibrate brand behavior" },
      { value: "6+", label: "Strategic artifacts produced across DNA, systems, and execution" }
    ],
    takeaway: "Branding becomes scalable when it stops depending on taste and starts operating like a system. The Synthetic Foundry turns raw founder logic into structured brand infrastructure: universes, signals, rules, systems, applications, and execution plans forged through one repeatable pipeline."
  },
  {
    id: "BRAWLER_MIND",
    slug: "trading-journey-brawler-mind",
    type: "TRADING SYSTEM / PERFORMANCE OS",
    title: "The Brawler Mind",
    outcome: "A personal trading journey transformed into a decision-making framework for operating under pressure.",
    visualType: "wave",
    state: "LIVE",
    subtitle: "Trading Psychology, Execution Discipline & Human Performance System",
    heroDescription: "A case study on turning years of market observation, emotional pattern recognition, and execution pressure into a practical operating system for traders: The Brawler Mind.",
    year: "2025",
    duration: "ONGOING",
    role: "TRADER / SYSTEM DESIGNER / AUTHOR",
    problem: "Most traders don’t lose because they lack information. They lose because their internal state collapses under pressure. Volatility exposes unfinished decisions: fear, urgency, ego, overconfidence, hesitation, and the need to be right. The challenge was not simply learning how to read charts — it was learning how to read the operator behind the chart.",
    insight: "The market is not only a price system. It is a behavioral mirror. Every candle reflects participation, pressure, memory, direction, and cycles — but every trade also reflects the trader’s internal auction: their nervous system, emotional state, objective clarity, and ability to execute without contamination. The real edge is not prediction. It is alignment between market context, internal state, strategy, risk, and execution.",
    buildDescription: "A personal trading framework evolved into a full performance operating system: part market-reading model, part execution process, part psychological discipline, and part written field manual.",
    heroImage: "/src/assets/brawler-mind-hero.png",
    buildImages: [
      "/src/assets/brawler-mind-philosophy.png",
      "/src/assets/brawler-mind-system-rules.png",
      "/src/assets/brawler-mind-book.png",
      "/src/assets/brawler-mind-chart-examples.png"
    ],
    systemMotionImage: "/src/assets/brawler-mind-system-in-motion.png",
    hasVideo: true,
    videoCaption: "Chart replay showing price movement, internal reaction, decision filter, and execution outcome.",
    build: [
      {
        label: "PHILOSOPHY",
        title: "The Market as Mirror",
        description: "The foundation of the system reframes trading as a mirror of human behavior. Price action is treated as emotional telemetry: fear, greed, urgency, conviction, hesitation, and exhaustion rendered through candles, volume, structure, and time. The trader’s task is not to predict the future, but to perceive what is happening clearly enough to act without distortion.",
        tags: ["Market Psychology", "Auction Theory", "Emotional Telemetry", "Pattern Recognition"]
      },
      {
        label: "SYSTEM",
        title: "The B.R.A.W.L Process",
        description: "A five-part execution framework designed to reduce emotional leakage under pressure: Break Down the charts, Recognize the objective, Assess the strategy, Work the execution, and Learn from the results. Each step acts as a gatekeeper against a specific failure mode: confusion, overreach, misalignment, emotional execution, and unexamined repetition.",
        tags: ["Process Design", "Risk Management", "Execution Discipline", "Decision Framework"]
      },
      {
        label: "BOOK",
        title: "The Brawler Mind",
        description: "The trading framework was expanded into a full written system exploring market structure, emotional regulation, trading process, failure modes, safety rails, and the eight circuits of consciousness. The book became the clearest expression of the work: not a shortcut, not a signal system, but a field manual for mastering the internal system behind performance.",
        tags: ["Writing", "Systems Thinking", "Human Performance", "Trading Psychology"]
      },
      {
        label: "APPLICATION",
        title: "Chart Study & Execution Review",
        description: "The framework is applied through chart breakdowns, trade reviews, emotional state audits, and post-session feedback loops. Wins and losses are treated as information, not identity. The goal is to refine the operator over time until process becomes instinct.",
        tags: ["Trade Review", "Journaling", "Feedback Loops", "Performance Analysis"]
      }
    ],
    outcomes: [
      "Created a complete trading philosophy centered on state control, process, and execution discipline",
      "Developed the B.R.A.W.L framework as a repeatable decision-making sequence under pressure",
      "Expanded the system into The Brawler Mind, a full-length book on trading psychology and self-mastery",
      "Built a reusable language system for future trading content, visual assets, course material, and brand extensions",
      "Translated personal market experience into a portfolio-ready case study demonstrating decision-making under uncertainty"
    ],
    resultStats: [
      { value: "5", label: "Core steps in the B.R.A.W.L execution process" },
      { value: "3", label: "Major sections: Market & Mind, Process, Consciousness" },
      { value: "8", label: "Internal circuits mapped for performance mastery" },
      { value: "250", label: "Pages in the first Brawler Mind manuscript" }
    ],
    takeaway: "The market does not only test your strategy. It tests your state. The strongest trading system is the one that protects the operator from impulse, distortion, and identity-driven decision-making."
  },
  {
    id: "ALG_EXP",
    slug: "algonquin-dashboard",
    type: "EXPEDITION CONTROL SYSTEM",
    title: "Algonquin Dashboard",
    outcome: "A real-time planning command center for a backcountry camping trip.",
    visualType: "nodes",
    state: "LIVE BUILD",
    subtitle: "Maple Leaf Lake Expedition Control",
    heroDescription: "A high-utility dashboard built to coordinate a real backcountry camping and hiking trip to Maple Leaf Lake in Algonquin Park — centralizing weather, gear, meals, timeline, route data, crew responsibilities, park intelligence, and offline safety status into one calm operational interface.",
    year: "2026",
    duration: "IN PROGRESS",
    role: "PRODUCT DESIGNER / FULL-STACK BUILDER",
    problem: "Backcountry trip planning lives across too many disconnected surfaces: weather apps, park alerts, PDF maps, reservation portals, gear spreadsheets, meal lists, notes, and group chats. Each tool solves one small part of the problem, but none of them create a complete operational picture. For a July hiking and camping trip with Liz to Maple Leaf Lake, that fragmentation created unnecessary planning friction and made it harder to know what was ready, what needed action, and what risks still needed to be managed.",
    insight: "The real product opportunity was not navigation. It was preparation. Existing tools help answer where to go, but they do not help bridge the gap between booking the trip and stepping onto the trail. The dashboard turns that preparation phase into a system of record: a shared command center that translates raw trip variables into readiness, clarity, and calm execution.",
    buildDescription: "A localized expedition control dashboard designed around preparedness, environmental awareness, and team coordination.",
    heroImage: "/src/assets/algonquin-hero.png",
    buildImages: [
      "/src/assets/algonquin-data-inputs.png",
      "/src/assets/algonquin-ui-screens.png",
      "/src/assets/algonquin-decision-flow.png",
      "/src/assets/algonquin-mobile-view.png"
    ],
    systemMotionImage: "/src/assets/algonquin-system-in-motion.png",
    hasVideo: true,
    videoCaption: "Dashboard state changes showing readiness, weather, gear status, and timeline updates across the expedition plan.",
    build: [
      {
        label: "SYSTEM",
        title: "Centralized Expedition Data Model",
        description: "The dashboard consolidates the core planning layers of the trip into one operational interface: route, forecast, gear, meals, crew roles, timeline, alerts, park intelligence, and offline safety. Instead of forcing the user to jump between apps and documents, each module contributes to a shared readiness picture.",
        tags: ["Next.js", "React", "TypeScript", "Supabase"]
      },
      {
        label: "DESIGN",
        title: "Mission Control Interface",
        description: "The visual system is built around calm intelligence rather than outdoor lifestyle aesthetics. Dense cards, status rings, segmented readiness bars, mono labels, and dark field-interface styling make the product feel like professional expedition software — closer to digital PPE than a travel app.",
        tags: ["Tailwind CSS", "Lucide Icons", "Dark UI", "Dashboard UX"]
      },
      {
        label: "LOGIC",
        title: "Readiness Engine",
        description: "A weighted scoring system evaluates gear completeness, meal planning, safety readiness, weather preparation, and timeline completion. The goal is to make ambiguity visible: what is packed, what is missing, what is critical, and what is already under control.",
        tags: ["Readiness Scoring", "Helper Functions", "State Logic", "Status Systems"]
      },
      {
        label: "DATA",
        title: "Environmental + Park Intelligence Layer",
        description: "The dashboard integrates weather, conditions, sunrise/sunset timing, park advisories, water notes, fire status, wildlife information, and site-specific details for Maple Leaf Lake. This creates a localized planning layer that generic apps do not provide.",
        tags: ["Weather Data", "Park Alerts", "Maple Leaf Lake", "Site 4"]
      },
      {
        label: "TOOLS",
        title: "Offline Safety + Field Execution",
        description: "The system includes an offline vault for critical trip assets: permits, maps, route data, satellite device status, and emergency contact readiness. This shifts the dashboard from a planning document into a field-preparation tool.",
        tags: ["Offline Vault", "Safety Checks", "Permits", "Route Data"]
      }
    ],
    outcomes: [
      "Replaced scattered planning across maps, weather apps, spreadsheets, and notes with one expedition control system.",
      "Created a live readiness model for gear, meals, timeline, weather preparation, and offline safety.",
      "Built a localized trip interface for Maple Leaf Lake / Site 4 instead of relying on generic outdoor planning tools.",
      "Designed a calm, high-density UI that gives both the technical planner and co-adventurer a shared source of truth.",
      "Established a scalable foundation for future outdoor planning systems, including weather sync, alerts, offline data, and trip-specific logistics."
    ],
    resultStats: [
      { value: "1", label: "Unified command center replacing fragmented planning tools" },
      { value: "5", label: "Readiness categories tracked across the trip system" },
      { value: "4D", label: "Expedition timeline structured into daily execution phases" },
      { value: "LIVE", label: "Dashboard connected to real planning data and active trip preparation" }
    ],
    takeaway: "The best planning tools do not add more information — they reduce the cost of knowing what matters. The Algonquin Dashboard turns scattered trip logistics into a calm, operational system for making better decisions before entering the field."
  },
  {
    id: "DMT_SYSTEM",
    slug: "daniels-massage-therapy",
    type: "CLIENT TRANSFORMATION",
    title: "Daniel's Massage Therapy",
    outcome: "Higher bookings, reduced friction, and a fully aligned client experience.",
    visualType: "radar",
    state: "DEPLOYED",
    subtitle: "Brand, Booking System, and Client Experience Overhaul",
    heroDescription: "A full-stack transformation of a local massage therapy business — replacing a generic template site with a high-conversion, personality-driven booking system that aligns digital presence with real-world experience.",
    year: "2025",
    duration: "6 WEEKS",
    role: "STRATEGY / DESIGN / BUILD",
    problem: "Daniel’s online presence was working against him. His website relied on a generic template with stock imagery, offering no differentiation or emotional connection. There was no booking system — clients had to call manually, creating friction and missed opportunities. Worse, the digital experience didn’t match the high-quality, personalized care clients received in person, breaking trust at the first touchpoint.",
    insight: "For service-based businesses, the website isn't just informational — it sets the tone for trust. If the first interaction feels generic or inconvenient, clients hesitate. By aligning brand identity, simplifying booking, and reinforcing the real-world experience digitally, the website becomes a conversion engine instead of a bottleneck.",
    buildDescription: "A personality-driven brand system paired with a frictionless booking experience.",
    heroImage: "/src/assets/dmt-hero.png",
    buildImages: [
      "/src/assets/dmt-branding-transformation.png",
      "/src/assets/dmt-booking-flow.png",
      "/src/assets/dmt-touchpoints.png"
    ],
    systemMotionImage: "/src/assets/dmt-sys-motion.png",
    hasVideo: false,
    videoCaption: "Scroll-through of the responsive booking experience across desktop and mobile.",
    build: [
      {
        label: "SYSTEM",
        title: "Brand Identity Transformation",
        description: "Replaced generic stock visuals with a custom identity rooted in Daniel’s personality and practice style. Delivered a cohesive brand system including logo, iconography, color palette, and typography to establish trust and recognition across all touchpoints.",
        tags: ["Brand Strategy", "Logo Design", "Typography", "Color Systems"]
      },
      {
        label: "FLOW",
        title: "Frictionless Booking Experience",
        description: "Designed and built a responsive Webflow site with integrated Calendly booking. Eliminated the need for phone calls by enabling real-time scheduling, automated confirmations, SMS/email reminders, and clear pre-appointment instructions.",
        tags: ["Webflow", "Calendly", "UX Design", "Responsive Design"]
      },
      {
        label: "TOUCHPOINTS",
        title: "End-to-End Client Experience",
        description: "Aligned every interaction point — from search discovery to post-booking communication. Delivered business cards, portrait photography, and a cohesive digital presence to ensure consistency between online perception and in-person experience.",
        tags: ["Photography", "Print Design", "Client Journey", "Brand Consistency"]
      },
      {
        label: "ENABLEMENT",
        title: "Client Empowerment & Systems Thinking",
        description: "Coached Daniel on mindset, communication, and system usage — including how to manage bookings, interact with clients, and extend his brand through content. Delivered a YouTube playbook and scripts to support long-term growth.",
        tags: ["Coaching", "Content Strategy", "Systems Thinking"]
      }
    ],
    outcomes: [
      "Increased booking volume through reduced scheduling friction",
      "Lower bounce rates due to improved clarity and trust",
      "Higher client satisfaction with automated reminders and onboarding",
      "More repeat clients and referrals",
      "Stronger search presence and inbound leads",
      "Improved personal confidence and motivation for the client"
    ],
    resultStats: [
      { value: "+40%", label: "Increase in bookings (est.)" },
      { value: "-60%", label: "Reduction in booking friction" },
      { value: "+25%", label: "Increase in repeat clients" },
      { value: "24/7", label: "Automated booking availability" }
    ],
    takeaway: "A business doesn’t scale through skill alone — it scales through systems. When brand, experience, and infrastructure align, growth becomes a byproduct."
  },
  {
    id: "VP_REAL_ESTATE",
    slug: "real-estate-branding-system",
    type: "BRANDING SYSTEM",
    title: "Veronica Piper Real Estate",
    outcome: "End-to-end real estate branding system designed to elevate positioning, win listings, and deploy high-converting marketing at speed.",
    visualType: "scatter",
    state: "ARCHIVED",
    subtitle: "Full-Stack Real Estate Branding & Marketing System",
    heroDescription: "A complete branding and marketing system for a Toronto-based real estate broker — spanning identity, digital presence, print collateral, and listing execution — designed to win listings, build trust instantly, and operate at high speed in a competitive market.",
    year: "2025",
    duration: "ONGOING",
    role: "DESIGN / DEV / STRATEGY",
    problem: "In Toronto real estate, perception is everything. Sellers choose agents based on trust signals, presentation quality, and perceived reach. Most agents rely on fragmented tools — templated websites, inconsistent branding, slow turnaround on materials — resulting in weak positioning and lost listings. In competitive scenarios, delays of even 24–48 hours can mean losing the deal entirely.",
    insight: "Winning listings isn't just about experience — it's about how that experience is presented. The agent with the strongest, most cohesive system appears more capable, more organized, and more premium. Speed compounds this advantage. A unified system that can produce high-quality marketing instantly becomes a competitive weapon.",
    buildDescription: "A fully integrated real estate branding system designed for speed, consistency, and trust at every touchpoint.",
    heroImage: "/src/assets/vp-hero.png",
    buildImages: [
      "/src/assets/vp-identity.png",
      "/src/assets/vp-application.png",
      "/src/assets/vp-digital.png"
    ],
    systemMotionImage: "/src/assets/vp-system.png",
    hasVideo: false,
    videoCaption: "Flow decomposition dashboard separating institutional signal from retail noise.",
    build: [
      {
        label: "IDENTITY",
        title: "Premium Brand System",
        description: "Designed a clean, minimal identity system centered around trust and clarity. Developed logo, typography hierarchy, spacing system, and layout rules to ensure consistency across all mediums — from business cards to digital listings. The visual language balances corporate credibility with modern luxury.",
        tags: ["Branding", "Typography", "Art Direction"]
      },
      {
        label: "APPLICATION",
        title: "End-to-End Marketing Assets",
        description: "Built a complete ecosystem of marketing materials used throughout the listing lifecycle — including listing brochures, postcards, signage, pitch decks, email campaigns, and custom gifts. Each asset is systemized for rapid production while maintaining a consistent premium look.",
        tags: ["Print Design", "Marketing Systems", "Collateral"]
      },
      {
        label: "DIGITAL",
        title: "Website & Listing Infrastructure",
        description: "Designed and developed a CMS-driven website in Webflow to manage listings, content, and lead capture. Each listing page is structured for clarity and conversion — combining strong visuals, detailed property data, and direct contact pathways. The system enables rapid publishing and updates under tight timelines.",
        tags: ["Webflow", "CMS", "UX/UI"]
      }
    ],
    outcomes: [
      "Enabled full listing marketing packages to be produced within 24 hours",
      "Created a consistent premium brand presence across all client touchpoints",
      "Improved perceived authority and professionalism in listing presentations",
      "Supported successful listing acquisition in a highly competitive Toronto market",
      "Reduced reliance on third-party tools through a unified system"
    ],
    resultStats: [
      { value: "24h", label: "Turnaround for full marketing packages" },
      { value: "10+", label: "Asset types systemized and standardized" },
      { value: "100+", label: "Distribution channels per listing" },
      { value: "1", label: "Unified system replacing fragmented tools" }
    ],
    takeaway: "In real estate, trust is built before the first conversation. A cohesive, high-speed branding system doesn't just support the agent — it becomes the product. The agent with the best system wins."
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getAdjacentCases(slug: string): { prev: CaseStudy | null; next: CaseStudy | null } {
  const idx = caseStudies.findIndex(cs => cs.slug === slug);
  return {
    prev: idx > 0 ? caseStudies[idx - 1] : null,
    next: idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null
  };
}
