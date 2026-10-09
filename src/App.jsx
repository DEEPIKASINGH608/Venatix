import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import FeaturedSection from './components/sections/FeaturedSection';
import GallerySection from './components/sections/GallerySection';
import WhyChooseUs from './components/sections/WhyChooseUs';
import HowItWorks from './components/sections/HowItWorks';
import ContactSection from './components/sections/ContactSection';
import LocationSection from './components/sections/LocationSection';
import CtaSection from './components/sections/CtaSection';
import Footer from './components/layout/Footer';
import FloatingWhatsapp from './components/ui/FloatingWhatsapp';
import QuickActionBar from './components/layout/QuickActionBar';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-gray-900 font-devanagari flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <FeaturedSection />
        <GallerySection />
        <WhyChooseUs />
        <HowItWorks />
        <ContactSection />
        <LocationSection />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
      <QuickActionBar />
    </div>
  );
}
