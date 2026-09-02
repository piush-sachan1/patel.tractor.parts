import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy load below-the-fold components
const AboutSection = lazy(() => import('./components/AboutSection').then(m => ({ default: m.AboutSection })));
const FeaturedProducts = lazy(() => import('./components/FeaturedProducts').then(m => ({ default: m.FeaturedProducts })));
const SpecialtiesSection = lazy(() => import('./components/SpecialtiesSection').then(m => ({ default: m.SpecialtiesSection })));
const WhyChooseUsSection = lazy(() => import('./components/WhyChooseUsSection').then(m => ({ default: m.WhyChooseUsSection })));
const QuickInquiry = lazy(() => import('./components/QuickInquiry').then(m => ({ default: m.QuickInquiry })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const FloatingActions = lazy(() => import('./components/FloatingActions').then(m => ({ default: m.FloatingActions })));

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <Suspense fallback={<div className="py-20 text-center text-slate-500 font-mono text-sm uppercase tracking-widest">Loading Inventory...</div>}>
          <AboutSection />
          <FeaturedProducts />
          <SpecialtiesSection />
          <WhyChooseUsSection />
          <QuickInquiry />
          <ContactSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <FloatingActions />
      </Suspense>
    </div>
  );
}