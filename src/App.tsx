import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { FieldNotes } from './components/FieldNotes';
import { CaseFiles } from './components/CaseFiles';
import { OperationalDoctrine } from './components/OperationalDoctrine';
import { Footer } from './components/Footer';
import { CaseStudyPage } from './components/CaseStudyPage';
import { AboutPage } from './components/AboutPage';
import { AtmosphereOverlay } from './components/atmosphere/AtmosphereOverlay';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative p-6">
      <TopBar />
      <main className="flex-grow flex flex-col w-full max-w-5xl mx-auto space-y-8">
        <Hero />
        <FieldNotes />
        <CaseFiles />
        <OperationalDoctrine />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case/:slug" element={<CaseStudyPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <AtmosphereOverlay />
    </>
  );
}
