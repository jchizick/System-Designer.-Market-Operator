import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { FieldNotes } from './components/FieldNotes';
import { CaseFiles } from './components/CaseFiles';
import { ForwardDeployedFit } from './components/ForwardDeployedFit';
import { Capabilities } from './components/Capabilities';
import { ServiceStack } from './components/ServiceStack';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { ReadingPathPage } from './components/ReadingPathPage';
import { FieldNotesArchivePage } from './components/FieldNotesArchivePage';
import { FieldNotePage } from './components/FieldNotePage';
import { AtmosphereOverlay } from './components/atmosphere/AtmosphereOverlay';
import { SyntheticFoundryV2Page } from './components/SyntheticFoundryV2Page';
import { AlgonquinDashboardV2Page } from './components/AlgonquinDashboardV2Page';
import { BlockchainBrawlersV2Page } from './components/BlockchainBrawlersV2Page';
import { MarketCommandV2Page } from './components/MarketCommandV2Page';
import { BrawlerMindV2Page } from './components/BrawlerMindV2Page';
import { ContactPage } from './components/ContactPage';
import { ServiceStackPage } from './components/ServiceStackPage';
import { BriefingPage } from './components/BriefingPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative max-w-full overflow-x-hidden p-4 sm:p-6">
      <TopBar className="max-w-[1180px]" />
      <main className="flex-grow flex flex-col w-full max-w-[1180px] mx-auto space-y-8 min-w-0">
        <Hero />
        <CaseFiles />
        <ForwardDeployedFit />
        <Capabilities />
        <ServiceStack />
        <FieldNotes />
      </main>
      <Footer className="max-w-[1180px]" />
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    if (hash) {
      const scrollToHash = () => {
        const targetId = decodeURIComponent(hash.slice(1));
        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView({ block: 'start', behavior: 'instant' });
        }
      };

      scrollToHash();
      const frame = window.requestAnimationFrame(scrollToHash);

      return () => window.cancelAnimationFrame(frame);
    }

    scrollToTop();
    const frame = window.requestAnimationFrame(scrollToTop);

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-brand-machine-synthetic-foundry-v2" element={<SyntheticFoundryV2Page />} />
        <Route path="/algonquin-dashboard-v2" element={<AlgonquinDashboardV2Page />} />
        <Route path="/market-command-v2" element={<MarketCommandV2Page />} />
        <Route path="/blockchain-brawlers-v2" element={<BlockchainBrawlersV2Page />} />
        <Route path="/trading-journey-brawler-mind-v2" element={<BrawlerMindV2Page />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/briefing" element={<BriefingPage />} />
        <Route path="/services" element={<ServiceStackPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/reading-path" element={<ReadingPathPage />} />
        <Route path="/field-notes" element={<FieldNotesArchivePage />} />
        <Route path="/field-notes/:slug" element={<FieldNotePage />} />
      </Routes>
      <AtmosphereOverlay />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
